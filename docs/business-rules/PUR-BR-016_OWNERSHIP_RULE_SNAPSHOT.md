        # PUR-BR-016 — Ownership Rule Snapshot

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Ownership rules are resolved per Purchase Item using that item’s ownerCode.
2. The resolved capitalDistribution, profitDistribution, ruleId, version, and resolvedAt are snapshotted.
3. Later ownership-rule changes do not rewrite committed snapshots.
4. Each expanded Inventory unit inherits the item snapshot.
5. Purchase History retains the same snapshot.
6. Missing or invalid active ownership rule blocks commit.

        ## Invariants

        - Every committed item has a complete immutable ownership snapshot.
- Snapshot source is item owner, not session actor.
