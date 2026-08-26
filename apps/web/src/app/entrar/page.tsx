import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesso à plataforma DR Performance.",
};

const demoProfiles = [
  { href: "/portal/aluno", label: "Aluno", description: "Treino, check-in e evolução" },
  { href: "/portal/profissional", label: "Daniel", description: "Alunos, prioridades e alertas" },
  { href: "/portal/gestao", label: "Gestão", description: "Carteira e pagamentos" },
];

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel auth-panel--brand">
        <Link aria-label="DR Performance — início" href="/"><BrandLogo eager /></Link>
        <div className="auth-panel__message">
          <p className="eyebrow eyebrow--light">Disciplina hoje. Resultados para sempre.</p>
          <h1>Seu acompanhamento começa aqui.</h1>
          <p>Treino, evolução e comunicação profissional organizados em uma única jornada.</p>
        </div>
        <Link className="auth-back-link" href="/">← Voltar ao site</Link>
      </section>

      <section className="auth-panel auth-panel--form">
        <div className="auth-card">
          <p className="app-eyebrow">Acesso à plataforma</p>
          <h2>Entre na sua conta</h2>
          <p className="auth-card__intro">A autenticação real será conectada após a escolha do provedor.</p>

          <form className="auth-form">
            <label>E-mail<input autoComplete="email" disabled placeholder="seuemail@exemplo.com" type="email" /></label>
            <label>Senha<input autoComplete="current-password" disabled placeholder="••••••••" type="password" /></label>
            <div className="auth-form__row"><label className="checkbox-field"><input disabled type="checkbox" /> Lembrar de mim</label><Link href="/recuperar-acesso">Esqueci minha senha</Link></div>
            <button className="button button--wide" disabled type="submit">Entrar</button>
          </form>

          <div className="demo-access">
            <div className="demo-access__heading"><span>Teste na Vercel</span><strong>Escolha uma visão demonstrativa</strong></div>
            <div className="demo-access__grid">
              {demoProfiles.map((profile) => <Link href={profile.href} key={profile.href}><strong>{profile.label}</strong><span>{profile.description}</span><b aria-hidden="true">→</b></Link>)}
            </div>
          </div>
          <p className="auth-legal">Ao entrar, você concorda com os <Link href="/termos">Termos de Uso</Link> e a <Link href="/privacidade">Política de Privacidade</Link>.</p>
        </div>
      </section>
    </main>
  );
}
