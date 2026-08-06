# CON-BR-025 — Buyer Analytics

## Feature Origin

Contact Detail → Buyer and Contact Analytics.

## Purpose

Define Buyer spending and activity metrics used for customer analysis.

## Rules

1. Lifetime Spending is the sum of valid completed Sales order totals for the Contact as Buyer.
2. Order Count is the number of valid completed Sales orders.
3. Average Order Value equals Lifetime Spending divided by Order Count; zero orders produce zero or null according to UI policy.
4. First Purchase and Last Purchase use the authoritative completed-order timestamp.
5. Cancelled, test, duplicate, reversed, and invalid orders are excluded.
6. Refunded amounts reduce Buyer net spending where the metric is explicitly labeled Net Spending.
7. Gross Spending and Net Spending must be separately named when both are available.
8. Favorite Category is determined from completed purchased items using a documented deterministic method.
9. Buyer analytics aggregate all historical Sales records resolving to the same canonical Contact.
10. Metrics are derived and cannot be manually overwritten.

## Invariants

- Buyer analytics reconcile to the declared Sales population.
- Multiple invoices or payments do not double-count one order.
- Buyer and Seller metrics remain separate views of one Contact.
