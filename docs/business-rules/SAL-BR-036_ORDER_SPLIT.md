# SAL-BR-036 — Order Split

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. An order may be split before packing begins.
2. Child orders receive unique Order IDs and reference the parent.
3. Inventory reservations are reassigned atomically.
4. Existing payments must be explicitly allocated across child orders or remain unapplied.
5. Invoices are regenerated for resulting active orders.
6. Parent order becomes non-fulfillable after successful split.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
