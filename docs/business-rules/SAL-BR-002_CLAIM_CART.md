# SAL-BR-002 — Claim Cart

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Inventory Bulk / Sales Session decisions.

## Rules

1. A Claim Cart is buyer-oriented and belongs to exactly one Buyer Contact.
2. One buyer may have multiple Claim Carts, e.g. Auction #3 or Claimsale #2.
3. Within a Sales Session, claim/winner assignment may automatically create or reuse an appropriate active Claim Cart for the selected Buyer.
4. A Buyer does not need a Claim Cart merely because Inventory is listed in a Sales Session.
5. Claim Cart may contain serialized CARD Inventory, PRODUCT Inventory, and eligible `BULK_CARD_LOT` Inventory.
6. Only Inventory with currently sellable availability may be assigned/reserved into a Claim Cart.
7. Serialized Inventory is selected by Inventory ID; quantity-based Inventory such as `BULK_CARD_LOT` is selected by source Inventory ID plus explicit quantity.
8. Bulk selected quantity cannot exceed global `availableToSell`.
9. Adding a Bulk line creates/owns a quantity reservation; it does not create a derived Bulk Inventory and does not permanently deplete source quantity/cost.
10. One Bulk Lot may have multiple concurrent Sales reservations only while their aggregate quantity does not exceed physical quantity.
11. A Bulk Card Lot may be sold in full or partially without fabricating Serialized child Inventory for unidentified/random Bulk cards.
12. Ordinary Bulk sale cost basis is Inventory-controlled. Claim Cart/Sales does not provide a manual Bulk cost allocation override.
13. Any cost snapshot shown before completion is provisional; finalized COGS is determined by Inventory at completion.
14. Cart items retain source session when applicable, source Inventory identity, selected/reserved quantity, buyer linkage, commercial price, and relevant snapshots.
15. Removing an eligible cart item releases the corresponding reservation.
16. Cart merge into checkout must not duplicate serialized Inventory or over-reserve quantity-based Inventory.
17. Claim Cart state must remain auditable and recoverable across normal UI refresh.

## Invariants

- Claim Cart is created/reused when Buyer assignment requires reservation, not merely when Inventory is listed.
- Reservation cannot cause available quantity to become negative.
- Claim Cart selection does not permanently mutate Bulk physical quantity or acquisition cost.
- Sales must use Inventory as source of truth for quantity and cost basis.
- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
