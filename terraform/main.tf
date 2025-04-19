# 1) S3 buckets (one per domain)
resource "aws_s3_bucket" "site" {
  for_each = toset(var.domains)
  bucket   = "volcode-${each.key}-${terraform.workspace}"
}

resource "aws_s3_bucket_ownership_controls" "site" {
  for_each = aws_s3_bucket.site
  bucket   = each.value.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "site" {
  for_each = aws_s3_bucket.site
  bucket   = each.value.id

  # For staging environments, block all public access
  # For production (volcode.org), allow public access
  block_public_acls       = each.key == "staging.volcode.org"
  block_public_policy     = each.key == "staging.volcode.org"
  ignore_public_acls      = each.key == "staging.volcode.org"
  restrict_public_buckets = each.key == "staging.volcode.org"
}

resource "aws_s3_bucket_website_configuration" "site" {
  for_each = aws_s3_bucket.site
  bucket   = each.value.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"  # Important: Route all errors to index.html
  }
}

# 2) OAI + bucket policy
resource "aws_cloudfront_origin_access_identity" "oai" {
  for_each = toset(var.domains)
  comment  = "OAI for ${each.key}"
}

resource "aws_s3_bucket_policy" "policy" {
  for_each = aws_s3_bucket.site
  bucket   = each.value.id
  policy   = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { AWS = aws_cloudfront_origin_access_identity.oai[each.key].iam_arn }
      Action    = "s3:GetObject"
      Resource  = "${each.value.arn}/*"
    }]
  })
}

# 3) CloudFront distributions
resource "aws_cloudfront_distribution" "dist" {
  for_each = toset(var.domains)
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CF for ${each.key}"
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.site[each.key].bucket_regional_domain_name
    origin_id   = "S3-${each.key}"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai[each.key].cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id       = "S3-${each.key}"
    viewer_protocol_policy = "redirect-to-https"

    # Allow all HTTP methods if needed
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    
    # Forward headers and cookies if your app needs them
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
      headers = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
    }

    # Optimize caching for SPA
    min_ttl                = 0
    default_ttl            = 3600  # 1 hour for default caching
    max_ttl                = 86400 # 24 hours max
  }
  
  aliases = each.key == "volcode.org" ? ["volcode.org", "www.volcode.org"] : ["staging.volcode.org"]

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  tags = { Environment = each.key == "volcode.org" ? "prod" : "staging" }

  depends_on = [aws_acm_certificate_validation.site]
}

# 4) ACM Certificate
resource "aws_acm_certificate" "site" {
  domain_name       = "volcode.org"
  validation_method = "DNS"
  provider          = aws.us-east-1

  # Ensuring all domains are covered: volcode.org, www.volcode.org, and staging.volcode.org
  subject_alternative_names = ["www.volcode.org", "staging.volcode.org"]

  lifecycle {
    create_before_destroy = true
  }
}

# ACM Certificate Validation
resource "aws_acm_certificate_validation" "site" {
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in aws_acm_certificate.site.domain_validation_options : record.resource_record_name]
  provider               = aws.us-east-1
}