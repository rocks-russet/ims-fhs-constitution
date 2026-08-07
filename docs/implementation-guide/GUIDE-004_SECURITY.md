# GUIDE-004 — Security Implementation Guide

- HTTPS only in production.
- Adaptive password KDF; Argon2id preferred.
- Secure HttpOnly session cookie; no auth token in localStorage.
- TOTP enrollment for all users with adaptive MFA challenge.
- Server-side RBAC/permissions plus resource-scope authorization.
- Protect against IDOR/BOLA.
- CSRF protection where cookie-based mutation requires it.
- Rate-limit login/MFA/reset endpoints.
- Parameterized queries/ORM safe query APIs.
- CSP/HSTS/security headers.
- Secrets live in Railway/approved secret manager, never public GitHub.
- No directory listing or `.env`/backup/source exposure.
- Sensitive actions may require step-up authentication.
- Security audit must never contain credentials or tokens.
