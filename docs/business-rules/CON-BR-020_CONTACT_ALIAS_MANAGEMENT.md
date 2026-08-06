# CON-BR-020 — Contact Alias Management

## Feature Origin

Contact search and duplicate review.

## Purpose

Support alternative names without creating duplicate identities.

## Rules

1. A Contact may have multiple aliases.
2. Aliases support search and duplicate detection.
3. Alias is not a separate Contact.
4. Alias creation records actor and timestamp.
5. Duplicate normalized aliases are deduplicated.
6. A former marketplace name or known nickname may be stored as an alias.
7. Aliases do not replace the canonical display name unless explicitly promoted.
8. Merge preserves aliases from both Contacts.

## Invariants

- Alias never creates a second identity.
- Search resolves aliases to the same `contactId`.
