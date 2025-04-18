# Volcode
Volcode is a high-performance, modular portfolio template for devevelopers.

It improves setup efficiency and simplifies maintenance, helping developers showcase their work with minimal effort.

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
