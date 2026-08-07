        # PUR-BR-006 — Individual Buy Price

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every Purchase Item stores its own unit buy price.
2. Item subtotal equals unit buy price multiplied by quantity.
3. Batch apply may set the same price to multiple items, but each item remains individually editable.
4. Buy price must be non-negative and expressed in the cart currency.
5. Allocated costs are applied after item subtotal calculation.
6. Downstream Final Cost must not use a cart-wide average buy price.

        ## Invariants

        - Each inventory unit remains traceable to an item-level price basis.
- Manual batch editing never removes individual prices.
