---
document_id: INV-BR-013
title: Custody Transfer
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-004
  - P-006
  - P-007
---

# INV-BR-013 — Custody Transfer

## Purpose

Provide accountable transfer of physical responsibility between people or storage custodians.

## Rule

A custody transfer must contain:

- sender;
- intended receiver;
- inventory list and quantities;
- origin location;
- destination location;
- transfer timestamp;
- sender confirmation;
- receiver acknowledgment;
- discrepancy notes where applicable.

## State Flow

`TRANSFER_REQUESTED -> IN_TRANSIT -> RECEIVED`

Exception flow:

`IN_TRANSIT -> DISPUTED`

## Effective Custodian

The receiver becomes the confirmed custodian only after acknowledgment.

During transit, the system must preserve:

- previous confirmed custodian;
- intended receiver;
- responsible transfer handler.

## Discrepancy

The receiver may report:

- missing item;
- wrong item;
- damaged item;
- quantity mismatch;
- other discrepancy.

A disputed transfer must not be silently completed.

## Audit

Edits to transfer references, quantities, or recipients require audit history.
