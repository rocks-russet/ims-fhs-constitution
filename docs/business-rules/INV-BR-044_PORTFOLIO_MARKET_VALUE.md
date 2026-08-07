# INV-BR-044 — Portfolio Market Valuation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Portfolio Market Value equals position quantity multiplied by the applicable current market value, using per-language/provider rules.
2. PriceCharting values English card positions and Yuyutei values Japanese card positions.
3. Positions without reliable market data are clearly marked unvalued rather than assigned an invented price.
4. Total portfolio market value states the number/value of unvalued positions separately.
5. Market valuation is read-only derived data.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
