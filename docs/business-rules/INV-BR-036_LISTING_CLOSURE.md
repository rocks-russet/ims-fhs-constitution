# INV-BR-036 — Listing Closure

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. When inventory becomes unavailable through reservation/sale, related active listing references must be closed or marked close-required according to channel capability.
2. Closure result is recorded.
3. Failed external closure remains visible for operator follow-up.
4. Closed listing history remains linked to Inventory and Sales Order.
5. Listing closure never deletes Sales History.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
