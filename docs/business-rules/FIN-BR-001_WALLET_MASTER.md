# FIN-BR-001 — Wallet Master

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Wallet AK, AH, RCS, dan FHS menggunakan walletCode stabil.
2. Saldo wallet tidak boleh diedit langsung.
3. Wallet tetap dapat dilacak secara historis walau statusnya berubah.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
