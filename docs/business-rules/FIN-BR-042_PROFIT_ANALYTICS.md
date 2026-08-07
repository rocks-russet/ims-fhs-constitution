# FIN-BR-042 — Profit Analytics

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Data berasal dari finalized Profit Snapshot pada COMPLETED order.
2. Tampilkan realized profit, negative profit, beneficiary/source breakdown, trend.
3. Uncompleted orders tidak dihitung sebagai realized profit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
