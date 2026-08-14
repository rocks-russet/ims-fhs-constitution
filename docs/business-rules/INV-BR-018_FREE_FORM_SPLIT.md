# INV-BR-018 --- Free-Form Inventory Split

## Feature Origin

Inventory v1 Feature Map --- reviewed against IMS FHS v1/v2 discovery
and clarified for Base Qty semantics.

## Rules

1.  A splittable Inventory record may be divided into any positive child
    quantities chosen by the operator where its Product Definition
    permits splitting.
2.  The Inventory record being transformed is the `Parent Inventory`;
    every Inventory record created by that transformation is a
    `Child Inventory`.
3.  Split quantity describes the underlying physical/logical quantity
    represented by the Parent Inventory and is independent from the
    historical Purchase Item Base Qty.
4.  The sum of all Child Inventory quantities must equal the quantity
    removed from the Parent Inventory.
5.  Examples include Sleeve 70 -\> 10+10+10+10+10+10+10, 50+20,
    30+20+20, or Case -\> selected child packs where the Product
    Definition permits it.
6.  Split pattern is not hard-coded to one recipe.
7.  A split is atomic and creates explicit Child Inventory records with
    stable Inventory IDs.
8.  A split must preserve cost, ownership economics, origin
    traceability, and transformation lineage.
9.  A split must not rewrite the source Purchase Item Base Qty or other
    immutable acquisition facts.
10. A Parent Inventory cannot remain active for physical quantity that
    has already been represented by active Child Inventory records.

## Invariants

-   Child quantity total equals quantity removed from Parent Inventory.
-   Historical source records remain reconstructable.
-   Purchase Base Qty remains unchanged by Inventory splitting.
-   Derived analytics never silently mutate transaction or inventory
    source data.
-   Cross-module references use stable IDs.
