# SAL-BR-027 — Order Completion

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Bulk reservation finalization.

## Rules

1. Only an eligible SHIPPED order may become COMPLETED under the normal lifecycle.
2. Completion requires payment requirements satisfied, packing completed, shipment recorded, and no blocking unresolved exception.
3. Actual shipping data required for settlement must be present.
4. Completion records actor and timestamp.
5. Completion is idempotent and may occur only once.
6. Completion is the permanent Sales financial realization boundary.
7. Before publishing completion, IMS validates all active Inventory reservations owned by the Order.
8. For serialized Inventory, completion consumes/finalizes the reserved Inventory according to canonical Inventory lifecycle rules.
9. For reserved `BULK_CARD_LOT` quantity, completion atomically:
   - validates the Order's active reserved quantity;
   - consumes the finalized physical quantity from the source Bulk Inventory;
   - allocates canonical weighted-average acquisition cost;
   - reduces source remaining quantity and remaining acquisition cost;
   - records immutable Sales-to-Inventory consumption provenance;
   - closes the reservation;
   - returns finalized COGS for Sales/Finance processing.
10. A repeated completion request MUST NOT consume Inventory quantity or cost twice.
11. Completion must fail atomically if required Inventory finalization cannot be completed.
12. Profit/Finance effects may be published only from a successfully completed, idempotent completion boundary.

## Invariants

- Order completion is recorded at most once.
- Inventory consumption is recorded at most once.
- Bulk quantity/cost conservation holds after completion.
- Finalized COGS corresponds to actual consumed Inventory.
- Historical transaction evidence remains reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references remain consistent.
