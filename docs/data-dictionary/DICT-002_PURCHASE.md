# DICT-002 — Purchase Data Dictionary

## Purchase

| Field | Type | Required | Meaning |
|---|---|---:|---|
| purchaseId | string | yes | Stable `PUR-...` identifier |
| sellerContactId | string | yes | Canonical Seller Contact |
| platformId | string/null | no | Acquisition platform |
| purchaseDate | date | yes | Real-world economic date |
| currency | string | yes | IDR baseline |
| shippingCost | decimal | yes | Transaction shipping |
| discountAmount | decimal | yes | Transaction discount |
| taxAmount | decimal | yes | Reserved, default 0 unless active |
| notes | text/null | no | Operational notes |
| actorUserId | string | yes | User committing transaction |
| status | enum | yes | Purchase lifecycle state |
| committedAt | datetime/null | conditional | Commit time |

## Purchase Item

| Field | Type | Required | Meaning |
|---|---|---:|---|
| purchaseItemId | string | yes | Stable line identity |
| purchaseId | string | yes | Parent Purchase |
| itemType | enum | yes | `CARD` or `PRODUCT` |
| cardDefinitionId | string/null | conditional | Card master |
| productDefinitionId | string/null | conditional | Product master |
| quantity | integer | yes | Purchased quantity |
| unitBuyPrice | decimal | yes | Individual buy price |
| itemSubtotal | decimal | yes | unit price × qty |
| ownerCode | string | yes | Economic owner per item |
| allocatedShipping | decimal | yes | Shipping by quantity |
| allocatedDiscount | decimal | yes | Discount weighted by gross value |
| allocatedTax | decimal | yes | Tax allocation |
| finalCost | decimal | yes | Authoritative final cost |
| ownershipSnapshot | object | yes | Capital/profit rule snapshot |
| generatedInventoryIds | array | after commit | Created Inventory IDs |

## Market Snapshot at Purchase

| Field | Type | Meaning |
|---|---|---|
| marketSnapshotId | string | Stable snapshot ID |
| provider | string | PriceCharting EN / Yuyutei JP |
| marketLanguage | string | EN / JP |
| marketPriceAtPurchase | decimal/null | Observed market value |
| observedAt | datetime/null | Provider observation time |
| retrievalStatus | enum | success / unavailable / failed |
| varianceAmount | decimal/null | Buy Price − Market |
| variancePercent | decimal/null | Transaction-time market variance |

Seller behaviour analytics must use this snapshot, not current market price.

## Navigation
Purchase Detail must expose:
- Seller Contact link
- every Purchase Item
- every generated Inventory ID as a clickable Inventory Detail link
- allocation breakdown
- ownership snapshot
- market snapshot at acquisition
