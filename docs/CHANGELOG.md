# Changelog

## v0.2.x — Packing Supply Suggestion Engine (2026-08-21)

Added/updated:
- Expanded Packing Job, Supplies Template, Supplies Consumption, and Packing Completion rules.
- Added advisory Packing Supply Suggestion with Suggested vs Actual separation.
- Added operator Supply override governance.
- Added data-driven Packing Template Rule Engine.
- Baseline rule types: PER_ITEM, PER_MATCHING_ITEM, PER_ORDER, QUANTITY_THRESHOLD, COMBINATION.
- Added learned Template Candidate workflow from finalized operator usage/history.
- Learned candidates require human approval and can never auto-activate.
- Packing Supply consumption occurs only from confirmed Actual Usage.
- Packing Completion and tracked Supply consumption are atomic and idempotent.
- No matching Template is a valid outcome and never blocks manual packing.
- Added SAL-DEC-004 Packing Supply Suggestion Engine.
- Added SAL-BR-049 through SAL-BR-052.
- Expanded Sales API Packing contract.

## v0.2.0 Part 4 — Card Artwork & Physical Treatment Governance

Added/updated:
- Artwork Identity separated from human-facing Artwork Version.
- Art Treatment remains independent from artwork identity.
- Foil State, Foil Treatment, and Surface Treatment are separate dimensions.
- Surface Treatment supports UNKNOWN / Smooth / Textured / Embossed / Engraved baseline vocabulary.
- Reprint artwork changes do not automatically imply Alternate Art.
- Release-aware assisted lookup may suggest artwork provenance but must not guess unverified physical treatment.
- Added INV-BR-065 Card Printing Physical Treatments.

## v0.2.0 Part 3 — Card Catalog Identity & Assisted Data Governance

Added/updated:
- Base Card Definition → Collectible Printing identity decision.
- Release-aware card printing identity and provider-reference policy.
- Extensible printing metadata: variant, foil, treatment, edition/distribution, physical markers.
- Assisted manual Card entry with autocomplete/registry behavior.
- Bandai Official targeted lookup with user-openable verification URL.
- Field/source provenance and manual override history.
- Manual creation of new registry concepts requires Reference URL.
- Multi-source Card media and manual Image Correction/primary override policy.
- Provider refresh must preserve deliberate manual metadata/media corrections.

## v0.2.0 Part 1

Added:
- Glossary
- Naming Convention
- Document Structure
- Versioning Policy
- Release Policy
- Templates
- Initial Decision Records
