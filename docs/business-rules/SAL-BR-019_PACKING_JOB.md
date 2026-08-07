# SAL-BR-019 — Packing Job

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. PAID orders may enter PACKING through a Packing Job.
2. Packing Job references the Order ID and assigned/performing operator.
3. Packing view presents all ordered items and required fulfillment information.
4. Operator confirms packed quantities and records packing notes/exceptions.
5. Packing cannot silently substitute inventory.
6. Packing actions and timestamps are auditable.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
