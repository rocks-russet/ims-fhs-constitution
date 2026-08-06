# CON-BR-006 — Contact Merge

## Purpose

Consolidate confirmed duplicate contacts into one surviving identity without breaking historical references.

## Rules

1. A merge requires:
   - surviving `contactId`;
   - absorbed `contactId`;
   - duplicate evidence;
   - field-resolution decisions;
   - actor;
   - timestamp; and
   - reason.
2. The surviving contact must retain all valid buyer and seller roles from both records.
3. Phones, addresses, tags, marketplace references, and notes must be combined using deterministic conflict-resolution rules.
4. Duplicate values must be normalized and deduplicated.
5. Historical orders, purchases, invoices, shipments, and financial records must remain traceable to their original contact references.
6. Systems may resolve absorbed references to the surviving contact for current navigation, but must preserve the original referenced ID in audit history.
7. The absorbed contact becomes `MERGED` and stores `mergedIntoContactId`.
8. A merged contact cannot be selected for new transactions.
9. Merge must be atomic; partial merge is prohibited.
10. Unmerge, if supported, requires an explicit corrective workflow and must not rewrite historical transaction snapshots.

## Invariants

- Exactly one surviving active identity remains after merge.
- No historical transaction is deleted or orphaned.
- Merge does not create duplicate addresses, phones, or roles.
- Merge does not alter financial or sales amounts.

## Related

- CON-BR-001
- CON-BR-005
- SAL-BR-040
- FIN-BR-053
