        # PUR-BR-015 — Multiple Owner Purchase Cart

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. One Purchase Cart may contain items belonging to AK, AH, RCS, FHS, or other approved owners.
2. Transaction-level Seller, Platform, Date, Shipping, Discount, Tax, Currency, and Notes remain shared.
3. Cost allocation occurs across the whole cart before results attach to each owner’s items.
4. Commit expands Inventory using each item’s ownerCode.
5. Purchase History must preserve owner assignment per item.
6. Analytics may aggregate the same Purchase across multiple owners without duplicating transaction totals.

        ## Invariants

        - One cart is not split merely because owners differ.
- Each committed unit retains exactly one ownerCode.
