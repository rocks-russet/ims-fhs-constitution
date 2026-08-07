# FIN-BR-005 — Wallet History

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Wallet History adalah timeline debit/kredit per wallet.
2. Tampilkan amount, type, reference, timestamp, balanceAfter.
3. Wallet History berbeda dari Withdrawal History.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
