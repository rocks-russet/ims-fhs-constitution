# CON-BR-029 — Seller Price Behaviour Analytics

## Feature Origin

Contact v1 — Buyer/Seller price behaviour analytics.

## Rules

1. Seller Contact Detail aggregates valid Purchase items linked to the canonical seller contactId.
2. Metrics include item/purchase counts, total bought value, average buy value, average/median Purchase-vs-Market variance, percentage of observed items bought below market, near market, and above market, and estimated saving/premium versus market at acquisition.
3. Every variance uses the Market Snapshot captured at Purchase time.
4. Current market price may be shown separately for inventory still held, but must not be substituted for historical transaction-time market price.
5. Seller analytics support drill-down to Purchase Detail and Inventory Detail.
6. Merged Contacts aggregate to the canonical survivor without losing source lineage.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
