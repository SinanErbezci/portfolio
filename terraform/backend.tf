terraform {
  backend "s3" {
    bucket = "sinan-bookclub-terraform-state"
    key    = "portfolio/terraform.tfstate"
    region = "eu-west-3"

    use_lockfile = true
    encrypt      = true
  }
}