# SAL-BR-016 — Payment Confirmation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Payment confirmation requires traceable evidence of amount, destination/channel, transaction reference, timestamp, and confirming operator.
2. Ambiguous, pending, reversed, or unverifiable payments must not be confirmed as final.
3. Confirmed payment updates the order paid balance.
4. Duplicate external payment references must be blocked.
5. All buyer direct payments route according to the approved FHS receiving-account policy.
6. Payment confirmation does not recognize final profit until order completion.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
