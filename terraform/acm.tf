resource "aws_acm_certificate" "cloudfront" {
  provider = aws.us_east_1

  domain_name = var.domain_name
  subject_alternative_names = [
    "www.${var.domain_name}"
  ]

  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = local.common_tags
}

resource "aws_acm_certificate_validation" "cloudfront" {
  provider = aws.us_east_1

  certificate_arn = aws_acm_certificate.cloudfront.arn

  validation_record_fqdns = [
    for record in aws_acm_certificate.cloudfront.domain_validation_options :
    record.resource_record_name
  ]
}