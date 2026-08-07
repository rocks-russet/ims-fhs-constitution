# INV-BR-053 — Inventory List View

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. List/Table View presents inventory in sortable rows.
2. Table supports configurable visible columns.
3. Rows open Inventory Detail.
4. Mixed-type results use sensible universal defaults while permitting type-specific optional columns.
5. Large result sets use pagination/virtualization as appropriate.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
