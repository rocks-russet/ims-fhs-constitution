---
document_id: INV-BR-012
title: Storage Location and Custody
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-002
  - P-004
---

# INV-BR-012 — Storage Location and Custody

## Purpose

Distinguish economic ownership, physical responsibility, and physical storage.

## Rule

Every active Inventory record must identify separately:

- economic owner or ownership snapshot;
- current custodian;
- current storage location.

## Storage Location

Storage locations must use a hierarchical master structure.

Example:

`AH House > Card Room > Cabinet 2 > Box A`

Free-text notes may supplement, but must not replace, the structured location.

## Custodian

The custodian is the Party currently responsible for physical possession and safeguarding of the asset.

The custodian may differ from:

- the economic owner;
- the purchase operator;
- the sales operator;
- the shipping handler.

## History

Location and custody changes for high-value assets must always be recorded.

For other assets, movement history remains recommended and may be required by category or configuration.

## Constraints

1. Changing owner does not automatically change custodian.
2. Changing location does not automatically change owner.
3. An asset in transit must retain its last confirmed custodian and identify the intended recipient.
4. Missing location data prevents activation unless an authorized override is recorded.
