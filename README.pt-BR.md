# Treinador de Entrevistas

Plataforma gamificada de preparação para entrevistas técnicas de frontend e engenharia de software. Pratique com 1.125 questões em 13 domínios, receba feedback por IA e acompanhe seu progresso em um sistema de níveis.

[Read in English](README.md)

---

## Funcionalidades

- **1.125 questões curadas** em JavaScript, TypeScript, React, Next.js, Algoritmos, System Design e Carreira
- **Feedback por IA** com Claude (Anthropic) via Vercel AI SDK
- **Gamificação** — XP, níveis (Junior → Staff), streaks e conquistas
- **Tipos de questão** — múltipla escolha, texto aberto, verdadeiro/falso
- **Dificuldade** (1–5) e segmentação por senioridade (junior, pleno, pleno-senior, senior, staff)
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
| Estado | Zustand 5 |
| IA | Vercel AI SDK 6 + @ai-sdk/anthropic |
| Domínio | Pacote TypeScript compartilhado (`@interview-trainer/domain`) |
| Testes | Vitest |
| Linguagem | TypeScript 5 |

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

- **Banco de questões** — 1.125 questões em `packages/domain/src/data/`
- **Motor de gamificação** — calculadora de XP, resolvedor de nível, motor de conquistas
- **Tipos** — `Question`, `KnowledgeDomain`, `SeniorityLevel`, `Session`, `Achievement`

#### Arquivos do Banco de Questões

| Arquivo | Questões | Tópicos |
|---------|----------|---------|
| javascript.ts | 120 | Closures, Event Loop, ES6+, Proxies, Padrões |
| react.ts | 100 | Hooks, Performance, Patterns, RSC |
| react-fundamentals.ts | 100 | Lifecycle, DOM, Fiber básico |
| react-patterns.ts | 60 | HOCs, Compound Components, Portals, Error Boundaries, SSR |
| algorithms.ts | 100 | Ordenação, Busca, DP, Grafos, Estruturas de Dados |
| web-apis.ts | 90 | Browser APIs, CSS, Testing, Tooling |
| state-management.ts | 90 | Redux, Zustand, TanStack Query, Jotai |
| react-interview-2026.ts | 90 | Perguntas reais de entrevistas 2026, Live coding |
| software-engineering.ts | 80 | SOLID, Design Patterns, Agile, DDD |
| typescript.ts | 80 | Generics, Utility Types, Tipos Avançados |
| nextjs.ts | 80 | App Router, Server Actions, Deploy, i18n |
| system-design.ts | 70 | System Design Frontend, Arquitetura |
| career-interview.ts | 65 | Carreira, Negociação, Soft Skills, Comportamental |

---

## Primeiros Passos

### Pré-requisitos

- Node.js >= 20
- pnpm >= 10

### Instalação

```bash
git clone <url-do-repo>
cd interview-trainer
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

26 testes unitários cobrindo o motor de gamificação (calculadora de XP, resolvedor de nível, motor de conquistas).

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

## Licença

MIT
