# FIN-BR-046 — Wallet Integrity

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Recomputed Wallet History harus sama dengan current balance.
2. Posting wajib punya walletCode, eventId, referenceType, referenceId.
3. Duplicate posting dan invalid balanceAfter chain adalah finding.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
