# SAL-BR-024 — Payment Method Switching

## Purpose

Govern switching an order between Direct and Marketplace payment paths while preserving invoice, payment, and settlement integrity.

## Rules

1. A payment-method switch is permitted only while the order is in `WAITING_PAYMENT`, unless an approved correction workflow explicitly applies.
2. Switching Direct to Marketplace must:
   - invalidate the active Direct Invoice V2;
   - remove Direct-only payable instructions;
   - calculate the approved marketplace checkout value; and
   - issue a new Marketplace Invoice V2.
3. Switching Marketplace to Direct must:
   - invalidate the active Marketplace Invoice V2;
   - remove marketplace-only payable instructions;
   - require a valid buyer address;
   - require an estimated shipping charge where applicable; and
   - issue a new Direct Invoice V2.
4. The switch must record actor, timestamp, reason, previous method, new method, and affected invoice versions.
5. Existing confirmed payment components cannot be reclassified merely by switching the order method.
6. Any received payment before the switch must be preserved and explicitly allocated under partial-payment or multi-payment rules.
7. Marketplace listing or checkout references that are no longer valid must be closed or marked superseded.
8. Repeated requests for the same already-active method must be idempotent.
9. Payment-method switching must not release reserved inventory.
10. Switching is blocked once packing has begun.

## Invariants

- Exactly one primary payment path is active at a time.
- Historical payment-method selections remain auditable.
- Switching cannot duplicate receivables or payment recognition.

## Related

- SAL-BR-007
- SAL-BR-008
- SAL-BR-015
- SAL-BR-016
- SAL-BR-023
