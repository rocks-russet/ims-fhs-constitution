# PUR-BR-007 --- Purchase Quantity

## Feature Origin

Purchase Manager v1 Feature Map --- clarified for IMS FHS v2 acquisition
and transformation semantics.

## Rules

1.  Quantity must be a positive whole number for CARD and ordinary
    PRODUCT items.
2.  `Base Qty` is the acquisition quantity declared on the Purchase Item
    and is an immutable transaction fact after commit.
3.  `Base Qty` represents how many purchased inventory units the
    Purchase Item acquired before any later Inventory split or
    transformation.
4.  Quantity changes before commit trigger cost-allocation
    recalculation.
5.  Quantity changes after commit are prohibited; later physical
    subdivision must use the Inventory transformation/split workflow
    instead of rewriting Purchase quantity.
6.  For a splittable PRODUCT, Purchase `Base Qty` and the quantity
    represented inside each acquired Inventory unit are separate
    concepts. Example: purchasing one sleeve pack containing 70 sleeves
    has `Base Qty = 1`; a later Inventory split may transform that one
    parent Inventory into children representing 10 + 10 + 10 + 10 + 10 +
    10 + 10 sleeves.
7.  Purchase commit expands the Purchase Item according to `Base Qty`;
    each expanded acquired unit receives its own Inventory identity
    unless another explicitly approved Inventory model applies.
8.  Zero, negative, fractional, or missing Base Qty blocks commit.
9.  Split recipes, child quantities, and transformed quantities are not
    Purchase Item facts and must not be encoded by changing Base Qty.

## Invariants

-   Committed acquisition unit count equals the declared Purchase Base
    Qty.
-   Base Qty cannot silently change after commit.
-   Inventory transformation never rewrites the historical acquisition
    quantity.
-   Purchase quantity and Inventory transformation quantity remain
    separately reconstructable.
