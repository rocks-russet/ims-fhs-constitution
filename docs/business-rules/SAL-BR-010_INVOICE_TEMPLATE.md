# SAL-BR-010 — Invoice Template

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Invoice presentation uses an approved versioned template.
2. Template may define FHS branding, logo reference, footer, wording, bank-account presentation, QRIS area where applicable, and disclaimer.
3. Template changes must not rewrite previously generated invoices.
4. Operational payment calculations remain outside the visual template.
5. Only authorized users may activate a template version.
6. Generated invoice stores the template version used.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
