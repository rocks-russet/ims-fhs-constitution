-- IMS FHS v2
-- Migration: 0001_foundation
-- Purpose: Phase 01 platform foundation only.
-- Constitution references:
-- DB-001, DB-002, DB-016
-- IMPLEMENTATION_ROADMAP Phase 01
--
-- IMPORTANT:
-- This migration intentionally does NOT create Contact/Auth/Purchase/Inventory/
-- Sales/Finance domain tables. Those are introduced in their roadmap phases.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS system_configurations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    config_key varchar(120) NOT NULL UNIQUE,
    config_value text NOT NULL,
    value_type varchar(30) NOT NULL DEFAULT 'string',
    description text,
    is_secret boolean NOT NULL DEFAULT false,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT system_configurations_value_type_check
        CHECK (value_type IN ('string', 'integer', 'decimal', 'boolean', 'json'))
);

CREATE TABLE IF NOT EXISTS numbering_sequences (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    sequence_key varchar(80) NOT NULL UNIQUE,
    prefix varchar(20) NOT NULL,
    current_value bigint NOT NULL DEFAULT 0,
    padding integer NOT NULL DEFAULT 9,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT numbering_sequences_current_value_check CHECK (current_value >= 0),
    CONSTRAINT numbering_sequences_padding_check CHECK (padding BETWEEN 1 AND 18)
);

CREATE TABLE IF NOT EXISTS system_logs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    level varchar(20) NOT NULL,
    event_code varchar(120) NOT NULL,
    message text NOT NULL,
    context jsonb,
    created_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT system_logs_level_check
        CHECK (level IN ('DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'))
);

CREATE INDEX IF NOT EXISTS idx_system_logs_created_at
    ON system_logs (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_system_logs_event_code_created_at
    ON system_logs (event_code, created_at DESC);

INSERT INTO system_configurations
    (config_key, config_value, value_type, description)
VALUES
    ('system.timezone', 'Asia/Jakarta', 'string', 'User-facing IMS FHS business timezone'),
    ('system.currency', 'IDR', 'string', 'IMS FHS base currency'),
    ('system.environment_policy', 'isolated', 'string', 'Development, Staging, and Production data must remain isolated')
ON CONFLICT (config_key) DO NOTHING;

INSERT INTO numbering_sequences (sequence_key, prefix, current_value, padding)
VALUES
    ('inventory', 'INV-', 0, 9),
    ('purchase', 'PUR-', 0, 9),
    ('order', 'ORD-', 0, 9),
    ('withdrawal', 'WD-', 0, 9),
    ('approval', 'APR-', 0, 9)
ON CONFLICT (sequence_key) DO NOTHING;
