# CON-BR-009 — Phone Number Management

## Purpose

Govern storage, normalization, uniqueness review, and use of phone numbers associated with contacts.

## Rules

1. A contact may contain multiple phone numbers.
2. Each phone entry must retain:
   - original entered value;
   - normalized value;
   - label or purpose where applicable;
   - verification status where supported; and
   - active status.
3. Normalization must remove non-semantic formatting and apply the approved country-code policy.
4. The original entered value must remain available for audit and display.
5. Phone matching for duplicate detection must use normalized values.
6. A shared phone number may exist across contacts only when a legitimate reason is recorded.
7. A phone number must not be treated as the sole authoritative identity of a contact.
8. Deactivated phone numbers remain visible in historical contact records.
9. Updating a contact phone does not alter phone values already snapshotted in invoices, shipments, or transaction evidence.
10. Restricted phone data must follow contact access-control rules.

## Invariants

- Normalization does not overwrite the original value.
- One malformed phone number cannot block access to the contact record.
- Shared phone numbers do not trigger automatic merge.
- Historical snapshots remain unchanged.

## Related

- CON-BR-002
- CON-BR-003
- CON-BR-005
