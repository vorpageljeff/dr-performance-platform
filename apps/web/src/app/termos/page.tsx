import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermsPage() {
  return <main className="legal-page"><header><Link href="/"><BrandLogo compact eager /></Link><Link className="text-link" href="/">Voltar ao site</Link></header><article><p className="app-eyebrow">Minuta para validação jurídica</p><h1>Termos de Uso</h1><p className="legal-lead">Este conteúdo é provisório e ainda não representa o instrumento jurídico final da DR Performance.</p><h2>1. Objeto</h2><p>A plataforma organiza treinos, registros de execução, medidas, check-ins e comunicação relacionada ao acompanhamento de Educação Física.</p><h2>2. Responsabilidade do aluno</h2><p>O aluno deve fornecer informações verdadeiras, respeitar as orientações recebidas e interromper o exercício diante de dor, mal-estar ou sinal de risco, procurando atendimento adequado.</p><h2>3. Limites do serviço</h2><p>A plataforma não realiza diagnóstico médico e as orientações alimentares gerais não substituem prescrição ou acompanhamento nutricional individualizado.</p><h2>4. Plano comercial</h2><p>O plano inicial custa R$ 60,00 por mês, com vencimento no dia 10. Regras finais de cobrança, cancelamento, reajuste e reativação dependem da definição do provedor comercial.</p><h2>5. Imagem e privacidade</h2><p>O uso de fotografias para divulgação dependerá de autorização específica, destacada e revogável. O aceite destes termos não substitui esse consentimento.</p><aside>Antes da publicação, esta minuta deverá ser revisada por profissional jurídico.</aside></article></main>;
}
