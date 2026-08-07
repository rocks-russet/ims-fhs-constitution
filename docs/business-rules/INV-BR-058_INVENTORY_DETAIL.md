# INV-BR-058 — Inventory Detail

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Detail is a clear, visually rich, type-aware page rather than a raw data dump.
2. Serialized Card Detail prominently presents card image and key card metadata, owner, holder, storage, cost, current market provider/value, portfolio context, status, Purchase origin, Sales reference, lineage, images, and history.
3. Product Detail adapts to Product metadata and does not display irrelevant card-only fields.
4. Bulk Detail shows label, quantity, total/average cost, extraction history, owner, holder, storage, and optional valuation.
5. Financial/sensitive fields follow authorization.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
