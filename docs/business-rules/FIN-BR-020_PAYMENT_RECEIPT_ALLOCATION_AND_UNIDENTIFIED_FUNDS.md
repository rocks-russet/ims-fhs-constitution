# FIN-BR-020 — Payment Receipt Allocation and Unidentified Funds

Purpose: Govern recognition, matching, and allocation of incoming payments before they affect orders, obligations, or wallet rights.

Rules:
- Every incoming payment must be recorded with its original external evidence before allocation.
- A payment receipt must identify:
  - receipt ID;
  - Settlement Account ID;
  - amount and currency;
  - payer information when available;
  - external transaction reference;
  - receipt timestamp;
  - recorded actor;
  - allocation status.
- Supported allocation statuses must distinguish at minimum `UNIDENTIFIED`, `PARTIALLY_ALLOCATED`, `ALLOCATED`, `REVERSED`, and `REJECTED`.
- A receipt may be allocated only to authoritative sources such as an order, receivable, capital contribution, reimbursement recovery, or another approved financial event.
- Allocation must not exceed the unallocated amount of the receipt.
- One receipt may be allocated to multiple valid sources, and one source may be settled by multiple receipts.
- Payment allocation must preserve the exact amount assigned to each source and the remaining unallocated amount.
- Unidentified funds must remain in a suspense state and must not be recognized as revenue, profit, capital, or wallet ownership.
- Matching based only on equal amount is insufficient when multiple plausible sources exist.
- Manual allocation requires actor identity, reason, and supporting evidence.
- Reallocation after an effective posting must use linked reversal or compensating records; prior allocation history must remain visible.
- Duplicate recording or duplicate allocation of the same external payment is prohibited.
- Refund or return of unidentified funds must reference the original receipt and follow the applicable approval and ledger rules.
