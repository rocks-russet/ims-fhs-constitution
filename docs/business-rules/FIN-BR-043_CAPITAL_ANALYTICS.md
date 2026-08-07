# FIN-BR-043 — Capital Analytics

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Tampilkan contribution, return, conversion, attributed capital.
2. Contributor attribution tetap terlihat.
3. Capital tidak boleh diklasifikasikan sebagai profit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
