import type { Question } from '../session/types'

export const softwareEngineeringQuestions: Question[] = [
  // ── SOLID PRINCIPLES ─────────────────────────────────────────────────────────
  {
    id: 'se-001',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique os princípios SOLID. Como eles se aplicam no desenvolvimento frontend com React?',
    hints: ['Single Responsibility', 'Open/Closed', 'Liskov', 'Interface Segregation', 'Dependency Inversion'],
    explanation: 'S: Single Responsibility — cada componente/função faz uma coisa. O: Open/Closed — aberto para extensão (props, composition) fechado para modificação. L: Liskov Substitution — componentes filhos substituem pais sem quebrar (Polymorphism via children). I: Interface Segregation — props focadas, não mega-componentes com 50 props. D: Dependency Inversion — componentes dependem de abstrações (hooks, interfaces), não implementações concretas (fetch direto). Em React: composição sobre herança, hooks para inversão de dependência.',
    tags: ['solid', 'principios', 'arquitetura', 'react', 'boas-praticas'],
  },
  {
    id: 'se-002',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Princípio DRY (Don\'t Repeat Yourself)? Quando é válido ter duplicação?',
    hints: ['Conhecimento único', 'Abstrações prematuras são piores que duplicação', '"WET"'],
    explanation: 'DRY: cada pedaço de conhecimento tem representação única no sistema. Não é apenas "não copie código" — é sobre evitar duplicação de CONHECIMENTO e REGRA DE NEGÓCIO. Quando duplicar é ok: (1) Código coincidentemente similar mas semânticas diferentes (remover a abstração cria acoplamento artificial); (2) Cedo demais para saber o padrão (Rule of Three: abstraia quando vir três vezes, não duas). "WET" (Write Everything Twice) — uma duplicação pode ser aceitável. Abstrações prematuras são muito mais danosas que duplicação.',
    tags: ['dry', 'duplicacao', 'abstraicao', 'rule-of-three', 'principios'],
  },
  {
    id: 'se-003',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Princípio de Separação de Responsabilidades (Separation of Concerns)? Como aplicar em React?',
    hints: ['Cada módulo com uma responsabilidade', 'Presentational vs Container', 'Custom hooks'],
    explanation: 'SoC: separar partes do código em módulos com responsabilidades distintas. Em React: (1) Componentes Presentational: apenas renderização, sem lógica de negócio; (2) Custom hooks: lógica isolada e testável separada da UI; (3) Services/API clients: lógica de fetch separada dos componentes; (4) Types/schemas: contratos separados da implementação; (5) Utils: funções puras utilitárias. Anti-padrão: componente com 500 linhas misturando fetch, lógica, formatação e renderização.',
    tags: ['separacao-responsabilidades', 'custom-hooks', 'arquitetura', 'react', 'componentes'],
  },
  {
    id: 'se-004',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é KISS (Keep It Simple, Stupid)? Como aplicar no código?',
    hints: ['Complexidade é o inimigo', 'Código mais simples', 'Evite over-engineering'],
    explanation: 'KISS: prefira a solução mais simples que resolve o problema. Complexidade = bugs, dificuldade de manutenção, velocidade menor. Aplicações: (1) Não adicione abstrações antes de precisar; (2) Nomes claros eliminam necessidade de comentários; (3) Funções pequenas com uma responsabilidade; (4) Evite design patterns onde uma if simples resolve; (5) Não preveja requisitos futuros hipotéticos (YAGNI — You Ain\'t Gonna Need It). O código mais simples que funciona é sempre o melhor ponto de partida.',
    tags: ['kiss', 'simplicidade', 'yagni', 'over-engineering', 'principios'],
  },
  // ── DESIGN PATTERNS ─────────────────────────────────────────────────────────
  {
    id: 'se-005',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Observer? Como se manifesta no desenvolvimento frontend?',
    hints: ['Publish-subscribe', 'EventEmitter', 'Reatividade'],
    explanation: 'Observer: define dependência um-para-muitos — quando um objeto muda, todos os dependentes são notificados. Manifestações no frontend: (1) EventEmitter / CustomEvents do DOM; (2) RxJS Observables; (3) Store do Redux (subscribe); (4) Zustand (subscribe); (5) Context API do React; (6) React Query (automaticamente notifica componentes quando dados mudam); (7) MobX (reatividade baseada em observables). Padrão fundamental em UI — eventos e reatividade são a base.',
    tags: ['observer', 'publish-subscribe', 'eventos', 'reatividade', 'pattern'],
  },
  {
    id: 'se-006',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Decorator? Como é usado em JavaScript/TypeScript?',
    hints: ['Adiciona comportamento dinamicamente', 'HOC em React', 'Middleware'],
    explanation: 'Decorator: adiciona responsabilidades a objetos dinamicamente sem alterar sua classe. Em JavaScript: (1) HOC em React: `withAuth(Component)` — adiciona verificação de auth sem modificar o componente; (2) TypeScript Decorators: `@Injectable()`, `@Controller()`; (3) Middleware (Express, Redux): chain de funções que decoram o handler; (4) Funções de ordem superior: `memoize(fn)`, `debounce(fn)`. Diferente de Prototype chain (herança estática) — Decorator é composição dinâmica.',
    tags: ['decorator', 'hoc', 'middleware', 'composicao', 'pattern'],
  },
  {
    id: 'se-007',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Command? Como implementar um sistema de undo/redo com ele?',
    hints: ['Encapsula ação', 'execute e undo', 'Stack de comandos'],
    explanation: `Command: encapsula uma requisição como objeto — permite desfazer/refazer, filas, logging.
\`\`\`typescript
interface Command { execute(): void; undo(): void; }

class AddTextCommand implements Command {
  constructor(private editor: Editor, private text: string, private position: number) {}
  execute() { this.editor.insertAt(this.position, this.text); }
  undo() { this.editor.removeAt(this.position, this.text.length); }
}

class CommandHistory {
  private history: Command[] = [];
  private index = -1;
  execute(cmd: Command) { cmd.execute(); this.history.splice(++this.index); this.history.push(cmd); }
  undo() { if (this.index >= 0) this.history[this.index--].undo(); }
  redo() { if (this.index < this.history.length - 1) this.history[++this.index].execute(); }
}
\`\`\``,
    tags: ['command', 'undo-redo', 'pattern', 'implementacao', 'editor'],
  },
  {
    id: 'se-008',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Repository? Como ele separa a lógica de negócio do acesso a dados?',
    hints: ['Abstrai o data source', 'Interface comum', 'Facilita troca de banco'],
    explanation: 'Repository: abstrai o acesso a dados atrás de uma interface — a lógica de negócio não sabe se os dados vêm de API REST, GraphQL, banco SQL ou mock. Benefícios: (1) Testabilidade: substitua o repositório por mock em testes; (2) Portabilidade: troque a implementação sem alterar a lógica; (3) SRP: lógica de negócio separada de queries. Em React: custom hook que abstrai o fetch — o componente chama `useUserRepository().findById(id)`, não `fetch("/api/users/1")`.',
    tags: ['repository', 'data-access', 'abstrai', 'testabilidade', 'pattern'],
  },
  {
    id: 'se-009',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Domain-Driven Design (DDD)? Como seus conceitos se aplicam ao frontend?',
    hints: ['Ubiquitous Language', 'Bounded Contexts', 'Entities, Value Objects', 'Feature folders'],
    explanation: 'DDD: design orientado ao domínio do negócio. Conceitos: Ubiquitous Language (mesma linguagem em código e negócio), Bounded Contexts (fronteiras claras entre domínios), Entities (identidade única), Value Objects (imutáveis, sem identidade), Aggregates (consistência), Domain Events. No frontend: (1) Feature folders por domínio (products/, orders/, auth/); (2) Naming que reflete o negócio, não a tecnologia; (3) Domain types em packages/domain compartilhados; (4) Anti-corruption layer (adapters) para APIs externas que não usam sua linguagem.',
    tags: ['ddd', 'domain-driven', 'bounded-context', 'ubiquitous-language', 'arquitetura'],
  },
  {
    id: 'se-010',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Clean Architecture? Como os círculos concêntricos se aplicam a um projeto React?',
    hints: ['Independência de frameworks', 'Camadas', 'Dependency Rule', 'Use Cases'],
    explanation: 'Clean Architecture (Uncle Bob): círculos concêntricos onde dependências apontam apenas para dentro. Camadas: Entities (puro TypeScript, regras de negócio), Use Cases/Application (orquestração, independente de UI), Interface Adapters (converte data entre use cases e UI), Frameworks & Drivers (React, Next.js, fetch). Em React: `packages/domain` (entities + use cases), `services/` (adapters), `components/` + hooks (frameworks layer). Benefício: trocar React por Vue não afeta as Use Cases.',
    tags: ['clean-architecture', 'camadas', 'use-cases', 'entities', 'independencia'],
  },
  // ── TESTES ──────────────────────────────────────────────────────────────────
  {
    id: 'se-011',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Pirâmide de Testes? Como se aplica a projetos React?',
    hints: ['Unit > Integration > E2E', 'Testing Trophy', 'Custo vs confiança'],
    explanation: 'Pirâmide de Testes: (base) muitos testes de unidade, (meio) alguns de integração, (topo) poucos E2E. Testing Trophy (Kent C. Dodds — mais adequado para frontend): base = análise estática (TypeScript, ESLint), depois integração (maior investimento), depois E2E para fluxos críticos. Em React: Integration tests com RTL testam componentes como o usuário usa. Unit tests para hooks e utils puros. E2E (Playwright) para checkout, login. Evite: muitos testes de unit que testam detalhes de implementação.',
    tags: ['piramide-testes', 'testing-trophy', 'unit', 'integration', 'e2e'],
  },
  {
    id: 'se-012',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é TDD (Test-Driven Development)? Explique o ciclo Red-Green-Refactor.',
    hints: ['Escreva o teste primeiro', 'Mínimo para passar', 'Depois refatore'],
    explanation: 'TDD: escreva o teste antes do código. Ciclo: (1) Red: escreva teste que falha (feature ainda não existe); (2) Green: escreva o mínimo de código para passar no teste; (3) Refactor: melhore o código mantendo os testes verdes. Benefícios: design emergente, código testável por natureza, especificação viva. Quando usar: lógica de negócio complexa, algoritmos, utilitários. Quando pode pular: UI simples, prototipagem. BDD (Behavior-Driven Development): TDD com linguagem mais próxima do negócio (Given/When/Then).',
    tags: ['tdd', 'red-green-refactor', 'design', 'especificacao', 'qualidade'],
  },
  {
    id: 'se-013',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como testar componentes com React Testing Library sem testar detalhes de implementação?',
    hints: ['Teste comportamento', 'getByRole', 'userEvent vs fireEvent'],
    explanation: `Princípio: teste o que o usuário VERIA e FARIA, não detalhes internos.
\`\`\`typescript
// ❌ Testar detalhes de implementação:
const { container } = render(<LoginForm />);
expect(container.querySelector(".input-email")).toHaveValue("test@test.com");
expect(component.state.isLoading).toBe(true);

// ✓ Testar comportamento:
render(<LoginForm />);
const emailInput = screen.getByLabelText(/email/i);
const submitBtn = screen.getByRole("button", { name: /entrar/i });
await userEvent.type(emailInput, "test@test.com");
await userEvent.click(submitBtn);
await screen.findByText(/bem-vindo/i);
// Se trocar a implementação interna, o teste continua passando
\`\`\``,
    tags: ['rtl', 'comportamento', 'userEvent', 'getByRole', 'boas-praticas'],
  },
  {
    id: 'se-014',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Snapshot Testing? Quando usar e quando evitar?',
    hints: ['Captura de output', 'Frágil para UI', 'Melhor para serializable data'],
    explanation: 'Snapshot testing: captura o output de um componente/função e compara com runs futuros. Com Jest/Vitest: `expect(component).toMatchSnapshot()`. Quando usar: (1) Serializable data (JSON, AST); (2) Componentes muito estáveis. Quando evitar: (1) Componentes que mudam frequentemente — snaps precisam ser atualizados constantemente, perde significado; (2) Não descrevem o comportamento esperado; (3) Fácil de aceitar mudanças erradas com `--updateSnapshot`. Preferível: assertions específicas sobre o que importa.',
    tags: ['snapshot', 'testing', 'vitest', 'fragil', 'quando-usar'],
  },
  {
    id: 'se-015',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é MSW (Mock Service Worker)? Como usar para mockar APIs em testes?',
    hints: ['Intercepta requests reais', 'Service Worker', 'Handlers'],
    explanation: `MSW intercepta requests HTTP no nível do Service Worker — sem alterar o código da aplicação.
\`\`\`typescript
// handlers.ts
import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("/api/users/:id", ({ params }) => {
    return HttpResponse.json({ id: params.id, name: "João" });
  }),
  http.post("/api/login", async ({ request }) => {
    const { email } = await request.json();
    if (email === "error@test.com") return HttpResponse.json({ error: "Invalid" }, { status: 401 });
    return HttpResponse.json({ token: "abc123" });
  }),
];
// setup no test:
import { setupServer } from "msw/node";
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
\`\`\``,
    tags: ['msw', 'mock-service-worker', 'api-mock', 'handlers', 'testes'],
  },
  // ── GIT E WORKFLOW ──────────────────────────────────────────────────────────
  {
    id: 'se-016',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Git Flow? Como difere de Trunk-Based Development?',
    hints: ['Feature branches', 'Release branches', 'Main sempre deployável'],
    explanation: 'Git Flow: branches de longa duração (feature/, release/, hotfix/). Estruturado mas branches longas criam merge conflicts e integração dolorosa. Trunk-Based Development: todos commitam frequentemente na main branch (trunk). Feature flags para código não completo. Integração contínua real. Branches curtas (< 1 dia) se necessárias. Vantagem TBD: conflitos menores, CI/CD mais simples, feedback rápido. GitHub Flow: simplificação do Git Flow — apenas feature branches de curta duração + main.',
    tags: ['git-flow', 'trunk-based', 'branches', 'ci-cd', 'workflow'],
  },
  {
    id: 'se-017',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os principais comandos Git que você usa no dia a dia? Explique `rebase` vs `merge`.',
    hints: ['rebase: histórico linear', 'merge: preserva histórico', 'git stash'],
    explanation: 'Essenciais: `git status`, `git diff`, `git log --oneline`, `git add -p` (patch), `git commit -m`, `git push/pull`, `git stash/pop`, `git checkout -b branch`. Merge: cria um merge commit — preserva histórico completo, não reescreve. Rebase: aplica commits da branch no topo da base — histórico linear, sem merge commits, mas reescreve SHAs. NUNCA rebase branches públicas/compartilhadas. `git reflog`: histórico de todos os movimentos de HEAD — útil para recuperar commits "perdidos".',
    tags: ['git', 'rebase', 'merge', 'stash', 'comandos'],
  },
  {
    id: 'se-018',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é um Pull Request? Quais são as boas práticas para revisão de código?',
    hints: ['PR template', 'Tamanho do PR', 'Feedback construtivo', 'Automated checks'],
    explanation: 'PR (Pull Request): proposta de mudança no código com descrição e revisão antes do merge. Boas práticas: (1) PRs pequenos e focados (< 400 linhas é mais fácil de revisar); (2) Template com contexto, link de task, evidência (screenshot, video); (3) Automated checks antes da revisão humana (CI, lint, tests); (4) Feedback respeitoso e específico — "O que você acha de X?" em vez de "Isso está errado"; (5) Separar nits (nitpicks) de bloqueadores; (6) Author responde cada comment; (7) Aprovação de ao menos um outro dev.',
    tags: ['pull-request', 'code-review', 'template', 'feedback', 'qualidade'],
  },
  {
    id: 'se-019',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Semantic Versioning (SemVer)? Como funciona o controle de versão de bibliotecas?',
    hints: ['MAJOR.MINOR.PATCH', 'Breaking changes', 'npm semver ranges'],
    explanation: 'SemVer: `MAJOR.MINOR.PATCH` (ex: 2.3.1). PATCH: bug fixes compatíveis. MINOR: novas features compatíveis. MAJOR: breaking changes. Pre-release: `1.0.0-alpha.1`, `2.0.0-rc.3`. npm ranges: `^2.3.1` aceita MINOR e PATCH (não MAJOR); `~2.3.1` aceita apenas PATCH; `2.3.1` exato. Lock files (package-lock.json, yarn.lock, pnpm-lock.yaml): garantem versões exatas em instalações subsequentes — sempre commit o lock file. `npm outdated` lista pacotes desatualizados.',
    tags: ['semver', 'versioning', 'npm', 'lock-file', 'breaking-changes'],
  },
  {
    id: 'se-020',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Architecture Decision Records (ADRs)? Por que são importantes?',
    hints: ['Documenta decisões de arquitetura', 'Contexto, decisão, consequências', 'Registro histórico'],
    explanation: 'ADR: documento curto que registra uma decisão arquitetural importante. Formato: (1) Título e status (Proposed/Accepted/Deprecated); (2) Contexto: por que a decisão foi necessária; (3) Decisão: o que foi decidido e por quê; (4) Consequências: trade-offs, o que fica melhor/pior. Por que: permite entender PORQUÊ decisões foram tomadas meses/anos depois; onboarding de novos devs; revisitar quando contexto muda. Armazenados em `docs/adr/` no repositório. Ferramentas: adr-tools, log4brains.',
    tags: ['adr', 'documentacao', 'decisoes', 'arquitetura', 'historico'],
  },
  // ── CLEAN CODE ──────────────────────────────────────────────────────────────
  {
    id: 'se-021',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os princípios de nomeação em Clean Code? Como nomear variáveis, funções e componentes?',
    hints: ['Intenção revelada', 'Evite abreviações', 'Funções: verbos'],
    explanation: 'Princípios: (1) Nomes que revelam intenção: `daysUntilExpiry` não `d`; (2) Sem abreviações: `userAccount` não `usrAcc`; (3) Evite palavras de relleno: `data`, `info`, `temp`; (4) Funções: verbos (`getUserById`, `sendEmail`, `isValid`); (5) Componentes: substantivos PascalCase (`UserProfile`, `PaymentForm`); (6) Booleans: prefixo `is/has/should/can`: `isLoading`, `hasPermission`; (7) Evite números mágicos — use constantes nomeadas: `MAX_RETRY_ATTEMPTS = 3`.',
    tags: ['clean-code', 'nomeacao', 'legibilidade', 'booleans', 'constantes'],
  },
  {
    id: 'se-022',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quando comentários em código são úteis? Quando são um anti-padrão?',
    hints: ['WHY não o WHAT', 'Código auto-documentado', 'Comentários mentem com o tempo'],
    explanation: 'Comentários úteis: (1) Por que — decisão não óbvia, trade-off, workaround para bug específico; (2) TODO/FIXME com contexto e issue number; (3) Aviso de armadilha: `// ATENÇÃO: não use Promise.all aqui — causa deadlock com...`. Anti-padrões: (1) Explicar o que o código faz (código bem nomeado já faz isso); (2) Histórico de mudanças (use git log); (3) Código comentado (delete, o git guarda o histórico); (4) Comentários que mentem — código mudou mas comentário não.',
    tags: ['comentarios', 'clean-code', 'documentacao', 'why', 'anti-pattern'],
  },
  {
    id: 'se-023',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é refatoração? Quais são as técnicas mais comuns?',
    hints: ['Mudar estrutura sem comportamento', 'Extract Function', 'Rename', 'Move'],
    explanation: 'Refatoração: melhorar a estrutura interna do código sem alterar comportamento externo. Técnicas: (1) Extract Function: isola bloco de código em função com nome; (2) Extract Variable: nomeia expressão complexa; (3) Inline: substituir chamada de função pelo corpo quando trivial; (4) Rename: melhorar nomes; (5) Move: mover função/classe para módulo mais adequado; (6) Replace Conditional with Polymorphism; (7) Replace Magic Number with Constant. Precondição para refatorar: testes que garantem que o comportamento não mudou.',
    tags: ['refatoracao', 'extract', 'rename', 'tecnicas', 'clean-code'],
  },
  {
    id: 'se-024',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são "Code Smells"? Cite os mais comuns e como corrigir.',
    hints: ['Indicadores de possível problema', 'God Class', 'Long Method', 'Duplicação'],
    explanation: 'Code smells: indicadores de código que pode ter problemas. Comuns: (1) Long Method/Function: função com mais de 20-30 linhas — extraia; (2) God Class/Component: classe/componente que sabe demais — divida; (3) Duplicação — DRY; (4) Long Parameter List: 5+ parâmetros — use objeto; (5) Magic Numbers: números sem nome — use constante; (6) Deep Nesting: mais de 3 níveis de if/for — early return, extraia função; (7) Dead Code: código nunca executado — delete; (8) Boolean Traps: função com parâmetro boolean — considere dois métodos.',
    tags: ['code-smells', 'god-class', 'long-method', 'duplicacao', 'refatoracao'],
  },
  {
    id: 'se-025',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Early Return (Guard Clauses)? Por que melhora a legibilidade?',
    hints: ['Inverta condições negativas', 'Reduz nesting', 'Caminho feliz fica claro'],
    explanation: `Early return: retornar cedo para casos especiais/erros, deixando o "caminho feliz" sem nesting.
\`\`\`typescript
// ❌ Nested:
function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.user.isVerified) {
        return createInvoice(order);
      }
    }
  }
}

// ✓ Guard clauses:
function processOrder(order) {
  if (!order) return null;
  if (order.items.length === 0) return null;
  if (!order.user.isVerified) return null;
  return createInvoice(order); // Caminho feliz é o mais visível
}
\`\`\``,
    tags: ['early-return', 'guard-clauses', 'nesting', 'legibilidade', 'clean-code'],
  },
  // ── AGILE E PROCESSOS ────────────────────────────────────────────────────────
  {
    id: 'se-026',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é metodologia Agile? Quais são os valores do Manifesto Ágil?',
    hints: ['Iterativo', 'Colaborativo', '4 valores, 12 princípios'],
    explanation: 'Manifesto Ágil (2001): 4 valores — (1) Indivíduos e interações > processos e ferramentas; (2) Software funcionando > documentação abrangente; (3) Colaboração com cliente > negociação de contratos; (4) Responder a mudanças > seguir um plano. Frameworks ágeis: Scrum, Kanban, XP, SAFe. Scrum: Sprints (1-4 semanas), Daily, Planning, Review, Retrospectiva. Kanban: fluxo contínuo, WIP limits. O anti-padrão "Zombie Scrum": cerimônias sem a mentalidade.',
    tags: ['agile', 'manifesto', 'scrum', 'kanban', 'sprint'],
  },
  {
    id: 'se-027',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são User Stories? Como escrevê-las bem?',
    hints: ['Como [persona], eu quero [ação], para [benefício]', 'Critérios de aceitação', 'INVEST'],
    explanation: 'User Story: descrição de feature do ponto de vista do usuário. Formato: "Como [persona], eu quero [ação/funcionalidade], para que [benefício/valor]". Critérios de aceitação: lista de condições que a história deve satisfazer para ser "Done". INVEST: Independent (independente de outras stories), Negotiable, Valuable, Estimable, Small, Testable. Anti-padrão: "Como sistema, eu quero salvar no banco" — isso é uma tarefa técnica, não uma história de usuário.',
    tags: ['user-story', 'agile', 'persona', 'criterios-aceitacao', 'INVEST'],
  },
  {
    id: 'se-028',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é débito técnico? Como gerenciar e comunicar para stakeholders?',
    hints: ['Trade-off intencional', 'Custo futuro', 'Analogia financeira'],
    explanation: 'Débito técnico: decisões de design que resultam em custo futuro maior (análogo a dívida financeira). Tipos: (1) Deliberado: consciente por deadline (aceitável com plano de pagamento); (2) Inadvertido: resultado de inexperiência; (3) Inevitável: requisitos mudaram. Comunicar para stakeholders: use analogia de juros — "Se não pagarmos agora, cada feature nova levará 2x mais tempo"; mostre em tempo concreto ("3 dias/sprint em workarounds"); priorize no backlog com tasks de refatoração. Ferramentas: mapa de calor de complexidade.',
    tags: ['debito-tecnico', 'refatoracao', 'stakeholders', 'comunicacao', 'qualidade'],
  },
  // ── MONOREPO E FERRAMENTAS ───────────────────────────────────────────────────
  {
    id: 'se-029',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um monorepo? Como o Turborepo facilita o desenvolvimento?',
    hints: ['Múltiplos packages um repo', 'Build caching', 'Pipeline de tasks'],
    explanation: 'Monorepo: múltiplos projetos/packages em um único repositório. Benefícios: atomic commits cross-package, compartilhamento fácil de código, única configuração de ferramentas, visualização de impacto de mudanças. Turborepo: (1) Remote caching — builds idênticos nunca são executados de novo; (2) Paralelismo máximo — analisa dependências entre tasks; (3) `turbo run build --filter=...affected[origin/main]` — builda apenas o que mudou. Estrutura: `apps/` (aplicações), `packages/` (libs compartilhadas). pnpm workspaces + Turborepo é o stack moderno.',
    tags: ['monorepo', 'turborepo', 'caching', 'workspaces', 'pnpm'],
  },
  {
    id: 'se-030',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como gerenciar múltiplas versões do Node.js em diferentes projetos?',
    hints: ['.nvmrc', 'nvm', 'fnm', 'engines no package.json'],
    explanation: 'Ferramentas: nvm (Node Version Manager) — `nvm use`, `nvm install`. fnm (Fast Node Manager) — mais rápido, escrito em Rust. Volta — automático baseado em `.volta` campo no package.json. `.nvmrc`: arquivo com a versão (`20.11.0`), `nvm use` automaticamente usa. `package.json engines`: `"engines": { "node": ">=20.0.0", "pnpm": ">=8.0.0" }` — avisa se versão incompatível. CI/CD: configure a versão exata no workflow: `uses: actions/setup-node@v4 with: node-version-file: .nvmrc`.',
    tags: ['nvm', 'fnm', 'node-version', 'nvmrc', 'engines'],
  },
  {
    id: 'se-031',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença entre `dependencies`, `devDependencies` e `peerDependencies` no `package.json`?',
    hints: ['Runtime vs build time', 'peerDependencies para libs', 'Não duplicar packages'],
    explanation: '`dependencies`: usadas em runtime — empacotadas no bundle. `devDependencies`: usadas apenas em desenvolvimento/build (TypeScript, ESLint, Vitest) — não vão para produção quando você é uma aplicação. `peerDependencies`: para bibliotecas que requerem que o consumidor instale uma dep compartilhada — evita duplicação. Ex: React component library tem React como peerDep (não como dep normal, para não empacotar React duas vezes). `optionalDependencies`: app funciona sem elas. `pnpm install --prod` instala apenas `dependencies`.',
    tags: ['dependencies', 'devDependencies', 'peerDependencies', 'package-json', 'npm'],
  },
  {
    id: 'se-032',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é observabilidade em software? Quais são os três pilares?',
    hints: ['Logs, métricas, traces', 'Debugging de sistemas distribuídos', 'OpenTelemetry'],
    explanation: 'Observabilidade: capacidade de entender o estado interno de um sistema a partir de seus outputs. 3 pilares: (1) Logs: registro de eventos com contexto (structured logging em JSON — não `console.log`); (2) Métricas: dados numéricos ao longo do tempo (CPU, request count, latência — histogramas, gauges, counters); (3) Distributed Traces: rastreamento de uma operação através de múltiplos serviços (trace ID propagado pelos serviços). OpenTelemetry: padrão open-source para instrumentação. Ferramentas: Sentry, Datadog, Grafana, Jaeger.',
    tags: ['observabilidade', 'logs', 'metricas', 'traces', 'opentelemetry'],
  },
  {
    id: 'se-033',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Docker? Como ele é usado no desenvolvimento frontend?',
    hints: ['Containerização', 'Imagem', 'Dockerfile', 'Ambiente consistente'],
    explanation: 'Docker: plataforma de containerização — empacota app com suas dependências em container isolado. Imagem: snapshot do container. Dockerfile: instruções para criar a imagem. Por que no frontend: (1) Ambiente consistente — "funciona na minha máquina" é eliminado; (2) CI/CD: container para rodar testes e builds; (3) Deploy consistente. Exemplo básico Next.js: `FROM node:20-alpine AS builder; WORKDIR /app; COPY . .; RUN npm ci && npm run build; FROM node:20-alpine; COPY --from=builder /app/.next .next; CMD ["npm", "start"]`. Docker Compose para desenvolvimento com múltiplos serviços.',
    tags: ['docker', 'container', 'dockerfile', 'ci-cd', 'ambiente'],
  },
  {
    id: 'se-034',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como fazer estimativas de software? O que é Planning Poker?',
    hints: ['Story points', 'Fibonacci', 'Velocidade', 'Comparação relativa'],
    explanation: 'Estimativas de software são notoriamente difíceis — estime em unidades relativas (story points), não em horas. Story points capturam complexidade + incerteza + esforço. Fibonacci (1, 2, 3, 5, 8, 13, 21) — diferenças crescentes refletem incerteza. Planning Poker: todos revelam estimativa simultaneamente para evitar ancoragem. Divergências geram discussão valiosa. Velocidade: média de pontos por sprint — use para previsão, não como meta. Técnicas para precisão: quebrar stories grandes, comparar com histórias passadas similares.',
    tags: ['estimativas', 'story-points', 'planning-poker', 'agile', 'velocidade'],
  },
  {
    id: 'se-035',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Code Coverage? Por que 100% de coverage não garante qualidade?',
    hints: ['Linhas executadas', 'Branch coverage', 'Testes sem assertions'],
    explanation: 'Code coverage: percentual de linhas/branches/funções executados pelos testes. Tipos: Statement, Branch, Function, Line coverage. Por que 100% não garante qualidade: um teste pode executar o código sem assertar nada (`expect(fn()).toBeDefined()` cobre a linha mas não verifica comportamento). Coverage é uma métrica de risco — áreas descobertas têm maior risco. Meta razoável: 70-80% com boa qualidade de assertions, não 100% mecânico. Ferramenta: Istanbul/v8 (built-in no Vitest).',
    tags: ['code-coverage', 'quality', 'assertions', 'istanbul', 'vitest'],
  },
  // ── PERFORMANCE E ESCALABILIDADE ─────────────────────────────────────────────
  {
    id: 'se-036',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é um design system escalável? Quais são os principais desafios?',
    hints: ['Tokens', 'Governance', 'Versionamento', 'Adoção pelos times'],
    explanation: 'Design system escalável: (1) Design Tokens como fonte da verdade (cores, tipografia, espaçamento em JSON/CSS vars); (2) Componentes primitivos sem opinião de domínio; (3) Documentação viva com Storybook; (4) Versionamento semântico com changelog; (5) Processo de contribuição claro. Desafios: (1) Adoption — times que preferem criar do zero; (2) Governance — quem aprova mudanças?; (3) Flexibilidade vs consistência — quanto customizável?; (4) Breaking changes — como migrar consumidores?; (5) Testes visuais (Chromatic/Percy) para regressão.',
    tags: ['design-system', 'tokens', 'governance', 'storybook', 'escalabilidade'],
  },
  {
    id: 'se-037',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você lideraria a adoção de TypeScript em um projeto JavaScript legado?',
    hints: ['Migração gradual', 'allowJs', 'strict: false inicial', 'Convencer o time'],
    explanation: 'Estratégia gradual: (1) `allowJs: true` no tsconfig — arquivos JS e TS coexistem; (2) Renomeie `.js` para `.ts` sem refatorar (ignore type errors com `// @ts-nocheck` temporariamente); (3) Ative regras progressivamente — comece com `strict: false`, adicione uma por vez; (4) Comece pelos novos arquivos e módulos críticos; (5) Gere tipos para APIs externas com ferramentas (openapi-typescript); (6) Medir: % de arquivos TypeScript, número de `any` explícitos. Para convencer o time: mostre bugs que TypeScript teria capturado em produção.',
    tags: ['typescript', 'migracao', 'legado', 'allowJs', 'estrategia'],
  },
  {
    id: 'se-038',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é um Incident Post-mortem? Como conduzir um de forma construtiva?',
    hints: ['Blameless', 'Timeline', 'Root cause', 'Action items'],
    explanation: 'Post-mortem: análise retrospectiva de um incidente para aprender e prevenir recorrência. Princípios: (1) Blameless — o objetivo é entender o sistema, não culpar pessoas; as pessoas fazem escolhas razoáveis com informações disponíveis; (2) Timeline: reconstrói o incidente com fatos, não suposições; (3) Root cause analysis: "5 Porquês" para encontrar causas raízes; (4) Contributing factors: lista o que contribuiu; (5) Action items: correções concretas com owners e datas. Compartilhe internamente — todo post-mortem é oportunidade de aprendizado.',
    tags: ['post-mortem', 'incident', 'blameless', 'root-cause', 'aprendizado'],
  },
  {
    id: 'se-039',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é documentação como código? Quais são as melhores práticas?',
    hints: ['JSDoc', 'OpenAPI', 'CLAUDE.md', 'Storybook', 'README'],
    explanation: 'Documentação como código: tratar documentação com os mesmos cuidados do código — versionada, testada, próxima ao código. Tipos: (1) README.md: setup, scripts, arquitetura de alto nível; (2) CLAUDE.md/AGENTS.md: instruções para AI coding assistants; (3) JSDoc/TSDoc: tipos e docs inline gerados de código; (4) OpenAPI: contrato da API gerado do código (Swagger); (5) Storybook: exemplos vivos de componentes; (6) ADRs: decisões de arquitetura. Anti-padrão: wiki separado que envelhece rapidamente. Documentação que não está no repo é documentação que será esquecida.',
    tags: ['documentacao', 'readme', 'jsdoc', 'storybook', 'openapi'],
  },
  {
    id: 'se-040',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Feature Toggles (Feature Flags) em nível de engenharia? Como implementar sem criar débito técnico?',
    hints: ['Lifespan da flag', 'Limpeza', 'Categorias de flags', 'Rollout'],
    explanation: 'Tipos de feature flags: (1) Release toggles: controla rollout — vida curta, deve ser removido; (2) Experiment toggles: A/B testing — vida curta; (3) Ops toggles: circuit breakers — vida mais longa; (4) Permission toggles: acesso por plano/role — vida longa. Prevenção de débito: (1) Nomeie com contexto e data de expiração; (2) Adicione ao backlog para remoção quando feature for estabelecida; (3) Flags velhas viram código morto — cleanup é trabalho real; (4) Teste ambos os estados (true e false); (5) Configuração remota (não no código) para runtime toggle.',
    tags: ['feature-flags', 'debito-tecnico', 'cleanup', 'tipos', 'rollout'],
  },
  {
    id: 'se-041',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão MVC? Como se relaciona com arquitetura frontend moderna?',
    hints: ['Model, View, Controller', 'Separação de responsabilidades', 'React não é MVC'],
    explanation: 'MVC (Model-View-Controller): Model = dados e regras de negócio; View = apresentação; Controller = intermediário que processa input. Em frontend moderno: React é principalmente View (não é MVC). O equivalente mais próximo: componentes (View) + hooks/context (Model-like) + event handlers (Controller-like). Flux/Redux é mais como Unidirecional: Action → Dispatcher → Store → View. MVC foi importante historicamente (Backbone.js, Angular MVC) mas React adotou fluxo unidirecional como alternativa.',
    tags: ['mvc', 'flux', 'unidirecional', 'react', 'arquitetura'],
  },
  {
    id: 'se-042',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Princípio de Inversão de Dependência (DIP) e como implementar com Hooks em React?',
    hints: ['Dependa de abstrações', 'Injeção de dependência', 'Testabilidade'],
    explanation: `DIP: módulos de alto nível não devem depender de módulos de baixo nível — ambos devem depender de abstrações. Em React via Hooks:
\`\`\`typescript
// ❌ Acoplado à implementação:
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetch("/api/users").then(...); }, []);
}

// ✓ Inversão — componente depende da abstração (hook):
function UserList({ useUsers = useRealUsers }) {
  const { users, loading } = useUsers();
  // Em testes: useUsers = useMockUsers
}
\`\`\`
O componente não sabe de onde vêm os dados. Em testes, passe um hook mock. Isso é DIP aplicado ao React.`,
    tags: ['dip', 'inversao-dependencia', 'hooks', 'testabilidade', 'abstracoes'],
  },
  {
    id: 'se-043',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Adapter? Como usar para integrar com APIs externas sem poluir seu código?',
    hints: ['Converte interfaces', 'Anti-corruption layer', 'Desacopla do vendor'],
    explanation: `Adapter: converte a interface de uma classe para outra esperada pelo cliente. Útil para isolar dependências de terceiros:
\`\`\`typescript
// API externa com naming ruim:
// { user_id, first_name, last_name, email_address }

// Adapter converte para sua interface interna:
function adaptUser(externalUser) {
  return {
    id: externalUser.user_id,
    name: \`\${externalUser.first_name} \${externalUser.last_name}\`,
    email: externalUser.email_address,
  };
}

// Seu código trabalha sempre com a interface interna:
const user = adaptUser(await fetchExternalApi());
\`\`\`
Se a API externa mudar, você só precisa alterar o adapter.`,
    tags: ['adapter', 'anti-corruption', 'api-externa', 'interface', 'desacoplamento'],
  },
  {
    id: 'se-044',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão Template Method? Como se manifesta em React?',
    hints: ['Define esqueleto do algoritmo', 'Subclasses preenchem detalhes', 'Hook de ciclo de vida'],
    explanation: 'Template Method: define o esqueleto de um algoritmo na classe base, delegando passos específicos para subclasses. Em React: (1) componentes pai com children definem o layout (esqueleto), filhos preenchem o conteúdo; (2) Custom hooks que chamam funções injetadas: `function useDataFetcher({ fetchFn, transform }) { const raw = await fetchFn(); return transform(raw); }` — o hook define o fluxo (fetch, loading, error), mas a lógica específica é injetada; (3) render props definem onde e como renderizar, componente filho decide o que.',
    tags: ['template-method', 'skeleton', 'composicao', 'render-props', 'hooks'],
  },
  {
    id: 'se-045',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Chain of Responsibility? Exemplos em JavaScript.',
    hints: ['Request passa por handlers', 'Middleware', 'Cada handler decide continuar ou não'],
    explanation: `Chain of Responsibility: passa um request por uma cadeia de handlers. Cada handler decide processar ou passar adiante.
\`\`\`javascript
// Middleware pattern (Express-like):
function createMiddlewareChain(...middlewares) {
  return function(req, res) {
    let index = 0;
    function next(err) {
      if (err) return res.error(err);
      if (index >= middlewares.length) return;
      middlewares[index++](req, res, next);
    }
    next();
  };
}
// Uso:
const handler = createMiddlewareChain(
  authMiddleware,   // Verifica token
  rateLimitMiddleware, // Verifica limite
  requestHandler   // Processa a requisição
);
\`\`\``,
    tags: ['chain-of-responsibility', 'middleware', 'handler', 'pipeline', 'express'],
  },
  {
    id: 'se-046',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o princípio Open/Closed (OCP)? Como aplicar em componentes React?',
    hints: ['Aberto para extensão, fechado para modificação', 'Props como extensão', 'Composição'],
    explanation: `OCP: entidade deve ser aberta para extensão mas fechada para modificação. Em React:
\`\`\`typescript
// ❌ Viola OCP — precisa modificar para cada novo tipo:
function Button({ type }) {
  if (type === "primary") return <button className="primary">...</button>;
  if (type === "danger") return <button className="danger">...</button>;
  // Adicionar tipo = modificar o componente
}

// ✓ Segue OCP — extensível via props sem modificar:
function Button({ variant = "primary", className, ...props }) {
  return <button className={clsx(styles[variant], className)} {...props} />;
}
// Novo variant = novo CSS class, sem modificar Button
\`\`\``,
    tags: ['ocp', 'open-closed', 'extensao', 'composicao', 'react'],
  },
  {
    id: 'se-047',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é coupling (acoplamento) e cohesion (coesão)? Qual a combinação ideal?',
    hints: ['Baixo acoplamento, alta coesão', 'Módulos independentes', 'Dependências mínimas'],
    explanation: 'Acoplamento: grau de dependência entre módulos. Alto acoplamento = mudança em A quebra B. Baixo acoplamento = módulos independentes, fácil de testar e modificar. Coesão: grau em que elementos de um módulo pertencem juntos. Alta coesão = módulo tem uma responsabilidade clara. Combinação ideal: baixo acoplamento + alta coesão. Em React: hooks com uma responsabilidade (alta coesão), componentes que não dependem de detalhes internos de outros (baixo acoplamento). Smell: componente que importa 20 módulos diferentes = alto acoplamento.',
    tags: ['acoplamento', 'coesao', 'modulos', 'independencia', 'srp'],
  },
  {
    id: 'se-048',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Event Sourcing? Como difere de CRUD tradicional?',
    hints: ['Armazena eventos', 'Estado derivado de eventos', 'Auditoria completa'],
    explanation: 'Event Sourcing: armazena o HISTÓRICO de eventos em vez do estado atual. O estado é derivado pela replay dos eventos. CRUD tradicional: modifica o estado diretamente — histórico é perdido. Event Sourcing: `UserCreated { name: "João" }`, `EmailChanged { email: "novo@email.com" }` — o estado atual é a soma de todos os eventos. Benefícios: auditoria completa, time-travel (reconstruir estado em qualquer ponto), retroatividade. Desafio: complexidade maior, queries podem ser lentas sem projeções (Read Models).',
    tags: ['event-sourcing', 'cqrs', 'auditoria', 'estado', 'historico'],
  },
  {
    id: 'se-049',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é YAGNI? Como evitar over-engineering?',
    hints: ['You Ain\'t Gonna Need It', 'Implemente quando necessário', 'Requisitos reais'],
    explanation: 'YAGNI (You Ain\'t Gonna Need It): não implemente funcionalidades que você acha que vai precisar no futuro — implemente quando a necessidade for real. Over-engineering: abstrações excessivas, sistema de plugins para app com 3 usuários, framework genérico para caso específico. Como evitar: (1) Comece simples, refatore quando houver necessidade real; (2) "Rule of Three" — abstraia quando vir três instâncias, não uma; (3) Questione cada abstração proposta: "Temos casos de uso reais para isso agora?"; (4) Custo real: código não escrito = zero bugs, zero manutenção.',
    tags: ['yagni', 'over-engineering', 'simplicidade', 'abstraicao', 'kiss'],
  },
  {
    id: 'se-050',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Conway\'s Law? Como afeta a arquitetura de software?',
    hints: ['Estrutura da equipe reflete na arquitetura', 'Comunicação', 'Inverse Conway Maneuver'],
    explanation: 'Conway\'s Law: "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." Times que não se comunicam bem produzem sistemas que não se integram bem. Times organizados por função (design, backend, frontend) criam silos. Times organizados por produto/feature criam sistemas mais coesos. Inverse Conway Maneuver: organize seus times de acordo com a arquitetura que você quer alcançar (não o contrário). Micro-frontends = times autônomos por domínio.',
    tags: ['conways-law', 'organizacao', 'times', 'arquitetura', 'comunicacao'],
  },
  {
    id: 'se-051',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o princípio de Design by Contract? Como TypeScript ajuda?',
    hints: ['Pre-condições', 'Pós-condições', 'Invariantes', 'Tipos como contrato'],
    explanation: 'Design by Contract (DbC): componentes de software devem definir pré-condições (o que o chamador deve garantir), pós-condições (o que a função garante no retorno) e invariantes (condições sempre verdadeiras). TypeScript implementa parte disso via tipos: tipos de parâmetros são pré-condições, tipo de retorno é pós-condição. Zod adiciona validação runtime. Exemplo: function divide(a: number, b: NonZeroNumber): number — o tipo NonZeroNumber é uma pré-condição expressa no sistema de tipos. Assert functions: asserts condition — lança em runtime se violado.',
    tags: ['design-by-contract', 'pre-condicao', 'pos-condicao', 'typescript', 'zod'],
  },
  {
    id: 'se-052',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o princípio de Composição sobre Herança? Por que é preferido?',
    hints: ['Menos acoplamento', 'Mais flexível', 'Gorilla-Banana problem'],
    explanation: 'Composição: construir objetos/componentes combinando pedaços menores (has-a). Herança: estender uma hierarquia (is-a). Problemas da herança: (1) "Gorilla-Banana": você queria a banana, mas veio com a gorila e toda a floresta (herda o que não precisa); (2) Fragile Base Class: mudança na base quebra subclasses; (3) Hierarquias profundas são difíceis de entender. Composição em React: custom hooks (composição de comportamentos), componentes com children/render props, HOCs como decoradores. Em OO: prefira interfaces + injeção de dependência a herança.',
    tags: ['composicao', 'heranca', 'has-a', 'is-a', 'acoplamento'],
  },
  {
    id: 'se-053',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Injeção de Dependência (DI)? Como implementar em JavaScript sem framework?',
    hints: ['Receber dependências em vez de criar', 'Testabilidade', 'Inversão de Controle'],
    explanation: `DI: em vez de criar dependências internamente, receba-as de fora — facilita testes e substituição.
\`\`\`javascript
// ❌ Sem DI: acoplado a implementação específica
class UserService {
  async getUser(id) {
    return await fetch(\`/api/users/\${id}\`).then(r => r.json()); // hardcoded
  }
}
// ✓ Com DI: dependência injetada
class UserService {
  constructor(private api: { get: (path: string) => Promise<any> }) {}
  async getUser(id) { return this.api.get(\`/users/\${id}\`); }
}
// Produção: new UserService(httpClient)
// Teste: new UserService({ get: async () => ({ id: 1, name: "Test" }) })
\`\`\``,
    tags: ['di', 'injecao-dependencia', 'ioc', 'testabilidade', 'desacoplamento'],
  },
  {
    id: 'se-054',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Null Object? Como evita verificações null desnecessárias?',
    hints: ['Objeto que implementa interface mas não faz nada', 'Substitui null', 'Elimina if-null'],
    explanation: `Null Object: implementação "vazia" de uma interface que não faz nada, em vez de retornar null.
\`\`\`typescript
interface Logger { log(msg: string): void; error(msg: string): void; }
class ConsoleLogger implements Logger {
  log(msg) { console.log(msg); }
  error(msg) { console.error(msg); }
}
class NullLogger implements Logger {
  log() {} error() {} // Não faz nada
}
class UserService {
  constructor(private logger: Logger = new NullLogger()) {}
  getUser(id: string) {
    this.logger.log(\`Fetching user \${id}\`); // Sem if (logger) logger.log(...)
    return fetchUser(id);
  }
}
\`\`\``,
    tags: ['null-object', 'pattern', 'null-check', 'interface', 'clean-code'],
  },
  {
    id: 'se-055',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão de Imutabilidade em Programação Funcional? Como aplicar em JavaScript?',
    hints: ['Não modifique, crie cópias', 'Pure functions', 'Referential transparency'],
    explanation: 'Imutabilidade funcional: dados nunca são modificados — operações produzem novos dados. Benefícios: sem side effects inesperados, raciocínio mais simples, facilita concorrência, permite time-travel (guardar snapshots). Em JavaScript: Array métodos não mutantes (map, filter, reduce, slice) vs mutantes (push, pop, splice, sort). Para objetos: spread operator ou structuredClone. Immer simplifica: escrita aparentemente mutante que produz cópias imutáveis. Referential transparency: dada a mesma entrada, sempre mesma saída — pure function.',
    tags: ['imutabilidade', 'funcional', 'pure-function', 'referential-transparency', 'side-effects'],
  },
  {
    id: 'se-056',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Proxy no contexto de design patterns (GoF)? Exemplos em JavaScript.',
    hints: ['Substituto com controle de acesso', 'Lazy loading', 'Caching'],
    explanation: `Proxy GoF: fornece um representante/substituto para outro objeto para controlar acesso. Tipos: (1) Virtual Proxy: lazy initialization; (2) Protection Proxy: controle de acesso; (3) Remote Proxy: acesso a objeto remoto; (4) Caching Proxy. Em JavaScript: o Proxy nativo implementa o padrão de forma genérica.
\`\`\`javascript
// Caching Proxy:
const cachingProxy = new Proxy(expensiveService, {
  cache: {},
  get(target, prop) {
    return (...args) => {
      const key = prop + JSON.stringify(args);
      if (this.cache[key]) return this.cache[key];
      return (this.cache[key] = target[prop](...args));
    };
  }
});
\`\`\``,
    tags: ['proxy', 'gof', 'lazy-loading', 'caching', 'controle-acesso'],
  },
  {
    id: 'se-057',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o princípio "Tell, Don\'t Ask"?',
    hints: ['Diga ao objeto o que fazer', 'Não pergunte seu estado', 'Evita getters excessivos'],
    explanation: 'Tell, Don\'t Ask: em vez de pedir dados de um objeto para tomar uma decisão externamente, diga ao objeto para tomar a decisão por si mesmo. Exemplo errado (Ask): if (user.age >= 18) user.grantAccess(). Correto (Tell): user.tryGrantAccess() — o User decide internamente se pode receber acesso. Reduz acoplamento (código externo não precisa conhecer os detalhes internos do User), aumenta encapsulamento e cohesão. Relacionado ao Law of Demeter (Don\'t talk to strangers). Em React: componentes devem gerenciar seu próprio estado quando possível.',
    tags: ['tell-dont-ask', 'encapsulamento', 'demeter', 'coesao', 'principio'],
  },
  {
    id: 'se-058',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Eventual Consistency? Como afeta o design de UIs?',
    hints: ['Dados podem estar desatualizados', 'Optimistic UI', 'Conflict resolution'],
    explanation: 'Eventual Consistency: em sistemas distribuídos, escritas são propagadas eventualmente — em um momento, diferentes partes do sistema podem ter versões diferentes. Na UI: (1) Optimistic updates: mostra o resultado esperado antes da confirmação do servidor; (2) Rollback em caso de conflito; (3) Timestamps e versões para detectar conflitos; (4) Last-Write-Wins simples vs CRDTs para colaboração; (5) "Saved successfully" não significa que todos os usuários verão imediatamente. Stale-while-revalidate é essencialmente eventual consistency intencionalmente aplicada ao cache.',
    tags: ['eventual-consistency', 'distribuido', 'optimistic', 'conflito', 'cache'],
  },
  {
    id: 'se-059',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão de Configuração Externalizada? Como aplicar em projetos frontend?',
    hints: ['Env vars', 'Config sem build', 'Múltiplos ambientes'],
    explanation: 'Configuração externalizada: separar configuração do código — permite que a mesma build seja usada em múltiplos ambientes (dev, staging, prod). No frontend: (1) Variáveis de ambiente (NEXT_PUBLIC_, VITE_); (2) Config remota: buscar configuração de endpoint — permite mudar sem deploy; (3) Feature flags externos (LaunchDarkly); (4) CDN-based config JSON; (5) Twelve-Factor App: config é tudo que varia entre deployments. Nunca hardcode URLs, API keys ou comportamentos específicos de ambiente.',
    tags: ['configuracao', 'env-vars', 'externalizacao', 'twelve-factor', 'ambientes'],
  },
  {
    id: 'se-060',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Telemetria? Como implementar coleta de métricas de uso em uma aplicação React?',
    hints: ['Analytics events', 'Custom events', 'Performance timing', 'Privacy GDPR'],
    explanation: 'Telemetria: coleta de dados sobre como o usuário usa a aplicação. Implementação: (1) Custom hook useAnalytics que abstrai a ferramenta (evita lock-in); (2) Eventos padronizados (Event Schema): page_view, button_click, form_submit com propriedades consistentes; (3) Contexto de usuário: userId, sessionId, properties globais; (4) Performance: Core Web Vitals via PerformanceObserver; (5) GDPR/LGPD: consentimento explícito, anônimização de dados, opt-out. Ferramentas: Segment (routing), Amplitude (product analytics), Mixpanel, PostHog (open source).',
    tags: ['telemetria', 'analytics', 'events', 'privacy', 'gdpr'],
  },
  {
    id: 'se-061',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão de Proxy Reverso? Como um Nginx ou Vercel funciona como reverse proxy?',
    hints: ['Intermediário entre cliente e servidor', 'Load balancing', 'SSL termination', 'Caching'],
    explanation: 'Proxy reverso: servidor que recebe requests do cliente e os encaminha para servidores backend — o cliente não conhece o servidor real. Funções: (1) SSL termination: descriptografa HTTPS e encaminha HTTP internamente; (2) Load balancing: distribui carga entre múltiplos servidores; (3) Caching: guarda respostas frequentes; (4) Security: esconde a infraestrutura real; (5) Compression. Vercel é um proxy reverso gerenciado — encaminha requests para funções serverless, assets estáticos no CDN, ou para seu servidor. Nginx como reverse proxy: proxy_pass http://backend:3000;',
    tags: ['proxy-reverso', 'nginx', 'vercel', 'ssl', 'load-balancing'],
  },
  {
    id: 'se-062',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Domain-Driven Design (DDD) simplificado? Quais conceitos são úteis para frontend?',
    hints: ['Ubiquitous Language', 'Bounded Context', 'Aggregates', 'Domain Events'],
    explanation: 'DDD para frontend simplificado: (1) Ubiquitous Language: use o mesmo vocabulário do negócio no código — se o negócio chama de "pedido", não use "order" no código; (2) Bounded Context: cada "domínio" (produtos, pedidos, usuarios) tem seus próprios tipos, componentes e lógica sem vazar para outros; (3) Feature folders por domínio: features/orders/, features/products/; (4) Domain Events: ao invés de coupling direto, componentes emitem eventos de domínio. O benefício principal: código que "fala a língua do negócio" é mais fácil de manter e de entender por qualquer desenvolvedor.',
    tags: ['ddd', 'ubiquitous-language', 'bounded-context', 'dominio', 'feature-folders'],
  },
  {
    id: 'se-063',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o princípio de Least Privilege? Como aplicar em desenvolvimento frontend?',
    hints: ['Acesso mínimo necessário', 'API keys', 'Permissões', 'Tokens'],
    explanation: 'Principle of Least Privilege: cada componente/usuário/processo deve ter apenas as permissões mínimas necessárias. No frontend: (1) API keys: nunca exponha keys administrativas no cliente — use keys com escopo limitado; (2) RBAC: usuário vê apenas o que seu role permite; (3) Service accounts: cada microserviço tem credenciais específicas, não admin; (4) Tokens: token de acesso com escopos limitados (read:products, não admin:*); (5) Data: API retorna apenas os campos necessários (não o objeto inteiro do banco); (6) Variáveis: NEXT_PUBLIC_ apenas para dados não sensíveis.',
    tags: ['least-privilege', 'permissoes', 'api-keys', 'tokens', 'seguranca'],
  },
  {
    id: 'se-064',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão Facade? Exemplo prático em JavaScript.',
    hints: ['Simplificar interface complexa', 'Camada de abstração', 'API mais simples'],
    explanation: `Facade: fornece interface simplificada para um subsistema complexo.
\`\`\`javascript
// Subsistema complexo:
class XMLParser { parse(xml) { /* complexo */ } }
class JSONConverter { convert(data) { /* complexo */ } }
class Validator { validate(data) { /* complexo */ } }
class Cache { get(key) {} set(key, val) {} }

// Facade simplifica o uso:
class DataProcessor {
  #parser = new XMLParser();
  #converter = new JSONConverter();
  #validator = new Validator();
  #cache = new Cache();

  process(xmlData) {
    const cached = this.#cache.get(xmlData);
    if (cached) return cached;
    const parsed = this.#parser.parse(xmlData);
    const json = this.#converter.convert(parsed);
    this.#validator.validate(json);
    this.#cache.set(xmlData, json);
    return json;
  }
}
// Usuário usa apenas: processor.process(xml)
\`\`\``,
    tags: ['facade', 'simplificacao', 'abstrai', 'subsistema', 'pattern'],
  },
  {
    id: 'se-065',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são "Feature Toggles" vs "Feature Branches"? Qual é o tradeoff?',
    hints: ['Trunk-based vs long-lived branches', 'Deploy vs release', 'Complexidade do código'],
    explanation: 'Feature Branches: código de uma feature em branch separada, mergeado quando completo. Problema: branches longas → merge conflicts, integração dolorosa, feedback tarde. Feature Toggles: código vai para main desde cedo mas desabilitado — ativado quando pronto. Benefício: integração contínua real, sem merge conflicts, deploy sem release, canary releases. Tradeoff dos toggles: código fica mais complexo (if statements por toda parte), cleanup necessário ao terminar, pode acumular dívida técnica se não removidos. Estratégia: prefira toggles para novas features, branches curtas para experimentos isolados.',
    tags: ['feature-toggles', 'feature-branches', 'trunk-based', 'tradeoff', 'integracao'],
  },
  {
    id: 'se-066',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "Definition of Done" em Agile? Por que é importante?',
    hints: ['Critérios objetivos para completar', 'Qualidade consistente', 'Sem "está quase pronto"'],
    explanation: 'Definition of Done (DoD): conjunto de critérios que uma user story deve satisfazer para ser considerada completa pelo time. Exemplo de DoD: (1) Código revisado e aprovado em PR; (2) Testes unitários escritos e passando; (3) Testes de integração passando; (4) Sem erros de lint; (5) TypeScript sem erros; (6) Documentação atualizada; (7) Testado em staging; (8) Critérios de aceitação verificados. Por que importante: elimina "está 90% pronto", garante qualidade consistente, evita débito técnico acumulado, faz o time ter a mesma definição de "feito".',
    tags: ['definition-of-done', 'dod', 'agile', 'qualidade', 'criterios'],
  },
  {
    id: 'se-067',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Continuous Delivery vs Continuous Deployment? Qual a diferença?',
    hints: ['CD: pode deployar a qualquer momento', 'CD²: deploya automaticamente', 'Gate manual'],
    explanation: 'Continuous Integration (CI): merge frequente para main com builds automáticos e testes. Continuous Delivery: código está sempre em estado deployável — CI passa, e o deploy para produção pode ser feito com um clique (mas há um gate humano). Continuous Deployment: sem gate humano — cada commit que passa pelos testes vai automaticamente para produção. Para maioria das empresas, Continuous Delivery é o objetivo — autonomia de deploy sem cerimônia, mas com controle quando necessário. Continuous Deployment: para empresas com cultura de testes muito forte (Netflix, Amazon).',
    tags: ['ci', 'continuous-delivery', 'continuous-deployment', 'gate', 'automacao'],
  },
  {
    id: 'se-068',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são "load tests" e "stress tests"? Como ferramentas como k6 ajudam?',
    hints: ['Simular carga real', 'Encontrar breaking point', 'Performance baselining'],
    explanation: 'Load Testing: simula a carga normal esperada (ex: 100 usuários simultâneos) para verificar comportamento sob condições normais — mede latência e throughput. Stress Testing: aumenta a carga além do esperado para encontrar o ponto de quebra — quando o sistema começa a falhar? Performance Baselining: medir métricas antes de uma mudança para comparar depois. k6: ferramenta de load test escrita em JS. Scripts definem virtual users e scenarios. Métricas: p95/p99 de latência, requests/s, error rate. Para frontend: bundle size budget como "load test de performance".',
    tags: ['load-test', 'stress-test', 'k6', 'performance', 'usuarios-virtuais'],
  },
  {
    id: 'se-069',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão de "Graceful Degradation" vs "Progressive Enhancement"?',
    hints: ['Começa completo e degrada', 'Começa básico e melhora', 'Suporte a browsers antigos'],
    explanation: 'Graceful Degradation: comece com a experiência completa (features modernas) e garanta que funciona de forma aceitável em ambientes com menor suporte. "Se WebSocket não disponível, use polling". Progressive Enhancement: comece com a experiência mais básica (funcional em qualquer contexto) e adicione camadas de melhoria conforme as capacidades disponíveis. "HTML semântico primeiro, JavaScript aprimoramento opcional". PE é geralmente preferido para web: acessibilidade melhor, robustez maior. Na prática, muitos projetos são híbridos.',
    tags: ['graceful-degradation', 'progressive-enhancement', 'acessibilidade', 'browsers', 'robustez'],
  },
  {
    id: 'se-070',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "Shift Left" em qualidade de software? Como aplicar no desenvolvimento frontend?',
    hints: ['Qualidade mais cedo no ciclo', 'Detectar bugs antes', 'TypeScript, tests, linting'],
    explanation: 'Shift Left: mover as verificações de qualidade para mais cedo no ciclo de desenvolvimento — onde bugs são mais baratos de corrigir. Aplicação no frontend: (1) TypeScript: detecta erros em tempo de compilação (mais cedo que runtime); (2) ESLint + Prettier: qualidade no editor (mais cedo que CI); (3) Unit/Integration tests locais: desenvolvedor roda antes do push; (4) Pre-commit hooks: lint e testes antes do commit; (5) PR reviews: antes do merge; (6) CI gates: antes do deploy. Custo de um bug: detecção em produção > staging > CI > commit > código. Quanto mais à esquerda, mais barato.',
    tags: ['shift-left', 'qualidade', 'typescript', 'testes', 'ciclo-desenvolvimento'],
  },
  {
    id: 'se-071',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "trunk-based development"? Como se diferencia de Git Flow?',
    hints: ['Uma branch principal', 'Commits frequentes', 'Feature flags para WIP'],
    explanation: 'Trunk-based Development (TBD): todos os desenvolvedores commitam frequentemente (várias vezes ao dia) na branch principal (trunk/main). Branches de vida curta (<1 dia) são aceitáveis para PRs, mas nada de branches de feature por semanas. Diferença do Git Flow: Git Flow tem branches develop, release, hotfix de longa duração — integração dolorosa. No TBD: feature flags para código incompleto, CI/CD robusto, cultura de "always shippable". Benefícios: conflitos raros, feedback rápido, código de todos integrado constantemente. Usado por Google, Facebook.',
    tags: ['trunk-based', 'git-flow', 'branches', 'integracao', 'feature-flags'],
  },
  {
    id: 'se-072',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "Pair Programming"? Quais são os estilos e quando é mais efetivo?',
    hints: ['Driver e Navigator', 'Ping-pong TDD', 'Mob programming'],
    explanation: 'Pair Programming: dois desenvolvedores trabalhando no mesmo código, mesma máquina. Estilos: (1) Driver/Navigator: driver escreve código, navigator revisa e guia estrategicamente; (2) Ping-pong: um escreve o teste, outro escreve o código para passar; (3) Mob programming: time inteiro no mesmo código. Quando é efetivo: código crítico ou complexo, onboarding de novos membros, resolução de bugs difíceis, disseminação de conhecimento. Quando não vale: tarefas simples e bem definidas, quando o time está em diferente timezone. Benefícios: menos bugs, knowledge sharing, melhor design.',
    tags: ['pair-programming', 'driver-navigator', 'mob-programming', 'tdd', 'conhecimento'],
  },
  {
    id: 'se-073',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são "DORA Metrics"? Como medir a eficácia do time de engenharia?',
    hints: ['Deployment frequency', 'Lead time', 'Change failure rate', 'Recovery time'],
    explanation: 'DORA (DevOps Research and Assessment) metrics: 4 métricas para medir performance de engenharia. (1) Deployment Frequency: com que frequência deploya? Elite: várias vezes ao dia; (2) Lead Time for Changes: quanto tempo do commit ao deploy? Elite: menos de 1 hora; (3) Change Failure Rate: % dos deploys que causam problemas? Elite: <5%; (4) Time to Restore Service: quanto tempo para recuperar de incidente? Elite: <1 hora. Times de alta performance têm todas as 4 métricas no nível "Elite". Use para identificar gargalos no processo de entrega.',
    tags: ['dora', 'metricas', 'deployment-frequency', 'lead-time', 'engenharia'],
  },
  {
    id: 'se-074',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão de "Event Storming"? Como ajuda no design de sistemas?',
    hints: ['Domain Events em sticky notes', 'Colaborativo', 'Descoberta de bounded contexts'],
    explanation: 'Event Storming: workshop colaborativo para modelar domínios complexos usando eventos de domínio. Processo: (1) Participantes: devs, POs, especialistas de negócio; (2) Sticky notes coloridas: eventos (laranja), commands (azul), aggregates (amarelo), external systems (rosa); (3) Timeline: dispor eventos em ordem cronológica; (4) Identificar: bounded contexts, agregados, pontos de dor. Resultado: entendimento compartilhado do domínio, identificação de onde os bounded contexts estão, base para arquitetura de microsserviços. Criado por Alberto Brandolini.',
    tags: ['event-storming', 'domain-events', 'bounded-context', 'colaborativo', 'ddd'],
  },
  {
    id: 'se-075',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são "Code Reviews" assíncronos vs síncronos? Quais as vantagens de cada?',
    hints: ['Async: PR comments', 'Sync: pair programming review', 'Contexto e qualidade'],
    explanation: 'Async code review (PR): desenvolvedores comentam no PR em seu próprio tempo. Vantagens: tempo para reflexão, registro permanente de decisões, funciona com times distribuídos. Desvantagem: atrasos, perda de contexto, feedback tardio. Sync (pair/mob): revisão em tempo real enquanto o código é escrito. Vantagens: feedback imediato, menos retrabalho, shared understanding. Desvantagem: requer disponibilidade simultânea, não escala para times grandes. Melhor prática: PRs pequenos (<400 linhas) para async eficaz; pair programming para código crítico ou complexo.',
    tags: ['code-review', 'async', 'sync', 'pr', 'feedback'],
  },
  {
    id: 'se-076',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "Canary Deployment"? Como implementar progressivamente?',
    hints: ['Percentagem de tráfego', 'Rollback automático', 'Feature flags', 'Métricas de saúde'],
    explanation: 'Canary deployment: nova versão serve uma pequena % do tráfego antes de chegar a todos. Processo: (1) Deploy nova versão para 1-5% dos usuários; (2) Monitorar métricas: error rate, latência, conversão; (3) Se métricas OK: aumentar para 20% → 50% → 100%; (4) Se métricas pioram: rollback automático. Implementação: load balancer (Nginx, AWS ALB) com weights; feature flags; header-based routing. Vercel: preview deployments + Edge Config para targeting. Benefício: detectar problemas antes de afetar todos os usuários. Diferente de A/B testing: não é sobre features, é sobre segurança de deploy.',
    tags: ['canary', 'deploy', 'percentagem', 'rollback', 'metricas'],
  },
  {
    id: 'se-077',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são "Immutable Infrastructure" e "Infrastructure as Code (IaC)"?',
    hints: ['Nunca modificar', 'Destruir e recriar', 'Terraform', 'Reproduzível'],
    explanation: 'Immutable Infrastructure: servidores nunca são modificados após deploy — se algo muda, cria-se um novo servidor e o antigo é destruído. Benefícios: sem "configuration drift", deploys reproduzíveis, rollback trivial (manter imagem anterior). IaC (Infrastructure as Code): infraestrutura definida como código (Terraform, Pulumi, CloudFormation) — versionada, revisada em PR, reproduzível. Importância: elimina "funciona na minha infra" — dev e prod têm a mesma infraestrutura descrita como código. Docker é fundamental: container é a "imagem imutável". Serverless (Vercel) abstrai tudo isso.',
    tags: ['immutable-infrastructure', 'iac', 'terraform', 'reproducivel', 'docker'],
  },
  {
    id: 'se-078',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são "Microservices"? Quais são os principais desafios em comparação com monólito?',
    hints: ['Serviços independentes', 'Falhas distribuídas', 'Consistência eventual', 'Complexidade'],
    explanation: 'Microservices: sistema composto de serviços independentes, cada um com responsabilidade única, deployáveis independentemente. Vantagens: autonomia de times, tecnologias diferentes por serviço, escalonamento independente. Desafios: (1) Comunicação: latência de rede, falhas de serviço; (2) Consistência de dados: sem transactions distribuídas simples; (3) Testing: integração complexa; (4) Observability: trace de requests através de múltiplos serviços; (5) Operational complexity: k8s, service mesh, service discovery. Para frontend: BFF (Backend for Frontend) unifica múltiplos microservices. Comece com monólito — migre quando tiver motivos reais.',
    tags: ['microservices', 'monolito', 'autonomia', 'desafios', 'bff'],
  },
  {
    id: 'se-079',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "Dependency Injection" no contexto de testes? Por que facilita?',
    hints: ['Substituir por mock', 'Sem hardcoded deps', 'Testável por design'],
    explanation: 'DI em testes: ao injetar dependências em vez de criar internamente, você pode substituir por mocks/stubs nos testes. Exemplo: function createUserService(db: Database) — em produção: createUserService(realDB); em testes: createUserService(mockDB). Sem DI: função cria a instância do banco internamente — para testar, você precisaria mockar toda a importação (hacky). Com DI: apenas passe uma implementação mock. Em React: custom hooks como DI — componente recebe o hook como prop para permitir substituição em testes.',
    tags: ['di', 'testes', 'mock', 'injecao', 'testavel'],
  },
  {
    id: 'se-080',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "Hexagonal Architecture" (Ports and Adapters)?',
    hints: ['Porta: interface', 'Adaptador: implementação', 'Domínio no centro', 'Independente de framework'],
    explanation: 'Hexagonal Architecture (Alistair Cockburn): isola o núcleo de negócio (domain) de dependências externas (UI, banco, APIs). Ports: interfaces que o domínio expõe ou depende. Adapters: implementações concretas dos ports (banco SQL, API REST, CLI). O domínio nunca conhece os adapters — apenas as interfaces. Benefício: trocar banco, framework ou interface sem alterar a lógica de negócio. Em React: domain logic em packages/domain puro (sem framework) é essencialmente hexagonal — os componentes React são adapters que consomem a lógica de domínio.',
    tags: ['hexagonal', 'ports-adapters', 'dominio', 'isolamento', 'arquitetura'],
  },
]
