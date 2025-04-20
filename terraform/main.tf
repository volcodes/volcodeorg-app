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
  for_each = toset(var.domains)
  bucket   = aws_s3_bucket.site[each.key].bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"  # Use a dedicated error page instead of index.html
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
    
    # Add default function association for SPA path handling
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_request[each.key].arn
    }
  }
  
  aliases = each.key == "volcode.org" ? ["www.volcode.org"] : ["staging.volcode.org"]

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

  # Uncomment custom error responses - these are necessary for SPA routing
  /*
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
  */

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

# Add Root Domain Redirect Resources
# 1. S3 bucket for root domain
resource "aws_s3_bucket" "root_redirect" {
  bucket = "volcode.org"
}

# 2. Configure website redirect
resource "aws_s3_bucket_website_configuration" "root_redirect" {
  bucket = aws_s3_bucket.root_redirect.id
  
  redirect_all_requests_to {
    host_name = "www.volcode.org"
    protocol  = "https"
  }
}

# 3. Make bucket public for website access
resource "aws_s3_bucket_public_access_block" "root_redirect" {
  bucket = aws_s3_bucket.root_redirect.id
  
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# 4. Add bucket policy that allows public read
resource "aws_s3_bucket_policy" "root_redirect" {
  bucket = aws_s3_bucket.root_redirect.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "s3:GetObject"
      Effect    = "Allow"
      Resource  = "${aws_s3_bucket.root_redirect.arn}/*"
      Principal = "*"
    }]
  })
}

# 5. CloudFront distribution for root domain
resource "aws_cloudfront_distribution" "root_redirect" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Root domain redirect to www"
  price_class         = "PriceClass_100" # Use cheapest option since it's just for redirect
  
  # Origin configuration for S3 website
  origin {
    domain_name = "${aws_s3_bucket.root_redirect.bucket}.s3-website-${data.aws_region.current.name}.amazonaws.com"
    origin_id   = "S3-Website-Redirect"
    
    # Required for S3 website origins
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"  # S3 websites only support HTTP
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }
  
  # Default cache behavior
  default_cache_behavior {
    target_origin_id       = "S3-Website-Redirect"
    viewer_protocol_policy = "redirect-to-https"  # Force HTTPS

    # Basic settings
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    
    # Cache settings - short TTL since it's just a redirect
    min_ttl                = 0
    default_ttl            = 3600  # 1 hour
    max_ttl                = 86400 # 24 hours
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  
  # Custom domain
  aliases = ["volcode.org"]

  # SSL certificate
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  
  # Geographic restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  # Dependencies
  depends_on = [aws_acm_certificate_validation.site]
}

# Get current region for S3 website endpoint
data "aws_region" "current" {}

# CloudFront function for SPA routing
resource "aws_cloudfront_function" "rewrite_request" {
  for_each = toset(var.domains)
  name    = each.key == "volcode.org" ? "rewrite-request-volcode-prod" : "rewrite-request-volcode-staging"
  runtime = "cloudfront-js-1.0"
  comment = "Handle SPA routing for ${each.key}"
  publish = true
  code    = <<-EOT
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  // Specific route handling for SPA
  if (uri === '/experience' || uri === '/projects' || uri === '/contact') {
    request.uri = uri + '/index.html';
    return request;
  }
  
  // Check if the request is for a file with an extension
  if (uri.match(/\.[a-zA-Z0-9]+$/)) {
    // If it's a file request, don't modify it
    return request;
  }
  
  // Check if requesting a directory (ends with /)
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } 
  // Handle other routes without trailing slashes
  else if (!uri.includes('.')) {
    var dirUri = uri + '/index.html';
    request.uri = dirUri;
  }
  
  return request;
}
EOT
}

# CloudFront invalidation after deployment
resource "null_resource" "invalidate_cache" {
  for_each = toset(var.domains)
  
  triggers = {
    distribution_id = aws_cloudfront_distribution.dist[each.key].id
  }

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.dist[each.key].id} --paths '/*'"
  }

  depends_on = [aws_cloudfront_distribution.dist]
}