import "dotenv/config";

import { defineConfig } from "drizzle-kit";

const developmentDatabaseUrl =
  "postgresql://dr_performance:dr_performance@localhost:5432/dr_performance?schema=public";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? developmentDatabaseUrl,
  },
});
