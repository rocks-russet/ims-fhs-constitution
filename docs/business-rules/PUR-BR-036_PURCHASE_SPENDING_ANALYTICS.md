        # PUR-BR-036 — Purchase Spending Analytics

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Total Spending is calculated from committed Purchase totals using the declared gross or Final Cost basis.
2. Gross Spending and Final Cost Spending must be separately named.
3. Monthly and yearly trends use Purchase Date unless the report explicitly uses commit date.
4. Discount and shipping components remain separately reportable.
5. Refunds or corrective reversals reduce the appropriate net metric.
6. One Purchase transaction is not double-counted because it has multiple items.

        ## Invariants

        - Spending metrics reconcile to Purchase History.
- Metric basis is explicit.
