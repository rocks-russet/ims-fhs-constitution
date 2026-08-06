# FIN-BR-009 — Operating Expense and Reimbursement

Purpose: Govern business expenses, out-of-pocket payments, and reimbursement without distorting sales settlement or wallet ownership.

Rules:
- An operating expense is recognized only when it is incurred for an approved IMS FHS business purpose and supported by sufficient evidence.
- Every expense record must identify:
  - expense ID;
  - expense category;
  - amount and currency;
  - expense date;
  - beneficiary or vendor;
  - business purpose;
  - payer;
  - funding Wallet Code and bucket;
  - payment reference or evidence;
  - actor and approval evidence when required.
- An expense paid directly from IMS FHS-controlled funds creates a negative ledger entry against the designated wallet and bucket.
- A valid business expense paid personally by a handler or owner creates a reimbursement obligation and must not be treated as that person's capital contribution unless explicitly approved as such.
- Reimbursement becomes effective only when approved and executed, and must reference the originating expense.
- The same expense must not be reimbursed or posted more than once.
- Shipping costs governed by order settlement must follow the shipping reimbursement rules and must not be duplicated as a general operating expense.
- Personal expenses and unsupported expenses must not be charged to IMS FHS wallets.
- Refunds, rebates, or vendor credits related to a previously posted expense must reference the original expense and reduce the corresponding expense burden through a new ledger entry.
- Expense and reimbursement corrections must use reversal or compensating entries; posted history must not be edited or deleted.
