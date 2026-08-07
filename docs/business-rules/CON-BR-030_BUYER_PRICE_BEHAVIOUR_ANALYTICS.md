# CON-BR-030 — Buyer Price Behaviour Analytics

## Feature Origin

Contact v1 — Buyer/Seller price behaviour analytics.

## Rules

1. Buyer Contact Detail aggregates valid completed Sales items linked to the canonical buyer contactId.
2. Metrics include completed item/order counts, lifetime spending, average order value, average/median Sale-vs-Market variance, percentage of observed items bought above market, near market, and below market, and price tendency by period/category.
3. Every variance uses the Market Snapshot captured at Sale time.
4. Current market price is separate and must not rewrite historical buyer behaviour.
5. Buyer analytics support drill-down to Sales Order and Inventory Detail.
6. These metrics are descriptive internal data and do not automatically restrict, rank, or penalize a buyer operationally.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
