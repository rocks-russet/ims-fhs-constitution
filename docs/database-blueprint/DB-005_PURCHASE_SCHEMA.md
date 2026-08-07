# DB-005 — Purchase Schema

## `purchases`
- id UUID PK
- purchase_number VARCHAR UNIQUE NOT NULL
- seller_contact_id FK contacts
- platform_id FK nullable
- purchase_date DATE NOT NULL
- currency VARCHAR NOT NULL default IDR
- shipping_cost NUMERIC NOT NULL default 0
- discount_amount NUMERIC NOT NULL default 0
- tax_amount NUMERIC NOT NULL default 0
- notes TEXT nullable
- status VARCHAR NOT NULL
- actor_user_id FK system_users
- committed_at TIMESTAMPTZ nullable
- created_at / updated_at

## `purchase_items`
- id UUID PK
- purchase_id FK purchases
- line_number INTEGER
- item_type VARCHAR (`CARD`, `PRODUCT`)
- card_definition_id FK nullable
- product_definition_id FK nullable
- quantity INTEGER NOT NULL CHECK quantity > 0
- unit_buy_price NUMERIC NOT NULL CHECK >= 0
- item_subtotal NUMERIC NOT NULL
- owner_code VARCHAR NOT NULL
- allocated_shipping NUMERIC NOT NULL
- allocated_discount NUMERIC NOT NULL
- allocated_tax NUMERIC NOT NULL
- final_cost NUMERIC NOT NULL
- ownership_snapshot JSONB NOT NULL
- created_at

Unique `(purchase_id, line_number)`.

## `purchase_market_snapshots`
- id UUID PK
- purchase_item_id FK UNIQUE
- provider
- market_language
- market_price_at_purchase NUMERIC nullable
- observed_at TIMESTAMPTZ nullable
- retrieval_status
- variance_amount NUMERIC nullable
- variance_percent NUMERIC nullable
- source_market_observation_id FK nullable

## Generated Inventory Link
Inventory rows hold `purchase_id` + `purchase_item_id`.
A view or indexed query provides generated Inventory IDs on Purchase Detail.

## Commit Boundary
Purchase commit, Purchase History state, Inventory creation, numbering reservations required for correctness, and source snapshots are one atomic domain transaction.
Portfolio/analytics refresh is asynchronous.
