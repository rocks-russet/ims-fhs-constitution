# SAL-BR-042 — Sales Analytics

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Sales Analytics derives from authoritative Sales History.
2. Core metrics include order count, completed sales value, item quantity, gross sales, discounts, additional charges, shipping charged, refunds, recognized profit, and status distribution.
3. Metrics support All-Time and date-range views.
4. Direct and Marketplace channels remain separately filterable.
5. Cancelled/test/invalid records are excluded according to explicit metric rules.
6. Multiple invoices/payments do not double-count one order.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
