# SAL-BR-041 — Sales Detail

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Sales Detail presents the complete order lifecycle in one view.
2. It shows buyer snapshot, items, price summary, invoices, payment components, packing, supplies used, shipment, completion/cancellation, and financial references.
3. Current state and historical events are visually distinguishable.
4. Linked Contact, Inventory, Wallet, and Purchase references may be opened according to authorization.
5. Committed historical values are read-only except through governed actions.
6. Audit metadata is visible to authorized users.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
