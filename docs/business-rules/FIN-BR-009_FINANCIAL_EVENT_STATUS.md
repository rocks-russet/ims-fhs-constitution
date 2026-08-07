# FIN-BR-009 — Financial Event Status

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Status: PENDING, PROCESSING, COMPLETED, FAILED, REVERSED sesuai konteks.
2. COMPLETED hanya jika seluruh posting wajib berhasil.
3. Status event harus konsisten dengan dokumen sumber.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
