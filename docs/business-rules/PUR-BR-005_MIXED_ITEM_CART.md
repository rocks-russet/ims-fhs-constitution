        # PUR-BR-005 — Mixed Card and Product Cart

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. A single Purchase Cart may contain CARD and PRODUCT items together.
2. Mixed items share Seller, Platform, Purchase Date, Shipping, Discount, Tax, Currency, and Notes.
3. Card and Product validators run independently.
4. Mixed carts use one cost-allocation calculation across all eligible quantities and values.
5. Commit creates one Purchase transaction with heterogeneous items.
6. Analytics may classify the transaction as CARD, PRODUCT, or MIXED without splitting the transaction.

        ## Invariants

        - Mixed type does not create separate carts.
- All committed items share the same Purchase ID.
