# DS-017 — Empty, Error & Success States

## Empty
Differentiate:
- no records exist
- current filters return no matches
- user lacks access to content

## Error
Show:
- concise explanation
- recoverable next action
- request/reference ID where support/debug benefits

Never display stack traces or secrets.

## Success
Critical mutation success should show resulting business ID and useful next actions.

Example:
`Purchase Committed — PUR-... — 37 Inventory Created`
