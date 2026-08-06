# CON-BR-016 — Contact Import and Export

## Purpose

Govern controlled bulk exchange of contact records without bypassing validation, privacy, duplicate detection, or audit requirements.

## Rules

1. Every contact import must have an Import Batch ID.
2. Imports must run validation before commit.
3. Validation must include:
   - schema version;
   - required fields;
   - role values;
   - lifecycle status;
   - phone normalization;
   - address structure;
   - external identity structure;
   - duplicate candidates; and
   - prohibited sensitive data.
4. Imports must provide a preview showing records to create, update, reject, or flag for review.
5. Import must not automatically merge likely or possible duplicates.
6. Re-importing the same batch must be idempotent.
7. Partial commit is prohibited unless the accepted and rejected records are explicitly reported and independently traceable.
8. Every export must record exporter, timestamp, purpose, scope, filters, row count, and schema version.
9. Exports must minimize sensitive fields and follow access restrictions.
10. Exported files are not an alternative source of truth and cannot overwrite contact history without a governed import.
11. Failed imports must not create partial contact references in operational transactions.
12. Import and export files must preserve stable `contactId` where identity already exists.

## Invariants

- Bulk processing cannot bypass CON-BR-005 duplicate controls.
- Export authorization is stricter than ordinary search access where sensitive fields are included.
- Import errors do not silently mutate valid existing contacts.
- Batch history remains auditable.

## Related

- CON-BR-005
- CON-BR-008
- CON-BR-012
- FIN-BR-064
