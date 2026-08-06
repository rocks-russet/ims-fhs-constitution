# FIN-BR-051 — Tax Adjustment and Correction

Purpose: Govern corrections to tax-classified amounts after initial recognition.

Rules:
- Tax corrections require a reference to the original transaction and source evidence.
- Corrections must distinguish tax increase, tax decrease, reclassification, and cancellation.
- The original tax record remains unchanged; correction entries carry their own identity and timestamp.
- A correction affecting inventory cost must update valuation only through an approved cost adjustment.
- A correction affecting a completed sale must not silently rewrite recognized revenue or margin.
- Tax adjustments must identify whether they belong to the current period or require prior-period treatment.
- Any refundable or recoverable tax must be classified separately from expense.
- Reports must show gross value, tax component, and net effect consistently.

Invariants:
- Tax cannot be adjusted without traceable evidence.
- Tax corrections cannot create duplicate financial impact.
- Tax treatment must remain reconcilable to source documents.

Related:
- FIN-BR-015
- FIN-BR-026
- FIN-BR-041
