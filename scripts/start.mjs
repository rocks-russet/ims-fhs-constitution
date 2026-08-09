import { spawn } from "node:child_process";
import process from "node:process";

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      env: process.env,
      shell: false,
    });

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`${command} terminated by signal ${signal}`));
        return;
      }

      if (code !== 0) {
        reject(new Error(`${command} exited with code ${code}`));
        return;
      }

      resolve();
    });
  });
}

try {
  console.log("[startup] running deterministic database migrations");
  await run(process.execPath, ["scripts/migrate.mjs"]);

  console.log("[startup] migrations complete; starting Next.js");
  const nextBin =
    process.platform === "win32"
      ? "node_modules/.bin/next.cmd"
      : "node_modules/.bin/next";

  const child = spawn(nextBin, ["start"], {
    stdio: "inherit",
    env: process.env,
    shell: false,
  });

  const forward = (signal) => {
    if (!child.killed) child.kill(signal);
  };

  process.on("SIGTERM", () => forward("SIGTERM"));
  process.on("SIGINT", () => forward("SIGINT"));

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 1);
  });
} catch (error) {
  console.error("[startup] aborted", error);
  process.exit(1);
}
