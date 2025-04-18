# Free Developer Portfolio Template

A high-performance, cloud-optimized portfolio template for developers built with Vue 3, Nuxt, and AWS infrastructure. You can deploy it to any custom domain under 30 minutes with AWS for free. Designed for easy customization and rapid deployment.

- [Setup](#setup)
- [Development Server](#development-server)
- [Production](#production)
- [Features](#features)
- [Customization Guide](#customization-guide)
- [Infrastructure](#infrastructure)
- [Deployment](#deployment)
- [Performance Tips](#performance-tips)
- [Troubleshooting](#troubleshooting)
- [License](#license)

This template can help you showcase your work with minimal effort through:

✅ Modular component design
✅ Ready-to-deploy AWS infrastructure (S3/CloudFront 100% free tier)
✅ Built-in performance optimizations
✅ Staging/production environment separation
✅ Complete Hands-On Terraform configuration
✅ GitHub Actions for CI/CD


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production
The production build is automated with GitHub Actions. You can push to the `main` branch and it will automatically deploy to the production environment.

If you want to build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Features

- **Modern Stack**: Vue 3, Nuxt, TypeScript, and SCSS
- **Performance-First**: Optimized for Google Core Web Vitals
- **Cloud-Ready**: AWS S3 and CloudFront architecture with Terraform
- **Multi-Environment**: Separate staging and production setups
- **CI/CD Pipeline**: GitHub Actions for automated deployments
- **Responsive Design**: Works seamlessly across all devices
- **Customizable Sections**: Easy-to-modify content structure
- **SEO Optimized**: Built-in meta tags and sitemap configuration

## Customization Guide

Volcode is designed to be easily customized without deep Vue knowledge:

### 1. Content Structure

- **Hero Section**: Edit `components/AppHero.vue`
- **Projects**: Modify `pages/projects.vue`
- **Experience**: Update `pages/experience.vue`
- **Achievements**: Manage `components/AppAchievements.vue`

### 2. Theme Colors

Update the color scheme in `assets/styles/colors.scss`:

```scss
$darkBlue: #0c0f20;
$navyBlue: #020617;
$cta: #2bcc69;
// More color variables...
```

### 3. Image Assets

Replace images in the `public/assets/imgs/` directory. Important images include:
- `og-image.jpg` - Open Graph preview image
- `performance-bg.jpg` - Achievement background
- Other project-specific images

## Infrastructure

This project is powered by a modern cloud architecture designed for scalability, security, and performance. Key features:

- **Global CDN:** CloudFront distribution for low-latency content delivery
- **Secure by Default:** HTTPS-only with modern TLS policies
- **Environment Separation:** Distinct production and staging environments
- **Automated Deployments:** CI/CD pipeline via GitHub Actions
- **Infrastructure as Code:** Terraform-managed AWS resources

📑 [View complete infrastructure documentation](./INFRASTRUCTURE.md)

## Deployment

### First-Time Setup

1. Set up AWS credentials locally or in your CI/CD environment
2. Configure your domain settings in `terraform/variables.tf`
3. Initialize Terraform: `cd terraform && terraform init`
4. Apply infrastructure: `terraform apply`

### AWS Setup

To properly configure your AWS environment for this project:

1. **AWS Account**: Create an AWS account if you don't already have one
2. **IAM User**: Create an IAM user with programmatic access and appropriate permissions:
   - S3 full access
   - CloudFront full access
   - Route53 access (if using AWS for DNS)
   - ACM (Certificate Manager) for SSL certificates
3. **Access Keys**: Generate access keys for the IAM user and securely store them
4. **GitHub Secrets**: Add your AWS credentials as secrets in your GitHub repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`

For detailed instructions on setting up GitHub Actions with these AWS credentials, refer to our comprehensive guide:
[GitHub Actions AWS Setup Documentation](https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-amazon-elastic-container-service)

### Ongoing Deployments

Push to the appropriate branch:
- `main` → Production (volcode.org)
- `staging` → Staging (staging.volcode.org)

GitHub Actions will automatically build and deploy to the correct environment.

## Performance Tips

Volcode includes several performance optimizations:

1. **Delayed Box Rendering**: Background elements load after critical content
2. **Lazy-Loaded Modals**: Content-heavy modals only render when needed
3. **Image Optimization**: All images use modern formats and proper sizing
4. **CSS Containment**: Layout optimizations reduce paint operations
5. **Will-Change Properties**: Smooth animations with GPU acceleration

## Troubleshooting

### Common Issues

- **CSS Background Images Not Working**: Ensure paths use `@/assets/` format
- **Form Submissions on Static Hosting**: Implement a serverless function endpoint
- **SSL Certificate Issues**: Follow ACM validation steps in the infrastructure docs

### Getting Help

If you encounter issues, please [open an issue](https://github.com/your-username/volcode/issues) with:

1. A clear description of the problem
2. Steps to reproduce
3. Expected behavior
4. Environment details (browser, device, etc.)

## License

MIT
