# Scaling Roadmap: Pixel, Custom Audiences, Lookalikes

This is how a BD micro-budget account escapes cold interest targeting. Don't
skip ahead — each stage needs the data the previous stage produced.

## Stage 0 — Before spending a single taka

- Install the Meta Pixel + Conversions API on the site.
- Wire the lead-capture form's submit (LeadConnector/GoHighLevel or whatever
  form tool the site uses) as a tracked **Lead** event.
- Verify the domain in Meta Business Settings.
- Even a pure Traffic campaign should fire **Landing Page View** + **Lead**
  events so data accumulates from day one — without this, nothing below is
  possible and the account is "flying blind."

## Stage 1 — Weeks 1-2 ($2-20/day)

- Launch the single ad set from SKILL.md's Quick-start recipe: Segment A,
  Traffic objective, Landing Page Views, manual placements, evening schedule.
- Run 7 days completely untouched.
- Benchmark to continue: CPC at or below the top of the BD CPC range (see
  `bd-benchmarks-and-caveats.md`), a healthy landing-page-view rate, and at
  least some form starts. If CTR is low, the fix is creative, not audience —
  swap creative before touching targeting.

## Stage 2 — Weeks 3-4

- If Segment A underperforms after its full 7-day run, move to Segment B
  (digital marketers), then C if needed. Keep the single-ad-set discipline —
  don't run two segments simultaneously on this budget.
- Start building the custom audiences below even though you won't spend
  against them yet:
  - All website visitors (180 days)
  - Form-page visitors who didn't submit
  - Video viewers, if any video creative has run
  - Page/IG engagers (365 days)
  - Messenger contacts, if any channel handles that

## Stage 3 — Once budget can rise to ~$5-10/day AND ~100+ leads exist

- Add a **second ad set** that retargets website visitors + engagers with a
  warmer message ("still thinking? book a call / start the 1-day trial") —
  this audience converts far cheaper than cold traffic, and this is the
  first point where running 2 ad sets simultaneously makes sense.
- Build a **1% Bangladesh Lookalike** of leads/customers first, then (once
  there's enough pixel data) a second Lookalike of website converters. Start
  at 1%; only widen to 2-3% when scaling further — Lookalikes need at least
  ~100 source records to form, ideally 1,000+.

## Stage 4 — Scaling further

- Raise budget only 20-30% every 3-4 days — bigger jumps reset learning and
  spike costs.
- Consider moving proven ad sets into an Advantage+ Campaign
  Budget/CBO structure only once spend is ≥$50/day across 3+ proven ad sets —
  CBO needs meaningfully higher budgets and multiple ad sets to distribute
  across, which a single-ad-set micro-budget account doesn't have.

## Exclusion strategy at every stage (post-2025 constraint)

Detailed targeting exclusions (excluding by interest/behavior) no longer
exist in Meta Ads Manager. The only exclusion levers available are:

1. **Age floor** (24+) — filters out most students/fresh graduates who won't
   buy a recurring BDT-thousands service. This is the single most effective
   "exclusion" available pre-pixel.
2. **Custom Audience exclusions** — once the pixel/lead list exists, exclude
   existing customers and people who already submitted the lead form so
   spend doesn't re-target converters.
3. **Geographic inclusion-only** — by including only Dhaka, rural/low-intent
   regions are implicitly excluded.
4. **Creative as a filter** — since interest exclusions are gone, write copy
   that makes tire-kickers self-select out (lead with "business owner?" /
   mention price-per-week/ROI so non-buyers scroll past instead of clicking).

## Seasonality note

BD CPMs spike around Eid, Pohela Boishakh, Puja, and year-end — a micro-budget
stretches further in off-peak weeks, so avoid launching a first test during
those windows if the timing is flexible. During Ramadan specifically, shift
the delivery schedule to post-Iftar (~7:30-9 PM) and late night before Sehri
instead of the normal 8-11 PM window.
