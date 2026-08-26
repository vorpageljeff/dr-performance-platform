import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Ocorrências" };

export default function AdminOccurrencesPage() {
  return <><PageHeading eyebrow="Operação e auditoria" title="Ocorrências" description="Resumo gerencial de alertas abertos, sem substituir a análise técnica do profissional responsável." /><section className="alert-board"><article className="app-card"><span className="priority-label priority-label--high">Alta</span><h2>1 alerta de segurança</h2><p>Ocorrência de dor aguardando tratamento pelo profissional.</p><small>Dentro do prazo operacional</small></article><article className="app-card"><span className="priority-label priority-label--medium">Média</span><h2>2 pendências</h2><p>Check-in sem análise e pagamento com confirmação pendente.</p><small>Atualizado há 12 minutos</small></article><article className="app-card"><span className="priority-label priority-label--low">Auditoria</span><h2>Nenhum evento crítico</h2><p>Alterações administrativas relevantes aparecerão nesta área.</p><small>Dados demonstrativos</small></article></section></>;
}
