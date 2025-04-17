output "cloudfront_urls" {
  value = { for d, c in aws_cloudfront_distribution.dist : d => c.domain_name }
}