resource "aws_cloudfront_origin_access_control" "portfolio" {
  name                              = "portfolio-origin"
  description                       = "OAC for ${var.bucket_name}"
  origin_access_control_origin_type = "s3"

  signing_behavior = "always"
  signing_protocol = "sigv4"
}

resource "aws_cloudfront_distribution" "portfolio" {

  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  default_root_object = "index.html"

  aliases = [
    var.domain_name,
    "www.${var.domain_name}"
  ]

  price_class = "PriceClass_100"

  origin {

    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name

    origin_id = "portfolio-origin"

    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio.id
  }

  default_cache_behavior {

    target_origin_id           = "portfolio-origin"
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    viewer_protocol_policy     = "redirect-to-https"

    allowed_methods = [
      "GET",
      "HEAD",
    ]

    cached_methods = [
      "GET",
      "HEAD",
    ]

    compress = true

    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"

    function_association {
      event_type = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {

    acm_certificate_arn = aws_acm_certificate_validation.cloudfront.certificate_arn

    ssl_support_method = "sni-only"

    minimum_protocol_version = "TLSv1.2_2021"
  }
  tags = merge(local.common_tags, {
    Name = "portfolio-cloudfront"
  })
}

resource "aws_cloudfront_function" "url_rewrite" {
  name    = "portfolio-url-rewrite"
  runtime = "cloudfront-js-2.0"
  publish = true

  code = file("${path.module}/cloudfront-function.js")
}