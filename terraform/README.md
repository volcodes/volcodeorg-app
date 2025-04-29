# Infrastructure Architecture - volcode.org

## Overview

This document outlines the cloud infrastructure architecture powering the volcode.org platform. The system is designed with a focus on scalability, security, and maintainable deployment processes.

## Architecture Diagram

<img src="https://www.mermaidchart.com/raw/c92150a0-4cb3-4701-a571-41ad750491e8?theme=light&version=v0.1&format=svg" />

Here is the diagram of the infrastructure: https://excalidraw.com/#json=RpZ0T5JNBBtsP6Rrcn749,Lo8DQ0k6rPyy76kN0QHHUg

## Core Infrastructure Components

### Content Delivery Network (CDN)

**Amazon CloudFront** is used as the CDN to deliver content with low latency across global edge locations:

- **Configuration Highlights:**
  - Custom security policy (TLSv1.2_2021)
  - HTTP/2 and HTTP/3 support
  - Default root object: index.html
  - Custom origins for staging and production environments

### SSL/TLS Security

**AWS Certificate Manager (ACM)** provides SSL/TLS certificates:

- Single certificate covering multiple domains:
  - volcode.org
  - www.volcode.org
  - staging.volcode.org
- DNS validation method
- Automatic renewal

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

**Amazon S3** for static content hosting:

- Private buckets with CloudFront Origin Access Identity (OAI)
- Versioned objects for rollback capability
- Structured content organization

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
  - Production: Triggered by main branch
  - Staging: Triggered by staging branch
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

- **AWS Services:** CloudFront, S3, ACM, Route 53 (optional)
- **CI/CD:** GitHub Actions
- **Frontend:** Nuxt.js, Vue.js
- **Build Tools:** Vite, Webpack
- **Infrastructure as Code:** Terraform 