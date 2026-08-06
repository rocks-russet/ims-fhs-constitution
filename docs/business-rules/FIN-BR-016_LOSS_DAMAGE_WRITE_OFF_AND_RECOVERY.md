# FIN-BR-016 — Loss, Damage, Write-Off, and Recovery

Purpose: Govern financial recognition of lost value, damaged assets, uncollectible obligations, and subsequent recoveries.

Rules:
- A loss or write-off may be recognized only from an authoritative source event and sufficient supporting evidence.
- Applicable source events include inventory loss, inventory damage, fraud, unrecoverable receivable, settlement shortage, payment failure, and approved administrative correction.
- Every loss or write-off must identify:
  - event ID;
  - affected asset, obligation, order, or transaction;
  - amount and currency;
  - valuation basis;
  - responsible Wallet Code and bucket;
  - cause;
  - evidence;
  - actor;
  - approval record when required.
- Inventory write-off value must follow the authoritative inventory cost or another explicitly approved valuation basis.
- A write-off must not erase the original asset, obligation, or ledger history.
- Financial responsibility must follow the applicable ownership snapshot, custody rule, contractual agreement, or approved decision.
- Unresolved responsibility may be recorded in a suspense or exception state but must not be assigned arbitrarily.
- Insurance proceeds, compensation, recovered funds, or later collections must be recorded as new recovery events linked to the original loss.
- Recovery must not silently reopen or delete the original write-off.
- Partial recovery must reduce only the unrecovered economic loss.
- Duplicate loss recognition for the same event is prohibited.
- Material losses and write-offs must be included in reconciliation, approval, and period-close review.
