---
document_id: INV-BR-006
title: Ownership Snapshot
version: 1.0.0
status: APPROVED
domain: Ownership
related_decisions:
  - FIN-DEC-001
  - FIN-DEC-002
related_principles:
  - P-004
  - P-006
---

# INV-BR-006 — Ownership Snapshot

## Purpose

Preserve the economic rules applicable to each inventory asset at the time of recognition.

## Rule

Every Inventory record must store an immutable ownership snapshot containing:

- display owner;
- capital beneficiaries;
- capital percentages;
- profit beneficiaries;
- profit percentages;
- ownership rule ID;
- ownership rule version;
- resolution timestamp;
- override indicator and reason where applicable.

## Constraints

1. Capital percentages must total exactly 100%.
2. Profit percentages must total exactly 100%.
3. A quantity lot may contain only units with the same ownership snapshot.
4. Changes to default ownership rules affect future inventory only.
5. Existing inventory retains its historical snapshot unless an approved ownership conversion occurs.

## FHS Ownership

An Inventory record may display `FHS` as owner while its capital and profit beneficiaries include FHS and/or stakeholder parties.

## Custom Override

Custom distributions require:
- explicit reason;
- preview of nominal allocation;
- approval when affecting another party or FHS funds;
- audit record.
