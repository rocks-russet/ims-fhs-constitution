# CON-BR-015 — Contact Transaction Snapshot

## Purpose

Define how contact data is snapshotted into Purchase, Sales, Invoice, Shipment, and related records so historical transactions remain reproducible.

## Rules

1. A transaction snapshot must reference the source `contactId`.
2. The snapshot must contain only fields required for that transaction context.
3. A Sales snapshot may include buyer display name, selected phone, selected delivery address, and external marketplace identity where applicable.
4. A Purchase snapshot may include seller display name, selected contact method, seller platform identity, and relevant origin information.
5. The snapshot is created at the governing transaction event, such as invoice issuance, purchase commit, or shipment creation.
6. Later changes to the contact master must not rewrite an existing transaction snapshot.
7. A corrected transaction snapshot requires an authorized amendment or document revision and must preserve the prior version.
8. Snapshot fields must remain traceable to their source contact and selection context.
9. Contact merge must not rewrite original snapshot values, although navigation may resolve to the surviving contact.
10. Transaction snapshots must not copy unrelated private contact fields.

## Invariants

- Historical documents remain reproducible after contact changes.
- A snapshot is immutable except through a governed versioned correction.
- Snapshot creation does not create a new contact identity.
- Only context-required contact data is copied.

## Related

- CON-BR-004
- CON-BR-006
- SAL-BR-023
- SAL-BR-028
