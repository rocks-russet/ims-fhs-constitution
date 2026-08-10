# INT-003 — Bandai Official Card Source

## Document ID
INT-003

## Version
1.1.0

## Status
Accepted

## Purpose
Use the official Bandai One Piece Card Game source as authoritative/reference evidence for card identity, set validation, official metadata, and operator-assisted manual catalog entry.

## Role
Bandai source may:
- validate newly discovered set/card identity
- provide official references
- act as a verification/fallback source when third-party Card API output is incomplete or inconsistent
- provide targeted assisted lookup when an operator manually enters a missing Card Number

## Rules
1. Official source evidence is stored with retrieval timestamp/reference where practical.
2. Scraping/parsing implementation is isolated behind a Bandai adapter.
3. HTML/layout changes must not corrupt published Card DB data.
4. Parsed data is staged and validated before publication.
5. Cross-set content on official pages must not be assumed to belong to the requested set solely because it appears on that page.
6. Expected set/card prefixes and normalized identifiers are validated explicitly.
7. Assisted manual lookup presents Bandai results as suggestions rather than silently confirmed truth.
8. The operator can open the exact Bandai reference URL in a separate browser tab for independent verification before accepting or overriding suggested data.
9. Accepted Bandai suggestions retain Bandai provenance automatically; the user is not required to retype the same reference URL for each accepted field.
10. A Bandai parsing/lookup failure must not prevent authorized manual card creation.
11. Bandai images may participate in catalog media resolution, but an active authorized manual image override has precedence until explicitly changed.

## Failure
Failure to parse the official site blocks only operations that explicitly require fresh official validation; existing validated Card DB remains available and legitimate manual entry remains possible.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INV-BR-064 — Card Media and Image Correction
- INT-006 — Provider Adapter & Normalization

## Revision History
- 1.0.0 — Initial Bandai Official source specification.
- 1.1.0 — 2026-08-10 11:54:25 WIB — Added targeted assisted manual lookup, user-openable official reference, provenance, fallback manual entry, and image override precedence.
