# API-009 — Portfolio API

## GET `/api/v1/portfolio`
Permission: Inventory/Portfolio view capability.
Default owner scope comes from authenticated user context.

Query:
- ownerScope
- assetType
- language
- status
- category
- sort
- page/pageSize

Returns Portfolio Positions:
- grouping identity
- quantity
- total cost basis
- average cost
- market provider
- current market
- market value
- unrealized gain/loss
- refreshedAt

## GET `/api/v1/portfolio/summary`
Optimized dashboard read model:
- inventory cost basis
- valued market value
- unrealized gain/loss
- position counts
- unvalued amount/count

## GET `/api/v1/portfolio/positions/{positionId}`
Returns position detail and constituent Inventory references.

## POST `/api/v1/portfolio/refresh`
Authorized/admin/manual refresh request; normally asynchronous.

Portfolio API never mutates Inventory ownership or costs.
