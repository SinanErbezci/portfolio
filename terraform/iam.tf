data "aws_iam_policy_document" "github_assume_role" {
  statement {
    effect = "Allow"

    actions = [
      "sts:AssumeRoleWithWebIdentity"
    ]

    principals {
      type = "Federated"
      identifiers = [
        "arn:aws:iam::796973519136:oidc-provider/token.actions.githubusercontent.com"
      ]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"

      values = [
        "sts.amazonaws.com"
      ]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"

      values = [
        "repo:${var.github_owner}/${var.github_repository}:*"
      ]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name = "portfolio-github-actions"

  assume_role_policy = data.aws_iam_policy_document.github_assume_role.json

  tags = local.common_tags
}

data "aws_iam_policy_document" "deploy" {

  statement {

    actions = [
      "s3:ListBucket"
    ]

    resources = [
      aws_s3_bucket.portfolio.arn
    ]
  }

  statement {

    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject"
    ]

    resources = [
      "${aws_s3_bucket.portfolio.arn}/*"
    ]
  }

  statement {

    actions = [
      "cloudfront:CreateInvalidation"
    ]

    resources = [
      aws_cloudfront_distribution.portfolio.arn
    ]
  }
}

resource "aws_iam_policy" "deploy" {
  name   = "portfolio-deploy"
  policy = data.aws_iam_policy_document.deploy.json
}

resource "aws_iam_role_policy_attachment" "deploy" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.deploy.arn
}