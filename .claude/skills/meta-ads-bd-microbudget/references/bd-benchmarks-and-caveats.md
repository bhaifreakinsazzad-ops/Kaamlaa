# Bangladesh Benchmarks, Market Context, and Diagnostic Table

## Market context (why tight geo/age targeting matters at all)

- Facebook in Bangladesh: ~73.3M users (Jan 2026), ~40.6% of the population,
  skewing male (~62.8%) and young (18-24 is the single largest age band). This
  is a poor match for the actual buyer (a business owner who can pay
  ৳thousands/week) — which is exactly why age and geo filtering carry the
  targeting load instead of demographics-as-proxy-for-buyer.
- Instagram in Bangladesh: ~10.3M users (Jan 2026), ~5.7% of the population,
  also male-skewed. Facebook, not Instagram, is where a BD B2B budget belongs;
  treat Instagram placements as optional and premium-segment-only.
- Bangladesh has one of the world's largest f-commerce ecosystems: roughly
  2,000 dedicated e-commerce platforms vs 300,000+ F-commerce Facebook pages,
  with women owning roughly half of those pages. This is the core buyer pool
  for any "AI employee for your Page's inbox" style product — Segment A in
  `audience-segments.md` targets exactly this group via the Facebook Page
  admins behavior.

## Benchmark ranges (directional — agency-blog sourced, not Meta's own data)

- **CPM**: roughly ৳15-150 ($0.13-$1.30), depending heavily on audience and
  season.
- **CPC**: roughly ৳2-15 ($0.02-$0.14). Fashion/e-commerce sit at the low end;
  financial services and real estate sit at the high end.
- At $2/day (~৳240), expect a few thousand impressions/day and, in theory,
  15-100 link clicks/day at these CPC rates — but realistically single-digit
  to low-double-digit *quality* clicks once bot/low-quality traffic (a known
  risk in cheap-CPM markets) is accounted for. Use
  `../scripts/estimate_reach.py` to turn a specific budget into a concrete
  range instead of eyeballing this.
- Treat a month (~$60) at this budget as enough to season the pixel and build
  a small warm audience, plus maybe a handful of trial leads — not a steady
  sales flow.

## Diagnostic table: what a live number is telling you

When a user reports live campaign numbers, use this to decide whether the fix
is creative, schedule/budget, or genuinely audience — in 2026's
Advantage+/Andromeda delivery environment, creative is the dominant lever far
more often than audience settings, so default to a creative diagnosis first
unless the evidence clearly points elsewhere.

| Symptom | Likely cause | Suggested fix |
|---|---|---|
| CPC above ~৳15-20 with low CTR (<1%) | Creative isn't earning clicks — hook/thumbnail/copy problem | Swap creative first, not audience. Try a different hook, shorter video, or a Banglish variant. |
| CPC in range but very few landing-page views relative to clicks | Site loading slowly, or link-click optimization instead of landing-page-view optimization | Confirm pixel fires correctly; switch optimization event to Landing Page Views if not already. |
| High CTR but zero form starts/leads | Landing page mismatch, or price-led messaging scaring off cold traffic | Lead with the free-trial/demo CTA instead of price; check the destination is the lead-capture page, not homepage. |
| Frequency climbing past 3-4 within the test window | Creative fatigue on the one ad set (expected — only one ad set exists) | Refresh creative, don't raise budget to compensate. |
| Ad set stuck in "Learning Limited" | Expected at this budget — sub-$50-100/day rarely hits 50 events/week | Don't fight it. Judge on 7-14 day cost/quality metrics instead of on exiting learning. |
| Everything looks fine but volume is just very low | Budget floor — $2-20/day fundamentally can't deliver volume | Reframe expectations as pixel-seasoning, not a sales engine; revisit once budget/leads justify Stage 3 retargeting. |
| Costs spike suddenly with no setting changes | Seasonal CPM spike (Eid, Pohela Boishakh, Puja, year-end) | Confirm date against BD ad-season calendar before assuming a targeting problem; costs typically normalize after the event window. |

## Threshold that changes the whole plan

If after roughly one month (~$60 total spend) there are still near-zero
quality form fills despite CPC sitting inside the healthy range, the
bottleneck is very likely the **offer, the landing page, or a mismatch between
a recurring BDT-thousands price and cold traffic** — not the ad targeting.
At that point, redirect budget toward retargeting the warm
(visitor/engager) audience built during Stage 2 of the scaling roadmap, and
lead creative with the free "1-day trial"/demo hook rather than price.
