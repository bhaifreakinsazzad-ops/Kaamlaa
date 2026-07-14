# Audience Segments (copy-paste-ready)

A $2-20/day budget cannot feed multiple ad sets at once. Treat these as a
**priority queue**: run ONE at a time, test 7 days untouched, keep the winner,
only move to the next segment if the current one misses the benchmarks in
`bd-benchmarks-and-caveats.md`. Order reflects intent-to-purchase, highest first.

Every segment assumes: Advantage+ Audience expansion **ON** (interests are
suggestions, not filters — see SKILL.md), age as the real narrowing/exclusion
lever, and geography as the primary hard constraint.

## Segment A — Active Page Admins / F-commerce Sellers (run first)

- **Location**: Bangladesh > Dhaka (city). Add Chattogram only for extra reach
  once Dhaka alone is exhausted.
- **Age**: 24-45 | **Gender**: All (BD Facebook skews ~63% male, but don't
  exclude women — roughly half of BD's ~300,000 f-commerce Facebook pages are
  women-owned).
- **Detailed targeting — Behaviors**: Facebook Page admins
- **Detailed targeting — Interests (AND with the behavior)**: Small business
  owners OR E-commerce OR Online shopping
- **Language**: leave open, or set Bengali to skew local (the bigger lever is
  writing the *creative* in Banglish, not the language filter)
- **Why this is first**: people actively managing customer DMs on a Facebook
  Page are exactly the audience feeling the pain a "turn your inbox into an AI
  employee" product solves. Highest intent-to-purchase of any segment here.

## Segment B — Digital Marketers / Agency & Marketing-Savvy Owners

- **Location**: Dhaka (+ optionally Chattogram)
- **Age**: 22-45 | **Gender**: All
- **Interests**: Digital marketing OR Facebook for Business / Meta for
  Business OR Advertising OR Social media marketing
- **Why**: this audience already thinks in ROI/automation/conversion terms and
  will parse a "leads and conversion" pitch fast — good second test if Segment
  A's CPC/CTR disappoints.

## Segment C — Entrepreneurship / Startup / Business (broader top-of-funnel)

- **Location**: Dhaka
- **Age**: 24-45 | **Gender**: All
- **Interests**: Entrepreneurship OR Business OR Startup company (verify this
  exact string is still live in Ads Manager) OR Small business owners
- **Why**: broadest, least-precise segment here — use only after A and B have
  each had a full 7-day test, since it's the most likely to attract
  low-intent clicks.

## Segment D — Vertical-Specific (only once budget grows)

Build a separate ad set per vertical, matched to vertical-specific creative,
once budget supports more than one ad set (see the scaling roadmap). Match
verticals to whatever the product's site names as its best-fit customer
types — for Haamoodee/Hamoodi that's real estate, clinics/healthcare,
education/admission offices, and agencies (i.e. anyone running
appointment-heavy or lead-qualification-heavy conversations). Interests:
"Real estate," "Health/clinic," "Education," etc., matched one-for-one with
the ad creative for that vertical.

## Notes that apply to all segments

- **Don't stack narrow interests.** One behavior + one broad interest group,
  ANDed, is the ceiling — Meta merged niche interests into broad umbrellas in
  June 2025, and stacking more just confuses the suggestion engine without
  narrowing anything (Advantage+ ignores over-constrained detailed targeting
  by expanding past it anyway).
- **You cannot exclude by interest/behavior anymore.** If the user wants to
  keep out job-seekers/students, the only real lever is raising the minimum
  age (24+ is doing that job already) and, once the pixel has data, Custom
  Audience exclusions of existing customers/leads/form-submitters.
- **Typical resulting audience size**: Dhaka + one behavior + one broad
  interest usually lands around 300k-1.5M — bigger than Meta's warning
  threshold will like, smaller than Meta's "2-10M ideal" guidance. That's the
  deliberate tradeoff at this budget (see SKILL.md's "Sizing the audience").
