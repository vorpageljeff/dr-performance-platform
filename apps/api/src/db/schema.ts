import {
  boolean,
  index,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
};

export const accountStatus = pgEnum("account_status", [
  "INVITED",
  "ACTIVE",
  "SUSPENDED",
  "ARCHIVED",
]);

export const applicationRole = pgEnum("application_role", [
  "STUDENT",
  "PROFESSIONAL",
  "ADMIN",
]);

export const consentType = pgEnum("consent_type", [
  "TERMS_OF_USE",
  "PRIVACY_NOTICE",
  "SENSITIVE_DATA",
  "PROGRESS_PHOTOS",
  "MARKETING_IMAGE",
  "WHATSAPP_NOTIFICATIONS",
]);

export const organizations = pgTable("organizations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  active: boolean("active").default(true).notNull(),
  ...timestamps,
});

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id),
    email: text("email").notNull(),
    name: text("name").notNull(),
    status: accountStatus("status").default("INVITED").notNull(),
    ...timestamps,
    archivedAt: timestamp("archived_at", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("users_organization_email_unique").on(
      table.organizationId,
      table.email,
    ),
    index("users_organization_status_index").on(
      table.organizationId,
      table.status,
    ),
  ],
);

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: applicationRole("role").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.userId, table.role] })],
);

export const studentProfiles = pgTable(
  "student_profiles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id),
    userId: uuid("user_id")
      .notNull()
      .unique()
      .references(() => users.id),
    ...timestamps,
    archivedAt: timestamp("archived_at", { withTimezone: true }),
  },
  (table) => [
    index("student_profiles_organization_archived_index").on(
      table.organizationId,
      table.archivedAt,
    ),
  ],
);

export const professionalProfiles = pgTable(
  "professional_profiles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id),
    userId: uuid("user_id")
      .notNull()
      .unique()
      .references(() => users.id),
    cref: text("cref"),
    ...timestamps,
    archivedAt: timestamp("archived_at", { withTimezone: true }),
  },
  (table) => [
    index("professional_profiles_organization_archived_index").on(
      table.organizationId,
      table.archivedAt,
    ),
  ],
);

export const professionalStudentAssignments = pgTable(
  "professional_student_assignments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id),
    professionalId: uuid("professional_id")
      .notNull()
      .references(() => professionalProfiles.id),
    studentId: uuid("student_id")
      .notNull()
      .references(() => studentProfiles.id),
    startsAt: timestamp("starts_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    endsAt: timestamp("ends_at", { withTimezone: true }),
    ...timestamps,
  },
  (table) => [
    uniqueIndex("assignments_professional_student_start_unique").on(
      table.professionalId,
      table.studentId,
      table.startsAt,
    ),
    index("assignments_organization_end_index").on(
      table.organizationId,
      table.endsAt,
    ),
  ],
);

export const consentRecords = pgTable(
  "consent_records",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    type: consentType("type").notNull(),
    policyVersion: text("policy_version").notNull(),
    purpose: text("purpose").notNull(),
    granted: boolean("granted").notNull(),
    grantedAt: timestamp("granted_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("consents_user_type_created_index").on(table.userId, table.type, table.createdAt)],
);

export const auditEvents = pgTable(
  "audit_events",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id),
    actorUserId: uuid("actor_user_id").references(() => users.id),
    action: text("action").notNull(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("audit_organization_created_index").on(
      table.organizationId,
      table.createdAt,
    ),
    index("audit_entity_index").on(table.entityType, table.entityId),
  ],
);
