# SAL-BR-031 — Manual Sales Adjustment

## Purpose

Govern authorized manual correction of sales values when the normal automated workflow cannot represent a legitimate business event.

## Rules

1. Manual adjustment is exceptional and must not replace normal order amendment, refund, reversal, or cancellation workflows.
2. Each adjustment must reference the Order ID, adjustment type, affected field, previous value, new value, amount impact, reason, evidence, requester, and approver.
3. Permitted adjustment classes include approved discount correction, additional charge correction, shipping correction, fee correction, item-price correction, and non-cash reclassification.
4. Historical records must not be overwritten; the adjustment is recorded as a separate append-only event.
5. Adjustments affecting payable amount require invoice revision and supersession.
6. Adjustments affecting confirmed payment require explicit receivable, refundable, or unapplied balance treatment.
7. Adjustments affecting completed orders require corresponding governed financial entries.
8. Inventory quantity or identity changes must use order amendment, return, replacement, merge, or split rules rather than direct adjustment.
9. Adjustment approval follows the applicable authorization matrix.
10. Repeated adjustments of the same type must trigger process review.

## Invariants

- Every adjustment is attributable and reversible through a governed counter-entry.
- Manual adjustment cannot fabricate payment evidence.
- Order, invoice, wallet, ledger, and report totals must remain consistent.

## Related

- SAL-BR-017
- SAL-BR-023
- FIN-BR-041
- FIN-BR-069
