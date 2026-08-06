# FIN-BR-064 — Financial File Exchange Control

Purpose: Define operational validation for financial data files exchanged with external or administrative processes.

Rules:
- Every export records source scope, filters, row count, schema version, timestamp, and checksum.
- Every import must pass schema, type, required-field, identity, duplicate, authorization, and balance validations.
- Imports run in preview mode before commit.
- Partial import is prohibited unless explicitly supported and fully reported.
- Imported records retain external source references and import batch ID.
- Re-import of the same batch must be idempotent.
- Sensitive fields must be minimized and protected.
- Failed imports produce a rejection report without financial posting.

Invariants:
- Import cannot bypass business rules.
- Export does not become an alternative source of truth.
- Committed import effects must be reversible through governed financial entries, not file deletion.

Related:
- FIN-BR-037
- FIN-BR-047
- FIN-BR-053
