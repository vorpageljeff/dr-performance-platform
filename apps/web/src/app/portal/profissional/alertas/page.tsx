import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Alertas" };

export default function AlertsPage() {
  return <><PageHeading eyebrow="Segurança e operação" title="Alertas" description="Ocorrências de dor, inatividade, atraso e pendências reunidas por prioridade." /><section className="alert-board"><article className="app-card"><span className="priority-label priority-label--high">Alta</span><h2>Dor no joelho direito</h2><p><strong>Marina Costa</strong> relatou desconforto durante o afundo no treino de hoje.</p><small>Recebido há 2 horas</small><button disabled type="button">Tratar ocorrência em breve</button></article><article className="app-card"><span className="priority-label priority-label--medium">Média</span><h2>Check-in sem análise</h2><p><strong>Rafael Lima</strong> enviou o check-in mensal com percepção de esforço elevada.</p><small>Recebido ontem, 19:34</small><button disabled type="button">Analisar em breve</button></article><article className="app-card"><span className="priority-label priority-label--low">Baixa</span><h2>Sem atividade há 7 dias</h2><p><strong>Ana Souza</strong> não registra execução desde 19 de agosto.</p><small>Gerado hoje, 06:00</small><button disabled type="button">Entrar em contato em breve</button></article></section></>;
}
