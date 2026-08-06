# SAL-BR-040 — Sales Integrity Audit

## Purpose

Define repeatable checks that verify end-to-end consistency across the sales lifecycle.

## Rules

1. The sales integrity audit must identify:
   - orders without valid source checkout;
   - reserved inventory without active order linkage;
   - duplicate inventory assignment;
   - invalid lifecycle transitions;
   - active multiple invoice versions;
   - paid orders without valid payment evidence;
   - packing or shipment records without eligible order status;
   - completed orders without financial recognition;
   - cancelled orders with unreleased eligible inventory;
   - duplicated completion or profit events;
   - unresolved merge or split inconsistencies; and
   - broken references among returns, replacements, disputes, and claims.
2. Audit checks must be deterministic and executable repeatedly without changing data.
3. Every finding must include severity, affected record, failed rule, evidence, and recommended resolution path.
4. Audit execution must record timestamp, code or ruleset version, scope, and result counts.
5. Audit findings must not be fixed through direct silent mutation.
6. Material findings create a sales incident or financial exception where applicable.
7. A post-correction audit must confirm closure.
8. Audit results must distinguish true violations from approved exceptions.
9. The audit must support pre-production cleanup and go-live validation.
10. Final go-live approval requires zero unresolved critical integrity findings.

## Invariants

- Audit is read-only.
- A clean audit means no known violation within the executed scope, not proof that no defect can exist.
- Every correction remains traceable to its original finding.

## Related

- SAL-BR-033
- SAL-BR-037
- SAL-BR-038
- FIN-BR-065
