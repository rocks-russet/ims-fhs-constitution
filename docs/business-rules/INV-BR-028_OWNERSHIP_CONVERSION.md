# INV-BR-028 — Ownership Conversion

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Operator may use a governed Convert Ownership action when the economic ownership of an inventory item changes.
2. Physical inventoryId remains the same unless another transformation also occurs.
3. Conversion records old/new owner, old/new distributions, reason, actor, effectiveAt, and approval where required.
4. Completed historical financial events are not rewritten.
5. New future events use the new ownership snapshot.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
