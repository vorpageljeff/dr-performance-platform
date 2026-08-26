import type { Metadata } from "next";

import { PortalShell } from "@/components/portal/portal-shell";
import { professionalNavigation } from "@/lib/portal-navigation";

export const metadata: Metadata = {
  title: { default: "Área profissional", template: "%s | DR Performance" },
  robots: { index: false, follow: false },
};

export default function ProfessionalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PortalShell navigation={professionalNavigation} role="professional" roleLabel="Profissional" userName="Daniel Rodrigues">{children}</PortalShell>;
}
