# SAL-BR-031 — Direct Sales

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Direct Sale uses the DIRECT payment path and approved FHS receiving account.
2. Direct Invoice V2 includes the selected buyer address and estimated shipping charge where applicable.
3. Direct orders follow the same reservation, payment, packing, shipment, completion, profit, and wallet lifecycle.
4. Direct channel is recorded for history and analytics.
5. Offline/direct operational evidence may be entered with permitted backdating.
6. Direct Sale does not bypass Contact or Inventory rules.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
