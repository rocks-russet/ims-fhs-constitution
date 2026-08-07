# INV-BR-011 — Product Metadata

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Product metadata is category-aware and does not force card-only fields onto Playmat, Deckbox, Sleeve, Sealed Product, Booklet, or other Product types.
2. Metadata may include brand, edition, size, language/region, sealed status, unit definition, splittable flag, and category-specific attributes.
3. Inventory Explorer displays only applicable metadata by default.
4. Product Detail remains clear even when different categories expose different schemas.
5. Metadata changes remain auditable.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
