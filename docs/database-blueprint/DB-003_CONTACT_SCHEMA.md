# DB-003 — Contact Schema

## `contacts`
| Column | Type | Constraints / Notes |
|---|---|---|
| id | uuid | PK |
| contact_number | varchar | UNIQUE, immutable |
| display_name | varchar | NOT NULL |
| status | varchar | ACTIVE / INACTIVE / MERGED / ARCHIVED |
| is_buyer | boolean | NOT NULL default false |
| is_seller | boolean | NOT NULL default false |
| merged_into_contact_id | uuid | FK contacts.id nullable |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

Constraint: one contact can be both Buyer and Seller. Separate Buyer/Seller contacts for the same real entity are not created merely due to role.

## `contact_aliases`
- id UUID PK
- contact_id FK
- alias
- normalized_alias
- active
- created_at

## `contact_phones`
- id UUID PK
- contact_id FK
- original_value
- normalized_value
- label
- is_primary
- active
- verification_status
- created_at / updated_at

## `contact_addresses`
- id UUID PK
- contact_id FK
- purpose
- recipient_name
- phone
- address_line_1 / address_line_2
- locality / city / province / postal_code / country
- delivery_notes
- is_default
- active
- created_at / updated_at

Partial unique index should ensure at most one active default address per Contact + purpose.

## `contact_external_identities`
- id UUID PK
- contact_id FK
- provider
- external_id
- handle
- profile_url
- verification_status
- active
- created_at / updated_at

## `contact_tags`, `contact_tag_assignments`, `contact_notes`
Separate relational tables preserve auditability and filtering.

## Analytics
Buyer/Seller behaviour metrics are derived from Purchase/Sales and transaction-time market snapshots. Do not store them as authoritative editable Contact columns.
