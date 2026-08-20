# INV-BR-033 — Inventory Reservation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery and multi-channel Sales behavior.

## Rules

1. Reservation links Inventory or eligible Bulk quantity to a Buyer/Claim Cart/Order reference and retains originating Sales channel/session context when applicable.
2. `SERIALIZED_CARD` cannot have more than one active reservation globally and is reserved as one whole Inventory ID with quantity `1`.
3. `PRODUCT` cannot have more than one active reservation globally and is reserved as one whole Inventory ID with quantity `1`, regardless of physical contents represented by that Inventory ID.
4. Sales MUST NOT create partial Product reservation. A smaller Product saleable unit requires canonical Inventory Split/Transformation and its own Inventory ID first.
5. `BULK_CARD_LOT` may reserve an explicit quantity and cannot exceed global available quantity after all active Bulk reservations from all channels are aggregated.
6. Reservation availability is global across Sales Session, direct sale, marketplace/Tokopedia, offline, and other approved Sales channels.
7. A listing reference does not reserve Inventory.
8. Reservation is released on valid cancellation or transferred atomically during checkout/order transitions.
9. Reservation does not change owner or cost.
10. For Bulk, reservation does not permanently split/deplete source quantity or acquisition cost before canonical completion.
11. Reservation creation/release must be concurrency-safe and auditable.

## Invariants

- One physical Serialized Card or Product Inventory ID can be actively reserved only once.
- Serialized Card and Product reservation quantity is always `1`.
- Only `BULK_CARD_LOT` supports partial quantity reservation from one source Inventory ID.
- Aggregate Bulk quantity reservations cannot exceed authoritative physical quantity.
- Multi-channel listing cannot create duplicate reservation rights.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or Inventory source data.
- Cross-module references use stable IDs.
