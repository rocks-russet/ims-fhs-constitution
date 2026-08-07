        # PUR-BR-011 — Purchase Date

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase Date represents the real-world acquisition date.
2. Commit timestamp and Purchase Date are stored separately.
3. Backdated Purchase Dates require valid source evidence.
4. Future Purchase Dates are prohibited unless explicitly supported as a draft-only planned transaction.
5. Purchase Date changes trigger draft autosave.
6. Committed Purchase Date is immutable except through governed correction.

        ## Invariants

        - Posting time never replaces economic Purchase Date.
- Historical Purchase Date remains auditable.
