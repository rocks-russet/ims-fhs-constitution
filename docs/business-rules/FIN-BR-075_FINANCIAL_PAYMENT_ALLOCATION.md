# FIN-BR-075 — Financial Payment Allocation

## Purpose

Define deterministic allocation when one payment covers one or more orders, invoices, fees, shipping charges, or other obligations.

## Rules

1. Every payment must retain payer, payment method, amount, currency, received timestamp, external reference, and allocation status.
2. Allocation must reference specific financial obligations and amounts.
3. Unless an explicit agreement states otherwise, allocation priority is:
   1. uniquely referenced order or invoice;
   2. mandatory transaction fees or shipping charges tied to that reference;
   3. oldest eligible outstanding obligation;
   4. remaining amount as unapplied funds.
4. Partial payments reduce only the allocated obligation and must not mark the order fully paid.
5. Overpayments remain separately identifiable as unapplied funds, refundable amount, deposit, or approved wallet credit.
6. One payment may be split across multiple obligations only when the complete allocation totals exactly equal the payment amount.
7. Allocation changes after posting require reversal or approved reallocation entries; the original allocation remains auditable.
8. Duplicate external payment references must be flagged and blocked from duplicate recognition.
9. Payment allocation must synchronize order status, receivable balance, wallet effect, and settlement reporting.

## Invariants

- Total allocated amount plus unapplied amount equals the payment amount.
- An obligation cannot be over-allocated.
- Payment evidence cannot be reused for multiple financial recognitions.

## Related

- FIN-BR-005
- FIN-BR-038
- FIN-BR-067
