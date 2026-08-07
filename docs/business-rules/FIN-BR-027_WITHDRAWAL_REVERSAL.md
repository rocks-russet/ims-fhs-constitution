# FIN-BR-027 — Withdrawal Reversal and Correction

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Completed Withdrawal tidak dihapus.
2. Kesalahan diperbaiki lewat reversal/correction yang mereferensikan Withdrawal dan posting asli.
3. Hubungan reversal terlihat di Withdrawal History.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
