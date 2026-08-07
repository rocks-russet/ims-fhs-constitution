# INV-BR-043 — Portfolio Average Cost

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Portfolio Average Cost equals total cost basis of included inventory divided by included quantity under the position definition.
2. Only inventory owned by the selected owner scope is included.
3. Average Cost derives from authoritative Final Cost/remaining lot cost.
4. Sold/transformed-out quantity is excluded from current holdings.
5. Rounding is deterministic and displayed without changing underlying costs.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
