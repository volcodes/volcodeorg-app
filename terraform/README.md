# Infrastructure Architecture - volcode.org

## Overview

This document outlines the cloud infrastructure architecture powering the [volcode.org](https://www.volcode.org) platform. The system is designed with a focus on scalability, security, and maintainable deployment processes.

- [Setup Guide](#setup-guide)
  - [Prerequisites](#prerequisites)
  - [Initial Setup](#initial-setup)
  - [Environment Variables](#environment-variables)
  - [Important Notes](#important-notes)
- [Architecture Diagram](#architecture-diagram)
- [Core Infrastructure Components](#core-infrastructure-components)
- [CI/CD Pipeline](#ci/cd-pipeline)

## Setup Guide

### Prerequisites
- AWS CLI configured with appropriate credentials on your local machine.
  - See [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  - See [AWS CLI Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
  - See [AWS Toolkit Extension for VS Code](https://aws.amazon.com/visualstudiocode/)
- Terraform `v1.0.0` or later
- AWS account with necessary permissions for:
  - S3
  - CloudFront
  - ACM (Certificate Manager)
  - IAM
You can reach out to me on [LinkedIn](https://www.linkedin.com/in/deveci96/) if you need help setting up your AWS CLI or permissions. I can provide a list of permissions that you can use to setup your AWS CLI.

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/volcodeorg-app.git
   cd volcodeorg-app/terraform
   ```

2. Initialize Terraform:
   ```bash
   terraform init
   ```

3. Create a workspace (optional, defaults to 'default'):
   ```bash
   terraform workspace new staging  # For staging environment
   terraform workspace new prod     # For production environment
   ```

4. Review and apply the configuration:
   ```bash
   terraform plan
   terraform apply
   ```

### Environment Variables
The following variables are used in the configuration:
- `domains`: List of domains to be configured (default: ["volcode.org", "staging.volcode.org"])

### Important Notes
- The infrastructure uses AWS ACM for SSL certificates, which requires DNS validation.
- CloudFront distributions are created in us-east-1 region as required by AWS Certificate Manager for SSL certificate validation.
- S3 buckets are created in your default region.  
- Root domain (volcode.org) automatically redirects to `www.volcode.org`.

## Architecture Diagram

<img src="https://www.mermaidchart.com/raw/c92150a0-4cb3-4701-a571-41ad750491e8?theme=light&version=v0.1&format=svg" width="80%" />

## Core Infrastructure Components

### Content Delivery Network (CDN)

**Amazon CloudFront** is used as the CDN to deliver content with low latency across global edge locations.

<details>
<summary><strong>Configuration Highlights</strong></summary>

- Custom security policy (TLSv1.2_2021)
- HTTP/2 and HTTP/3 support
- Default root object: index.html
- Custom origins for staging and production environments

</details>

### SSL/TLS Security

**AWS Certificate Manager (ACM)** provides SSL/TLS certificates.

<details>
<summary><strong>Configuration Highlights</strong></summary>

  - Single certificate covering multiple domains:
    - volcode.org
    - www.volcode.org
    - staging.volcode.org
  - DNS validation method
  - Automatic renewal

</details>

### Domain Management

External DNS provider (Namecheap) with the following configuration:

- **Primary domains:**
  - volcode.org (production)
  - www.volcode.org (production)
  - staging.volcode.org (staging)
- **DNS Records:**
  - CNAME records pointing to CloudFront distributions
  - Certificate validation records
  - Additional service records as needed

### Content Storage

**Amazon S3** for static content hosting.

<details>
<summary><strong>Configuration Highlights</strong></summary>

- Private buckets with CloudFront Origin Access Identity (OAI)
- Versioned objects for rollback capability
- Structured content organization

</details>

## CI/CD Pipeline

### GitHub Actions Workflow

Automated deployment pipeline with environment-specific configurations:

```yaml
# Simplified workflow representation
name: Deploy Website

on:
  push:
    branches: [main, staging]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set environment variables
        run: |
          if [[ $GITHUB_REF == 'refs/heads/main' ]]; then
            echo "NUXT_PUBLIC_IS_STAGING=false" >> $GITHUB_ENV
          else
            echo "NUXT_PUBLIC_IS_STAGING=true" >> $GITHUB_ENV
          fi
      
      # Build and deployment steps follow...
```

- **Environment Detection:**
  - Production: Triggered by `main` branch
  - Staging: Triggered by `staging` branch
- **Build Process:**
  - Environment-specific configurations
  - Optimized assets
  - Proper cache invalidation

## Environment Separation

### Production Environment

- **Domains:** volcode.org, www.volcode.org
- **Features:**
  - Search engine indexing enabled
  - Production-optimized caching policies
  - Full CDN capabilities

### Staging Environment

- **Domain:** staging.volcode.org
- **Features:**
  - Search engine indexing disabled via robots configuration
  - Reduced cache TTLs for testing
  - Same infrastructure as production for accurate testing

## Security Measures

- **HTTPS Enforcement:** All traffic encrypted via HTTPS
- **Modern TLS:** TLSv1.2_2021 security policy
- **Access Control:** S3 buckets not publicly accessible
- **Origin Protection:** CloudFront OAI/OAC for S3 access
- **Headers Management:** Security headers set via CloudFront response headers policy

## Monitoring and Logging

- **CloudFront Logs:** Detailed access logs for performance analysis
- **CloudWatch Metrics:** Performance monitoring
- **Error Tracking:** Client-side and infrastructure error monitoring

## Future Enhancements

Planned infrastructure improvements:

1. **Edge Functions:** CloudFront Functions for request/response manipulation
2. **WAF Integration:** Web Application Firewall for enhanced security
3. **Lambda@Edge:** For dynamic content customization
4. **Regional Failover:** Multi-region setup for high availability

## Technologies Used

- **AWS Services:** CloudFront, S3, ACM
- **CI/CD:** GitHub Actions
- **Frontend:** Nuxt.js, Vue.js
- **Build Tools:** Vite, Webpack
- **Infrastructure as Code:** Terraform 