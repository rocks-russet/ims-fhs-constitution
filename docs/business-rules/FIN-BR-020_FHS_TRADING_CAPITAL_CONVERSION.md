# FIN-BR-020 — FHS Trading Capital Conversion

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Profit FHS dapat dipindah ke Trading Capital melalui event terkontrol.
2. Inventory yang dibeli dari Trading Capital memakai FHS sebagai capital beneficiary sesuai rule.
3. Conversion harus traceable ke sumber profit.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
