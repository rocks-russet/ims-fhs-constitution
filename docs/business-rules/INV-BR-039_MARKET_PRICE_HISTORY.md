# INV-BR-039 — Market Price History

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory/card market history retains prior observations for trend and transaction-snapshot validation.
2. History can be queried by card/product reference, provider, and date.
3. Historical observations remain unchanged when current price refreshes.
4. Invalid/outlier observations may be flagged without destructive deletion.
5. Portfolio current valuation uses the selected valid latest observation under the active provider policy.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
