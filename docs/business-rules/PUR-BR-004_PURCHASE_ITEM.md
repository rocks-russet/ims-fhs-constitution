        # PUR-BR-004 — Purchase Item

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every cart row is a Purchase Item.
2. Each item has itemType, quantity, buyPrice, ownerCode, validation state, and allocation fields.
3. itemType is CARD or PRODUCT.
4. Card-specific and Product-specific fields are validated by their respective validators.
5. Each item retains its own ownership snapshot after resolution.
6. Item identity inside the cart must be stable while editing.

        ## Invariants

        - Every committed item is traceable to its source Purchase.
- Item fields are not inferred from the logged-in user.
