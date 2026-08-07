# SAL-BR-006 — Buyer Snapshot

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Order and invoice generation store buyer-facing snapshot fields required for the transaction.
2. Snapshot may include buyer name, selected phone, selected address, and relevant marketplace identity.
3. Later Contact edits must not rewrite existing order, invoice, or shipment snapshots.
4. Changing the selected address before fulfillment requires a new transaction snapshot and invoice revision where displayed.
5. Snapshot always retains source contactId.
6. Only transaction-relevant Contact fields are copied.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
