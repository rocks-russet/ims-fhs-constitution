# SAL-BR-020 — Supplies Template and Recommendation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Packing Supply Suggestion decisions.

## Rules

1. Packing may generate Suggested Supplies from one or more approved Packing Templates.
2. A Packing Template is a named, versioned definition that may contain multiple supply-output rules.
3. A single template may recommend multiple distinct Packing Supply types.
4. Supply examples include sleeve, toploader, team bag, bubble envelope, plastic zip bag, cardboard protector, bubble wrap, card box, small shipping box, and playmat-size box.
5. Template inputs may include:
   - total Order item quantity;
   - matching item quantity;
   - Inventory type;
   - Card/Product category;
   - serialized-card presence/count;
   - Bulk Card presence/count;
   - Product presence/count;
   - relevant dimensions or packing classification when available;
   - combinations of multiple item groups;
   - approved quantity thresholds.
6. A Template recommendation is advisory and must not hard-lock the operator.
7. Operator may add, reduce, replace, or remove suggested supplies before finalization.
8. Suggested quantities and Actual quantities are separate records.
9. A Template version used for a suggestion must remain historically identifiable even after a later Template version becomes ACTIVE.
10. If multiple ACTIVE Templates are applicable, the engine may rank them, but operator selection remains permitted.
11. No applicable Template is a valid outcome and must fall back to manual packing.

## Example Behaviour

Examples are illustrative, not hard-coded defaults:

- 1 serialized card may suggest `1 sleeve + 1 toploader + 1 bubble envelope`.
- 5 serialized cards may suggest `5 sleeves + 5 toploaders + 1 bubble envelope`.
- An Order containing `10 serialized cards + 20 bulk cards` may suggest `10 sleeves + 10 toploaders + 1 cardboard protector set + 1 plastic zip bag + 1 small box`.

Actual active rules are governed configuration, not assumptions embedded directly in application code.

## Invariants

- Template rules are versioned and auditable.
- Recommendation output must identify its template/rule provenance.
- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
