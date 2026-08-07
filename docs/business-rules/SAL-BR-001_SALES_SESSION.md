# SAL-BR-001 — Sales Session

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Sales Session groups one operator's active selling activity before checkout.
2. A Sales Session may contain multiple Claim Carts for different buyers.
3. The authenticated user is the actor; buyer identity is selected independently.
4. Session state must survive normal UI refresh through draft persistence.
5. Closing a session must not delete already-created orders.
6. Session actions are auditable.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
