# CON-BR-014 — Internal Notes and Communication Preferences

## Feature Origin

Contact Detail → Notes.

## Purpose

Manage internal operational notes and communication preferences.

## Rules

1. Notes are internal unless explicitly marked otherwise.
2. Every note records author and timestamp.
3. Material edits preserve version history.
4. Notes must not contain passwords, tokens, full payment credentials, or unnecessary sensitive data.
5. Communication preferences may include preferred channel, language, contact time, and non-essential communication opt-out.
6. Notes do not override authoritative address, phone, order, shipment, or payment records.
7. Restricted notes follow role-based visibility.
8. Merge preserves note authorship and provenance.

## Invariants

- Notes are contextual, not transaction evidence.
- Secrets are never stored in notes.
