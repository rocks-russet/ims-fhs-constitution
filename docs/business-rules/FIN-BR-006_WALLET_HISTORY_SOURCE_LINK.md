# FIN-BR-006 — Wallet History Source Linking

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setiap baris Wallet History wajib punya referenceType + referenceId.
2. Reference harus dapat drill-down ke dokumen sumber.
3. Broken reference adalah integrity error.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
