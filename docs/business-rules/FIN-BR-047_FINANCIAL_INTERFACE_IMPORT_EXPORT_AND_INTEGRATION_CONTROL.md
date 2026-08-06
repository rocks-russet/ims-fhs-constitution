# FIN-BR-047 — Financial Interface, Import, Export, and Integration Control

Purpose: Ensure financial data exchanged between IMS FHS and spreadsheets, banks, marketplaces, payment providers, accounting tools, APIs, or other systems remains complete, accurate, authorized, and traceable.

Rules:
- Every financial interface must have a defined source, destination, owner, frequency, data scope, format, validation method, and failure-handling procedure.
- Imported data must not become authoritative financial history until required structural, semantic, duplicate, and reconciliation validations have passed.
- Every import batch must record:
  - batch ID;
  - source;
  - source period or statement reference;
  - file hash or equivalent integrity reference;
  - received time;
  - imported time;
  - actor or service identity;
  - record counts and totals;
  - accepted, rejected, and duplicate counts;
  - validation outcome.
- Imported events must preserve source identity and must be subject to idempotency controls so reprocessing cannot create duplicate postings.
- Rejected records must remain visible with a reason and must not be silently discarded, defaulted, or partially posted.
- Partial batch acceptance is permitted only when accepted and rejected records are clearly separated and financial totals remain reconcilable.
- Transformation rules, field mappings, currency handling, sign conventions, rounding, timezone treatment, and status mappings must be documented and versioned.
- Exported financial data must identify its generation time, scope, filter criteria, currency basis, schema or report version, and whether it is provisional or final.
- Sensitive exports must be access-controlled, minimized to required fields, and protected during storage and transmission.
- Manual spreadsheet uploads or downloads must not bypass approval, evidence, period-close, retention, or audit requirements.
- Interface failures, missing files, unexpected totals, schema changes, authentication failures, and stale data must generate an exception and prevent unsupported assumptions of completeness.
- Reprocessing after failure must use the original batch identity or an explicitly linked replacement batch and must preserve prior attempts.
- Integration credentials and secrets must be stored and rotated through approved security controls and must not be embedded in ordinary source data or exported files.
- Interface reconciliation must compare at minimum record count, control total, amount by currency, and unmatched items between source and destination.
- Changes to a financial interface require testing, approval, rollback readiness, and post-deployment validation before being treated as production-authoritative.
