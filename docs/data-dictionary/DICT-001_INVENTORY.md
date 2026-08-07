# DICT-001 — Inventory Data Dictionary

## Purpose
Define authoritative Inventory data concepts shared by Inventory, Purchase, Sales, Finance, Portfolio, and Market.

## Core Inventory

| Field | Type | Required | Mutable | Meaning |
|---|---|---:|---:|---|
| inventoryId | string | yes | no | Stable `INV-...` identifier |
| inventoryType | enum | yes | controlled | `SERIALIZED_CARD`, `BULK_CARD_LOT`, `PRODUCT`, `PACKING_SUPPLY` |
| productDefinitionId | string/null | conditional | controlled | Product master reference |
| cardDefinitionId | string/null | conditional | controlled | Card DB reference |
| ownerCode | string | yes | yes via conversion | Economic owner |
| holderCode | string/null | no | yes | Current physical holder |
| storageId | string/null | no | yes | Current storage location |
| availabilityStatus | enum | yes | yes | Availability / sale state |
| originType | enum | yes | no | `PURCHASE`, `CONSIGNMENT`, `MIGRATION`, `RETURN`, `TRANSFORMATION` |
| originId | string | yes | no | Source business document |
| purchaseId | string/null | conditional | no | Source Purchase |
| purchaseItemId | string/null | conditional | no | Source Purchase Item |
| quantity | integer | yes | controlled | Physical/logical quantity represented |
| createdAt | datetime | yes | no | Recognition timestamp |
| updatedAt | datetime | yes | yes | Last master-state update |

## Cost Basis

| Field | Type | Meaning |
|---|---|---|
| buyPrice | decimal | Original unit purchase price where applicable |
| allocatedShipping | decimal | Purchase shipping allocation |
| allocatedDiscount | decimal | Purchase discount allocation |
| allocatedTax | decimal | Reserved/active tax allocation |
| finalCost | decimal | Authoritative acquisition cost basis |
| totalRemainingCost | decimal/null | Bulk/quantity lot remaining cost |
| averageUnitCost | decimal/null | Derived average lot cost |

`finalCost` and cost lineage are never replaced by current market values.

## Ownership Snapshot

| Field | Type | Meaning |
|---|---|---|
| ownershipRuleId | string | Rule used |
| ownershipRuleVersion | string/int | Version |
| capitalDistribution | object | Capital beneficiaries and percentages |
| profitDistribution | object | Profit beneficiaries and percentages |
| ownershipResolvedAt | datetime | Snapshot time |

## Card Metadata
Typical fields include:
- cardNumber
- cardName
- setCode
- rarity
- color
- cardType
- counter
- language
- variant
- condition
- grade
- gradingCompany
- gradingCertNumber

## Bulk Card Lot

| Field | Type | Meaning |
|---|---|---|
| bulkLabel | string | Operator-defined grouping |
| bulkGroupingMetadata | object/null | Set/color/rarity/type/theme/etc. when recorded |
| quantity | integer | Remaining card count |
| totalRemainingCost | decimal | Remaining lot cost |
| averageUnitCost | decimal | Derived cost/card |

Bulk composition must not claim card-level detail that was never captured.

## Transformation
- parentInventoryId
- childInventoryIds[]
- transformationType
- transformedQuantity
- transformedCost
- transformationEventId
- transformedAt

## Market Links
- acquisitionMarketSnapshotId
- saleMarketSnapshotId
- currentMarketObservationId

Historical transaction snapshots and current market observations are separate data concepts.

## Cross References
Inventory Detail must support navigation to:
- Purchase
- Seller Contact
- Sales Order
- Buyer Contact where sold
- Parent/child transformation
- Market observations
- Portfolio position
