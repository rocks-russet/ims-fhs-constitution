# FIN-BR-002 — Wallet Balance Derivation

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Saldo saat ini diturunkan dari Wallet History valid.
2. Setiap posting menyimpan balanceAfter.
3. Selisih saldo menjadi integrity finding, bukan overwrite manual.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
