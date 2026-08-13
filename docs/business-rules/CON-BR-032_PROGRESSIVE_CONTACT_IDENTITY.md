# CON-BR-032 — Progressive Contact Identity

## Feature Origin

Contact Manager → Create/Edit Contact.

## Purpose

Allow IMS FHS to represent real trading counterparties even when only partial identity information is initially known.

## Rules

1. A Contact may be created from the minimum reliable identity available to the operator.
2. A Seller may initially be known only by marketplace/store identity.
3. Unknown legal/personal name, phone, address, or payment account must not force creation of a generic Seller when a stable marketplace/store identity is known.
4. Contact information may be progressively enriched as new reliable information becomes known.
5. Progressive enrichment updates the same canonical Contact and does not replace its immutable `contactId` / Contact Number.
6. A Contact may transition from marketplace-only identity to a richer identity containing phone, address, bank account, Facebook, or other external identities.
7. New information must not rewrite historical transaction snapshots.
8. If two previously separate Contacts are later proven to represent the same counterparty, governed Contact Merge is used rather than silently reassigning identity.
9. Display Name may remain a recognizable store/trading name even when a personal name later becomes known.
10. Completeness is contextual; missing optional identity fields are not data-integrity failures by themselves.

## Invariants

- One real counterparty should converge toward one canonical Contact.
- Identity completeness may increase over time.
- Canonical Contact identity and historical transaction snapshots remain separate concerns.
