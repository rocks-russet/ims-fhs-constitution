---
document_id: INV-BR-009
title: Inventory Status Dimensions
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-002
  - P-008
---

# INV-BR-009 — Inventory Status Dimensions

## Purpose

Prevent one overloaded status field from mixing lifecycle, availability, condition, custody, and listing concerns.

## Rule

Inventory state must be represented through separate status dimensions.

### Lifecycle Status

Permitted initial values:

- `DRAFT`
- `ACTIVE`
- `TRANSFORMED`
- `CONSUMED`
- `ARCHIVED`
- `VOIDED`

### Availability Status

Permitted initial values:

- `UNAVAILABLE`
- `AVAILABLE`
- `PARTIALLY_RESERVED`
- `RESERVED`
- `SOLD`

### Condition Status

Permitted initial values:

- `MINT`
- `NEAR_MINT`
- `EXCELLENT`
- `GOOD`
- `PLAYED`
- `DAMAGED`
- `UNKNOWN`

### Custody Status

Permitted initial values:

- `IN_CUSTODY`
- `TRANSFER_REQUESTED`
- `IN_TRANSIT`
- `RECEIVED`
- `DISPUTED`

## Constraints

1. Listing state must not be represented as an inventory lifecycle status.
2. An item may be `ACTIVE`, `AVAILABLE`, and `DAMAGED` simultaneously.
3. A transformed parent must not return to `ACTIVE` except through an approved reversal.
4. A sold item must not be available for reservation.
5. Status changes must generate immutable business events and audit entries.

## UI Requirement

The user interface may show a simplified composite label, but the backend must preserve each independent state dimension.
