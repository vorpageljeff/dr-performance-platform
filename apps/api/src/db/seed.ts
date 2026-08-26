import "dotenv/config";

import { getDatabase, closeDatabase } from "./database.js";
import { organizations, userRoles, users } from "./schema.js";

const demoOrganizationId = "10000000-0000-4000-8000-000000000001";
const demoAdminId = "10000000-0000-4000-8000-000000000002";

async function seed(): Promise<void> {
  const database = getDatabase();

  await database
    .insert(organizations)
    .values({
      id: demoOrganizationId,
      name: "DR Performance Demo",
      slug: "dr-performance-demo",
    })
    .onConflictDoNothing();

  await database
    .insert(users)
    .values({
      id: demoAdminId,
      organizationId: demoOrganizationId,
      name: "Administrador Demo",
      email: "admin.demo@drperformance.local",
      status: "ACTIVE",
    })
    .onConflictDoNothing();

  await database
    .insert(userRoles)
    .values({ userId: demoAdminId, role: "ADMIN" })
    .onConflictDoNothing();
}

seed()
  .then(closeDatabase)
  .catch(async (error: unknown) => {
    console.error("Falha ao criar os dados fictícios.", error);
    await closeDatabase();
    process.exitCode = 1;
  });
