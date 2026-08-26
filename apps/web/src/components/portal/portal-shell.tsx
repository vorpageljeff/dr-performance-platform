"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { PortalIcon } from "@/components/portal/portal-icon";
import type { PortalNavItem, PortalRole } from "@/lib/portal-navigation";

type PortalShellProps = {
  children: React.ReactNode;
  navigation: PortalNavItem[];
  role: PortalRole;
  roleLabel: string;
  userName: string;
};

function isCurrentRoute(pathname: string, href: string) {
  return pathname === href || (href.split("/").length > 3 && pathname.startsWith(`${href}/`));
}

export function PortalShell({ children, navigation, role, roleLabel, userName }: PortalShellProps) {
  const pathname = usePathname();
  const initials = userName.split(" ").slice(0, 2).map((part) => part[0]).join("");

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link aria-label="DR Performance — página inicial" className="app-sidebar__brand" href="/">
          <BrandLogo compact eager />
        </Link>

        <div className="demo-badge"><span /> Ambiente de demonstração</div>

        <nav aria-label={`Navegação do ${roleLabel}`} className="app-navigation">
          {navigation.map((item) => {
            const current = isCurrentRoute(pathname, item.href);
            return (
              <Link aria-current={current ? "page" : undefined} className={current ? "is-active" : undefined} href={item.href} key={item.href}>
                <PortalIcon name={item.icon} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="app-sidebar__user">
          <span className="avatar">{initials}</span>
          <div><strong>{userName}</strong><small>{roleLabel}</small></div>
          <Link aria-label="Sair da demonstração" href="/entrar">↗</Link>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div><span className="app-topbar__dot" /> Dados fictícios para validação</div>
          <div className="app-topbar__actions"><button aria-label="Notificações" type="button">○<span>3</span></button><span className="avatar avatar--small">{initials}</span></div>
        </header>
        <main className={`app-content app-content--${role}`}>{children}</main>
      </div>

      <nav aria-label="Navegação móvel" className="app-mobile-nav">
        {navigation.slice(0, 5).map((item) => {
          const current = isCurrentRoute(pathname, item.href);
          return (
            <Link aria-current={current ? "page" : undefined} className={current ? "is-active" : undefined} href={item.href} key={item.href}>
              <PortalIcon name={item.icon} /><span>{item.shortLabel}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
