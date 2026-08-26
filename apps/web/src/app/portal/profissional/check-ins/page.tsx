import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Check-ins pendentes" };

export default function ProfessionalCheckInsPage() {
  return <><PageHeading eyebrow="Acompanhamento mensal" title="Check-ins" description="Respostas aguardando análise profissional, organizadas por prioridade e prazo." /><section className="empty-feature app-card"><span>05</span><h2>Check-ins aguardando tratamento</h2><p>A interface de leitura, comparação de períodos e parecer profissional será conectada à API na fase de acompanhamento.</p><div><b>2 novos</b><b>2 em análise</b><b>1 aguardando complemento</b></div><button className="button" disabled type="button">Abrir fila em breve</button></section></>;
}
