# FIN-BR-013 — Shipping Surplus and Deficit

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Shipping result = Buyer Shipping Charged - Actual Shipping Cost.
2. Positif = surplus, negatif = deficit.
3. Nilai masuk ke Order Profit sebelum distribusi.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
