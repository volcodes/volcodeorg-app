output "cloudfront_urls" {
  description = "CloudFront distribution URLs and IDs for each domain"
  value = { 
    for d, c in aws_cloudfront_distribution.dist : 
    d => {
      "domain_name" = c.domain_name
      "id" = c.id
    }
  }
}