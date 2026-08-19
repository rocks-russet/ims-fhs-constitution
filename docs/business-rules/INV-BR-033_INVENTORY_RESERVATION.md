# INV-BR-033 — Inventory Reservation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery and multi-channel Sales behavior.

## Rules

1. Reservation links Inventory or eligible quantity to a Buyer/Claim Cart/Order reference and retains originating Sales channel/session context when applicable.
2. Serialized Inventory cannot have more than one active reservation globally, regardless of the number of active listing references or Sales channels.
3. Quantity Inventory reserves an explicit quantity and cannot exceed global available quantity after all active reservations from all channels are aggregated.
4. Reservation availability is global across Sales Session, direct sale, marketplace/Tokopedia, offline, and other approved Sales channels.
5. A listing reference does not reserve Inventory.
6. Reservation is released on valid cancellation or transferred atomically during checkout/order transitions.
7. Reservation does not change owner or cost.
8. For Bulk, reservation does not permanently split/deplete source quantity or acquisition cost before canonical completion.
9. Reservation creation/release must be concurrency-safe and auditable.

## Invariants

- One physical serialized Inventory item can be actively reserved only once.
- Aggregate quantity reservations cannot exceed authoritative physical quantity.
- Multi-channel listing cannot create duplicate reservation rights.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or Inventory source data.
- Cross-module references use stable IDs.
