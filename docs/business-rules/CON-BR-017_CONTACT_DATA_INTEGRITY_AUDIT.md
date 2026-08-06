# CON-BR-017 — Contact Data Integrity Audit

## Purpose

Define repeatable read-only checks for contact consistency, reference integrity, and duplicate risk.

## Rules

1. The contact integrity audit must identify:
   - duplicate `contactId`;
   - missing required identity fields;
   - invalid lifecycle status;
   - merged contacts without valid `mergedIntoContactId`;
   - merge chains or merge cycles;
   - duplicate normalized phone numbers requiring review;
   - duplicate verified external identities;
   - invalid or orphaned addresses;
   - multiple defaults for the same purpose;
   - inactive default addresses;
   - transaction references to missing contacts;
   - invalid role structures;
   - prohibited secrets in notes or fields; and
   - operational use of inactive, archived, or merged contacts.
2. Audit execution must be read-only.
3. Every finding must include severity, affected record, failed rule, evidence, and recommended resolution path.
4. Audit runs must record timestamp, scope, ruleset version, and finding counts.
5. Approved exceptions must be distinguishable from unresolved violations.
6. Corrections must use the governing contact workflow rather than direct silent mutation.
7. A post-correction audit must verify closure.
8. Critical broken references must block go-live approval.
9. Audit must support both full repository review and targeted contact review.
10. Historical audit results must remain retained.

## Invariants

- Audit never changes contact data.
- A clean result applies only to the executed scope and ruleset.
- Every correction remains traceable to its finding.
- Contact integrity must include cross-domain references.

## Related

- CON-BR-005
- CON-BR-006
- CON-BR-010
- CON-BR-012
- SAL-BR-040
