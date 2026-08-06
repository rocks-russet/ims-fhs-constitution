# CON-BR-026 — Seller Analytics

## Feature Origin

Contact Detail → Seller and Contact Analytics.

## Purpose

Define Seller supply and Purchase metrics.

## Rules

1. Lifetime Purchase Value is the sum of valid committed Purchase totals linked to the Contact as Seller.
2. Purchase Count is the number of valid committed Purchase records.
3. Average Purchase Value equals Lifetime Purchase Value divided by Purchase Count.
4. Units Supplied derive from expanded Inventory or Purchase History records.
5. First Supply and Last Supply use authoritative Purchase commit timestamps.
6. Cancelled, test, rolled-back, duplicate, and invalid Purchase records are excluded.
7. Seller analytics may separate cards and non-card products.
8. Frequently Supplied Category uses a documented deterministic calculation.
9. Seller analytics aggregate all historical Purchase records resolving to the same canonical Contact.
10. Metrics are derived and cannot be manually overwritten.

## Invariants

- Seller analytics reconcile to Purchase History and Inventory.
- One multi-copy Purchase is counted according to the declared metric: transaction count versus unit count.
- Seller and Buyer activity remain connected to one Contact identity.
