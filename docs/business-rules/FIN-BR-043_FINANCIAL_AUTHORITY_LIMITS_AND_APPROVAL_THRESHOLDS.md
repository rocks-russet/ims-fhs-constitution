# FIN-BR-043 — Financial Authority Limits and Approval Thresholds

Purpose: Ensure financial commitments, postings, payments, withdrawals, corrections, and write-offs are authorized according to defined responsibility and risk.

Rules:
- Every financial action requiring authorization must be evaluated against an active authority matrix before execution.
- The authority matrix must define at minimum:
  - action type;
  - monetary threshold;
  - currency or base-currency equivalent;
  - permitted role or named authority;
  - required number of approvers;
  - self-approval restrictions;
  - effective period;
  - escalation path.
- Authority must be assigned explicitly and must not be inferred solely from system access, operational ownership, wallet ownership, or custody of funds.
- A transaction must not be split, sequenced, netted, or otherwise structured to avoid an approval threshold.
- Related transactions that form one economic decision must be aggregated when determining the applicable threshold.
- Approval limits must be evaluated using the gross financial exposure before offsets, expected reimbursements, recoveries, or future receipts unless a rule explicitly requires another basis.
- Where a transaction affects multiple wallets, owners, counterparties, or accounting periods, the highest applicable control requirement must prevail.
- The initiator must not approve the same transaction where segregation of duties is required.
- Self-benefiting actions, related-party transactions, manual balance adjustments, reversals, write-offs, emergency payments, and changes to ownership or distribution rights require enhanced approval regardless of amount.
- Approval must be recorded with:
  - approval ID;
  - transaction or request reference;
  - action type;
  - evaluated amount and currency;
  - threshold rule applied;
  - approver identity and role;
  - decision;
  - timestamp;
  - conditions or comments;
  - evidence reference when required.
- An approval is valid only for the transaction state, amount, beneficiary, source wallet, purpose, and supporting evidence presented at the time of approval.
- A material change after approval requires re-evaluation and, when applicable, new approval.
- Expired, revoked, superseded, or conditionally unmet approvals must not authorize execution.
- Emergency authority must be time-limited, documented, and followed by retrospective review within the defined control period.
- Approval thresholds and authority assignments must be versioned, effective-dated, periodically reviewed, and auditable.
