# SAL-BR-048 — Sale Price vs Market Variance

## Feature Origin

Sales v1 — Market Intelligence extension.

## Rules

1. Sales may calculate variance between realized/agreed item selling price and Market Price Snapshot at Sale.
2. varianceAmount = selling price - market price at sale.
3. variancePercent = varianceAmount / market price at sale when market price is positive.
4. Positive variance means the buyer paid above observed market; negative means below market.
5. Variance is analytics only and does not modify realized profit.
6. Buyer analytics use transaction-time market snapshots rather than today's market price.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
