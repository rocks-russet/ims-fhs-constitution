# SAL-BR-023 — Invoice Revision and Supersession

## Purpose

Govern correction and regeneration of invoices without losing prior commercial instructions or creating conflicting payable documents.

## Rules

1. Every invoice version must reference one Order ID and one invoice lineage.
2. A revised invoice must receive a new version number and generation timestamp.
3. The previous active invoice becomes `SUPERSEDED` when the new version is issued.
4. Superseded invoices remain retained and visible for audit but must not be presented as the current payable instruction.
5. Invoice revision is mandatory when an approved order amendment changes:
   - item composition;
   - item subtotal;
   - discount;
   - additional charge;
   - shipping charge;
   - payment method;
   - marketplace percentage;
   - marketplace checkout value; or
   - buyer delivery detail shown on the invoice.
6. A revision must record the reason, actor, previous invoice version, and changed commercial fields.
7. Invoice V1 and Invoice V2 remain distinct document stages; revision does not collapse them into one document.
8. A revision after payment confirmation must disclose the confirmed amount and any additional receivable, overpayment, refund, or credit balance.
9. Invoice numbering and versioning must be deterministic and idempotent.
10. Downloaded or exported invoice artifacts must display their version and status.

## Invariants

- Only one invoice version per invoice stage may be `ACTIVE` at a time.
- Supersession never deletes prior invoice evidence.
- The active invoice total must match the authoritative current order total.

## Related

- SAL-BR-006
- SAL-BR-007
- SAL-BR-017
- SAL-BR-018
