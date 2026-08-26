import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Check-in" };

export default function CheckInPage() {
  return <><PageHeading eyebrow="Próxima abertura • 30 de agosto" title="Check-in mensal" description="Uma revisão curta para Daniel entender sua rotina, sua resposta ao treino e o que precisa ser ajustado." /><section className="checkin-layout"><article className="app-card checkin-preview"><span className="app-card__kicker">O que você vai registrar</span><h2>Prepare-se em poucos minutos</h2><ol><li><span>01</span><div><strong>Rotina e aderência</strong><p>Frequência, sono, energia e dificuldade para seguir o plano.</p></div></li><li><span>02</span><div><strong>Peso e medidas</strong><p>Use sua fita métrica nas mesmas condições do registro anterior.</p></div></li><li><span>03</span><div><strong>Dor ou desconforto</strong><p>Informe qualquer sintoma, mesmo que não tenha interrompido o treino.</p></div></li><li><span>04</span><div><strong>Percepção do ciclo</strong><p>Conte o que funcionou e o que precisa de adaptação.</p></div></li></ol></article><aside className="app-card checkin-status"><span className="status-pill">Agendado</span><h2>Disponível em 4 dias</h2><p>Você receberá um aviso no WhatsApp quando o formulário estiver liberado.</p><div><span>Periodicidade<strong>Mensal</strong></span><span>Último envio<strong>30 jul.</strong></span><span>Análise prevista<strong>Até 3 dias úteis</strong></span></div><button className="button button--wide" disabled type="button">Responder quando disponível</button></aside></section></>;
}
