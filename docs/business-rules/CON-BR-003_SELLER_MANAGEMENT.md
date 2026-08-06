# CON-BR-003 — Seller Role and Seller Profile

## Feature Origin

Contact Detail → Seller.

## Purpose

Govern Seller-role behavior and supplier-facing summary information.

## Rules

1. A Contact acts as Seller when `roles.seller = true`.
2. Enabling Seller role must update the existing Contact.
3. Seller identity on Purchase records uses `contactId`.
4. Seller profile may display total amount purchased from the Seller, purchase count, average purchase value, total inventory units supplied, first supply, last supply, and frequently supplied category.
5. Seller metrics must derive from authoritative Purchase History and Inventory records.
6. Cancelled, test, rolled-back, and invalid purchases are excluded unless explicitly stated.
7. Contact edits must not rewrite Seller snapshots on historical Purchase records.
8. Disabling Seller role prevents new Seller selection but preserves all historical Purchase records.
9. `Other Seller` remains a governed generic Contact for purchases where the actual Seller is unknown.

## Invariants

- Seller is a role, not a separate Contact.
- Buyer and Seller activity for the same entity remain under one `contactId`.
- Seller analytics remain traceable to Purchase and Inventory source records.
