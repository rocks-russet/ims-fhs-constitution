# FIN-BR-044 — Financial Fraud Prevention and Suspicious Activity Control

Purpose: Detect, prevent, contain, and investigate financial activity that may indicate fraud, misuse, collusion, unauthorized benefit, or manipulation of records.

Rules:
- Financial controls must identify patterns inconsistent with authorized business activity, historical behavior, source evidence, or expected transaction flow.
- Suspicious indicators include at minimum:
  - duplicate or near-duplicate payments;
  - repeated reversals or corrections;
  - unusual transaction timing or frequency;
  - threshold avoidance;
  - unexplained wallet transfers;
  - beneficiary or bank-detail changes shortly before payment;
  - unsupported refunds, reimbursements, discounts, or write-offs;
  - circular movement of funds;
  - mismatches between order, inventory, ledger, and external settlement records;
  - activity performed through dormant, shared, or unauthorized accounts.
- Detection of an indicator does not by itself establish fraud, but it must create a reviewable alert or exception when the configured risk criteria are met.
- Alerts must record the triggering event, detection rule, affected amount, actors, related records, timestamp, risk level, and current disposition.
- High-risk activity may be suspended before posting, payment, withdrawal, or settlement when delay is necessary to protect funds or evidence.
- A suspended transaction must not be released by the same actor who initiated it unless explicitly permitted under an emergency procedure with independent review.
- Investigation access must be restricted to authorized reviewers and must preserve confidentiality, evidence integrity, and need-to-know principles.
- Investigation records must distinguish allegation, indicator, evidence, analysis, finding, and final disposition.
- Relevant system logs, source documents, communications, approvals, external statements, and record versions must be preserved against alteration or deletion while a review is open.
- Confirmed misuse must be corrected through traceable reversal, recovery, restitution, write-off, access revocation, or other approved action; original records must remain auditable.
- Fraud-related losses and recoveries must be posted separately and must not be hidden through ordinary expense, discount, inventory adjustment, or profit-distribution entries.
- Material incidents must be escalated to the designated financial authority and may require suspension of affected accounts, wallets, counterparties, or workflows.
- Detection rules, alert thresholds, investigation outcomes, and control failures must be reviewed periodically to improve prevention without suppressing legitimate activity.
- No actor may retaliate against a person who raises a good-faith financial-control concern through an authorized channel.
