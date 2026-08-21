# SAL-BR-051 — Packing Template Rule Engine

## Feature Origin

IMS FHS v2 Packing workflow decision — scalable rule engine for Packing Supply recommendations.

## Rule Types

The baseline engine must support at least:

1. `PER_ITEM`
   - Supply quantity scales with total eligible Order item quantity.

2. `PER_MATCHING_ITEM`
   - Supply quantity scales only with items matching configured criteria.

3. `PER_ORDER`
   - Fixed Supply quantity is emitted once for the Order/Packing Job.

4. `QUANTITY_THRESHOLD`
   - A rule becomes applicable when total or matching quantity enters a configured range/threshold.

5. `COMBINATION`
   - A rule becomes applicable only when multiple configured item groups/conditions are simultaneously present.

## Rules

1. Rule criteria must be data/configuration driven and must not require hard-coded application branches for each commercial packing scenario.
2. Criteria may reference stable Inventory/Product/Card classifications and quantities.
3. Rule output references an approved Packing Supply definition and a quantity formula.
4. Rules have stable identity, version, status, priority, and effective lifecycle.
5. ACTIVE rules are immutable in place; material changes create a new version.
6. Evaluation order/priority must be deterministic.
7. Compatible rule outputs may aggregate; mutually exclusive rules must use explicit precedence/exclusion semantics.
8. The engine must be able to explain why each Supply was suggested.
9. Rule evaluation failure must fail safely to manual packing rather than silently inventing quantities.
10. Rules must not directly consume Inventory.

## Invariants

- The same input snapshot plus the same active rules yields the same suggestion output.
- Rule changes are versioned.
- Hard-coded packing heuristics are not canonical business configuration.
