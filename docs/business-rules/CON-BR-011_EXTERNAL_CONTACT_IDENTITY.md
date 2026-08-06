# CON-BR-011 — External Contact Identity

## Purpose

Govern marketplace, social-media, platform, and other external identities linked to a contact.

## Rules

1. External identities must be stored as structured references containing:
   - provider or platform;
   - account handle or external ID;
   - profile URL where applicable;
   - verification status;
   - active status; and
   - audit metadata.
2. One contact may have multiple external identities.
3. The same verified external identity must not be actively linked to multiple contacts without explicit review.
4. Display names from external platforms must not replace the stable IMS `contactId`.
5. External identity updates must not rewrite historical order, listing, payment, or dispute references.
6. Unverified external identities may support search but must not be treated as conclusive identity evidence.
7. A provider account change must preserve the prior value in history.
8. Merging contacts must deduplicate equivalent external identities.
9. Access to sensitive external identifiers must follow authorization policy.
10. Removal from active use must use deactivation rather than destructive deletion when historically referenced.

## Invariants

- External provider identity is not the IMS primary key.
- One verified external account cannot silently resolve to two active contacts.
- Historical platform references remain reproducible.
- External identity changes are auditable.

## Related

- CON-BR-005
- CON-BR-006
- SAL-BR-015
- SAL-BR-027
