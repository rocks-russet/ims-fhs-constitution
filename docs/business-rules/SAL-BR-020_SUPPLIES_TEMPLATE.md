# SAL-BR-020 — Supplies Template and Recommendation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Packing may generate suggested supplies based on order composition.
2. Order composition inputs may include card quantity, product type, dimensions/category, and prior operator usage patterns.
3. Examples include sleeve, toploader, team bag, cardboard, bubble wrap, card box, and playmat-size box.
4. Suggestion is advisory and must not hard-lock the operator.
5. Operator may add, reduce, or replace suggested supplies.
6. System distinguishes suggested supplies from actual supplies used.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
