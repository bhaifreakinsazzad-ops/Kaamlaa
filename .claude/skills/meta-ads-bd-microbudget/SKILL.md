---
name: meta-ads-bd-microbudget
description: Build, audit, or troubleshoot Meta/Facebook Ads campaigns for Bangladeshi B2B businesses on tight budgets (roughly $1-20/day) — especially Kaamlaa/Haamoodee (agent-hamoodi.online) campaigns targeting Dhaka business owners, f-commerce sellers, and Facebook Page admins. Use this whenever the user asks about Facebook/Meta ad targeting, audience segments, campaign structure, ad set budgets, placements, Advantage+ audiences, detailed targeting interests/behaviors, lookalike audiences, or ad scheduling for a Bangladesh audience — even if they just say "help me set up a Facebook ad", "why is my CPC so high", or "who should I target" without naming Meta explicitly. Also use it to draft Banglish/Bengali ad copy, choose the right campaign objective (Traffic vs Awareness vs Advantage+), size a daily budget, or explain Meta's 2026 targeting rules (interest consolidation, removed detailed-targeting exclusions, Advantage+ suggestion-only behavior) and how they change strategy at micro-budget scale.
---

# Meta Ads for Bangladesh, Micro-Budget

Playbook for planning, building, and troubleshooting Meta (Facebook/Instagram) ad
campaigns for Bangladeshi B2B/recurring-service businesses running on very small
daily budgets (roughly $1-20/day, i.e. ৳120-2,400/day). It was built from a deep
research pass on **Kaamlaa's Haamoodee/Hamoodi** AI-employee product
(agent-hamoodi.online) but the mechanics generalize to any BD business selling a
considered, recurring-spend service to other business owners (agencies, clinics,
real estate, education) rather than running impulse-buy e-commerce.

The core problem this skill solves: **at $2-20/day you cannot afford to treat Meta
ads like a normal-budget campaign.** Multiple ad sets, broad "let-the-algorithm-
learn" audiences, and interest-stacking all waste a budget this small. Every
choice below is optimized for getting a *tiny* number of *high-intent* clicks
instead of a large number of cheap, low-quality ones.

## Before doing anything: know what's a hard constraint vs a suggestion

Meta's targeting model changed materially in 2025-2026, and most advice you've
seen in training data or generic guides is stale. Get this right first because it
changes what "narrowing an audience" even means:

- **Interest/behavior detailed targeting is now a *suggestion*, not a filter**,
  under Advantage+ Audience (the 2026 default) — Meta will deliver beyond the
  interests you pick whenever it thinks that improves results. On conversion
  objectives this is true even with "Original Audiences."
- **Detailed targeting EXCLUSIONS no longer exist.** You cannot exclude by
  interest or behavior anymore (Ads Manager since Mar 2025, boosted posts since
  Jun 2025). The only exclusion levers left are: minimum age, geography (by
  omission), and Custom Audience exclusions (uploaded lists / pixel data).
- **The only true hard constraints are: location, age range, and Custom Audience
  exclusions.** Everything else (interests, behaviors, placements under
  Advantage+) is Meta "leaning into" your input, not obeying it.
- **Interest stacking is dead.** Meta merged niche interests into broad umbrella
  categories in June 2025. Don't try to chain 5 narrow interests — pick one
  behavior + one broad interest group at most and let Advantage+ expand from
  there.
- Because of the above, **your real narrowing tool is geography + age**, not
  detailed targeting. Lock the city/age range tightly; leave interest targeting
  loose and let Advantage+ Audience expansion stay ON at this budget — a tiny,
  hard-constrained audience starves and spikes CPMs, whereas Meta's own
  suggestion engine is good at finding cheap clickers within a locked geography.

If a user's ask contradicts this (e.g. "exclude everyone interested in X" or
"stack 6 interests together"), tell them why it no longer works before doing it.

## Quick-start recipe (the default answer for "help me set up this campaign")

For a single BD B2B campaign at $2-20/day, build exactly this unless the user's
situation clearly differs:

1. **1 campaign, 1 ad set, ABO** (Advantage ad set budget *off*/manual). Never
   split a micro-budget across multiple ad sets — each one starves and never
   exits learning. Move to CBO/Advantage+ Campaign Budget only once spend is
   ≥$50/day across 3+ proven ad sets.
2. **Objective: Traffic**, optimizing for Landing Page Views (fall back to Link
   Clicks if the pixel isn't firing reliably yet). Do NOT default to the
   Awareness objective just because the user says "brand awareness" — Awareness
   optimizes for cheap reach/recall and sends near-zero people to the site. If
   the goal is a lead-capture site with a form/call-booking CTA (true for
   Haamoodee and most BD B2B service sites), Traffic is correct even when the
   user frames the ask as "awareness."
3. **Geography: one city, tightest first.** Start with Dhaka only (or the
   user's equivalent commercial hub). This is the primary narrowing lever —
   see "Sizing the audience" below.
4. **Age: 24-45+ as the floor**, not 18+. Age is a hard constraint and your best
   available "exclusion" now that interest exclusions are gone — it filters out
   most students/job-seekers who won't buy a recurring BDT-thousands service.
5. **Detailed targeting: one behavior + one broad interest, ANDed, then leave
   Advantage+ expansion ON.** For BD business buyers, start with **Facebook Page
   admins** (behavior) narrowed by **Small business owners** or **E-commerce**
   (interest). Full segment menu with rationale: `references/audience-segments.md`.
6. **Placements: manual, not Advantage+.** Facebook Feed + Facebook Reels (+
   Stories). Drop Audience Network entirely — cheapest CPM in BD but the most
   bot-prone/low-quality inventory, which a $2/day budget cannot absorb.
   Instagram placements are optional and only worth it for a premium/urban
   segment (see below).
7. **Schedule: concentrate spend into the BD evening peak**, 8-11 PM BST
   (secondary window: 1-2:30 PM lunch). This requires a **lifetime budget**
   (ad scheduling isn't available on daily budgets). Best days: Thursday night
   / Friday (BD weekend is Fri-Sat).
8. **Bidding: Highest Volume / lowest cost, no bid cap.** Bid caps on a
   micro-budget just stall delivery.
9. **Creative: 2-3 ads in the one ad set**, Banglish primary text (Bengali
   script + English business terms — this is how BD business owners actually
   talk, and it mirrors how BD B2B sites write their own copy), a clear
   "business owner" hook, and a low-commitment CTA (free trial / free demo)
   rather than leading with price. See `assets/ad-copy-templates-banglish.md`
   for ready-to-adapt copy blocks (built from Haamoodee's actual site copy and
   trust cues).
10. **Accept "Learning Limited."** Below roughly $50-100/day you likely can't
    hit 50 optimization events/week, so the ad set may never formally exit
    learning. Judge performance on 7-14 day CPC / landing-page-view cost /
    quality of form fills instead of on exiting learning — see
    `references/bd-benchmarks-and-caveats.md` for what "good" looks like and
    when a number signals a creative problem vs an audience problem.

Full step-by-step build checklist (screen-by-screen Ads Manager settings) is in
`references/campaign-build-checklist.md`.

## Sizing the audience

Meta's own guidance recommends 2-10M+ audiences and will warn that anything
smaller is "too specific." At micro-budget, deliberately override that: you'll
only touch a sliver of any audience per day regardless of its size, so a
**~300k-1.5M defined audience in one city** is the practical sweet spot —
big enough that Meta isn't starved, small enough that impressions aren't wasted
on people who will never buy. Explain this tradeoff to the user if they're
confused by Meta's in-UI warning: it's a deliberate choice for intent quality
over Meta's efficiency default, not a mistake.

## Sizing the budget itself

If the user asks "what will $X/day get me," don't just quote the abstract BD
CPM/CPC ranges from memory — run the numbers with
`scripts/estimate_reach.py`, which encodes the BD benchmark ranges
(CPM ৳15-150, CPC ৳2-15) and prints a realistic daily/monthly range, e.g.:

```bash
python3 .claude/skills/meta-ads-bd-microbudget/scripts/estimate_reach.py --budget-bdt 240
```

Always frame the output as a *range with a big quality caveat*, not a promise —
cheap-CPM BD inventory includes real bot/low-quality traffic risk, so realistic
usable clicks sit toward the low end of the theoretical range. At $2/day
(~৳240), expect a few thousand impressions and single-digit-to-low-double-digit
*quality* clicks/day — treat the first month as pixel-seasoning and audience-
building, not a sales engine.

## Growing past the micro-budget floor

Don't propose Lookalike Audiences or a second (retargeting) ad set on day one —
they need data the account doesn't have yet. Sequence it:

1. **Before spending a taka**: install the Meta Pixel + Conversions API on the
   site, wire the lead form's submit as a tracked "Lead" event, verify the
   domain. Skipping this means no retargeting/lookalike pool ever forms.
2. **Weeks 1-2**: run the single ad set from "Quick-start recipe" above,
   untouched, for a full 7 days per test (every settings change resets
   learning). Judge, don't tinker mid-week.
3. **Weeks 3-4**: if the first audience segment underperforms, swap to the next
   segment in `references/audience-segments.md` — never run more than one
   ad set at this budget.
4. **Once budget reaches ~$5-10/day AND ~100+ leads exist**: add a second ad
   set that retargets website visitors/engagers, and build a 1% Bangladesh
   Lookalike from the lead list.
5. **Scaling beyond that**: raise budget only 20-30% every 3-4 days; consider
   moving proven ad sets into Advantage+ Campaign Budget only at ≥$50/day
   with 3+ proven ad sets.

Full detail (custom audience roadmap, exclusion strategy, seasonality) is in
`references/scaling-roadmap.md`.

## Troubleshooting performance

When a user reports numbers ("my CPC is ৳25" / "CTR is 0.5%" / "no leads after
a week"), diagnose against the BD benchmarks and the 2026 rules above before
suggesting a fix — most people's first instinct is to change targeting, but at
this budget **creative is almost always the actual lever** (Advantage+/Andromeda-
era delivery targets ads more through creative signals than audience settings).
See `references/bd-benchmarks-and-caveats.md` for the full diagnostic table
(what a given CPC/CTR/frequency number implies, and whether the fix is
creative, budget, schedule, or genuinely audience).

## Reference files

- `references/audience-segments.md` — copy-paste-ready targeting specs for
  Segments A-D (Page admins/f-commerce, digital marketers, entrepreneurship,
  vertical-specific), ranked by intent, with when to move between them.
- `references/campaign-build-checklist.md` — literal Ads Manager click-through
  checklist for the Quick-start recipe.
- `references/scaling-roadmap.md` — pixel setup, custom audience build order,
  lookalike thresholds, exclusion strategy, seasonality notes.
- `references/bd-benchmarks-and-caveats.md` — BD CPM/CPC benchmark ranges,
  Facebook vs Instagram user base in BD, and the diagnostic table for
  interpreting live campaign numbers.
- `assets/ad-copy-templates-banglish.md` — ready Banglish/Bengali ad copy
  blocks (headlines, primary text, CTAs) built from Haamoodee's actual
  site positioning and trust cues; adapt for other BD B2B products by
  swapping the product name/price/CTA.
- `scripts/estimate_reach.py` — quick budget → expected impressions/clicks
  estimator using BD benchmark ranges.

## Caveats to pass on to the user

- BD CPM/CPC figures are directional (agency-blog sourced, not Meta's own
  data) — treat them as planning ranges, not guarantees.
- $2/day is below Meta's practical optimization floor; expect "Learning
  Limited" indefinitely at that spend. Set expectations as pixel-seasoning,
  not a performance engine, until budget rises.
- The audience-size recommendation here (300k-1.5M) deliberately overrides
  Meta's own "bigger is better" guidance for intent-quality reasons — expect
  Meta's UI to warn the audience is narrow, and that's fine.
- Confirm exact interest-string availability ("Facebook Ads," "Startup
  company," etc.) live in Ads Manager — Meta doesn't publish a definitive
  post-consolidation interest list.
