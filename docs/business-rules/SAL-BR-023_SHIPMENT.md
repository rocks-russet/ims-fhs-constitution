# SAL-BR-023 — Shipment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Shipment references one Order ID and the active delivery-address snapshot.
2. Shipment records handler, courier/expedition, tracking number where applicable, ship timestamp, and actual shipping cost when known.
3. One order may have more than one shipment attempt only when explicitly represented as separate shipment records.
4. Shipment state must remain traceable.
5. Mark Shipped moves eligible order to SHIPPED.
6. Shipment data changes do not rewrite buyer Contact master data.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
