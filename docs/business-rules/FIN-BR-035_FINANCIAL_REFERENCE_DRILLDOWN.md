# FIN-BR-035 — Financial Reference Drill-Down

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Wallet History harus dapat membuka dokumen sumber.
2. ORDER -> Sales Order, WITHDRAWAL -> Withdrawal Detail, CAPITAL -> Capital Detail, TRANSFER -> Transfer Detail, REIMBURSEMENT -> Reimbursement Detail.
3. Archived source tetap resolvable read-only.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
