# FIN-BR-034 — Financial Reference Engine

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setiap Wallet Posting dan Financial Event final wajib punya referenceType + referenceId.
2. Core reference: ORDER, WITHDRAWAL, CAPITAL, TRANSFER, REIMBURSEMENT, ADJUSTMENT.
3. Reference identity immutable setelah posting.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
