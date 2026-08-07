        # PUR-BR-040 — Purchase Import

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase import supports only approved schemas and authorized users.
2. Import runs preview and validation before commit.
3. Imported rows must map to Seller, Platform, itemType, owner, price, quantity, and required type-specific fields.
4. Duplicate and category checks still apply.
5. Each import batch has a stable Batch ID.
6. Committed import uses the same commit, allocation, ownership, and Inventory expansion rules as UI entry.

        ## Invariants

        - Import cannot bypass Purchase business rules.
- Re-import is idempotent.
