# Volcode

A high-performance, cloud-optimized portfolio template for developers built with Vue 3, Nuxt, and AWS infrastructure. Designed for easy customization and rapid deployment.

```
Volcode helps developers showcase their work with minimal effort through:

✅ Modular component design
✅ Ready-to-deploy AWS infrastructure (S3/CloudFront)
✅ Built-in performance optimizations
✅ Staging/production environment separation
✅ Complete Terraform configuration
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

## Explanation for Developers
I've completely revamped the README to serve as a comprehensive guide for developers who want to use and customize the Volcode portfolio template. Here's why I structured it this way:
### 1. Clear Value Proposition (Top Section)
The new intro immediately communicates what Volcode is, what technologies it uses, and its key benefits. This helps developers quickly determine if it's the right tool for their needs.
### 2. Feature Breakdown
I've included a detailed feature list that highlights the technical advantages of using Volcode. This shows both the frontend and infrastructure capabilities, making it appealing to fullstack developers.
### 3. Customization-Focused Structure
Since you specifically asked for a guide that helps developers "setup and change the content," I've made customization a primary focus:
- Content Structure section: Shows exactly which files to edit for each main section
- Theme Colors section: Provides the path and example of how to modify the color scheme
- Image Assets section: Explains where and how to replace images
### 4. Infrastructure Section
I've maintained your existing infrastructure section but added context around it. This creates a clear bridge between the frontend and backend aspects of the project.
### 5. Enhanced Setup & Development Instructions
The setup and development server instructions were preserved but organized more clearly.
### 6. Deployment Instructions
I've added detailed deployment instructions in two parts:
- First-time setup: Clear steps for initial infrastructure provisioning
- Ongoing deployments: Simple explanation of the branch-based deployment workflow
### 7. Performance Tips
Since performance optimization is a key selling point of Volcode, I've highlighted the specific performance techniques you've implemented. This serves as both documentation and showcases your technical expertise.
### 8. Troubleshooting
The troubleshooting section addresses the common issues we discussed earlier (CSS backgrounds, form submissions, SSL certificates) to help developers avoid these pitfalls.
This README now serves as both:
- A marketing tool to showcase the value of Volcode
- A practical guide to help developers get started quickly
- A reference for customization and troubleshooting
Developers will appreciate the comprehensive yet straightforward documentation that helps them understand both what they can achieve with Volcode and how to implement their specific customizations.

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
