# SAL-BR-033 — Sales Locking Policy

## Purpose

Define when sales records become protected from ordinary modification and what operations remain permitted at each lifecycle stage.

## Rules

1. `WAITING_PAYMENT` orders may allow governed amendment, payment-method switching, merge, split, and cancellation.
2. `PAID` orders are locked against item removal, buyer reassignment, and payable reduction unless an approved correction or refund workflow applies.
3. `PACKING` orders are locked against merge, split, and payment-method switching.
4. `SHIPPED` orders are locked against ordinary commercial amendment and cancellation.
5. `COMPLETED` orders are fully locked against ordinary mutation.
6. Locked orders may still receive append-only events such as payment evidence, shipment updates, disputes, returns, refunds, reversals, adjustments, and audit notes when allowed by their respective rules.
7. Lock state must be derived from authoritative lifecycle state, not from client-side UI state.
8. Administrative unlock, if supported, requires explicit approval, reason, scope, and time limit.
9. Unlocking must not remove the original lifecycle or lock history.
10. Concurrent writes against a locked or version-changed order must be rejected.

## Invariants

- Locking never deletes data.
- Completed financial recognition cannot be altered through ordinary edit operations.
- The server is authoritative for lock enforcement.
- Historical lock transitions remain auditable.

## Related

- SAL-BR-005
- SAL-BR-017
- SAL-BR-022
- SAL-BR-032
