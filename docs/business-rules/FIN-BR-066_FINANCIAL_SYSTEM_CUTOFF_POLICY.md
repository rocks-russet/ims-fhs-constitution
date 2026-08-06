# FIN-BR-066 — Financial System Cutoff Policy

Purpose: Define how transaction timestamps determine the financial period and operational cutoff.

Rules:
- The authoritative timezone is Asia/Jakarta unless a specific external settlement requires another documented basis.
- Cutoff uses server-recorded event time, not client display time.
- Each event type defines the timestamp that controls recognition: purchase commitment, payment confirmation, shipment completion, order completion, refund approval, or settlement posting.
- Events received after cutoff are recognized in the next open period unless an approved late-entry rule applies.
- Backdated entries require authority and explicit original-event evidence.
- Daylight-saving assumptions must not be introduced into Asia/Jakarta calculations.
- Batch jobs record their data cutoff independently from execution completion time.
- Cutoff rules must be consistent across reports and reconciliation.

Invariants:
- Users cannot manipulate period assignment through local device time.
- Recognition timestamp is preserved after posting.
- Late processing does not silently change the original economic-event timestamp.

Related:
- FIN-BR-012
- FIN-BR-029
- FIN-BR-049
