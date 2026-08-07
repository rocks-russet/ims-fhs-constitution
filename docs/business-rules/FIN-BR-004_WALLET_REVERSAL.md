# FIN-BR-004 — Wallet Posting Reversal

## Feature Origin

Finance v1 Feature Map — aligned to IMS FHS operating workflow.

## Rules

1. Posting salah dikoreksi dengan reversal, bukan delete.
2. Reversal wajib menunjuk posting asli.
3. Full/partial reversal harus terdokumentasi dan tidak boleh duplikat.

## Invariants

- Tidak ada perubahan saldo wallet tanpa Financial Event dan Wallet Posting yang valid.
- Efek finansial final harus dapat ditelusuri ke dokumen sumber.
- Histori finansial tidak boleh dihapus atau ditimpa secara diam-diam.
