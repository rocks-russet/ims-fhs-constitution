# PUR-BR-046 — Purchase Price vs Market Variance

Document ID: PUR-BR-046
Version: 2.0.0
Status: APPROVED

## Feature Origin

Purchase v1 — Market Intelligence extension.

## Purpose

Define item-level Purchase Price vs Market Variance, Purchase-level Market Quality aggregation, and Landed Market Quality while preserving transaction-time market snapshot provenance.

## Rules

1. Purchase Item may calculate variance between Buy Price and Market Price Snapshot at Purchase.
2. Item variance amount is:

   `varianceAmount = Buy Price - Market Price at Purchase`

3. Item variance percent is:

   `variancePercent = varianceAmount / Market Price at Purchase`

   when market price is positive.
4. Negative variance means FHS bought below the observed market; positive variance means above market.
5. Item variance is analytical data and does not change Final Cost.
6. Seller analytics use transaction-time market snapshot, never today's market price, to judge historical purchase pricing.
7. Purchase-level Market Quality must be value-weighted and must not use the arithmetic mean of item variance percentages.
8. Purchase-level acquisition value is:

   `Σ(Unit Buy Price × Quantity)`

9. Purchase-level market reference value is:

   `Σ(Transaction-time Market Price × Quantity)`

10. Purchase-level Market Quality is:

    `Market Quality % = (Aggregate Acquisition Value - Aggregate Market Reference Value) / Aggregate Market Reference Value × 100`

11. Purchase-level Market Quality is available only when every Purchase Item line has a valid positive transaction-time market reference. Otherwise the Purchase-level metric must be represented as unavailable.
12. Landed Market Quality is separate from Market Quality and uses the reconciled Purchase Total Cost:

    `Landed Market Quality % = (Purchase Total Cost - Aggregate Market Reference Value) / Aggregate Market Reference Value × 100`

13. Purchase Total Cost used by Landed Market Quality includes applicable Purchase-level cost adjustments according to the cost-allocation rules. These may include shipping, insurance, tax, platform fee, other charges, shipping discounts, vouchers, and other discounts.
14. Landed adjustments do not alter item-level Market Quality.
15. Market Quality and Landed Market Quality do not mutate transaction source data, market snapshots, Final Cost, or Inventory cost basis.
16. User-facing presentation should use plain-language labels:
    - negative material variance: `<absolute percentage>% Below Market`
    - positive material variance: `<absolute percentage>% Above Market`
    - effectively neutral variance: `At Market`
17. The signed numeric variance remains the canonical analytical representation even when the UI uses plain-language labels.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
- Historical Purchase Market Quality uses the transaction-time market snapshot, not the current market price.
- Purchase-level aggregation never silently degrades to an arithmetic mean of line percentages.
- Incomplete market snapshot coverage never presents itself as a complete Purchase-level Market Quality.
- Market Quality and Landed Market Quality use the same aggregate transaction-time market reference value for a given Purchase evaluation.

## Examples

A Purchase contains:

- Item A: quantity 1, Buy Price Rp90,000, Market Snapshot Rp100,000.
- Item B: quantity 10, Buy Price Rp9,500, Market Snapshot Rp10,000.

Aggregate Acquisition Value:

`Rp90,000 + (10 × Rp9,500) = Rp185,000`

Aggregate Market Reference Value:

`Rp100,000 + (10 × Rp10,000) = Rp200,000`

Purchase-level Market Quality:

`(Rp185,000 - Rp200,000) / Rp200,000 × 100 = -7.5%`

User-facing label:

`7.5% Below Market`

If the reconciled Purchase Total Cost after acquisition adjustments is Rp190,000:

`Landed Market Quality = (Rp190,000 - Rp200,000) / Rp200,000 × 100 = -5.0%`

User-facing label:

`5% Below Market`

## Exceptions

- When Aggregate Market Reference Value is zero or unavailable, Market Quality and Landed Market Quality are unavailable.
- When one or more Purchase Item lines lack a valid transaction-time market snapshot, Purchase-level Market Quality and Landed Market Quality are unavailable until complete coverage exists.
- Current market observations must not be substituted for missing historical transaction-time snapshots without an explicit governed reconciliation process.

## Related Decisions

- PUR-DEC-001 — Purchase Market Quality Aggregation and Landed Market Quality
- ADR-005 — Transaction Market Snapshot

## Revision History

- 1.0.0 — Initial item-level Purchase Price vs Market Variance rule.
- 2.0.0 — Added value-weighted Purchase-level Market Quality, Landed Market Quality, complete snapshot coverage requirement, and plain-language presentation semantics.
