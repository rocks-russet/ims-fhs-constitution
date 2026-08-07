# FIN-BR-010 — Profit Engine

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Profit dihitung server-side dari Sales + Final Cost Inventory.
2. Profit baru direalisasikan saat Order COMPLETED.
3. Marketplace fee, shipping result, dan biaya/charge yang disetujui ikut formula sesuai kebijakan aktif.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
