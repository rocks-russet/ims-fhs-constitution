# SAL-BR-004 — Reservation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1/v2 Inventory reservation and multi-channel listing behavior.

## Rules

1. Sales reserves selected Inventory for a Buyer/Claim Cart/Order context.
2. Listing exposure and reservation are separate concepts: an Inventory item may be listed in multiple channels while reservation exclusivity/quantity is enforced globally.
3. `SERIALIZED_CARD` Inventory is reserved as one whole stable Inventory ID with quantity exactly `1` and cannot have more than one active reservation across all Sales channels.
4. `PRODUCT` Inventory is reserved as one whole stable Inventory ID with quantity exactly `1`, regardless of its physical contents/pack size.
5. Sales MUST NOT create a partial quantity reservation against normal `PRODUCT` Inventory. A smaller Product unit requires canonical Inventory Split/Transformation first.
6. `BULK_CARD_LOT` is the only normal Sales inventory type that supports explicit partial quantity reservation from one source Inventory ID.
7. A serialized or Product Inventory reservation created from any channel makes that whole Inventory ID unavailable for a competing reservation from every other channel.
8. For Bulk, global `availableToSell = physicalQuantity - aggregateActiveReservedQuantity`.
9. Aggregate active Bulk reserved quantity across all Sales channels cannot exceed authoritative physical quantity.
10. Reservation is atomic across all items required by the committing Sales action.
11. Claim/winner assignment inside a Sales Session creates the Buyer reservation atomically with Claim Cart creation/reuse and item assignment.
12. Claim Cart to Order reservation transfer is atomic and cannot temporarily duplicate reserved quantity.
13. Reservation creation does not change owner or permanently alter acquisition cost.
14. For Bulk, reservation creation does not permanently reduce physical quantity or remaining acquisition cost.
15. Eligible cancellation or cart removal releases the reservation.
16. Reservation history remains auditable and retains originating channel/session/order context where applicable.
17. Completion closes/finalizes the reservation only together with successful Inventory consumption.
18. Concurrent reservation attempts must use integrity/concurrency controls that prevent overselling.

## Invariants

- Serialized Card and Product Inventory cannot have duplicate active reservation across channels.
- Serialized Card and Product reservation quantity is always `1` per Inventory ID.
- Only `BULK_CARD_LOT` uses aggregate quantity reservation semantics.
- `aggregateActiveBulkReservedQuantity <= physicalQuantity`.
- Multi-channel listing never bypasses global reservation exclusivity.
- Releasing a reservation restores global availability without reconstructing Inventory.
- Reservation and release are auditable.
- Cross-domain Inventory, Contact, Finance, and Sales references remain consistent.
