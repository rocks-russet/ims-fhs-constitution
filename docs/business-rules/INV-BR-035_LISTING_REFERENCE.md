# INV-BR-035 — Listing Reference

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory may retain external listing references required by Sales operations.
2. Reference stores channel/platform, external ID or URL, status, and timestamps.
3. Listing reference is distinct from Inventory identity.
4. Multiple listing references may exist when operationally needed.
5. External listing changes must not rewrite Inventory origin or cost.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
