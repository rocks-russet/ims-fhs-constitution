# CON-BR-013 — Contact Tag and Classification

## Purpose

Govern non-identity labels used to organize contacts without allowing tags to replace authoritative roles, status, or transactional evidence.

## Rules

1. Contact tags are descriptive metadata and must not replace `contactId`, contact role, lifecycle status, or authorization.
2. Tags must come from an approved registry or follow an approved naming convention.
3. Duplicate tags that differ only by case, punctuation, spacing, or trivial wording must be normalized or merged.
4. A tag may describe operational context such as:
   - marketplace source;
   - preferred channel;
   - customer segment;
   - supplier category;
   - risk-review marker; or
   - internal workflow grouping.
5. Sensitive or defamatory labels are prohibited.
6. Tags that imply financial, fraud, compliance, or access restrictions must reference the governing evidence or case.
7. Tag creation, assignment, removal, deactivation, and merge must be auditable.
8. Removing a tag must not remove historical evidence that it was previously assigned.
9. Inactive tags must not be available for new assignment.
10. Tag-based filtering must not expose contacts beyond the user’s authorized access.

## Invariants

- Tags do not determine contact identity.
- Tags do not independently authorize or block transactions.
- Historical tag changes remain traceable.
- One normalized tag has one canonical identity.

## Related

- CON-BR-001
- CON-BR-008
- CON-BR-012
