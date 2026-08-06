# FIN-BR-069 — Financial Reversal Control

Purpose: Standardize when and how a posted financial event may be reversed.

Rules:
- Reversal is permitted only for erroneous, failed, cancelled, duplicated, or invalidated events.
- A reversal references exactly one original event and carries a unique reversal ID.
- Reversal postings mirror the original financial dimensions with opposite effect unless a documented partial reversal is approved.
- Original records remain visible and marked reversed or partially reversed.
- A reversed event cannot be reversed again; reinstatement requires a new valid posting.
- Reversal authority follows the approval matrix.
- Cross-module effects on wallet, ledger, obligation, inventory, and report status must remain synchronized.
- Reversal reason and evidence are mandatory.

Invariants:
- Net effect of a full reversal is zero relative to the original event.
- Reversal never deletes history.
- Duplicate reversal is blocked idempotently.

Related:
- FIN-BR-006
- FIN-BR-037
- FIN-BR-041
