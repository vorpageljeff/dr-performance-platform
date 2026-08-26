import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return <main className="legal-page"><header><Link href="/"><BrandLogo compact eager /></Link><Link className="text-link" href="/">Voltar ao site</Link></header><article><p className="app-eyebrow">Minuta para validação jurídica</p><h1>Política de Privacidade</h1><p className="legal-lead">Resumo transparente do tratamento pretendido. O texto final dependerá dos fornecedores efetivamente contratados.</p><h2>Dados tratados</h2><p>Dados cadastrais, contato, contratação, registros de treino, check-ins, medidas corporais, informações de saúde declaradas e fotografias opcionais.</p><h2>Finalidades</h2><p>Prestar o acompanhamento contratado, personalizar o treino, avaliar evolução, administrar pagamentos, cumprir obrigações legais e proteger a segurança da plataforma.</p><h2>Acesso e segurança</h2><p>Dados de saúde, medidas e fotografias serão tratados como sensíveis. O acesso será limitado ao aluno, ao profissional responsável e aos administradores autorizados.</p><h2>Direitos do titular</h2><p>Solicitações de confirmação, acesso, correção, portabilidade, informação, oposição ou eliminação serão analisadas pelo responsável definido pela operação.</p><h2>Uso de imagem</h2><p>Fotografias de evolução não serão usadas em publicidade sem consentimento específico. A recusa não impedirá o uso normal do serviço.</p><aside>Contato LGPD provisório: Jefferson Vorpagel. Canal e prazo operacional ainda precisam ser publicados.</aside></article></main>;
}
