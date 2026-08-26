import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Gestão de alunos" };

export default function AdminStudentsPage() {
  return <><PageHeading eyebrow="Carteira comercial" title="Alunos" description="Visão administrativa de contratos, situação de acesso e vínculo profissional." action={<button className="button" disabled type="button">Cadastrar aluno em breve</button>} /><section className="empty-feature app-card"><span>24</span><h2>Alunos ativos na carteira</h2><p>A gestão completa reunirá contratação, profissional responsável, onboarding, vencimento e situação de acesso sem expor dados de saúde desnecessários.</p><div><b>21 em dia</b><b>2 pendentes</b><b>1 suspenso</b></div><button className="button" disabled type="button">Abrir gestão detalhada em breve</button></section></>;
}
