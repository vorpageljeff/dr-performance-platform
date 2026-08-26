import { z } from "zod";

export const applicationRoleSchema = z.enum([
  "STUDENT",
  "PROFESSIONAL",
  "ADMIN",
]);

export type ApplicationRole = z.infer<typeof applicationRoleSchema>;

export const apiHealthSchema = z.object({
  status: z.literal("ok"),
  service: z.literal("dr-performance-api"),
  version: z.string().min(1),
  timestamp: z.iso.datetime(),
});

export type ApiHealth = z.infer<typeof apiHealthSchema>;

export const commercialPlanSchema = z.object({
  name: z.string().min(1),
  priceInCents: z.int().nonnegative(),
  currency: z.literal("BRL"),
  billingCycle: z.literal("MONTHLY"),
  dueDay: z.int().min(1).max(28),
});

export type CommercialPlan = z.infer<typeof commercialPlanSchema>;

export const initialCommercialPlan: CommercialPlan = {
  name: "Acompanhamento completo",
  priceInCents: 6000,
  currency: "BRL",
  billingCycle: "MONTHLY",
  dueDay: 10,
};
