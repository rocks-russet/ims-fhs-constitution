# FIN-BR-028 — Reimbursement Record

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Reimbursement adalah dokumen kewajiban ke handler/operator.
2. Simpan claimant, amount, type, evidence, source reference, status.
3. Membuat reimbursement belum mengubah wallet.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
