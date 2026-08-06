# SAL-BR-027 — Marketplace Dispute Management

## Purpose

Govern disputes, claims, chargebacks, withheld settlements, and platform-mediated buyer complaints.

## Rules

1. Every marketplace dispute must reference the Order ID, marketplace, external case ID, dispute type, disputed amount, open timestamp, evidence deadline, and responsible operator.
2. Dispute status must be one of:
   - `OPEN`;
   - `EVIDENCE_REQUIRED`;
   - `SUBMITTED`;
   - `UNDER_PLATFORM_REVIEW`;
   - `WON`;
   - `LOST`;
   - `PARTIALLY_RESOLVED`;
   - `CLOSED`; or
   - `EXPIRED`.
3. Evidence may include invoice, payment record, listing detail, buyer communication, packing evidence, shipment evidence, tracking, and delivery confirmation.
4. Opening a dispute must not delete or alter the original sales, shipment, or payment records.
5. Amounts withheld by the marketplace must remain separately identifiable from completed settlement.
6. A lost or partially lost dispute must create the required refund, deduction, reversal, write-off, or financial exception.
7. A won dispute must reconcile released funds to the related settlement.
8. Evidence submission, platform decisions, deadlines, and operator actions must be auditable.
9. The order status may remain completed while the dispute is open, but the unresolved financial exposure must be visible.
10. Duplicate dispute records for the same external case ID are prohibited.

## Invariants

- Platform decisions do not erase the original transaction history.
- Disputed and undisputed amounts remain distinguishable.
- Dispute closure requires both operational and financial resolution.

## Related

- SAL-BR-008
- SAL-BR-010
- SAL-BR-013
- SAL-BR-021
- FIN-BR-052
