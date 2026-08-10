# INV-BR-010 — Card Metadata

## Document ID
INV-BR-010

## Version
1.1.0

## Status
Accepted

## Purpose
Define searchable and auditable card metadata while distinguishing base card identity from collectible printing metadata.

## Rules

1. Serialized Card inventory references the authoritative collectible printing/Product Definition and remains associated with its base Card Definition.
2. Card Number identifies the base/gameplay card and is not sufficient as unique collectible printing identity.
3. Supported searchable base metadata includes card number, name, card type, color, cost, power, counter, traits/subtypes, effect/trigger data, and other approved game metadata.
4. Supported collectible printing metadata includes release/set, language, rarity, variant class, foil state, foil treatment, art treatment, edition/distribution tags, physical markers, artwork identity, condition, grade, and grading data where applicable.
5. Rarity, variant, foil state/treatment, art treatment, edition/distribution, and physical markers are separate concepts and must not be collapsed into one overloaded field.
6. Card metadata must support Inventory Explorer dynamic columns and filtering.
7. Language is mandatory where market-provider selection or collectible identity depends on it.
8. Card metadata must remain traceable to source/provenance and allow governed manual correction.
9. Extensible metadata vocabularies must support future legitimate printing types without requiring destructive schema redesign.
10. UNKNOWN is a valid explicit state for uncertain printing metadata where the field cannot yet be established safely.

## Invariants
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
- Metadata correction does not silently rewrite historical transaction snapshots.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INV-BR-064 — Card Media and Image Correction
- INT-006 — Provider Adapter & Normalization

## Revision History
- 1.0.0 — Initial Inventory v1 Feature Map baseline.
- 1.1.0 — 2026-08-10 11:54:25 WIB — Separated base card and printing metadata; added extensible printing dimensions, UNKNOWN state, and provenance/correction requirements.
