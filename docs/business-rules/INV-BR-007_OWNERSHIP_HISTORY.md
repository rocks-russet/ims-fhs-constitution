---
document_id: INV-BR-007
title: Ownership History
version: 1.0.0
status: APPROVED
domain: Ownership
related_decisions:
  - INV-DEC-001
related_principles:
  - P-004
  - P-006
---

# INV-BR-007 — Ownership History

## Purpose

Allow economic ownership to change without losing inventory identity or historical accountability.

## Rule

1. Ownership changes do not create a new Inventory ID when the physical asset remains the same.
2. Each ownership change creates a new Ownership History entry.
3. The previous ownership snapshot remains immutable.
4. Future sales, profit, wallet, and settlement behavior uses the latest effective ownership snapshot.
5. Historical transactions continue using the snapshot captured at their own transaction time.

## Examples

- Consignment asset purchased by AK.
- AK transfers 50% capital ownership to RCS.
- Personal inventory converted into FHS-owned inventory through approved funding.

## Required Data

- previous snapshot;
- new snapshot;
- effective timestamp;
- reason;
- consideration or settlement reference where applicable;
- requested by;
- approved by;
- audit reference.

## Prohibition

Ownership must not be overwritten without creating history.
