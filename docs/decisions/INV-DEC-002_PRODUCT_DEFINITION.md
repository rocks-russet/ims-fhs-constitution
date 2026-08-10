# INV-DEC-002 Product Definition

## Document ID
INV-DEC-002

## Version
1.1.0

## Status
Accepted

## Purpose
Define the relationship between reusable commercial/catalog definitions and physical Inventory.

## Decision
1. Product Definition represents a commercial/catalog product or collectible printing.
2. Inventory represents physical ownership.
3. One Product Definition may have many Inventory records.
4. For Card inventory, one Product Definition represents one collectible printing and may be grouped under a base Card Definition according to INV-DEC-004.
5. For non-card products, Product Definition remains category/variant-aware without requiring card-only identity fields.
6. Mutable Product Definition metadata does not silently rewrite immutable transaction snapshots or Inventory identity.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-007 — Product Definition Link
- INV-BR-010 — Card Metadata
- INV-BR-011 — Product Metadata

## Revision History
- 1.0.0 — Initial Product Definition decision.
- 1.1.0 — 2026-08-10 11:54:25 WIB — Clarified Card Product Definition as collectible printing under a base Card Definition while preserving the general non-card Product model.
