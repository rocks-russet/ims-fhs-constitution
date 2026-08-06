---
document_id: INV-BR-001
title: Inventory Identity
version: 1.0.0
status: APPROVED
domain: Inventory
related_decisions:
  - INV-DEC-001
related_principles:
  - CANON-002
  - P-003
---

# INV-BR-001 — Inventory Identity

## Purpose

Define the permanent identity of every physical asset managed by IMS FHS.

## Rule

1. Every physical asset recognized by IMS FHS must have exactly one Inventory ID.
2. Inventory IDs use the format `INV-########`.
3. An Inventory ID is globally unique, immutable, and never reused.
4. Ownership, location, custody, listing, reservation, condition, and lifecycle changes do not change the Inventory ID.
5. A new Inventory ID is created only when a physical transformation produces a distinct physical asset.

## Examples

- `INV-00000123` remains unchanged when ownership moves from a consignor to AK.
- A raw card transformed into a graded slab receives a new Inventory ID because the physical commercial asset has changed.
- A sealed case opened into twelve boxes produces twelve child Inventory IDs.

## Constraints

- Inventory IDs must not contain owner codes, category codes, or status codes.
- Deleted drafts may not recycle their reserved Inventory IDs.
- Historical references must remain resolvable after archival.

## Audit Requirements

The system must record:
- who created the Inventory ID;
- origin event;
- creation timestamp;
- any transformation or ownership change affecting the asset.

## Exceptions

None.
