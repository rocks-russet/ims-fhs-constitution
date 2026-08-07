# FIN-BR-048 — Profit Integrity

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setiap COMPLETED sale yang menghasilkan profit wajib punya satu finalized Profit Snapshot.
2. Profit distribution dan wallet postings harus reconcile.
3. Missing ownership snapshot adalah blocking finding.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
