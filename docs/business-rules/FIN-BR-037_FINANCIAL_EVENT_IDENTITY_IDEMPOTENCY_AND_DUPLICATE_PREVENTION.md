# FIN-BR-037 — Financial Event Identity, Idempotency, and Duplicate Prevention

Purpose: Ensure one authoritative business event produces one complete and traceable set of financial effects, even when processing is retried, delayed, or executed concurrently.

Rules:
- Every financial source event must have a stable and globally unique event identifier before it may create ledger effects.
- Every posting request must include an idempotency key derived from the authoritative source event and the intended financial effect.
- Reprocessing the same idempotency key must return the existing result and must not create an additional posting, balance movement, approval, or obligation.
- Distinct financial effects from the same source event must use distinct effect identifiers while remaining linked to the same source event.
- Posting identity must distinguish at minimum:
  - source event ID;
  - effect type;
  - affected Wallet Code or Settlement Account;
  - currency;
  - sequence or component identifier when multiple effects are valid;
  - posting version when an approved superseding calculation exists.
- A retry caused by timeout, network failure, user refresh, duplicate submission, scheduled execution, or recovery procedure must not be interpreted as a new economic event.
- The system must detect exact duplicates and materially equivalent duplicates before final posting.
- Duplicate detection must not rely only on amount and date because legitimate transactions may share those values.
- Concurrent attempts to post the same effect must be serialized, locked, or resolved through another deterministic atomic mechanism.
- A partial posting must not be silently retried as a full new posting; recovery must identify which components succeeded and complete or reverse them under the original event identity.
- A corrected amount, wallet, classification, or distribution must use an approved adjustment, reversal, or superseding event and must not reuse the original identity as though no change occurred.
- Imported financial records must preserve the external transaction identifier and must also receive an IMS FHS identity.
- Manual postings require a unique source reference and must be checked against existing manual and automated effects.
- Suspected duplicates must be placed into an exception state when automatic resolution cannot prove whether the economic event is the same.
- Duplicate prevention controls and rejected attempts must remain auditable with actor, timestamp, request identity, and resolution outcome.
