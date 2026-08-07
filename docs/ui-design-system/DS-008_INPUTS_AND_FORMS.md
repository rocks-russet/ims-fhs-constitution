# DS-008 — Inputs & Forms

## Components
- text
- number/currency
- select
- multi-select
- date/date-time
- textarea
- checkbox
- radio
- switch
- searchable combobox
- file upload

## Validation
- validate on blur and/or submit as appropriate
- errors appear adjacent to affected field
- server errors map back to fields when possible
- do not erase user input on failed submit

## Financial Inputs
Currency fields use localized IDR formatting without losing exact server numeric value.

## Owner Selection
Owner is explicit and never inferred solely from the logged-in actor.
