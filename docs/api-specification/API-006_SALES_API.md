# API-006 — Sales API

## Sales Sessions / Claim Cart
- `POST /api/v1/sales/sessions`
- `GET /api/v1/sales/sessions/{id}`
- `POST /api/v1/sales/sessions/{id}/claim-carts`
- `POST /api/v1/sales/claim-carts/{id}/items`
- `DELETE /api/v1/sales/claim-carts/{id}/items/{inventoryNumber}`

## Checkout / Order
### POST `/api/v1/sales/checkout`
Creates Order from one or more compatible Claim Carts for the same Buyer.
Atomic reservation transfer.

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
Publishes `OrderCompleted`.
Profit/Finance processing is protected against duplicate effects.

## Utilities
- merge
- split
- manual adjustment
- cancel
- return
- replacement
all through dedicated action endpoints rather than generic arbitrary patching.
