        # PUR-BR-038 — Purchase by Seller Analytics

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Seller analytics aggregate valid committed Purchases by canonical Seller contactId.
2. Metrics include total purchased value, transaction count, average purchase value, units supplied, first supply, and last supply.
3. Merged Contacts resolve to the survivor without losing source lineage.
4. `Other Seller` remains separately identifiable.
5. Cancelled, rolled-back, test, and invalid records are excluded.
6. Seller analytics reconcile with Contact Seller Analytics.

        ## Invariants

        - One Seller identity aggregates Buyer/Seller roles under the same Contact.
- Seller totals reconcile to Purchase History.
