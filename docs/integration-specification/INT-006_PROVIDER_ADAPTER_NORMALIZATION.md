# INT-006 — Provider Adapter & Normalization

## Document ID
INT-006

## Version
1.1.0

## Status
Accepted

## Purpose
Define a stable provider boundary so external catalog/market sources can assist IMS without becoming the IMS source of business identity.

## Adapter Contract
Every external provider adapter implements a stable internal contract.

Representative operations:
- health/status
- lookup card/product
- refresh observation
- fetch catalog delta where applicable
- normalize provider response
- return typed success/unavailable/failure result

## Normalization
Raw provider formats are transformed into IMS FHS canonical fields before domain use.

## Identity Matching
1. Card Number identifies the base/gameplay Card Definition, not necessarily one collectible printing.
2. Collectible printing matching considers normalized evidence such as:
   - card number
   - language/market
   - release/set context
   - variant class
   - foil state/treatment
   - art treatment
   - edition/distribution tags
   - physical markers
   - artwork/provider distinguishing evidence
3. External provider IDs are provenance/provider references and must not be treated as the sole IMS canonical identity.
4. Name-only matching is insufficient when multiple commercial/collectible variants can exist.
5. Exact-looking collisions that remain ambiguous are staged for review rather than silently merged.
6. Provider-specific suffixes, filenames, and IDs may be useful signals but are not assumed to have universal semantic meaning.
7. Manual corrections and user-confirmed classifications must survive later provider refresh unless explicitly superseded through governed correction.

## Raw Evidence
Raw metadata may be retained for diagnostics and provenance, but domain queries use normalized fields.

## Provider Swap
Changing external provider must not require rewriting Purchase, Sales, Inventory, or Portfolio business logic. Provider mapping/configuration determines the active adapter.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INT-002 — OPTCG Card API Integration
- INT-003 — Bandai Official Card Source

## Revision History
- 1.0.0 — Initial provider adapter/normalization specification.
- 1.1.0 — 2026-08-10 11:54:25 WIB — Added base-card vs collectible-printing identity, release-aware matching, provider-ID provenance, collision review, and manual-correction precedence.
