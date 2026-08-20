# INV-BR-032 — Inventory Listing Status

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery and multi-channel Sales behavior.

## Rules

1. Listing status identifies whether Inventory is offered for sale and on which approved channel references.
2. One Inventory item may have multiple concurrent listing references, including Sales Sessions and external marketplace/channel listings.
3. Adding Inventory to a Sales Session creates/maintains listing exposure for that session and does not by itself create a reservation.
4. LISTED Inventory remains owned Inventory until reserved/sold.
5. Listing status does not itself create a Claim Cart or Sales Order.
6. Listing and reservation are independent: multiple listings may coexist, but reservation availability is globally enforced across all channels.
7. `SERIALIZED_CARD` and `PRODUCT` Inventory are listed as whole Inventory IDs. Their Sales listing quantity is exactly `1` per Inventory ID.
8. The number of physical contents inside a Product Inventory ID does not make that Product partially listable in Sales.
9. If a Product must be offered as a smaller commercial unit, Inventory Split/Transformation must occur first and the resulting child Inventory ID is listed instead.
10. `BULK_CARD_LOT` may expose an explicit listed quantity from its source Inventory ID, subject to global `availableToSell`.
11. For Serialized Card or Product Inventory, one active reservation makes that whole Inventory ID unavailable for any competing reservation regardless of how many listing references remain open.
12. For Bulk, each channel may continue offering only quantity that remains within global `availableToSell`.
13. Listing references are retained historically after closure.
14. Listing status must remain consistent with sold/reserved availability and must never be used to bypass reservation integrity.

## Invariants

- Multiple concurrent listings do not imply multiple sellable copies.
- Serialized Card and Product are whole-Inventory-ID listings.
- Partial Product listing requires prior Inventory Split/Transformation.
- Only `BULK_CARD_LOT` permits quantity-based Sales listing from one source Inventory ID.
- Listing does not create reservation.
- Global reservation availability governs all channels.
- Historical source/listing records remain reconstructable.
- Derived analytics never silently mutate transaction or Inventory source data.
- Cross-module references use stable IDs.
