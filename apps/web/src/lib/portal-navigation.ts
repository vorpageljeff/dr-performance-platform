export type PortalRole = "student" | "professional" | "admin";

export type PortalNavItem = {
  href: string;
  label: string;
  shortLabel: string;
  icon: "home" | "workout" | "progress" | "checkin" | "profile" | "students" | "alerts" | "billing";
};

export const studentNavigation: PortalNavItem[] = [
  { href: "/portal/aluno", label: "Visão geral", shortLabel: "Início", icon: "home" },
  { href: "/portal/aluno/treino", label: "Meu treino", shortLabel: "Treino", icon: "workout" },
  { href: "/portal/aluno/evolucao", label: "Evolução", shortLabel: "Evolução", icon: "progress" },
  { href: "/portal/aluno/check-in", label: "Check-in", shortLabel: "Check-in", icon: "checkin" },
  { href: "/portal/aluno/perfil", label: "Meu perfil", shortLabel: "Perfil", icon: "profile" },
];

export const professionalNavigation: PortalNavItem[] = [
  { href: "/portal/profissional", label: "Prioridades", shortLabel: "Início", icon: "home" },
  { href: "/portal/profissional/alunos", label: "Alunos", shortLabel: "Alunos", icon: "students" },
  { href: "/portal/profissional/check-ins", label: "Check-ins", shortLabel: "Check-ins", icon: "checkin" },
  { href: "/portal/profissional/alertas", label: "Alertas", shortLabel: "Alertas", icon: "alerts" },
];

export const adminNavigation: PortalNavItem[] = [
  { href: "/portal/gestao", label: "Painel gerencial", shortLabel: "Painel", icon: "home" },
  { href: "/portal/gestao/alunos", label: "Alunos", shortLabel: "Alunos", icon: "students" },
  { href: "/portal/gestao/pagamentos", label: "Pagamentos", shortLabel: "Financeiro", icon: "billing" },
  { href: "/portal/gestao/ocorrencias", label: "Ocorrências", shortLabel: "Alertas", icon: "alerts" },
];
