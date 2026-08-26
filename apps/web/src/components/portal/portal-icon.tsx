import type { PortalNavItem } from "@/lib/portal-navigation";

const paths: Record<PortalNavItem["icon"], React.ReactNode> = {
  home: <><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5M9 21v-7h6v7"/></>,
  workout: <><path d="M6 7v10M18 7v10M3 9v6M21 9v6M6 12h12"/></>,
  progress: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></>,
  checkin: <><path d="M5 3v3M19 3v3M3 9h18M5 5h14a2 2 0 0 1 2 2v14H3V7a2 2 0 0 1 2-2Z"/><path d="m8 15 2.5 2.5L16 12"/></>,
  profile: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  students: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 4.5"/></>,
  alerts: <><path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5M12 17.5h.01"/></>,
  billing: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>,
};

export function PortalIcon({ name }: { name: PortalNavItem["icon"] }) {
  return (
    <svg aria-hidden="true" className="portal-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      {paths[name]}
    </svg>
  );
}
