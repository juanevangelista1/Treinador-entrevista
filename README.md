# Interview Trainer

A gamified interview preparation platform for frontend and software engineering candidates. Practice with **1,471 questions** across 14 question-bank files, get streaming AI-powered feedback from Claude, and track your progress through an XP/leveling system.

[Leia em Português](README.pt-BR.md)

---

## Features

- **1,471 curated questions** across JavaScript, TypeScript, React, Next.js, Algorithms, System Design, State Management, Web APIs, Software Engineering, and Career topics
- **"What does this log?" track** — a dedicated set of output-prediction questions covering closures, the event loop, `async`/`await`, React hooks pitfalls (stale closures, batching, memoization) and TypeScript's type-erasure gotchas, aimed at pleno/senior-level interviews
- **AI feedback** powered by Claude (Anthropic) via the Vercel AI SDK, streamed token-by-token with a structured rubric (score, verdict, hint, example) and a retry flow if the request fails
- **Gamification** — XP, levels (Junior → Staff), streaks, and achievements
- **Multiple question types** — multiple choice, open text, true/false
- **Difficulty tiers** (1–5) and seniority targeting (junior, pleno, pleno-senior, senior, staff)
- **Bilingual content** — every question is available in Portuguese and English (`language: 'pt' | 'en'`)
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
| State | Zustand 5 (field-selector subscriptions, persisted progress) |
| AI | Vercel AI SDK 6 + @ai-sdk/anthropic (streaming structured output) |
| Domain | Shared TypeScript package (`@interview-trainer/domain`) |
| Testing | Vitest |
| Language | TypeScript 5 (strict mode, `noUncheckedIndexedAccess`) |

---

## How It Works

### 1. Session configuration

The user picks a **seniority level** and one or more **knowledge domains**. This becomes a `SessionConfig` passed to a Next.js Server Action.

### 2. Server-side question selection

Question selection (`selectQuestions`) runs **on the server**, not the client — the full 1,471-question bank is never shipped to the browser. The selector filters by domain/seniority/difficulty, avoids repeating the user's most recent questions, and returns just the slice needed for the session.

### 3. Answering

- **Multiple choice / true-false** questions are graded instantly and deterministically (no AI round-trip needed).
- **Open text** answers are sent to `/api/feedback`, which streams a structured response from Claude (score 0–100, verdict, hint, worked example, missed concepts) using `experimental_useObject`. If the stream fails, the UI shows an accessible error state with a one-click retry instead of hanging.

### 4. Gamification

Every answer feeds the **gamification engine** (`packages/domain`): it computes XP based on score/difficulty, updates the user's level (Junior → Pleno → Pleno-Senior → Senior → Staff), tracks streaks, and unlocks achievements. Progress is persisted locally via Zustand and capped (most recent 200 XP events) so storage doesn't grow unbounded.

### 5. Domain package as the source of truth

`@interview-trainer/domain` is consumed by **both** the web and mobile apps. It owns the `Question` schema, the question bank, session/answer flow logic, and the gamification engine — so business rules (how XP is calculated, what counts as a passing score, how sessions advance) live in one place instead of being duplicated per platform.

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

- **Question bank** — 1,471 questions in `packages/domain/src/data/`
- **Gamification engine** — XP calculator, level resolver, achievement engine
- **Session logic** — question selection, answer advancement, session completion
- **Types** — `Question`, `KnowledgeDomain`, `SeniorityLevel`, `Session`, `Achievement`

#### Question Bank Files

| File | Questions | Topics |
|------|-----------|--------|
| javascript.ts | 190 | Closures, Event Loop, ES6+, Proxies, Patterns, async/Promises output-prediction |
| questions-en.ts | 192 | English mirrors of the JS/Async/React/TypeScript output-prediction questions |
| react.ts | 150 | Hooks, Performance, Patterns, RSC, stale-closure/batching output-prediction |
| typescript.ts | 110 | Generics, Utility Types, Advanced Types, type-erasure output-prediction |
| react-fundamentals.ts | 100 | Lifecycle, DOM, Fiber basics |
| algorithms.ts | 100 | Sorting, Searching, DP, Graphs, Data Structures |
| react-interview-2026.ts | 90 | Real 2026 interview questions, live coding |
| web-apis.ts | 90 | Browser APIs, CSS, testing, tooling |
| state-management.ts | 90 | Redux, Zustand, TanStack Query, Jotai |
| nextjs.ts | 84 | App Router, Server Actions, deploy, i18n |
| career-interview.ts | 65 | Career, negotiation, soft skills, behavioral |
| react-patterns.ts | 60 | HOCs, Compound Components, Portals, Error Boundaries, SSR |
| software-engineering.ts | 80 | SOLID, Design Patterns, Agile, DDD |
| system-design.ts | 70 | Frontend System Design, Architecture |

---

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10

### Installation

```bash
git clone https://github.com/juanevangelista1/Treinador-entrevista.git
cd Treinador-entrevista
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

Unit tests cover the gamification engine (XP calculator, level resolver, achievement engine) and a smoke suite for the API rate limiter.

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

## Contributing

Contributions are welcome — whether that's new questions, bug fixes, or improvements to the gamification/session logic.

1. Fork the repository and create a branch for your change.
2. If you're adding questions, follow the existing `Question` shape in `packages/domain/src/data/` (one PT file + a mirrored entry in `questions-en.ts` with an `en-` prefixed id and `language: 'en'`).
3. Run `pnpm turbo lint` and `pnpm test` before opening a PR.
4. Open a pull request describing what changed and why.

Found a bug or have an idea? Open an [issue](https://github.com/juanevangelista1/Treinador-entrevista/issues).

---

## Author

Built by **Juan Evangelista**.

- GitHub: [@juanevangelista1](https://github.com/juanevangelista1)

If this project was useful to you, consider starring the repo and following along for updates.

---

## License

MIT
