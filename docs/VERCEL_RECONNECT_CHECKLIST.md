# Vercel Reconnect Checklist

Status during this takeover session:

- `list_teams`: returns empty
- `list_projects(team_jcEr4qNMyI3B1Eug5Bo9RuAn)`: failed
- `get_project(kaamlaa, dhandabuzz)`: `403 Forbidden`

This confirms scope-level permission reconnect is still required for full platform control.

## Reconnect Steps

1. Re-authenticate the Vercel integration in this Codex session with the account that owns:
   - team/scope: `dhandabuzz`
   - domain: `kaamlaa.shop`
2. Re-run access checks:
   - list teams
   - list projects for the target team
   - fetch project details for the Kaamlaa project
3. Confirm project linkage:
   - linked Git repository = `bhaifreakinsazzad-ops/Kaamlaa`
   - production branch = `main`
4. Confirm domain assignment:
   - `kaamlaa.shop`
5. Export and validate env key names (not values) against this repo.
6. Verify deployments and build logs are readable from the connector.
