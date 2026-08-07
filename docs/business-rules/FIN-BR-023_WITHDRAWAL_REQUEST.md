# FIN-BR-023 — Withdrawal Request

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Withdrawal dimulai sebagai dokumen dengan Withdrawal ID.
2. Simpan requester, wallet, amount, reason, requestedAt.
3. Request belum mengurangi saldo wallet.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
