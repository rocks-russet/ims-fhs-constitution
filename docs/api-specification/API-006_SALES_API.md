# API-006 — Sales API

## Sales Sessions / Inventory Pool / Claim Cart

- `POST /api/v1/sales/sessions`
- `GET /api/v1/sales/sessions/{id}`
- `DELETE /api/v1/sales/sessions/{id}`
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

### DELETE `/api/v1/sales/sessions/{id}`

Performs a soft-delete/void of an eligible Sales Session.

Deletion MUST be rejected when the Session has Claim Cart, reservation, or Order lineage that would be orphaned or detached by the operation.

Deletion MUST NOT release Inventory reservations.

For an eligible Session with no dependent transactional lineage, deletion:
- marks the Session as deleted/voided without destroying historical evidence;
- deactivates all remaining unassigned Inventory Pool listing rows belonging to that Session;
- preserves listing rows from every other Session/channel;
- recalculates Inventory availability from remaining global listing and reservation state;
- returns Inventory to `AVAILABLE` only when there is no remaining active listing and no active reservation;
- keeps Inventory `LISTED` when at least one other active listing remains;
- never clears reservation state.

Sales quantity semantics:
- `SERIALIZED_CARD`: whole Inventory ID only; quantity MUST be `1`;
- `PRODUCT`: whole Inventory ID only; quantity MUST be `1`, regardless of physical contents/pack size;
- `BULK_CARD_LOT`: explicit partial quantity is allowed subject to global `availableToSell`.

Sales MUST NOT perform partial Product split/reservation. A smaller Product commercial unit must first be created through canonical Inventory Split/Transformation and receive its own Inventory ID.

Claim/winner assignment:
- identifies Buyer Contact;
- creates or reuses the appropriate active Claim Cart for that Buyer within the Sales Session;
- creates the Inventory reservation atomically;
- supports whole `SERIALIZED_CARD` Inventory ID;
- supports whole `PRODUCT` Inventory ID;
- supports explicit quantity only for `BULK_CARD_LOT`;
- rejects a Serialized Card or Product Inventory ID already reserved elsewhere;
- rejects Bulk quantity that exceeds global `availableToSell`.

Claim Cart items may reference Serialized Card, Product, or Bulk Card Inventory.

For `SERIALIZED_CARD` and `PRODUCT`, Claim Cart item quantity MUST be `1`.

For `BULK_CARD_LOT`, item creation carries:
- source Inventory number;
- explicit requested quantity;
- sale unit/line price;
- relevant commercial snapshots.

Adding the Bulk item to a Claim Cart establishes quantity reservation but does not create a derived Inventory record.

## Inventory Reservation

Sales owns reservation lifecycle while Inventory remains authoritative for physical quantity and acquisition cost.

For `SERIALIZED_CARD` and `PRODUCT`:
- multiple listing references may coexist;
- only one active reservation may exist globally per Inventory ID;
- reservation quantity MUST be `1`.

For `BULK_CARD_LOT`:
- `availableToSell = physicalQuantity - aggregateActiveReservedQuantity`;
- reservation MUST be concurrency-safe across all Sales channels;
- reservation MUST NOT permanently reduce physical quantity;
- reservation MUST NOT permanently reduce acquisition cost;
- partial reservation MUST NOT create a derived Bulk Inventory merely because selected quantity is partial.

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

### POST `/api/v1/orders/{orderNumber}/packing/start`

Creates or activates the Order Packing Job and moves eligible Order `PAID → PACKING`.

### GET `/api/v1/orders/{orderNumber}/packing`

Returns Packing Job, Order item composition, current suggestion snapshot, pending Actual Usage draft, and final usage when completed.

### GET `/api/v1/orders/{orderNumber}/packing/supplies-suggestion`

Evaluates ACTIVE Packing Template Rules and returns zero or more advisory Suggested Supply lines.

The response MUST preserve:
- template/rule provenance;
- computed quantity;
- human-readable reason;
- evaluation/snapshot identity.

Calling suggestion MUST NOT consume Inventory.

### POST `/api/v1/orders/{orderNumber}/packing/supplies-suggestion/recalculate`

Creates a new suggestion snapshot after eligible Order/packing context changes. Previous suggestion evidence remains reconstructable.

### PUT `/api/v1/orders/{orderNumber}/packing/actual-supplies`

Saves the operator's pending Actual Supply Usage draft.

The operator may add, remove, replace, or change quantities independently of Suggested Supplies.

### POST `/api/v1/orders/{orderNumber}/packing/templates/{templateId}/apply`

Optionally applies an eligible Template as the operator-selected starting recommendation. Applying a Template is advisory and MUST NOT consume Inventory.

### POST `/api/v1/orders/{orderNumber}/packing/complete`

Finalizes Actual Supply Usage, applies tracked Packing Supply consumption, records audit/cross-domain lineage, and completes the Packing Job atomically.

Packing Completion MUST be idempotent.

If tracked consumption would make Packing Supply Inventory negative, completion MUST fail without partial consumption.

No matching suggestion/template MUST NOT block manual Packing Completion.

### Packing Template Administration

Exact administration routes may be implemented under canonical Sales/Admin APIs, but the API contract MUST support:
- list/read Template versions;
- create DRAFT Template/Rule versions;
- activate an approved version;
- deactivate/supersede a version;
- list learned Template Candidates;
- approve/reject a learned Template Candidate.

Learned candidates MUST NOT become ACTIVE automatically.

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
