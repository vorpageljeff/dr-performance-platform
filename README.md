# DR Performance

Base técnica da Plataforma DR Performance, com frontend Next.js para Vercel, API Node/Fastify
para Render e PostgreSQL modelado com Drizzle ORM.

## Requisitos

- Node.js 22;
- npm 10 ou superior;
- Docker, apenas se quiser executar o PostgreSQL local pelo arquivo `compose.yml`.

## Instalação

```bash
npm install
```

Copie `.env.example` para `.env` e ajuste somente os valores locais. Nunca envie `.env`,
tokens ou dados reais ao Git.

## Execução local

Em dois terminais:

```bash
npm run dev:api
npm run dev:web
```

- frontend: <http://localhost:3000>
- API: <http://localhost:3333>
- health da API: <http://localhost:3333/health>

## Banco local

```bash
docker compose up -d postgres
npm run db:migrate
npm run db:seed
```

O seed usa exclusivamente uma organização e um administrador fictícios. O relatório PNG na
raiz contém dados pessoais reais, está ignorado pelo Git e não deve ser usado como seed.

## Verificações

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Ou execute tudo em sequência:

```bash
npm run check
```

## Estrutura

```text
apps/
  api/                 API para Render, schema e migrações PostgreSQL
  web/                 Next.js App Router para Vercel
packages/
  contracts/           contratos Zod compartilhados
docs/
  architecture/        decisões e arquitetura da fundação
  decisions/           registros de decisão
  legal/               minutas internas, ainda não publicáveis
  product/             protocolos e questionários provisórios
```

## Deploy

- Vercel: importar o repositório e definir `apps/web` como **Root Directory**.
- Na configuração da raiz, habilitar **Include source files outside of the Root Directory** para
  incluir `packages/contracts` e o lockfile do monorepo.
- O arquivo `apps/web/vercel.json` executa a instalação na raiz do workspace, constrói primeiro
  os contratos compartilhados e depois o frontend.
- Definir `NEXT_PUBLIC_API_URL` com a URL pública da API quando o backend do Render estiver online.
- Cada branch/PR poderá gerar um preview isolado; a produção deve ser promovida somente depois da
  validação do preview.
- Render: o `render.yaml` descreve build, start e health check da API. O plano deve ser
  escolhido manualmente no painel.
- PostgreSQL: o provedor ainda não foi escolhido. Ao conectar, definir `DATABASE_URL` somente
  nos ambientes seguros.

Autenticação, armazenamento privado, WhatsApp e pagamentos permanecem desacoplados até a
escolha formal dos provedores.
