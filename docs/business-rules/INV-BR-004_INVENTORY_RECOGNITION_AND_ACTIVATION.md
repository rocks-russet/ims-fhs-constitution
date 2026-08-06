---
document_id: INV-BR-004
title: Inventory Recognition and Activation
version: 1.0.0
status: APPROVED
domain: Inventory
related_decisions:
  - INV-DEC-003
related_principles:
  - CANON-006
  - P-011
---

# INV-BR-004 — Inventory Recognition and Activation

## Purpose

Define when goods become active inventory.

## Rule

1. Goods become active inventory only after physical receipt and required verification.
2. Checkout, payment, seller packing, or courier dispatch alone do not create active inventory.
3. Personal purchases are normally entered only after the received quantity is physically verified.
4. FHS procurement may be tracked before receipt, but expected goods remain non-inventory until received.
5. High-value goods requiring second-person verification may be received into `PENDING_VERIFICATION` and must not be sold until verification is complete.

## Partial Receipt

For FHS procurement:
- received quantity may become active;
- outstanding quantity remains pending;
- purchase status becomes `PARTIALLY_RECEIVED`.

For personal purchases:
- only the physically received quantity is entered;
- later receipts are entered separately and linked through the same external purchase reference where applicable.

## Activation Requirements

Activation requires:
- Product Definition;
- quantity or serialized unit;
- owner or ownership snapshot;
- custodian;
- storage location;
- condition;
- cost basis or applicable consignment terms;
- origin reference.
