# INV-BR-019 --- Split Cost Allocation

## Feature Origin

Inventory v1 Feature Map --- reviewed against IMS FHS v1/v2 discovery.

## Rules

1.  Split cost is allocated proportionally by underlying quantity unless
    a later-approved Product rule specifies another method.
2.  Child Inventory cost totals must equal the Parent Inventory cost
    removed by the split.
3.  Average unit cost remains reproducible from the preserved Parent
    Inventory cost and represented quantity.
4.  Rounding remainder is assigned deterministically without creating or
    losing cost.
5.  Split does not create profit or change ownership economics.
6.  Cost allocation during a split operates on Inventory transformation
    quantity and must not rewrite Purchase Item Base Qty, unit buy
    price, Final Cost, or the historical Purchase market snapshot.
7.  Every Child Inventory must remain traceable to the Parent Inventory
    and, through lineage, to the original acquisition source.

## Invariants

-   No cost is created or destroyed by splitting.
-   Historical acquisition economics remain reconstructable.
-   Parent/Child cost lineage is deterministic.
-   Derived analytics never silently mutate transaction or inventory
    source data.
-   Cross-module references use stable IDs.
