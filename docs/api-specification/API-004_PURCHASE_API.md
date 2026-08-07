# API-004 — Purchase API

## GET `/api/v1/purchases`
Permission: Purchase view capability.
Supports search/filter/sort/pagination.

## POST `/api/v1/purchases`
Creates Purchase draft/session document.

## GET `/api/v1/purchases/{purchaseNumber}`
Returns Purchase Detail including:
- Seller
- platform/date
- shared costs
- all items
- owner per item
- allocation breakdown
- market snapshot
- generated Inventory IDs after commit

## PATCH `/api/v1/purchases/{purchaseNumber}`
Draft-only mutation.

## POST `/api/v1/purchases/{purchaseNumber}/items`
Adds CARD/PRODUCT item.

## PATCH `/api/v1/purchases/{purchaseNumber}/items/{purchaseItemId}`
Updates quantity, buy price, owner, metadata while draft.

## DELETE `/api/v1/purchases/{purchaseNumber}/items/{purchaseItemId}`
Draft-only.

## POST `/api/v1/purchases/{purchaseNumber}/market-snapshot/refresh`
Refresh transaction-time market snapshot while still draft.
Uses Market Engine abstraction.

## POST `/api/v1/purchases/{purchaseNumber}/commit`
Permission: `PURCHASE_CREATE`
Idempotency-Key: REQUIRED

Server validation:
- draft state
- Seller valid
- all items valid
- owner assignment authorized
- ownership snapshots resolved
- cost allocation reconciles
- required Product Category approvals complete

Atomic:
- Purchase commit
- Purchase Item snapshot
- Inventory creation
- generated business IDs
- transaction market snapshot linkage
- outbox/domain events required for correctness

Response:
```json
{
  "purchaseNumber":"PUR-...",
  "status":"COMMITTED",
  "generatedInventoryNumbers":["INV-..."]
}
```

Async:
- Portfolio refresh
- Analytics refresh
- non-critical notification

Publishes:
- PurchaseCommitted
- InventoryCreated
