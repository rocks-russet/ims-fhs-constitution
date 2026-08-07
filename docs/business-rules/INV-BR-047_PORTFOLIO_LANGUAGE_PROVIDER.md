# INV-BR-047 — Portfolio Language and Provider Separation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Portfolio valuation does not combine EN and JP into one price basis.
2. EN positions show PriceCharting provider/value/timestamp.
3. JP positions show Yuyutei provider/value/timestamp.
4. An All Languages roll-up may sum separately valued positions while preserving underlying provider detail.
5. Provider changes never rewrite historical transaction snapshots.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
