# INT-004 — PriceCharting English Market Integration

## Purpose
PriceCharting is the baseline market-price provider for English cards.

## Consumer Uses
- current Inventory market value
- Portfolio valuation
- Purchase market snapshot at acquisition
- Sales market snapshot at agreed sale
- Seller/Buyer price-behaviour analytics through transaction snapshots

## Normalized Observation
- provider = PRICECHARTING
- language/market = EN
- asset/card reference
- observed price
- currency/source currency
- observedAt
- retrievedAt
- retrieval status
- source reference
- raw provider metadata where useful

## Rules
1. Current observation never changes Inventory Final Cost.
2. Purchase/Sale market snapshots are copied/frozen at transaction time.
3. Failed refresh preserves the last valid observation and marks freshness/staleness.
4. Scraping/lookup mechanics may reuse proven IMS FHS v1 GAS behavior, but implementation details remain adapter-specific.
5. Matching must use normalized card identity/variant rules; ambiguous matches are not silently accepted.

## Refresh
Scheduled and on-demand refresh requests are background-capable. Ordinary UI requests should prefer cached/current normalized observations rather than synchronously scraping PriceCharting.
