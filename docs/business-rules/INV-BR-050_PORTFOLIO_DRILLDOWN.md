# INV-BR-050 — Portfolio Drill-Down

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Clicking a Portfolio position opens the position detail and its constituent inventory records.
2. Each constituent inventoryId opens Inventory Detail.
3. Position view shows Average Cost, current market provider/value, unrealized gain/loss, quantity, owner scope, and market observation time.
4. Filters may narrow position holdings by status, storage, holder, language, or other applicable fields.
5. Drill-down does not alter inventory.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
