# SAL-BR-038 — Sales Recovery and Replay Protection

## Purpose

Define safe restoration and replay of sales events after failure, interruption, partial processing, or data recovery.

## Rules

1. Every side-effecting sales operation must use a stable operation or event identity.
2. Recovery must determine whether each operation is:
   - not started;
   - partially completed;
   - completed;
   - reversed; or
   - uncertain.
3. Completed operations must not be replayed.
4. Partially completed operations must resume or compensate using the same operation identity.
5. Recovery must preserve original Order IDs, inventory IDs, invoice IDs, payment references, shipment IDs, and timestamps.
6. Replaying an event must not duplicate:
   - inventory reservation;
   - order creation;
   - invoice issuance;
   - payment confirmation;
   - wallet posting;
   - profit recognition;
   - shipment creation; or
   - order completion.
7. Recovery from backup must reconcile restored sales records with inventory, wallet, ledger, and sales history before operations reopen.
8. Uncertain operations must create an exception rather than being guessed as successful.
9. Manual recovery actions require actor, reason, evidence, and affected-record list.
10. Recovery completion requires integrity validation and authorized sign-off.

## Invariants

- Recovery cannot invent missing commercial events.
- Replayed operations are idempotent.
- A recovered order cannot produce duplicate inventory or financial effects.

## Related

- SAL-BR-005
- SAL-BR-012
- SAL-BR-022
- FIN-BR-037
- FIN-BR-042
- FIN-BR-060
