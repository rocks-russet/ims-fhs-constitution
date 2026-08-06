# FIN-BR-076 — Financial Settlement Reconciliation

## Purpose

Reconcile expected settlement components against actual receipts and deductions before or after settlement finalization.

## Rules

1. Each reconciliation identifies settlement source, settlement period, related orders, expected gross amount, expected deductions, expected net amount, actual net receipt, and variance.
2. Marketplace reconciliation must separately identify sales proceeds, platform fees, payment fees, shipping adjustments, vouchers, cashback, refunds, penalties, withholding, and other deductions.
3. Direct-payment reconciliation must identify payment evidence, allocated orders, refunds, and unapplied balances.
4. Variances must be classified as timing difference, fee difference, refund difference, missing transaction, duplicate transaction, currency difference, or unexplained.
5. Timing differences may remain open with an expected resolution date.
6. Unexplained differences create a financial exception and block finalization when material.
7. Corrections use adjustment, refund, reversal, or reallocation entries; expected or actual values may not be manually overwritten to force agreement.
8. Reconciliation must be repeatable from immutable source records.
9. Finalized reconciliation requires preparer and reviewer identification.

## Invariants

- Expected net amount equals gross amount minus valid deductions plus valid additions.
- Actual receipt must reconcile to bank, payment, or wallet evidence.
- Zero variance cannot be achieved through deletion of unmatched records.

## Related

- FIN-BR-038
- FIN-BR-052
- FIN-BR-067
