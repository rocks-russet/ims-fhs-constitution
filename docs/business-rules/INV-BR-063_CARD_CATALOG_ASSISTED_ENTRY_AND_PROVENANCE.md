# INV-BR-063 — Card Catalog Assisted Entry and Provenance

## Document ID
INV-BR-063

## Version
1.0.0

## Status
Accepted

## Purpose
Allow operators to create or correct card catalog data quickly without sacrificing traceability, controlled vocabulary, or human verification.

## Rules

1. IMS FHS must support manual creation of a Card Definition/Collectible Printing when the required card is absent from the current catalog.
2. Manual entry must be assisted rather than forcing operators to type every known field from scratch.
3. Known controlled fields should use searchable/autocomplete registries where practical, including Card Type, Color, Cost, Counter, Traits, Variant, Edition/Distribution, Foil State, Foil Treatment, Art Treatment, and Physical Markers.
4. Typing a Card Number may trigger targeted lookup against configured providers and the Bandai Official source.
5. When Bandai Official returns a plausible match, IMS presents the result as a suggestion and does not silently publish it as confirmed truth.
6. The user must be able to open the exact official/reference URL in a separate browser tab to independently verify the suggestion.
7. Suggested fields may be accepted together, reviewed individually, or manually overridden.
8. Provider-derived values automatically retain provider provenance, retrieval timestamp, and reference where available.
9. A manual override retains the previous provider evidence/history and records actor, timestamp, changed field, previous value, and new value.
10. Manual creation of a new extensible registry concept such as a previously unknown Edition/Distribution, Foil Treatment, Art Treatment, or Physical Marker requires a Reference URL and records creator and timestamp.
11. Once a referenced registry concept exists, ordinary card entry may reuse it without repeatedly entering the same Reference URL.
12. Manual correction of ordinary card fields does not require a new Reference URL on every edit; the system should avoid turning normal catalog entry into an audit-form burden.
13. Unknown or incomplete printing metadata may remain explicitly UNKNOWN where safe; the system must not force an operator to invent a classification.
14. Assisted lookup failure must not block legitimate manual entry.
15. Fuzzy/autocomplete suggestions may help resolve typing variants but must not silently rewrite operator-selected canonical values.
16. Traits and other repeatable vocabularies should be reusable canonical values with aliases/search terms where useful.
17. Catalog provenance must distinguish at minimum provider-derived, user-confirmed, manual override, and manually created evidence states where applicable.
18. Catalog entry UX should minimize required actions for ordinary cards and place uncommon printing/provenance controls in an advanced/printing section where practical.
19. Purchase/acquisition flows may invoke assisted card creation when a required card is missing, so the operator does not need to abandon the transaction merely to populate the catalog.

## Invariants
- Provider assistance never removes human override authority.
- Manual override never erases prior evidence.
- Unknown data is preferable to fabricated certainty.
- Catalog governance must not make routine inventory entry unnecessarily laborious.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-010 — Card Metadata
- INT-002 — OPTCG Card API Integration
- INT-003 — Bandai Official Card Source
- INT-006 — Provider Adapter & Normalization

## Revision History
- 1.0.0 — 2026-08-10 11:54:25 WIB — Added assisted manual card entry, autocomplete/registry behavior, official-source verification, and field-level provenance rules.
