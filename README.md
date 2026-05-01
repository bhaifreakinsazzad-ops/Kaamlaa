# Kaamlaa Takeover Baseline

Recovered, non-empty source baseline for the live Kaamlaa platform on May 1, 2026.

## What This Restores

- Next.js App Router source for core public routes:
  - `/`
  - `/marketplace`
  - `/pricing`
  - `/agents`
  - `/agents/haamoodee`
  - `/agents/karrent-claw`
  - `/agents/moosafeer`
  - `/how-it-works`
  - `/contact`
  - `/login`
  - `/register`
- Protected route behavior baseline for:
  - `/dashboard` -> redirects to `/login?callbackUrl=%2Fdashboard` when unauthenticated
- Auth surface via NextAuth route handlers:
  - `/api/auth/*`
- SEO baseline:
  - `app/robots.ts`
  - `app/sitemap.ts`

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Create local env:

```bash
cp .env.example .env.local
```

3. Set secure values in `.env.local`:
  - `AUTH_SECRET`
  - `NEXTAUTH_URL`
  - `DEMO_AUTH_EMAIL`
  - `DEMO_AUTH_PASSWORD`

4. Start dev server:

```bash
npm run dev
```

## Auth Notes

- This baseline uses NextAuth Credentials provider to preserve `/api/auth/*` behavior and guarded page redirects.
- Demo credentials are configured through env vars for takeover validation.

## Deployment Notes

- This repo is intended to become the canonical source for Kaamlaa once Vercel scope access is reconnected.
- See [docs/TAKEOVER_RUNBOOK.md](docs/TAKEOVER_RUNBOOK.md) for control-transfer checkpoints, env inventory, and rollback process.
- Use [docs/VERCEL_RECONNECT_CHECKLIST.md](docs/VERCEL_RECONNECT_CHECKLIST.md) to complete Vercel ownership reconnection.
