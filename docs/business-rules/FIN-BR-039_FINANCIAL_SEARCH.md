# FIN-BR-039 — Financial History Search

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Search mendukung postingId, eventId, Order ID, Withdrawal ID, Capital ID, Transfer ID, Reimbursement ID, walletCode.
2. Search read-only dan paginated.
3. Archived records tetap searchable sesuai authorization.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
