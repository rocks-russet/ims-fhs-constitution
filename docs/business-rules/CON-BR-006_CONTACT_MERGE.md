# CON-BR-006 — Contact Merge

## Feature Origin

Merge Contact.

## Purpose

Combine confirmed duplicate Contacts into one surviving Contact without losing history.

## Rules

1. Merge requires a surviving `contactId`, absorbed `contactId`, reason, evidence, actor, and timestamp.
2. Buyer and Seller roles from both Contacts are combined on the survivor.
3. Phones, addresses, marketplace identities, tags, and notes are compared and deduplicated.
4. Historical records retain their original references for audit, while navigation may resolve to the survivor.
5. The absorbed Contact becomes `MERGED` and stores `mergedIntoContactId`.
6. A merged Contact cannot be selected for new transactions.
7. Merge must be atomic.
8. System or generic Contacts cannot be merged through ordinary Merge.
9. Unmerge, if supported later, requires a dedicated corrective workflow.

## Invariants

- One active survivor remains.
- No Purchase or Sales record becomes orphaned.
- Merge does not alter transaction amounts or snapshots.
