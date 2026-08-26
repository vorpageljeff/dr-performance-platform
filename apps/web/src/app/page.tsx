import Link from "next/link";

import { initialCommercialPlan } from "@dr-performance/contracts";

import { BrandLogo } from "@/components/brand-logo";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    number: "01",
    title: "Treino com contexto",
    description:
      "Plano vigente, instruções claras e histórico preservado a cada atualização.",
  },
  {
    number: "02",
    title: "Evolução visível",
    description:
      "Medidas, frequência e registros organizados para comparar ciclos mensais.",
  },
  {
    number: "03",
    title: "Acompanhamento humano",
    description:
      "Daniel analisa check-ins, adaptações e sinais que precisam de atenção.",
  },
  {
    number: "04",
    title: "Rotina em um só lugar",
    description:
      "Treino, observações, vencimento e comunicação sem depender de controles soltos.",
  },
];

const journey = [
  "Avaliação inicial",
  "Plano personalizado",
  "Execução registrada",
  "Análise mensal",
];

const included = [
  "Plano de treino personalizado",
  "Acompanhamento de Educação Física",
  "Check-in e análise mensal",
  "Relatórios de evolução",
  "Histórico de medidas e treinos",
];

const formattedPrice = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: initialCommercialPlan.currency,
  minimumFractionDigits: 0,
}).format(initialCommercialPlan.priceInCents / 100);

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container site-header__content">
          <Link aria-label="DR Performance — início" href="/">
            <BrandLogo compact eager />
          </Link>

          <nav aria-label="Navegação principal" className="site-nav">
            <a href="#metodo">Método</a>
            <a href="#plano">Plano</a>
            <Link className="button button--small" href="/entrar">
              Acessar portal
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Assessoria personalizada • Daniel Rodrigues</p>
            <h1>
              Disciplina no treino.
              <span>Clareza na evolução.</span>
            </h1>
            <p className="hero__description">
              Seu plano, sua execução e a análise profissional conectados em uma
              jornada simples, segura e feita para o celular.
            </p>
            <div className="hero__actions">
              <a className="button" href="#plano">
                Conhecer o plano
              </a>
              <a className="text-link" href="#metodo">
                Como funciona <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="hero__note">
              Acompanhamento profissional. Sem promessas irreais, sem treino genérico.
            </p>
          </div>

          <div aria-label="Prévia do acompanhamento" className="dashboard-preview">
            <div className="dashboard-preview__topbar">
              <span>Visão do aluno</span>
              <span className="status-pill">Ciclo ativo</span>
            </div>
            <div className="dashboard-preview__body">
              <p className="dashboard-preview__label">Próximo passo</p>
              <h2>Treino A — força e técnica</h2>
              <div className="progress" aria-label="Progresso semanal: 3 de 4 treinos">
                <span style={{ width: "75%" }} />
              </div>
              <div className="dashboard-preview__stats">
                <div>
                  <strong>3/4</strong>
                  <span>treinos</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>dias ativos</span>
                </div>
                <div>
                  <strong>28</strong>
                  <span>dias no ciclo</span>
                </div>
              </div>
              <div className="coach-note">
                <span aria-hidden="true">DR</span>
                <p>
                  <strong>Acompanhamento do Daniel</strong>
                  Seu próximo relatório será consolidado no check-in mensal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="metodo">
        <div className="container">
          <SectionHeading
            description="A plataforma organiza o que hoje costuma ficar espalhado em mensagens, fotos e planilhas."
            eyebrow="O método"
            title="Acompanhamento que não perde o contexto"
          />

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container journey">
          <div>
            <p className="eyebrow eyebrow--light">Uma jornada contínua</p>
            <h2>Do primeiro registro à próxima evolução.</h2>
            <p>
              Cada etapa deixa histórico. Daniel enxerga o que mudou, o aluno sabe o
              que fazer e os próximos ajustes partem de dados reais de execução.
            </p>
          </div>

          <ol className="journey__steps">
            {journey.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="plano">
        <div className="container plan-layout">
          <SectionHeading
            description="Uma única contratação para acessar o acompanhamento disponível na plataforma."
            eyebrow="Plano inicial"
            title="Simples de entender. Completo para evoluir."
          />

          <article className="plan-card">
            <div className="plan-card__header">
              <div>
                <p>Acompanhamento completo</p>
                <strong>
                  {formattedPrice}
                  <span>/mês</span>
                </strong>
              </div>
              <span className="status-pill status-pill--red">Vencimento dia 10</span>
            </div>
            <ul>
              {included.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link className="button button--wide" href="/entrar">
              Entrar na plataforma
            </Link>
            <p className="plan-card__fineprint">
              Fotografias são opcionais. Orientações alimentares são educativas e não
              substituem atendimento nutricional.
            </p>
          </article>
        </div>
      </section>

      <section className="safety-note">
        <div className="container safety-note__content">
          <strong>Treino responsável começa com informação.</strong>
          <p>
            A plataforma apoia o acompanhamento profissional e não realiza diagnóstico.
            Dor ou sinal de risco deve interromper a atividade e receber avaliação adequada.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__content">
          <BrandLogo compact />
          <p>© {new Date().getFullYear()} DR Performance. Todos os direitos reservados.</p>
          <nav aria-label="Links institucionais">
            <Link href="/termos">Termos</Link>
            <Link href="/privacidade">Privacidade</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
