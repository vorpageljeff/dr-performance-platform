import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Pagamentos" };

export default function PaymentsPage() {
  return <><PageHeading eyebrow="Comercial" title="Pagamentos" description="A cobrança real será exibida aqui após a escolha e integração do provedor." /><section className="payment-placeholder app-card"><div><span className="app-card__kicker">Competência agosto de 2026</span><h2>22 de 24 pagamentos confirmados</h2><p>O protótipo já prevê estados de confirmação, pendência, falha, suspensão e conciliação manual auditada.</p></div><div className="payment-summary"><span>Confirmado<strong>R$ 1.320</strong></span><span>Pendente<strong>R$ 120</strong></span><span>Taxas<strong>—</strong></span><span>Líquido<strong>—</strong></span></div><button className="button" disabled type="button">Conectar provedor antes de cobrar</button></section></>;
}
