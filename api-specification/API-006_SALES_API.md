# API-006 — Sales API

## Sales Sessions / Claim Cart
- `POST /api/v1/sales/sessions`
- `GET /api/v1/sales/sessions/{id}`
- `POST /api/v1/sales/sessions/{id}/claim-carts`
- `POST /api/v1/sales/claim-carts/{id}/items`
- `DELETE /api/v1/sales/claim-carts/{id}/items/{inventoryNumber}`

Claim Cart items may reference serialized Inventory or quantity-bearing Inventory.

For `BULK_CARD_LOT`, the Sales item MUST carry the requested quantity. Selection alone does not create a derived Inventory record.

## Inventory Reservation

Sales owns the reservation lifecycle while Inventory remains authoritative for physical quantity and cost.

For quantity-bearing Bulk Inventory:

- reservation validates `availableToSell = physicalQuantity - activeReservedQuantity`;
- reservation MUST NOT permanently reduce physical quantity;
- reservation MUST NOT permanently reduce acquisition cost;
- reservation MUST NOT create a derived Bulk Inventory solely because only part of the lot is selected;
- concurrent reservations MUST be protected against oversell.

Reservation records must remain linked to the source Inventory and Sales/Order context.

Cancellation before completion releases the reservation without Inventory merge-back.

## Checkout / Order
### POST `/api/v1/sales/checkout`
Creates Order from one or more compatible Claim Carts for the same Buyer.
Atomic reservation transfer.

Bulk quantity reservations transfer with the Sales line and remain provisional until Order completion.

### GET `/api/v1/orders`
Search/filter/sort/pagination.

### GET `/api/v1/orders/{orderNumber}`
Full Sales Detail.

## Invoice
### POST `/api/v1/orders/{orderNumber}/invoices/v1`
Input includes visible payment options chosen by operator.

### POST `/api/v1/orders/{orderNumber}/payment-method`
Switch DIRECT / MARKETPLACE / MARKETPLACE_SPLIT while eligible.
Supersedes prior active V2 where required.

### POST `/api/v1/orders/{orderNumber}/invoices/v2`
Generates active payment-path invoice.

## Payment
### POST `/api/v1/orders/{orderNumber}/payments`
Adds payment component/evidence.

### POST `/api/v1/orders/{orderNumber}/payments/{paymentId}/confirm`
Permission: `PAYMENT_CONFIRM`

## Packing
- `POST /api/v1/orders/{orderNumber}/packing/start`
- `GET /api/v1/orders/{orderNumber}/packing/supplies-suggestion`
- `POST /api/v1/orders/{orderNumber}/packing/complete`

Actual supplies consumption is confirmed at completion.

## Shipment
- `POST /api/v1/orders/{orderNumber}/shipments`
- `POST /api/v1/shipments/{shipmentNumber}/mark-shipped`
- `POST /api/v1/shipments/{shipmentNumber}/delivery-confirm`

## Completion
### POST `/api/v1/orders/{orderNumber}/complete`
Idempotency-Key: REQUIRED

Validates payment, packing, shipment, blocking exceptions.

For reserved `BULK_CARD_LOT` quantities, completion is the permanent Inventory boundary and MUST atomically:

1. validate the active reservation owned by the Order;
2. consume the finalized quantity from source physical quantity;
3. allocate and remove canonical weighted-average acquisition cost;
4. record immutable Sales-to-Inventory consumption provenance;
5. close/release the reservation;
6. provide finalized COGS to downstream Sales/Finance completion processing.

Publishes `OrderCompleted`.
Profit/Finance processing is protected against duplicate effects.

Repeated completion requests MUST NOT consume Bulk quantity or cost more than once.

## Cancellation

Cancellation before `COMPLETED` releases active Inventory reservations.

For Bulk quantity reservations, cancellation does not perform Inventory merge-back because reservation did not prematurely split or deplete the source Inventory.

## Utilities
- merge
- split
- manual adjustment
- cancel
- return
- replacement

all through dedicated action endpoints rather than generic arbitrary patching.
