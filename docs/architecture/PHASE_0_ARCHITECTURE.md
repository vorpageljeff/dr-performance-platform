# Arquitetura da Fase 0

## Estado

- **Data:** 25/08/2026
- **Status:** implementada e verificada localmente
- **Escopo:** fundação, sem autenticação ou regras das fases funcionais

## Decisões

### Monorepo npm

O workspace contém frontend, API e contratos compartilhados no mesmo repositório. A solução
evita uma ferramenta adicional de monorepo enquanto o volume de pacotes ainda é pequeno.

### Frontend

- Next.js 16 com App Router e TypeScript estrito;
- React Server Components por padrão;
- Tailwind CSS 4 como processador, com tokens da marca centralizados em `globals.css`;
- deploy previsto na Vercel;
- logo encapsulada em componente para troca futura por SVG ou PNG transparente.

### API

- Node.js 22, Fastify e TypeScript;
- deploy previsto no Render;
- CORS limitado à origem configurada;
- health check e rota de metadados sem informações sensíveis;
- banco não é acessado durante o boot enquanto não existir funcionalidade dependente dele.

### Dados

- PostgreSQL;
- Drizzle ORM e migrações SQL versionadas;
- modelo mínimo: organização, usuário, papel, perfis, vínculo profissional–aluno,
  consentimentos e auditoria;
- IDs públicos UUID;
- exclusão lógica disponível nos perfis relevantes;
- dados de demonstração fictícios.

O Drizzle foi escolhido no lugar do Prisma durante a Fase 0. O Prisma 7 disponível no momento
da implementação carregava uma vulnerabilidade conhecida em uma dependência do CLI. A troca
ocorreu antes de existir código de domínio acoplado ao ORM.

### Contratos

O pacote `@dr-performance/contracts` centraliza schemas Zod para papéis, health check e plano
comercial. Interfaces de autenticação, pagamento, arquivos e WhatsApp serão adicionadas quando
os provedores forem decididos.

## Limites desta fase

- a página `/portal` é estrutural e não simula login;
- nenhum dado do relatório pessoal foi levado ao código ou seed;
- não existe upload de fotografias;
- não existe integração financeira ou envio de WhatsApp;
- os modelos jurídicos continuam como minuta interna;
- nenhuma fórmula de composição corporal foi automatizada.

## Verificação

- schema e histórico de migração validados pelo Drizzle Kit;
- lint do frontend e da API;
- TypeScript sem emissão e em modo estrito;
- testes do contrato comercial e dos endpoints públicos da API;
- build de produção do Next.js e da API.

## Próxima fase

A Fase 1 deverá escolher e implementar autenticação, sessão, recuperação de acesso, RBAC e
proteção das áreas. Antes disso, confirmar o provedor de autenticação e o CREF do profissional.

