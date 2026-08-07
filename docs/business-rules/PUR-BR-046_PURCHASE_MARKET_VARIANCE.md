# PUR-BR-046 — Purchase Price vs Market Variance

## Feature Origin

Purchase v1 — Market Intelligence extension.

## Rules

1. Purchase Item may calculate variance between Buy Price and Market Price Snapshot at Purchase.
2. varianceAmount = Buy Price - Market Price at Purchase.
3. variancePercent = varianceAmount / Market Price at Purchase when market price is positive.
4. Negative variance means FHS bought below the observed market; positive means above market.
5. Variance is analytical data and does not change Final Cost.
6. Seller analytics use transaction-time market snapshot, never today's market price, to judge historical purchase pricing.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
