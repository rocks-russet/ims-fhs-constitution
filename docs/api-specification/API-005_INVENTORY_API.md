# API-005 — Inventory API

## GET `/api/v1/inventory`
Permission: `INVENTORY_VIEW`

Supports:
- global search
- type/category
- owner / holder / storage
- status
- card metadata
- language
- cost/market ranges
- sort by selected field
- server-side pagination
- dynamic-column-compatible field selection

## GET `/api/v1/inventory/{inventoryNumber}`
Returns type-aware Inventory Detail:
- Card/Product/Bulk metadata
- owner / holder / storage
- cost basis
- current market
- Purchase origin
- Seller link
- Sales link if sold
- lineage
- history
- Portfolio position context

## PATCH `/api/v1/inventory/{inventoryNumber}`
Authorized master-state changes only, e.g. holder/storage/allowed metadata.

## POST `/api/v1/inventory/{inventoryNumber}/ownership-convert`
Permission: ownership conversion capability.
May require approval depending on policy.

## POST `/api/v1/inventory/{inventoryNumber}/split`
Permission: `INVENTORY_SPLIT`
Idempotency-Key: REQUIRED

Validates:
- splittable
- requested positive child quantities
- quantity conservation
- cost conservation
- parent state

Atomic:
- parent update/consume
- child Inventory creation
- lineage
- cost allocation
- history/event

## POST `/api/v1/inventory/{inventoryNumber}/bulk-extract`
Extracts card(s) from BULK_CARD_LOT into Serialized Card Inventory with operator justification.

## POST `/api/v1/inventory/{inventoryNumber}/reserve`
Internal/domain-authorized reservation endpoint; ordinary browser usage should normally occur through Sales flows.

## POST `/api/v1/inventory/{inventoryNumber}/release`
Governed reservation release.

## GET `/api/v1/inventory/{inventoryNumber}/history`
## GET `/api/v1/inventory/{inventoryNumber}/lineage`
