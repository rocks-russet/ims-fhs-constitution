# FIN-BR-049 — Withdrawal Integrity

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Completed Withdrawal wajib punya approval AK dan wallet debit posting yang cocok.
2. Rejected/cancelled Withdrawal tidak boleh punya final debit.
3. Duplicate completion dilarang.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
