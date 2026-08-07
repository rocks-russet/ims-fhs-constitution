# INT-005 — Yuyutei Japanese Market Integration

## Purpose
Yuyutei is the baseline market-price provider for Japanese cards.

## Consumer Uses
Same logical uses as the English provider, but JP valuation remains a separate provider/market basis.

## Normalized Observation
- provider = YUYUTEI
- language/market = JP
- asset/card reference
- observed price
- currency/source currency
- observedAt
- retrievedAt
- retrieval status
- source reference
- raw provider metadata where useful

## Rules
1. JP market observations are never mixed with EN PriceCharting observations as a single raw price basis.
2. Portfolio All-Languages totals may aggregate separately valued positions while preserving each provider.
3. Transaction market snapshots remain immutable.
4. Failed refresh preserves the prior valid observation and exposes staleness.
5. Scraping/lookup mechanics may reuse proven IMS FHS v1 GAS behavior while remaining isolated behind the Yuyutei adapter.
6. Ambiguous or unmatched card identities remain unavailable rather than receiving a guessed price.
