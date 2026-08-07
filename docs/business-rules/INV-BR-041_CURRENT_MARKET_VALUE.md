# INV-BR-041 — Current Market Value

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Current Market Value uses the latest valid observation from the provider applicable to the inventory's language/market.
2. Serialized positions use the applicable card/product market value.
3. Bulk lots may use manual/approved bulk valuation or remain without market value when detailed composition is unknown.
4. Current Market Value does not modify Final Cost.
5. Stale/unavailable market data must be visibly identified.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
