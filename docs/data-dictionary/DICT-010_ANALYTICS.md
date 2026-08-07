# DICT-010 — Analytics Data Dictionary

Analytics are derived and read-only.

## Common Dimensions
- date range
- owner
- contact
- platform
- category
- language
- status
- transaction type

## Purchase Analytics
- purchase count
- unit count
- gross buy value
- final cost
- shipping
- discount
- seller performance
- Purchase-vs-Market variance

## Sales Analytics
- order count
- completed sales value
- item quantity
- discount
- additional charges
- shipping charged
- marketplace fee
- recognized profit
- Buyer-vs-Market variance

## Finance Analytics
- wallet movement
- realized profit
- capital contribution/return/conversion
- withdrawal
- reimbursement
- transfers

## Inventory / Portfolio Analytics
- inventory count
- cost basis
- current market value
- unrealized gain/loss
- category/language/status breakdown
- aging
- owner portfolio

## Data Quality
Each metric must declare:
- authoritative source population
- date basis
- included/excluded statuses
- aggregation grain
- refresh time
- market provider where valuation is involved

One transaction must never be double-counted merely because it has multiple invoices, payments, items, or postings.
