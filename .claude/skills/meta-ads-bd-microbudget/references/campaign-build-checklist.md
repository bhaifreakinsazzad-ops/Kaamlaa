# Campaign Build Checklist (Ads Manager, click-through order)

Use this as the literal settings list when walking a user through building the
Quick-start recipe from SKILL.md in Meta Ads Manager. Confirm interest-string
availability live — Meta doesn't publish a definitive post-June-2025 interest
list, so treat named interests below as "try this first, verify it exists."

## 1. Campaign level

- **Buying type**: Auction
- **Objective**: Traffic (not Awareness — see SKILL.md for why, even if the
  user frames the goal as "awareness")
- **Campaign budget optimization**: OFF (budget lives on the ad set — ABO)
- Name it something you can find again later, e.g. `BD-Dhaka-SegmentA-v1`

## 2. Ad set level

- **Conversion location**: Website
- **Performance goal**: Landing Page Views (preferred) — fall back to Link
  Clicks only if the pixel isn't confirmed firing yet
- **Budget**: Lifetime budget (required to unlock ad scheduling) — set to
  roughly daily-budget × number of days you intend to run before review (e.g.
  ৳240/day × 7 days = ৳1,680 lifetime for a one-week test)
- **Schedule**: use "Run ads on a schedule" and concentrate delivery into
  8:00 PM-12:00 AM BST (secondary: 1:00-2:30 PM). This is the actual mechanism
  that keeps a tiny budget from being spent on 4 AM low-value impressions.
- **Audience**:
  - Locations: Bangladesh > Dhaka (city) — add more only after Dhaka is
    exhausted
  - Age: set the floor at 24 (see SKILL.md — age is your real exclusion tool)
  - Gender: All
  - Detailed targeting: add the one behavior + one interest group from the
    current segment in `audience-segments.md`; confirm Advantage Detailed
    Targeting ("expand targeting beyond your selections") stays **ON**
  - Custom Audience exclusions: once a pixel/lead list exists, exclude
    existing customers and people who already submitted the lead form here —
    this is the only exclusion mechanism left post-2025
- **Placements**: Manual placements, select:
  - Facebook: Feed, Reels, Stories (Facebook is ~73M users in BD vs Instagram's
    ~10M — this is where the budget belongs)
  - Instagram: optional, only add for a premium/urban segment test
  - **Explicitly deselect Audience Network** — cheapest CPM in BD, most
    bot-prone/low-quality inventory, and a $2-20/day budget cannot absorb the
    waste
  - Messenger placement: leave off for a traffic-to-website goal
- **Optimization & delivery**: Highest volume (lowest cost), no bid cap

## 3. Ad level

- Build 2-3 ads in the single ad set so Meta can rotate and you avoid
  creative fatigue burning the one ad set you have
- Primary text: Banglish, lead with a "business owner?" hook, mention the
  free-trial/demo CTA before price — see
  `../assets/ad-copy-templates-banglish.md` for ready blocks
- Destination: the site's lead-capture page (form or call-booking widget),
  not the homepage, if the user has a dedicated landing page
- Confirm the pixel + Landing Page View + Lead events are verified firing
  before turning the ad set on — if they haven't set this up yet, stop and
  do `scaling-roadmap.md` step 1 first

## 4. After launch

- Leave it alone for the full 7 days. Every settings change (budget, audience,
  creative swap) resets the learning phase — don't "help" it mid-week.
- At the end of 7 days, check against `bd-benchmarks-and-caveats.md` before
  deciding whether to keep, swap segment, or fix creative.
