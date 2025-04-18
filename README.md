# Free Developer Portfolio Template

A high-performance, cloud-optimized portfolio template for developers built with Vue 3, Nuxt, and AWS infrastructure. Designed for easy customization and rapid deployment.

- [Features](#features)
- [Customization Guide](#customization-guide)
- [Explanation for Developers](#explanation-for-developers)
- [Setup](#setup)
- [Development Server](#development-server)
- [Production](#production)

This template helps developers showcase their work with minimal effort through:

✅ Modular component design
✅ Ready-to-deploy AWS infrastructure (S3/CloudFront)
✅ Built-in performance optimizations
✅ Staging/production environment separation
✅ Complete Terraform configuration
✅ GitHub Actions for CI/CD

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

Build the application for production:

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

## Deployment

### First-Time Setup

1. Set up AWS credentials locally or in your CI/CD environment
2. Configure your domain settings in `terraform/variables.tf`
3. Initialize Terraform: `cd terraform && terraform init`
4. Apply infrastructure: `terraform apply`

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
