# SAL-BR-004 — Reservation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1/v2 Inventory reservation and multi-channel listing behavior.

## Rules

1. Sales reserves selected Inventory for a Buyer/Claim Cart/Order context.
2. Listing exposure and reservation are separate concepts: an Inventory item may be listed in multiple channels while reservation exclusivity/quantity is enforced globally.
3. Serialized Inventory is reserved as a whole stable Inventory ID and cannot have more than one active reservation across all Sales channels.
4. A serialized Inventory reservation created from any channel makes that Inventory unavailable for a competing reservation from every other channel.
5. Quantity-bearing Inventory such as PRODUCT or `BULK_CARD_LOT` is reserved by source Inventory ID plus explicit quantity.
6. Quantity reservation MUST NOT require the entire source Inventory status to become RESERVED when unreserved quantity remains sellable.
7. For quantity-bearing Inventory, global `availableToSell = physicalQuantity - aggregateActiveReservedQuantity`.
8. Aggregate active reserved quantity across all Sales channels cannot exceed authoritative physical quantity.
9. Reservation is atomic across all items required by the committing Sales action.
10. Claim/winner assignment inside a Sales Session creates the Buyer reservation atomically with Claim Cart creation/reuse and item assignment.
11. Claim Cart to Order reservation transfer is atomic and cannot temporarily duplicate reserved quantity.
12. Reservation creation does not change owner or permanently alter acquisition cost.
13. For Bulk, reservation creation does not permanently reduce physical quantity or remaining acquisition cost.
14. Eligible cancellation or cart removal releases the reservation.
15. Reservation history remains auditable and retains originating channel/session/order context where applicable.
16. Completion closes/finalizes the reservation only together with successful Inventory consumption.
17. Concurrent reservation attempts must use integrity/concurrency controls that prevent overselling.

## Invariants

- Serialized Inventory cannot have duplicate active reservation across channels.
- `aggregateActiveReservedQuantity <= physicalQuantity`.
- Multi-channel listing never bypasses global reservation exclusivity.
- Releasing a reservation restores global availability without reconstructing Inventory.
- Reservation and release are auditable.
- Cross-domain Inventory, Contact, Finance, and Sales references remain consistent.
