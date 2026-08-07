# SAL-BR-038 — Sales History

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Sales History preserves orders and their lifecycle events after creation.
2. History includes buyer, items, invoices, payments, packing, shipment, completion/cancellation, returns, replacements, and financial references as applicable.
3. Production Sales History is append-only.
4. Archived history remains queryable.
5. Historical Contact and commercial snapshots remain visible.
6. Hard deletion of production sales history is prohibited.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
