# ARCH-001 — System Overview

## Purpose
Define the high-level IMS FHS v2 architecture for Railway deployment.

## Layers
1. Web UI
2. Authentication & Authorization
3. Domain Engines
4. Platform Engines
5. PostgreSQL / Object Storage / optional Redis

## Domain Engines
- Purchase Engine
- Inventory Engine
- Sales Engine
- Profit Engine
- Finance Engine
- Contact Engine
- Portfolio Engine
- Market Engine
- Auth Engine

## Platform Engines
- Event Engine
- Approval Engine
- Numbering Engine
- Scheduler / Background Jobs
- Audit Engine
- Notification Engine
- Configuration Engine
- File Storage Engine
- Backup / Restore
- Integrity Engine

## Boundary
Each domain owns its authoritative data. Other domains may read through approved contracts and react through events, but must not directly mutate foreign-domain state.
