# Portfolio

Personal portfolio website showcasing cloud infrastructure, DevOps, backend development, and engineering projects.

**Live website:** https://sinanerbezci.com

## Featured project

[BookClub](https://github.com/SinanErbezci/bookclub) is a cloud-native book discovery application built with Django REST Framework, React, PostgreSQL, and AI-powered semantic search. The [v1.6.0 release](https://github.com/SinanErbezci/bookclub/releases/tag/v1.6.0) includes Amazon EKS, Terraform infrastructure, Argo CD GitOps deployments, CI/CD testing, Prometheus, and Grafana.

The BookClub frontend remains online, but its AWS backend runs on demand to limit infrastructure costs.

## Tech stack

- React 19, TypeScript, Vite, CSS Modules, and Bootstrap
- Static frontend hosting with Amazon S3 and CloudFront
- Terraform-managed hosting infrastructure and ACM TLS certificates
- GitHub Actions CI/CD with AWS OIDC authentication

## Local development

Requires Node.js 22 and npm.

```bash
npm ci
npm run dev
```

To validate a change:

```bash
npm run lint
npm run build
```

## Deployment

Merging to `main` triggers [Deploy Portfolio](.github/workflows/deploy.yml), which builds the Vite site, includes the [CS50x idle game](https://github.com/SinanErbezci/cs50x_final), synchronizes the build to S3, and invalidates CloudFront.

Pull requests are validated by [Portfolio CI](.github/workflows/ci.yml).

### Updating the resume PDF

The Resume link in the hero section serves `public/sinan-erbezci-cv.pdf`. Replace that file with the latest version before deployment. The workflow uploads the resume with `Cache-Control: no-cache` so visitors receive the current document.

## Project structure

- `src/data/profile.ts`: hero introduction
- `src/data/projects.ts`: project descriptions and skills
- `src/sections/`: page sections and associated CSS Modules
- `public/`: resume, favicon, and social preview image
- `terraform/`: S3, CloudFront, ACM, and IAM resources
