import { createPool } from "./db.mjs";

const pool = createPool();

async function main() {
  const result = await pool.query(`
    SELECT version, checksum, applied_at
    FROM schema_migrations
    ORDER BY version
  `);

  console.table(result.rows);
  await pool.end();
}

main().catch(async (error) => {
  console.error("[migration-status] failed", error);
  await pool.end().catch(() => undefined);
  process.exit(1);
});
