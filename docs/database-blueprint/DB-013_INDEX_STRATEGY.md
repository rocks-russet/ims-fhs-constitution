# DB-013 — Index Strategy

## High-Priority Unique Indexes
- contacts.contact_number
- system_users.user_code
- purchases.purchase_number
- inventory.inventory_number
- sales_orders.order_number
- financial document numbers
- domain event/job/approval numbers
- idempotency keys

## Inventory Search
Indexes or composite indexes should support:
- inventory_type
- owner_code
- holder_code
- storage_id
- availability_status
- card_definition_id
- product_definition_id
- purchase_id
- purchase_item_id
- card searchable fields via joined card definition
- owner + status
- type + status
- card definition + owner + status

Use PostgreSQL trigram/full-text indexes only after actual search patterns justify them.

## Purchase
- seller_contact_id + purchase_date
- purchase_date
- status
- purchase_items.purchase_id
- purchase_items.owner_code

## Sales
- buyer_contact_id + created_at
- status + created_at
- sales_order_items.inventory_id
- payments.order_id
- shipments.order_id
- tracking_number where useful

## Finance
- wallet_postings.wallet_id + posted_at
- reference_type + reference_id
- financial_events.idempotency_key
- withdrawals.status + created_at

## Market
- provider_id + card/product + observed_at DESC
- valid/latest-observation access path

## Rule
Do not create speculative indexes blindly. Validate with `EXPLAIN (ANALYZE, BUFFERS)` and real query patterns.
