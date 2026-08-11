# DB-017 — User Preferences Schema

## Purpose
Persist presentation/workspace preferences per authenticated IMS FHS user.

Preferences are not authorization or business truth.

## `user_preferences`

| Column | Type | Constraints / Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK `system_users.id`, UNIQUE, NOT NULL |
| theme_mode | varchar | `LIGHT`, `DARK`, `SYSTEM`; default `SYSTEM` |
| density_mode | varchar | `COMPACT`, `COMFORTABLE`, `LARGE`; default `COMFORTABLE` |
| table_font_size | varchar | `NORMAL`, `SMALL`; default `NORMAL` |
| accent_color | varchar | baseline `BLUE`, `EMERALD`, `ORANGE`; default `BLUE` |
| radius_mode | varchar | `COMFORT`, `SHARP`; default `COMFORT` |
| motion_mode | varchar | `NORMAL`, `REDUCED`; default `NORMAL` |
| preferences_version | integer | NOT NULL, used for compatibility/migration |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

Use CHECK constraints or a controlled enum strategy consistent with DB migration policy.

## Explorer / Workspace Preferences
Complex Explorer presentation state should not expand `user_preferences` into dozens of columns.

Use a separate versioned structure such as:

### `user_workspace_preferences`
- id UUID PK
- user_id FK
- module_code
- workspace_code
- is_default
- presentation_state JSONB
- preferences_version
- created_at
- updated_at

Representative `presentation_state`:
- visible columns
- column order
- column widths
- density override
- sort
- saved filter/view reference
- list/grid selection
- page size

This data is presentation state only and must be safely resettable.

## Rules
1. Appearance preferences are per user.
2. Missing/unknown preference values fall back safely.
3. Preference failure must not block access to authorized business data.
4. Preference data must not be used as permission evidence.
5. User preference changes are ordinary profile mutations; security-sensitive audit is not required unless the setting itself later becomes security relevant.
6. `SYSTEM` theme is persisted as `SYSTEM`; the resolved Light/Dark result is client-environment dependent.
