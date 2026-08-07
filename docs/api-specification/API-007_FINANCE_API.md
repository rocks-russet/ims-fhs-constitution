# API-007 — Finance API

## Wallet
### GET `/api/v1/finance/wallets`
Permission: `FINANCE_VIEW`

### GET `/api/v1/finance/wallets/{walletCode}`
Returns balance + summary.

### GET `/api/v1/finance/wallets/{walletCode}/history`
Returns Wallet Financial Timeline with source drill-down references.

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

## Profit
Profit is not manually posted from browser.
Profit Engine consumes finalized Sales events and Finance exposes read/detail endpoints for snapshots and postings.

## Financial History
### GET `/api/v1/finance/history`
Search/filter across event/posting references.
