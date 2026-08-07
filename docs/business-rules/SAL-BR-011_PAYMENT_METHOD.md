# SAL-BR-011 — Payment Method

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. IMS FHS v1 supports DIRECT, MARKETPLACE, and MARKETPLACE_SPLIT as sales payment paths.
2. Payment method is an order-level commercial choice and may change while the order remains eligible.
3. The active method determines Invoice V2 content and payment instructions.
4. Payment method does not alter reserved inventory ownership.
5. Confirmed payment components retain their original method even if the remaining balance uses another method.
6. Payment method history is auditable.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
