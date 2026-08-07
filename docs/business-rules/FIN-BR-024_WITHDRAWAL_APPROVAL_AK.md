# FIN-BR-024 — Withdrawal Approval by AK

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. AK adalah final approver Withdrawal IMS FHS v1.
2. Tanpa approval AK, Withdrawal tidak dapat Completed.
3. Reject tidak mengubah saldo.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
