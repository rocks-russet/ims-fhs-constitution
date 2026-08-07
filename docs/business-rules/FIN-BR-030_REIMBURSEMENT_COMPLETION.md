# FIN-BR-030 — Reimbursement Completion

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Completion membuat posting wallet yang sesuai.
2. Failed payment tidak boleh menjadi final posting.
3. Completed reimbursement link dua arah dengan Wallet History.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
