# FIN-BR-059 — Financial Report Versioning

Purpose: Preserve reproducibility and lineage when financial reports are regenerated or corrected.

Rules:
- Every generated report receives a report ID, version, period, generation timestamp, parameters, data cutoff, and generator version.
- Regeneration with identical inputs may produce a new execution artifact but must retain lineage to the original report.
- A corrected report must increment version and state the reason for supersession.
- Superseded reports remain retained and visibly marked.
- Report totals must be traceable to ledger and wallet references.
- Export format changes must not alter financial meaning.
- Final period-close reports require approval status.
- Reports used externally must identify whether they are draft, final, corrected, or superseded.

Invariants:
- A published report is never silently replaced.
- Report parameters and data cutoff are immutable.
- Report version history must remain reviewable.

Related:
- FIN-BR-012
- FIN-BR-018
- FIN-BR-041
