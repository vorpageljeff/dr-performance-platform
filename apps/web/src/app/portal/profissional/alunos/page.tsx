import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Alunos" };

const students = [
  { initials: "MC", name: "Marina Costa", goal: "Condicionamento", status: "Alerta", statusClass: "danger", last: "Hoje, 09:42", adherence: "92%" },
  { initials: "RL", name: "Rafael Lima", goal: "Hipertrofia", status: "Check-in", statusClass: "warning", last: "Hoje, 10:18", adherence: "86%" },
  { initials: "AS", name: "Ana Souza", goal: "Emagrecimento", status: "Inativo 7d", statusClass: "muted", last: "19 ago.", adherence: "58%" },
  { initials: "LM", name: "Lucas Mendes", goal: "Redução de gordura", status: "Em dia", statusClass: "success", last: "Ontem, 18:20", adherence: "88%" },
  { initials: "TB", name: "Thiago Barros", goal: "Força", status: "Em dia", statusClass: "success", last: "Ontem, 07:15", adherence: "95%" },
];

export default function StudentsPage() {
  return <><PageHeading eyebrow="Carteira profissional" title="Alunos" description="Acompanhe atividade, aderência e sinais que precisam de intervenção." action={<button className="button" disabled type="button">Adicionar aluno em breve</button>} /><div className="filter-bar"><label><span>Buscar aluno</span><input disabled placeholder="Nome, e-mail ou telefone" type="search" /></label><button className="filter-chip is-active" type="button">Todos <span>24</span></button><button className="filter-chip" type="button">Com alertas <span>3</span></button><button className="filter-chip" type="button">Inativos <span>2</span></button></div><section className="student-table app-card"><div className="student-table__header"><span>Aluno</span><span>Objetivo</span><span>Situação</span><span>Última atividade</span><span>Aderência</span><span /></div>{students.map((student) => <article key={student.name}><div className="student-cell"><span className="avatar avatar--tiny">{student.initials}</span><div><strong>{student.name}</strong><small>Aluno demonstrativo</small></div></div><span>{student.goal}</span><span><b className={`table-status table-status--${student.statusClass}`}>{student.status}</b></span><span>{student.last}</span><strong>{student.adherence}</strong><button aria-label={`Abrir perfil de ${student.name}`} disabled type="button">→</button></article>)}</section></>;
}
