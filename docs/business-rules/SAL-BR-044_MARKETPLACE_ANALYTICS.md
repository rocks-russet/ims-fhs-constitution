# SAL-BR-044 — Marketplace Analytics

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Marketplace Analytics aggregates orders and financial outcomes by marketplace/platform.
2. Metrics may include sales value, order count, marketplace fee, average fee rate, checkout value, split-payment usage, refund amount, and recognized profit.
3. Marketplace fee profile/version used by each order remains traceable.
4. Direct sales are excluded from marketplace-only metrics.
5. Date-range and platform filters are supported.
6. Metrics reconcile to Sales History and Finance records.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
