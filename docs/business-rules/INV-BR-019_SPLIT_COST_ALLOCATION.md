# INV-BR-019 — Split Cost Allocation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Split cost is allocated proportionally by underlying quantity unless a later-approved product rule specifies another method.
2. Child cost totals must equal the parent cost removed by the split.
3. Average unit cost remains reproducible.
4. Rounding remainder is assigned deterministically without creating or losing cost.
5. Split does not create profit or change ownership economics.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
