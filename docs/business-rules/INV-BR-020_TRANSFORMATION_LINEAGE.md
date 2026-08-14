# INV-BR-020 --- Parent-Child Transformation Lineage

## Feature Origin

Inventory v1 Feature Map --- reviewed against IMS FHS v1/v2 discovery
and terminology clarification.

## Rules

1.  The Inventory record consumed or reduced by a split/transformation
    is the `Parent Inventory`.
2.  Every Inventory record created by that split/transformation is a
    `Child Inventory`.
3.  Every split or transformation preserves `parentInventoryId`,
    `childInventoryIds`, transformation quantity, transformation cost,
    event identity, and transformation timestamp.
4.  A consumed/transformed Parent Inventory remains historically visible
    and cannot simultaneously represent the same physical quantity as
    active Child Inventory.
5.  Inventory Detail shows lineage in both directions: Parent -\>
    Children and Child -\> Parent.
6.  Lineage is immutable after a successful transformation.
7.  Multi-generation transformations are allowed; a Child Inventory may
    later become the Parent Inventory of another transformation without
    losing earlier lineage.
8.  Broken, orphaned, duplicated, or cyclic lineage is an integrity
    finding.
9.  Transformation lineage must preserve navigation back to the original
    Purchase Item and its immutable Base Qty where the Inventory
    originated from Purchase.

## Invariants

-   Parent/Child terminology always refers to Inventory transformation
    lineage, not Purchase hierarchy.
-   Historical source records remain reconstructable.
-   Transformation cannot duplicate physical quantity.
-   Derived analytics never silently mutate transaction or inventory
    source data.
-   Cross-module references use stable IDs.
