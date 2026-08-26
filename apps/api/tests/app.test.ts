import { afterEach, describe, expect, it } from "vitest";

import { apiHealthSchema } from "@dr-performance/contracts";

import { buildApplication } from "../src/app.js";

const applications: Awaited<ReturnType<typeof buildApplication>>[] = [];

afterEach(async () => {
  await Promise.all(applications.splice(0).map((application) => application.close()));
});

describe("API foundation", () => {
  it("expõe um health check validado pelo contrato compartilhado", async () => {
    const application = await buildApplication({
      logger: false,
      webOrigin: "http://localhost:3000",
    });
    applications.push(application);

    const response = await application.inject({ method: "GET", url: "/health" });
    const payload: unknown = response.json();

    expect(response.statusCode).toBe(200);
    expect(apiHealthSchema.parse(payload).status).toBe("ok");
  });

  it("publica apenas metadados não sensíveis", async () => {
    const application = await buildApplication({
      logger: false,
      webOrigin: "http://localhost:3000",
    });
    applications.push(application);

    const response = await application.inject({ method: "GET", url: "/v1/meta" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      application: "DR Performance",
      locale: "pt-BR",
      timezone: "America/Sao_Paulo",
      commercialPlan: { priceInCents: 6000, dueDay: 10 },
    });
  });
});
