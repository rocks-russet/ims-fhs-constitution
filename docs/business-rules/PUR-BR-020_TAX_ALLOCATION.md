        # PUR-BR-020 — Tax Allocation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Tax support exists in the Purchase schema but defaults to zero in IMS FHS v1.
2. When tax is zero, allocatedTax is zero for every item.
3. If activated later, tax allocation must use one approved documented method.
4. Tax activation requires configuration and Constitution review.
5. Tax fields must remain available in draft, commit, Inventory, and Purchase History.
6. Tax must not be inferred from marketplace or Seller without an explicit rule.

        ## Invariants

        - Dormant tax support does not create tax impact.
- Non-zero tax cannot be committed without an active allocation policy.
