# SAL-BR-026 — Delivery Confirmation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Delivery confirmation references the exact Shipment record.
2. Accepted evidence may include courier delivered status, marketplace confirmation, proof of delivery, or buyer acknowledgement.
3. Contradictory active shipment exceptions prevent automatic trust in delivery status.
4. Partial delivery is recorded explicitly.
5. Delivery confirmation does not itself complete an order unless all completion prerequisites are met.
6. Later dispute/return does not erase original delivery evidence.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
