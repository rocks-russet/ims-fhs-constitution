# INV-BR-024 — Inventory Holder

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. holder identifies who currently physically holds or controls the inventory.
2. Holder may differ from owner.
3. Changing holder is a simple audited inventory update and does not require a formal custody-transfer workflow.
4. Holder changes do not change ownership, cost, profit rights, or Purchase origin.
5. Inventory Explorer may filter and display holder.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
