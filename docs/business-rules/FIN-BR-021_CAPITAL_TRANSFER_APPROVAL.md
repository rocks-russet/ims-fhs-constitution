# FIN-BR-021 — FHS Capital Transfer Approval

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Transfer antar bucket FHS mengikuti staged amount approval model.
2. Requester tidak boleh dihitung sebagai approver lain saat threshold membutuhkan pihak lain.
3. AK dapat override hanya sesuai kebijakan SUPER_ADMIN yang disetujui.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
