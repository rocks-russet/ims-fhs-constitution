        # PUR-BR-001 — Purchase Session

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. An authenticated user starts and owns the editing session as actor.
2. The session actor does not determine item ownership.
3. A session may contain one active Purchase Cart.
4. Session state must survive normal UI refresh through draft persistence.
5. Commit, discard, logout, or explicit reset ends the active editing session.
6. Session actions must be attributable to the authenticated user.

        ## Invariants

        - Actor identity and item ownership remain separate.
- A session does not create Inventory before commit.
