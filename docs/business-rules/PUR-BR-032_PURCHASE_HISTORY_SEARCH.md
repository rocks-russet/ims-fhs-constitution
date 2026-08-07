        # PUR-BR-032 — Purchase History Search

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Search supports Purchase ID, inventoryId, Seller, item name, card number, Product, ownerCode, Platform, and notes where authorized.
2. Search is case-normalized where appropriate.
3. Search results show enough context to distinguish similar transactions.
4. Search does not mutate records.
5. Broad searches use bounded pagination.
6. Merged Seller contacts resolve for navigation while original snapshots remain visible.

        ## Invariants

        - Search results derive from authoritative history.
- Search never changes totals or references.
