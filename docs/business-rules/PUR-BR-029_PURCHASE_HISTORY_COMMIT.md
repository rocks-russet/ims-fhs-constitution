        # PUR-BR-029 — Purchase History Commit

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. One committed cart creates one Purchase History transaction record.
2. The transaction record preserves Seller, Platform, Purchase Date, Currency, Shipping, Discount, Tax, Notes, actor, and commit timestamp.
3. Item detail preserves type, quantity, owner, price, allocations, Final Cost, ownership snapshot, and generated inventoryIds.
4. History is append-only.
5. Committed history is the authoritative evidence of how Inventory entered the system.
6. Later corrections use governed corrective records.

        ## Invariants

        - One Purchase ID links all expanded Inventory from the cart.
- History totals reconcile to Inventory costs.
