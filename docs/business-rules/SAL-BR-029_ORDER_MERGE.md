# SAL-BR-029 — Order Merge

## Purpose

Govern consolidation of two or more compatible sales orders into one surviving order without duplicating inventory, payment, invoice, shipment, or financial effects.

## Rules

1. All source orders must belong to the same buyer.
2. Orders may be merged only before packing begins.
3. Orders with different currencies, incompatible payment paths, unresolved disputes, active shipment records, or conflicting buyer instructions must not be merged.
4. One order becomes the surviving Order ID; every absorbed order is marked `MERGED` and references the surviving order.
5. All inventory reservations must transfer atomically to the surviving order.
6. Existing payment components must remain individually traceable and be reallocated to the surviving order without duplicate recognition.
7. Existing invoices become `SUPERSEDED`; a new authoritative invoice version must be generated.
8. Discounts, additional charges, shipping estimates, and marketplace calculations must be recomputed under the surviving order.
9. The merge record must include source Order IDs, surviving Order ID, actor, timestamp, reason, and before/after totals.
10. Failure at any stage must roll back the merge completely.

## Invariants

- No inventory item may appear twice in the surviving order.
- The sum of valid payments before and after the merge must remain unchanged.
- Absorbed orders must not remain independently fulfillable.
- Historical order identities remain searchable and auditable.

## Related

- SAL-BR-003
- SAL-BR-017
- SAL-BR-019
- SAL-BR-023
