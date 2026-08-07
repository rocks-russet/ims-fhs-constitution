# INV-BR-013 — Bulk Card Lot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Low-value cards may be stored as one BULK_CARD_LOT without identifying every card individually.
2. Bulk Lot stores inventoryId, operator-defined label, quantity, total remaining cost, average cost, owner, holder, storage, and notes.
3. Examples include Bulk RED OP11, Bulk SR OP09, Bulk Event Merah OP13, or another operator-defined grouping.
4. Bulk Lot does not require a per-card identity list.
5. Bulk use must not fabricate detailed card composition that was never recorded.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
