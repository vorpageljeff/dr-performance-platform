import type { Metadata } from "next";

import { PortalShell } from "@/components/portal/portal-shell";
import { adminNavigation } from "@/lib/portal-navigation";

export const metadata: Metadata = {
  title: { default: "Gestão", template: "%s | DR Performance" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PortalShell navigation={adminNavigation} role="admin" roleLabel="Administrador" userName="Jefferson Vorpagel">{children}</PortalShell>;
}
