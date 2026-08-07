        # PUR-BR-041 — Purchase Export

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase export supports authorized CSV or JSON output.
2. Export records actor, timestamp, scope, filters, row count, and schema version.
3. Export may include transaction and item-level views.
4. Sensitive notes or internal fields require additional authorization.
5. Export is read-only and is not an alternative source of truth.
6. Exported totals must reconcile to the selected source population.

        ## Invariants

        - Export does not mutate Purchase records.
- Stable IDs are preserved.
