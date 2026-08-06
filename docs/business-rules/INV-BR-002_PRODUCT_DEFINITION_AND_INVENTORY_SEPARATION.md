---
document_id: INV-BR-002
title: Product Definition and Inventory Separation
version: 1.0.0
status: APPROVED
domain: Catalog
related_decisions:
  - INV-DEC-002
related_principles:
  - CANON-002
  - P-009
---

# INV-BR-002 — Product Definition and Inventory Separation

## Purpose

Separate commercial product metadata from physical inventory ownership.

## Rule

1. A Product Definition describes what a product is.
2. An Inventory record describes a physical asset or quantity lot actually controlled by IMS FHS.
3. Multiple Inventory records may reference the same Product Definition.
4. Commercially distinct variants must use separate Product Definitions.
5. Different languages must use separate Product Definitions.
6. Related Product Definitions may be grouped in one Product Family.
7. Temporary Product Definitions are allowed with status `DRAFT`.

## Product Definition Examples

- OP01-001 Luffy Normal JP
- OP01-001 Luffy Alternate Art JP
- OP01-001 Luffy Alternate Art EN

Each is a distinct Product Definition.

## Inventory Examples

Three physical copies of the same card must have separate Inventory IDs when tracked as serialized assets.

## Constraints

Inventory must not exist without a Product Definition reference, except during controlled migration where a temporary Product Definition is created automatically.

## Metadata

Common metadata belongs to Product Definition.
Physical-condition, cost, owner, location, and custody belong to Inventory.
