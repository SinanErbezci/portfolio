output "bucket_name" {
  value = aws_s3_bucket.portfolio.bucket
}

output "bucket_arn" {
  value = aws_s3_bucket.portfolio.arn
}

output "bucket_regional_domain_name" {
  value = aws_s3_bucket.portfolio.bucket_regional_domain_name
}

output "cloudfront_certificate_arn" {
  description = "ARN of the CloudFront ACM certificate"
  value       = aws_acm_certificate_validation.cloudfront.certificate_arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.portfolio.id
}