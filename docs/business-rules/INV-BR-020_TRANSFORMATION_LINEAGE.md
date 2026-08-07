# INV-BR-020 — Parent-Child Transformation Lineage

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Every split or transformation preserves parentInventoryId and childInventoryIds.
2. Consumed/transformed parent remains historically visible and cannot simultaneously represent the same physical quantity as active children.
3. Inventory Detail shows lineage in both directions.
4. Lineage is immutable after successful transformation.
5. Broken or cyclic lineage is an integrity finding.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
