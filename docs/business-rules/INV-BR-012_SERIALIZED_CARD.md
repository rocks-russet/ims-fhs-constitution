# INV-BR-012 — Serialized Card Inventory

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. A valuable or individually tracked physical card may be represented as one SERIALIZED_CARD Inventory record per physical card.
2. Serialized Card stores one inventoryId, cost basis, owner, holder, storage, status, and card metadata.
3. Serialized tracking is required when the operator decides individual identity is operationally valuable.
4. Serialized Card may originate directly from Purchase or be extracted from a Bulk Card Lot.
5. Serialized Card is never automatically collapsed back into bulk.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
