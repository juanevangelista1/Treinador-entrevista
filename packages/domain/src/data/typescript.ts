import type { Question } from '../session/types'

export const typescriptQuestions: Question[] = [
  {
    id: 'ts-001',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a diferença entre `interface` e `type` no TypeScript?',
    options: [
      { id: 'a', text: 'São idênticos, não há diferença prática', isCorrect: false },
      { id: 'b', text: '`interface` suporta declaration merging e é preferida para objetos; `type` é mais flexível para unions e intersections', isCorrect: true },
      { id: 'c', text: '`type` só pode ser usado com primitivos', isCorrect: false },
      { id: 'd', text: '`interface` não pode ser estendida', isCorrect: false },
    ],
    hints: ['Tente declarar a mesma interface duas vezes'],
    explanation: '`interface` suporta declaration merging (declarar duas vezes une as propriedades) e é idiomática para contratos de objetos e classes. `type` é mais poderoso para unions, intersections, mapped types e conditional types.',
    tags: ['interface', 'type', 'tipos'],
  },
  {
    id: 'ts-002',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Generics em TypeScript? Crie um exemplo de uma função genérica `identity<T>` e explique por que ela é mais segura que usar `any`.',
    hints: ['Generics preservam a informação de tipo'],
    explanation: 'Generics permitem escrever código reutilizável que funciona com múltiplos tipos sem perder type safety. `function identity<T>(value: T): T` preserva o tipo exato do argumento, enquanto `any` desliga a verificação de tipos completamente.',
    tags: ['generics', 'type-safety', 'any'],
  },
  {
    id: 'ts-003',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique a diferença entre os utility types `Partial<T>`, `Required<T>`, `Pick<T, K>` e `Omit<T, K>`. Quando você usaria cada um?',
    hints: ['Pense em operações de formulário onde nem todos os campos são obrigatórios'],
    explanation: '`Partial<T>` torna todas as propriedades opcionais (útil para patches/updates). `Required<T>` torna todas obrigatórias. `Pick<T, K>` seleciona um subconjunto de propriedades. `Omit<T, K>` exclui propriedades específicas.',
    tags: ['utility-types', 'partial', 'pick', 'omit'],
  },
  {
    id: 'ts-004',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Conditional Types e como o tipo `infer` funciona? Mostre um exemplo implementando um tipo `ReturnType<T>` manualmente.',
    hints: ['`T extends U ? X : Y`', '`infer` captura um tipo dentro de um conditional type'],
    explanation: 'Conditional types criam lógica condicional no sistema de tipos. `infer` captura tipos inferidos dentro de uma condição: `type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never`.',
    tags: ['conditional-types', 'infer', 'avancado'],
  },
  {
    id: 'ts-005',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o operador `!` (Non-null assertion) em TypeScript e qual o risco de usá-lo?',
    options: [
      { id: 'a', text: 'Converte o valor para boolean', isCorrect: false },
      { id: 'b', text: 'Diz ao compilador que o valor nunca será null/undefined, mas sem verificação em runtime', isCorrect: true },
      { id: 'c', text: 'Lança uma exceção se o valor for null', isCorrect: false },
      { id: 'd', text: 'É equivalente ao optional chaining `?.`', isCorrect: false },
    ],
    hints: ['O compilador acredita em você — é você quem assume a responsabilidade'],
    explanation: 'O operador `!` instrui o TypeScript a tratar o valor como não-nulo sem verificação em runtime. Se o valor for `null` ou `undefined`, haverá um erro em runtime.',
    tags: ['non-null-assertion', 'null-safety', 'operadores'],
  },
  {
    id: 'ts-006',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Type Guards em TypeScript? Implemente um type guard customizado `isUser(value: unknown): value is User`.',
    hints: ['Type guards estreitam o tipo dentro de um bloco condicional'],
    explanation: 'Type guards são funções que verificam o tipo em runtime e informam o TypeScript sobre isso com type predicates (`value is T`). O compilador então estreita o tipo automaticamente dentro do bloco `if`.',
    tags: ['type-guards', 'type-predicates', 'narrowing'],
  },
  {
    id: 'ts-007',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique o conceito de Mapped Types em TypeScript. Crie um tipo `Readonly<T>` manualmente usando mapped types.',
    hints: ['`{ [K in keyof T]: ... }` itera sobre as chaves de T'],
    explanation: 'Mapped Types criam novos tipos transformando as propriedades de um tipo existente. `type MyReadonly<T> = { readonly [K in keyof T]: T[K] }`. Combinados com conditional types, são extremamente poderosos.',
    tags: ['mapped-types', 'readonly', 'transformacao'],
  },
  {
    id: 'ts-008',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença entre `unknown` e `any` em TypeScript?',
    options: [
      { id: 'a', text: 'São equivalentes, ambos aceitam qualquer tipo', isCorrect: false },
      { id: 'b', text: '`unknown` requer verificação de tipo antes de usar; `any` desliga completamente a verificação', isCorrect: true },
      { id: 'c', text: '`unknown` só aceita strings e numbers', isCorrect: false },
      { id: 'd', text: '`any` é mais restritivo que `unknown`', isCorrect: false },
    ],
    hints: ['Tente acessar uma propriedade em um valor `unknown` sem verificação'],
    explanation: '`unknown` é a versão type-safe de `any`. Ambos aceitam qualquer valor, mas `unknown` requer type narrowing antes de operações. `any` bypassa completamente o type checker. Prefira `unknown` para inputs externos.',
    tags: ['unknown', 'any', 'type-safety'],
  },
  {
    id: 'ts-009',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 5,
    targetLevel: ['staff'],
    text: 'Como você implementaria um tipo que extrai recursivamente todas as chaves aninhadas de um objeto como string literal paths? Ex: `{ a: { b: { c: number } } }` → `"a" | "a.b" | "a.b.c"`',
    hints: ['Template literal types', 'Recursão com conditional type'],
    explanation: 'Implementado com template literal types + recursive conditional types. Essa técnica é usada em bibliotecas como React Hook Form para type-safe path access.',
    tags: ['template-literal', 'recursao', 'tipos-avancados'],
  },
  {
    id: 'ts-010',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Discriminated Unions em TypeScript? Por que elas são mais seguras que verificações com flags booleanas?',
    hints: ['Use uma propriedade literal como discriminante: `type: "success" | "error"`'],
    explanation: 'Discriminated Unions usam uma propriedade literal compartilhada como discriminante. O TypeScript estreita automaticamente o tipo em cada branch do switch/if, garantindo exhaustiveness checking.',
    tags: ['discriminated-unions', 'narrowing', 'state-machine'],
  },
  // ── EXPANSÃO ─────────────────────────────────────────────────────────────────
  {
    id: 'ts-011',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que é TypeScript e quais são seus benefícios em relação ao JavaScript puro?',
    hints: ['Superset do JS', 'Verificação em tempo de compilação', 'IntelliSense'],
    explanation: 'TypeScript é um superset tipado do JavaScript que compila para JS. Benefícios: (1) Verificação de tipos em tempo de compilação — erros detectados antes de rodar; (2) IntelliSense/autocomplete no editor; (3) Refatoração segura; (4) Documentação viva — tipos explicam a API; (5) Melhor tooling. Não muda o comportamento em runtime — é apenas uma camada de tipos. Pode ser adotado gradualmente em projetos JS existentes.',
    tags: ['typescript', 'beneficios', 'javascript', 'compilacao'],
  },
  {
    id: 'ts-012',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Quais são os tipos primitivos do TypeScript? O que é o tipo `never`?',
    hints: ['string, number, boolean', 'never: valor que nunca existe'],
    explanation: 'Primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. Especiais: `any` (desliga type checker), `unknown` (type-safe any), `void` (função sem retorno), `never` (valor que nunca existe/ocorre). `never` é retorno de funções que sempre lançam exceção ou têm loop infinito: `function fail(msg: string): never { throw new Error(msg); }`. Também é resultado de narrowing exaustivo — quando todos os casos foram tratados.',
    tags: ['tipos', 'primitivos', 'never', 'void', 'unknown'],
  },
  {
    id: 'ts-013',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Union Types e Intersection Types? Como diferem?',
    hints: ['Union: ou um ou outro', 'Intersection: combina todos'],
    explanation: 'Union Type (`|`): valor pode ser um OU outro tipo. `type Result = Success | Error`. Narrowing necessário para acessar propriedades específicas. Intersection Type (`&`): combina TODOS os tipos — o valor deve satisfazer todos. `type Admin = User & AdminPermissions`. Todos os campos de ambos os tipos são requeridos. Union = OR lógico; Intersection = AND lógico. Discriminated Unions usam union types com propriedade discriminante para narrowing seguro.',
    tags: ['union-type', 'intersection-type', 'combinacao', 'narrowing'],
  },
  {
    id: 'ts-014',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Enums no TypeScript? Quais os problemas com Numeric Enums?',
    hints: ['const enum', 'String enum', 'Reverse mapping'],
    explanation: 'Enums definem conjunto de constantes nomeadas. Numeric enum: `enum Direction { Up = 0, Down = 1 }` — gera objeto JS com reverse mapping. String enum: `enum Status { Active = "ACTIVE" }` — sem reverse mapping, mais debuggável. Problemas com numeric enum: (1) Qualquer number é atribuível — `Direction = 99` compila sem erro; (2) Reverse mapping gera código JS extra. Alternativa moderna mais segura: `const Status = { Active: "ACTIVE", Inactive: "INACTIVE" } as const; type Status = typeof Status[keyof typeof Status]`.',
    tags: ['enum', 'const-enum', 'string-enum', 'reverse-mapping', 'alternativa'],
  },
  {
    id: 'ts-015',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é type assertion (`as`) em TypeScript? Quando usar e quando evitar?',
    hints: ['Forçar um tipo', 'Sem verificação em runtime', 'Prefira type guards'],
    explanation: 'Type assertion `as`: diz ao TypeScript para tratar um valor como tipo específico: `const input = e.target as HTMLInputElement`. Não faz conversão em runtime — puramente compilação. Quando usar: quando você tem certeza do tipo mas o TypeScript não consegue inferir (DOM APIs, dados externos já validados). Quando evitar: para "calar" erros de tipo — indica problema de design. Prefira type guards para verificação real em runtime. Double assertion (`value as unknown as T`) é quase sempre um code smell.',
    tags: ['type-assertion', 'as', 'casting', 'type-guard', 'boas-praticas'],
  },
  {
    id: 'ts-016',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar Generics com constraints em TypeScript? Mostre exemplos com `extends`.',
    hints: ['<T extends object>', 'keyof', 'Restringir o tipo genérico'],
    explanation: 'Constraints restringem quais tipos um generic aceita: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }` — K deve ser uma chave de T. Outros exemplos: `<T extends object>` — apenas objetos; `<T extends string | number>` — apenas primitivos; `<T extends { length: number }>` — qualquer coisa com length. Torna o generic mais específico e seguro, evitando `any` internamente.',
    tags: ['generics', 'constraints', 'extends', 'keyof', 'type-safety'],
  },
  {
    id: 'ts-017',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Quais são os utility types mais importantes do TypeScript? Explique `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`.',
    hints: ['Record: objeto com chaves de tipo K e valores de tipo V', 'ReturnType: tipo de retorno de uma função'],
    explanation: '`Record<K, V>`: objeto com chaves K e valores V — `Record<string, number>`. `Exclude<T, U>`: remove membros de union que são assignable a U — `Exclude<"a"|"b"|"c", "a"> = "b"|"c"`. `Extract<T, U>`: mantém apenas membros assignable a U. `NonNullable<T>`: remove null e undefined. `ReturnType<F>`: extrai tipo de retorno de função. `Parameters<F>`: extrai tipos dos parâmetros como tuple. `Awaited<T>`: desempacota Promise.',
    tags: ['utility-types', 'Record', 'Exclude', 'ReturnType', 'Parameters'],
  },
  {
    id: 'ts-018',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Template Literal Types em TypeScript? Dê exemplos práticos.',
    hints: ['`${Type}` em tipos', 'Combinação de string unions', 'Validação de formato'],
    explanation: 'Template literal types criam tipos baseados em combinação de string literals. Exemplos: `type EventName = \`on${Capitalize<string>}\`` → "onClick", "onChange"; `type Routes = \`/\${string}\`` → qualquer string começando com "/"; `type CssProperty = \`margin-${"top"|"right"|"bottom"|"left"}\`` → combinação de todos. Muito útil para: tipagem de eventos, rotas, CSS-in-JS. Usado internamente em TypeScript para tipagem de string template APIs.',
    tags: ['template-literal-types', 'string-union', 'combinacao', 'avancado'],
  },
  {
    id: 'ts-019',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o tipo `as const` em TypeScript? Como difere de `Object.freeze`?',
    hints: ['Readonly até o fundo', 'Literal types', 'Compilação apenas'],
    explanation: '`as const`: assertion que torna o tipo tão específico/restritivo quanto possível — números/strings viram literal types, arrays viram readonly tuples, objetos viram readonly com literal types nas propriedades. `{ x: 1 } as const` → `{ readonly x: 1 }` (tipo literal `1`, não `number`). `Object.freeze` é um runtime operation que previne mutações mas o TypeScript tipifica como `Readonly<T>` apenas no nível superficial. `as const` é apenas compilação — não tem efeito em runtime.',
    tags: ['as-const', 'literal-types', 'readonly', 'Object.freeze', 'compilacao'],
  },
  {
    id: 'ts-020',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente um React Component em TypeScript? Explique `FC`, `ComponentProps`, `ReactNode` vs `ReactElement`.',
    hints: ['FC<Props>', 'children: ReactNode', 'ComponentProps para reutilizar tipos'],
    explanation: '`FC<Props>` (FunctionComponent): type para componentes funcionais. Problemático: inclui implicitamente `children`. Preferência atual: tipar diretamente. `ReactNode`: qualquer coisa renderizável (string, number, JSX, null, boolean, array) — use para `children`. `ReactElement`: especificamente um elemento React (resultado de JSX). `ComponentProps<typeof Button>`: extrai os props de um componente — útil para wrapper de componentes. Exemplo: `function Card({ title, children }: { title: string; children: ReactNode }) {}`.',
    tags: ['react', 'typescript', 'FC', 'ReactNode', 'ComponentProps'],
  },
  {
    id: 'ts-021',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `strictNullChecks`? Por que é fundamental ativar?',
    hints: ['null e undefined são tipos distintos', 'Força verificação explícita'],
    explanation: 'Com `strictNullChecks: true` (parte de `strict: true`): `null` e `undefined` são tipos distintos — `string` não aceita `null` automaticamente. Força verificação explícita antes de acessar valores possivelmente nulos. Sem `strictNullChecks`: qualquer tipo pode ser null/undefined — desativa uma das principais proteções do TypeScript. Sempre ative `strict: true` no `tsconfig.json`. Erros que surgem ao ativar são bugs reais esperando para acontecer.',
    tags: ['strictNullChecks', 'strict', 'null', 'undefined', 'tsconfig'],
  },
  {
    id: 'ts-022',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é narrowing em TypeScript? Quais são as formas de narrowing?',
    hints: ['typeof', 'instanceof', 'in', 'type guard', 'discriminante'],
    explanation: 'Narrowing: TypeScript afunila o tipo com base em verificações de controle de fluxo. Formas: (1) `typeof`: `if (typeof x === "string") { /* x é string */ }`; (2) `instanceof`: `if (err instanceof Error) { /* err é Error */ }`; (3) `in`: `if ("name" in value) { /* value tem name */ }`; (4) Truthiness: `if (value) { /* não null/undefined/0/"" */ }`; (5) Discriminated union: `if (result.type === "success") { /* result é Success */ }`; (6) Type guard customizado: `function isUser(v: unknown): v is User`.',
    tags: ['narrowing', 'typeof', 'instanceof', 'type-guard', 'control-flow'],
  },
  {
    id: 'ts-023',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é structural typing (duck typing) no TypeScript? Como difere de nominal typing?',
    hints: ['Compatibilidade baseada na estrutura', 'Não no nome do tipo', 'Java vs TypeScript'],
    explanation: 'TypeScript usa structural typing: compatibilidade de tipos baseada na estrutura (propriedades e seus tipos), não no nome. `interface Point { x: number; y: number }` — qualquer objeto com `x: number` e `y: number` é um `Point`, mesmo sem declaração explícita. Em nominal typing (Java, C#): dois tipos com mesma estrutura mas nomes diferentes são incompatíveis. Implicação: objetos literais com propriedades extras são atribuíveis a interfaces mais simples (excess property checks só em atribuição direta). Permite integração fácil com código sem tipos.',
    tags: ['structural-typing', 'duck-typing', 'nominal', 'compatibilidade'],
  },
  {
    id: 'ts-024',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar async functions e Promises em TypeScript?',
    hints: ['Promise<T>', 'async: retorna Promise automaticamente', 'Awaited<T>'],
    explanation: 'Async function retorna `Promise<T>` automaticamente. Declaração: `async function fetchUser(id: number): Promise<User>`. Com Promises explícitas: `function delay(ms: number): Promise<void>`. Para o tipo do resultado de uma Promise: `Awaited<Promise<User>> = User`. Para funções que retornam Promise ou valor direto: `T | Promise<T>`. Generics com Promises: `async function map<T, U>(items: T[], fn: (item: T) => Promise<U>): Promise<U[]>`. Error types: TypeScript tipifica `catch` como `unknown` — use type guard.',
    tags: ['async', 'Promise', 'Awaited', 'typescript', 'funcoes'],
  },
  {
    id: 'ts-025',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Declaration Files (`.d.ts`)? Como criar um para uma biblioteca sem tipos?',
    hints: ['Tipos sem implementação', '@types/', 'declare module'],
    explanation: 'Declaration files (`.d.ts`) declaram tipos sem implementação JavaScript — permitem TypeScript entender bibliotecas JS. Muitas libs têm `@types/nome-da-lib` no npm. Para criar para lib sem tipos: `declare module "nome-da-lib" { export function doThing(input: string): number; export default class MyClass { constructor(opt: Options); method(): void; } }`. Para global augmentation: `declare global { interface Window { analytics: Analytics; } }`. `/// <reference types="..." />` para referências a outros d.ts.',
    tags: ['declaration-files', 'd.ts', '@types', 'ambient', 'javascript'],
  },
  {
    id: 'ts-026',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o `tsconfig.json`? Quais são as opções mais importantes?',
    hints: ['strict', 'target', 'module', 'paths', 'baseUrl'],
    explanation: 'Principais opções: `strict: true` — habilita todas as verificações rigorosas; `target` — versão JS gerada (ES5, ES2020); `module` — sistema de módulos (ESNext, CommonJS); `lib` — APIs disponíveis (DOM, ES2022); `paths` — aliases de importação (`"@/*": ["./src/*"]`); `baseUrl` — raiz para imports; `noEmit: true` — apenas verificação sem compilar; `skipLibCheck: true` — pula verificação de d.ts de dependências (mais rápido); `exactOptionalPropertyTypes` — distingue `undefined` explícito de propriedade ausente.',
    tags: ['tsconfig', 'strict', 'target', 'paths', 'configuracao'],
  },
  {
    id: 'ts-027',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como implementar um tipo `DeepPartial<T>` recursivo em TypeScript?',
    hints: ['Recursão em Mapped Types', 'Objetos aninhados', 'Condicional para objetos'],
    explanation: `\`\`\`typescript
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// Uso:
type Config = { db: { host: string; port: number }; debug: boolean };
type PartialConfig = DeepPartial<Config>;
// { db?: { host?: string; port?: number }; debug?: boolean }
\`\`\`
O conditional type verifica se T é um objeto — se sim, torna cada propriedade opcional E aplica DeepPartial recursivamente. Se não, retorna T como está. Útil para funções de merge/update de configurações aninhadas.`,
    tags: ['DeepPartial', 'recursao', 'mapped-types', 'utility-type', 'avancado'],
  },
  {
    id: 'ts-028',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é covariance, contravariance e invariance em TypeScript? Como afeta a tipagem de funções?',
    hints: ['Subtipos e supertipes', 'Parâmetros vs retorno', 'strictFunctionTypes'],
    explanation: 'Covariância: se `Cat extends Animal`, então `Cat[]` é assignable a `Animal[]` — preserva direção. Contravariância: parâmetros de função — `(a: Animal) => void` é assignable a `(c: Cat) => void` — inverte direção (função que aceita qualquer Animal pode ser usada onde Cat é esperado). TypeScript com `strictFunctionTypes`: métodos de objeto são bivariantes (aceita ambas direções por compatibilidade). Funções normais são contravariantes em parâmetros. Retorno de função é covariante.',
    tags: ['covariancia', 'contravariancia', 'funcoes', 'tipos', 'strictFunctionTypes'],
  },
  {
    id: 'ts-029',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar `keyof` e `typeof` em TypeScript para criar tipos dinâmicos?',
    hints: ['keyof: chaves de um tipo', 'typeof: tipo de um valor', 'Combinados para tipos flexíveis'],
    explanation: '`keyof T`: union de todas as chaves de T como literal strings. `keyof User = "id" | "name" | "email"`. `typeof value`: tipo de um valor JavaScript — `const config = { theme: "dark" }; type Config = typeof config`. Combinados: `function get<T, K extends keyof T>(obj: T, key: K): T[K]` — retorno é o tipo correto da propriedade. `keyof typeof enumObj` para extrair tipos de const objects. Muito poderoso para funções genéricas que trabalham com propriedades de objetos.',
    tags: ['keyof', 'typeof', 'generics', 'dinamico', 'propriedades'],
  },
  {
    id: 'ts-030',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Branded Types (Nominal Types) em TypeScript? Como implementar e quando usar?',
    hints: ['Tornar tipos nominalmente distintos', 'Prevenir mixtura de IDs', 'Symbol como brand'],
    explanation: `Branded types previnem mixtura de tipos estruturalmente iguais mas semanticamente diferentes.
\`\`\`typescript
type UserId = string & { readonly __brand: "UserId" };
type ProductId = string & { readonly __brand: "ProductId" };

function asUserId(id: string): UserId { return id as UserId; }

function getUser(id: UserId) { /* ... */ }
const userId = asUserId("user-123");
const prodId = "prod-456" as ProductId;
getUser(userId); // ✓
getUser(prodId); // ✗ TypeError em compilação!
\`\`\`
Útil para: IDs diferentes de domínios, unidades de medida (Meters vs Feet), moedas.`,
    tags: ['branded-types', 'nominal', 'type-safety', 'ids', 'dominio'],
  },
  {
    id: 'ts-031',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente Event Handlers no React com TypeScript?',
    hints: ['ChangeEvent', 'MouseEvent', 'React.FormEvent', 'Generics de HTMLElement'],
    explanation: 'Tipos de eventos React: `React.ChangeEvent<HTMLInputElement>` para inputs; `React.MouseEvent<HTMLButtonElement>` para cliques; `React.FormEvent<HTMLFormElement>` para submit de form; `React.KeyboardEvent<HTMLInputElement>` para teclado. Tipagem de handlers: `const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value); }`. Para `e.target.value` ser disponível, o generic deve ser o elemento HTML correto. `React.SyntheticEvent` é o tipo base genérico.',
    tags: ['react', 'typescript', 'event-handlers', 'ChangeEvent', 'generics'],
  },
  {
    id: 'ts-032',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Index Signatures em TypeScript? Quando usar e quais são os trade-offs?',
    hints: ['[key: string]: value', 'Dicionário dinâmico', 'Perde type safety de propriedades específicas'],
    explanation: 'Index signature: `interface StringMap { [key: string]: string }` — aceita qualquer string como chave. Útil para dicionários dinâmicos. Trade-offs: (1) Perde verificação de propriedades específicas — todas as propriedades devem ser compatíveis com o tipo de valor; (2) `obj["qualquercoisa"]` compila sem erro. Alternativa mais segura para dados dinâmicos: `Record<string, string>` ou `Map<string, string>`. Para casos específicos com algumas propriedades conhecidas: `{ name: string; [key: string]: unknown }` — propriedades conhecidas mais índice genérico.',
    tags: ['index-signature', 'dicionario', 'dinamico', 'trade-off', 'Record'],
  },
  {
    id: 'ts-033',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como implementar o padrão Builder com type safety completo em TypeScript?',
    hints: ['Fluent interface', 'Cada método retorna novo tipo', 'Required antes do build'],
    explanation: `\`\`\`typescript
type BuilderState = { name?: string; age?: number };

class UserBuilder<T extends BuilderState = {}> {
  private state: T;
  constructor(state: T = {} as T) { this.state = state; }

  withName(name: string): UserBuilder<T & { name: string }> {
    return new UserBuilder({ ...this.state, name });
  }
  withAge(age: number): UserBuilder<T & { age: number }> {
    return new UserBuilder({ ...this.state, age });
  }
  build(this: UserBuilder<{ name: string; age: number }>) {
    return this.state;
  }
}
// build() só disponível quando name E age foram definidos!
new UserBuilder().withName("João").withAge(30).build(); // ✓
new UserBuilder().withName("João").build(); // ✗ Error!
\`\`\``,
    tags: ['builder-pattern', 'fluent-interface', 'type-safety', 'generics', 'avancado'],
  },
  {
    id: 'ts-034',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Decorators em TypeScript? Qual seu status na linguagem?',
    hints: ['@decorator', 'Stage 3 ECMAScript', 'Metaprogramação'],
    explanation: 'Decorators (`@nome`) são funções que podem decorar classes, métodos, propriedades e parâmetros — adicionar metadados ou modificar comportamento. Em TypeScript 5.0: decorators nativos Stage 3 do TC39 — sintaxe diferente dos "experimental decorators" do TypeScript antigo. Use moderno: `@myDecorator` na classe. Casos de uso: logging, caching, validação, inversão de dependência (Angular, NestJS). `experimentalDecorators: true` ativa a versão antiga. Novo decorator API é o futuro.',
    tags: ['decorators', 'metaprogramacao', 'typescript5', 'stage3', 'classes'],
  },
  {
    id: 'ts-035',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente Context API do React com TypeScript?',
    hints: ['createContext<T>', 'Custom hook para segurança', 'Evite o valor padrão null'],
    explanation: `\`\`\`typescript
interface ThemeContextValue {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Hook seguro que garante uso dentro do Provider
function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

// Provider tipado
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
\`\`\``,
    tags: ['context', 'react', 'typescript', 'createContext', 'custom-hook'],
  },
  {
    id: 'ts-036',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o padrão `satisfies` operator no TypeScript 4.9+? Como difere de `as`?',
    hints: ['Verifica o tipo sem perder inferência', 'Melhor que as', 'TypeScript 4.9'],
    explanation: '`satisfies` (TS 4.9): valida que um valor satisfaz um tipo mas mantém o tipo mais específico inferido. Diferença de `as`: `as` força o tipo, perdendo especificidade. `satisfies` verifica e mantém. Exemplo: `const palette = { red: [255, 0, 0], blue: "#0000ff" } satisfies Record<string, string | number[]>`. Com `as Record<...>`: `palette.red` seria `string | number[]`. Com `satisfies`: `palette.red` continua sendo `number[]` (mais específico). Use `satisfies` quando quer validação sem perder type inference.',
    tags: ['satisfies', 'typescript49', 'type-inference', 'as', 'operador'],
  },
  {
    id: 'ts-037',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente useState com TypeScript quando o estado pode ser undefined?',
    hints: ['useState<T | undefined>', 'Lazy initializer', 'Type narrowing'],
    explanation: '`useState<User | undefined>()` — state começa como undefined. `useState<User | null>(null)` — preferível pois null é explícito e mais fácil de detectar. Para inferência: `useState(initialValue)` — TypeScript infere o tipo do valor inicial. Lazy initializer: `useState(() => computeExpensive())` — tipo inferido do retorno. Em componentes, sempre faça narrowing antes de usar: `if (!user) return <Loading/>; /* user é User aqui */`. Para arrays: `useState<Item[]>([])` — começa vazio mas tipado.',
    tags: ['useState', 'typescript', 'undefined', 'null', 'narrowing'],
  },
  {
    id: 'ts-038',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como implementar o padrão Repository com types genéricos em TypeScript?',
    hints: ['Interface genérica', 'CRUD', 'Implementações concretas'],
    explanation: `\`\`\`typescript
interface Repository<T, ID> {
  findById(id: ID): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: Omit<T, "id">): Promise<T>;
  update(id: ID, data: Partial<T>): Promise<T>;
  delete(id: ID): Promise<void>;
}

class UserRepository implements Repository<User, string> {
  async findById(id: string): Promise<User | null> {
    return db.users.findOne({ id });
  }
  async save(user: Omit<User, "id">): Promise<User> {
    return db.users.create({ ...user, id: generateId() });
  }
  // ... outros métodos
}
\`\`\`
Type safety completo: o compilador garante que a implementação satisfaz o contrato.`,
    tags: ['repository', 'generics', 'interface', 'crud', 'pattern'],
  },
  {
    id: 'ts-039',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Tuple Types em TypeScript? Quando são preferíveis a arrays?',
    hints: ['Tamanho fixo', 'Tipos em posições específicas', 'useState retorna tuple'],
    explanation: 'Tuple: array com tamanho e tipos fixos por posição. `type Point = [number, number]` — exatamente 2 numbers. Variadic tuples (TS 4): `[string, ...number[]]` — string + qualquer quantidade de numbers. Quando preferir: (1) Funções que retornam múltiplos valores: `function useState<T>(init: T): [T, Dispatch<SetStateAction<T>>]`; (2) Quando a posição importa (lat, lng); (3) Rest parameters tipados. `as const` torna arrays em readonly tuples: `[1, 2] as const → readonly [1, 2]`.',
    tags: ['tuple', 'array', 'posicao', 'useState', 'multiple-return'],
  },
  {
    id: 'ts-040',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique como funciona o sistema de inferência de tipos do TypeScript em funções genéricas.',
    hints: ['Contextual typing', 'Type argument inference', 'Return type inference'],
    explanation: 'TypeScript infere tipos genéricos dos argumentos passados: `identity("hello")` — T inferido como `string`. Para retorno: inferido da expressão de retorno. Contextual typing: ao passar callback, TypeScript infere o tipo do parâmetro pelo contexto: `[1,2,3].map(x => x * 2)` — `x` inferido como `number`. Falha de inferência: use type annotation explícita ou generic constraint. Multiple inference sites: `function pair<T>(a: T, b: T): [T, T]` — T inferido unificando ambos os tipos. Se incompatíveis, erro de compilação.',
    tags: ['type-inference', 'generics', 'contextual-typing', 'avancado'],
  },
  {
    id: 'ts-041',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar TypeScript com Zod para validação em runtime e type safety?',
    hints: ['z.object()', 'z.infer<>', 'parse vs safeParse'],
    explanation: `Zod: schema validation com type inference automática.
\`\`\`typescript
import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

type User = z.infer<typeof UserSchema>; // { name: string; email: string; age?: number }

// safeParse: não lança exceção
const result = UserSchema.safeParse(rawData);
if (result.success) {
  const user = result.data; // tipado como User
} else {
  console.error(result.error.format());
}
\`\`\`
Elimina duplicação entre tipos TypeScript e validação runtime.`,
    tags: ['zod', 'validacao', 'runtime', 'type-inference', 'schema'],
  },
  {
    id: 'ts-042',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `interface merging` (declaration merging) em TypeScript? Quando é útil?',
    hints: ['Declarar mesma interface duas vezes', 'Union das propriedades', 'Augmentation de libs'],
    explanation: 'Declaration merging: declarar a mesma `interface` duas vezes une as propriedades: `interface User { name: string } interface User { age: number }` → `User` tem ambos. Casos de uso: (1) Module augmentation — adicionar propriedades a interfaces de bibliotecas: `declare module "express" { interface Request { user?: AuthUser } }`; (2) Adicionar métodos globais: `interface Window { analytics: Analytics }`. Não funciona com `type` (que não suporta merging). Fundamental para tipagem de frameworks como Express, Next.js Auth.',
    tags: ['declaration-merging', 'interface', 'augmentation', 'module', 'express'],
  },
  {
    id: 'ts-043',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar TypeScript com React Hook Form para formulários totalmente tipados?',
    hints: ['useForm<FormData>', 'register tipado', 'errors com type safety'],
    explanation: `\`\`\`typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type LoginForm = z.infer<typeof LoginSchema>;

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data: LoginForm) => { /* data é LoginForm */ };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
    </form>
  );
}
\`\`\``,
    tags: ['react-hook-form', 'zod', 'typescript', 'formularios', 'type-safe'],
  },
  {
    id: 'ts-044',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Recursive Types em TypeScript? Dê um exemplo com JSON e árvore binária.',
    hints: ['Tipo que referencia a si mesmo', 'JSON pode ter qualquer profundidade', 'TreeNode com filhos do mesmo tipo'],
    explanation: `\`\`\`typescript
// JSON type seguro:
type JSONValue =
  | string | number | boolean | null
  | JSONValue[]
  | { [key: string]: JSONValue };

// Árvore binária:
type BinaryTree<T> = {
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;
};

// Árvore de componentes UI:
type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[]; // Referência recursiva!
};

function flatten(node: TreeNode): TreeNode[] {
  return [node, ...(node.children?.flatMap(flatten) ?? [])];
}
\`\`\``,
    tags: ['recursive-types', 'json', 'arvore', 'binary-tree', 'avancado'],
  },
  {
    id: 'ts-045',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença entre `readonly` e `const` em TypeScript?',
    hints: ['const: variável', 'readonly: propriedade de objeto', 'Readonly<T>'],
    explanation: '`const`: impede reatribuição da VARIÁVEL — o valor em si pode ser mutado se for objeto/array. `const obj = { x: 1 }; obj.x = 2` — válido. `readonly` em TypeScript: impede mutação de PROPRIEDADE de objeto (apenas compilação, sem efeito em runtime). `interface User { readonly id: string }` — `user.id = "..."` → erro de compilação. `Readonly<T>`: torna todas as propriedades readonly. `ReadonlyArray<T>`: array sem métodos que mutam. Para imutabilidade real em runtime: `Object.freeze`.',
    tags: ['readonly', 'const', 'imutabilidade', 'propriedade', 'variavel'],
  },
  {
    id: 'ts-046',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente funções variádicas em TypeScript?',
    hints: ['Rest parameters', 'Tuple types', 'Spread types'],
    explanation: `\`\`\`typescript
// Função com número variável de argumentos
function concat<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Tipagem de argumentos variáveis com tuple
type Args = [string, number, boolean];
function typedVariadic(...args: Args) {
  const [name, age, active] = args; // Totalmente tipado!
}

// Currificação tipada com variádicos
function curry<T extends unknown[], R>(
  fn: (...args: T) => R
): (...args: T) => R {
  return (...args) => fn(...args);
}
\`\`\``,
    tags: ['variadico', 'rest-parameters', 'tuple', 'spread', 'generics'],
  },
  {
    id: 'ts-047',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é `infer` em conditional types? Mostre 3 exemplos práticos de uso.',
    hints: ['Captura tipo dentro de condição', 'ReturnType', 'Extrair tipos de generics'],
    explanation: `\`\`\`typescript
// 1. ReturnType
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 2. UnpackPromise
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;

// 3. Extrair tipo do array
type ArrayElement<T> = T extends (infer E)[] ? E : never;
type Items = ArrayElement<User[]>; // User

// 4. Parâmetros de função
type FirstParam<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;

// 5. Tipo dentro de Promise de array
type DeepUnwrap<T> =
  T extends Promise<infer U> ? DeepUnwrap<U> :
  T extends (infer U)[] ? DeepUnwrap<U> :
  T;
\`\`\``,
    tags: ['infer', 'conditional-types', 'ReturnType', 'Awaited', 'avancado'],
  },
  {
    id: 'ts-048',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como garantir exhaustive checking em switch/if com TypeScript?',
    hints: ['never', 'Throw no default', 'Todos os casos cobertos'],
    explanation: `\`\`\`typescript
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch(shape.type) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
    case "triangle": return (shape.base * shape.height) / 2;
    default:
      // Se todos os casos foram cobertos, shape é never
      // Se não, TypeScript erro aqui — você esqueceu um caso!
      const _exhaustive: never = shape;
      throw new Error(\`Unhandled shape: \${_exhaustive}\`);
  }
}
// Adicionar um novo tipo a Shape e esquecer o case → erro de compilação!
\`\`\``,
    tags: ['exhaustive-check', 'never', 'switch', 'discriminated-union', 'seguranca'],
  },
  {
    id: 'ts-049',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como tipar callbacks e event handlers no React com TypeScript?',
    hints: ['() => void', 'HTMLButtonElement', 'Tipagem dos parâmetros'],
    explanation: `\`\`\`typescript
interface ButtonProps {
  // Callback simples
  onClick: () => void;
  // Callback com parâmetros
  onSelect: (id: string) => void;
  // Handler de evento HTML
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Retorno opcional (pode ou não fazer algo)
  onClose?: () => void;
  // Callback que retorna boolean (ex: validação)
  onValidate: (value: string) => boolean;
}
// Para refs:
interface InputProps {
  ref?: React.Ref<HTMLInputElement>;
}
\`\`\``,
    tags: ['callbacks', 'event-handlers', 'react', 'typescript', 'tipagem'],
  },
  {
    id: 'ts-050',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Opaque Types e como implementar em TypeScript sem suporte nativo?',
    hints: ['Tipos nominalmente distintos', 'Unique symbol', 'Prevent accidental interchangeability'],
    explanation: `TypeScript não tem opaque types nativos mas pode ser simulado:
\`\`\`typescript
declare const __brand: unique symbol;
type Brand<T, B> = T & { readonly [__brand]: B };

type Meters = Brand<number, "Meters">;
type Feet = Brand<number, "Feet">;

const toMeters = (n: number): Meters => n as Meters;
const toFeet = (n: number): Feet => n as Feet;

function addMeters(a: Meters, b: Meters): Meters {
  return (a + b) as Meters;
}
const height = toMeters(1.80);
const length = toFeet(6);
addMeters(height, height); // ✓
addMeters(height, length); // ✗ Type error!
\`\`\``,
    tags: ['opaque-types', 'branded', 'nominal', 'unique-symbol', 'avancado'],
  },
  {
    id: 'ts-051',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são access modifiers em TypeScript (public, private, protected, readonly)?',
    hints: ['Encapsulamento', 'private em runtime vs TypeScript private', '#field'],
    explanation: 'public (padrão): acessível de qualquer lugar. private: acessível apenas dentro da própria classe (verificação apenas em compilação — não é privado em runtime). protected: acessível na classe e subclasses. readonly: pode ser atribuído apenas no constructor. TypeScript private vs JavaScript private (#field): TypeScript private é apagado após compilação; #field é privado em runtime (ES2022). Parameter shorthand: `constructor(private name: string, public age: number)` — cria e atribui propriedades automaticamente.',
    tags: ['access-modifiers', 'private', 'protected', 'readonly', 'encapsulamento'],
  },
  {
    id: 'ts-052',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Abstract Classes em TypeScript? Quando usar vs Interface?',
    hints: ['Não instanciável diretamente', 'Implementação parcial', 'Template method'],
    explanation: 'Abstract class: não pode ser instanciada diretamente, mas pode ter implementação parcial. Define métodos abstratos que subclasses DEVEM implementar. Quando usar: (1) Compartilhar implementação entre classes relacionadas; (2) Template method — define esqueleto do algoritmo; (3) Quando precisa de constructor code compartilhado. Interface vs Abstract class: interface = contrato puro (zero runtime code); abstract class = contrato + implementação compartilhada (gera código JS). Prefira interface para contratos, abstract class quando há lógica compartilhada.',
    tags: ['abstract-class', 'interface', 'heranca', 'template-method', 'comparacao'],
  },
  {
    id: 'ts-053',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como funciona type widening e narrowing automático no TypeScript?',
    hints: ['Inferência expande ou estreita tipos', 'const vs let', 'Literal types'],
    explanation: 'Widening: TypeScript expande tipos inferidos. let x = "hello" → tipo string (não "hello"). const x = "hello" → tipo "hello" (literal). Em funções: retorno é widened. Narrowing: TypeScript estreita tipos com base em verificações. typeof, instanceof, in, truthiness, type guards, equality narrowing. Exemplo: function(x: string | null) { if (x !== null) { /* x é string aqui */ } }. Control flow analysis: TypeScript rastreia o tipo em cada branch do código.',
    tags: ['widening', 'narrowing', 'literal-types', 'const', 'control-flow'],
  },
  {
    id: 'ts-054',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Type Compatibility (assignability) no TypeScript? Explique com exemplos concretos.',
    hints: ['Structural typing', 'Subtipo vs supertipo', 'Excesso de propriedades'],
    explanation: 'TypeScript usa structural typing: um tipo A é assignable para B se tem todas as propriedades requeridas de B. interface Animal { name: string } - interface Dog extends Animal { breed: string } - um Dog é assignable para Animal (tem todas as props). Excess property check: atribuição direta com objeto literal REJEITA propriedades extras — mas passar por variável não. { name: "x", extra: 1 } as Animal → erro. const d = { name: "x", extra: 1 }; const a: Animal = d → OK. Unions: T | U é assignable para T apenas se pode ser T.',
    tags: ['compatibilidade', 'assignability', 'structural', 'excess-property', 'subtipo'],
  },
  {
    id: 'ts-055',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar o TypeScript com React Context de forma completamente type-safe?',
    hints: ['Generic Context', 'Null-safe hook', 'Type discrimination'],
    explanation: 'Pattern seguro: crie Context com tipo | undefined, crie hook que verifica e lança erro se fora do Provider. Benefício: nunca silencia erros de contexto ausente. Exemplo: createContext<AuthContextValue | undefined>(undefined). No hook: const ctx = useContext(AuthContext); if (!ctx) throw new Error("useAuth must be used within AuthProvider"); return ctx. Com TypeScript, o tipo de retorno do hook é AuthContextValue (não undefined). Agrupe state + setters no mesmo value para evitar re-renders por separação.',
    tags: ['context', 'react', 'typescript', 'null-safe', 'type-safe'],
  },
  {
    id: 'ts-056',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Higher Kinded Types (HKT)? O TypeScript os suporta nativamente?',
    hints: ['Tipos de tipos', 'Simulação com interface trick', 'Não nativo'],
    explanation: 'Higher Kinded Types: tipos que aceitam tipos como parâmetros (tipo de tipo). Haskell: Maybe<*>, donde * é qualquer tipo. TypeScript não suporta HKT nativamente. Simulação via "HKT trick" com interfaces: interface URItoKind<A> { readonly "Maybe": Maybe<A>; } type URIS = keyof URItoKind<any>. Bibliotecas fp-ts e effect usam esse pattern para implementar Functor, Monad etc. em TypeScript. Limitado mas funcional para programação funcional avançada.',
    tags: ['hkt', 'higher-kinded', 'fp-ts', 'monad', 'avancado'],
  },
  {
    id: 'ts-057',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente um HOC (Higher-Order Component) em TypeScript?',
    hints: ['Generic para props do wrapped component', 'Omit props injetadas', 'DisplayName'],
    explanation: 'HOC type-safe: preserva os tipos de props do componente envolto e permite omitir props que o HOC injeta. function withAuth<P extends WithAuthProps>(WrappedComponent: ComponentType<P>): ComponentType<Omit<P, keyof WithAuthProps>>. Isso permite usar o componente sem passar as props que o HOC injeta. DisplayName para DevTools: WithAuth.displayName = "withAuth(" + (WrappedComponent.displayName || WrappedComponent.name) + ")". Alternativa moderna: use hooks custom em vez de HOC — mais simples de tipar.',
    tags: ['hoc', 'generic', 'ComponentType', 'Omit', 'typescript'],
  },
  {
    id: 'ts-058',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o conceito de "Type-level programming" no TypeScript? Dê um exemplo prático.',
    hints: ['Computar tipos em compilação', 'Conditional types', 'Template literal manipulation'],
    explanation: 'Type-level programming: realizar computações e transformações de tipos em tempo de compilação usando o sistema de tipos. Exemplos: type CamelToSnake<S> = S extends ${infer Head}${infer Tail} ? Tail extends Capitalize<Tail> ? ${Lowercase<Head>}_${CamelToSnake<Tail>} : ${Head}${CamelToSnake<Tail>} : S. Aplicações: validação de formato de string em compilação, geração de tipos de API, garantia de consistência entre partes do código. O sistema de tipos TypeScript é Turing-completo — você pode computar qualquer coisa em tipos (com cuidado com performance do compiler).',
    tags: ['type-programming', 'turing-complete', 'compile-time', 'template-literal', 'avancado'],
  },
  {
    id: 'ts-059',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar corretamente funções de callback em TypeScript?',
    hints: ['Tipos de parâmetros', 'Retorno void', 'Opcional com ?'],
    explanation: 'Callbacks bem tipados: (1) Parâmetros explícitos: type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void; (2) Callback genérico: type Callback<T> = (error: Error | null, result: T | null) => void; (3) Opcional: onSuccess?: (data: User) => void; (4) Retorno void significa "não me importo com o retorno" — a função pode retornar qualquer coisa e TypeScript não vai reclamar; (5) Neverr para callbacks que nunca retornam: type NeverReturn = () => never. Evite any em callbacks — use unknown e faça narrowing.',
    tags: ['callback', 'tipagem', 'void', 'optional', 'eventos'],
  },
  {
    id: 'ts-060',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar paths aliases no TypeScript (tsconfig) e integrar com Vite/Next.js?',
    hints: ['paths e baseUrl no tsconfig', 'Plugin Vite para resolver', 'next.config.js'],
    explanation: 'No tsconfig.json: { "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["./src/*"], "@components/*": ["./src/components/*"] } } }. Para Vite: instale vite-tsconfig-paths plugin e adicione tsconfigPaths() no vite.config. Para Next.js: já integrado — apenas configure no tsconfig.json e Next.js resolve automaticamente. Para Jest/Vitest: configure moduleNameMapper: { "@/(.*)": "<rootDir>/src/$1" }. Benefício: imports limpos sem ../../../ e mais refatoração-friendly.',
    tags: ['paths', 'aliases', 'tsconfig', 'vite', 'nextjs'],
  },
  {
    id: 'ts-061',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `Awaited<T>` para extrair o tipo de uma Promise?',
    hints: ['Desempacotar Promise<T>', 'Recursivo', 'ReturnType + Awaited'],
    explanation: 'Awaited<T> (TS 4.5): desempacota recursivamente tipos Promise. Awaited<Promise<string>> = string. Awaited<Promise<Promise<number>>> = number. Uso comum: type UserData = Awaited<ReturnType<typeof fetchUser>> — extrai o tipo retornado por uma função async. Mais seguro que ReturnType<typeof fetchUser> que retornaria Promise<User> (você queria User). Permite usar o tipo de dados de funções assíncronas sem reimplementar o tipo.',
    tags: ['Awaited', 'Promise', 'ReturnType', 'async', 'utility-type'],
  },
  {
    id: 'ts-062',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Const Type Parameters em TypeScript 5.0?',
    hints: ['<const T>', 'Inferência de literal types', 'Sem as const'],
    explanation: 'Const Type Parameters (TS 5.0): adicionar const em um type parameter força TypeScript a inferir tipos literais mais específicos. function identity<const T>(value: T): T — ao chamar identity(["a", "b", "c"]), infere readonly ["a", "b", "c"] em vez de string[]. Sem const: identity(["a", "b"]) infere string[]. Com const: readonly ["a", "b"]. Substitui a necessidade de fazer identity(["a", "b"] as const). Útil para APIs que precisam de literal types (route definitions, config objects).',
    tags: ['const-type-parameter', 'typescript5', 'literal-types', 'inferencia', 'readonly'],
  },
  {
    id: 'ts-063',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o tipo `NoInfer<T>` introduzido no TypeScript 5.4?',
    hints: ['Previne inferência de um site de inferência', 'Controle sobre como generics são inferidos'],
    explanation: 'NoInfer<T> (TS 5.4): marca um tipo para NÃO ser usado como site de inferência. function createStore<T>(initial: T, fallback: NoInfer<T>): Store<T> — sem NoInfer, TypeScript tentaria inferir T de ambos initial E fallback, potencialmente causando conflito. Com NoInfer, apenas initial é usado para inferir T; fallback deve ser compatível com o T já inferido. Resolve o problema de "inferência ambígua" em generics com múltiplos parâmetros de entrada.',
    tags: ['NoInfer', 'typescript54', 'inferencia', 'generics', 'avancado'],
  },
  {
    id: 'ts-064',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar overloads de função em TypeScript? Quando são necessários?',
    hints: ['Múltiplas assinaturas', 'Implementação compatível', 'Quando retorno depende do input'],
    explanation: `Overloads: múltiplas assinaturas de tipo para uma função.
\`\`\`typescript
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
  if (typeof input === "string") return input.toUpperCase();
  return input * 2;
}
// TypeScript sabe exatamente o tipo de retorno baseado no input:
const s = process("hello"); // string
const n = process(42);      // number
\`\`\`
Quando necessário: quando o tipo de retorno muda baseado no input, overloads expressam isso melhor que union types. Regra: a implementação é mais ampla que todas as sobrecargas — nunca é vista pelos consumidores.`,
    tags: ['overloads', 'funcoes', 'retorno-condicional', 'typescript', 'assinaturas'],
  },
  {
    id: 'ts-065',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `Extract<T, U>` e `Exclude<T, U>`? Dê exemplos de uso.',
    hints: ['Filtrar union types', 'Extract: mantém', 'Exclude: remove'],
    explanation: 'Exclude<T, U>: remove da union T os tipos que são assignable para U. Exclude<string | number | boolean, string> = number | boolean. Extract<T, U>: mantém apenas os tipos de T que são assignable para U. Extract<string | number | boolean, string | number> = string | number. Uso prático: type NonNullable<T> = Exclude<T, null | undefined>. Extrair apenas as keys de um objeto que são strings: Extract<keyof T, string>. Filtrar eventos específicos de uma union de eventos.',
    tags: ['Extract', 'Exclude', 'union', 'filtro', 'utility-types'],
  },
  {
    id: 'ts-066',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como criar um tipo que torna todas as propriedades de um objeto mutualmente exclusivas?',
    hints: ['XOR type', 'Exactly one of', 'Tipo de discriminação'],
    explanation: `XOR type — exatamente uma das propriedades deve ser fornecida:
\`\`\`typescript
type XOR<T, U> = (T & { [k in Exclude<keyof U, keyof T>]?: never }) |
                 (U & { [k in Exclude<keyof T, keyof U>]?: never });

type CreditCard = { cardNumber: string; cvv: string };
type BankTransfer = { iban: string; bic: string };
type Payment = XOR<CreditCard, BankTransfer>;

// OK: apenas credit card
const p1: Payment = { cardNumber: "123", cvv: "456" };
// OK: apenas bank transfer
const p2: Payment = { iban: "DE123", bic: "DEUT" };
// Erro: não pode misturar
const p3: Payment = { cardNumber: "123", iban: "DE123" }; // ✗
\`\`\``,
    tags: ['xor', 'mutually-exclusive', 'union', 'avancado', 'discriminacao'],
  },
  {
    id: 'ts-067',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tipar uma função que pode ser chamada de múltiplas formas (overloads vs union)?',
    hints: ['Overloads para retorno diferente', 'Union para retorno igual', 'Assinatura de implementação'],
    explanation: 'Use overloads quando o RETORNO muda baseado nos inputs: uma função que recebe string e retorna string, ou number e retorna number. Use union types quando o retorno é o mesmo independente do input: function format(value: string | number | Date): string. Diferença crucial: com overloads, o TypeScript sabe que process("text") retorna string (não string | number). Com union, process("text") retornaria string | number — menos específico. Overloads têm custo de legibilidade — use apenas quando necessário para type safety.',
    tags: ['overloads', 'union', 'tipagem', 'retorno', 'comparacao'],
  },
  {
    id: 'ts-068',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Awaited`, `Promise<T>`, e `PromiseLike<T>`? Qual a diferença?',
    hints: ['Awaited desempacota', 'PromiseLike mais amplo', 'then method'],
    explanation: 'Promise<T>: objeto nativo JavaScript com resolve/reject/catch/then/finally. PromiseLike<T>: qualquer objeto com then(). Mais amplo — aceita objetos thenable de qualquer origem (incluindo jQuery Deferred, etc.). TypeScript usa PromiseLike para ser compatível com mais objetos. Awaited<T>: utilitário que extrai o tipo T de Promise<T> ou PromiseLike<T>. Awaited<Promise<string>> = string. Quando aceitar: use PromiseLike para máxima compatibilidade (aceita tudo que tem .then). Use Promise quando precisa de API completa.',
    tags: ['Awaited', 'Promise', 'PromiseLike', 'thenable', 'compatibilidade'],
  },
  {
    id: 'ts-069',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar TypeScript com APIs de fetch e garantir type safety nas respostas?',
    hints: ['Zod para validação runtime', 'Type assertion manual', 'Generic fetch wrapper'],
    explanation: `Type-safe fetch com Zod:
\`\`\`typescript
async function typedFetch<T>(url: string, schema: z.ZodSchema<T>): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return schema.parse(data); // Valida E converte para o tipo correto
}

const UserSchema = z.object({ id: z.number(), name: z.string() });
const user = await typedFetch("/api/user/1", UserSchema);
// user é User — garantido em runtime E em compilação
\`\`\`
Alternativa mais simples mas sem validação runtime: fetch().then(r => r.json() as Promise<User>). Problema: confia cegamente na API.`,
    tags: ['fetch', 'type-safe', 'zod', 'schema', 'runtime-validation'],
  },
  {
    id: 'ts-070',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Type Variance em TypeScript? Por que `Array<Dog>` não é `Array<Animal>` mesmo que `Dog extends Animal`?',
    hints: ['Covariant read, contravariant write', 'readonly array é covariant', 'Liskov'],
    explanation: 'Variância define como tipos compostos se relacionam quando seus type parameters são subtipos. Arrays mutáveis são invariantes: Array<Dog> não é Array<Animal> porque você poderia fazer animalArray.push(new Cat()) quebrando type safety. ReadonlyArray<Dog> É atribuível a ReadonlyArray<Animal> (covariante) pois só leitura é segura. Funções: covariante no retorno (Dog function pode ser usada onde Animal function é esperada), contravariante nos parâmetros. TypeScript faz algumas concessões práticas (bivariance em methods para compatibilidade).',
    tags: ['variancia', 'covariance', 'contravariance', 'array', 'readonly'],
  },
  {
    id: 'ts-071',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `unknown` vs `never` vs `void` em TypeScript? Explique os três.',
    hints: ['unknown: qualquer coisa', 'never: impossível', 'void: sem retorno'],
    explanation: 'unknown: aceita qualquer valor, mas requer type narrowing antes de usar. Use para dados externos. never: valor que NUNCA existe. Retorno de funções que sempre lançam ou loop infinito. Em exhaustive checks — quando todos os casos foram tratados, o tipo restante é never. void: função que não retorna um valor útil (pode retornar undefined). Diferente de undefined (o tipo do valor undefined). Use void para callbacks que podem ou não retornar. Hierarquia: never é subtipo de tudo (atribuível a qualquer tipo). unknown é supertipo de tudo.',
    tags: ['unknown', 'never', 'void', 'tipos', 'comparacao'],
  },
  {
    id: 'ts-072',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `Readonly<T>` profundo? Como implementar `DeepReadonly<T>`?',
    hints: ['Recursão em Mapped Types', 'Condicional para objetos', 'Arrays também'],
    explanation: `\`\`\`typescript
type DeepReadonly<T> =
  T extends (infer U)[] ? ReadonlyArray<DeepReadonly<U>> :
  T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } :
  T;

type Config = { db: { host: string; options: { port: number }[] }; debug: boolean };
type ReadonlyConfig = DeepReadonly<Config>;
// { readonly db: { readonly host: string; readonly options: ReadonlyArray<{ readonly port: number }> }; readonly debug: boolean }
// Todos os níveis são readonly, incluindo arrays
\`\`\``,
    tags: ['DeepReadonly', 'recursao', 'mapped-types', 'readonly', 'avancado'],
  },
  {
    id: 'ts-073',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar `as const` com objetos para criar tipos mais específicos?',
    hints: ['Literal types', 'Readonly', 'typeof + keyof'],
    explanation: `as const em objetos:
\`\`\`typescript
const COLORS = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
} as const;
// Sem as const: { red: string; green: string; blue: string }
// Com as const: { readonly red: "#FF0000"; readonly green: "#00FF00"; readonly blue: "#0000FF" }

type Color = typeof COLORS[keyof typeof COLORS];
// "#FF0000" | "#00FF00" | "#0000FF" — union de valores literais!

type ColorName = keyof typeof COLORS;
// "red" | "green" | "blue"
\`\`\`
Fundamental para criar enums type-safe sem usar enum keyword.`,
    tags: ['as-const', 'literal-types', 'typeof', 'keyof', 'union'],
  },
  {
    id: 'ts-074',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Function Overloads em TypeScript? Quando o retorno muda baseado nos parâmetros?',
    hints: ['Múltiplas assinaturas', 'Implementação mais ampla', 'Retorno condicional'],
    explanation: `Function overloads para retorno condicional:
\`\`\`typescript
// Overloads (assinaturas):
function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: "table"): HTMLTableElement;
function createElement(tag: string): HTMLElement;
// Implementação:
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}
// TypeScript sabe que:
const anchor = createElement("a"); // HTMLAnchorElement — não HTMLElement genérico
const table = createElement("table"); // HTMLTableElement
const div = createElement("div"); // HTMLElement
\`\`\``,
    tags: ['overloads', 'retorno-especifico', 'HTMLElement', 'createElement', 'typescript'],
  },
  {
    id: 'ts-075',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar `Parameters<T>` e `ConstructorParameters<T>` utility types?',
    hints: ['Extrai parâmetros de função', 'Tuple de tipos', 'Reutilizar assinaturas'],
    explanation: 'Parameters<F>: extrai os tipos dos parâmetros de uma função como tuple. Parameters<typeof Math.max> = number[]. Parameters<typeof fetch> = [input: RequestInfo | URL, init?: RequestInit]. ConstructorParameters<C>: extrai parâmetros do constructor de uma classe. Uso prático: criar wrapper de função com mesmos parâmetros: function wrapper(...args: Parameters<typeof original>) { return original(...args); }. Combinar com ReturnType: type API = { call: (...args: Parameters<typeof fetch>) => ReturnType<typeof fetch> }.',
    tags: ['Parameters', 'ConstructorParameters', 'tuple', 'wrapper', 'utility-types'],
  },
  {
    id: 'ts-076',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `ThisType<T>` e como usar?',
    hints: ['Contexto de this em objetos', 'Mixin pattern', 'defineProperty-like'],
    explanation: 'ThisType<T>: utilidade para tipar o this de métodos em um contexto de objeto. Útil para mixins e object builders. const methods: { greet(): void } & ThisType<{ name: string }> = { greet() { console.log("Hello, " + this.name); } }. Agora greet() sabe que this tem name: string. Requer noImplicitThis: true no tsconfig. Usado internamente pelo TypeScript para tipar objects com this nos métodos (como Vue 2 options API). Para code moderno, geralmente não é necessário — prefira classes ou hooks.',
    tags: ['ThisType', 'this', 'contexto', 'mixin', 'objeto'],
  },
  {
    id: 'ts-077',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como criar um type-safe event system com TypeScript?',
    hints: ['Map de eventos para handlers', 'Generic constraint', 'Inference do tipo'],
    explanation: `\`\`\`typescript
type EventMap = {
  "user:login": { userId: string; email: string };
  "order:placed": { orderId: string; total: number };
  "error": Error;
};

class TypedEventEmitter {
  private listeners = new Map<string, Set<Function>>();

  on<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(listener);
    return () => this.off(event, listener);
  }
  emit<K extends keyof EventMap>(event: K, data: EventMap[K]) {
    this.listeners.get(event)?.forEach(fn => fn(data));
  }
  off<K extends keyof EventMap>(event: K, listener: Function) {
    this.listeners.get(event)?.delete(listener);
  }
}
// emitter.emit("user:login", { userId: "1", email: "a@b.com" }) — type-safe!
// emitter.emit("user:login", { userId: "1" }) — TypeScript error: email faltando
\`\`\``,
    tags: ['event-system', 'type-safe', 'generics', 'EventMap', 'emitter'],
  },
  {
    id: 'ts-078',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Ambient Declarations em TypeScript? Como declarar tipos para globals customizados?',
    hints: ['declare keyword', 'Sem implementação', 'globals.d.ts'],
    explanation: 'Ambient declarations: declaram tipos sem implementação — para código JavaScript existente ou globals. globals.d.ts (ou *.d.ts): declare global { interface Window { analytics: Analytics; myConfig: Config; } }. Adicionar propriedade ao Request do Express: declare module "express" { interface Request { user?: AuthUser; } }. declare const __DEV__: boolean — para variáveis injetadas pelo bundler (webpack DefinePlugin). declare function fetch(url: string): Promise<Response> — para ambientes sem @types/node. Sem o d.ts, TypeScript não reconheceria essas variáveis.',
    tags: ['ambient', 'declare', 'globals', 'module-augmentation', 'd.ts'],
  },
  {
    id: 'ts-079',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como configurar `strict: true` progressivamente em um projeto existente?',
    hints: ['Um por um', 'ts-migrate', 'Ignorar erros temporariamente'],
    explanation: 'Ativação gradual em vez de strict: true de uma vez: (1) strictNullChecks primeiro — maior impacto, mais bugs encontrados; (2) noImplicitAny — força tipagem explícita; (3) strictFunctionTypes; (4) strictPropertyInitialization; (5) useUnknownInCatchVariables. Para ignorar erros temporariamente: @ts-expect-error (melhor que @ts-ignore — falha se o erro não existir mais). ts-migrate: ferramenta para migração automática de JS para TS adicionando tipos any onde necessário. Objetivo: ir removendo os anys progressivamente.',
    tags: ['strict', 'migracao', 'progressivo', 'ts-migrate', 'tsconfig'],
  },
  {
    id: 'ts-080',
    domain: 'typescript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Template Literal Types com Uppercase, Lowercase, Capitalize?',
    hints: ['Intrinsic string manipulation', 'Transformar nomes de eventos', 'API gerada de tipos'],
    explanation: `Template literal types com transformações de string:
\`\`\`typescript
type EventNames = "click" | "focus" | "blur";
// Gerar "onClick" | "onFocus" | "onBlur":
type HandlerNames = \`on\${Capitalize<EventNames>}\`; // "onClick" | "onFocus" | "onBlur"

// Para object com handlers:
type Handlers = { [K in EventNames as \`on\${Capitalize<K>}\`]: (e: Event) => void };
// { onClick: (e: Event) => void; onFocus: (e: Event) => void; onBlur: (e: Event) => void }

// Outros intrinsics:
type Upper = Uppercase<"hello">; // "HELLO"
type Lower = Lowercase<"HELLO">; // "hello"
type Uncap = Uncapitalize<"Hello">; // "hello"
\`\`\``,
    tags: ['template-literal', 'Capitalize', 'Uppercase', 'intrinsic', 'string-types'],
  },
]
