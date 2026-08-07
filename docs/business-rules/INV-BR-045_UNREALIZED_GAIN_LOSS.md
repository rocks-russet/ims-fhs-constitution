# INV-BR-045 — Portfolio Unrealized Gain and Loss

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Unrealized Gain/Loss equals current Portfolio Market Value minus current portfolio Cost Basis for valued holdings.
2. Unrealized result is not realized profit and does not create Wallet Posting.
3. Gain/Loss can be displayed as amount and percentage.
4. Language/provider-specific valuation remains explicit.
5. Sold inventory is excluded from current unrealized holdings.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
