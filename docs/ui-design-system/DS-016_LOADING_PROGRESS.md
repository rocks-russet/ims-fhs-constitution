# DS-016 — Loading & Progress

## Read Loading
Use skeletons or local spinners; preserve surrounding layout.

## Critical Mutation
Required state model:
`IDLE → VALIDATING → COMMITTING → SUCCESS / ERROR`

During COMMITTING:
- conflicting controls disabled
- user cannot double-submit
- visible loading overlay/state
- meaningful stage label when useful

Examples:
- Validating items…
- Resolving ownership…
- Allocating cost…
- Creating inventory…
- Finalizing purchase…

Avoid fake percentage progress when true percentage is unknown.
