# FIN-BR-052 — Finance v1 Scope and Boundary

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Finance v1 mencakup Wallet, Financial Event, Profit, Capital, Withdrawal, Reimbursement, Internal Transfer, History, Snapshot, Analytics, Integrity, Reference Engine.
2. Sales memiliki order/payment lifecycle; Finance mengonsumsi finalized Sales events.
3. Purchase/Inventory memiliki Final Cost dan ownership snapshot; Finance mengonsumsinya.
4. Rule enterprise generik yang tidak berasal dari feature FHS v1 tidak termasuk baseline ini.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
