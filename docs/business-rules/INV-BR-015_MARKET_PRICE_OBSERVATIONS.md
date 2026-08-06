---
document_id: INV-BR-015
title: Market Price Observations
version: 1.0.0
status: APPROVED
domain: Market Data
last_updated: 2026-08-06
related_principles:
  - P-002
  - P-004
---

# INV-BR-015 — Market Price Observations

## Purpose

Preserve market valuation history independently from cost basis and selling price.

## Rule

Market value must be stored as time-based observations, not as a single overwritten field.

Each observation must include:

- Product Definition;
- provider or manual source;
- observed price;
- currency;
- base-currency conversion where applicable;
- observed timestamp;
- condition or grade context;
- language and variant context;
- source URL or reference when available.

## Current Estimate

The current market estimate may be derived from:

- the latest approved provider observation;
- configured provider priority;
- approved manual observation.

## Separation

The system must keep these values separate:

- cost basis;
- market estimate;
- listing price;
- actual sale price.

## Provider Import

Initial OPTCG data import is administrator-controlled and reviewable.
Automatic provider data must not overwrite historical observations.

## Audit

Manual market adjustments must identify actor and reason.
