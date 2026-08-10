# INV-DEC-004 — Card Definition and Collectible Printing Identity

## Document ID
INV-DEC-004

## Version
1.1.0

## Status
Accepted

## Purpose
Define canonical card identity for IMS FHS v2 so gameplay/base card identity is not conflated with a specific collectible physical printing.

## Decision

1. A Card Number identifies a base/gameplay Card Definition and is not, by itself, a unique collectible printing.
2. A Card Definition may have one or many Collectible Printings.
3. Serialized Card Inventory references the applicable collectible Product Definition/Printing, while related printings remain grouped under the same Card Definition.
4. Release context is part of collectible printing identity. A card reprinted in another booster, starter deck, premium booster, campaign, or other release may be a separate printing even when Card Number and gameplay text are unchanged.
5. Printing identity may use normalized characteristics including language, release, variant class, foil state, foil treatment, art treatment, edition/distribution tags, physical markers, artwork identity, and other approved distinguishing evidence.
6. External provider IDs are provider references/provenance and are never the sole IMS authoritative identity.
7. Provider image filenames/IDs may be used as evidence or discrimination hints but must not be assumed to describe the semantic printing class.
8. Generic Parallel is a valid printing classification independent from explicit Alternate Art.
9. Edition/distribution tags such as Dash Pack, Winner Pack, Tournament Pack, Release Event, Box Topper, or future campaign types are extensible classifications and do not, by themselves, imply a particular physical treatment.
10. Foil state, foil treatment, surface treatment, artwork identity, art treatment, edition/distribution, and physical markers are separate dimensions.
11. Artwork Identity identifies which artwork is physically printed; Artwork Version is a human-facing label for that artwork. Artwork Version must not replace a stable artwork discriminator in canonical identity.
12. Art Treatment describes presentation of artwork (for example Standard Art or Alternate Art) and must not be inferred merely because a reprint uses different artwork.
13. Surface Treatment describes physical surface characteristics such as Smooth, Textured, Embossed, or Engraved and is independent from Foil Treatment.
14. A reprint may retain the same Card Number while changing release, artwork, foil treatment, surface treatment, or other collectible characteristics.
15. Exact provider duplicates may consolidate into one printing only when normalized identity evidence supports equivalence; uncertain collisions require review rather than silent merge.
16. Historical Inventory identity must remain stable when mutable catalog metadata, source mappings, or media are corrected.

## Related Documents
- INV-BR-010 — Card Metadata
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INV-BR-064 — Card Media and Image Correction
- INT-002 — OPTCG Card API Integration
- INT-003 — Bandai Official Card Source
- INT-006 — Provider Adapter & Normalization
- INV-DEC-002 — Product Definition

## Revision History
- 1.0.0 — 2026-08-10 11:54:25 WIB — Accepted canonical Base Card → Collectible Printing model following OPTCG collision review.

- 1.1.0 — 2026-08-10 13:54:03 WIB — Separated Artwork Identity/Version, Art Treatment, Foil Treatment, and Surface Treatment as independent printing dimensions.
