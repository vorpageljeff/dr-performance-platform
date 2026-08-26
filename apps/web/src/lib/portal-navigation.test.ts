import { describe, expect, it } from "vitest";

import { adminNavigation, professionalNavigation, studentNavigation } from "./portal-navigation";

describe("portal navigation", () => {
  it.each([
    ["student", studentNavigation, "/portal/aluno"],
    ["professional", professionalNavigation, "/portal/profissional"],
    ["admin", adminNavigation, "/portal/gestao"],
  ])("keeps every %s link inside its role area", (_role, navigation, basePath) => {
    expect(navigation.length).toBeGreaterThanOrEqual(4);
    expect(new Set(navigation.map((item) => item.href)).size).toBe(navigation.length);
    expect(navigation.every((item) => item.href.startsWith(basePath))).toBe(true);
  });
});
