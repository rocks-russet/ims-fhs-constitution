        # PUR-BR-003 — Purchase Draft and Autosave

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Draft state is autosaved after meaningful changes.
2. Drafts store transaction-level and item-level data required to resume.
3. Draft save failures must be surfaced to the user.
4. Drafts do not create Inventory IDs or Purchase History records.
5. A user may resume or explicitly discard their draft.
6. Pending unsaved validation fields must block commit.

        ## Invariants

        - Draft persistence has no financial or inventory side effects.
- Discarding a draft does not affect Inventory.
