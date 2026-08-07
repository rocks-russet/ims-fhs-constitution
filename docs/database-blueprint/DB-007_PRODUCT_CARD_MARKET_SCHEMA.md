# DB-007 — Product, Card & Market Schema

## `card_definitions`
Store normalized authoritative card catalog fields used for search:
- id UUID PK
- card_key UNIQUE
- card_number
- card_name
- set_code
- rarity
- color
- card_type
- counter
- source_metadata JSONB
- active
- source_version
- updated_at

Language/variant-specific commercial identity may use child table `card_variants` if required by implementation.

## `product_categories`
- id UUID PK
- category_code UNIQUE
- display_name
- status
- metadata_schema JSONB
- created_by / approved_by
- created_at / updated_at

## `product_definitions`
- id UUID PK
- product_number UNIQUE
- category_id FK
- family_id nullable
- name
- variant_label
- unit_definition
- splittable BOOLEAN
- metadata JSONB
- status
- reference_url
- created_at / updated_at

## `product_families`
Optional grouping only.

## `market_providers`
- id UUID PK
- provider_code UNIQUE
- display_name
- market_language
- active
- config_version

Baseline:
- PRICECHARTING → EN
- YUYUTEI → JP

## `market_observations`
- id UUID PK
- provider_id FK
- card_definition_id/product_definition_id nullable as applicable
- market_language
- observed_price NUMERIC nullable
- currency
- observed_at
- retrieved_at
- retrieval_status
- source_reference
- validity_status
- raw_metadata JSONB

Indexes support latest valid observation by provider + asset.

Historical observations are append-only. Failed refresh never deletes the last valid observation.
