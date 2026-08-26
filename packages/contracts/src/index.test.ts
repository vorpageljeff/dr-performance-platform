import { describe, expect, it } from "vitest";

import { commercialPlanSchema, initialCommercialPlan } from "./index.js";

describe("initialCommercialPlan", () => {
  it("mantém o preço e vencimento definidos no projeto", () => {
    expect(commercialPlanSchema.parse(initialCommercialPlan)).toEqual({
      name: "Acompanhamento completo",
      priceInCents: 6000,
      currency: "BRL",
      billingCycle: "MONTHLY",
      dueDay: 10,
    });
  });
});
