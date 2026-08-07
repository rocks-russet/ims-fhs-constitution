# INV-BR-055 — Inventory Table Sorting

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Sortable headers support ascending/descending ordering for fields with deterministic ordering.
2. Examples include Market Price, Final Cost, Buy Price, Card Number, Name, Purchase Date, Owner, and Status.
3. Active sort indicator is visible.
4. Sorting works with current filters and pagination.
5. Unsupported complex fields must not pretend to be sortable.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
