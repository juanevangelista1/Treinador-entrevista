# Interview Trainer

A gamified interview preparation platform for frontend and software engineering candidates. Practice with 1,125 questions across 13 domains, get AI-powered feedback, and track your progress through a leveling system.

[Leia em Português](README.pt-BR.md)

---

## Features

- **1,125 curated questions** across JavaScript, TypeScript, React, Next.js, Algorithms, System Design, and Career topics
- **AI feedback** powered by Claude (Anthropic) via the Vercel AI SDK
- **Gamification** — XP, levels (Junior → Staff), streaks, and achievements
- **Multiple question types** — multiple choice, open text, true/false
- **Difficulty tiers** (1–5) and seniority targeting (junior, pleno, pleno-senior, senior, staff)
- **Web app** built with Next.js 16 + React 19
- **Mobile app** built with Expo 53 + React Native 0.79 (NativeWind)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Monorepo | Turborepo + pnpm |
| Web | Next.js 16.2 (App Router), React 19, Tailwind CSS 4 |
| Mobile | Expo 53, React Native 0.79, NativeWind 4 |
| UI | Radix UI, Framer Motion, Lucide React |
| Forms | React Hook Form + Zod |
| State | Zustand 5 |
| AI | Vercel AI SDK 6 + @ai-sdk/anthropic |
| Domain | Shared TypeScript package (`@interview-trainer/domain`) |
| Testing | Vitest |
| Language | TypeScript 5 |

---

## Project Structure

```
interview-trainer/
├── apps/
│   ├── web/          # Next.js web application
│   └── mobile/       # Expo mobile application
├── packages/
│   ├── domain/       # Shared domain layer (questions, gamification logic)
│   └── config/       # Shared TypeScript/ESLint config
└── turbo.json
```

### Domain Package

The `@interview-trainer/domain` package is the core of the project. It contains:

- **Question bank** — 1,125 questions in `packages/domain/src/data/`
- **Gamification engine** — XP calculator, level resolver, achievement engine
- **Types** — `Question`, `KnowledgeDomain`, `SeniorityLevel`, `Session`, `Achievement`

#### Question Bank Files

| File | Questions | Topics |
|------|-----------|--------|
| javascript.ts | 120 | Closures, Event Loop, ES6+, Proxies, Patterns |
| react.ts | 100 | Hooks, Performance, Patterns, RSC |
| react-fundamentals.ts | 100 | Lifecycle, DOM, Fiber basics |
| react-patterns.ts | 60 | HOCs, Compound Components, Portals, Error Boundaries, SSR |
| algorithms.ts | 100 | Sorting, Searching, DP, Graphs, Data Structures |
| web-apis.ts | 90 | Browser APIs, CSS, Testing, Tooling |
| state-management.ts | 90 | Redux, Zustand, TanStack Query, Jotai |
| react-interview-2026.ts | 90 | Real 2026 interview questions, Live coding |
| software-engineering.ts | 80 | SOLID, Design Patterns, Agile, DDD |
| typescript.ts | 80 | Generics, Utility Types, Advanced Types |
| nextjs.ts | 80 | App Router, Server Actions, Deploy, i18n |
| system-design.ts | 70 | Frontend System Design, Architecture |
| career-interview.ts | 65 | Career, Negotiation, Soft Skills, Behavioral |

---

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10

### Installation

```bash
git clone <repo-url>
cd interview-trainer
pnpm install
```

### Environment Variables

Create `apps/web/.env.local`:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Get your API key at [console.anthropic.com](https://console.anthropic.com).

### Running

**Web only (recommended):**

```bash
pnpm turbo dev --filter=@interview-trainer/web
```

Open [http://localhost:3000](http://localhost:3000).

**All apps:**

```bash
pnpm dev
```

> **Note:** The mobile app requires a compatible Node.js / Expo environment. If you see a `metro-cache` export error, run the web app only with the filter command above.

### Testing

```bash
pnpm test
```

26 unit tests covering the gamification engine (XP calculator, level resolver, achievement engine).

### Type Check

```bash
pnpm turbo lint
```

---

## Seniority Levels

| Level | Description |
|-------|-------------|
| Junior | 0–1 years, fundamentals |
| Pleno | 2–3 years, autonomy |
| Pleno-Senior | 3–5 years, technical leadership |
| Senior | 5+ years, architecture |
| Staff | Cross-team technical leadership |

---

## Knowledge Domains

`javascript` · `typescript` · `react` · `nextjs` · `algorithms` · `data_structures` · `software_engineering`

---

## License

MIT
