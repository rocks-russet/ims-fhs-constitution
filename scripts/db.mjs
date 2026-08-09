import pg from "pg";

const { Pool } = pg;

export function requireDatabaseUrl() {
  const connectionString = process.env.DATABASE_URL?.trim();

  if (!connectionString) {
    throw new Error("DATABASE_URL is required.");
  }

  return connectionString;
}

export function createPool() {
  return new Pool({
    connectionString: requireDatabaseUrl(),
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
}
