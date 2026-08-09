import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const checkedAt = new Date().toISOString();

  try {
    const startedAt = performance.now();

    const database = await db.query<{
      database_time: Date;
      database_name: string;
    }>(
      `SELECT
         now() AS database_time,
         current_database() AS database_name`,
    );

    const latencyMs = Math.round(performance.now() - startedAt);

    return NextResponse.json(
      {
        success: true,
        service: "ims-fhs-v2",
        environment: process.env.IMS_ENVIRONMENT || "development",
        status: "ok",
        checkedAt,
        database: {
          status: "ok",
          name: database.rows[0]?.database_name,
          time: database.rows[0]?.database_time,
          latencyMs,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[health] database check failed", error);

    return NextResponse.json(
      {
        success: false,
        service: "ims-fhs-v2",
        environment: process.env.IMS_ENVIRONMENT || "development",
        status: "degraded",
        checkedAt,
        database: {
          status: "error",
        },
      },
      { status: 503 },
    );
  }
}
