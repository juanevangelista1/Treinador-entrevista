import type { Question } from '../session/types'

export const nextjsQuestions: Question[] = [
  {
    id: 'next-001',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior', 'pleno'],
    text: 'No App Router do Next.js, qual é a diferença entre um arquivo `layout.tsx` e um `page.tsx`?',
    options: [
      { id: 'a', text: 'São equivalentes, qualquer um pode ser usado', isCorrect: false },
      { id: 'b', text: '`layout.tsx` envolve a UI de uma rota e persiste entre navegações; `page.tsx` define a UI única daquela rota', isCorrect: true },
      { id: 'c', text: '`layout.tsx` é para páginas estáticas, `page.tsx` para dinâmicas', isCorrect: false },
      { id: 'd', text: '`page.tsx` não pode ter componentes filhos', isCorrect: false },
    ],
    hints: ['O layout não é remontado ao navegar entre rotas do mesmo segmento'],
    explanation: '`layout.tsx` define a UI compartilhada que envolve os filhos de um segmento de rota. Persiste entre navegações (não é remontado), sendo ideal para nav, sidebar, providers. `page.tsx` é o conteúdo único de uma rota e é substituído a cada navegação.',
    tags: ['app-router', 'layout', 'page', 'routing'],
  },
  {
    id: 'next-002',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Route Groups no App Router do Next.js? Como você os usaria para ter dois layouts diferentes em rotas do mesmo nível?',
    hints: ['Route Groups usam parênteses na nomenclatura da pasta: `(grupo)`', 'Eles não afetam a URL'],
    explanation: 'Route Groups (`(nome)`) agrupam rotas sem afetar a URL. Útil para: (1) múltiplos layouts no mesmo nível — `(auth)/login` e `(app)/dashboard` com layouts diferentes, (2) organização de código sem criar segments de URL, (3) colocar `loading.tsx` e `error.tsx` para subconjuntos de rotas.',
    tags: ['route-groups', 'layouts', 'app-router'],
  },
  {
    id: 'next-003',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique as diferenças entre Static Generation (SSG), Server-Side Rendering (SSR) e Incremental Static Regeneration (ISR) no Next.js. Quando você escolheria cada estratégia?',
    hints: ['Pense em frequência de mudança dos dados e necessidade de personalização'],
    explanation: 'SSG: HTML gerado em build time — para conteúdo estático e público (docs, blog). SSR: HTML gerado por request — para dados personalizados ou frequentemente mutáveis. ISR: SSG com revalidação periódica (`revalidate`) — para conteúdo que muda com menor frequência (catálogo, preços). No App Router, controlado pelo `cache` option do fetch ou `export const revalidate`.',
    tags: ['ssg', 'ssr', 'isr', 'rendering'],
  },
  {
    id: 'next-004',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Server Actions no Next.js? Como elas eliminam a necessidade de criar API Routes para mutações? Quais são as limitações de segurança que você deve considerar?',
    hints: ['Server Actions são marcadas com "use server"'],
    explanation: 'Server Actions são funções assíncronas que rodam exclusivamente no servidor. Considerações de segurança: (1) são endpoints HTTP públicos implícitos — valide SEMPRE os inputs com Zod, (2) verifique autorização dentro da action, (3) use CSRF protection (Next.js adiciona automaticamente via origin header check).',
    tags: ['server-actions', 'mutacoes', 'seguranca', 'forms'],
  },
  {
    id: 'next-005',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Qual é o propósito do arquivo `loading.tsx` no App Router do Next.js?',
    options: [
      { id: 'a', text: 'Define um spinner global para toda a aplicação', isCorrect: false },
      { id: 'b', text: 'Cria automaticamente um Suspense boundary para o segmento de rota, exibindo o fallback enquanto a página carrega', isCorrect: true },
      { id: 'c', text: 'É executado antes do layout da rota', isCorrect: false },
      { id: 'd', text: 'Só funciona com SSR, não com SSG', isCorrect: false },
    ],
    hints: ['É equivalente a envolver o `page.tsx` com `<Suspense fallback={<Loading />}>`'],
    explanation: '`loading.tsx` é automaticamente convertido em um Suspense boundary pelo Next.js ao redor do segmento de rota. O usuário vê o fallback imediatamente enquanto o Server Component carrega dados.',
    tags: ['loading', 'suspense', 'streaming', 'app-router'],
  },
  {
    id: 'next-006',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você otimizaria a performance de uma aplicação Next.js? Discuta: Image Optimization, Font Optimization, bundle analysis, e estratégias de caching com o fetch estendido.',
    hints: ['next/image automatiza lazy loading, sizing e WebP conversion'],
    explanation: 'Estratégias: (1) `next/image`: lazy loading automático, srcset responsivo, blur placeholder, formato WebP/AVIF. (2) `next/font`: fontes autopodadas, sem requests externos, zero CLS. (3) Bundle: `@next/bundle-analyzer`. (4) Fetch caching: granular por rota com `revalidate`, tag-based revalidation com `revalidateTag()`.',
    tags: ['performance', 'image', 'font', 'caching', 'bundle'],
  },
  {
    id: 'next-007',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique como funciona o Middleware no Next.js. O que ele pode e não pode fazer? Cite casos de uso práticos.',
    hints: ['Middleware roda no Edge Runtime, não no Node.js completo'],
    explanation: 'Middleware (`middleware.ts` na raiz) executa no Edge Runtime antes de cada request. Pode: redirecionar, reescrever URLs, modificar headers/cookies, responder diretamente. Não pode: acessar banco de dados diretamente, usar APIs Node.js completas. Casos de uso: auth/authorization, A/B testing, i18n routing, geolocation, rate limiting.',
    tags: ['middleware', 'edge', 'auth', 'routing'],
  },
  {
    id: 'next-008',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 5,
    targetLevel: ['staff'],
    text: 'O que é Partial Prerendering (PPR) no Next.js? Como ele combina SSG e SSR na mesma página?',
    hints: ['PPR gera um shell estático com Suspense holes que são preenchidos dinamicamente'],
    explanation: 'PPR pré-renderiza o shell estático de uma página em build time e deixa "holes" (Suspense boundaries) para conteúdo dinâmico. O browser recebe o HTML estático instantaneamente da CDN; os holes são preenchidos via streaming quando o servidor resolve o conteúdo dinâmico.',
    tags: ['ppr', 'partial-prerendering', 'streaming', 'suspense'],
  },
  // ── EXPANSÃO ────────────────────────────────────────────────────────────────
  {
    id: 'next-009',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Server Components vs Client Components no Next.js App Router? Como decidir qual usar?',
    hints: ['"use client" diretiva', 'Server: sem interatividade', 'Client: hooks, eventos'],
    explanation: 'Server Components (padrão no App Router): executam apenas no servidor. Vantagens: sem JS enviado ao browser, acesso direto a banco/filesystem, segredos server-side. Limitações: sem hooks de estado, sem event listeners, sem APIs de browser. Client Components: `"use client"` no topo. Têm acesso a hooks, eventos, browser APIs. Regra: use Server Components para a maioria (buscar dados, renderizar conteúdo estático). Use Client Components apenas para interatividade.',
    tags: ['server-components', 'client-components', 'use-client', 'app-router'],
  },
  {
    id: 'next-010',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer data fetching em Server Components no Next.js App Router?',
    hints: ['fetch() estendido', 'async/await direto no componente', 'cache e revalidate'],
    explanation: `Server Components podem ser async diretamente:
\`\`\`typescript
async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch direto, sem useEffect, sem useState
  const product = await fetch(\`/api/products/\${params.id}\`, {
    next: { revalidate: 60 }, // ISR: revalida a cada 60s
    // cache: "force-cache" = SSG, cache: "no-store" = SSR
  }).then(r => r.json());
  return <ProductDetail product={product} />;
}
\`\`\`
Parallel fetching: \`const [a, b] = await Promise.all([fetchA(), fetchB()])\`. Dados são tipos-seguros com TypeScript.`,
    tags: ['data-fetching', 'server-components', 'async', 'fetch', 'cache'],
  },
  {
    id: 'next-011',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Dynamic Routes no Next.js? Como criar rota com parâmetro `[id]` e rota catch-all `[...slug]`?',
    hints: ['Colchetes no nome da pasta', 'params prop', 'generateStaticParams'],
    explanation: 'Dynamic routes: `app/products/[id]/page.tsx` — `params.id`. Multiple params: `app/[category]/[id]`. Catch-all: `app/docs/[...slug]` — `params.slug` é array. Optional catch-all: `[[...slug]]`. `generateStaticParams()` pré-gera as rotas em build time para SSG: `export async function generateStaticParams() { return products.map(p => ({ id: p.id })); }`. Sem `generateStaticParams`: gerado on-demand (SSR ou ISR).',
    tags: ['dynamic-routes', 'params', 'catch-all', 'generateStaticParams'],
  },
  {
    id: 'next-012',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como funciona o sistema de cache do Next.js App Router? Explique as 4 camadas.',
    hints: ['Request Memoization', 'Data Cache', 'Full Route Cache', 'Router Cache'],
    explanation: '4 camadas de cache: (1) Request Memoization: deduplicação de fetch() com mesmo URL durante um único request — automático; (2) Data Cache: persiste resultados de fetch entre requests e deploys (controlado por `cache`/`revalidate`); (3) Full Route Cache: HTML estático cacheado no servidor por rota — invalidado por revalidação; (4) Router Cache: cache client-side de payloads de rotas já visitadas — reduz requests de navegação. Invalidação: `revalidatePath()` e `revalidateTag()` nas Server Actions.',
    tags: ['cache', 'request-memoization', 'data-cache', 'router-cache', 'full-route'],
  },
  {
    id: 'next-013',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `next/image` para otimizar imagens? Quais atributos são obrigatórios?',
    hints: ['src, alt, width, height', 'fill para imagens responsivas', 'priority para above-the-fold'],
    explanation: '`<Image src={img} alt="desc" width={800} height={600}/>` — obrigatórios: `src`, `alt`, e `width+height` (ou `fill`). Benefícios automáticos: lazy loading, formato WebP/AVIF, srcset responsivo, blur placeholder (`placeholder="blur"` + `blurDataURL`). Para imagens responsivas: `fill` + container com `position: relative`. `priority`: preload para imagens above-the-fold (hero). Para imagens externas: configure `remotePatterns` no `next.config.js`.',
    tags: ['next-image', 'otimizacao', 'lazy-loading', 'webp', 'responsive'],
  },
  {
    id: 'next-014',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como funciona o roteamento no App Router do Next.js? Explique a estrutura de pastas.',
    hints: ['app/ diretório', 'page.tsx para rotas', 'layout.tsx, error.tsx, loading.tsx'],
    explanation: 'App Router: cada pasta em `app/` representa um segmento de URL. Arquivos especiais: `page.tsx` (torna a pasta uma rota), `layout.tsx` (UI compartilhada), `loading.tsx` (Suspense fallback), `error.tsx` (Error Boundary), `not-found.tsx`, `template.tsx` (layout remontado a cada navegação). Estrutura: `app/page.tsx` → `/`, `app/about/page.tsx` → `/about`, `app/blog/[slug]/page.tsx` → `/blog/qualquer-slug`. Grupos e slots para layouts paralelos.',
    tags: ['app-router', 'roteamento', 'estrutura', 'pasta', 'segmentos'],
  },
  {
    id: 'next-015',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Parallel Routes e Intercepting Routes no Next.js?',
    hints: ['@slot para paralelas', '(.) para interceptar', 'Modais sem perder contexto'],
    explanation: 'Parallel Routes: `@slot` — renderizar múltiplas páginas no mesmo layout simultaneamente. Ex: `app/@modal/page.tsx` e `app/@content/page.tsx` no mesmo layout. Útil para dashboards com múltiplos painéis. Intercepting Routes: `(.)path` — interceptar uma rota para mostrar em modal mantendo a URL. Ex: click em foto → modal com foto, mas URL muda para `/photos/id`. Ao acessar diretamente a URL: página completa. Muito usado para UX estilo Instagram.',
    tags: ['parallel-routes', 'intercepting-routes', 'modal', 'ux', 'avancado'],
  },
  {
    id: 'next-016',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer mutations com Server Actions no Next.js? Integre com React Hook Form.',
    hints: ['useFormState', 'revalidatePath', 'action no form'],
    explanation: `\`\`\`typescript
// actions.ts
"use server";
export async function createPost(data: FormData) {
  const title = data.get("title") as string;
  // Validação
  const parsed = PostSchema.safeParse({ title });
  if (!parsed.success) return { error: parsed.error.format() };
  await db.posts.create({ data: parsed.data });
  revalidatePath("/posts"); // Invalida cache
  redirect("/posts");
}

// page.tsx (Client Component)
"use client";
export default function NewPostPage() {
  const [state, action] = useActionState(createPost, null);
  return (
    <form action={action}>
      <input name="title" />
      {state?.error && <p>{state.error.title?._errors[0]}</p>}
      <button type="submit">Criar</button>
    </form>
  );
}
\`\`\``,
    tags: ['server-actions', 'forms', 'useActionState', 'revalidatePath', 'mutation'],
  },
  {
    id: 'next-017',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar autenticação em Next.js com NextAuth.js (Auth.js)?',
    hints: ['Session provider', 'Callbacks', 'Middleware para proteção de rotas'],
    explanation: 'Auth.js (NextAuth v5): (1) Configure em `auth.ts` com providers (Google, GitHub, Credentials); (2) Route Handler: `app/api/auth/[...nextauth]/route.ts`; (3) `SessionProvider` no layout raiz; (4) Server: `const session = await auth()` em Server Components e Actions; (5) Client: `const { data: session } = useSession()`; (6) Middleware: `export { auth as middleware } from "@/auth"` com `matcher` para proteger rotas. JWT ou Database sessions. Callbacks para customizar session e JWT.',
    tags: ['nextauth', 'autenticacao', 'session', 'oauth', 'middleware'],
  },
  {
    id: 'next-018',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `next/link` e como difere de uma tag `<a>` normal?',
    hints: ['Client-side navigation', 'Prefetch automático', 'Sem reload completo'],
    explanation: '`<Link href="/about">` realiza client-side navigation (SPA-style) sem reload completo da página — muito mais rápido. Prefetch automático: ao entrar na viewport, Next.js pré-busca o payload da rota. Diferenças de `<a>`: (1) Sem reload; (2) Prefetch; (3) Mantém estado client. Quando usar `<a>`: links externos, downloads, links que devem recarregar totalmente. No App Router, `<Link>` é Client Component — o prefetch usa o Server Component payload.',
    tags: ['next-link', 'navegacao', 'prefetch', 'client-side', 'spa'],
  },
  {
    id: 'next-019',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar `useRouter`, `usePathname` e `useSearchParams` em Next.js App Router?',
    hints: ['Client Components apenas', 'Diferente do Pages Router', 'Suspense para searchParams'],
    explanation: 'No App Router (diferente do Pages Router): `useRouter()` retorna objeto apenas com `push`, `replace`, `refresh`, `back`, `forward` — não inclui `query`. Para rota atual: `usePathname()`. Para query params: `useSearchParams()` — retorna `ReadonlyURLSearchParams`. IMPORTANTE: `useSearchParams()` requer wrapping em `<Suspense>`. Todos são Client Components. Em Server Components: use `params` e `searchParams` props da página.',
    tags: ['useRouter', 'usePathname', 'useSearchParams', 'navegacao', 'client'],
  },
  {
    id: 'next-020',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar metadata (SEO) no Next.js App Router?',
    hints: ['export const metadata', 'generateMetadata para dinâmico', 'Hierarchy de metadata'],
    explanation: `\`\`\`typescript
// Static metadata:
export const metadata: Metadata = {
  title: "Meu Site",
  description: "Descrição",
  openGraph: { title: "OG Title", images: ["/og.png"] },
};

// Dynamic metadata (para páginas com params):
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}
\`\`\`
Hierarquia: metadata de filho sobrescreve pai. Template: \`title: { template: "%s | Meu Site", default: "Meu Site" }\`.`,
    tags: ['metadata', 'seo', 'openGraph', 'generateMetadata', 'title'],
  },
  {
    id: 'next-021',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar i18n (internacionalização) no Next.js App Router?',
    hints: ['Segmento de rota [locale]', 'Middleware para detecção', 'next-intl'],
    explanation: 'Abordagem: (1) Rota com locale: `app/[locale]/page.tsx`; (2) Middleware (`middleware.ts`) detecta idioma preferido e redireciona; (3) Biblioteca `next-intl` ou `next-i18next` para traduções; (4) `generateStaticParams` para gerar todas as locales estaticamente. `next-intl` App Router: `unstable_setRequestLocale` em Server Components, `useTranslations()` em Client/Server Components. Sem configurar i18n no `next.config.js` (Pages Router approach) — o App Router usa a estrutura de roteamento diretamente.',
    tags: ['i18n', 'locale', 'next-intl', 'internacionalizacao', 'middleware'],
  },
  {
    id: 'next-022',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o Next.js `unstable_cache` e como difere do cache do fetch?',
    hints: ['Cachear qualquer função assíncrona', 'Não apenas fetch', 'Tags e revalidation'],
    explanation: `\`unstable_cache\` (ou \`cache\` no next 15) cacheia o resultado de qualquer função async — não apenas fetch. Útil para queries de ORM (Prisma, Drizzle) que não passam por fetch.
\`\`\`typescript
import { unstable_cache } from "next/cache";
const getProducts = unstable_cache(
  async (category: string) => {
    return db.products.findMany({ where: { category } });
  },
  ["products"], // Cache key
  { revalidate: 60, tags: ["products"] }
);
\`\`\`
\`revalidateTag("products")\` em Server Action invalida o cache. Diferença do fetch: fetch só funciona para requests HTTP; \`unstable_cache\` funciona para qualquer função.`,
    tags: ['unstable_cache', 'cache', 'orm', 'prisma', 'revalidateTag'],
  },
  {
    id: 'next-023',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tratar erros no Next.js App Router com `error.tsx`?',
    hints: ['Client Component', 'error e reset props', 'Não captura erros no layout'],
    explanation: '`error.tsx` cria um Error Boundary automático para o segmento de rota. DEVE ser Client Component (`"use client"`). Recebe `error: Error` e `reset: () => void`. `reset()` tenta re-renderizar sem reload. Cuidado: `error.tsx` NÃO captura erros em `layout.tsx` do mesmo nível — apenas de `page.tsx` e componentes filhos. Para erros no layout raiz, use `global-error.tsx` (substituye o layout completamente — precisa de `<html>` e `<body>`). Tipos de error: network errors, promise rejections não tratadas.',
    tags: ['error-boundary', 'error.tsx', 'global-error', 'reset', 'client'],
  },
  {
    id: 'next-024',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são API Routes no Next.js Pages Router e Route Handlers no App Router?',
    hints: ['app/api/', 'route.ts', 'GET, POST handlers'],
    explanation: 'Pages Router: `pages/api/rota.ts` — exporta função `handler(req, res)`. App Router: `app/api/rota/route.ts` — exporta funções nomeadas `GET`, `POST`, `PUT`, `DELETE`, `PATCH`. Recebem `Request` nativo e retornam `Response`. `NextRequest` e `NextResponse` para features extras (cookies, headers). Exemplo: `export async function GET(request: NextRequest) { const data = await db.query(); return Response.json(data); }`. Route Handlers são mais poderosos (Web API nativa, Edge runtime suportado).',
    tags: ['api-routes', 'route-handlers', 'app-router', 'GET', 'POST'],
  },
  {
    id: 'next-025',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer streaming de dados com Suspense no Next.js?',
    hints: ['Suspense boundaries', 'loading.tsx automático', 'Componentes async'],
    explanation: `Streaming: enviar HTML progressivamente enquanto dados são carregados. Implementação:
\`\`\`tsx
// page.tsx
export default function Page() {
  return (
    <main>
      <h1>Dashboard</h1>
      {/* Carrega imediatamente */}
      <StaticContent />
      {/* Stream: mostra fallback até RecentActivity carregar */}
      <Suspense fallback={<Skeleton />}>
        <RecentActivity /> {/* async component que fetch dados */}
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Recommendations /> {/* outro async component independente */}
      </Suspense>
    </main>
  );
}
\`\`\`
Múltiplos Suspense boundaries permitem streaming paralelo de seções diferentes.`,
    tags: ['streaming', 'suspense', 'skeleton', 'async-component', 'ux'],
  },
  {
    id: 'next-026',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `cookies()` e `headers()` em Server Components e Server Actions no Next.js?',
    hints: ['next/headers', 'Read-only em Server Components', 'Modificar em Actions'],
    explanation: `\`\`\`typescript
import { cookies, headers } from "next/headers";

// Em Server Component (read-only):
async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  return <div>Theme: {theme}</div>;
}

// Em Server Action (pode modificar):
async function setTheme(theme: string) {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set("theme", theme, { httpOnly: true, secure: true });
}
\`\`\`
cookies() e headers() são dynamic functions — opt-out automático do cache estático.`,
    tags: ['cookies', 'headers', 'server-components', 'server-actions', 'next-headers'],
  },
  {
    id: 'next-027',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o `next.config.js`? Quais são as configurações mais importantes?',
    hints: ['redirects', 'rewrites', 'env', 'images', 'transpilePackages'],
    explanation: '`next.config.js` (ou `.mjs`) configura o Next.js. Principais: `images.remotePatterns` — origens externas permitidas para `next/image`; `redirects()` — redirecionamentos permanentes/temporários; `rewrites()` — proxy de URLs; `env` — variáveis de ambiente; `transpilePackages` — transpilar pacotes de node_modules; `experimental.ppr` — Partial Prerendering; `experimental.serverActions` (v14+); `headers()` — security headers (HSTS, CSP, X-Frame-Options).',
    tags: ['next-config', 'redirects', 'rewrites', 'images', 'configuracao'],
  },
  {
    id: 'next-028',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como integrar Prisma com Next.js App Router de forma eficiente e evitar múltiplas instâncias?',
    hints: ['Singleton pattern', 'PrismaClient em desenvolvimento', 'Server Components'],
    explanation: `Em desenvolvimento, hot reload cria múltiplas instâncias do PrismaClient — evite com singleton:
\`\`\`typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query"] : [],
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
\`\`\`
Use em Server Components e Actions diretamente — não em Client Components. Para melhor performance: use \`unstable_cache\` para cachear queries frequentes.`,
    tags: ['prisma', 'singleton', 'database', 'server-components', 'hot-reload'],
  },
  {
    id: 'next-029',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar variáveis de ambiente no Next.js? Qual a diferença entre `NEXT_PUBLIC_` e variáveis privadas?',
    hints: ['NEXT_PUBLIC_: expostas ao browser', 'Sem prefixo: apenas servidor', '.env.local'],
    explanation: 'Variáveis com `NEXT_PUBLIC_`: incluídas no bundle client — acessíveis em browser e servidor. NUNCA use para segredos (API keys, senhas). Variáveis sem prefixo: apenas acessíveis no servidor (Server Components, API Routes, Server Actions, Middleware). Arquivos: `.env` (base), `.env.local` (override local, não commitado), `.env.development`, `.env.production`. TypeScript: declare em `env.d.ts` com `declare namespace NodeJS { interface ProcessEnv { MY_VAR: string } }` para type safety.',
    tags: ['env', 'NEXT_PUBLIC', 'seguranca', 'servidor', 'browser'],
  },
  {
    id: 'next-030',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Edge Runtime no Next.js? Quando usar vs Node.js runtime?',
    hints: ['V8 engine sem Node.js APIs', 'Cold start zero', 'Limitações de APIs'],
    explanation: 'Edge Runtime: JavaScript executado mais próximo do usuário (CDN edge nodes), sem servidor dedicado. Características: cold start mínimo, altamente distribuído, sem APIs Node.js nativas (sem filesystem, sem net, sem crypto nativo). Suporta: Web APIs padrão (fetch, crypto, TextEncoder), `next/headers`, `next/cookies`. Quando usar: Middleware (sempre edge), API Routes simples, A/B testing. Quando usar Node.js: acesso a banco, filesystem, módulos npm que usam Node APIs (a maioria dos ORMs). Configure: `export const runtime = "edge"`.',
    tags: ['edge-runtime', 'nodejs', 'cold-start', 'middleware', 'performance'],
  },
  {
    id: 'next-031',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar upload de arquivos com Next.js Server Actions?',
    hints: ['FormData com arquivo', 'multipart/form-data', 'Vercel Blob ou S3'],
    explanation: `\`\`\`typescript
// Server Action para upload
async function uploadFile(formData: FormData) {
  "use server";
  const file = formData.get("file") as File;
  if (!file || file.size === 0) throw new Error("No file");
  if (file.size > 5 * 1024 * 1024) throw new Error("File too large");
  // Upload para storage (ex: Vercel Blob)
  const blob = await put(file.name, file, { access: "public" });
  await db.files.create({ data: { url: blob.url } });
  revalidatePath("/files");
  return { url: blob.url };
}

// Client Component
<form action={uploadFile}>
  <input type="file" name="file" accept="image/*" />
  <button type="submit">Upload</button>
</form>
\`\`\``,
    tags: ['upload', 'formdata', 'server-action', 'vercel-blob', 'arquivo'],
  },
  {
    id: 'next-032',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `not-found.tsx` no Next.js? Como disparar manualmente?',
    hints: ['404 personalizado', 'notFound()', 'Segmento de rota'],
    explanation: '`not-found.tsx`: página 404 personalizada por segmento de rota. `app/not-found.tsx` — global. `app/products/not-found.tsx` — apenas para rotas de produtos. Disparar manualmente: `import { notFound } from "next/navigation"; if (!product) notFound();`. O Next.js exibe automaticamente quando uma rota não existe. Diferente de `error.tsx` (erros de runtime) — `not-found` é para recursos inexistentes. Status code 404 é retornado corretamente para SEO.',
    tags: ['not-found', '404', 'notFound', 'navegacao', 'seo'],
  },
  {
    id: 'next-033',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como integrar React Query (TanStack Query) com Next.js App Router?',
    hints: ['QueryClientProvider no layout', 'Prefetch no servidor', 'HydrationBoundary'],
    explanation: `Integração Server + Client:
\`\`\`tsx
// providers.tsx (Client Component)
"use client";
const queryClient = new QueryClient();
export function Providers({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

// layout.tsx
export default function Layout({ children }) {
  return <Providers>{children}</Providers>;
}

// page.tsx (prefetch no servidor)
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["products"], queryFn: fetchProducts });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductList /> {/* useQuery já tem dados! */}
    </HydrationBoundary>
  );
}
\`\`\``,
    tags: ['react-query', 'nextjs', 'prefetch', 'HydrationBoundary', 'server-client'],
  },
  {
    id: 'next-034',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como estruturar uma aplicação Next.js grande para múltiplos times?',
    hints: ['Feature folders', 'Shared components', 'Paths aliases', 'Route groups por domínio'],
    explanation: `Estrutura para escala:
\`\`\`
app/
  (marketing)/        # Route group: sem autenticação
    page.tsx
    about/page.tsx
  (app)/              # Route group: autenticado
    dashboard/page.tsx
    products/
      [id]/page.tsx
src/
  features/
    products/
      components/
      hooks/
      services/
      index.ts
  components/ui/      # Design system compartilhado
  lib/               # Utilitários globais
  types/             # Tipos compartilhados
\`\`\`
Paths aliases em tsconfig: \`"@/*": ["./src/*"]\`. Monorepo com Turborepo para múltiplos apps.`,
    tags: ['arquitetura', 'estrutura', 'feature-folder', 'monorepo', 'escala'],
  },
  {
    id: 'next-035',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar e usar `next/font` para otimizar fontes?',
    hints: ['Zero CLS', 'Self-hosted automático', 'CSS variables'],
    explanation: `\`next/font\` faz self-hosting automático de Google Fonts eliminando requests externos:
\`\`\`typescript
// app/layout.tsx
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable
  display: "swap",
});
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={\`\${inter.variable} \${mono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
// CSS: font-family: var(--font-inter)
\`\`\`
Elimina layout shift de fontes (CLS = 0) e requests de terceiros.`,
    tags: ['next-font', 'google-fonts', 'cls', 'performance', 'self-hosted'],
  },
  {
    id: 'next-036',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar rate limiting em Next.js Route Handlers?',
    hints: ['Upstash Redis', 'IP do cliente', 'x-forwarded-for', 'Resposta 429'],
    explanation: 'Rate limiting via Upstash Redis com Ratelimit: instale @upstash/ratelimit e @upstash/redis. Configure: const ratelimit = new Ratelimit({ redis: Redis.fromEnv(), limiter: Ratelimit.slidingWindow(10, "1 m") }). No Route Handler: const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1"; const { success } = await ratelimit.limit(ip); if (!success) return new Response("Too Many Requests", { status: 429, headers: { "Retry-After": "60" } }). Para usuários autenticados: use userId em vez de IP.',
    tags: ['rate-limit', 'upstash', 'redis', 'route-handler', '429'],
  },
  {
    id: 'next-037',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar WebSocket em Next.js? Quais são as limitações?',
    hints: ['Custom server', 'Route Handler não suporta WebSocket nativamente', 'Vercel: use Pusher ou Ably'],
    explanation: 'Next.js App Router Route Handlers não suportam WebSocket nativamente (requisições HTTP, não TCP). Opções: (1) Custom server com Node.js: server.ts com ws ou socket.io — perde otimizações do Next.js; (2) Serviço externo: Pusher, Ably, PartyKit, Upstash QStash — mais simples para produção; (3) Vercel: use Vercel Realtime (com Ably) ou migrate para SSE para casos unidirecionais. Para Vercel Deployment: WebSocket não é suportado no Edge Runtime — use Node.js runtime.',
    tags: ['websocket', 'nextjs', 'pusher', 'ably', 'custom-server'],
  },
  {
    id: 'next-038',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `generateStaticParams` no Next.js App Router? Quando usar?',
    hints: ['Pré-gera parâmetros dinâmicos em build', 'SSG para rotas dinâmicas', 'Equivalente ao getStaticPaths'],
    explanation: 'generateStaticParams: exportada de um page.tsx com rota dinâmica, pré-gera as páginas estáticas em build time. Equivale ao antigo getStaticPaths do Pages Router. Exemplo: export async function generateStaticParams() { const products = await getProducts(); return products.map(p => ({ id: p.id })); }. Sem generateStaticParams: rota dinâmica é gerada on-demand (SSR). Com generateStaticParams vazio: export async function generateStaticParams() { return [] } — nenhuma página é pré-gerada (rotas geradas on-demand e cacheadas). Combine com revalidate para ISR.',
    tags: ['generateStaticParams', 'ssg', 'dinamico', 'build', 'isr'],
  },
  {
    id: 'next-039',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer streaming de resposta de LLM em Next.js?',
    hints: ['ReadableStream', 'Vercel AI SDK', 'useCompletion ou useChat', 'SSE'],
    explanation: 'Com Vercel AI SDK: Route Handler retorna StreamingTextResponse. import { streamText } from "ai"; export async function POST(req: Request) { const { messages } = await req.json(); const result = await streamText({ model: openai("gpt-4"), messages }); return result.toDataStreamResponse(); }. No cliente: useChat() ou useCompletion() — gerencia o estado do streaming automaticamente. Para custom streaming sem Vercel AI SDK: return new Response(ReadableStream que escreve chunks), usando SSE format. StreamingTextResponse respeita o formato esperado pelo useChat.',
    tags: ['streaming', 'llm', 'ai-sdk', 'ReadableStream', 'useChat'],
  },
  {
    id: 'next-040',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer deploy de um app Next.js para produção? Quais são as opções?',
    hints: ['Vercel', 'Dockerização', 'Node.js standalone', 'output: export para estático'],
    explanation: 'Opções de deploy: (1) Vercel (recomendado): git push → deploy automático. Full support para todas as features do Next.js. (2) Node.js: npm run build gera .next/. npm start para rodar. Requer Node.js em servidor. (3) Docker: next.config.js output: "standalone" gera bundle mínimo com apenas o necessário para rodar. Dockerfile multi-stage. (4) Static export: output: "export" gera HTML estático — sem SSR, sem Server Actions, sem route handlers dinâmicos. Para CDN simples. (5) Outros: AWS Amplify, Netlify, Railway — suporte parcial.',
    tags: ['deploy', 'vercel', 'docker', 'standalone', 'producao'],
  },
  {
    id: 'next-041',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Parallel Routes e como criar modais com elas no Next.js?',
    hints: ['@slot no layout', 'intercepting routes', 'Mantém URL'],
    explanation: 'Parallel Routes: renderizar múltiplas páginas no mesmo layout. @slot: pastas especiais que são injetadas como props no layout. Exemplo: app/@modal/login/page.tsx + app/layout.tsx recebe { children, modal }. Para modal com URL: intercepting route (.)path captura a rota e exibe como modal enquanto mantém a URL original. Ao acessar diretamente a URL: renderiza a página completa. Ao navegar via Next.js Link: renderiza o modal sobre a página atual. Padrão "Instagram" — photo grid que abre foto em modal mas URL muda.',
    tags: ['parallel-routes', 'modal', 'intercepting', 'slot', 'ux'],
  },
  {
    id: 'next-042',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar internacionalização (i18n) com next-intl no App Router?',
    hints: ['[locale] folder', 'Middleware para redirect', 'useTranslations', 'generateStaticParams'],
    explanation: 'Estrutura com next-intl: (1) app/[locale]/layout.tsx — locale como segmento dinâmico; (2) Middleware detecta idioma preferido e redireciona; (3) Server: const t = await getTranslations("namespace"); em Server Components; (4) Client: const t = useTranslations("namespace") em Client Components; (5) generateStaticParams retorna todos os locales para SSG; (6) Arquivos de tradução em /messages/[locale].json. Benefícios: type-safe (TypeScript) com tipos gerados das chaves de tradução, lazy loading por namespace, suporte a pluralização ICU.',
    tags: ['i18n', 'next-intl', 'locale', 'traducao', 'middleware'],
  },
  {
    id: 'next-043',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o Next.js Image Component com placeholders? Como implementar blur-up loading?',
    hints: ['placeholder="blur"', 'blurDataURL', 'Base64 baixa resolução', 'lqip'],
    explanation: 'Blur-up loading: exibe versão borrada enquanto imagem carrega. next/image com placeholder="blur" — requer blurDataURL (string base64 de imagem pequena). Para imagens locais: Next.js gera automaticamente. Para imagens remotas: gere manualmente ou use plaiceholder: const { base64 } = await getPlaiceholder(imageUrl). blurDataURL deve ser uma imagem de dimensões reais mas muito reduzida (10x10 px). LQIP (Low Quality Image Placeholder) é a técnica geral. Benefício UX: percepção de carregamento mais rápido, sem layout shift.',
    tags: ['next-image', 'blur-placeholder', 'blurDataURL', 'lqip', 'ux'],
  },
  {
    id: 'next-044',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `useFormStatus` em Next.js Server Actions?',
    hints: ['Estado de submissão', 'pending: true durante action', 'Deve estar dentro do form'],
    explanation: 'useFormStatus() retorna { pending, data, method, action } — estado do form pai mais próximo. Componente filho dentro do form pode usar pending para mostrar loading. Regra: o componente que usa useFormStatus DEVE estar dentro do form — não funciona no mesmo componente que tem o form. Exemplo: function SubmitButton() { const { pending } = useFormStatus(); return <button disabled={pending}>{pending ? "Salvando..." : "Salvar"}</button>; }. Antes de useFormStatus: precisava de estado manual e startTransition.',
    tags: ['useFormStatus', 'server-actions', 'pending', 'submit', 'forms'],
  },
  {
    id: 'next-045',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar guards de autenticação em Next.js usando Middleware?',
    hints: ['middleware.ts', 'matcher', 'Redirecionar para login', 'JWT verificação'],
    explanation: 'middleware.ts no root verifica autenticação antes de servir qualquer rota protegida. export function middleware(request: NextRequest) { const token = request.cookies.get("auth-token"); if (!token && isProtectedRoute(request.pathname)) { return NextResponse.redirect(new URL("/login", request.url)); } return NextResponse.next(); }. Matcher para rotas específicas: export const config = { matcher: ["/dashboard/:path*", "/profile"] }. Para JWT: verificação com jose ou @auth/core (sem importar JWT libs pesadas no Edge). Mais eficiente que verificar em cada page.tsx.',
    tags: ['middleware', 'autenticacao', 'guards', 'redirect', 'jwt'],
  },
  {
    id: 'next-046',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como criar páginas de erro customizadas no Next.js?',
    hints: ['not-found.tsx', 'error.tsx', 'global-error.tsx'],
    explanation: 'Next.js App Router tem três arquivos para erros: (1) not-found.tsx: exibido quando notFound() é chamado ou rota não existe — 404; (2) error.tsx: Error Boundary para erros de runtime no segmento — DEVE ser Client Component; (3) global-error.tsx: captura erros no layout raiz — deve incluir html e body tags. Para erros de API em Route Handlers: return Response.json({ error: message }, { status: 400 }). Em produção, o Next.js exibe sua error.tsx; em desenvolvimento, mostra o error overlay com stack trace.',
    tags: ['error-pages', 'not-found', 'error-boundary', '404', 'customizado'],
  },
  {
    id: 'next-047',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Next.js `redirect()` e `permanentRedirect()`? Como usar em Server Components?',
    hints: ['Importado de next/navigation', 'Lança exceção internamente', 'Use em Server Actions'],
    explanation: 'redirect(url) e permanentRedirect(url) importados de "next/navigation" funcionam em Server Components, Server Actions e Route Handlers. redirect: retorna 307 (temporário). permanentRedirect: retorna 308 (permanente). Internamente lançam uma exceção que é capturada pelo framework — por isso não é necessário return. Em Client Components: use router.push() ou router.replace(). Não use redirect() dentro de try/catch pois a exceção seria capturada. Diferente do redirect() do middleware que retorna NextResponse.',
    tags: ['redirect', 'permanentRedirect', 'server-components', 'navigation', 'next14'],
  },
  {
    id: 'next-048',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer A/B testing no Next.js com Middleware e cookies?',
    hints: ['middleware.ts', 'cookie para variante', 'rewrites para servir variante'],
    explanation: 'A/B testing no edge (zero latência): o Middleware atribui variante ao usuário e serve a versão correta. export function middleware(req) { const bucket = req.cookies.get("bucket")?.value; const ab = bucket || (Math.random() < 0.5 ? "a" : "b"); const res = NextResponse.rewrite(new URL("/home-" + ab, req.url)); res.cookies.set("bucket", ab, { maxAge: 60*60*24*30 }); return res; }. A variante é armazenada em cookie para consistência. Combine com analytics para medir conversões. Nenhum JS no cliente — acontece no Edge antes de servir a página.',
    tags: ['ab-testing', 'middleware', 'cookie', 'edge', 'rewrite'],
  },
  {
    id: 'next-049',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `revalidatePath()` e `revalidateTag()` no Next.js? Como usá-los com Server Actions?',
    hints: ['Invalidar cache de rota ou tag', 'Após mutation', 'On-demand ISR'],
    explanation: 'revalidatePath("/products") e revalidateTag("products-list") invalidam o cache do servidor on-demand, sem esperar o tempo de revalidação configurado. Uso em Server Actions: após criar/editar/deletar um recurso, invalide o cache da rota afetada. revalidatePath: invalida toda a rota (incluindo todos os layouts acima). revalidateTag: invalida apenas os fetches que têm a tag: fetch(url, { next: { tags: ["products-list"] } }). Tags são mais granulares. Exemplo: criar produto → revalidateTag("products") → página /products é regerada na próxima requisição.',
    tags: ['revalidatePath', 'revalidateTag', 'cache', 'server-action', 'isr'],
  },
  {
    id: 'next-050',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar proteção CSRF em Server Actions no Next.js?',
    hints: ['Same-origin check automático', 'Origin header', 'Token não necessário geralmente'],
    explanation: 'Next.js Server Actions têm proteção CSRF automática: verificam o header Origin para garantir que a requisição vem do mesmo domínio. Além disso: (1) Apenas o método POST é aceito; (2) O token de action é um hash criptográfico gerado no servidor; (3) É mais resistente que CSRF tokens tradicionais porque o formato de action ID muda a cada deploy. Para APIs com Route Handlers: implemente CSRF tokens manualmente ou use SameSite cookies. Importante: Server Actions não são substitutos de autorização — sempre verifique autenticação dentro da action.',
    tags: ['csrf', 'server-actions', 'seguranca', 'same-origin', 'post'],
  },
  {
    id: 'next-051',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o arquivo `template.tsx` no App Router? Como difere de `layout.tsx`?',
    hints: ['Remontado a cada navegação', 'Novo estado por navegação', 'Animações de transição'],
    explanation: 'template.tsx é similar ao layout.tsx mas com uma diferença crucial: enquanto layout.tsx persiste entre navegações (não é remontado), template.tsx é REMONTADO a cada navegação — cria uma nova instância. Consequência: state do template é resetado a cada navegação. Casos de uso: (1) Animações de transição entre páginas que precisam ser acionadas a cada navegação; (2) Funcionalidades que dependem de efeitos que devem rodar a cada navegação (ex: analytics de page view via useEffect); (3) Quando você explicitamente quer que o componente seja novo a cada navegação.',
    tags: ['template', 'layout', 'app-router', 'remontagem', 'animacao'],
  },
  {
    id: 'next-052',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar Turbopack no desenvolvimento Next.js? Quais são as melhorias de performance?',
    hints: ['--turbopack flag', 'Mais rápido que Webpack', 'Incremental compilation'],
    explanation: 'Turbopack: bundler escrito em Rust, integrado ao Next.js como alternativa ao Webpack para desenvolvimento. Ativar: next dev --turbopack (ou "dev": "next dev --turbopack" no package.json). Melhorias: (1) Cold start muito mais rápido — compila apenas o que é necessário inicialmente; (2) HMR mais rápido — atualizações incrementais precisas; (3) Menos uso de memória. Em Next.js 14+: Turbopack é estável para desenvolvimento. Para produção: ainda usa Webpack (Turbopack para produção em desenvolvimento). Não suporta 100% dos plugins Webpack — verifique compatibilidade.',
    tags: ['turbopack', 'webpack', 'performance', 'hmr', 'rust'],
  },
  {
    id: 'next-053',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer request deduplication automático no Next.js App Router?',
    hints: ['Memoização de fetch automática', 'Mesmo URL na mesma request', 'Múltiplos componentes'],
    explanation: 'No Next.js App Router, chamadas fetch() com o mesmo URL são automaticamente deduplicadas durante um único server-side render. Se o Layout, Page e dois componentes diferentes chamam fetch("/api/user") durante o mesmo request, apenas UMA chamada HTTP é feita e o resultado é compartilhado. Isso é feito via Request Memoization (primeira camada do sistema de cache). Não funciona para: POST requests, fetch com body, ou fora do contexto de renderização. Para funções assíncronas não-fetch: use unstable_cache para similar behavior.',
    tags: ['deduplication', 'request-memoization', 'fetch', 'server-component', 'cache'],
  },
  {
    id: 'next-054',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como fazer upload de arquivos para um storage na nuvem (Vercel Blob/S3) com Next.js?',
    hints: ['Server Action ou Route Handler', 'FormData', 'Content-Type multipart'],
    explanation: 'Upload com Vercel Blob: instale @vercel/blob. Server Action: async function upload(formData: FormData) { "use server"; const file = formData.get("file") as File; const blob = await put(file.name, file, { access: "public" }); return blob.url; }. Para S3: use aws-sdk/client-s3 com PutObjectCommand. Para arquivos grandes: use pre-signed URLs — o cliente faz upload diretamente para o S3 sem passar pelo servidor Next.js. Valide: tamanho máximo, tipos aceitos, sanitize o nome do arquivo. Armazene a URL no banco de dados.',
    tags: ['upload', 'vercel-blob', 's3', 'server-action', 'presigned-url'],
  },
  {
    id: 'next-055',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Next.js Script component (`next/script`)? Como otimiza o carregamento de scripts externos?',
    hints: ['strategy prop', 'beforeInteractive, afterInteractive, lazyOnload', 'Worker strategy'],
    explanation: 'next/script: componente para carregar scripts externos de forma otimizada. Strategies: (1) beforeInteractive: carrega antes da hidratação — para scripts críticos (ex: consentimento de cookies); (2) afterInteractive (padrão): carrega após hidratação — para analytics, tag managers; (3) lazyOnload: carrega quando o browser fica idle — para chat widgets, surveys; (4) worker: carrega em Web Worker (experimental). Vantagem: evita bloquear a renderização, remove necessidade de defer/async manual. Combine com onLoad/onReady callbacks para saber quando o script está pronto.',
    tags: ['next-script', 'strategy', 'performance', 'scripts-externos', 'analytics'],
  },
  {
    id: 'next-056',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como estruturar um projeto Next.js com múltiplos tenants (multi-tenancy) sem subdomínios separados?',
    hints: ['Middleware para tenant', 'Pathname ou header', 'Shared codebase', 'DB isolation'],
    explanation: 'Multi-tenancy via Middleware: (1) Detecte o tenant pelo domínio (tenant1.meuapp.com), header customizado, ou primeiro segmento de URL (/tenant1/dashboard); (2) Injete o tenantId como header: request.headers.set("x-tenant-id", tenantId); (3) Route handlers e Server Actions leem o header para filtrar dados; (4) Estrutura de DB: schema por tenant (PostgreSQL schemas), tabela compartilhada com tenantId, ou banco separado. Para subdomain routing: middleware redireciona /dashboard para o layout correto baseado no host header. Cuidado: sem vazamento de dados entre tenants em cache.',
    tags: ['multi-tenancy', 'middleware', 'tenant', 'subdominio', 'isolamento'],
  },
  {
    id: 'next-057',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar search engine optimization (SEO) completo no Next.js App Router?',
    hints: ['Metadata API', 'sitemap.ts', 'robots.ts', 'JSON-LD'],
    explanation: 'SEO completo no Next.js: (1) Metadata API: export const metadata = { title: { template: "%s | Site", default: "Site" }, description, openGraph, twitter }; (2) Dynamic metadata com generateMetadata() para páginas baseadas em dados; (3) sitemap.ts: export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "...", lastModified: new Date() }] }; (4) robots.ts: export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://..." } }; (5) JSON-LD: <script type="application/ld+json"> para dados estruturados.',
    tags: ['seo', 'metadata', 'sitemap', 'robots', 'json-ld'],
  },
  {
    id: 'next-058',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `useFormState` (agora `useActionState`)? Como difere de `useFormStatus`?',
    hints: ['Estado da action', 'Acumula resultado', 'vs status de submissão'],
    explanation: 'useActionState(action, initialState) (antes chamado useFormState): retorna [state, dispatch] onde state é o valor retornado pela última execução da action. Recebe o estado anterior e formData. useFormStatus(): retorna o status da submissão do form (pending: true enquanto submete). Diferença: useActionState acumula resultados da action (ex: validação de erros), useFormStatus informa o estado do submit. Use juntos: useActionState para validation errors, useFormStatus no botão de submit para disabilitar durante submissão.',
    tags: ['useActionState', 'useFormStatus', 'server-action', 'form', 'estado'],
  },
  {
    id: 'next-059',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como integrar WebSockets em um app Next.js usando Pusher (cloud)?',
    hints: ['Cliente: pusher-js', 'Servidor: Pusher trigger em Server Action', 'Sem servidor WebSocket próprio'],
    explanation: 'Pusher (Channels): serviço gerenciado de WebSocket. Setup: (1) npm install pusher pusher-js; (2) Server Action: const pusher = new Pusher({ appId, key, secret, cluster }); await pusher.trigger("canal", "evento", dados); (3) Cliente: const client = new PusherClient(key, { cluster }); const channel = client.subscribe("canal"); channel.bind("evento", (data) => setState(data)). Limpe a subscription no useEffect cleanup. Alternativas: Ably, Soketi (self-hosted), Upstash. Vantagem: sem precisar de servidor WebSocket próprio (funciona com Vercel).',
    tags: ['pusher', 'websocket', 'real-time', 'cloud', 'channels'],
  },
  {
    id: 'next-060',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar cache granular com tags no Next.js 14+?',
    hints: ['fetch tags', 'revalidateTag', 'unstable_cache', 'On-demand ISR'],
    explanation: 'Cache com tags: fetch("/api/products", { next: { tags: ["products"], revalidate: 3600 } }). Para invalidar: revalidateTag("products") — invalida todos os fetches com essa tag. Para funções não-fetch: const getCachedProducts = unstable_cache(fetchFromDB, ["products-db"], { tags: ["products"], revalidate: 3600 }). Hierarquia de cache: função mais específica vence. Use tags por recurso: "product-123", "user-456". Em Server Actions após mutation: await createProduct(data); revalidateTag("products"). Resultado: cache de 1 hora que pode ser invalidado imediatamente.',
    tags: ['cache-tags', 'revalidateTag', 'unstable_cache', 'on-demand', 'isr'],
  },
  {
    id: 'next-061',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar Content Security Policy (CSP) com nonces no Next.js?',
    hints: ['middleware.ts', 'nonce por request', 'next.config.js headers'],
    explanation: `CSP com nonces no Next.js (previne XSS):
\`\`\`typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = [
    "default-src 'self'",
    \`script-src 'self' 'nonce-\${nonce}'\`,
    "style-src 'self' 'unsafe-inline'",
  ].join("; ");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}
// layout.tsx: const nonce = headers().get("x-nonce")
// <script nonce={nonce}> para scripts inline
\`\`\``,
    tags: ['csp', 'nonce', 'middleware', 'seguranca', 'xss'],
  },
  {
    id: 'next-062',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar o hook `useRouter` do App Router vs o antigo Pages Router?',
    hints: ['Importação diferente', 'Menos funcionalidades', 'Push vs navigate'],
    explanation: 'App Router: importa de "next/navigation" — router tem apenas push, replace, refresh, back, forward. Sem query, pathname, asPath. Pages Router: importa de "next/router" — router tem pathname, query, asPath, isFallback, eventos. No App Router: use usePathname() para pathname e useSearchParams() para query params separadamente. push() aceita URL string ou objeto. refresh(): revalida todos os dados da página sem perder client state. Migração: substitua useRouter().query por useSearchParams() e router.pathname por usePathname().',
    tags: ['useRouter', 'app-router', 'pages-router', 'migracao', 'navegacao'],
  },
  {
    id: 'next-063',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você estruturaria um projeto Next.js de e-commerce completo com App Router?',
    hints: ['Route groups', 'Parallel routes', 'Server Components para dados', 'Client Components para interatividade'],
    explanation: `Estrutura de e-commerce:
app/
  (store)/             # Route group: loja pública
    layout.tsx         # Header + footer
    page.tsx           # Homepage (SSG)
    products/
      page.tsx         # Listagem (ISR)
      [slug]/page.tsx  # Produto (ISR)
    cart/page.tsx      # Carrinho (CSR)
  (admin)/             # Route group: admin
    layout.tsx         # Admin nav
    dashboard/page.tsx
  api/
    checkout/route.ts  # Webhook Stripe

Server Components para: listagem, produto, homepage.
Client Components para: carrinho, busca, filtros dinâmicos.
Server Actions para: adicionar ao carrinho, checkout.
Middleware: autenticação do admin.`,
    tags: ['e-commerce', 'estrutura', 'route-groups', 'server-components', 'app-router'],
  },
  {
    id: 'next-064',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o arquivo `instrumentation.ts` no Next.js? Para que serve?',
    hints: ['OpenTelemetry', 'Inicialização server-side', 'Uma vez por startup'],
    explanation: 'instrumentation.ts: arquivo especial na raiz do projeto que exporta uma função register() executada UMA VEZ quando o servidor Next.js inicia (tanto no Node.js quanto no Edge runtime). Caso de uso principal: configurar OpenTelemetry para observabilidade. export async function register() { if (process.env.NEXT_RUNTIME === "nodejs") { const { NodeSDK } = await import("@opentelemetry/sdk-node"); new NodeSDK({ ... }).start(); } }. Também útil para inicializar conexões de DB, configurar loggers globais, ou qualquer setup que deve acontecer uma vez ao iniciar.',
    tags: ['instrumentation', 'opentelemetry', 'observabilidade', 'startup', 'nodejs'],
  },
  {
    id: 'next-065',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como lidar com CORS em Next.js Route Handlers?',
    hints: ['Access-Control headers', 'OPTIONS preflight', 'Middleware para CORS global'],
    explanation: `CORS em Route Handlers:
\`\`\`typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://meusite.com",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ success: true }, { headers: corsHeaders });
}
\`\`\`
Para CORS global: configure no middleware.ts. Para APIs públicas: "Access-Control-Allow-Origin": "*" (mas sem credentials). Para APIs privadas: liste origens específicas.`,
    tags: ['cors', 'route-handlers', 'options', 'preflight', 'api'],
  },
  {
    id: 'next-066',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como configurar o bundle analyzer para otimizar o tamanho do JavaScript no Next.js?',
    hints: ['@next/bundle-analyzer', 'ANALYZE=true', 'Visualizar módulos pesados'],
    explanation: 'npm install @next/bundle-analyzer. next.config.js: const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" }); module.exports = withBundleAnalyzer({ ... }). Executar: ANALYZE=true npm run build. Abre visualização treemap dos bundles client e server. O que procurar: (1) Módulos grandes inesperados (ex: moment.js 300KB); (2) Duplicação de módulos; (3) Chunks que deveriam ser lazy-loaded mas não são. Ações: trocar libs pesadas, adicionar dynamic imports, verificar tree shaking.',
    tags: ['bundle-analyzer', 'otimizacao', 'bundle-size', 'treemap', 'performance'],
  },
  {
    id: 'next-067',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar autenticação com credentials (email/senha) no Auth.js (NextAuth v5)?',
    hints: ['CredentialsProvider', 'authorize callback', 'JWT session', 'bcrypt'],
    explanation: `Auth.js Credentials:
\`\`\`typescript
// auth.ts
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async ({ email, password }) => {
      const user = await db.users.findUnique({ where: { email } });
      if (!user || !await bcrypt.compare(password, user.hashedPassword)) {
        throw new CredentialsSignin("Invalid credentials");
      }
      return { id: user.id, email: user.email, name: user.name };
    }
  })],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) { if (user) token.id = user.id; return token; },
    session({ session, token }) { session.user.id = token.id; return session; },
  },
});
\`\`\``,
    tags: ['auth-js', 'credentials', 'jwt', 'bcrypt', 'autenticacao'],
  },
  {
    id: 'next-068',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `unstable_noStore()` no Next.js? Quando usar?',
    hints: ['Opts out do cache', 'Equivalente a cache: "no-store"', 'Dados sempre frescos'],
    explanation: 'unstable_noStore() (experimental): chame dentro de um componente ou função para indicar que esse componente nunca deve ser cacheado estaticamente — equivale a fetch com cache: "no-store" para o componente inteiro. import { unstable_noStore as noStore } from "next/cache"; export async function UserPanel() { noStore(); const user = await getCurrentUser(); // Sempre busca dados frescos }. Útil para componentes que mostram dados específicos do usuário autenticado, horários ou dados que mudam frequentemente. Alternativa: export const dynamic = "force-dynamic" no page.tsx.',
    tags: ['noStore', 'cache', 'dinâmico', 'sem-cache', 'componente'],
  },
  {
    id: 'next-069',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `useOptimistic` (React 19 / Next.js) para updates otimísticos mais simples?',
    hints: ['Estado otimístico baseado no original', 'Reverter automaticamente em erro', 'Server Action'],
    explanation: 'useOptimistic: simplifica updates otimísticos sem precisar gerenciar rollback manual. const [optimisticMessages, addOptimistic] = useOptimistic(messages); async function sendMessage(text) { addOptimistic([...optimisticMessages, { text, pending: true }]); await saveMessage(text); // Server Action // Após Server Action, optimisticMessages volta para messages real }. Ao chamar addOptimistic: renderiza imediatamente com o valor otimístico. Após a action terminar: volta ao estado real (messages) — se action falhou, o update otimístico é revertido automaticamente.',
    tags: ['useOptimistic', 'react19', 'otimístico', 'server-action', 'simplificado'],
  },
  {
    id: 'next-070',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Quais são as melhores práticas para segurança de Server Actions no Next.js?',
    hints: ['Autenticação', 'Autorização', 'Validação com Zod', 'Rate limiting'],
    explanation: 'Server Actions são endpoints públicos — nunca confie que só a UI as chama. Checklist: (1) Autenticação: const session = await auth(); if (!session) throw new Error("Unauthorized"); (2) Autorização: verifique se o usuário tem permissão para o recurso específico; (3) Validação de input: use Zod para validar e sanitizar todos os inputs; (4) Rate limiting: use Redis/Upstash para limitar chamadas por usuário; (5) CSRF: já protegido automaticamente pelo Next.js; (6) Logging: logue ações críticas para auditoria; (7) Não retorne dados sensíveis — retorne apenas o necessário.',
    tags: ['server-actions', 'seguranca', 'autorizacao', 'validacao', 'rate-limit'],
  },
  {
    id: 'next-071',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `next-safe-action`? Como adiciona type safety e validação às Server Actions?',
    hints: ['Middleware para Server Actions', 'Zod integration', 'Error handling padronizado'],
    explanation: 'next-safe-action: biblioteca que adiciona type safety, validação de schema (Zod) e middleware às Server Actions. Cria um "client" de actions: const action = actionClient.schema(InputSchema).action(async ({ parsedInput, ctx }) => { return { success: true, data: result }; }). No componente: const { execute, result, status } = useAction(action). Vantagens: (1) Input validado automaticamente com Zod; (2) Type safety no cliente e servidor; (3) Middleware para autenticação; (4) Error handling padronizado; (5) Loading e error states. Reduz muito o boilerplate de Server Actions.',
    tags: ['next-safe-action', 'server-actions', 'zod', 'type-safety', 'middleware'],
  },
  {
    id: 'next-072',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `next-intl` e como implementar localização no App Router?',
    hints: ['[locale] segment', 'getTranslations', 'useTranslations', 'Middleware'],
    explanation: 'next-intl: biblioteca de i18n para Next.js App Router. Setup: (1) app/[locale]/layout.tsx com NextIntlClientProvider; (2) messages/en.json, messages/pt.json com traduções; (3) Middleware detecta e redireciona para locale correto; (4) Server: const t = await getTranslations("namespace"); t("key"); (5) Client: const t = useTranslations("namespace"); t("key"). Type-safe: TypeScript conhece todas as chaves de tradução. Pluralização: t("items", { count: 5 }). Datas: t.dateTime(date, "short").',
    tags: ['next-intl', 'i18n', 'locale', 'traducao', 'app-router'],
  },
  {
    id: 'next-073',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar `unstable_after()` no Next.js 15+ para tarefas pós-response?',
    hints: ['Executar após response enviado', 'Logging, analytics, webhooks', 'Sem bloquear o response'],
    explanation: 'unstable_after() (Next.js 15): permite executar código APÓS o response ter sido enviado ao cliente. Ideal para: logging, analytics, sincronização de dados, webhooks. Não bloqueia o response. import { unstable_after as after } from "next/server"; export async function GET() { after(async () => { await logPageView(); await updateAnalytics(); }); // ↑ Roda após o response return Response.json({ data }); // ← Enviado imediatamente }. Diferença de backgroundTask: after é específico do Next.js e integrado ao runtime. Disponível em Route Handlers, Server Actions e middleware.',
    tags: ['unstable_after', 'pos-response', 'logging', 'analytics', 'non-blocking'],
  },
  {
    id: 'next-074',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o `connection()` do Next.js 15? Por que é importante?',
    hints: ['Opt-in para dynamic rendering', 'Substitui headers/cookies', 'Performance explícita'],
    explanation: 'connection() (Next.js 15): função que declara explicitamente que um Server Component requer uma conexão com o usuário (torna dinâmico). Substitui a necessidade de usar headers() ou cookies() para "acidentalmente" tornar uma rota dinâmica. import { connection } from "next/server"; export async function UserDashboard() { await connection(); // Opt-in explícito ao rendering dinâmico const user = await getCurrentUser(); }. Por que importante: torna explícita a intenção de renderização dinâmica, facilita o raciocínio sobre o que é estático vs dinâmico, evita "acidental dynamism".',
    tags: ['connection', 'dynamic', 'next15', 'explicito', 'server-component'],
  },
  {
    id: 'next-075',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são as principais diferenças entre Next.js App Router e Pages Router?',
    hints: ['Server Components', 'Nested layouts', 'Data fetching', 'Migracao'],
    explanation: 'Diferenças principais App Router vs Pages Router: (1) Server Components: App Router tem por padrão, Pages Router não tem; (2) Layouts aninhados: App Router tem layouts por segmento, Pages Router tem _app.tsx global; (3) Data fetching: App Router usa async components + fetch, Pages Router usa getServerSideProps/getStaticProps; (4) Loading/Error states: App Router tem loading.tsx/error.tsx automáticos, Pages Router manual; (5) Streaming: App Router tem nativamente, Pages Router não; (6) Routing: App Router usa pastas com page.tsx, Pages Router usa arquivos em pages/. App Router é o futuro do Next.js.',
    tags: ['app-router', 'pages-router', 'comparacao', 'migracao', 'diferenca'],
  },
  {
    id: 'next-076',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como otimizar imagens com `next/image` em diferentes cenários: hero, galeria, avatar?',
    hints: ['priority para hero', 'fill para galeria', 'sizes para responsivo', 'blur placeholder'],
    explanation: 'Cenários: (1) Hero image (acima do fold): priority (preload), large sizes, blurDataURL para placeholder; (2) Galeria: sem priority (lazy), fill + container position:relative, sizes="(max-width: 768px) 50vw, 33vw"; (3) Avatar: width/height fixos pequenos, sem priority exceto o primeiro; (4) Card image: aspect-ratio via wrapper, fill, sizes baseado em breakpoints do layout. Configuração de quality: default 75 (bom para a maioria). Para imagens externas: configurar remotePatterns no next.config. loader customizado para transformações específicas (resize, crop).',
    tags: ['next-image', 'hero', 'galeria', 'avatar', 'sizes'],
  },
  {
    id: 'next-077',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são `catch` routes e `optional catch-all` routes no Next.js?',
    hints: ['[...slug]', '[[...slug]]', 'Match de qualquer profundidade'],
    explanation: 'Catch-all route [slug]: app/docs/[...slug]/page.tsx — captura /docs/a, /docs/a/b, /docs/a/b/c. params.slug é array. Não captura /docs (sem segmentos). Optional catch-all [[...slug]]: app/docs/[[...slug]]/page.tsx — captura /docs (params.slug = undefined), /docs/a (array), /docs/a/b (array). Útil para: docs com profundidade variável, landing pages com paths customizados, blogs com categorias aninhadas. Combine com generateStaticParams para SSG de todas as rotas conhecidas: return docs.map(d => ({ slug: d.path.split("/") })).',
    tags: ['catch-all', 'optional-catch', 'slug', 'array', 'parametros'],
  },
  {
    id: 'next-078',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar WebAuthn (passkeys) no Next.js com SimpleWebAuthn?',
    hints: ['Registration e Authentication', 'Server Action para verificar', 'Chave pública'],
    explanation: 'WebAuthn/Passkeys: autenticação sem senha com biometria. Setup com SimpleWebAuthn: (1) Registro: servidor gera options (generateRegistrationOptions), cliente registra (startRegistration), servidor verifica (verifyRegistrationResponse) e salva a public key; (2) Login: servidor gera challenge (generateAuthenticationOptions), cliente autentica (startAuthentication), servidor verifica (verifyAuthenticationResponse) com a public key salva; (3) Next.js: Server Actions para cada passo. Vantagem: sem phishing possível (chave vinculada ao domínio), sem senhas para vazar. Suporte: Chrome, Safari, Edge modernos.',
    tags: ['webauthn', 'passkeys', 'biometria', 'sem-senha', 'simple-webauthn'],
  },
  {
    id: 'next-079',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `Suspense` com streaming em Next.js para carregamento progressivo?',
    hints: ['Múltiplos Suspense boundaries', 'async components', 'Shell + content'],
    explanation: 'Streaming com Suspense: Next.js envia o HTML progressivamente conforme as partes carregam. page.tsx com múltiplos Suspense: <main><HeroSection /><Suspense fallback={<Skeleton />}><AsyncProductList /></Suspense><Suspense fallback={<Skeleton />}><AsyncReviews /></Suspense></main>. O browser recebe e exibe HeroSection imediatamente. AsyncProductList e AsyncReviews chegam em paralelo quando seus dados ficam prontos. Resultado: First Contentful Paint rápido, sem bloquear pelo componente mais lento. loading.tsx é um Suspense automático para toda a rota.',
    tags: ['suspense', 'streaming', 'progressivo', 'async-component', 'skeleton'],
  },
  {
    id: 'next-080',
    domain: 'nextjs',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar e usar `Drizzle ORM` com Next.js App Router?',
    hints: ['Type-safe SQL', 'Schema como TypeScript', 'Migrations', 'Pool de conexões'],
    explanation: 'Drizzle ORM: ORM type-safe para TypeScript. Setup com Next.js: (1) Schema: export const users = pgTable("users", { id: uuid("id").primaryKey(), name: text("name").notNull() }); (2) Instância singleton: const db = drizzle(pool, { schema }); (3) Server Component: const users = await db.select().from(usersTable).where(eq(usersTable.active, true)); (4) Server Action: await db.insert(usersTable).values({ name }); (5) Migrations: drizzle-kit generate + migrate. Vantagem sobre Prisma: SQL mais legível, bundle menor, mais controle. Type inference automática do schema.',
    tags: ['drizzle', 'orm', 'schema', 'migrations', 'type-safe'],
  },

  // ── ESTRATÉGIAS DE RENDERIZAÇÃO ────────────────────────────────────────────
  {
    id: 'next-081',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Client-Side Rendering (CSR) e em quais cenários ele é a melhor escolha?',
    options: [
      { id: 'a', text: 'O HTML é gerado no servidor a cada requisição; ideal para SEO e dados sempre frescos', isCorrect: false },
      { id: 'b', text: 'O browser recebe um HTML mínimo e renderiza todo o conteúdo via JavaScript; ideal para dashboards, CRMs e apps autenticadas', isCorrect: true },
      { id: 'c', text: 'O HTML é gerado em build time e servido via CDN; ideal para blogs e landing pages', isCorrect: false },
      { id: 'd', text: 'Combina geração estática com revalidação periódica automática do conteúdo', isCorrect: false },
    ],
    hints: ['O servidor envia basicamente um <div id="root"></div>', 'SEO é mais difícil porque os crawlers precisam executar JavaScript'],
    explanation: 'No CSR, o servidor entrega apenas um shell HTML vazio e um bundle JavaScript. O browser executa o JS e renderiza a UI no cliente. Vantagens: navegação mais rápida após o carregamento inicial, menor carga no servidor, excelente para apps altamente interativas. Desvantagens: SEO mais desafiador (crawlers precisam executar JS), carregamento inicial mais lento em dispositivos menos potentes. Melhor para: dashboards, CRMs, sistemas internos e apps autenticadas onde SEO não é prioridade.',
    tags: ['csr', 'client-side-rendering', 'renderizacao', 'seo'],
  },
  {
    id: 'next-082',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é ISR (Incremental Static Regeneration) e qual problema ele resolve em relação ao SSG puro?',
    options: [
      { id: 'a', text: 'ISR gera páginas estáticas apenas no primeiro acesso e nunca as atualiza depois', isCorrect: false },
      { id: 'b', text: 'ISR elimina a necessidade de servidor Node.js em produção', isCorrect: false },
      { id: 'c', text: 'ISR combina a performance do SSG com atualização automática de conteúdo sem redeploy completo, via revalidação por tempo ou on-demand', isCorrect: true },
      { id: 'd', text: 'ISR é exclusivo do Pages Router e não funciona no App Router do Next.js', isCorrect: false },
    ],
    hints: ['O SSG puro tem um problema: o conteúdo fica congelado até o próximo deploy', 'No App Router, ISR é controlado pela opção `revalidate` no fetch'],
    explanation: 'O SSG puro gera HTML em build time — perfeito para performance e SEO, mas o conteúdo só muda com um novo deploy. O ISR resolve isso: após a primeira geração, uma página pode ser regenerada automaticamente em background quando o tempo de revalidação expira (ex: `{ next: { revalidate: 60 } }`) ou sob demanda via `revalidatePath()`/`revalidateTag()`. O visitante continua recebendo a versão estática em cache enquanto a nova é gerada. Trade-off: existe uma janela curta onde usuários podem ver conteúdo levemente desatualizado.',
    tags: ['isr', 'incremental-static-regeneration', 'ssg', 'revalidacao', 'renderizacao'],
  },
  {
    id: 'next-083',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Um marketplace tem 50.000 páginas de produto com preços que mudam diariamente e precisa de bom SEO. Qual estratégia de renderização é mais adequada?',
    options: [
      { id: 'a', text: 'CSR — para máxima interatividade e menor carga no servidor', isCorrect: false },
      { id: 'b', text: 'SSR puro — para garantir que os preços estejam sempre atualizados a cada request', isCorrect: false },
      { id: 'c', text: 'SSG com ISR — performance de página estática com revalidação periódica dos preços', isCorrect: true },
      { id: 'd', text: 'SSG sem revalidação — para máxima performance via CDN', isCorrect: false },
    ],
    hints: ['CSR prejudica SEO', 'SSR puro tem custo por request em 50k páginas', 'Preços que mudam diariamente não precisam ser atualizados a cada segundo'],
    explanation: 'SSG com ISR é o fit ideal aqui: as páginas são pré-geradas e servidas via CDN (excelente performance e SEO), e o ISR revalida o conteúdo periodicamente (ex: a cada hora) sem necessidade de rebuild completo. CSR sacrificaria SEO. SSR puro geraria 50.000 renders por request sob tráfego — caro e lento. SSG sem revalidação deixaria preços desatualizados até o próximo deploy. No Next.js App Router: `fetch(url, { next: { revalidate: 3600 } })` ou `export const revalidate = 3600` na página.',
    tags: ['isr', 'ssg', 'renderizacao', 'arquitetura', 'ecommerce', 'seo'],
  },
  {
    id: 'next-084',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno-senior', 'senior'],
    text: 'Qual afirmação sobre as estratégias de renderização SSR, SSG, CSR e ISR é CORRETA?',
    options: [
      { id: 'a', text: 'SSG é sempre superior ao SSR em performance e SEO — use SSG por padrão em qualquer situação', isCorrect: false },
      { id: 'b', text: 'CSR tem melhor SEO que SSR porque elimina o TTFB (Time to First Byte)', isCorrect: false },
      { id: 'c', text: 'ISR pode servir conteúdo levemente desatualizado durante a janela de revalidação, o que é aceitável em muitos cenários', isCorrect: true },
      { id: 'd', text: 'SSR elimina completamente a necessidade de cache, pois sempre serve dados frescos diretamente do banco', isCorrect: false },
    ],
    hints: ['Pense nos trade-offs de cada estratégia, não apenas nas vantagens', 'O ISR usa stale-while-revalidate: serve a versão antiga enquanto gera a nova em background'],
    explanation: 'O ISR usa o padrão stale-while-revalidate: quando o tempo de revalidação expira, o próximo visitante recebe a versão em cache (possivelmente desatualizada) enquanto a regeneração ocorre em background. Esse comportamento é aceitável para catálogos, preços diários, artigos de blog — não para saldos bancários ou estoques em tempo real. As outras alternativas são incorretas: SSG falha em conteúdo dinâmico/personalizado; CSR tem SEO mais difícil, não melhor; SSR ainda precisa de cache (Redis, CDN) para escalar sob carga.',
    tags: ['ssr', 'ssg', 'csr', 'isr', 'trade-offs', 'renderizacao', 'stale-while-revalidate'],
  },
]
