# FIN-BR-038 — Settlement Reconciliation and Cash Position Control

Purpose: Ensure internal financial records agree with externally held cash and that differences are detected, explained, and resolved without altering historical truth.

Rules:
- Every active Settlement Account and external cash-custody location must be reconciled against its corresponding IMS FHS ledger position.
- Reconciliation must compare at minimum:
  - opening reconciled balance;
  - internal postings;
  - external receipts and disbursements;
  - pending or in-transit items;
  - fees, interest, taxes, reversals, and adjustments;
  - closing internal balance;
  - closing external balance;
  - unexplained difference.
- Each reconciliation must identify the account, currency, period, evidence source, preparer, reviewer when required, completion time, and status.
- Supported reconciliation statuses must distinguish at minimum `OPEN`, `IN_PROGRESS`, `MATCHED`, `MATCHED_WITH_TIMING_DIFFERENCES`, `EXCEPTION`, `APPROVED`, and `REOPENED`.
- Timing differences must be supported by identifiable transactions and expected clearing dates.
- An unexplained difference must not be forced to zero through an undocumented balance edit, fabricated posting, or arbitrary reclassification.
- External statements or provider records must be preserved as reconciliation evidence.
- Reconciliation adjustments require an authoritative reason, supporting evidence, and approval appropriate to their amount and risk.
- The actor who controls or executes external cash movement must not be the sole approver of material reconciliation adjustments when segregation of duties is required.
- Stale pending items must be escalated according to defined aging thresholds.
- Reconciliation must distinguish available cash from restricted, reserved, pending, disputed, or otherwise unavailable funds.
- The consolidated cash position must not double count transfers in transit between IMS FHS-controlled accounts.
- Negative, abnormal, or unexpectedly changed cash positions must trigger review before discretionary withdrawal or spending continues.
- A previously approved reconciliation may be reopened only with preserved history, reason, actor, timestamp, and authorization.
- Period close must not be finalized while material Settlement Account differences remain unresolved unless an authorized exception explicitly records the exposure.
- Reconciliation records must remain traceable to every resulting adjustment, recovery, write-off, incident, or control action.
