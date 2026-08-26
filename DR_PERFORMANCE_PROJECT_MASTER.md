# DR Performance — Arquivo Mestre do Projeto

> Documento de referência para planejamento, desenvolvimento e validação da Plataforma DR Performance com o Codex.

## 1. Instrução principal para o Codex

Você está construindo a **Plataforma DR Performance**, uma aplicação web responsiva para gestão de assessoria fitness personalizada. Antes de implementar qualquer funcionalidade:

1. leia este documento integralmente;
2. inspecione o repositório e preserve tudo o que já existir;
3. apresente um plano curto da etapa atual;
4. implemente somente o escopo da fase solicitada;
5. não invente regras que contrariem este documento;
6. quando houver ambiguidade relevante, registre a decisão como pendência e solicite confirmação;
7. ao terminar cada fase, execute testes, verificação visual e apresente o que foi concluído, o que falta e como validar;
8. nunca exponha segredos, tokens, dados pessoais ou informações sensíveis em código, logs, commits ou respostas;
9. use dados fictícios para desenvolvimento e demonstração;
10. mantenha a aplicação executável após cada entrega.

Este arquivo é a fonte principal para produto, processos, regras de negócio e critérios de aceite. Decisões registradas posteriormente no repositório podem complementar este documento, mas não devem alterá-lo silenciosamente.

---

## 2. Identificação do produto

- **Nome:** Plataforma DR Performance
- **Marca:** DR Performance by Daniel Rodrigues
- **Segmento:** assessoria fitness personalizada
- **Proposta:** centralizar a jornada do aluno, melhorar o acompanhamento profissional, reduzir controles manuais e apoiar decisões com dados de execução e evolução.
- **Público principal:** alunos da assessoria, profissionais responsáveis pelo acompanhamento e gestores da DR Performance.
- **Idioma inicial:** português do Brasil (`pt-BR`)
- **Moeda:** real brasileiro (`BRL`)
- **Fuso horário padrão:** `America/Sao_Paulo`

### Identidade visual inicial

- Usar como base a logo com o monograma **DR**, halteres laterais e linha de eletrocardiograma.
- Paleta principal: vermelho, preto e branco.
- Vermelho sugerido: `#D71920`.
- Preto sugerido: `#050505`.
- Fundo claro: `#FFFFFF` ou `#F7F7F7`.
- A identidade deve transmitir força, saúde, acompanhamento e evolução.
- Evitar excesso de gradientes, visual genérico de academia, interface agressiva ou baixa legibilidade.
- A logo definitiva poderá ser refinada; portanto, cores e arquivos da marca devem ficar centralizados em tokens e assets substituíveis.

---

## 3. Visão do problema

Atualmente, o atendimento depende de WhatsApp, Instagram, planilhas, documentos, fotografias, formulários e anotações distribuídas. Isso provoca:

- perda ou duplicidade de informações;
- dificuldade para consultar o histórico do aluno;
- cobrança manual de dados e check-ins;
- baixa rastreabilidade das versões do treino;
- pouca visibilidade da adesão e da evolução;
- dificuldade para identificar dor, inatividade ou risco de cancelamento;
- renovação dependente de agenda ou memória;
- risco maior no tratamento de fotografias e dados relacionados à saúde.

## 4. Visão da solução

A plataforma deverá organizar o ciclo completo:

`Interessado → Contratação → Onboarding → Triagem → Plano → Execução → Check-in → Análise → Ajuste/Versionamento → Renovação ou Encerramento`

O sistema apoiará a decisão profissional, mas não substituirá avaliação humana e não realizará diagnóstico ou prescrição médica, nutricional ou fisioterapêutica.

---

## 5. Objetivos do produto

### 5.1 Objetivos do negócio

- aumentar a capacidade de acompanhamento sem perder personalização;
- reduzir tarefas manuais e retrabalho;
- melhorar a experiência e a percepção de valor do aluno;
- aumentar adesão, renovação e retenção;
- registrar motivos de cancelamento e oportunidades de melhoria;
- oferecer visão operacional e gerencial da assessoria.

### 5.2 Objetivos do usuário

O aluno deve conseguir:

- entender o que deve fazer;
- acessar sempre o plano vigente;
- registrar treinos com pouco esforço;
- comunicar dor, dificuldade e observações;
- acompanhar sua evolução;
- responder check-ins de forma simples;
- saber quando seu plano vence.

O profissional deve conseguir:

- receber dados iniciais completos;
- avaliar e priorizar alunos;
- criar e versionar planos;
- acompanhar execução, frequência e evolução;
- identificar rapidamente quem precisa de atenção;
- manter histórico de decisões e ajustes.

O gestor deve conseguir:

- acompanhar alunos, planos e vencimentos;
- controlar situação contratual e financeira;
- acompanhar retenção e cancelamentos;
- administrar profissionais, acessos e indicadores.

### 5.3 Indicadores iniciais

- percentual de onboarding concluído;
- tempo entre contratação e liberação do primeiro plano;
- treinos planejados versus concluídos;
- alunos sem atividade nos últimos 7, 14 e 30 dias;
- check-ins respondidos no prazo;
- planos próximos do vencimento;
- taxa de renovação;
- taxa e motivos de cancelamento;
- registros de dor ou desconforto pendentes de análise;
- satisfação declarada pelo aluno.

---

## 6. Escopo do MVP

O MVP deve validar a operação principal da assessoria. Deve incluir:

1. autenticação e recuperação de acesso;
2. perfis de aluno, profissional e administrador;
3. cadastro e gestão de alunos;
4. onboarding/anamnese digital;
5. triagem e pendências;
6. biblioteca básica de exercícios;
7. criação e publicação de planos de treino;
8. versionamento de planos;
9. execução e registro do treino;
10. registro de dor, esforço e observações;
11. check-in periódico configurável;
12. painel individual de evolução;
13. painel profissional com alertas operacionais;
14. controle de plano contratado, datas e situação do pagamento;
15. alertas internos de vencimento e inatividade;
16. histórico de ações relevantes;
17. consentimentos e controles básicos de privacidade.

### 6.1 Fora do MVP

- prescrição nutricional automática;
- diagnóstico clínico;
- telemedicina;
- inteligência artificial tomando decisões autônomas;
- integração com smartwatch ou dispositivos esportivos;
- marketplace de profissionais;
- rede social interna;
- gamificação complexa;
- cobrança recorrente automatizada;
- aplicativo móvel nativo;
- integração com academias ou catracas;
- reconhecimento automático de exercícios por vídeo.

Esses itens podem ser planejados após a validação do fluxo principal.

---

## 7. Atores e permissões

### 7.1 Aluno

Pode:

- consultar e editar dados permitidos do próprio perfil;
- preencher onboarding e check-ins;
- visualizar somente o plano vigente publicado;
- executar e registrar os próprios treinos;
- enviar medidas, fotografias e observações;
- consultar o próprio histórico e evolução;
- visualizar situação e vencimento do plano;
- solicitar correção ou exclusão de dados conforme processo definido.

Não pode:

- acessar outros alunos;
- alterar plano publicado;
- visualizar notas internas do profissional;
- alterar pagamentos ou permissões.

### 7.2 Profissional

Pode:

- acessar somente os alunos atribuídos a ele, salvo permissão administrativa;
- revisar onboarding, check-ins e ocorrências;
- criar, revisar, publicar e versionar planos;
- registrar notas profissionais;
- analisar evolução e alertas;
- encerrar alertas mediante justificativa;
- solicitar informações adicionais ao aluno.

### 7.3 Administrador/Gestor

Pode:

- gerenciar alunos e profissionais;
- atribuir responsáveis;
- configurar planos comerciais e status de pagamento;
- consultar indicadores agregados;
- controlar vencimentos, renovações e cancelamentos;
- administrar permissões e configurações;
- consultar trilha de auditoria, respeitando o princípio do menor privilégio.

### 7.4 Futuro perfil de apoio

O modelo deve permitir adicionar, no futuro, recepção, financeiro, nutricionista ou fisioterapeuta com permissões próprias. Não conceder acesso amplo por padrão.

---

## 8. Processo AS-IS resumido

1. interessado pede informações em rede social ou WhatsApp;
2. profissional apresenta o serviço manualmente;
3. pagamento é confirmado manualmente;
4. dados são enviados por mensagens, imagens e formulários separados;
5. profissional realiza avaliação manual;
6. treino é enviado por PDF, imagem ou planilha;
7. aluno executa sem registro padronizado;
8. check-in e ajustes são realizados por WhatsApp;
9. renovação depende de controle manual.

## 9. Processo TO-BE detalhado

### 9.1 Cadastro e contratação

- criar cadastro do interessado/aluno;
- escolher ou atribuir plano comercial;
- registrar aceite de termos;
- registrar início, vencimento e situação;
- iniciar pagamento pelo provedor integrado escolhido;
- confirmar pagamento por webhook idempotente, mantendo conciliação administrativa como contingência;
- liberar onboarding após condição válida.

### 9.2 Onboarding

Coletar, no mínimo:

- nome completo;
- data de nascimento;
- contato;
- objetivo principal e secundário;
- altura e peso inicial;
- nível de experiência;
- frequência desejada;
- dias e horários disponíveis;
- local de treino;
- equipamentos disponíveis;
- histórico de lesões, dores e limitações declaradas;
- condições relevantes informadas pelo aluno;
- medicamentos declarados, quando o formulário for juridicamente validado;
- qualidade do sono e rotina;
- preferências e exercícios evitados;
- medidas corporais configuráveis, seguindo inicialmente o protocolo definido na seção 23;
- fotografias opcionais, com consentimento específico;
- confirmação de prontidão para atividade física;
- contato de emergência opcional.

Campos sensíveis devem ter finalidade clara e acesso restrito.

### 9.3 Triagem

O sistema deve:

- marcar onboarding como pendente, enviado, em análise, com pendência, aprovado ou reprovado/encaminhado;
- destacar respostas que exigem atenção profissional;
- permitir solicitar complemento;
- registrar responsável, data e decisão;
- impedir publicação do plano enquanto a triagem não estiver aprovada;
- permitir encaminhamento externo sem armazenar diagnóstico.

### 9.4 Plano de treino

Cada plano deve possuir:

- título;
- objetivo;
- período de vigência;
- frequência semanal;
- observações gerais;
- sessões/dias de treino;
- ordem dos exercícios;
- exercício;
- séries;
- repetições ou duração;
- intervalo;
- carga sugerida opcional;
- intensidade/esforço esperado;
- instruções e adaptações;
- mídia demonstrativa opcional;
- situação: rascunho, em revisão, publicado, substituído ou encerrado;
- número da versão.

### 9.5 Publicação e versionamento

- somente plano aprovado pode ser publicado;
- apenas uma versão deve estar vigente para o aluno em uma mesma finalidade/período;
- alteração de conteúdo publicado deve gerar nova versão;
- versões anteriores são imutáveis;
- registrar autor, data, justificativa e resumo das mudanças;
- aluno visualiza a versão vigente;
- profissional e gestor visualizam o histórico.

### 9.6 Execução do treino

O aluno deve poder:

- iniciar uma sessão;
- visualizar os exercícios na ordem definida;
- registrar séries, repetições, carga e duração;
- marcar exercício como concluído, adaptado ou não realizado;
- informar esforço percebido;
- registrar dor ou desconforto;
- incluir observação;
- pausar e retomar;
- finalizar a sessão;
- visualizar um resumo.

### 9.7 Ocorrência de dor

- dor deve gerar um alerta para o profissional;
- coletar região, intensidade informada, momento e observação;
- não apresentar diagnóstico automático;
- o profissional deve registrar análise e ação tomada;
- o sistema pode recomendar interromper o exercício e procurar avaliação, usando texto previamente validado;
- alertas críticos não devem ser encerrados sem justificativa.

### 9.8 Check-in

O gestor/profissional deve configurar periodicidade. O formulário deve permitir:

- peso e medidas;
- fotografias opcionais;
- frequência percebida;
- dificuldade do plano;
- disposição;
- sono;
- dor ou desconforto;
- satisfação;
- evolução percebida;
- dificuldades da rotina;
- comentário livre.

Situações: agendado, aberto, enviado, analisado, atrasado ou dispensado.

### 9.9 Monitoramento

O painel profissional deve priorizar:

- dor/desconforto sem análise;
- onboarding pendente;
- check-in atrasado;
- aluno inativo;
- baixa adesão;
- plano sem versão vigente;
- plano próximo do vencimento;
- contrato/plano comercial próximo do vencimento;
- baixa satisfação;
- renovação pendente.

### 9.10 Renovação e encerramento

- avisar gestor/profissional antes do vencimento;
- permitir renovar mantendo histórico;
- registrar novo período de contrato;
- registrar cancelamento e motivo;
- revogar acesso conforme política definida;
- preservar dados pelo prazo aplicável;
- permitir reativação sem apagar o histórico.

---

## 10. Regras de negócio

### RB-001 — Ativação

O aluno só pode acessar funcionalidades contratadas quando sua conta e seu vínculo estiverem ativos.

### RB-002 — Liberação do onboarding

O onboarding é liberado após criação do vínculo e confirmação da condição comercial válida pelo
provedor de pagamento. Ajustes manuais ficam restritos a usuários autorizados, devem exigir
justificativa e gerar registro de auditoria.

### RB-003 — Campos obrigatórios

O aluno não pode enviar o onboarding enquanto houver campos obrigatórios pendentes.

### RB-004 — Aprovação da triagem

Um plano não pode ser publicado para aluno com triagem pendente ou bloqueada.

### RB-005 — Plano vigente

O aluno visualiza somente o plano publicado vigente. Rascunhos e versões substituídas são restritos ao profissional e à gestão.

### RB-006 — Imutabilidade de versão

Plano publicado não pode ser alterado diretamente. Toda mudança deve criar nova versão.

### RB-007 — Registro histórico

Execuções devem apontar para a versão exata do plano utilizada no momento da sessão.

### RB-008 — Dor e segurança

Registro de dor cria alerta e não gera diagnóstico. O histórico do registro não pode ser apagado por usuário comum.

### RB-009 — Acesso por vínculo

Profissional só acessa alunos sob sua responsabilidade, salvo papel administrativo explícito.

### RB-010 — Check-in

Cada agendamento gera, no máximo, uma resposta válida por aluno, admitindo correção versionada ou reabertura registrada.

### RB-011 — Inatividade

Os limites de inatividade devem ser configuráveis. Sugestão inicial: atenção com 7 dias, risco com 14 dias e crítico com 30 dias.

### RB-012 — Cancelamento

Encerramento exige motivo e data de vigência. O histórico não deve ser apagado automaticamente.

### RB-013 — Auditoria

Publicação de plano, mudança de permissão, decisão de triagem, alteração financeira e encerramento de alerta devem ser auditáveis.

### RB-014 — Exclusão lógica

Registros de negócio devem usar arquivamento/exclusão lógica quando a remoção física prejudicar a rastreabilidade ou contrariar retenção legal.

### RB-015 — Escopo profissional

O sistema não deve apresentar linguagem que caracterize diagnóstico ou prescrição fora da habilitação do profissional responsável.

---

## 11. Requisitos funcionais

### Autenticação e acesso

- **RF-001:** autenticar usuário por e-mail e senha ou provedor configurado;
- **RF-002:** recuperar acesso com fluxo seguro;
- **RF-003:** aplicar controle de acesso por papel e vínculo;
- **RF-004:** permitir desativação de sessão e conta;
- **RF-005:** registrar acessos e eventos relevantes.

### Gestão de usuários e alunos

- **RF-010:** cadastrar e editar aluno;
- **RF-011:** cadastrar profissional;
- **RF-012:** atribuir aluno a profissional;
- **RF-013:** pesquisar e filtrar alunos;
- **RF-014:** exibir linha do tempo do aluno;
- **RF-015:** arquivar e reativar aluno.

### Comercial

- **RF-020:** cadastrar planos comerciais;
- **RF-021:** registrar vínculo do aluno com plano;
- **RF-022:** integrar cobrança e registrar a situação de pagamento a partir de eventos idempotentes do provedor;
- **RF-023:** controlar início e vencimento;
- **RF-024:** registrar renovação e cancelamento;
- **RF-025:** alertar vencimentos próximos.
- **RF-026:** permitir conciliação administrativa auditada quando houver falha ou divergência do provedor.

### Onboarding e triagem

- **RF-030:** disponibilizar formulário de onboarding;
- **RF-031:** salvar progresso;
- **RF-032:** validar obrigatoriedade;
- **RF-033:** permitir anexos e fotografias;
- **RF-034:** encaminhar para triagem;
- **RF-035:** registrar decisão e pendências;
- **RF-036:** notificar aluno sobre complementação.

### Exercícios e planos

- **RF-040:** cadastrar biblioteca de exercícios;
- **RF-041:** classificar por grupo muscular e equipamento;
- **RF-042:** criar plano e sessões;
- **RF-043:** ordenar exercícios;
- **RF-044:** duplicar estrutura de plano como novo rascunho;
- **RF-045:** publicar plano;
- **RF-046:** gerar nova versão;
- **RF-047:** consultar histórico de versões.

### Execução

- **RF-050:** iniciar e finalizar treino;
- **RF-051:** registrar desempenho por exercício e série;
- **RF-052:** registrar esforço;
- **RF-053:** marcar exercício não realizado e motivo;
- **RF-054:** registrar dor ou desconforto;
- **RF-055:** exibir resumo e histórico.

### Check-in e evolução

- **RF-060:** configurar modelo e periodicidade de check-in;
- **RF-061:** gerar agendamento;
- **RF-062:** enviar resposta;
- **RF-063:** analisar check-in;
- **RF-064:** exibir evolução de peso, medidas, frequência e cargas;
- **RF-065:** comparar períodos e fotografias com controle de acesso.

### Alertas e gestão

- **RF-070:** gerar alertas operacionais;
- **RF-071:** priorizar alertas por severidade;
- **RF-072:** atribuir alerta;
- **RF-073:** registrar tratamento e encerramento;
- **RF-074:** exibir painel profissional;
- **RF-075:** exibir painel gerencial agregado.

---

## 12. Requisitos não funcionais

- **RNF-001 — Responsividade:** funcionar adequadamente em celular, tablet e desktop.
- **RNF-002 — Acessibilidade:** buscar WCAG 2.2 nível AA nas jornadas principais.
- **RNF-003 — Desempenho:** telas principais devem responder rapidamente em conexão móvel comum; paginação e carregamento progressivo são obrigatórios em listas extensas.
- **RNF-004 — Segurança:** senhas nunca são armazenadas em texto puro; sessões e cookies devem seguir práticas seguras.
- **RNF-005 — Privacidade:** dados pessoais e sensíveis devem ter finalidade, acesso limitado e proteção compatível.
- **RNF-006 — Auditoria:** eventos críticos devem guardar autor, data, ação e referência do registro.
- **RNF-007 — Observabilidade:** erros devem ser rastreáveis sem registrar conteúdo sensível.
- **RNF-008 — Integridade:** operações que alteram múltiplos registros devem ser transacionais.
- **RNF-009 — Backup:** definir política de backup e restauração antes de produção.
- **RNF-010 — Testabilidade:** regras de negócio devem ficar separadas da camada visual.
- **RNF-011 — Manutenibilidade:** usar TypeScript estrito, lint, formatação e componentes reutilizáveis.
- **RNF-012 — Internacionalização futura:** textos não devem ficar espalhados de forma que impeça tradução posterior.

---

## 13. Arquitetura técnica sugerida

### 13.1 Stack inicial

- **Frontend web:** Next.js com App Router e TypeScript, hospedado na Vercel;
- **Backend/API:** serviço independente hospedado no Render; tecnologia e contrato da API ainda precisam ser definidos;
- **Estilo:** Tailwind CSS e componentes acessíveis;
- **Banco:** PostgreSQL; provedor gerenciado ainda pendente;
- **ORM:** Drizzle ORM, escolhido na Fase 0 por manter schema tipado e migrações SQL sem geração de cliente;
- **Autenticação:** solução madura compatível com RBAC e sessão segura; provedor ainda pendente;
- **Arquivos:** armazenamento de objetos privado com URLs temporárias; provedor ainda pendente;
- **Validação:** schemas compartilhados entre servidor e formulários;
- **Testes:** unitários, integração e ponta a ponta;
- **Hospedagem:** frontend na Vercel, backend no Render e repositório Git privado na conta do responsável técnico;
- **Monitoramento:** logs estruturados, rastreamento de erro e métricas essenciais.

Evitar dependência rígida de fornecedor nas regras centrais. Autenticação, arquivos, notificações e pagamentos devem ser acessados por serviços/adapters.

### 13.2 Princípios

- Server Components por padrão; Client Components somente quando necessários;
- validação e autorização sempre no servidor;
- ações sensíveis nunca dependem apenas de ocultação visual;
- domínio separado de interface e infraestrutura;
- formulários com validação no cliente e no servidor;
- URLs e identificadores não devem permitir enumeração de dados de terceiros;
- nenhuma chave secreta no bundle do navegador;
- migrações de banco versionadas;
- seed apenas com dados fictícios;
- estados de carregamento, vazio, erro e sucesso em todas as jornadas.

### 13.3 Estrutura sugerida

```text
src/
  app/
    (public)/
    (auth)/
    (student)/
    (professional)/
    (admin)/
    api/
  components/
    ui/
    forms/
    charts/
    domain/
  domain/
    users/
    onboarding/
    training-plans/
    workouts/
    check-ins/
    alerts/
    subscriptions/
  lib/
    auth/
    db/
    storage/
    validation/
    observability/
  services/
  tests/
prisma/
public/
  brand/
docs/
```

---

## 14. Modelo de dados inicial

### Organização e acesso

- `Organization`
- `User`
- `Role`
- `UserRole`
- `ProfessionalProfile`
- `StudentProfile`
- `ProfessionalStudentAssignment`

### Comercial

- `CommercialPlan`
- `StudentSubscription`
- `PaymentRecord`
- `RenewalRecord`
- `CancellationReason`

### Onboarding

- `OnboardingForm`
- `OnboardingSubmission`
- `OnboardingAnswer`
- `ConsentRecord`
- `StudentMeasurement`
- `StudentPhoto`
- `TriageReview`
- `TriagePendingItem`

### Treinos

- `Exercise`
- `ExerciseMedia`
- `TrainingPlan`
- `TrainingPlanVersion`
- `TrainingSessionTemplate`
- `TrainingExercisePrescription`
- `WorkoutExecution`
- `WorkoutExerciseExecution`
- `WorkoutSetExecution`
- `PainOccurrence`

### Acompanhamento

- `CheckInTemplate`
- `CheckInSchedule`
- `CheckInSubmission`
- `CheckInAnswer`
- `ProfessionalNote`
- `OperationalAlert`
- `AlertAction`
- `Notification`
- `AuditEvent`

### Relações essenciais

```text
Organization
├── Users
├── CommercialPlans
└── Students
    ├── Professional assignments
    ├── Subscriptions
    ├── Onboarding submissions
    ├── Measurements and photos
    ├── Training plans
    │   └── Versions
    │       └── Session templates
    │           └── Exercise prescriptions
    ├── Workout executions
    ├── Check-ins
    ├── Alerts
    └── Audit events
```

### Regras de modelagem

- usar UUID/CUID não sequencial para identificadores públicos;
- todas as tabelas de negócio devem possuir `createdAt` e `updatedAt`;
- registros arquiváveis devem possuir `archivedAt` ou status equivalente;
- datas devem ser armazenadas em UTC e exibidas no fuso configurado;
- `TrainingPlanVersion` deve concentrar o conteúdo imutável da versão;
- execuções devem referenciar a versão utilizada;
- anexos devem guardar metadados, não o binário no banco relacional;
- dados de auditoria não devem depender somente de logs externos.

---

## 15. Mapa de telas

### Públicas

- página inicial institucional;
- apresentação da assessoria;
- planos/contato;
- login;
- recuperação de acesso;
- termos e privacidade.

### Aluno

- início/resumo do dia;
- onboarding;
- treino vigente;
- execução do treino;
- histórico de treinos;
- check-in;
- evolução;
- plano e vencimento;
- perfil e consentimentos;
- notificações.

### Profissional

- painel de prioridades;
- lista de alunos;
- perfil 360° do aluno;
- fila de triagem;
- construtor de plano;
- histórico de versões;
- check-ins pendentes;
- alertas e ocorrências;
- biblioteca de exercícios;
- agenda/resumo operacional.

### Administrador

- painel gerencial;
- usuários e permissões;
- profissionais e atribuições;
- alunos;
- planos comerciais;
- pagamentos e vencimentos;
- renovação e cancelamentos;
- modelos de check-in;
- configurações;
- auditoria.

---

## 16. API/ações de servidor iniciais

As rotas exatas podem seguir o padrão do framework, mas devem cobrir:

- autenticação e sessão;
- CRUD controlado de alunos e profissionais;
- atribuição de profissional;
- planos comerciais e vínculos;
- envio e revisão do onboarding;
- triagem e pendências;
- exercícios e mídias;
- criação, revisão e publicação de plano;
- criação de nova versão;
- início, atualização e finalização de treino;
- ocorrência de dor;
- agendamento e envio de check-in;
- medidas e evolução;
- alertas, atribuição e resolução;
- notificações;
- renovação e cancelamento;
- auditoria.

Toda ação deve:

1. autenticar;
2. autorizar;
3. validar entrada;
4. executar transação quando necessário;
5. registrar auditoria se crítica;
6. retornar erro seguro e útil;
7. nunca retornar dados além do necessário.

---

## 17. Segurança, privacidade e LGPD

Tratar informações de saúde, limitações, fotografias e medidas como dados de alta sensibilidade operacional.

### Controles mínimos

- princípio do menor privilégio;
- isolamento por organização e vínculo profissional-aluno;
- armazenamento privado de fotografias e anexos;
- URLs temporárias para acesso a arquivos;
- consentimento específico para fotografias e dados sensíveis;
- registro de versão do termo aceito;
- trilha de auditoria para acessos e alterações críticas;
- política de retenção e descarte;
- canal para solicitação de acesso, correção e exclusão;
- proteção contra enumeração, CSRF, XSS, injeção e abuso de upload;
- limites de tamanho e tipos permitidos em arquivos;
- remoção de metadados desnecessários de imagens, quando aplicável;
- logs sem respostas de anamnese, tokens ou conteúdo sensível;
- revisão jurídica antes de produção.

### Textos obrigatórios

- a plataforma não substitui avaliação profissional;
- alertas não constituem diagnóstico;
- em caso de dor importante ou sinal de risco, interromper a atividade e procurar atendimento qualificado;
- prescrição nutricional individualizada somente por profissional habilitado.

---

## 18. Design e experiência

### Direção visual

- visual esportivo premium, limpo e confiável;
- vermelho usado como destaque, não como fundo dominante em todas as telas;
- preto para identidade e contraste;
- branco/cinza claro para áreas extensas;
- vermelho de alerta deve ser semanticamente diferente ou acompanhado de ícone/texto;
- tipografia legível, com aparência moderna;
- cards e gráficos com pouco ruído visual;
- área do aluno otimizada para uso com uma mão no celular;
- botões de execução do treino grandes e claros.

### Estados obrigatórios

Cada tela relevante deve prever:

- carregando;
- vazio;
- sucesso;
- erro;
- sem permissão;
- conteúdo arquivado;
- conexão instável, quando houver ação em andamento.

### Acessibilidade

- contraste adequado;
- foco de teclado visível;
- labels reais nos campos;
- mensagens de erro associadas ao campo;
- navegação por teclado;
- não depender apenas de cor;
- textos alternativos em imagens relevantes;
- gráficos acompanhados de resumo textual.

---

## 19. Estratégia de testes

### Unitários

- cálculo de adesão;
- classificação de inatividade;
- regras de publicação e versionamento;
- transições de status;
- autorização por vínculo;
- regras de vencimento e renovação.

### Integração

- envio e aprovação do onboarding;
- publicação de plano;
- criação de versão;
- execução referenciando versão correta;
- check-in e geração de alerta;
- registro de dor;
- cancelamento e reativação;
- isolamento de dados entre alunos e profissionais.

### Ponta a ponta

1. administrador cria profissional, aluno e vínculo;
2. aluno conclui onboarding;
3. profissional aprova triagem;
4. profissional cria e publica plano;
5. aluno executa treino;
6. aluno registra dor;
7. profissional trata alerta;
8. aluno envia check-in;
9. profissional cria nova versão;
10. gestor renova ou encerra o vínculo.

### Critérios gerais

- nenhuma fase é concluída com testes quebrados;
- fluxos críticos devem ter teste de autorização negativa;
- verificar interface em viewport móvel e desktop;
- verificar console do navegador e logs do servidor;
- não usar dados reais nos testes.

---

## 20. Fases de desenvolvimento

### Fase 0 — Fundação

- inicializar repositório e stack;
- configurar lint, formatação e testes;
- configurar variáveis de ambiente de exemplo;
- criar tema e tokens da marca;
- preparar banco, migrações e seed fictício;
- configurar CI básica;
- criar documentação de execução local.

**Aceite:** projeto instala, executa, testa e gera build limpo.

### Fase 1 — Autenticação e estrutura de acesso

- login, logout e recuperação;
- perfis e papéis;
- layouts por área;
- proteção de rotas e ações;
- usuários fictícios de demonstração.

**Aceite:** cada perfil acessa somente sua área e ações permitidas.

### Fase 2 — Alunos, profissionais e comercial

- cadastros;
- atribuições;
- planos comerciais;
- vínculo, pagamento integrado, webhook, conciliação e vencimento;
- filtros e linha do tempo inicial.

**Aceite:** gestor administra a carteira sem planilha externa.

### Fase 3 — Onboarding e triagem

- formulário com salvamento progressivo;
- anexos e consentimentos;
- fila de triagem;
- pendências e decisão;
- alertas de atenção.

**Aceite:** aluno conclui onboarding e profissional registra decisão rastreável.

### Fase 4 — Biblioteca e plano de treino

- exercícios;
- construtor de plano;
- sessões e prescrições;
- publicação;
- versionamento imutável.

**Aceite:** profissional publica plano e aluno vê apenas a versão vigente.

### Fase 5 — Execução

- tela móvel de treino;
- registro por série;
- esforço, observação e dor;
- resumo e histórico;
- alertas de segurança.

**Aceite:** execução completa fica vinculada à versão correta do plano.

### Fase 6 — Check-in e evolução

- agendamento;
- resposta;
- análise;
- medidas, gráficos e comparações;
- fotografias com acesso controlado.

**Aceite:** profissional compara períodos e registra análise.

### Fase 7 — Gestão, alertas e retenção

- painel de prioridades;
- inatividade e baixa adesão;
- vencimentos;
- renovação e cancelamento;
- indicadores gerenciais.

**Aceite:** gestor identifica pendências e conduz renovação pelo sistema.

### Fase 8 — Hardening e produção

- auditoria de segurança;
- acessibilidade;
- desempenho;
- observabilidade;
- backup/restauração;
- revisão LGPD e textos legais;
- homologação com usuários;
- deploy de produção.

**Aceite:** checklist de produção aprovado e fluxos críticos homologados.

---

## 21. Backlog priorizado

### P0 — indispensável

- autenticação e autorização;
- aluno/profissional/vínculo;
- onboarding e triagem;
- plano e versionamento;
- execução;
- dor e alerta;
- check-in;
- vencimento e renovação manual;
- privacidade e auditoria mínima.

### P1 — importante após o núcleo

- gráficos avançados;
- notificações por e-mail/WhatsApp;
- cobrança integrada;
- modelos reutilizáveis de plano;
- exportação de relatórios;
- dashboards gerenciais ampliados.

### P2 — evolução

- aplicativo móvel;
- wearables;
- IA assistiva com revisão humana;
- integrações externas;
- gamificação;
- portal multiprofissional.

---

## 22. Definition of Done

Uma história só está concluída quando:

- requisitos e critérios de aceite foram atendidos;
- autorização foi validada no servidor;
- estados de interface foram implementados;
- testes relevantes passaram;
- build e lint passaram;
- interface foi verificada em celular e desktop;
- acessibilidade básica foi conferida;
- eventos críticos possuem auditoria;
- não há dados sensíveis em logs;
- documentação necessária foi atualizada;
- nenhuma regressão conhecida ficou oculta.

---

## 23. Decisões do responsável e pendências remanescentes

As respostas abaixo foram consolidadas em 25 de agosto de 2026. Uma decisão pode estar
**confirmada**, **provisória** ou **parcial**. Itens provisórios não devem ser apresentados
como orientação clínica ou parecer jurídico e precisam de validação antes da fase indicada.

1. **Plano comercial — parcial:** plano mensal de `R$ 60,00`, com vencimento no dia 10. Inclui acesso às funcionalidades disponíveis na versão contratada da plataforma, plano de treino e acompanhamento pelo profissional de Educação Física, relatórios e orientações alimentares gerais. Não inclui prescrição dietética individualizada. O aluno deverá possuir fita métrica para os registros corporais. Fotografias de evolução serão opcionais e dependerão de consentimento específico. Permanecem pendentes as regras de cancelamento, reajuste e renovação automática.
2. **Profissional inicial — confirmada:** Daniel Rodrigues será o único profissional de Educação Física na primeira versão. Nome civil completo, número do CREF e jurisdição devem ser informados antes da publicação.
3. **Questionário de prontidão — provisória:** será utilizado um questionário interno de exemplo, baseado em princípios de triagem pré-participação e inspirado no fluxo do PAR-Q+, sem diagnóstico automático. Qualquer resposta de atenção encaminhará o cadastro para análise humana. O modelo deve ser validado por Daniel Rodrigues e por assessoria jurídica antes da produção. Minuta em `docs/product/QUESTIONARIO_PRONTIDAO_PROVISORIO.md`.
4. **Medidas corporais — confirmada:** o relatório de referência `a_high_resolution_fitness_report_infographic_das.png` definiu o conjunto inicial: peso, altura, pescoço, tórax/peito, cintura, abdômen na linha do umbigo, quadril/glúteo, braço direito, braço esquerdo, coxa direita, coxa esquerda, panturrilha direita e panturrilha esquerda. Altura será obrigatória no onboarding e não precisará ser repetida mensalmente; peso e circunferências serão solicitados no check-in mensal. Cada registro deve guardar unidade, data, lado quando aplicável, responsável pela medição e versão das instruções. Os valores pessoais presentes na imagem não fazem parte dos dados de demonstração e não devem ser copiados para seed, testes ou documentação.
5. **Check-in — confirmada:** o aluno poderá acessar e registrar atividades a qualquer momento. O ciclo padrão de consolidação, análise profissional e relatório de evolução será mensal. A data de corte mensal ainda deve ser definida.
6. **Severidade de alertas — provisória:** os níveis serão operacionais e não diagnósticos. Baixo indica informação ou acompanhamento rotineiro; médio indica queda de adesão ou pendência recorrente; alto indica dor, desconforto ou resposta que exige revisão profissional antes de continuar o exercício afetado; crítico indica relato de possível risco imediato, orientando interrupção da atividade e procura de atendimento qualificado. Gatilhos exatos e prazos de resposta precisam de validação profissional antes das Fases 5 e 7.
7. **Suspensão por inadimplência — confirmada com detalhe operacional pendente:** pagamentos vencem no dia 10 de cada mês. Sem confirmação do pagamento até o processamento do vencimento, o acesso às funcionalidades contratadas será suspenso, sem apagar histórico ou dados. Horário de corte, tolerância, comunicação prévia, falha do provedor e reativação após pagamento precisam ser definidos.
8. **Canal inicial — parcial:** WhatsApp será o primeiro canal externo. A integração deverá usar solução oficial, com registro de consentimento, modelos aprovados quando exigidos e opção de interrupção das mensagens. Provedor e número remetente ainda estão pendentes. Notificações internas continuam recomendadas como contingência.
9. **Retenção de fotos e dados sensíveis — provisória:** os dados serão mantidos enquanto a relação estiver ativa e forem necessários para acompanhamento e comparação da evolução. Após o encerramento, será aplicada tabela de retenção por categoria, considerando finalidade, obrigação legal, exercício de direitos e solicitação do titular. Retenção indefinida ou apenas pelo “prazo máximo possível” não está aprovada.
10. **Canal LGPD — confirmada operacionalmente:** Jefferson Vorpagel receberá e coordenará os pedidos dos titulares como administrador técnico e ponto de contato. A definição formal de controlador, operador e eventual encarregado, além dos dados públicos do canal, precisa ser registrada antes da produção. A responsabilidade pela conformidade não é transferida integralmente ao administrador técnico.
11. **Domínio — confirmada:** landing page e plataforma ficarão no mesmo domínio, preferencialmente separadas por rotas ou subdomínio conforme a arquitetura final.
12. **Infraestrutura — parcial:** frontend na Vercel, backend no Render e código versionado em repositório Git privado na conta do responsável técnico. Ainda devem ser escolhidos o provedor de autenticação, o PostgreSQL gerenciado e o armazenamento privado de arquivos/fotos. Segredos não serão armazenados no Git.
13. **Pagamentos — parcial:** haverá pagamento integrado para uma conta do responsável comercial. Permanecem pendentes o titular legal da conta, o provedor, as modalidades aceitas, recorrência, tratamento de webhook, estorno, contestação, falha de cobrança e conciliação.
14. **Documentos legais — provisória:** foram preparados modelos internos de termos, aviso de privacidade, aviso de saúde e autorização de uso de imagem em `docs/legal/MODELOS_JURIDICOS_PROVISORIOS.md`. A autorização publicitária será separada, específica, opcional e revogável, sem impedir o acesso ao serviço. Os documentos precisam de dados cadastrais do fornecedor e revisão jurídica antes da publicação.
15. **Logo — confirmada em raster:** o arquivo `logo.jpeg` foi fornecido e incorporado à aplicação como a identidade atual: monograma `DR` com halteres e linha de eletrocardiograma, acompanhado de “DR Performance by Daniel Rodrigues”, nas cores vermelho, preto e branco. Essa marca substitui a versão azul exibida no relatório de avaliação. O JPEG possui fundo branco e margens internas; por isso, o uso foi encapsulado em componente substituível. Permanece desejável receber PNG transparente e SVG/vetor.

### Pendências que ainda bloqueiam fases futuras

- nome completo e registro CREF de Daniel Rodrigues;
- dados legais do fornecedor/controlador, canal de atendimento e canal de privacidade;
- política comercial de cancelamento, renovação e reajuste;
- regra operacional exata de suspensão e reativação;
- provedores de autenticação, PostgreSQL, arquivos, WhatsApp e pagamentos;
- modalidades de pagamento e titular da conta recebedora;
- validação profissional dos questionários e alertas de saúde;
- validação jurídica dos termos, privacidade, retenção e uso de imagem;
- versão PNG transparente e versão vetorial futura da marca.

---

## 24. Primeiro comando de trabalho para o Codex

Use o texto abaixo ao iniciar a implementação:

```text
Leia integralmente o arquivo DR_PERFORMANCE_PROJECT_MASTER.md e trate-o como a fonte principal do projeto. Em seguida:

1. inspecione o repositório e relate o estado atual;
2. proponha a arquitetura concreta da Fase 0, incluindo as escolhas de banco, autenticação, armazenamento e testes;
3. liste as decisões que realmente precisam da minha confirmação antes de escrever código;
4. apresente a árvore inicial de pastas;
5. monte um plano de implementação da Fase 0 com critérios de verificação;
6. aguarde minha aprovação antes de iniciar mudanças estruturais ou contratar/configurar serviços externos.

Não implemente fases futuras. Não use dados reais. Preserve a identidade visual vermelha, preta e branca da DR Performance e prepare a marca para troca futura por asset oficial.
```

---

## 25. Resumo executivo

A Plataforma DR Performance deve substituir um processo fragmentado por uma jornada digital, rastreável e segura. O núcleo do produto não é apenas “mostrar treinos”, mas conectar avaliação, plano versionado, execução real, check-in, alertas e retenção. A primeira versão deve priorizar operação confiável, experiência móvel do aluno, produtividade do profissional e proteção dos dados.
