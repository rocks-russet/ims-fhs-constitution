import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPool } from "./db.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(__dirname, "../migrations");
const pool = createPool();

function checksum(content) {
  return createHash("sha256").update(content).digest("hex");
}

async function main() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        version varchar(100) PRIMARY KEY,
        checksum varchar(64) NOT NULL,
        applied_at timestamptz NOT NULL DEFAULT now()
      )
    `);

    const files = (await readdir(migrationsDir))
      .filter((name) => /^\d{4}_.+\.sql$/.test(name))
      .sort();

    for (const file of files) {
      const sql = await readFile(path.join(migrationsDir, file), "utf8");
      const version = file.replace(/\.sql$/, "");
      const hash = checksum(sql);

      const existing = await client.query(
        "SELECT checksum FROM schema_migrations WHERE version = $1",
        [version],
      );

      if (existing.rowCount) {
        if (existing.rows[0].checksum !== hash) {
          throw new Error(
            `Migration ${version} was modified after being applied. Create a new migration instead.`,
          );
        }

        console.log(`[migration] ${version} already applied`);
        continue;
      }

      console.log(`[migration] applying ${version}`);

      await client.query("BEGIN");

      try {
        await client.query(sql);
        await client.query(
          "INSERT INTO schema_migrations (version, checksum) VALUES ($1, $2)",
          [version, hash],
        );
        await client.query("COMMIT");
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      }

      console.log(`[migration] applied ${version}`);
    }
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((error) => {
  console.error("[migration] failed", error);
  process.exit(1);
});
