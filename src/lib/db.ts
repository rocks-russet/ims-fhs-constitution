import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var imsFhsDbPool: Pool | undefined;
}

function createPool(): Pool {
  const connectionString = process.env.DATABASE_URL?.trim();

  if (!connectionString) {
    throw new Error("DATABASE_URL is required.");
  }

  return new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
}

export const db = globalThis.imsFhsDbPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalThis.imsFhsDbPool = db;
}
