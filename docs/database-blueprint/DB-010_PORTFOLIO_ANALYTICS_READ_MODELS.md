# DB-010 — Portfolio & Analytics Read Models

## Principle
Portfolio and analytics tables are derived read models, not sources of business truth.

## `portfolio_positions`
Suggested materialized/read-model structure:
- id UUID or deterministic key
- owner_code
- asset_type
- card_definition_id nullable
- product_definition_id nullable
- bulk_inventory_id nullable
- language
- grouping_metadata JSONB
- quantity
- total_cost_basis NUMERIC
- average_cost NUMERIC
- market_provider_id nullable
- current_market_price NUMERIC nullable
- market_observed_at nullable
- market_value NUMERIC nullable
- unrealized_gain_loss_amount NUMERIC nullable
- unrealized_gain_loss_percent NUMERIC nullable
- valuation_status
- refreshed_at

Unique grouping key per owner + economically comparable asset identity.

## Dashboard Read Model
Optional `personal_dashboard_summaries`:
- owner_code
- wallet_balance
- inventory_cost_basis
- inventory_market_value
- unrealized_gain_loss
- position_count
- refreshed_at

Must be rebuildable.

## Analytics
Prefer dedicated aggregate/read-model tables only when query latency requires them.
Every aggregate stores:
- metric grain
- period/date basis
- source cutoff
- refreshed_at
- version

Raw analytics truth remains in Purchase/Sales/Inventory/Finance source tables.
