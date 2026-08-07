# FIN-BR-014 — Profit Distribution

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Profit dibagi memakai profitDistribution snapshot per inventory.
2. Multi-owner order dihitung item-by-item lalu diagregasi.
3. Negative profit mengikuti snapshot yang sama.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
