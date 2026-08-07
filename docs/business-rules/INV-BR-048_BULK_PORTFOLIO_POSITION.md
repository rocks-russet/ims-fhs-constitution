# INV-BR-048 — Bulk Portfolio Position

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Bulk Card Lots appear as Bulk positions rather than pretending to be exact card-specific holdings.
2. Bulk position shows label, quantity, cost basis, average cost, owner, holder, storage, and optional approved market valuation.
3. Extracted serialized cards leave the bulk quantity/cost and enter their own specific portfolio positions.
4. Unknown bulk composition is not used for card-specific market valuation.
5. Bulk remains drillable to its Inventory Detail and extraction history.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
