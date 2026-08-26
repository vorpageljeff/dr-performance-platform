import Link from "next/link";

import { PageHeading } from "@/components/portal/page-heading";

const quickStats = [
  { label: "Treinos na semana", value: "3 de 4", trend: "75% concluído" },
  { label: "Sequência atual", value: "12 dias", trend: "+5 dias no ciclo" },
  { label: "Próximo check-in", value: "4 dias", trend: "Dia 30 de agosto" },
];

export default function StudentDashboardPage() {
  return <>
    <PageHeading eyebrow="Quarta-feira, 26 de agosto" title="Olá, Lucas." description="Seu treino está em dia. Hoje o foco é força, técnica e uma execução bem controlada." action={<Link className="button" href="/portal/aluno/treino">Ver treino de hoje</Link>} />
    <section className="app-stats-grid" aria-label="Resumo do ciclo">{quickStats.map((item) => <article className="app-stat-card" key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.trend}</small></article>)}</section>
    <section className="student-dashboard-grid">
      <article className="workout-highlight app-card app-card--dark">
        <div className="app-card__top"><span className="app-card__kicker">Próximo treino</span><span className="status-pill">Plano ativo</span></div>
        <h2>Treino A</h2><p>Força de membros inferiores e estabilidade.</p>
        <div className="workout-meta"><span><strong>7</strong> exercícios</span><span><strong>55</strong> minutos</span><span><strong>Moderado</strong> esforço</span></div>
        <div className="workout-highlight__footer"><div><span>Última execução</span><strong>Segunda, 24 ago.</strong></div><Link className="button button--light" href="/portal/aluno/treino">Abrir treino →</Link></div>
      </article>
      <article className="app-card checkin-card"><div className="app-card__top"><span className="app-card__kicker">Check-in mensal</span><span className="app-countdown">4 dias</span></div><div className="progress-ring" style={{ "--progress": "78%" } as React.CSSProperties}><span>78<small>%</small></span></div><h2>Seu ciclo está quase completo</h2><p>Separe a fita métrica e registre as medidas nas mesmas condições da avaliação anterior.</p><Link className="text-link" href="/portal/aluno/check-in">Ver o que será solicitado →</Link></article>
      <article className="app-card progress-summary"><div className="app-card__top"><span className="app-card__kicker">Evolução recente</span><Link href="/portal/aluno/evolucao">Ver detalhes</Link></div><div className="progress-summary__value"><strong>−2,4</strong><span>kg desde o início</span></div><div className="mini-chart" aria-label="Peso reduziu de 98 para 95,6 quilogramas"><i style={{ height: "85%" }} /><i style={{ height: "78%" }} /><i style={{ height: "70%" }} /><i style={{ height: "62%" }} /><i style={{ height: "54%" }} /><i className="is-current" style={{ height: "43%" }} /></div><div className="mini-chart__labels"><span>20 jul.</span><span>Hoje</span></div></article>
      <article className="app-card coach-message"><div className="coach-message__author"><span className="avatar avatar--coach">DR</span><div><strong>Daniel Rodrigues</strong><small>Seu profissional</small></div><time>Ontem, 18:42</time></div><blockquote>“Boa evolução na consistência, Lucas. No próximo treino, mantenha a carga e cuide do tempo de descanso. A técnica continua sendo prioridade.”</blockquote><button className="app-secondary-button" disabled type="button">Responder pelo WhatsApp em breve</button></article>
    </section>
    <p className="demo-footnote">Todos os nomes, números e registros exibidos nesta área são fictícios.</p>
  </>;
}
