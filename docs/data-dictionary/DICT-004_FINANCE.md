# DICT-004 — Finance Data Dictionary

## Wallet
- walletCode
- displayName
- status
- currentBalance (derived/reconciled)

Baseline: AK, AH, RCS, FHS.

## Financial Event

| Field | Meaning |
|---|---|
| eventId | Stable financial event |
| eventType | Profit, capital, withdrawal, reimbursement, transfer, correction |
| referenceType | ORDER / WITHDRAWAL / CAPITAL / TRANSFER / REIMBURSEMENT / ADJUSTMENT |
| referenceId | Source business document |
| status | PENDING / PROCESSING / COMPLETED / FAILED / REVERSED |
| occurredAt | Economic/system time |
| idempotencyKey | Duplicate-protection identity |

## Wallet Posting
- postingId
- eventId
- walletCode
- signedAmount
- direction
- referenceType
- referenceId
- description
- balanceAfter
- postedAt

No wallet balance mutation exists without a posting.

## Profit Snapshot
- profitSnapshotId
- orderId
- item profit breakdown
- finalCost basis
- realized sale allocation
- marketplace fee
- shipping surplus/deficit
- additional approved costs/charges
- orderProfit
- profitDistribution
- finalizedAt

## Withdrawal
- withdrawalId
- requesterUserId
- sourceWalletCode
- amount
- reason
- status
- approvedByUserId (AK final approver baseline)
- approvedAt
- transferProofFileId
- completedAt
- linkedPostingId

Withdrawal History and Wallet History are separate but bidirectionally linked.

## Capital
- capitalId
- type
- contributor
- beneficiary/destination
- amount
- attribution breakdown
- status
- approval references
- completedAt

## Transfer
- transferId
- sourceWalletCode
- destinationWalletCode
- amount
- requester
- approval references
- status
- debitPostingId
- creditPostingId

## Reimbursement
- reimbursementId
- type
- handler/beneficiary
- orderId/shipmentId where applicable
- amount
- evidence
- status
- linkedPostingId
