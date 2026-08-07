# FIN-BR-029 — Shipping Reimbursement

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Actual expedition cost menghasilkan shipping reimbursement untuk handler yang relevan.
2. Reimbursement terpisah dari shipping surplus/deficit.
3. Order ID dan Shipment ID wajib direferensikan.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
