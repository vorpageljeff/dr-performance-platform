import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = { title: "Recuperar acesso" };

export default function RecoverAccessPage() {
  return <main className="simple-auth-page"><Link href="/"><BrandLogo compact eager /></Link><section className="simple-auth-card"><span className="state-page__mark">DR</span><p className="app-eyebrow">Recuperação de acesso</p><h1>Vamos recuperar sua conta.</h1><p>Este fluxo será ativado junto com a autenticação. No teste atual, use um dos perfis demonstrativos.</p><label>E-mail<input disabled placeholder="seuemail@exemplo.com" type="email" /></label><button className="button button--wide" disabled type="button">Enviar instruções</button><Link className="text-link" href="/entrar">← Voltar para entrar</Link></section></main>;
}
