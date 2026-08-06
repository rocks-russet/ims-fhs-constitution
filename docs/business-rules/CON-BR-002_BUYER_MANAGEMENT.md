# CON-BR-002 — Buyer Role and Buyer Profile

## Feature Origin

Contact Detail → Buyer.

## Purpose

Govern Buyer-role behavior and buyer-facing summary information.

## Rules

1. A Contact acts as Buyer when `roles.buyer = true`.
2. Enabling Buyer role must update the existing Contact.
3. Buyer identity on Sales records uses `contactId`.
4. Buyer profile may display total completed spending, completed order count, average completed order value, first purchase, last purchase, cancellation count, and favorite category.
5. Buyer metrics must derive from authoritative Sales records and must not be manually edited.
6. Cancelled, test, draft, and invalid orders are excluded unless the metric explicitly states otherwise.
7. Contact edits must not rewrite Buyer snapshots on historical invoices, orders, or shipments.
8. Disabling Buyer role prevents new Buyer selection but preserves all historical Sales records.

## Invariants

- Buyer is a role, not a separate Contact.
- One Buyer profile aggregates all valid Sales records linked to the same `contactId`.
- Historical Buyer analytics remain reproducible from source transactions.
