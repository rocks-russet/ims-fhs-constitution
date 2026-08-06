# FIN-BR-023 — Financial Exception, Suspense, and Resolution

Purpose: Provide a controlled state for financial events that cannot yet be assigned, completed, or reconciled without inventing financial ownership.

Rules:
- A financial event must enter an exception or suspense state when required information, ownership, evidence, approval, or reconciliation is unresolved.
- Suspense is a temporary control state and must not be used as permanent revenue, profit, expense, capital, or wallet ownership.
- Every exception or suspense record must identify:
  - exception ID;
  - source event;
  - amount and currency when applicable;
  - reason code and description;
  - responsible reviewer;
  - creation timestamp;
  - severity or materiality;
  - target resolution date;
  - status;
  - resolution evidence.
- Supported statuses must distinguish at minimum `OPEN`, `UNDER_REVIEW`, `RESOLVED`, `ACCEPTED_EXCEPTION`, and `CANCELLED`.
- A suspense amount must not be assigned arbitrarily to make reconciliation totals appear correct.
- Resolution must identify the authoritative destination, correction, reversal, obligation, loss, recovery, or other approved treatment.
- Resolving an exception must create the required linked records and must not overwrite the original evidence.
- Material exceptions require approval and must be disclosed in reconciliation and period-close reporting.
- Repeated exceptions from the same process or source must be reviewable as a control issue.
- An accepted exception must retain explicit authorization, reason, risk ownership, and any required follow-up action.
- Exception aging is a reporting attribute and must not silently change the economic treatment of the underlying event.
- Administrative repair must remain auditable and must follow the applicable posting, approval, reversal, and data-recovery rules.
