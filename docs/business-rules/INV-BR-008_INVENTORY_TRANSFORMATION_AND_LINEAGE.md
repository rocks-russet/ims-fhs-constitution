---
document_id: INV-BR-008
title: Inventory Transformation and Lineage
version: 1.0.0
status: APPROVED
domain: Inventory
related_decisions:
  - INV-DEC-001
  - INV-DEC-003
related_principles:
  - P-003
  - P-004
  - P-006
---

# INV-BR-008 — Inventory Transformation and Lineage

## Purpose

Preserve physical and financial traceability when one inventory asset becomes another.

## Rule

1. A physical transformation closes or consumes the parent Inventory record.
2. Each newly created physical asset receives a new Inventory ID.
3. Parent and child records remain permanently linked through transformation lineage.
4. Parent Inventory records are not deleted.
5. Merge-back is not supported.
6. Incorrect transformations are corrected through reversal, not historical deletion.

## Supported Initial Transformations

- case to box;
- box to pack;
- sleeve pack to smaller quantity packs;
- mixed bulk to sorted child inventory;
- raw card to graded card.

## Timing

Transformation occurs when the physical action occurs.

Example:
A sealed case is transformed when its seal is physically opened, not when the first child box is sold.

## Cost Allocation

Child cost is allocated proportionally by default.
An administrator may override the allocation with a required reason.
All child costs must reconcile exactly to the parent cost plus approved transformation costs.

## Lineage Requirements

Each transformation stores:
- transformation ID;
- parent Inventory IDs;
- child Inventory IDs;
- transformation type;
- quantities;
- cost allocation;
- performed by;
- timestamp;
- reason and notes.
