# INV-BR-023 — Inventory Owner

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. ownerCode represents the economic owner of Inventory and is independent from logged-in operator, holder, and storage.
2. Approved baseline owners include AK, AH, RCS, and FHS.
3. Owner determines which ownership snapshot is resolved at acquisition unless an approved override applies.
4. Portfolio ownership scope uses ownerCode or the governing economic ownership snapshot, not holder.
5. Owner changes require Ownership Conversion.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
