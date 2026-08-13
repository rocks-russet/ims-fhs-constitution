# Purchase Market Quality Aggregation and Landed Market Quality

Document ID: PUR-DEC-001
Version: 1.0.0
Status: APPROVED

## Problem

PUR-BR-046 defines item-level Purchase Price vs Market Variance, but does not define how multiple Purchase Items shall be combined into a Purchase-level Market Quality metric.

A simple arithmetic average of item variance percentages can misrepresent the economics of a Purchase because low-value and high-value items would receive equal influence.

The Purchase module also needs a separate analytical metric that compares the complete landed acquisition cost, including Purchase-level cost adjustments, against the same transaction-time market reference.

## Decision

1. Purchase-level Market Quality shall be value-weighted and shall not be calculated as the arithmetic mean of individual item variance percentages.
2. Purchase-level Market Quality shall compare aggregate acquisition value against aggregate transaction-time market reference value:

   `Market Quality % = (Σ Acquisition Value - Σ Market Reference Value) / Σ Market Reference Value × 100`

3. Quantity is part of both aggregate values. For a Purchase Item:

   `Acquisition Value = Unit Buy Price × Quantity`

   `Market Reference Value = Transaction-time Market Price × Quantity`

4. Negative Market Quality means the Purchase was acquired below the observed transaction-time market reference. Positive Market Quality means above market.
5. A Purchase-level Market Quality shall only be published when every Purchase Item line included in the Purchase has a valid positive transaction-time market reference. Incomplete coverage shall be represented as unavailable rather than silently producing a partial aggregate.
6. Landed Market Quality shall be a separate metric from Market Quality.
7. Landed Market Quality shall compare reconciled Purchase Total Cost against the same aggregate transaction-time market reference:

   `Landed Market Quality % = (Purchase Total Cost - Σ Market Reference Value) / Σ Market Reference Value × 100`

8. Purchase Total Cost for Landed Market Quality includes the applicable acquisition cost adjustments defined by Purchase cost-allocation rules, including shipping, insurance, tax, platform fee, other charges, shipping discounts, vouchers, and other discounts.
9. Item-level Market Quality remains based on the item acquisition price and its transaction-time market snapshot. Purchase-level landed adjustments do not mutate item-level Market Quality.
10. Market Quality and Landed Market Quality are analytical data only. They do not change Final Cost, Inventory cost basis, Purchase source data, or transaction-time market snapshots.
11. User-facing labels should be expressed in plain language such as `10.8% Below Market`, `At Market`, or `10.8% Above Market`, while the signed numeric variance remains available internally for analytics.

## Alternatives

- Arithmetic mean of item variance percentages: rejected because it gives equal weight to economically unequal items.
- Purchase-level Market Quality using landed cost only: rejected because it mixes item purchase performance with acquisition overhead and removes the ability to distinguish raw buy quality from landed economics.
- Partial aggregate when only some item snapshots are available: rejected because it can present an incomplete Purchase as if it were fully evaluated.

## Consequences

- Purchase Explorer, Purchase Preview, Purchase Detail, seller analytics, and reporting must use the same weighted Purchase-level definition.
- Historical Purchase analysis remains tied to transaction-time market snapshots rather than current market prices.
- Market Quality and Landed Market Quality can be compared to identify the effect of acquisition overhead on purchase economics.
- Implementations must preserve snapshot provenance and must not silently replace missing transaction-time observations with current market prices.

## Related Business Rules

- PUR-BR-018 — Shipping Cost Allocation
- PUR-BR-019 — Discount Allocation
- PUR-BR-020 — Tax Allocation
- PUR-BR-021 — Final Cost Calculation
- PUR-BR-022 — Cost Allocation Rounding
- PUR-BR-044 — Cost Allocation Policy
- PUR-BR-045 — Market Snapshot at Purchase
- PUR-BR-046 — Purchase Price vs Market Variance
- INV-BR-040 — Transaction Market Snapshot Link
- ADR-005 — Transaction Market Snapshot
