# SAL-BR-030 — Marketplace Listing Closure

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Marketplace sales must close or update the relevant listing/checkout reference when inventory is no longer available for sale.
2. Closure records platform, external reference, operator, and timestamp.
3. Listing closure does not replace internal Order completion.
4. Failed external closure remains visible for follow-up.
5. Inventory must not be relisted automatically after a completed sale.
6. Historical listing references remain linked to the sale.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
