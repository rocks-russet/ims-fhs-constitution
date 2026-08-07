# DICT-003 — Sales Data Dictionary

## Sales Order

| Field | Type | Required | Meaning |
|---|---|---:|---|
| orderId | string | yes | Stable `ORD-...` |
| buyerContactId | string | yes | Canonical Buyer |
| sourceType | enum/string | yes | Auction / Claim Sale / Direct / Marketplace etc. |
| sourceLabel | string/null | no | Human-readable reference |
| sourceUrl | string/null | no | Auction/claim/direct reference URL |
| status | enum | yes | `WAITING_PAYMENT`, `PAID`, `PACKING`, `SHIPPED`, `COMPLETED`, `CANCELLED` |
| actorUserId | string | yes | Creating/acting user |
| createdAt | datetime | yes | Order creation |
| completedAt | datetime/null | conditional | Completion time |

## Order Item
- orderItemId
- inventoryId
- quantity
- agreedSellPrice
- itemSubtotal
- discount allocation where applicable
- additional charge allocation where applicable
- marketSnapshotAtSaleId
- ownership/profit snapshot reference

## Commercial Summary
- itemSubtotal
- discount
- additionalCharge
- additionalChargeDescription
- buyerShippingCharged
- marketplaceFee
- grandTotal

## Invoice
- invoiceId
- orderId
- invoiceType (`V1`, `V2`)
- version
- status (`ACTIVE`, `SUPERSEDED`)
- paymentMethod
- visiblePaymentOptions[]
- templateVersion
- generatedAt

## Payment
- paymentId
- orderId
- method (`DIRECT`, `MARKETPLACE`, `MARKETPLACE_SPLIT`)
- amount
- reference
- evidence
- status
- confirmedBy
- confirmedAt

## Packing
- packingJobId
- orderId
- operatorUserId
- suggestedSupplies[]
- actualSupplies[]
- startedAt
- completedAt

## Shipment
- shipmentId
- orderId
- handler
- courier
- trackingNumber
- buyerAddressSnapshot
- actualShippingCost
- shippedAt
- deliveryConfirmedAt

## Market Snapshot at Sale
- provider
- marketPriceAtSale
- observedAt
- saleVarianceAmount
- saleVariancePercent

Buyer price-behaviour analytics use transaction-time snapshot only.

## Finalization
COMPLETED is the normal financial realization trigger and links to:
- Profit Snapshot
- Financial Event
- Wallet Postings
