# CON-BR-010 — Default Address Policy

## Purpose

Define how default contact addresses are assigned and used without overriding order-specific delivery choices.

## Rules

1. A contact may have one default address per defined purpose, such as buyer delivery or seller origin.
2. Setting a new default must unset the previous default for the same purpose atomically.
3. A default address must be active and sufficiently complete for its intended use.
4. Default status is a convenience for selection and does not create a transaction snapshot by itself.
5. An order or purchase may explicitly select a non-default address.
6. Once an address is snapshotted into an invoice, shipment, or purchase record, later default changes must not alter that snapshot.
7. Deactivating a default address must either assign another eligible default or leave the purpose without a default.
8. The system must not silently choose an incomplete or inactive address.
9. Default-address changes must record actor and timestamp.
10. Merging contacts must resolve conflicting defaults explicitly.

## Invariants

- At most one active default exists per contact and purpose.
- Default changes do not rewrite historical transactions.
- Transaction-specific selection overrides the contact default.
- An inactive address cannot remain an effective default.

## Related

- CON-BR-004
- CON-BR-006
- SAL-BR-007
- SAL-BR-024
