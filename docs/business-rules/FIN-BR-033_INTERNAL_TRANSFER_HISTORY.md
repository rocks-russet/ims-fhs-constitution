# FIN-BR-033 — Internal Transfer History

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. History menyimpan source, destination, amount, status, requester, approver, completedAt.
2. Completed transfer link ke kedua wallet postings.
3. Failed/cancelled transfer tetap tercatat tanpa final imbalance.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
