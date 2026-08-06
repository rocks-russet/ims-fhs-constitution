# CON-BR-005 — Contact Duplicate Detection

## Purpose

Prevent unnecessary duplicate contacts while allowing legitimate contacts with similar names or shared details.

## Rules

1. Duplicate detection must run before contact creation and before merge approval.
2. Candidate matching may use:
   - normalized display name;
   - normalized phone numbers;
   - marketplace or social profile;
   - normalized address;
   - known aliases; and
   - existing buyer or seller relationships.
3. Phone-number matches carry stronger weight than display-name-only matches.
4. Name similarity alone must not automatically merge contacts.
5. Duplicate detection results must distinguish:
   - `EXACT_MATCH`;
   - `LIKELY_DUPLICATE`;
   - `POSSIBLE_DUPLICATE`; and
   - `NO_MATCH`.
6. Exact matches should reuse the existing contact unless evidence shows they are different people or entities.
7. Likely and possible duplicates require user review.
8. A reviewer may proceed with separate creation only after recording the reason.
9. Detection must consider contacts in `ACTIVE`, `INACTIVE`, `MERGED`, and `ARCHIVED` states.
10. False-positive decisions should remain auditable to improve future matching behavior.

## Invariants

- Duplicate detection never silently merges records.
- Stable contact identity is not inferred from name alone.
- A previously merged contact cannot be recreated accidentally without warning.
- Matching logic must not modify transactional data.

## Related

- CON-BR-001
- CON-BR-002
- CON-BR-003
- CON-BR-006
