# FIN-BR-033 — Inter-Wallet Loan and Temporary Funding

Purpose: Govern temporary financing between wallets without misclassifying it as capital, profit, expense, revenue, or permanent ownership transfer.

Rules:
- Temporary funding between wallets must be classified as a loan, advance, or explicitly approved temporary obligation rather than an ordinary wallet transfer when repayment is expected.
- Every inter-wallet loan or temporary funding record must identify:
  - funding ID;
  - lender Wallet Code;
  - borrower Wallet Code;
  - principal amount and currency;
  - purpose;
  - funding date;
  - repayment terms;
  - interest or fee treatment, including zero-interest terms;
  - approver;
  - status.
- Supported statuses must distinguish at minimum `PROPOSED`, `APPROVED`, `FUNDED`, `PARTIALLY_REPAID`, `REPAID`, `DEFAULTED`, `CANCELLED`, and `DISPUTED`.
- Funding must create equal and linked lender-receivable and borrower-obligation effects without creating profit or loss at inception.
- Repayment must reduce only the outstanding principal and separately classify any approved interest, fee, penalty, or adjustment.
- Repayment must not be represented as a profit distribution, capital contribution, reimbursement, or withdrawal.
- A loan may not be converted into capital, expense, loss, or forgiven balance without an explicit approved conversion or write-off event.
- Partial repayment must preserve principal repaid, remaining principal, date, source, and receiving wallet.
- Extensions, amended terms, or additional funding must be versioned and preserve the original agreement.
- Circular or chained funding intended to conceal a deficit, withdrawal, related-party benefit, or reconciliation exception is prohibited.
- Outstanding inter-wallet financing must be included in liquidity, obligation, and related-party reporting where applicable.
- Corrections must use linked reversal or adjustment records and must not overwrite the original funding history.
