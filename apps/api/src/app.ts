import cors from "@fastify/cors";
import Fastify, { type FastifyInstance } from "fastify";

import {
  apiHealthSchema,
  applicationRoleSchema,
  initialCommercialPlan,
} from "@dr-performance/contracts";

type BuildApplicationOptions = {
  logger?: boolean;
  webOrigin: string;
};

export async function buildApplication({
  logger = true,
  webOrigin,
}: BuildApplicationOptions): Promise<FastifyInstance> {
  const application = Fastify({
    logger,
  });

  await application.register(cors, {
    origin: webOrigin,
    credentials: true,
  });

  application.get("/health", () =>
    apiHealthSchema.parse({
      status: "ok",
      service: "dr-performance-api",
      version: "0.1.0",
      timestamp: new Date().toISOString(),
    }),
  );

  application.get("/v1/meta", () => ({
    application: "DR Performance",
    locale: "pt-BR",
    timezone: "America/Sao_Paulo",
    roles: applicationRoleSchema.options,
    commercialPlan: initialCommercialPlan,
  }));

  return application;
}
