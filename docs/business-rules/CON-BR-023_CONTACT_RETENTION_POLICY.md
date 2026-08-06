# CON-BR-023 — Contact Retention Policy

## Feature Origin

Archive, Privacy, and Audit.

## Purpose

Preserve Contact data for operational and historical needs without retaining unnecessary data indefinitely.

## Rules

1. Contact records referenced by active or historical transactions remain retained as required.
2. Transaction snapshots remain under their transaction-domain retention rules.
3. Unused Contacts may be archived after review.
4. Active disputes, audits, investigations, or legal holds suspend disposal.
5. Disposal requires authorization and an audit record.
6. Required stable identifiers and transaction references must remain resolvable.
7. Sensitive data no longer required may be minimized where permitted without breaking historical evidence.
8. Retention decisions must not alter transaction values or ownership history.

## Invariants

- Retention cleanup does not orphan transactions.
- Archival remains distinguishable from disposal.
