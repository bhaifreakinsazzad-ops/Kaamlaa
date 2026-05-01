# Kaamlaa Takeover Runbook (May 1, 2026)

## Current Control Status

- GitHub `Kaamlaa` repo: writable and now non-empty.
- Vercel connector scope: blocked in this session (`403` / no visible teams from MCP).
- Live canonical reference: `https://kaamlaa.shop`.

## Route Contract Baseline

Recovered routes preserved:

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
- `/dashboard` (auth-gated redirect behavior)

## Auth Surface

Preserved endpoint family:

- `/api/auth/*` via NextAuth route handlers.

## Environment Variable Inventory (Names Only)

### Required for this restored baseline

- `AUTH_SECRET`
- `DEMO_AUTH_EMAIL`
- `DEMO_AUTH_PASSWORD`
- `NEXTAUTH_URL`

### Pending recovery from locked Vercel project (to verify after reconnect)

- Production auth keys (if non-demo provider is used)
- Payment integration keys (Stripe/bKash/Nagad/etc.)
- Any private API, storage, analytics, or CRM keys.

## Deployment Settings To Reconnect and Verify

Once Vercel scope access is reconnected:

1. Identify project backing `kaamlaa.shop`.
2. Confirm linked Git repo and production branch.
3. Confirm custom domain assignment:
   - `kaamlaa.shop`
4. Pull environment variable keys and compare against this repo.
5. Validate deployment protection and preview access policy.

## Rollback-Safe Release Flow

1. Tag pre-change baseline commit.
2. Deploy from protected branch or production branch.
3. Smoke-check route contract and auth redirects.
4. If regression is detected:
   - Redeploy previous known-good Vercel deployment.
   - Revert Git commit range and redeploy.

## Known Blocker

Full Vercel operational control cannot be completed until the connector is re-authenticated with project-management permissions for the target scope.
