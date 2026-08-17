# INV-BR-012 — Serialized Card Inventory

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. A valuable or individually tracked physical card is represented as one SERIALIZED_CARD Inventory record per physical card.
2. One physical serialized card has one inventoryId; multiple physical copies extracted from Bulk must create separate Inventory records even when the copies share the same canonical card definition.
3. Serialized Card stores one inventoryId, cost basis, owner, holder, storage, status, and card metadata.
4. Serialized tracking is required when the operator decides individual identity is operationally valuable.
5. Serialized Card may originate directly from Purchase or be extracted from a Bulk Card Lot.
6. A Serialized Card extracted from Bulk retains immutable lineage to the source Bulk Inventory and its upstream acquisition provenance.
7. Serialized Card is never automatically collapsed or merged back into bulk.

## Invariants

- One physical serialized card maps to one stable Inventory ID.
- Historical source records remain reconstructable.
- Bulk extraction lineage remains permanent even if the serialized card is later sold, transferred, graded, or otherwise transformed.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
