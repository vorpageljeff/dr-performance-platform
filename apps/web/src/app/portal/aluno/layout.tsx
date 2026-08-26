import type { Metadata } from "next";

import { PortalShell } from "@/components/portal/portal-shell";
import { studentNavigation } from "@/lib/portal-navigation";

export const metadata: Metadata = {
  title: { default: "Área do aluno", template: "%s | DR Performance" },
  robots: { index: false, follow: false },
};

export default function StudentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PortalShell navigation={studentNavigation} role="student" roleLabel="Aluno" userName="Lucas Mendes">{children}</PortalShell>;
}
