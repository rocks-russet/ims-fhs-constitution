# SAL-BR-046 — Sales Integrity Audit

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Read-only integrity checks validate order-status transitions, inventory reservation uniqueness, invoice lineage, payment evidence, packing/shipment linkage, completion posting, cancellation recovery, merge/split consistency, and Sales History references.
2. Audit identifies completed orders missing profit/wallet effects and cancelled orders retaining invalid reservations.
3. Findings include severity, affected IDs, failed rule, and evidence.
4. Audit never directly repairs production data.
5. Corrections use the governing domain workflow.
6. Critical unresolved findings block production/go-live integrity sign-off.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
