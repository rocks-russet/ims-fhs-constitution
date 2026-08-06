# CON-BR-014 — Contact Notes and Communication Preferences

## Purpose

Govern operational notes and communication preferences associated with contacts while preventing unstructured notes from becoming an unsafe source of truth.

## Rules

1. Contact notes must be relevant to legitimate operational use.
2. Notes must not contain:
   - passwords;
   - authentication secrets;
   - full payment credentials;
   - access tokens;
   - unnecessary sensitive personal data; or
   - unsupported allegations.
3. Each note must record author and timestamp.
4. Material edits must preserve prior content or a version history.
5. Communication preferences may include preferred channel, preferred contact time, language preference, and opt-out status.
6. Communication preferences guide outreach but do not replace legally or operationally required notices.
7. An opt-out must prevent non-essential promotional communication but must not block necessary transaction communication.
8. Notes must not override authoritative addresses, phone records, order instructions, financial evidence, or approval records.
9. Restricted notes require role-based visibility.
10. Archived or merged contacts retain historical notes and preference changes.

## Invariants

- Notes are contextual, not authoritative transaction evidence.
- Secrets are never stored in contact notes.
- Communication preferences remain attributable and auditable.
- Contact merges preserve note provenance.

## Related

- CON-BR-006
- CON-BR-012
- CON-BR-013
