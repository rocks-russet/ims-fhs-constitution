# INV-BR-015 — Bulk Card Extraction

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. An operator may extract one or more individual cards from a Bulk Card Lot when market, meta, grading, sales, collection, or operational value justifies serialized tracking.
2. Extraction records parent bulk inventoryId, extracted quantity, created child inventoryId(s), operator, timestamp, and justification.
3. Parent bulk quantity decreases by the exact extracted quantity.
4. Default extracted cost uses the parent average cost unless an authorized justified cost allocation is supplied.
5. Parent remaining cost plus extracted child cost must equal the pre-extraction parent cost.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
