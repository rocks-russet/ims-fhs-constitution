# CON-BR-027 — Contact Analytics Dashboard

## Feature Origin

Contact Analytics menu.

## Purpose

Provide Buyer and Seller rankings for business intelligence.

## Rules

1. Buyer rankings support Lifetime Spending, Order Count, Average Order Value, Purchase Frequency, and Last Purchase.
2. Seller rankings support Lifetime Purchase Value, Purchase Count, Units Supplied, Average Purchase Value, Supply Frequency, and Last Supply.
3. Rankings support a defined date range and an All-Time view.
4. Buyer and Seller ranking populations are separate but may link to the same Contact.
5. Clicking a ranking entry opens the Contact Detail.
6. Rankings must display metric definition, period, data cutoff, and excluded statuses.
7. Ties use a deterministic secondary sort.
8. Test and invalid data are excluded.
9. Dashboard data is read-only and derived from authoritative source records.
10. Aggregation must resolve merged Contacts to the canonical survivor without losing lineage.

## Invariants

- Rankings do not alter Contact or transaction data.
- A Contact may appear in both Buyer and Seller rankings.
- Metrics reconcile to CON-BR-025 and CON-BR-026.
