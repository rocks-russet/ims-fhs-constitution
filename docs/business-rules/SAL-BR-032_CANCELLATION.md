# SAL-BR-032 — Cancellation and Recovery

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 quantity reservation behavior.

## Rules

1. Cancellation is supported even though normal buyer policy may discourage cancellation.
2. Eligible cancellation states are governed by the Order lifecycle; cancellation after irreversible fulfillment requires return/refund-style handling.
3. Cancellation records reason, actor, timestamp, and financial state.
4. Active serialized Inventory reservations are released to the applicable available state when safe.
5. Active quantity reservations, including `BULK_CARD_LOT`, are released without permanently mutating source physical quantity or acquisition cost.
6. A pre-completion Bulk cancellation MUST NOT require merge-back because reservation did not create a permanent split.
7. Confirmed payments remain in history and produce refund/credit obligations where required.
8. Cancellation never deletes the Order.
9. Reservation release must be idempotent and auditable.

## Invariants

- Cancellation cannot leave orphan active reservations.
- Releasing Bulk reservation cannot change physical quantity or acquisition cost.
- Historical transaction evidence remains reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references remain consistent.
