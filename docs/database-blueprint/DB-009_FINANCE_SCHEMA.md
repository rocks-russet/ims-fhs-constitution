# DB-009 — Finance Schema

## `wallets`
- id UUID PK
- wallet_code VARCHAR UNIQUE NOT NULL
- display_name
- status
- current_balance NUMERIC NOT NULL

`current_balance` is a reconciled cached aggregate; Wallet Postings remain authoritative movement history.

## `financial_events`
- id UUID PK
- event_number UNIQUE
- event_type
- reference_type
- reference_id
- status
- idempotency_key UNIQUE
- occurred_at
- created_at

## `wallet_postings`
- id UUID PK
- posting_number UNIQUE
- financial_event_id FK
- wallet_id FK
- signed_amount NUMERIC NOT NULL
- direction
- reference_type
- reference_id
- description
- balance_after NUMERIC NOT NULL
- posted_at

Append-only. Reversal creates another posting/event.

## `profit_snapshots`
- id UUID PK
- order_id FK UNIQUE
- snapshot_version
- input_snapshot JSONB
- item_profit_breakdown JSONB
- order_profit NUMERIC
- distribution_snapshot JSONB
- finalized_at

## `withdrawals`
- id UUID PK
- withdrawal_number UNIQUE
- requester_user_id FK
- source_wallet_id FK
- amount NUMERIC CHECK >0
- reason
- status
- approved_by_user_id FK nullable
- approved_at nullable
- transfer_proof_file_id FK nullable
- completed_at nullable

AK final approval is enforced by Finance business logic/permission rules.

## `capital_documents`
- id UUID PK
- capital_number UNIQUE
- type
- amount
- attribution JSONB
- source_wallet/destination wallet references as applicable
- status
- approval_id nullable
- completed_at

## `internal_transfers`
- id UUID PK
- transfer_number UNIQUE
- source_wallet_id FK
- destination_wallet_id FK
- amount NUMERIC CHECK >0
- requester_user_id
- approval_id nullable
- status
- completed_at

CHECK source_wallet_id <> destination_wallet_id.

## `reimbursements`
- id UUID PK
- reimbursement_number UNIQUE
- type
- beneficiary reference
- order_id nullable
- shipment_id nullable
- amount NUMERIC
- evidence_file_id nullable
- status
- completed_at
