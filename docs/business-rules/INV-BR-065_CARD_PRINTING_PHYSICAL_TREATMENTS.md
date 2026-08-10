# INV-BR-065 — Card Printing Physical Treatments

## Document ID
INV-BR-065

## Version
1.0.0

## Status
Accepted

## Purpose
Define independent collectible-printing dimensions so visually or physically
different cards are not collapsed into ambiguous variant labels.

## Rules

1. Artwork Identity identifies the artwork actually printed on the card.
2. Artwork Version is a user-facing label for an Artwork Identity and may be
   changed without becoming the sole canonical identity key.
3. Art Treatment describes presentation of the artwork, such as Standard Art,
   Alternate Art, or Full Art.
4. A reprint with different artwork does not automatically become Alternate Art.
   It may remain Standard Art while having a distinct Artwork Identity.
5. Foil State indicates whether the printing is Foil, Non-Foil, or Unknown.
6. Foil Treatment describes optical foil/pattern behavior and is separate from
   Surface Treatment.
7. Surface Treatment describes physical finish, including governed values such
   as Smooth, Textured, Embossed, Engraved, or Unknown.
8. Foil Treatment must not imply Surface Treatment and Surface Treatment must
   not imply Foil Treatment.
9. Edition/Distribution Tags describe distribution provenance and must not be
   treated as physical characteristics by themselves.
10. Physical Markers describe explicit observable marks such as stamps or event
    logos.
11. UNKNOWN is valid whenever the physical characteristic has not been verified.
12. Provider or Bandai data may populate Artwork Identity/Version when supported
    by source evidence, but the system must not guess foil or surface treatment
    from release name alone.
13. New custom controlled vocabulary values require provenance according to
    INV-BR-063.
14. Market-price mappings must resolve to the intended collectible printing and
    must not rely on Card Number alone when artwork/treatment/release differ.

## Examples

### Same Card Number, Different Release Artwork
A Leader originally identified by `ST21-001` may appear in ST-31 with a different
official artwork. The ST-31 printing may be `REPRINT` + `STANDARD` Art Treatment
with a distinct Artwork Identity.

### Same Card Number, Different Physical Finish
A base booster printing and a Starter Deck reprint may share gameplay identity
while differing in Foil Treatment and/or Surface Treatment. Those attributes are
recorded independently.

## Related Documents
- INV-DEC-004 — Card Definition and Collectible Printing Identity
- INV-BR-010 — Card Metadata
- INV-BR-063 — Card Catalog Assisted Entry and Provenance
- INV-BR-064 — Card Media and Image Correction
- INT-006 — Provider Adapter & Normalization

## Revision History
- 1.0.0 — 2026-08-10 13:54:03 WIB — Added independent Artwork, Art Treatment, Foil Treatment, and Surface Treatment governance.
