# FIN-BR-007 — Financial Event

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Semua efek uang berasal dari Financial Event.
2. Event meliputi sale completion, profit, capital, withdrawal, reimbursement, transfer, correction.
3. Satu event dapat menghasilkan beberapa Wallet Posting.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
