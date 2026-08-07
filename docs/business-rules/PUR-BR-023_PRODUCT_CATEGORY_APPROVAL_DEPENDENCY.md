        # PUR-BR-023 — Product Category Approval Dependency

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. PRODUCT items require an ACTIVE approved category before final commit.
2. A missing category may be submitted through the governed category-request flow.
3. A Purchase containing a pending category remains a draft.
4. Category approval does not automatically commit the Purchase.
5. Rejected or inactive categories block commit.
6. Category changes after approval trigger item revalidation.

        ## Invariants

        - Unapproved categories cannot create production Inventory.
- Draft data remains preserved while approval is pending.
