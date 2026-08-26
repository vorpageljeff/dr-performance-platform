# DEC-001 — Consolidação das decisões do item 23

- **Data:** 25/08/2026
- **Status:** parcialmente aprovada
- **Responsáveis consultados:** responsável do projeto e equipe técnica
- **Fonte principal:** `DR_PERFORMANCE_PROJECT_MASTER.md`, seção 23

## Decisão

As respostas fornecidas pelo responsável foram incorporadas ao arquivo mestre. Para evitar
que uma intenção comercial seja interpretada como decisão jurídica, clínica ou técnica
completa, cada resposta foi classificada como confirmada, provisória ou parcial.

O arquivo mestre contém o texto normativo atualizado. Este registro explica os ajustes de
segurança feitos durante a consolidação.

## Ajustes aplicados

1. O preço de `R$ 60,00` foi tratado como mensal devido ao vencimento recorrente no dia 10.
   O acesso cobre as funcionalidades da versão contratada, e não todo recurso futuro.
2. “Auxílio dieta” foi descrito como orientação alimentar geral. Prescrição dietética
   individualizada não faz parte do escopo do profissional de Educação Física sem atuação de
   profissional legalmente habilitado.
3. Fotografias de evolução permanecem opcionais. Uso em publicidade exige autorização
   independente do contrato principal.
4. O desejo de retenção prolongada foi convertido em obrigação de criar uma tabela de
   retenção por finalidade. Não foi adotada retenção indefinida.
5. Render, Vercel e Git definem hospedagem/versionamento, mas não resolvem os provedores de
   autenticação, banco PostgreSQL e armazenamento privado.
6. Pagamento integrado foi aprovado como direção, mas ainda depende da escolha do provedor,
   modalidades e titular legal da conta recebedora.
7. A lista inicial de medidas foi extraída do relatório visual fornecido, sem copiar os valores,
   nome, fotografias ou outros dados pessoais presentes no exemplo.
8. A marca vermelha, preta e branca apresentada separadamente foi tratada como referência
   atual. A marca azul incorporada ao relatório não deve ser reaproveitada como asset.

## Impacto técnico

- O frontend e o backend passam a ter deploys independentes.
- A API deverá possuir contrato versionado e autenticação segura entre origens.
- Fotos exigem armazenamento privado, autorização por vínculo e URLs temporárias.
- Pagamento, WhatsApp e arquivos devem usar adapters para permitir troca de provedor.
- Consentimentos devem guardar finalidade, versão do texto, data, origem e revogação.
- Suspensão de acesso nunca deve excluir o histórico do aluno.

## Fontes normativas para validação

- LGPD — Lei nº 13.709/2018: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm>
- Direitos dos titulares — ANPD: <https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares>
- Agentes de pequeno porte — Resolução CD/ANPD nº 2/2022: <https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022>
- Profissão de nutricionista — Lei nº 8.234/1991: <https://www.planalto.gov.br/ccivil_03/leis/1989_1994/l8234.htm>
- Código de Defesa do Consumidor: <https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm>
- Comércio eletrônico — Decreto nº 7.962/2013: <https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm>
- Direito de imagem — Código Civil, arts. 18 a 21: <https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm>
- Referência oficial do PAR-Q+: <https://eparmedx.com/print-versions-of-par-q/>

## Próxima revisão

Revisar esta decisão antes do início das Fases 1, 2, 3 e 5 ou sempre que um dos provedores
pendentes for escolhido.
