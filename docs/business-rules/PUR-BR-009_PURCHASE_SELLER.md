        # PUR-BR-009 — Purchase Seller

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every Purchase references one Seller contact for the transaction.
2. Seller selection uses contactId, not display name alone.
3. Inline Seller creation must follow Contact duplicate detection.
4. A Seller may also hold Buyer role on the same Contact.
5. `Other Seller` may be used only under the generic-contact rule.
6. Seller snapshot is preserved in Purchase History.

        ## Invariants

        - One Purchase has one transaction-level Seller.
- Seller role does not create a separate Contact identity.
