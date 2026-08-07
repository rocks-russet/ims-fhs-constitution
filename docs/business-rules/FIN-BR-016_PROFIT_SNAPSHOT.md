# FIN-BR-016 — Profit Snapshot

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Saat completion simpan input/output profit yang diperlukan untuk reproduksi.
2. Perubahan fee profile atau ownership rule di masa depan tidak mengubah histori.
3. Correction membuat event/version baru.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
