# FIN-BR-036 — Financial Snapshot

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Financial outcome final menyimpan snapshot input yang menentukan hasil.
2. Snapshot tidak berubah karena konfigurasi masa depan.
3. Correction menghasilkan event/version baru.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
