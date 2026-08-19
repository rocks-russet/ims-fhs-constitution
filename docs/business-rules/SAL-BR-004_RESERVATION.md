# SAL-BR-004 — Reservation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1/v2 Inventory reservation behavior.

## Rules

1. Sales reserves selected Inventory for a Buyer/Claim Cart/Order context.
2. Serialized Inventory is reserved as a whole stable Inventory ID and cannot have more than one active reservation.
3. Quantity-bearing Inventory such as `BULK_CARD_LOT` is reserved by source Inventory ID plus explicit quantity.
4. Quantity reservation MUST NOT require the entire source Inventory status to become RESERVED when unreserved quantity remains sellable.
5. `availableToSell = physicalQuantity - activeReservedQuantity` for quantity-bearing Bulk Inventory.
6. Aggregate active reserved quantity cannot exceed authoritative physical quantity.
7. Reservation is atomic across all items required by the committing Sales action.
8. Claim Cart to Order reservation transfer is atomic and cannot temporarily duplicate reserved quantity.
9. Reservation creation does not change owner or permanently alter acquisition cost.
10. For Bulk, reservation creation does not permanently reduce physical quantity or remaining acquisition cost.
11. Eligible cancellation or cart removal releases the reservation.
12. Reservation history remains auditable.
13. Completion closes/finalizes the reservation only together with successful Inventory consumption.
14. Concurrent reservation attempts must use integrity/concurrency controls that prevent overselling.

## Invariants

- Serialized Inventory cannot have duplicate active reservation.
- `activeReservedQuantity <= physicalQuantity`.
- Releasing a reservation restores availability without reconstructing Inventory.
- Reservation and release are auditable.
- Cross-domain Inventory, Contact, Finance, and Sales references remain consistent.
