# SAL-BR-002 — Claim Cart

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. A Claim Cart is buyer-oriented and belongs to exactly one Buyer Contact.
2. One buyer may have multiple Claim Carts, e.g. Auction #3 or Claimsale #2.
3. Claim Cart may contain CARD and PRODUCT inventory.
4. Only AVAILABLE/LISTED inventory eligible for reservation may be added.
5. Cart items retain source session and buyer linkage.
6. Cart merge into checkout must not duplicate inventory.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
