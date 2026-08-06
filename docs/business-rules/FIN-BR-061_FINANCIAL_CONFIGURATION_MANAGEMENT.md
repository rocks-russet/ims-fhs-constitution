# FIN-BR-061 — Financial Configuration Management

Purpose: Govern configurable values that can change financial outcomes.

Rules:
- Financial configuration includes fee rates, tax rates, rounding rules, thresholds, wallet mappings, posting classifications, and settlement parameters.
- Each configuration item has key, value, data type, status, owner, version, effective date, and approval reference.
- Configuration changes require validation in a non-production context before activation.
- Historical transactions retain the effective configuration snapshot.
- Invalid, missing, or ambiguous configuration must fail closed.
- Emergency changes require documented reason, limited duration, and retrospective review.
- Configuration export and import must be checksum-validated.
- Only authorized roles may activate financial configuration.

Invariants:
- Configuration changes cannot rewrite historical outcomes.
- No hidden client-side constant may override approved server-side financial configuration.
- Active configuration must be uniquely determinable for any effective timestamp.

Related:
- FIN-BR-030
- FIN-BR-048
- FIN-BR-063
