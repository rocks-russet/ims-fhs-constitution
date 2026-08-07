# FIN-BR-031 — Reimbursement History

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. History terpisah dari Wallet History.
2. Dapat difilter berdasarkan handler, type, date, status, Order.
3. Completed totals harus reconcile ke wallet postings.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
