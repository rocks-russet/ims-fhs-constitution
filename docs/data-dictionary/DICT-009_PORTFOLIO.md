# DICT-009 — Portfolio Data Dictionary

Portfolio is a derived/read model; Inventory remains source of holdings.

## Portfolio Position
- positionId / deterministic grouping key
- ownerScope
- assetType
- cardDefinitionId/productDefinitionId/bulkInventoryId
- language
- variant/grade grouping where applicable
- quantity
- totalCostBasis
- averageCost
- currentMarketProvider
- currentMarketPrice
- marketObservedAt
- marketValue
- unrealizedGainLossAmount
- unrealizedGainLossPercent
- valued/unvalued status
- refreshedAt

## Grouping
Specific card positions group economically comparable inventory.
EN and JP remain separate price bases.

## Bulk Position
- bulkLabel
- quantity
- total cost
- average cost
- optional approved bulk market value

Unknown bulk composition must not be valued as exact card positions.

## Personal Dashboard
Default owner context derives from authenticated user's permitted context and may show:
- Wallet Balance
- Inventory Cost Basis
- Inventory Market Value
- Unrealized Gain/Loss
- Position Count
- top positions / breakdowns

Combined wallet + inventory value must not be mislabeled as accounting net worth.
