# INV-BR-016 — Quantity Product Inventory

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Approved Product categories may be tracked as quantity inventory when individual serialization provides no operational value.
2. Quantity must be a non-negative whole number.
3. Quantity inventory keeps one inventoryId for the lot until split/transformation rules create child inventory.
4. Cost basis includes total cost and reproducible average unit cost.
5. Quantity changes require a governed event, not an unexplained direct edit.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
