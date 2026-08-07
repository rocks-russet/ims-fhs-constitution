# DB-008 — Sales Schema

## `sales_orders`
- id UUID PK
- order_number VARCHAR UNIQUE NOT NULL
- buyer_contact_id FK contacts
- source_type
- source_label
- source_url
- status
- actor_user_id FK users
- item_subtotal NUMERIC
- discount_amount NUMERIC
- additional_charge NUMERIC
- additional_charge_description
- buyer_shipping_charged NUMERIC
- marketplace_fee NUMERIC
- grand_total NUMERIC
- created_at
- completed_at nullable
- cancelled_at nullable

## `sales_order_items`
- id UUID PK
- order_id FK
- inventory_id FK
- quantity INTEGER CHECK >0
- agreed_sell_price NUMERIC
- item_subtotal NUMERIC
- ownership_profit_snapshot JSONB
- sale_market_snapshot_id FK nullable

Reservation must prevent double-active use of serialized inventory and over-reservation of quantity inventory.

## `invoice_versions`
- id UUID PK
- invoice_number
- order_id FK
- invoice_type V1/V2
- version INTEGER
- status ACTIVE/SUPERSEDED
- payment_method nullable
- visible_payment_options JSONB
- template_version
- commercial_snapshot JSONB
- generated_at
- generated_by

Unique active-version constraints per applicable invoice type/order.

## `payments`
- id UUID PK
- payment_number
- order_id FK
- method
- amount
- reference
- evidence_file_id nullable
- status
- confirmed_by nullable
- confirmed_at nullable
- created_at

## `packing_jobs`
- id UUID PK
- order_id FK
- operator_user_id
- status
- started_at / completed_at

## `packing_supply_consumptions`
- id UUID PK
- packing_job_id FK
- supply_inventory_id FK
- suggested_quantity nullable
- actual_quantity
- operator_user_id
- confirmed_at

## `shipments`
- id UUID PK
- shipment_number UNIQUE
- order_id FK
- handler_code/user/contact reference as approved
- courier
- tracking_number
- buyer_address_snapshot JSONB
- actual_shipping_cost NUMERIC nullable
- status
- shipped_at
- delivery_confirmed_at
