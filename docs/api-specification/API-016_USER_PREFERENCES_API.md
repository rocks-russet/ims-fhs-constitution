# API-016 — User Preferences API

## Purpose
Expose authenticated per-user appearance and workspace preferences to the IMS FHS client.

## GET `/api/v1/me/preferences`

Classification: Authenticated.

Returns current user preferences.

Example:

```json
{
  "success": true,
  "data": {
    "appearance": {
      "theme": "SYSTEM",
      "density": "COMFORTABLE",
      "accentColor": "BLUE"
    },
    "preferencesVersion": 1
  }
}
```

No other user's preferences may be returned through this route.

## PATCH `/api/v1/me/preferences`

Classification: Authenticated.

Allows partial update.

Example:

```json
{
  "appearance": {
    "theme": "DARK",
    "density": "COMPACT"
  }
}
```

Validation:
- allowlisted setting names only
- allowlisted enum values only
- unknown preference fields rejected or ignored according to the final API validation policy
- no permission/role fields accepted

Response returns the persisted canonical preference object.

## Workspace Endpoints

Recommended baseline:

### GET `/api/v1/me/workspaces/{moduleCode}`
Returns authorized user's saved workspace/presentation states for the module.

### PUT `/api/v1/me/workspaces/{moduleCode}/{workspaceCode}`
Creates/replaces a presentation workspace.

### DELETE `/api/v1/me/workspaces/{moduleCode}/{workspaceCode}`
Deletes a non-protected user workspace.

Workspace payload may include:
- visible columns
- column order
- column widths
- sort
- saved filter reference/state
- list/grid mode
- page size

## Behavior
Appearance changes should be reflected immediately in the client without requiring logout/relogin.

Preference API failure must degrade to safe UI defaults and must not falsely report an underlying business transaction as failed.


## Baseline v2 Appearance Scope
Initial production implementation requires `theme`, `density`, and `accentColor`. Density accepts `COMPACT`, `COMFORTABLE`, or `LARGE`. Other DS-023 appearance preferences may be added later without changing business semantics.
