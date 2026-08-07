# DB-006 — Inventory Schema

## `inventory`
- id UUID PK
- inventory_number VARCHAR UNIQUE NOT NULL
- inventory_type VARCHAR NOT NULL
- card_definition_id FK nullable
- product_definition_id FK nullable
- owner_code VARCHAR NOT NULL
- holder_code VARCHAR nullable
- storage_id FK nullable
- availability_status VARCHAR NOT NULL
- origin_type VARCHAR NOT NULL
- origin_reference_id VARCHAR NOT NULL
- purchase_id FK nullable
- purchase_item_id FK nullable
- quantity INTEGER NOT NULL CHECK quantity >= 0
- buy_price NUMERIC nullable
- allocated_shipping NUMERIC NOT NULL default 0
- allocated_discount NUMERIC NOT NULL default 0
- allocated_tax NUMERIC NOT NULL default 0
- final_cost NUMERIC NOT NULL default 0
- total_remaining_cost NUMERIC nullable
- average_unit_cost NUMERIC nullable
- ownership_snapshot JSONB NOT NULL
- bulk_label VARCHAR nullable
- bulk_grouping_metadata JSONB nullable
- metadata JSONB nullable
- created_at / updated_at

Type constraints:
- SERIALIZED_CARD normally quantity = 1.
- BULK_CARD_LOT may hold quantity > 0 without per-card composition.
- PRODUCT / PACKING_SUPPLY may use quantity tracking where approved.

## `inventory_history`
- id UUID PK
- inventory_id FK
- event_type
- previous_value JSONB
- new_value JSONB
- reason
- actor_user_id nullable
- reference_type / reference_id
- created_at

Append-only.

## `storage_locations`
- id UUID PK
- storage_code UNIQUE
- display_name
- parent_storage_id nullable
- active
- sort_order

Storage hierarchy is optional display organization; no formal custody-transfer workflow.

## `inventory_transformations`
- id UUID PK
- transformation_number UNIQUE
- transformation_type
- actor_user_id
- reason
- created_at

## `inventory_transformation_lines`
- transformation_id FK
- parent_inventory_id FK
- child_inventory_id FK
- quantity
- allocated_cost

Constraints prevent cyclic/invalid lineage at application + integrity-audit level.

## Ownership Conversion
Use `inventory_ownership_history`:
- inventory_id
- owner_code
- ownership_snapshot JSONB
- effective_at
- reason
- actor_user_id
- approval_id nullable

Current `inventory.owner_code` and current snapshot represent present state; history remains immutable.
