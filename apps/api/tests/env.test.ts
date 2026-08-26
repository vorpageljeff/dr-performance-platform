import { describe, expect, it } from "vitest";

import { readEnvironment } from "../src/config/env.js";

describe("readEnvironment", () => {
  it("usa a porta padrão fornecida pelo Render", () => {
    const environment = readEnvironment({
      NODE_ENV: "production",
      PORT: "10000",
      WEB_ORIGIN: "https://drperformance.example",
    });

    expect(environment.API_PORT).toBe(10_000);
  });

  it("prioriza API_PORT no desenvolvimento local", () => {
    const environment = readEnvironment({
      API_PORT: "3333",
      PORT: "10000",
    });

    expect(environment.API_PORT).toBe(3333);
  });
});
