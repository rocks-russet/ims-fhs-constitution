# SAL-BR-025 — Shipment Exception

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Shipment exceptions include failed pickup, delay, failed delivery, returned-to-sender, loss, damage, and tracking inconsistency.
2. Exception records shipment, type, detection time, evidence, operator, and resolution.
3. Inventory is not returned to AVAILABLE merely because delivery failed.
4. Resolution may use reshipment, return, replacement, refund, or other approved workflow.
5. Additional shipping cost is recorded separately.
6. Exception history is append-only.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
