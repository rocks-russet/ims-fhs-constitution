# INV-BR-056 — Inventory Filtering

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Filters may use inventory type, category, card metadata, language, owner, holder, storage, availability, listing/reservation state, grade, cost/market ranges, Purchase origin/date, and other approved fields.
2. Filter fields remain usable even when their table column is hidden.
3. Multiple filters combine deterministically.
4. All filters can be reset.
5. Filtered totals/counts state their scope.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
