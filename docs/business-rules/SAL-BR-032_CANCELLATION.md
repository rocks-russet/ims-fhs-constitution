# SAL-BR-032 — Cancellation and Recovery

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Cancellation is supported even though normal buyer policy may discourage cancellation.
2. Eligible cancellation states are governed by order lifecycle; cancellation after irreversible fulfillment requires return/refund-style handling.
3. Cancellation records reason, actor, timestamp, and financial state.
4. Reserved inventory is returned to AVAILABLE when safe and applicable.
5. Confirmed payments remain in history and produce refund/credit obligations where needed.
6. Cancellation never deletes the order.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
