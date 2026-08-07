# FIN-BR-037 — Ownership Financial Snapshot

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Finance memakai ownership snapshot dari Inventory/Purchase, bukan current rule.
2. capitalDistribution dan profitDistribution dipakai terpisah.
3. Item override snapshot mengalahkan perubahan global setelah commit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
