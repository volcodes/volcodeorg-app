output "cloudfront_urls" {
  description = "CloudFront distribution URLs for each domain"
  value = {
    "volcode.org" = aws_cloudfront_distribution.dist["volcode.org"].domain_name
    "volcode.org_id" = aws_cloudfront_distribution.dist["volcode.org"].id
    "staging.volcode.org" = aws_cloudfront_distribution.dist["staging.volcode.org"].domain_name
    "staging.volcode.org_id" = aws_cloudfront_distribution.dist["staging.volcode.org"].id
  }
} 