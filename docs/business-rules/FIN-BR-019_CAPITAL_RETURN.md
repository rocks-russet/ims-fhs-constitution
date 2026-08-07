# FIN-BR-019 — Capital Return

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Capital Return terpisah dari Profit Distribution.
2. Return memakai basis capitalDistribution snapshot yang berlaku.
3. Posting capital return harus dapat dibedakan di Wallet History.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
