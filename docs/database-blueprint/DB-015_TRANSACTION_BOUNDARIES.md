# DB-015 — Transaction Boundaries

## Purchase Commit
Atomic:
- final validation
- Purchase status commit
- cost allocation snapshot
- ownership snapshot
- required business-number reservation
- Inventory creation
- Purchase market snapshot linkage
- required domain event/outbox record

Async after commit:
- Portfolio refresh
- Analytics refresh
- non-critical notifications
- routine current-market refresh

## Inventory Split / Transformation
Atomic:
- lock/validate parent quantity
- calculate quantity/cost conservation
- create child Inventory
- update/consume parent state
- lineage records
- history/event

## Reservation
Atomic protection must prevent:
- duplicate serialized reservation
- quantity over-reservation

## Sales Completion
Atomic authoritative completion should cover the state required to guarantee:
- Order becomes COMPLETED exactly once
- Inventory final sale state
- final transaction snapshot/event
- Finance trigger/outbox

Finance processing may occur through a reliable event/outbox flow, but user-visible Completion must never produce duplicate profit/wallet effects on retry.

## Finance
Wallet Posting + reconciled wallet balance update + Financial Event status are atomic.
Internal transfer debit and credit are atomic.

## Withdrawal
Approval is separate history.
Completion + wallet debit effect is atomic/idempotent.

## UI
UI `COMMITTING` lock prevents ordinary duplicate clicks but database/idempotency controls remain authoritative.
