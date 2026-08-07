# FIN-BR-022 — Capital History

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Capital History menyimpan contribution, return, conversion, transfer modal.
2. Dokumen capital berbeda dari Wallet History tetapi saling link.
3. Completed record immutable kecuali correction event.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
