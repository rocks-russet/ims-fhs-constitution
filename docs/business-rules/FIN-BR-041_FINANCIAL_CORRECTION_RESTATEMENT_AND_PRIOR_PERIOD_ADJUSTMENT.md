# FIN-BR-041 — Financial Correction, Restatement, and Prior-Period Adjustment

Purpose: Correct financial errors without destroying original records, concealing impact, or misrepresenting the period in which the correction belongs.

Rules:
- A financial correction is required when a posted or reported record contains an error in amount, wallet, bucket, currency, classification, period, source linkage, ownership allocation, approval, or economic interpretation.
- Posted financial records must not be edited in place to conceal or erase an error.
- Corrections must use a linked reversal, adjustment, reclassification, recovery, or migration event appropriate to the error.
- Every correction must identify:
  - correction ID;
  - affected original records;
  - error description and root cause;
  - discovery date;
  - affected financial period;
  - correction method;
  - amount and currency;
  - affected wallets, buckets, accounts, orders, or inventory;
  - actor;
  - approver when required;
  - supporting evidence.
- A correction must distinguish between an estimate change, a new economic event, and an error in a prior record.
- Current-period errors must be corrected in the current open period unless another treatment is explicitly required.
- Errors affecting a closed period must be classified as prior-period adjustments when material under the active policy.
- A closed period must not be silently reopened or altered; any reopening must be authorized and preserve the prior close state and reports.
- Restatement must preserve both the originally issued result and the restated result with version, reason, approval, and effective time.
- Corrections must propagate consistently to dependent balances, settlements, inventory cost, profit distribution, receivables, payables, taxes, and reports.
- A correction affecting distributed or withdrawn rights must create the appropriate receivable, payable, recovery, offset, or approved loss treatment rather than forcing an unavailable wallet balance.
- Materiality must be assessed by amount, cumulative effect, affected parties, authorization risk, reporting impact, and potential concealment.
- Multiple small corrections arising from the same cause must be evaluated collectively and must not be fragmented to avoid escalation or approval.
- A correction must not be used to revise unfavorable but valid business outcomes.
- Root causes indicating control failure, repeated error, unauthorized activity, or data corruption must be linked to an incident and preventive action.
- Correction and restatement history must remain available in audit exports and period-close evidence.
