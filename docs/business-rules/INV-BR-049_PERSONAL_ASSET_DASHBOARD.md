# INV-BR-049 — Personal Inventory Asset Dashboard

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. After login, the personal dashboard may show Wallet Summary together with Inventory Portfolio Summary for the user's resolved owner context.
2. Inventory summary includes cost basis, valued market value, unrealized gain/loss, inventory/position counts, and relevant breakdowns.
3. Dashboard distinguishes Wallet Balance from Inventory Market Value.
4. Combined asset display must use a clear label and must not misrepresent itself as accounting net worth.
5. Dashboard values drill down to Portfolio and Inventory Explorer.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
