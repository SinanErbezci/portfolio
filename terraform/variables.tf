variable "aws_region" {
  description = "AWS region for portfolio resources"
  type        = string
  default     = "eu-west-3"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
}

variable "bucket_name" {
  description = "S3 bucket name"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "github_owner" {
  description = "GitHub owner"
  type        = string
}

variable "github_repository" {
  description = "GitHub repository"
  type        = string
}