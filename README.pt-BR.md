# Treinador de Entrevistas

Plataforma gamificada de preparação para entrevistas técnicas de frontend e engenharia de software. Pratique com **1.471 questões** distribuídas em 14 arquivos de banco de questões, receba feedback em streaming via IA (Claude) e acompanhe seu progresso em um sistema de XP/níveis.

[Read in English](README.md)

---

## Funcionalidades

- **1.471 questões curadas** em JavaScript, TypeScript, React, Next.js, Algoritmos, System Design, Gerenciamento de Estado, Web APIs, Engenharia de Software e Carreira
- **Trilha "o que isso imprime?"** — um conjunto dedicado de questões de previsão de saída (output prediction) cobrindo closures, event loop, `async`/`await`, pegadinhas de hooks do React (stale closures, batching, memoization) e as pegadinhas de erasure de tipos do TypeScript, focado em entrevistas de nível pleno/senior
- **Feedback por IA** com Claude (Anthropic) via Vercel AI SDK, transmitido token a token com uma rubrica estruturada (nota, veredito, dica, exemplo) e um fluxo de retentativa caso a requisição falhe
- **Gamificação** — XP, níveis (Junior → Staff), streaks e conquistas
- **Tipos de questão** — múltipla escolha, texto aberto, verdadeiro/falso
- **Dificuldade** (1–5) e segmentação por senioridade (junior, pleno, pleno-senior, senior, staff)
- **Conteúdo bilíngue** — toda questão está disponível em Português e Inglês (`language: 'pt' | 'en'`)
- **App web** com Next.js 16 + React 19
- **App mobile** com Expo 53 + React Native 0.79 (NativeWind)

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Monorepo | Turborepo + pnpm |
| Web | Next.js 16.2 (App Router), React 19, Tailwind CSS 4 |
| Mobile | Expo 53, React Native 0.79, NativeWind 4 |
| UI | Radix UI, Framer Motion, Lucide React |
| Formulários | React Hook Form + Zod |
| Estado | Zustand 5 (assinaturas por seletor de campo, progresso persistido) |
| IA | Vercel AI SDK 6 + @ai-sdk/anthropic (saída estruturada em streaming) |
| Domínio | Pacote TypeScript compartilhado (`@interview-trainer/domain`) |
| Testes | Vitest |
| Linguagem | TypeScript 5 (modo strict, `noUncheckedIndexedAccess`) |

---

## Como Funciona

### 1. Configuração da sessão

O usuário escolhe um **nível de senioridade** e um ou mais **domínios de conhecimento**. Isso se torna um `SessionConfig` passado para uma Server Action do Next.js.

### 2. Seleção de questões no servidor

A seleção de questões (`selectQuestions`) acontece **no servidor**, não no cliente — o banco completo de 1.471 questões nunca é enviado ao navegador. O seletor filtra por domínio/senioridade/dificuldade, evita repetir as questões mais recentes do usuário, e retorna apenas o recorte necessário para a sessão.

### 3. Respondendo

- Questões de **múltipla escolha / verdadeiro-falso** são corrigidas instantaneamente e de forma determinística (sem precisar chamar a IA).
- Respostas de **texto aberto** são enviadas para `/api/feedback`, que transmite uma resposta estruturada do Claude (nota de 0–100, veredito, dica, exemplo resolvido, conceitos que faltaram) usando `experimental_useObject`. Se o streaming falhar, a interface mostra um estado de erro acessível com uma ação de retentativa em um clique, em vez de travar.

### 4. Gamificação

Toda resposta alimenta o **motor de gamificação** (`packages/domain`): ele calcula o XP com base na nota/dificuldade, atualiza o nível do usuário (Junior → Pleno → Pleno-Senior → Senior → Staff), acompanha streaks e desbloqueia conquistas. O progresso é persistido localmente via Zustand e tem um limite (os 200 eventos de XP mais recentes) para que o armazenamento não cresça indefinidamente.

### 5. Pacote de domínio como fonte única de verdade

O `@interview-trainer/domain` é consumido **tanto** pelo app web quanto pelo mobile. Ele é o responsável pelo schema de `Question`, pelo banco de questões, pela lógica de sessão/resposta e pelo motor de gamificação — assim, as regras de negócio (como o XP é calculado, o que conta como nota de aprovação, como a sessão avança) vivem em um único lugar, em vez de serem duplicadas por plataforma.

---

## Estrutura do Projeto

```
interview-trainer/
├── apps/
│   ├── web/          # Aplicação web Next.js
│   └── mobile/       # Aplicação mobile Expo
├── packages/
│   ├── domain/       # Camada de domínio compartilhada (questões, lógica de gamificação)
│   └── config/       # Configurações TypeScript/ESLint compartilhadas
└── turbo.json
```

### Pacote de Domínio

O pacote `@interview-trainer/domain` é o núcleo do projeto. Contém:

- **Banco de questões** — 1.471 questões em `packages/domain/src/data/`
- **Motor de gamificação** — calculadora de XP, resolvedor de nível, motor de conquistas
- **Lógica de sessão** — seleção de questões, avanço de respostas, conclusão de sessão
- **Tipos** — `Question`, `KnowledgeDomain`, `SeniorityLevel`, `Session`, `Achievement`

#### Arquivos do Banco de Questões

| Arquivo | Questões | Tópicos |
|---------|----------|---------|
| javascript.ts | 190 | Closures, Event Loop, ES6+, Proxies, Padrões, output-prediction de async/Promises |
| questions-en.ts | 192 | Espelhos em inglês das questões de output-prediction de JS/Async/React/TypeScript |
| react.ts | 150 | Hooks, Performance, Patterns, RSC, output-prediction de stale closures/batching |
| typescript.ts | 110 | Generics, Utility Types, Tipos Avançados, output-prediction de erasure de tipos |
| react-fundamentals.ts | 100 | Lifecycle, DOM, Fiber básico |
| algorithms.ts | 100 | Ordenação, Busca, DP, Grafos, Estruturas de Dados |
| react-interview-2026.ts | 90 | Perguntas reais de entrevistas 2026, live coding |
| web-apis.ts | 90 | Browser APIs, CSS, testing, tooling |
| state-management.ts | 90 | Redux, Zustand, TanStack Query, Jotai |
| nextjs.ts | 84 | App Router, Server Actions, deploy, i18n |
| career-interview.ts | 65 | Carreira, negociação, soft skills, comportamental |
| react-patterns.ts | 60 | HOCs, Compound Components, Portals, Error Boundaries, SSR |
| software-engineering.ts | 80 | SOLID, Design Patterns, Agile, DDD |
| system-design.ts | 70 | System Design Frontend, Arquitetura |

---

## Primeiros Passos

### Pré-requisitos

- Node.js >= 20
- pnpm >= 10

### Instalação

```bash
git clone https://github.com/juanevangelista1/Treinador-entrevista.git
cd Treinador-entrevista
pnpm install
```

### Variáveis de Ambiente

Crie `apps/web/.env.local`:

```env
ANTHROPIC_API_KEY=sua_chave_aqui
```

Obtenha sua chave em [console.anthropic.com](https://console.anthropic.com).

### Rodando

**Apenas web (recomendado):**

```bash
pnpm turbo dev --filter=@interview-trainer/web
```

Acesse [http://localhost:3000](http://localhost:3000).

**Todos os apps:**

```bash
pnpm dev
```

> **Observação:** O app mobile requer um ambiente Expo/Node.js compatível. Se você ver um erro `metro-cache`, rode apenas o web com o comando de filtro acima.

### Testes

```bash
pnpm test
```

Testes unitários cobrem o motor de gamificação (calculadora de XP, resolvedor de nível, motor de conquistas) e uma suíte de fumaça para o rate limiter da API.

### Verificação de Tipos

```bash
pnpm turbo lint
```

---

## Níveis de Senioridade

| Nível | Descrição |
|-------|-----------|
| Junior | 0–1 anos, fundamentos |
| Pleno | 2–3 anos, autonomia |
| Pleno-Senior | 3–5 anos, liderança técnica |
| Senior | 5+ anos, arquitetura |
| Staff | Liderança técnica cross-team |

---

## Domínios de Conhecimento

`javascript` · `typescript` · `react` · `nextjs` · `algorithms` · `data_structures` · `software_engineering`

---

## Contribuindo

Contribuições são bem-vindas — sejam novas questões, correções de bugs ou melhorias na lógica de gamificação/sessão.

1. Faça um fork do repositório e crie uma branch para sua mudança.
2. Se for adicionar questões, siga o formato de `Question` já usado em `packages/domain/src/data/` (um arquivo em PT + a entrada espelhada em `questions-en.ts` com id prefixado por `en-` e `language: 'en'`).
3. Rode `pnpm turbo lint` e `pnpm test` antes de abrir um PR.
4. Abra um pull request descrevendo o que mudou e por quê.

Encontrou um bug ou tem uma ideia? Abra uma [issue](https://github.com/juanevangelista1/Treinador-entrevista/issues).

---

## Autor

Desenvolvido por **Juan Evangelista**.

- GitHub: [@juanevangelista1](https://github.com/juanevangelista1)

Se este projeto foi útil para você, considere dar uma estrela no repositório e seguir para acompanhar as atualizações.

---

## Licença

MIT
