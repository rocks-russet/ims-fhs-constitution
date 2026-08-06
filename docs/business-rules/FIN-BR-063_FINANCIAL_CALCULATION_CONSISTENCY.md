# FIN-BR-063 — Financial Calculation Consistency

Purpose: Ensure the same economic event produces identical financial results across UI, server, ledger, wallet, invoice, and report layers.

Rules:
- Authoritative calculations execute server-side.
- Shared formulas must use one canonical implementation or versioned specification.
- Inputs, precision, rounding sequence, and allocation remainder handling must be explicit.
- Client-side previews are non-authoritative and must be reconciled to committed server results.
- Persisted financial results must include sufficient inputs or snapshots for reproduction.
- Allocation remainders must be assigned deterministically.
- Automated tests must cover normal, zero, negative, boundary, and high-value cases.
- Calculation-version changes require impact assessment and effective-date control.

Invariants:
- The sum of allocated components equals the authoritative total.
- Invoice totals, order totals, ledger postings, and wallet effects cannot diverge.
- Floating-point behavior must not determine financial outcomes unpredictably.

Related:
- FIN-BR-004
- FIN-BR-015
- FIN-BR-040
