# SAL-BR-002 — Claim Cart

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Inventory Bulk decisions.

## Rules

1. A Claim Cart is buyer-oriented and belongs to exactly one Buyer Contact.
2. One buyer may have multiple Claim Carts, e.g. Auction #3 or Claimsale #2.
3. Claim Cart may contain serialized CARD Inventory, PRODUCT Inventory, and eligible BULK_CARD_LOT Inventory.
4. Only AVAILABLE/LISTED inventory eligible for reservation may be added.
5. Serialized Inventory is reserved by Inventory ID; quantity-based Inventory such as BULK_CARD_LOT is reserved by source Inventory ID plus an explicit quantity that cannot exceed currently available quantity.
6. A Bulk Card Lot may be sold in full or partially without creating serialized child Inventory for unidentified/random Bulk cards.
7. For an ordinary partial Bulk sale, Sales consumes the cost basis supplied by Inventory according to the pre-sale weighted-average remaining cost rule; Sales does not provide a manual Bulk cost allocation override.
8. Cart items retain source session, source Inventory identity, selected/reserved quantity, and buyer linkage.
9. Cart merge into checkout must not duplicate serialized Inventory or over-reserve quantity-based Inventory.

## Invariants

- Reservation cannot cause available Bulk quantity to become negative.
- Sales must use Inventory as the source of truth for Bulk quantity and consumed cost basis.
- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
