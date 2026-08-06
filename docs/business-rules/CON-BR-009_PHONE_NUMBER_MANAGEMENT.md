# CON-BR-009 — Phone Number Management

## Feature Origin

Contact Detail → Phones.

## Purpose

Manage multiple Contact phone numbers consistently.

## Rules

1. A Contact may have multiple phone numbers.
2. Each phone stores original value, normalized value, label, active status, and verification status where supported.
3. Labels may include Primary, WhatsApp, Secondary, Office, or another approved label.
4. Normalization follows the configured default country and phone-format policy.
5. Original values remain retained.
6. Normalized phone values support search and duplicate detection.
7. Shared phone numbers require review but do not automatically merge Contacts.
8. Updating a phone does not alter historical Invoice or Shipment snapshots.
9. One active phone may be marked Primary.

## Invariants

- Normalization does not overwrite the original value.
- Phone number alone is not the Contact primary key.
- Historical snapshots remain unchanged.
