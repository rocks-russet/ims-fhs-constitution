# INV-BR-004 — Inventory Origin

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Every Inventory record must identify its originType and originId.
2. Approved baseline origins are PURCHASE, CONSIGNMENT, MIGRATION, RETURN, and TRANSFORMATION.
3. PURCHASE origin references a PUR document and committed Purchase Item.
4. TRANSFORMATION origin references the parent inventory and transformation event.
5. New origin types require explicit Feature Map approval before entering the v1 baseline.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
