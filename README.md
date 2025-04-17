# Volcode
Volcode is a high-performance, modular portfolio template for devevelopers.

It improves setup efficiency and simplifies maintenance, helping developers showcase their work with minimal effort.

## Infastructure
| Layer | Tool(s) | Purpose |
|-------|---------|---------|
| Hosting | AWS S3 + CloudFront | Serve static assets securely |
| Access Control | IAM + CloudFront signed URLs / HTTP Basic Auth | Restrict access to staging |
| IaC | Terraform | Provision S3, CloudFront, IAM |
| CI/CD | GitHub Actions | Automate deployment from staging branch |

### High Level Architecture

#### Diagram
``` 
┌───────────────────┐           ┌───────────────────────┐
│ Namecheap DNS     │           │ AWS Certificate       │
│ • CNAME records   │◀───┐      │ Manager (ACM public)  │
└───────────────────┘    │      │ • Certificates for    │
                         │      │   volcode.org &       │
                         │      │   staging.volcode.org │
                         │      └───────────────────────┘
                         │
                         │      ┌───────────────────────┐
                         └─────▶│ Terraform‑provisioned │
                                │ S3 + CloudFront       │
                                │ • Private S3 buckets  │
                                │ • 2 CloudFront distros │
                                │   (prod + staging)    │
                                │ • Attach ACM cert     │
                                └───────────────────────┘
                                         ▲
                                         │
                         ┌───────────────┴───────────────┐
                         │ GitHub Actions (CI/CD)       │
                         │ • main → prod S3/CF distro   │
                         │ • staging → staging S3/CF    │
                         │ • Cache invalidation         │
                         └───────────────────────────────┘
```

#### Objectives
* Deploy `staging` branch to a secure S3 bucket
* Serve it via CloudFront (for HTTPS + performance)
* Restrict access (IAM, OAI, or signed URLs)
* Use Terraform to manage all infra
* Automate deployments from GitHub Actions

##### Terraform
Provision the following resources:
| Resource | Purpose |
|----------|---------|
| aws_s3_bucket | Host static website for staging |
| aws_cloudfront_distribution | Serve via CDN with HTTPS |
| aws_iam_user + aws_iam_policy | Push permission for CI |
| aws_s3_bucket_policy | Restrict access via OAI or signed URLs |
| (Optional) aws_secretsmanager_secret | Store credentials for GitHub Actions |

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
