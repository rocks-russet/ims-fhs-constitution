# SAL-BR-043 — Customer Analytics

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Customer Analytics aggregates sales by canonical Buyer contactId.
2. Metrics include lifetime spending, completed order count, average order value, first purchase, last purchase, purchase frequency, and favorite category where supported.
3. Buyer ranking may sort by spending, order count, or frequency.
4. Merged Contacts resolve to the surviving Contact without losing source lineage.
5. Cancelled/test/invalid orders are excluded.
6. Metrics reconcile with Contact Buyer Analytics.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
