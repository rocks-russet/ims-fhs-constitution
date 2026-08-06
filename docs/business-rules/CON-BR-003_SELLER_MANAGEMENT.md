# CON-BR-003 — Seller Management

## Purpose

Govern seller and supplier contacts used by Purchase and acquisition workflows.

## Rules

1. A seller must be represented by a contact with `roles.seller = true`.
2. Seller identity selection must use `contactId`.
3. A seller record may include phones, addresses, marketplace profile, social reference, tags, and notes.
4. Seller creation must check for duplicates before a new contact is committed.
5. Historical purchase records must retain the seller identity or seller snapshot applicable at transaction time.
6. Updating seller contact data must not rewrite completed purchase records.
7. A seller may also be a buyer under the same contact identity.
8. A designated generic seller such as `Other Seller` may be used only when the actual seller cannot reasonably be identified.
9. Use of a generic seller must not prevent later linkage to a real seller through an audited correction.
10. Deactivated sellers cannot be selected for new purchases but remain visible in historical records.

## Invariants

- Seller identity is stable across purchases.
- A seller and buyer with the same real-world identity should not require separate contact records.
- Generic seller use must remain distinguishable from verified seller identity.
- Seller changes do not alter historical acquisition evidence.

## Related

- CON-BR-001
- CON-BR-005
- CON-BR-006
- PUR-BR
