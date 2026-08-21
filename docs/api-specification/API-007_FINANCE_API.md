# API-007 — Finance API

## Wallet
### GET `/api/v1/finance/wallets`
Permission: `FINANCE_VIEW`

### GET `/api/v1/finance/wallets/{walletCode}`
Returns balance + summary.

### GET `/api/v1/finance/wallets/{walletCode}/history`
Returns Wallet Financial Timeline with source drill-down references.

Wallet represents economic rights/balances, not a physical bank-account balance.
No generic "edit wallet balance" endpoint exists.

## Withdrawal
### POST `/api/v1/finance/withdrawals`
Permission: `WITHDRAWAL_REQUEST`

### GET `/api/v1/finance/withdrawals`
### GET `/api/v1/finance/withdrawals/{withdrawalNumber}`

### POST `/api/v1/finance/withdrawals/{withdrawalNumber}/approve`
Permission: `WITHDRAWAL_APPROVE`
Finance rule requires AK final approval.

### POST `/api/v1/finance/withdrawals/{withdrawalNumber}/reject`

### POST `/api/v1/finance/withdrawals/{withdrawalNumber}/complete`
Idempotency-Key: REQUIRED
Atomic wallet effect.

Completion must persist governed Settlement Funding Allocation. The domain model must support one or multiple economic Wallet/Fund sources even if the first UI exposes only a single source.

A recipient may participate as a funding source. The recipient-owned allocation is contribution/netting and reduces the physical transfer amount while remaining part of the economic settlement.

Physical payment/custody account is separate metadata from economic funding source.

## Capital
- `POST /api/v1/finance/capital`
- `GET /api/v1/finance/capital`
- `GET /api/v1/finance/capital/{capitalNumber}`
- governed approve/complete actions

## Internal Transfer
### POST `/api/v1/finance/transfers`
### POST `/api/v1/finance/transfers/{transferNumber}/complete`
Atomic debit + credit.

## Reimbursement
- create
- approve/validate where required
- complete
- history/detail

Personal funding of an FHS expense, including Packing Supply procurement, creates a reimbursement obligation to the funding user. Required approval occurs before the reimbursement is recognized as an available Wallet entitlement.

Reimbursement approval and physical settlement are distinct events. Recognition of a Wallet entitlement does not mean the user has already received a bank transfer.

Reimbursement completion must support governed Settlement Funding Allocation, including split funding and recipient self-contribution/netting.

## Settlement Allocation Contract

Finance settlement-capable resources must be able to preserve:
- economic settlement amount;
- recipient;
- one or more funding allocations `{sourceWalletOrFund, amount}`;
- recipient self-contribution/netting amount where applicable;
- actual physical transfer amount;
- physical payment/custody account or channel where recorded;
- approval, actor, timestamps, idempotency, and source references.

Allocation totals must reconcile to the economic settlement amount under the system rounding policy.

## Profit
Profit is not manually posted from browser.
Profit Engine consumes finalized Sales events and Finance exposes read/detail endpoints for snapshots and postings.

## Financial History
### GET `/api/v1/finance/history`
Search/filter across event/posting references, including reimbursement origin, settlement funding allocation, contribution/netting, and payment/custody references.
