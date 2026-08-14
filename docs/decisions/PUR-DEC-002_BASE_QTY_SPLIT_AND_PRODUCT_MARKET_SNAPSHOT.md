# Purchase Base Qty, Inventory Split, and Product Market Snapshot

Document ID: PUR-DEC-002 Version: 1.0.0 Status: APPROVED

## Problem

IMS FHS needs one unambiguous quantity model across Purchase and
Inventory.

A Purchase line records what was acquired, while Inventory may later
represent the same physical goods at a different granularity after a
split or transformation. Treating both quantities as the same mutable
concept would corrupt acquisition history.

The existing market snapshot rule also primarily describes CARD provider
data, while PRODUCT acquisitions may still need transaction-time Market
Quality analysis even when no governed automatic market provider exists.

## Decision

1.  Purchase Item `quantity` is formally the acquisition `Base Qty`.
2.  Base Qty is a Purchase-domain transaction fact and becomes immutable
    after commit.
3.  Inventory split/transformation quantity is an Inventory-domain fact
    and never rewrites Purchase Base Qty.
4.  `Parent Inventory` means the Inventory record consumed or reduced by
    a transformation.
5.  `Child Inventory` means an Inventory record created by that
    transformation.
6.  Parent/Child terminology does not describe Purchase hierarchy.
7.  Inventory transformations preserve quantity conservation, cost
    conservation, ownership economics, and immutable lineage.
8.  PRODUCT may carry a manual transaction-time market snapshot when no
    governed automatic provider exists.
9.  Manual PRODUCT market snapshots must carry explicit manual
    provenance and must never masquerade as provider-fetched
    observations.
10. A valid PRODUCT manual transaction-time snapshot participates in the
    same item-level and Purchase-level Market Quality analytical model
    as valid CARD transaction-time snapshots.
11. Purchase-level Market Quality remains value-weighted under
    PUR-DEC-001; no separate PRODUCT formula is introduced.
12. Missing market reference remains unavailable data and must not be
    silently substituted with current market price.

## Example

A Purchase Item acquires one sealed sleeve pack containing 70 sleeves:

-   Purchase Base Qty = 1.
-   Commit creates the acquired Inventory identity for that one
    purchased unit.
-   Later, the operator splits the Parent Inventory into seven Child
    Inventory records of quantity 10 each, or another valid free-form
    distribution totaling 70.
-   Purchase Base Qty remains 1 forever.
-   Parent/Child lineage records the later Inventory transformation.
-   If the operator recorded a valid manual market reference at
    acquisition, Purchase Market Quality uses that preserved
    transaction-time value.

## Consequences

-   UI labels should use `Base Qty` in Purchase contexts where ambiguity
    is possible.
-   Inventory screens should use `Parent Inventory` and
    `Child Inventory` for transformation lineage.
-   Database/API implementation must keep Purchase Base Qty and
    Inventory transformation quantity as separate fields/concepts.
-   Market snapshot schema must support both provider and manual
    provenance.
-   Product Market Quality does not require a separate analytics engine.
-   Historical Purchase analytics remain reconstructable even after
    multiple Inventory transformations.

## Related Business Rules / Decisions

-   PUR-BR-007 --- Purchase Quantity
-   PUR-BR-045 --- Market Snapshot at Purchase
-   INV-BR-018 --- Free-Form Inventory Split
-   INV-BR-019 --- Split Cost Allocation
-   INV-BR-020 --- Parent-Child Transformation Lineage
-   PUR-DEC-001 --- Purchase Market Quality Aggregation and Landed
    Market Quality
-   ADR-005 --- Transaction Market Snapshot
-   DICT-001 --- Inventory
-   DICT-002 --- Purchase
