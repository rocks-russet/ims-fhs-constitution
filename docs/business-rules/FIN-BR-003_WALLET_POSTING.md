# FIN-BR-003 — Wallet Posting

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setiap perubahan saldo harus berupa Wallet Posting.
2. Posting menyimpan eventId, referenceType, referenceId, amount, walletCode, timestamp.
3. Posting bersifat append-only dan idempotent.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
