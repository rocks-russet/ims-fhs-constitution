# SAL-BR-045 — Sales Transaction Snapshot

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. At checkout/order creation, Sales stores immutable commercial snapshots required to reproduce the transaction.
2. Snapshot includes Buyer reference, selected address when applicable, item identities, item prices, discount, additional charge, source reference/link, ownership/profit snapshots, and other committed commercial values.
3. Payment-method and marketplace-fee snapshots are versioned as they become applicable.
4. Later Contact, Inventory master, template, or fee-profile changes do not rewrite prior snapshots.
5. Invoice and financial calculations must reference the correct active transaction snapshot/version.
6. Corrections create new versioned events rather than silent mutation.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
