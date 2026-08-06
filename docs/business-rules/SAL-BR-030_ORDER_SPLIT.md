# SAL-BR-030 — Order Split

## Purpose

Govern division of one sales order into multiple child orders while preserving commercial, inventory, payment, and fulfillment traceability.

## Rules

1. An order may be split only before packing begins.
2. The split request must define which order items and quantities move to each child order.
3. Every child order receives a unique Order ID and references the parent Order ID.
4. Inventory reservations must be reassigned atomically and must remain exclusive.
5. Payment already received must be explicitly allocated across child orders or retained as unapplied balance until allocation is approved.
6. Discounts, additional charges, shipping estimates, and marketplace components must be allocated using a documented deterministic method.
7. Existing invoices become `SUPERSEDED`; each active child order requires its own valid invoice flow.
8. The parent order must become `SPLIT` or otherwise non-fulfillable after successful creation of the child orders.
9. A split must record actor, timestamp, reason, allocation method, source values, and resulting values.
10. If any child order cannot be created validly, the entire split must fail without partial side effects.

## Invariants

- The combined child item quantities equal the parent item quantities.
- The combined allocated payment cannot exceed valid payment received.
- No inventory item may remain reserved simultaneously by parent and child orders.
- Parent and child histories remain reconstructable.

## Related

- SAL-BR-017
- SAL-BR-018
- SAL-BR-019
- SAL-BR-023
