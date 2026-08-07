# SAL-BR-018 — Multi Payment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. One order may contain multiple payment transactions or channels.
2. Each payment component has its own identity, amount, method, reference, timestamp, and status.
3. Total valid allocated payments plus remaining balance must reconcile to the payable amount.
4. Failed/reversed components reduce recognized paid amount until resolved.
5. Overpayment remains separately identifiable as refundable or credit balance.
6. Payment components remain visible after order completion.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
