# SAL-BR-003 — Checkout

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Checkout converts one or more compatible Claim Carts into one order draft.
2. Multiple Claim Carts for the same buyer may be merged into one invoice/order.
3. Checkout validates buyer, inventory eligibility, prices, quantities, and commercial adjustments.
4. Checkout creates the order commercial snapshot but does not yet recognize profit.
5. Checkout result must be reproducible from selected carts.
6. Repeated checkout submission must be idempotent.

## WAITING_PAYMENT Order Amendment

1. A Sales Order in `WAITING_PAYMENT` may accept additional eligible Inventory before payment is finalized.
2. An existing Sales Order must not be destructively reversed into a Claim Cart merely to add more items.
3. Additional items may originate from the Order's linked Sales Session or another eligible Sales context.
4. Additional items must first pass the normal Inventory eligibility and reservation rules before being attached to the existing Order.
5. Attaching additional items to an existing `WAITING_PAYMENT` Order must be atomic and auditable.
6. The existing Order Number remains unchanged when additional items are attached.
7. Existing Order-owned reservations remain owned by the Order and must not be released merely because additional items are being added.
8. Newly attached item reservations must become owned by the same Order as part of the amendment transaction.
9. Order commercial totals and commercial snapshot must be recalculated/versioned after a successful amendment.
10. If an Invoice V1 already exists for the Order, the previous Invoice V1 must become `SUPERSEDED`; a new Invoice V1 version must be generated from the amended commercial snapshot before it is used as the active invoice.
11. `WAITING_PAYMENT` amendment does not recognize profit and does not create realized financial events.
12. This amendment flow is not available after the Order leaves `WAITING_PAYMENT` unless a dedicated later-stage amendment rule explicitly permits it.
13. Bulk Card follows normal reservation semantics during amendment. Physical Bulk quantity, acquisition cost, and permanent sold-child transformation remain unchanged until `COMPLETED`.
14. The UI may provide an `Add Items` action and may open the linked Sales Session as the operational context for selecting or claiming additional Inventory, but the Sales Order itself remains the authoritative transaction container after checkout.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
- Order amendment must preserve the original Order identity and prior commercial history.
- Existing reservations must never be silently released during a `WAITING_PAYMENT` amendment.
- An amended Order must remain reproducible from its Order items, linked source records, reservation lineage, and commercial snapshot history.
