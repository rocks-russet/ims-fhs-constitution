# INT-003 — Bandai Official Card Source

## Purpose
Use the official Bandai One Piece Card Game source as authoritative/reference evidence where required for card identity, set validation, and official metadata.

## Role
Bandai source may:
- validate newly discovered set/card identity
- provide official references
- act as a verification/fallback source when third-party Card API output is incomplete or inconsistent

## Rules
1. Official source evidence is stored with retrieval timestamp/reference where practical.
2. Scraping/parsing implementation is isolated behind a Bandai adapter.
3. HTML/layout changes must not corrupt published Card DB data.
4. Parsed data is staged and validated before publication.
5. Cross-set content on official pages must not be assumed to belong to the requested set solely because it appears on that page.
6. Expected set/card prefixes and normalized identifiers are validated explicitly.

## Failure
Failure to parse the official site blocks only operations that explicitly require fresh official validation; existing validated Card DB remains available.
