# SAL-BR-013 — Payment Method Switching

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. A buyer may switch DIRECT ↔ MARKETPLACE ↔ MARKETPLACE_SPLIT while the order is still operationally eligible, even after Invoice V2 has been generated.
2. The currently active Invoice V2 becomes SUPERSEDED when the method changes.
3. A new Invoice V2 is generated for the new method.
4. Confirmed payment evidence is never reclassified merely by switching method.
5. Existing paid components are preserved and any remaining balance is recalculated.
6. Switching is blocked after fulfillment reaches a stage where the commercial payment instruction can no longer safely change.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
