# FIN-BR-018 — Capital Attribution

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Kontributor modal dipisahkan dari operator yang menginput.
2. Combined deposit harus dipecah per contributor.
3. Total attribution wajib sama dengan jumlah setoran.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
