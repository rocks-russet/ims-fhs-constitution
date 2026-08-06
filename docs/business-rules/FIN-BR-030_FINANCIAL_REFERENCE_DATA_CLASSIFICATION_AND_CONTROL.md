# FIN-BR-030 — Financial Reference Data, Classification, and Control

Purpose: Govern financial codes and classifications whose consistency is required for posting, reporting, reconciliation, and audit.

Rules:
- Controlled financial reference data includes at minimum:
  - Wallet Codes;
  - bucket codes;
  - posting types;
  - transaction and reason codes;
  - currencies;
  - Settlement Account identifiers;
  - financial categories;
  - status values;
  - approval thresholds when represented as configuration.
- Every controlled code must have a unique identifier, human-readable name, definition, status, effective date, and responsible owner.
- Codes used by posted or approved records are immutable and must not be deleted or reused for a different meaning.
- Renaming a display label must not change the stable code or historical interpretation of existing records.
- Deprecated codes must remain resolvable for historical reporting and must be blocked from new use after their effective end date.
- Changes to financial reference data require authorization appropriate to their impact and must preserve actor, reason, timestamp, and prior value.
- Posting logic must reject unknown, inactive, expired, or contextually invalid codes.
- Free-text values must not replace controlled codes where an approved classification exists.
- Mapping from external systems or imported records must preserve both the original source value and the approved IMS FHS code.
- Reference-data changes must be versioned when they affect calculation, authorization, classification, or reporting behavior.
- Reports and exports must identify the code definitions or version applicable to the reported records when ambiguity is possible.
- Validation of financial reference integrity must be included in audit, migration, and reconciliation procedures.
