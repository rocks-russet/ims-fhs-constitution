# INV-BR-064 — Card Media and Image Correction

## Document ID
INV-BR-064

## Version
1.0.0

## Status
Accepted

## Purpose
Provide resilient card imagery while allowing authorized manual correction when external providers have missing, incorrect, low-quality, or unavailable images.

## Rules

1. Card/Product catalog media is independent from provider identity and must support multiple media sources.
2. Supported image sources may include OPTCG API, Bandai Official, another approved external URL, and user-uploaded media.
3. IMS must provide an authorized Image Correction workflow for missing or incorrect catalog images.
4. An authorized user may select an external image URL or upload an image and designate it as the effective/primary override.
5. Manual/user primary image override takes precedence over automated provider refresh until the override is explicitly removed or replaced.
6. Provider synchronization must not silently overwrite an active manual image override.
7. Previous provider image references remain available as provenance/alternate media where practical.
8. Media records retain source type, source/reference URL when applicable, actor for manual changes, timestamps, and active/override state.
9. Changing catalog media does not create a new Inventory ID and does not alter historical transaction identity.
10. The same effective-media resolver should be used throughout IMS so Inventory, Purchase, Catalog, Sales, and other authorized views render the selected image consistently.
11. A missing external image must not make an otherwise valid manually created card unusable.
12. Manual card creation may complete with user-provided imagery even when OPTCG API or Bandai has no usable image.
13. Image resolution/quality may differ by source, but the application should avoid broken-image behavior and provide a deterministic fallback state.
14. Media correction is auditable and reversible.

## Invariants
- External refresh cannot silently destroy a deliberate user image correction.
- Media changes do not redefine collectible printing identity by themselves.
- Broken provider media does not invalidate otherwise valid catalog identity.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INT-002 — OPTCG Card API Integration
- INT-003 — Bandai Official Card Source

## Revision History
- 1.0.0 — 2026-08-10 11:54:25 WIB — Added multi-source catalog media and manual image correction/override policy.
