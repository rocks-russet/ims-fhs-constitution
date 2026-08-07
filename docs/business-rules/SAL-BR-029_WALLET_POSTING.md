# SAL-BR-029 — Wallet Posting from Completed Sales

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Completion posts realized capital/profit effects to the appropriate wallets under Finance rules.
2. Wallet postings reference Order ID, Inventory ID or allocation source, owner/beneficiary, amount, posting type, and timestamp.
3. Capital return and profit distribution remain distinguishable.
4. Duplicate completion cannot duplicate wallet postings.
5. Reversal/refund uses governed Finance reversal/adjustment entries.
6. Sales does not directly mutate wallet balance without wallet-history posting.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
