# INV-BR-030 — Inventory Cost Source Reconciliation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory originating from Purchase must reconcile its cost and Purchase Item reference to Purchase History.
2. Generated inventoryIds in Purchase Detail must resolve to their Inventory Details.
3. Split/transformation children must reconcile to parent cost allocation.
4. Unexplained manual cost changes are prohibited.
5. Cost mismatch is an integrity finding.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
