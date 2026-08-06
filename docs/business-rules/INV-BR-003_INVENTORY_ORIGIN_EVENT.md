---
document_id: INV-BR-003
title: Inventory Origin Event
version: 1.0.0
status: APPROVED
domain: Inventory
related_decisions:
  - INV-DEC-003
related_principles:
  - CANON-006
  - P-004
  - P-006
---

# INV-BR-003 — Inventory Origin Event

## Purpose

Ensure that every Inventory record has a traceable business origin.

## Rule

Every Inventory record must be created by exactly one approved Origin Event.

Supported Origin Event types include:

- `PURCHASE`
- `CONSIGNMENT`
- `TRADE`
- `GIFT`
- `MIGRATION`
- `TRANSFORMATION`
- `RETURN`
- `ADJUSTMENT`

## Required References

Each Inventory record must store:
- `originType`;
- `originId`;
- `originTimestamp`;
- `createdBy`;
- operational control recipient.

## Operational Control

An Origin Event is valid only when it grants or establishes operational control over the asset.

Consignment qualifies because the consignor physically delivers the asset to FHS and authorizes storage, listing, sale, packing, and shipping.

## Prohibition

The system must not provide a generic “Create Inventory” action without selecting an Origin Event.

## Correction

Incorrect origins are corrected through a documented correction event. Historical origin references must not be silently replaced.
