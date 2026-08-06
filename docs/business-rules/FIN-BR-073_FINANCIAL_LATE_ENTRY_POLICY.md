# FIN-BR-073 — Financial Late-Entry Policy

## Purpose

Govern financial events recorded after the normal cutoff while preserving the original economic-event date, the actual posting date, and period integrity.

## Rules

1. A late entry must reference the original economic event, source evidence, affected amount, responsible actor, reason for delay, and intended accounting period.
2. The system must store both:
   - `economicEventAt`: when the underlying transaction actually occurred; and
   - `postedAt`: when the financial entry was committed.
3. A late entry may be posted into an open period using the original economic-event reference.
4. Posting into a closed period is prohibited unless the period is formally reopened under FIN-BR-049.
5. When reopening is not approved, the entry is recognized in the current open period and marked as a prior-period late entry.
6. A late entry must not overwrite, backdate, or fabricate the server posting timestamp.
7. Material late entries require approval according to the financial approval matrix.
8. Reports must be able to distinguish ordinary-period entries from late entries.
9. Repeated late entries from the same process must trigger root-cause and control review.

## Invariants

- The original economic-event date and the actual posting date must both remain visible.
- A late entry cannot bypass period-close controls.
- Historical reports are not silently changed.

## Related

- FIN-BR-012
- FIN-BR-049
- FIN-BR-066
