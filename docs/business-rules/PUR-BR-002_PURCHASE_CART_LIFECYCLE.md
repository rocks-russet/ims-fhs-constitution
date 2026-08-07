        # PUR-BR-002 — Purchase Cart Lifecycle

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. One Purchase Cart represents one real-world purchase transaction.
2. A cart may be EMPTY, DRAFT, READY_TO_COMMIT, COMMITTING, COMMITTED, or DISCARDED.
3. Transaction-level data is shared by every item in the cart.
4. Item-level data remains independent per item.
5. A committed or discarded cart cannot be edited.
6. Repeated commit requests must be idempotent.

        ## Invariants

        - One cart produces one Purchase transaction.
- No committed cart can be committed twice.
