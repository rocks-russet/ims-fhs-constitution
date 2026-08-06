---
document_id: INV-BR-014
title: High-Value Inventory Controls
version: 1.0.0
status: APPROVED
domain: Inventory
last_updated: 2026-08-06
related_principles:
  - P-004
  - P-007
  - P-008
---

# INV-BR-014 — High-Value Inventory Controls

## Purpose

Apply additional verification and custody safeguards to materially valuable assets.

## High-Value Qualification

Inventory is high-value when any configured condition is true:

- final cost meets or exceeds the threshold;
- market estimate meets or exceeds the threshold;
- manual high-value flag is enabled;
- product category requires high-value treatment.

Thresholds are configurable by AK or another authorized administrator.

## Receiving

A high-value item may be received initially by one authorized user, but must remain `PENDING_VERIFICATION` and unavailable for sale until second-person verification is completed.

## Required Controls

High-value handling may require:

- receiving photographs;
- identity and variant confirmation;
- condition verification;
- authenticity review;
- custody acknowledgment;
- packing checklist;
- packing photographs;
- shipment photographs;
- second-person verification.

## Override

An authorized override is allowed only with:

- reason;
- actor;
- timestamp;
- audit event;
- any required follow-up verification.

## Prohibition

High-value controls must not be bypassed silently.
