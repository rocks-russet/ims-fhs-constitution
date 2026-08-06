---
document_id: INV-BR-011
title: Reservation Integrity
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-002
  - P-004
  - P-011
---

# INV-BR-011 — Reservation Integrity

## Purpose

Prevent double allocation of the same physical asset or quantity.

## Rule

1. A serialized Inventory record may have only one active reservation.
2. A quantity-tracked lot may have multiple active reservations only while total reserved quantity does not exceed available quantity.
3. The first valid reservation transaction that successfully acquires the lock wins.
4. Later conflicting attempts must fail explicitly and create a conflict record where required.

## Reservation Holder

A reservation must reference one business holder:

- `CLAIM_CART_ITEM`; or
- `ORDER_LINE`.

The user interface may display the associated buyer, but the system reservation belongs to the business record, not directly to the Contact.

## Transfer of Reservation

When a Claim Cart Item becomes an Order Line, reservation ownership must transfer atomically.

There must be no intermediate state in which the item becomes available.

## Expiry

Reservation expiry is optional.

Automatic release is allowed only when:

- payment has not been confirmed;
- no manual extension exists;
- the related workflow remains in an early eligible state;
- no active marketplace checkout prevents release.

Reservations must not auto-expire after payment confirmation.

## Release

Removing or cancelling a valid reserved line releases only the affected inventory quantity.
