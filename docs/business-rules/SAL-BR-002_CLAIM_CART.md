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
7. `SERIALIZED_CARD` Inventory is selected and sold as one whole Inventory ID with Sales quantity exactly `1`.
8. `PRODUCT` Inventory is selected and sold as one whole Inventory ID with Sales quantity exactly `1`, regardless of the number of physical contents represented by that Inventory ID.
9. Sales MUST NOT partially split, partially reserve, or partially sell a normal `PRODUCT` Inventory ID. Any smaller commercial unit must first be created through canonical Inventory Split/Transformation and receive its own Inventory ID.
10. `BULK_CARD_LOT` is the only normal Sales inventory type that permits explicit partial quantity allocation from one source Inventory ID.
11. Bulk selected quantity cannot exceed global `availableToSell`.
12. Adding a Bulk line creates/owns a quantity reservation; it does not create a derived Bulk Inventory and does not permanently deplete source quantity/cost.
13. One Bulk Lot may have multiple concurrent Sales reservations only while their aggregate quantity does not exceed physical quantity.
14. A Bulk Card Lot may be sold in full or partially without fabricating Serialized child Inventory for unidentified/random Bulk cards.
15. Ordinary Bulk sale cost basis is Inventory-controlled. Claim Cart/Sales does not provide a manual Bulk cost allocation override.
16. Any cost snapshot shown before completion is provisional; finalized COGS is determined by Inventory at completion.
17. Cart items retain source session when applicable, source Inventory identity, selected/reserved quantity, buyer linkage, commercial price, and relevant snapshots.
18. Removing an eligible cart item releases the corresponding reservation.
19. Cart merge into checkout must not duplicate Inventory IDs or over-reserve Bulk quantity.
20. Claim Cart state must remain auditable and recoverable across normal UI refresh.

## Invariants

- Claim Cart is created/reused when Buyer assignment requires reservation, not merely when Inventory is listed.
- Serialized Card and Product Sales quantity are fixed at `1` per Inventory ID.
- Only `BULK_CARD_LOT` permits partial quantity Sales allocation from a single source Inventory ID.
- Product partial sale requires prior Inventory Split/Transformation.
- Reservation cannot cause Bulk available quantity to become negative.
- Claim Cart selection does not permanently mutate Bulk physical quantity or acquisition cost.
- Sales must use Inventory as source of truth for quantity and cost basis.
- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
