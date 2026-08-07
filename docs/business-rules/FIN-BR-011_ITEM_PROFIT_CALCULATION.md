# FIN-BR-011 — Item Profit Calculation

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setiap inventory unit memiliki basis profit yang dapat direproduksi.
2. Final Cost berasal dari snapshot Purchase/Inventory.
3. Item profit boleh negatif dan harus reconcile ke Order Profit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
