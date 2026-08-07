# SAL-BR-035 — Order Merge

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Compatible orders for the same buyer may be merged before packing begins.
2. One Order ID becomes the survivor; absorbed orders remain historically traceable.
3. Inventory reservations transfer atomically.
4. Existing invoice versions become superseded and a new active invoice is generated.
5. Payments already received remain traceable and are reallocated without duplication.
6. Merge failure rolls back completely.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
