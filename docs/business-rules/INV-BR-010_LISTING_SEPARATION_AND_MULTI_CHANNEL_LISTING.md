---
document_id: INV-BR-010
title: Listing Separation and Multi-Channel Listing
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-001
  - P-011
---

# INV-BR-010 — Listing Separation and Multi-Channel Listing

## Purpose

Represent where and how inventory is offered for sale without changing inventory lifecycle state.

## Rule

1. Listing is a separate entity from Inventory.
2. One Inventory record may have multiple active listings across different channels.
3. Each listing must reference exactly one inventory source or reservable quantity allocation.
4. Listing records must identify the sales channel, external reference, listed price, status, and timestamps.

## Listing Status

Permitted initial values:

- `DRAFT`
- `ACTIVE`
- `PAUSED`
- `CLOSE_REQUIRED`
- `CLOSED`
- `SOLD`

## Cross-Channel Closure

When an inventory item is sold or finally reserved:

- platforms with supported APIs may be closed automatically;
- platforms without supported APIs must be marked `CLOSE_REQUIRED`;
- the operator must confirm manual closure;
- unresolved listings must remain visible as operational exceptions.

## Constraints

1. A listing must not make unavailable inventory reservable.
2. A listing must not directly mark inventory as sold.
3. Listing closure history must be auditable.
4. A sale on one channel must not silently delete listings on other channels.

## Overselling Limitation

IMS may reduce overselling risk, but cannot guarantee prevention on external platforms without real-time stock synchronization.
