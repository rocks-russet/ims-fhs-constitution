# CON-BR-008 — Contact List Search, Filter, Sort, and Selection

## Feature Origin

Contact List.

## Purpose

Define Contact List behavior for finding and selecting Contacts.

## Rules

1. Search supports display name, normalized phone, marketplace identity, social identity, tag, address text, and `contactId`.
2. Filters support Buyer, Seller, Buyer-and-Seller, ACTIVE, INACTIVE, MERGED, and ARCHIVED.
3. Sort options include alphabetical, newest, most active, highest Buyer spending, highest Seller purchase value, and latest transaction.
4. Search and sort analytics use authoritative derived metrics.
5. Results display enough context to distinguish similar Contacts.
6. Transaction selection always stores `contactId`, never display name alone.
7. Merged Contacts resolve to their survivor for new navigation.
8. Inactive, merged, and archived Contacts are visually distinguishable and unavailable for ordinary new selection.
9. Broad queries use pagination or bounded result limits.

## Invariants

- Search does not modify Contact data.
- Similar names do not imply the same identity.
- Selection resolves to one stable Contact.
