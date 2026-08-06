# FIN-BR-036 — Financial Integrity Monitoring and Incident Escalation

Purpose: Detect, contain, investigate, and resolve financial integrity failures before they cause persistent balance, settlement, ownership, reporting, or audit corruption.

Rules:
- IMS FHS must monitor financial records for conditions that may indicate corruption, omission, duplication, unauthorized activity, inconsistent classification, broken linkage, or unresolved financial exposure.
- Monitoring must include, where applicable:
  - wallet balance and ledger reconciliation differences;
  - duplicate or missing postings;
  - orphaned ledger entries;
  - invalid wallet or bucket codes;
  - unauthorized negative balances;
  - source events without financial effects when effects are required;
  - financial effects without authoritative source events;
  - incomplete reversals;
  - unmatched settlement receipts;
  - stale suspense items;
  - overdue receivables, payables, advances, loans, or commitments;
  - broken ownership or profit-distribution references;
  - unexplained changes to evidence, approvals, or reference data.
- Every detected integrity issue must receive an incident record containing:
  - incident ID;
  - detection source;
  - detection time;
  - affected records and wallets;
  - severity;
  - suspected cause;
  - immediate containment action;
  - assigned owner;
  - status;
  - resolution evidence.
- Supported incident statuses must distinguish at minimum `OPEN`, `TRIAGED`, `CONTAINED`, `INVESTIGATING`, `REMEDIATING`, `RESOLVED`, and `CLOSED`.
- Severity must reflect potential financial impact, scope, reversibility, authorization risk, data integrity risk, and operational urgency.
- High-severity incidents must suspend affected posting, withdrawal, settlement, close, or export operations when continued processing could increase harm.
- Containment must preserve evidence and must not delete, overwrite, or conceal the records involved.
- Financial correction must use approved reversal, adjustment, reclassification, recovery, or migration mechanisms and must remain linked to the incident.
- Resolution must identify root cause, affected period, confirmed financial impact, corrective postings, control failure, responsible approver, and preventive action.
- An incident must not be closed solely because balances currently reconcile if the root cause and historical impact remain unresolved.
- Repeated incidents of the same class must trigger control review and may require stronger approval, validation, monitoring, or access restrictions.
- Suspected fraud, deliberate concealment, unauthorized withdrawal, evidence tampering, or conflict-of-interest abuse must be escalated immediately to the highest unaffected authority.
- Incident reporting must distinguish confirmed loss, temporary discrepancy, unresolved exposure, and control weakness.
- Closed incidents and their evidence must remain retained for audit, trend analysis, migration, and future control design.
