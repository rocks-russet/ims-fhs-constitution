---
document_id: INV-BR-005
title: Serialized and Quantity Tracking
version: 1.0.0
status: APPROVED
domain: Inventory
related_decisions:
  - INV-DEC-001
  - INV-DEC-002
related_principles:
  - P-002
  - P-008
---

# INV-BR-005 — Serialized and Quantity Tracking

## Purpose

Support both unique physical assets and fungible stock without compromising cost integrity.

## Tracking Modes

### SERIALIZED

One Inventory ID represents one specific physical item.

Required for:
- valuable single cards;
- graded cards;
- unique consignments;
- other individually distinguishable assets.

### QUANTITY

One Inventory ID represents a homogeneous lot of identical fungible units.

Suitable for:
- bulk cards;
- identical sealed products;
- packing supplies;
- other stock counted by quantity.

## Rules

1. A single card using serialized tracking always has quantity one.
2. Quantity lots with different cost bases must be separated.
3. Quantity lots with different ownership snapshots must be separated.
4. Quantity lots may be partially reserved.
5. Merchandise lots default to FIFO selection, with operator override allowed and audited.
6. Mixed bulk must use a dedicated bulk Product Definition.

## Quantity Integrity

The following must reconcile:

`quantityOnHand = quantityAvailable + quantityReserved + quantityUnavailable`

Inventory quantity changes must originate from movements or business events, not direct arbitrary editing.
