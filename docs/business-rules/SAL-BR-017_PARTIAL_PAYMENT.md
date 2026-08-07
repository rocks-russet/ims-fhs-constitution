# SAL-BR-017 — Partial Payment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Received amount below the required payable amount is recorded as partial payment.
2. Partial payment preserves confirmed amount and outstanding balance.
3. Order remains not fully PAID until required balance is satisfied, unless an explicitly approved operational exception exists.
4. Order-total changes after partial payment affect only the outstanding/refundable balance; confirmed evidence remains immutable.
5. Cancellation preserves payment history and creates refund/credit handling as required.
6. Partial payment blocks ordinary packing/shipping until payment requirements are satisfied.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
