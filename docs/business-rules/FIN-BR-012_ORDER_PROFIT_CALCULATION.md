# FIN-BR-012 — Order Profit Calculation

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Order Profit = agregasi item profit + shipping surplus/deficit + adjustment yang disetujui.
2. Buyer shipping charged dan actual shipping cost disimpan terpisah.
3. Snapshot profit dibuat saat completion.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
