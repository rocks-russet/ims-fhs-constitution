# API-006 — Sales API

## Sales Sessions / Inventory Pool / Claim Cart

- `POST /api/v1/sales/sessions`
- `GET /api/v1/sales/sessions/{id}`
- `POST /api/v1/sales/sessions/{id}/inventory`
- `DELETE /api/v1/sales/sessions/{id}/inventory/{sessionInventoryId}`
- `POST /api/v1/sales/sessions/{id}/inventory/bulk-add`
- `POST /api/v1/sales/sessions/{id}/inventory/bulk-remove`
- `POST /api/v1/sales/sessions/{id}/assign`
- `POST /api/v1/sales/sessions/{id}/claim-carts`
- `POST /api/v1/sales/claim-carts/{id}/items`
- `DELETE /api/v1/sales/claim-carts/{id}/items/{itemId}`

Sales Session is optional. Standalone Sales APIs MUST NOT require a Sales Session reference.

Sales Session Inventory Pool membership is listing context only and MUST NOT create an Inventory reservation.

Inventory may be listed in multiple channels concurrently. Reservation availability is global across channels.

Claim/winner assignment:
- identifies Buyer Contact;
- creates or reuses the appropriate active Claim Cart for that Buyer within the Sales Session;
- creates the Inventory reservation atomically;
- supports serialized Inventory and explicit quantity for quantity-bearing Inventory;
- rejects a serialized Inventory item already reserved elsewhere;
- rejects quantity that exceeds global `availableToSell`.

Claim Cart items may reference serialized Inventory or quantity-bearing Inventory.

For `BULK_CARD_LOT`, item creation carries:
- source Inventory number;
- explicit requested quantity;
- sale unit/line price;
- relevant commercial snapshots.

Adding the Bulk item to a Claim Cart establishes quantity reservation but does not create a derived Inventory record.

## Inventory Reservation

Sales owns reservation lifecycle while Inventory remains authoritative for physical quantity and acquisition cost.

For serialized Inventory:
- multiple listing references may coexist;
- only one active reservation may exist globally.

For quantity-bearing Inventory:
- `availableToSell = physicalQuantity - aggregateActiveReservedQuantity`;
- reservation MUST be concurrency-safe across all Sales channels;
- reservation MUST NOT permanently reduce physical quantity;
- reservation MUST NOT permanently reduce acquisition cost;
- Bulk reservation MUST NOT create a derived Bulk Inventory merely because selected quantity is partial.

Reservation records remain linked to source Inventory and Buyer/Claim Cart/Order context, plus originating channel/session context when applicable.

Removing an eligible Claim Cart item releases its reservation.

## Checkout / Order

### POST `/api/v1/sales/checkout`

Creates an Order from one or more compatible Claim Carts for the same Buyer.

Checkout:
- validates buyer and commercial data;
- transfers reservations atomically to the Order;
- MUST NOT duplicate reserved quantity during transfer;
- creates commercial snapshots;
- is idempotent;
- does not yet recognize realized profit.

### GET `/api/v1/orders`
Search/filter/sort/pagination.

### GET `/api/v1/orders/{orderNumber}`
Full Sales Detail.

## Invoice

### POST `/api/v1/orders/{orderNumber}/invoices/v1`
Creates Invoice V1 with operator-selected visible payment options.

### POST `/api/v1/orders/{orderNumber}/payment-method`
Switches eligible DIRECT / MARKETPLACE / MARKETPLACE_SPLIT path.

### POST `/api/v1/orders/{orderNumber}/invoices/v2`
Generates active payment-path invoice.

## Payment

### POST `/api/v1/orders/{orderNumber}/payments`
Adds payment component/evidence.

### POST `/api/v1/orders/{orderNumber}/payments/{paymentId}/confirm`
Permission: `PAYMENT_CONFIRM`.

## Packing

- `POST /api/v1/orders/{orderNumber}/packing/start`
- `GET /api/v1/orders/{orderNumber}/packing/supplies-suggestion`
- `POST /api/v1/orders/{orderNumber}/packing/complete`

## Shipment

- `POST /api/v1/orders/{orderNumber}/shipments`
- `POST /api/v1/shipments/{shipmentNumber}/mark-shipped`
- `POST /api/v1/shipments/{shipmentNumber}/delivery-confirm`

## Completion

### POST `/api/v1/orders/{orderNumber}/complete`

`Idempotency-Key`: REQUIRED.

Validates payment, packing, shipment, blocking exceptions, and Inventory reservations.

For reserved `BULK_CARD_LOT` quantity, completion MUST atomically:

1. validate the active reservation owned by the Order;
2. consume finalized physical quantity from the source Bulk Inventory;
3. allocate/remove canonical weighted-average acquisition cost;
4. record immutable Sales-to-Inventory consumption provenance;
5. close the reservation;
6. provide finalized COGS to Sales/Finance completion processing.

Publishes `OrderCompleted` only after successful finalization.

Repeated completion requests MUST NOT consume Bulk quantity/cost or publish financial effects more than once.

## Cancellation

Cancellation before `COMPLETED` releases eligible active Inventory reservations.

For Bulk quantity reservations, cancellation does not perform Inventory merge-back because reservation did not prematurely split or deplete the source Inventory.

## Utilities

Merge, split, manual adjustment, cancel, return, and replacement use dedicated action endpoints rather than generic arbitrary patching.
