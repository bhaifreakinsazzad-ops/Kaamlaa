#!/usr/bin/env python3
"""Estimate daily/monthly impressions and clicks for a Bangladesh Meta Ads
budget, using the BD CPM/CPC benchmark ranges from
references/bd-benchmarks-and-caveats.md (CPM ~15-150 BDT, CPC ~2-15 BDT).

These benchmarks are directional (agency-blog sourced, not Meta's own data).
Real quality clicks tend to sit toward the low end of the theoretical range
because cheap-CPM BD inventory carries real bot/low-quality traffic risk.

Usage:
    python3 estimate_reach.py --budget-bdt 240
    python3 estimate_reach.py --budget-usd 2 --days 30
"""
import argparse

USD_TO_BDT = 120.0
CPM_LOW, CPM_HIGH = 15.0, 150.0
CPC_LOW, CPC_HIGH = 2.0, 15.0


def estimate(budget_bdt: float, days: int) -> None:
    monthly_bdt = budget_bdt * days

    impressions_low = (budget_bdt / CPM_HIGH) * 1000
    impressions_high = (budget_bdt / CPM_LOW) * 1000

    clicks_low = budget_bdt / CPC_HIGH
    clicks_high = budget_bdt / CPC_LOW
    # Realistic "quality click" estimate: cheap-CPM BD inventory carries a
    # meaningful bot/low-quality-traffic discount, so treat the low end of the
    # theoretical CPC range as the practical ceiling for usable clicks.
    quality_clicks_low = clicks_low * 0.4
    quality_clicks_high = clicks_low * 1.0

    print(f"Daily budget: ৳{budget_bdt:,.0f} (~${budget_bdt / USD_TO_BDT:,.2f})")
    print(f"Test window: {days} day(s) → total spend ~৳{monthly_bdt:,.0f}")
    print()
    print(f"Estimated daily impressions: {impressions_low:,.0f} - {impressions_high:,.0f}")
    print(f"Theoretical daily link clicks (CPC ৳{CPC_LOW:.0f}-{CPC_HIGH:.0f}): "
          f"{clicks_low:,.1f} - {clicks_high:,.1f}")
    print(f"Realistic *quality* daily clicks (after bot/low-quality discount): "
          f"{quality_clicks_low:,.1f} - {quality_clicks_high:,.1f}")
    print()
    print("Over the full test window:")
    print(f"  Total impressions: {impressions_low * days:,.0f} - {impressions_high * days:,.0f}")
    print(f"  Total quality clicks: {quality_clicks_low * days:,.1f} - {quality_clicks_high * days:,.1f}")
    print()
    print("Caveat: these are planning ranges from BD agency-blog benchmarks, not "
          "Meta's own data. Actual cost depends heavily on audience, creative, "
          "and season (BD CPMs spike around Eid, Pohela Boishakh, Puja, year-end).")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    budget_group = parser.add_mutually_exclusive_group(required=True)
    budget_group.add_argument("--budget-bdt", type=float, help="Daily budget in BDT")
    budget_group.add_argument("--budget-usd", type=float, help="Daily budget in USD")
    parser.add_argument("--days", type=int, default=7, help="Test window length in days (default: 7)")
    args = parser.parse_args()

    budget_bdt = args.budget_bdt if args.budget_bdt is not None else args.budget_usd * USD_TO_BDT
    estimate(budget_bdt, args.days)


if __name__ == "__main__":
    main()
