# FIN-BR-025 — Withdrawal Completion

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Completion memerlukan request valid yang sudah approved.
2. Completion membuat wallet debit posting tepat satu kali.
3. Transfer proof dapat direferensikan dan retry harus idempotent.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
