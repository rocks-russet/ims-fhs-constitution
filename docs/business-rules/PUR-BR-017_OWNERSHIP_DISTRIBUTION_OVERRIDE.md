        # PUR-BR-017 — Ownership Distribution Override

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Item-level distribution override is exceptional and permission-controlled.
2. Override must record capitalDistribution, profitDistribution, reason, actor, timestamp, and approval reference where required.
3. Each applicable distribution must total 100 percent.
4. Override applies only to the selected item or items.
5. Default owner rules remain unchanged.
6. Committed override is preserved in Inventory and Purchase History snapshots.

        ## Invariants

        - Override cannot silently change global ownership rules.
- Invalid distribution totals block commit.
