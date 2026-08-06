# CON-BR-004 — Address Management

## Purpose

Govern reusable buyer and seller addresses while keeping address master data separate from shipment and invoice lifecycle rules.

## Rules

1. Every address must belong to one contact and have a stable address identity within that contact.
2. An address should contain:
   - recipient name;
   - phone where applicable;
   - address lines;
   - district or locality;
   - city or regency;
   - province;
   - postal code;
   - country; and
   - notes or delivery instructions where required.
3. A contact may have multiple addresses.
4. One address may be marked as default for a defined operational purpose.
5. Selecting an address for an order must create an order-level address snapshot.
6. Updating the contact address afterward must not change the snapshot on an existing invoice, shipment, or completed order.
7. Incomplete addresses may be saved as draft contact data but must not be used for Direct fulfillment until required fields are complete.
8. Address deletion is prohibited when historically referenced; it may be deactivated instead.
9. Duplicate or materially equivalent addresses should be detected before creation.
10. Address changes must record actor, timestamp, and changed fields.

## Invariants

- Shipment history remains reproducible after contact-address updates.
- An order references one authoritative delivery-address snapshot for each active fulfillment path.
- Deactivated addresses remain resolvable for historical records.
- Address master data does not determine shipping status.

## Related

- CON-BR-001
- CON-BR-002
- SAL-BR-007
- SAL-BR-024
