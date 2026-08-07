# FIN-BR-017 — Capital Contribution

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Setoran modal dicatat sebagai Capital document.
2. Kontributor, amount, tujuan, tanggal, actor, dan bukti disimpan.
3. Capital contribution bukan profit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
