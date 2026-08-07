# INV-BR-062 — Packing Supply Consumption Link

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Sales Packing records actual supplies used and references the corresponding Packing Supply inventory when tracked.
2. Only confirmed actual usage decrements supply quantity.
3. Suggested supplies do not decrement inventory.
4. Consumption records Order ID, supply inventoryId, quantity, operator, and timestamp.
5. Inventory History and Sales Packing Detail cross-reference the same consumption event.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
