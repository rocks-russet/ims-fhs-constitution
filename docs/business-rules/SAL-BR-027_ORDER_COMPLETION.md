# SAL-BR-027 — Order Completion

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Only an eligible SHIPPED order may become COMPLETED under the normal lifecycle.
2. Completion requires payment requirements satisfied, packing completed, shipment recorded, and no blocking unresolved exception.
3. Actual shipping data required for settlement must be present.
4. Completion records actor and timestamp.
5. Completion is idempotent and may occur only once.
6. Completion is the trigger for final sales financial realization under IMS FHS v1.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
