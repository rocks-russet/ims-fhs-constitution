# SAL-BR-034 — Delivery Confirmation

## Purpose

Define acceptable evidence and state handling for confirming that a shipped order reached the buyer or an authorized recipient.

## Rules

1. Delivery confirmation must reference the Order ID and shipment record.
2. Acceptable confirmation sources include courier-delivered status, signed proof of delivery, marketplace delivery confirmation, buyer acknowledgement, or authorized manual confirmation with evidence.
3. The confirmation record must include source, timestamp, confirmer, evidence reference, and any delivery notes.
4. Tracking status alone must not be treated as authoritative when contradictory evidence or an active shipment exception exists.
5. Manual confirmation requires justification and authorized actor identification.
6. Partial delivery must identify delivered and undelivered packages or items separately.
7. Delivery confirmation does not by itself complete the order unless all completion requirements under SAL-BR-022 are satisfied.
8. A later dispute, return, or proof of failed delivery must not erase the original confirmation; it creates a new exception or claim event.
9. Duplicate delivery confirmations must be idempotent.
10. Delivery confirmation must remain linked to the exact shipment attempt when replacement or reshipment exists.

## Invariants

- One confirmation cannot be applied to an unrelated shipment.
- Delivery confirmation never fabricates courier evidence.
- Shipment and order history remain append-only.
- Completion remains blocked while a material delivery exception is unresolved.

## Related

- SAL-BR-010
- SAL-BR-021
- SAL-BR-022
- SAL-BR-026
