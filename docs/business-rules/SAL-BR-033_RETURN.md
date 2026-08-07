# SAL-BR-033 — Return

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Return references original Order ID and affected inventory/items.
2. Return authorization records reason, quantity, evidence, and expected disposition.
3. Returned inventory is not AVAILABLE until physically received and inspected.
4. Inspection records condition and disposition.
5. Return itself does not silently create a refund.
6. Financial impact uses Finance refund/adjustment rules.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
