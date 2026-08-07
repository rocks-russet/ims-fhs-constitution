# SAL-BR-014 — Marketplace Calculator

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Marketplace checkout estimation is calculated by a dedicated FHS calculator, not manually embedded in invoice text.
2. Calculator inputs include item amount, applicable marketplace fee profile, and any approved marketplace-specific adjustment.
3. Calculator output includes base item value, fee percentage, fee amount, and estimated checkout/listing amount.
4. Fee profile is configurable and versioned; the invoice stores the applied profile/version.
5. Changing a fee profile does not rewrite existing invoices.
6. Calculator output is authoritative for generated Marketplace Invoice V2 estimates.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
