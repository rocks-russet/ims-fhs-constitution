# INT-006 — Provider Adapter & Normalization

## Adapter Contract
Every external provider adapter implements a stable internal contract.

Representative operations:
- health/status
- lookup card/product
- refresh observation
- fetch catalog delta where applicable
- normalize provider response
- return typed success/unavailable/failure result

## Normalization
Raw provider formats are transformed into IMS FHS canonical fields before domain use.

## Identity Matching
Matching priority should use stable identifiers when available, then normalized:
- card number
- set
- language/market
- variant/rarity/edition
- other provider-specific distinguishing attributes

Name-only matching is insufficient when multiple commercial variants can exist.

## Raw Evidence
Raw metadata may be retained for diagnostics, but domain queries use normalized fields.

## Provider Swap
Changing external provider must not require rewriting Purchase, Sales, Inventory, or Portfolio business logic. Provider mapping/configuration determines the active adapter.
