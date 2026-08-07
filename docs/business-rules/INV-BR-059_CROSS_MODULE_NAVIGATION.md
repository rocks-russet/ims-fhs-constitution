# INV-BR-059 — Inventory Cross-Module Navigation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Detail shows its source Purchase ID, Seller, Purchase Date, Platform, price/allocation details, and Final Cost when originating from Purchase.
2. Clicking Purchase ID opens Purchase Detail with all items bought in that same transaction.
3. Each generated inventoryId in Purchase Detail can open its Inventory Detail.
4. Clicking Seller opens the Seller Contact Detail.
5. Sold Inventory can link to its Sales Order and Buyer Contact where authorized.
6. All cross-links use stable IDs and remain available historically.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
