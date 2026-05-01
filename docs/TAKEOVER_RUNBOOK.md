# Kaamlaa Takeover Runbook (May 2, 2026)

## Current Control Status

- Canonical live product: `https://kaamlaa.shop`.
- Vercel scope access: confirmed under team `dhandabuzz` using Vercel CLI.
- Target Vercel project: `hamoodee` (`prj_fPlQVejVTeguAaWG2KW9gBgbbps0`).
- GitHub repo: `https://github.com/bhaifreakinsazzad-ops/Kaamlaa` is linked and writable.
- Production branch: `main`.

## Production Deployment State

- Current production deployment:
  - `https://hamoodee-rc38q158s-dhandabuzz.vercel.app`
  - deployment id: `dpl_8nsqXJ84iZqGuMj59aAXH7McZyPq`
  - status: `Ready`
- Domain aliases confirmed on current production:
  - `https://kaamlaa.shop`
  - `https://www.kaamlaa.shop`

## Route Contract Baseline

The following public routes are verified `200` on production:

- `/`
- `/marketplace`
- `/pricing`
- `/agents`
- `/agents/haamoodee`
- `/login`
- `/register`
- `/how-it-works`
- `/contact`
- `/robots.txt`
- `/sitemap.xml`

Protected behavior preserved:

- `/dashboard` returns `307` redirect to `/login?callbackUrl=%2Fdashboard`.

## Auth Surface

Preserved endpoint family:

- `/api/auth/*` (NextAuth handler).

## Environment Variable Inventory (Names Only)

Captured from production-linked Vercel project:

- `AUTH_SECRET`
- `DATABASE_URL`
- `DATABASE_URL_UNPOOLED`
- `EMAIL_FROM`
- `NEON_PROJECT_ID`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXTAUTH_URL`
- `PGDATABASE`
- `PGHOST`
- `PGHOST_UNPOOLED`
- `PGPASSWORD`
- `PGUSER`
- `POSTGRES_DATABASE`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `RESEND_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `VERCEL_OIDC_TOKEN`

## Git and Deploy Hardening Applied

- Added `vercel.json` to enforce stable build behavior:
  - install command: `npm install --legacy-peer-deps`
  - build command: `npm run build`
- Pushed commits on `main`:
  - `548da3b` recover baseline app + runbook
  - `04c345c` route metadata parity alignment
  - `18c5ad6` fix Vercel build command (remove Prisma-only build dependency)
  - `50091db` ignore local `.vercel` folder
- Verified Git-triggered deploy uses `npm run build` and completes successfully.

## Rollback-Safe Release Flow

1. Identify current production deployment id using `vercel list hamoodee --scope dhandabuzz`.
2. Validate new deployment on its preview URL before alias cutover.
3. Confirm smoke checks:
   - public route `200`s
   - auth redirect behavior for `/dashboard`
4. Roll back if needed by re-aliasing to previous ready deployment.

### Current rollback references

- Current deployment: `dpl_8nsqXJ84iZqGuMj59aAXH7McZyPq`
- Previous ready deployment: `dpl_Fsh57vCZMihWfHKTgJa7EMATjfJm`
