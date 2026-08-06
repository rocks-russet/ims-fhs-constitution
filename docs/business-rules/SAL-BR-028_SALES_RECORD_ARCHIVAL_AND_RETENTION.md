# SAL-BR-028 — Sales Record Archival and Retention

## Purpose

Define when sales records may leave the active operational view while remaining available for audit, support, and financial reconstruction.

## Rules

1. Sales records eligible for archival must have a terminal operational state and no unresolved payment, shipment, return, replacement, dispute, refund, or financial exception.
2. Archival must preserve:
   - Sales Session;
   - Claim Cart;
   - Checkout Group;
   - Order;
   - invoice versions;
   - payment references;
   - packing history;
   - shipment history;
   - cancellation history;
   - amendments;
   - returns;
   - replacements;
   - disputes; and
   - related financial references.
3. Archival must not change order status, inventory status, wallet balance, ledger posting, or recognized profit.
4. Archived records retain their original stable identifiers and timestamps.
5. Search by Order ID, buyer reference, inventory ID, invoice ID, tracking number, and external marketplace reference must remain possible.
6. Restoration to the active view is read-only by default.
7. Operational reactivation requires a specific governed workflow and must not replay prior side effects.
8. Active legal hold, audit, dispute, or investigation blocks disposal.
9. Retention duration follows the longest applicable Constitution, financial, legal, and operational requirement.
10. Permanent disposal requires explicit authorization and immutable disposal evidence.

## Invariants

- Archival is not deletion.
- Restoring an archived record cannot duplicate inventory or financial effects.
- A completed sales lifecycle remains reconstructable after archival.

## Related

- SAL-BR-001
- SAL-BR-005
- SAL-BR-014
- FIN-BR-053
- FIN-BR-054
