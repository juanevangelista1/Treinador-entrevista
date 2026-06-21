import type { Question } from '../session/types'

export const javascriptQuestions: Question[] = [
  {
    id: 'js-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a diferença entre `var`, `let` e `const` em JavaScript?',
    options: [
      { id: 'a', text: '`var` tem escopo de bloco; `let` e `const` têm escopo de função', isCorrect: false },
      { id: 'b', text: '`var` tem escopo de função e é hoisted; `let` e `const` têm escopo de bloco', isCorrect: true },
      { id: 'c', text: 'Não há diferença, são intercambiáveis', isCorrect: false },
      { id: 'd', text: '`const` pode ser reatribuído, `let` não pode', isCorrect: false },
    ],
    hints: ['Pense em onde cada variável é acessível', 'Hoisting move declarações para o topo do escopo'],
    explanation: '`var` é function-scoped e sofre hoisting com valor `undefined`. `let` e `const` são block-scoped com Temporal Dead Zone (TDZ). `const` impede reatribuição, mas não torna o valor imutável.',
    tags: ['escopo', 'hoisting', 'variaveis'],
  },
  {
    id: 'js-002',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique o conceito de closure em JavaScript e dê um exemplo prático de uso.',
    hints: ['Uma closure é criada quando uma função interna acessa variáveis de uma função externa', 'Pense em módulos ou funções de fábrica'],
    explanation: 'Closure é a capacidade de uma função lembrar e acessar variáveis do seu escopo léxico, mesmo após a função externa ter retornado. É fundamental para encapsulamento, módulos e callbacks.',
    tags: ['closure', 'escopo', 'funcoes'],
  },
  {
    id: 'js-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que o código abaixo imprime?\n\n```js\nconsole.log(typeof null);\n```',
    options: [
      { id: 'a', text: '"null"', isCorrect: false },
      { id: 'b', text: '"undefined"', isCorrect: false },
      { id: 'c', text: '"object"', isCorrect: true },
      { id: 'd', text: '"number"', isCorrect: false },
    ],
    hints: ['Este é um bug histórico do JavaScript que nunca foi corrigido por questões de compatibilidade'],
    explanation: '`typeof null === "object"` é um bug do JavaScript desde 1995. A razão histórica é que os valores eram armazenados com uma tag de tipo, e o tipo "objeto" tinha tag 0, assim como o ponteiro nulo.',
    tags: ['typeof', 'null', 'quirks'],
  },
  {
    id: 'js-004',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o Event Loop do JavaScript, a diferença entre a Call Stack, a Task Queue (Macrotasks) e a Microtask Queue. Em que ordem são executados?',
    hints: ['O JavaScript é single-threaded mas não-bloqueante', 'Promises usam a Microtask Queue, setTimeout usa a Macrotask Queue'],
    explanation: 'O Event Loop verifica continuamente a Call Stack. Quando vazia: 1) drena completamente a Microtask Queue (Promises, queueMicrotask), 2) executa uma Macrotask (setTimeout, setInterval, I/O), 3) repete. Isso garante que callbacks de Promise nunca são interrompidos por macrotasks.',
    tags: ['event-loop', 'async', 'promises', 'microtasks'],
  },
  {
    id: 'js-005',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Qual a diferença entre `==` e `===` em JavaScript? Por que o uso de `==` é geralmente desaconselhado?',
    hints: ['Um deles realiza coerção de tipo', 'Pense em casos como `0 == false` ou `"" == false`'],
    explanation: '`===` (igualdade estrita) compara valor E tipo sem coerção. `==` (igualdade abstrata) realiza coerção de tipo antes de comparar, seguindo regras complexas da especificação ECMAScript, levando a comportamentos contraintuitivos como `[] == false` ser `true`.',
    tags: ['operadores', 'coercao', 'comparacao'],
  },
  {
    id: 'js-006',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Descreva as diferenças entre Prototype Chain e herança de classes (ES6+). Quando você preferiria composição em vez de herança e por quê?',
    hints: ['Classes ES6 são syntactic sugar sobre protótipos', 'O problema do "gorilla-banana"'],
    explanation: 'Protótipos são o mecanismo real de herança no JavaScript. Classes são açúcar sintático. Composição (ex: mixins, HOC) é preferida quando: comportamentos precisam ser reutilizados em hierarquias diferentes, quando a hierarquia pode mudar, e para evitar acoplamento rígido do problema "fragile base class".',
    tags: ['prototype', 'heranca', 'composicao', 'oop'],
  },
  {
    id: 'js-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Qual é a saída do seguinte código?\n\n```js\nconst obj = { a: 1 };\nconst copy = Object.assign({}, obj);\ncopy.a = 2;\nconsole.log(obj.a);\n```',
    options: [
      { id: 'a', text: '1', isCorrect: true },
      { id: 'b', text: '2', isCorrect: false },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Lança um TypeError', isCorrect: false },
    ],
    hints: ['Object.assign faz uma cópia rasa (shallow copy)'],
    explanation: '`Object.assign` realiza shallow copy — propriedades primitivas são copiadas por valor. Portanto, alterar `copy.a` não afeta `obj.a`. Se a propriedade fosse um objeto aninhado, compartilhariam a mesma referência.',
    tags: ['objetos', 'shallow-copy', 'referencias'],
  },
  {
    id: 'js-008',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são WeakMap e WeakSet? Qual é o caso de uso principal deles em relação ao gerenciamento de memória?',
    hints: ['Pense em como o garbage collector lida com referências "fracas"'],
    explanation: 'WeakMap/WeakSet mantêm referências "fracas" a objetos — não impedem o garbage collection. Caso de uso: associar metadados/dados privados a objetos DOM ou instâncias sem causar memory leaks. As keys só podem ser objetos, e não são iteráveis.',
    tags: ['weakmap', 'weakset', 'memoria', 'gc'],
  },
  {
    id: 'js-009',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique o que são Promises e como elas melhoram o código em comparação com callbacks aninhados.',
    hints: ['Pense em "callback hell"', 'Promises têm estados: pending, fulfilled, rejected'],
    explanation: 'Promises representam o resultado eventual de uma operação assíncrona com estados: pending, fulfilled, rejected. Permitem encadeamento com `.then()/.catch()` e leitura linear do fluxo, eliminando o callback hell. Async/await é açúcar sintático sobre Promises para escrita síncrona de código assíncrono.',
    tags: ['promises', 'async', 'callbacks'],
  },
  {
    id: 'js-010',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 5,
    targetLevel: ['staff'],
    text: 'Como você implementaria um sistema de Observable/reatividade do zero em JavaScript puro, similar ao que o Vue 3 usa internamente com Proxy?',
    hints: ['Proxy intercepta operações em objetos (get, set, delete)', 'Rastreie quais "effects" dependem de quais propriedades'],
    explanation: 'Implementação: (1) trackear o "effect" ativo globalmente, (2) no Proxy get: registrar dependência (propriedade → effect) no dep map, (3) no Proxy set: notificar todos os effects dependentes daquela propriedade. Este padrão é a base do sistema reativo do Vue 3.',
    tags: ['proxy', 'reatividade', 'observer', 'meta-programacao'],
  },
  // ── ES6+ FEATURES ────────────────────────────────────────────────────────────
  {
    id: 'js-011',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que são arrow functions? Quais as diferenças em relação a funções tradicionais?',
    hints: ['this léxico', 'Sem arguments objeto', 'Sintaxe mais curta'],
    explanation: 'Arrow functions: (1) Sintaxe concisa: `(x) => x * 2`; (2) `this` léxico — herdam o `this` do escopo em que foram definidas, não têm seu próprio `this`; (3) Sem objeto `arguments` — use rest params (`...args`); (4) Não podem ser usadas como construtores (sem `new`); (5) Sem `prototype`. Principal vantagem: resolver o problema de `this` em callbacks sem usar `.bind(this)`.',
    tags: ['arrow-function', 'this', 'es6', 'sintaxe'],
  },
  {
    id: 'js-012',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é destructuring em JavaScript? Mostre exemplos com arrays e objetos.',
    hints: ['Extrair valores de arrays/objetos em variáveis', 'Valores padrão', 'Renomear variáveis'],
    explanation: 'Destructuring extrai valores de arrays/objetos em variáveis: Objeto: `const { name, age = 18 } = user` — valor padrão se undefined. Renomear: `const { name: userName } = user`. Array: `const [first, , third] = arr` — pula posições. Nested: `const { address: { city } } = user`. Parâmetro de função: `function greet({ name, age }) {}`. Rest: `const { a, ...rest } = obj`.',
    tags: ['destructuring', 'es6', 'arrays', 'objetos'],
  },
  {
    id: 'js-013',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que é spread operator (`...`) em JavaScript? Como difere do rest operator?',
    hints: ['Spread: expande', 'Rest: coleta', 'Mesma sintaxe, contextos diferentes'],
    explanation: 'Spread (`...`) expande um iterável em elementos individuais. Exemplos: `[...arr1, ...arr2]` — merge de arrays; `{...obj1, ...obj2}` — merge de objetos (shallow); `Math.max(...numbers)` — passar array como args. Rest (`...`) coleta múltiplos argumentos em um array: `function sum(...nums) { return nums.reduce((a,b) => a+b, 0) }`. Regra: spread espalha, rest coleta.',
    tags: ['spread', 'rest', 'es6', 'arrays', 'objetos'],
  },
  {
    id: 'js-014',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são template literals? Quais funcionalidades eles oferecem além da interpolação simples?',
    hints: ['Multi-linha', 'Tagged templates', 'Expressões arbitrárias'],
    explanation: 'Template literals (backticks) oferecem: (1) Interpolação: `` `Olá ${nome}!` ``; (2) Multi-linha sem `\\n`; (3) Expressões JS dentro de `${}`; (4) Tagged templates: `tag\`string ${expr}\`` — função `tag` recebe as partes e pode processá-las. Usado em styled-components, GraphQL queries (gql``), sql``. Permite criar DSLs (Domain-Specific Languages) embutidas no JavaScript.',
    tags: ['template-literals', 'interpolacao', 'tagged-templates', 'es6'],
  },
  {
    id: 'js-015',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Map e Set em JavaScript? Quando preferir Map sobre um objeto literal?',
    hints: ['Map: key de qualquer tipo', 'Set: valores únicos', 'Ordem garantida em Map'],
    explanation: 'Map: coleção de pares chave-valor onde qualquer tipo pode ser chave (objetos, funções). Mantém ordem de inserção. API: `set`, `get`, `has`, `delete`, `size`. Prefira Map quando: chaves não são strings, precisa de tamanho rápido, itera frequentemente. Set: coleção de valores únicos. Útil para: deduplicação (`[...new Set(arr)]`), verificar membership O(1). Diferença do objeto: objetos têm prototype keys, Map não.',
    tags: ['map', 'set', 'colecoes', 'es6'],
  },
  {
    id: 'js-016',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são generators em JavaScript? Como eles se diferem de funções normais? Dê um caso de uso prático.',
    hints: ['function*', 'yield pausa', 'Iterável e iterator'],
    explanation: 'Generators são funções que podem ser pausadas e retomadas com `yield`. `function* gen() { yield 1; yield 2; }`. Retornam um iterator — chame `.next()` para avançar. Cada `next()` executa até o próximo `yield`. Casos de uso: (1) Sequências infinitas: `function* ids() { let i=0; while(true) yield i++; }`; (2) Lazy evaluation; (3) Redux-saga usa generators para modelar side effects; (4) Implementar custom iterators. Diferença: função normal roda até o fim; generator "pausa" em cada yield.',
    tags: ['generators', 'yield', 'iterators', 'es6', 'lazy'],
  },
  {
    id: 'js-017',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Symbols em JavaScript? Qual é o principal caso de uso?',
    hints: ['Valor único e imutável', 'Não é string', 'Well-known Symbols'],
    explanation: 'Symbol é um tipo primitivo que cria valores únicos e imutáveis: `const id = Symbol("id")` — mesmo nome, diferentes referências. Casos de uso: (1) Chaves únicas de propriedades em objetos sem colisão; (2) Well-known Symbols: `Symbol.iterator` para tornar objetos iteráveis, `Symbol.toPrimitive`, `Symbol.hasInstance`; (3) Propriedades "privadas" (não aparecem em for...in ou Object.keys); (4) Constantes de enum-like. Symbols não são convertidos implicitamente para strings.',
    tags: ['symbol', 'unique', 'well-known', 'es6'],
  },
  {
    id: 'js-018',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são módulos ES (ESM) e como diferem do CommonJS (CJS)?',
    hints: ['import/export vs require/module.exports', 'Estático vs dinâmico', 'Tree shaking'],
    explanation: 'ESM (ES Modules): `import`/`export` — análise estática em tempo de compilação, tree shaking eficiente, `import()` dinâmico, modo strict por padrão. CommonJS: `require`/`module.exports` — análise dinâmica em runtime, sem tree shaking nativo, síncrono. Diferenças-chave: (1) ESM: top-level await; CJS: não; (2) ESM: importações são live bindings; CJS: cópias; (3) ESM: funciona em browsers nativamente; CJS: Node.js. Hoje, ESM é o padrão para código frontend.',
    tags: ['esm', 'commonjs', 'modules', 'import', 'tree-shaking'],
  },
  {
    id: 'js-019',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é hoisting em JavaScript? O que é a Temporal Dead Zone (TDZ)?',
    hints: ['Declarações são movidas para o topo', 'let/const são hoisted mas não inicializadas', 'ReferenceError antes da declaração'],
    explanation: 'Hoisting: o motor JavaScript processa declarações antes da execução, "movendo-as" para o topo do escopo. `var`: hoisted e inicializado com `undefined` — pode ser usado antes da linha de declaração (retorna undefined). `function`: hoisted completamente — pode ser chamada antes da declaração. `let`/`const`: hoisted mas NÃO inicializados — acessar antes da declaração lança `ReferenceError`. Isso é a Temporal Dead Zone (TDZ): a zona entre o início do bloco e a declaração da variável.',
    tags: ['hoisting', 'tdz', 'var', 'let', 'const'],
  },
  {
    id: 'js-020',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o que é `this` em JavaScript. Por que seu valor pode ser surpreendente?',
    hints: ['Depende de como a função é chamada', 'Arrow function vs função regular', 'bind, call, apply'],
    explanation: '`this` em JavaScript depende do CONTEXTO DE CHAMADA (não de onde foi definido para funções regulares). Regras: (1) Método de objeto: `this` é o objeto; (2) Função standalone: `this` é `undefined` (strict) ou `window`; (3) Arrow function: `this` é o `this` do escopo léxico onde foi definida; (4) Constructor com `new`: `this` é o novo objeto; (5) `call/apply/bind`: define `this` explicitamente. Surpresa clássica: callback de método perde o `this`. Solução: arrow function ou `.bind(this)`.',
    tags: ['this', 'contexto', 'bind', 'call', 'apply', 'arrow-function'],
  },
  {
    id: 'js-021',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `null` e `undefined` em JavaScript?',
    hints: ['undefined: ausência não intencional', 'null: ausência intencional'],
    explanation: '`undefined`: valor padrão de variáveis não inicializadas, parâmetros não passados, propriedades inexistentes, funções sem `return`. Indica ausência não intencional. `null`: ausência intencional de valor — atribuído explicitamente para dizer "sem valor". Diferenças práticas: `typeof undefined === "undefined"`, `typeof null === "object"` (bug histórico). `null == undefined` é true (coerção), `null === undefined` é false. Use `null` quando você quer explicitamente "sem valor".',
    tags: ['null', 'undefined', 'diferenca', 'fundamentos'],
  },
  {
    id: 'js-022',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a saída do seguinte código?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```',
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'Lança um erro', isCorrect: false },
      { id: 'd', text: 'NaN', isCorrect: false },
    ],
    hints: ['Floating point não pode representar todos os decimais com precisão'],
    explanation: '`0.1 + 0.2 === 0.30000000000000004` — false. Números de ponto flutuante (IEEE 754) não podem representar alguns decimais com precisão exata. Para comparar floats: use `Math.abs(a - b) < Number.EPSILON` ou trabalhe com inteiros (multiplicar por 100 para centavos). Bibliotecas como `decimal.js` resolvem isso.',
    tags: ['floating-point', 'ieee754', 'numeros', 'precisao'],
  },
  {
    id: 'js-023',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é coerção implícita de tipos em JavaScript? Dê exemplos de comportamentos surpreendentes.',
    hints: ['+ com string concatena', '== converte tipos', 'Falsy values'],
    explanation: 'Coerção implícita: JavaScript converte tipos automaticamente. Exemplos: `"5" + 3 = "53"` (+ com string concatena); `"5" - 3 = 2` (- converte string para número); `true + 1 = 2`; `false + 1 = 1`; `null + 1 = 1`; `undefined + 1 = NaN`. Falsy values: `0`, `""`, `null`, `undefined`, `NaN`, `false`. `[]` e `{}` são truthy. `[] == false` é true. Use `===` para evitar surpresas de coerção.',
    tags: ['coercao', 'tipos', 'falsy', 'truthy', 'quirks'],
  },
  {
    id: 'js-024',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Iterators e o protocolo de iteração do JavaScript? Como tornar um objeto customizado iterável?',
    hints: ['Symbol.iterator', '[Symbol.iterator]() retorna um iterator', 'next() retorna { value, done }'],
    explanation: 'Protocolo de iteração: um objeto é iterável se tem método `[Symbol.iterator]()` que retorna um iterator. Um iterator tem método `next()` que retorna `{ value, done }`. Implementação customizada: `const range = { from: 1, to: 5, [Symbol.iterator]() { let current = this.from; const last = this.to; return { next() { return current <= last ? { value: current++, done: false } : { value: undefined, done: true }; } }; } }`. Agora `[...range]` e `for...of range` funcionam.',
    tags: ['iterators', 'Symbol.iterator', 'protocolo', 'for-of', 'customizavel'],
  },
  {
    id: 'js-025',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Proxy em JavaScript? Quais operações ele pode interceptar?',
    hints: ['Wrapper em torno de um objeto', 'Handler com traps', 'Reflect'],
    explanation: 'Proxy envolve um objeto e intercepta operações fundamentais. Traps (intercepções): `get` (ler prop), `set` (escrever prop), `has` (operador `in`), `deleteProperty`, `apply` (chamar função), `construct` (new), `getOwnPropertyDescriptor`, e outros. Exemplo: `const handler = { get(target, key) { console.log(`Acessando ${key}`); return target[key]; } }; const proxy = new Proxy(obj, handler)`. Usado em: Vue 3 reatividade, validation, logging automático, virtual properties.',
    tags: ['proxy', 'traps', 'reflect', 'meta-programacao', 'interceptacao'],
  },
  {
    id: 'js-026',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é optional chaining (`?.`) e nullish coalescing (`??`)? Como eles melhoram o código?',
    hints: ['Acesso seguro a propriedades aninhadas', 'Fallback apenas para null/undefined'],
    explanation: 'Optional chaining `?.`: acessa propriedade/método apenas se o valor não é `null`/`undefined`, retorna `undefined` caso contrário. `user?.address?.city` — sem TypeError se `user` ou `address` for null. Nullish coalescing `??`: retorna lado direito apenas se lado esquerdo é `null` ou `undefined` (diferente de `||` que inclui `0`, `""`, `false`). `count ?? 0` — usa 0 apenas se count for null/undefined, não se for 0. Combinados: `user?.name ?? "Anônimo"`.',
    tags: ['optional-chaining', 'nullish-coalescing', 'null-safety', 'es2020'],
  },
  {
    id: 'js-027',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os métodos principais de Array em JavaScript? Explique `map`, `filter`, `reduce` e `find`.',
    hints: ['map: transforma', 'filter: seleciona', 'reduce: acumula', 'find: localiza'],
    explanation: '`map(fn)`: cria novo array transformando cada elemento. `[1,2,3].map(x => x*2)` → `[2,4,6]`. `filter(fn)`: cria novo array com elementos onde fn retorna true. `arr.filter(x => x > 2)`. `reduce(fn, initial)`: reduz array a um único valor. `arr.reduce((acc, x) => acc + x, 0)` — soma. `find(fn)`: retorna o primeiro elemento onde fn retorna true (ou `undefined`). `findIndex` retorna o índice. Todos retornam novo valor, não mutam o original.',
    tags: ['map', 'filter', 'reduce', 'find', 'array-methods'],
  },
  {
    id: 'js-028',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `async/await`? Como tratar erros em código async/await?',
    hints: ['Açúcar sobre Promises', 'try/catch para erros', 'Não esqueça o await'],
    explanation: '`async/await` é açúcar sintático sobre Promises. `async function` sempre retorna uma Promise. `await` pausa a execução até a Promise resolver. Tratamento de erros: `try { const data = await fetch(url) } catch (err) { console.error(err) }`. Para múltiplas operações paralelas: `const [a, b] = await Promise.all([fetchA(), fetchB()])`. Erro comum: esquecer `await` — `const data = fetch(url)` retorna a Promise, não os dados.',
    tags: ['async-await', 'promises', 'try-catch', 'assincrono'],
  },
  {
    id: 'js-029',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique `Promise.all`, `Promise.allSettled`, `Promise.race` e `Promise.any`. Quando usar cada um?',
    hints: ['all: falha rápida', 'allSettled: espera todos', 'race: primeiro a resolver', 'any: primeiro com sucesso'],
    explanation: '`Promise.all(arr)`: resolve quando TODAS resolvem; rejeita imediatamente se qualquer uma rejeita. Use para operações paralelas onde todas são necessárias. `Promise.allSettled(arr)`: resolve sempre (com resultados de todas, sucesso ou falha). Use para quando quer todos os resultados independente de erros. `Promise.race(arr)`: resolve/rejeita com o PRIMEIRO resultado (sucesso ou falha). Use para timeout. `Promise.any(arr)`: resolve com o PRIMEIRO sucesso; rejeita apenas se todas rejeitarem. Use para fallback entre fontes.',
    tags: ['promise-all', 'promise-allSettled', 'promise-race', 'promise-any', 'paralelo'],
  },
  {
    id: 'js-030',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é currying em JavaScript? Implemente uma função `curry` genérica.',
    hints: ['Função que retorna função', 'Parcialmente aplicada', 'Composição funcional'],
    explanation: 'Currying transforma `f(a, b, c)` em `f(a)(b)(c)` — aplicação parcial de argumentos. Implementação genérica: `function curry(fn) { return function curried(...args) { if (args.length >= fn.length) return fn(...args); return function(...moreArgs) { return curried(...args, ...moreArgs); }; }; }`. Uso: `const add = curry((a, b) => a + b); const add5 = add(5); add5(3) // 8`. Útil em composição funcional e criação de funções especializadas.',
    tags: ['currying', 'funcional', 'partial-application', 'composicao'],
  },
  {
    id: 'js-031',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são funções de ordem superior (Higher-Order Functions)? Dê exemplos do JS nativo.',
    hints: ['Recebem ou retornam funções', 'map, filter, reduce são HOF', 'Composição'],
    explanation: 'Higher-Order Functions (HOF) são funções que: recebem outra função como argumento E/OU retornam uma função. Exemplos nativos: `Array.map`, `filter`, `reduce`, `sort`, `forEach`, `addEventListener`. Exemplos customizados: `function repeat(fn, n) { for(let i=0; i<n; i++) fn(i); }`. HOFs são fundamentais na programação funcional — permitem composição, abstração e reutilização de comportamentos.',
    tags: ['higher-order', 'funcional', 'map', 'filter', 'composicao'],
  },
  {
    id: 'js-032',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é memoização em JavaScript? Implemente uma função `memoize` genérica.',
    hints: ['Cache de resultados anteriores', 'Map como cache', 'Só funciona para funções puras'],
    explanation: 'Memoização cacheia resultados de funções puras para inputs iguais. Implementação: `function memoize(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }; }`. Cuidado: `JSON.stringify` não funciona para funções/objetos circulares como chave. Para chaves complexas, use WeakMap ou hashing customizado. Funciona apenas com funções puras (mesmo input → mesmo output).',
    tags: ['memoizacao', 'cache', 'funcoes-puras', 'performance', 'otimizacao'],
  },
  {
    id: 'js-033',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é deep clone de objeto em JavaScript? Quais são as formas de fazer e suas limitações?',
    hints: ['JSON.parse(JSON.stringify())', 'structuredClone', 'Lodash cloneDeep'],
    explanation: 'Formas de deep clone: (1) `JSON.parse(JSON.stringify(obj))`: simples mas perde `undefined`, `Date` (vira string), `Function`, `RegExp`, referências circulares. (2) `structuredClone(obj)` (ES2022): nativo, suporta Date, Map, Set, ArrayBuffer, referências circulares. Não suporta funções. (3) Lodash `_.cloneDeep`: suporta mais tipos mas adiciona dependência. Use `structuredClone` como primeira escolha — é nativo e robusto.',
    tags: ['deep-clone', 'structuredClone', 'JSON', 'objetos', 'copia'],
  },
  {
    id: 'js-034',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são getters e setters em JavaScript? Como implementar propriedades computadas em objetos?',
    hints: ['get e set keywords', 'Sintaxe de propriedade', 'Validação no setter'],
    explanation: 'Getters/setters definem propriedades com lógica de acesso: `const obj = { _name: "", get name() { return this._name.toUpperCase(); }, set name(val) { if(typeof val !== "string") throw new Error("name must be string"); this._name = val; } }`. `obj.name = "joão"` → setter. `obj.name` → getter retorna "JOÃO". Use para: (1) Propriedades computadas; (2) Validação de entrada; (3) Lazy loading; (4) Encapsulamento de lógica. Em classes, mesma sintaxe.',
    tags: ['getters', 'setters', 'propriedades', 'encapsulamento', 'classes'],
  },
  {
    id: 'js-035',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o `Object.defineProperty`? Quando você precisaria usar em vez de atribuição direta?',
    hints: ['Configura enumerable, writable, configurable', 'Propriedades não enumeráveis', 'Getter/setter com descriptor'],
    explanation: '`Object.defineProperty(obj, "key", descriptor)` define propriedades com controle fino: `value`, `writable` (pode ser alterada?), `enumerable` (aparece em for...in e Object.keys?), `configurable` (pode ser deletada/reconfigurada?). Por padrão, atribuição direta tem todos true. Casos de uso: (1) Propriedades de lib que não devem aparecer na serialização (enumerable: false); (2) Propriedades somente leitura (writable: false); (3) Getters/setters via descriptor; (4) Freezar propriedades específicas. `Object.freeze` usa isso internamente.',
    tags: ['defineProperty', 'descriptor', 'enumerable', 'writable', 'meta-programacao'],
  },
  {
    id: 'js-036',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão Module em JavaScript (IIFE)? Por que ele era importante antes dos módulos ES?',
    hints: ['Immediately Invoked Function Expression', 'Encapsulamento de escopo', 'Módulos CJS e ESM substituíram'],
    explanation: 'IIFE (Immediately Invoked Function Expression): `(function() { /* private scope */ })()`. Criava escopo privado antes de `let`/`const` e módulos ES. Padrão Module: `const Counter = (function() { let count = 0; return { increment() { count++ }, get() { return count } }; })()`. `count` é privado — acessível apenas pelas funções retornadas. Importância histórica: evitava poluição do escopo global, permitia encapsulamento. Hoje: use módulos ES com `import`/`export`.',
    tags: ['iife', 'module-pattern', 'escopo', 'encapsulamento', 'historico'],
  },
  {
    id: 'js-037',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é debounce e throttle? Implemente ambos do zero em JavaScript.',
    hints: ['Debounce: espera parar', 'Throttle: limita frequência', 'setTimeout e timestamps'],
    explanation: `Debounce — executa após inatividade:
\`\`\`js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
\`\`\`
Throttle — executa no máximo 1x por período:
\`\`\`js
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
\`\`\``,
    tags: ['debounce', 'throttle', 'implementacao', 'performance', 'eventos'],
  },
  {
    id: 'js-038',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os métodos de string mais usados em JavaScript? Explique os principais.',
    hints: ['split, join, trim, replace, includes, startsWith', 'Imutáveis — retornam nova string'],
    explanation: 'Métodos essenciais: `includes(str)` — verifica se contém substring; `startsWith/endsWith` — prefixo/sufixo; `slice(start, end)` — extrai parte; `split(sep)` — divide em array; `trim/trimStart/trimEnd` — remove espaços; `replace(pattern, replacement)` — substitui (use RegExp global para todas as ocorrências); `toUpperCase/toLowerCase`; `padStart/padEnd` — padding; `repeat(n)` — repete; `at(-1)` — acesso por índice negativo. Todas são imutáveis — retornam nova string.',
    tags: ['string-methods', 'split', 'replace', 'trim', 'includes'],
  },
  {
    id: 'js-039',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como funciona a cadeia de protótipos (Prototype Chain)? O que acontece quando você acessa uma propriedade que não existe no objeto?',
    hints: ['[[Prototype]] interno', 'Object.getPrototypeOf', '__proto__', 'Fim da cadeia: null'],
    explanation: 'Cada objeto tem um link interno `[[Prototype]]` para outro objeto. Quando acessa `obj.prop`: (1) Verifica no próprio objeto; (2) Sobe para `obj[[Prototype]]`; (3) Continua subindo até encontrar ou chegar em `null`. `Object.create(proto)` cria objeto com `[[Prototype]]` específico. Classes ES6 usam prototype chain: instâncias linkam para `Class.prototype`. `Object.getPrototypeOf(obj)` retorna o protótipo. Propriedade não encontrada em toda a cadeia → `undefined`.',
    tags: ['prototype-chain', 'heranca', 'propriedades', 'objetos', 'lookup'],
  },
  {
    id: 'js-040',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `bind`, `call` e `apply`? Qual a diferença entre eles?',
    hints: ['Todos definem o this', 'call: args individuais', 'apply: array de args', 'bind: retorna nova função'],
    explanation: '`call(thisArg, arg1, arg2)`: chama a função imediatamente com `this` definido e args individuais. `apply(thisArg, [arg1, arg2])`: igual ao `call` mas args como array. `bind(thisArg, arg1, arg2)`: retorna uma nova função com `this` e args parcialmente aplicados — não chama imediatamente. Mnemônico: call=Comma (args separados por vírgula), apply=Array. Exemplo: `Math.max.apply(null, [1, 5, 3])` — equivale a `Math.max(...[1,5,3])`. Hoje, spread + arrow functions reduziram a necessidade de call/apply.',
    tags: ['bind', 'call', 'apply', 'this', 'funcoes'],
  },
  // ── ASYNC AVANÇADO ────────────────────────────────────────────────────────────
  {
    id: 'js-041',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Promise chaining? Quais são os erros comuns ao encadear Promises?',
    hints: ['Retornar a Promise', 'Não swallowing errors', 'Aninhamento desnecessário'],
    explanation: 'Promise chaining: cada `.then()` retorna uma nova Promise. Erros comuns: (1) Não retornar a Promise interna — `then(async () => { await fetch() })` sem return faz o encadeamento pular o resultado; (2) Criar "promise hell" aninhado (mesmo problema do callback hell); (3) Esquecer `.catch()` — erros não tratados; (4) Usar `async/await` dentro de `.then()` desnecessariamente. Regra: se você está using `async/await`, abandone o encadeamento manual e use `try/catch`.',
    tags: ['promise-chain', 'then', 'catch', 'erros', 'assincrono'],
  },
  {
    id: 'js-042',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um AbortController? Como usar para cancelar requests e outros processos async?',
    hints: ['AbortSignal', 'fetch com signal', 'abort() dispara AbortError'],
    explanation: 'AbortController permite cancelar operações assíncronas. Uso com fetch: `const controller = new AbortController(); fetch(url, { signal: controller.signal }); controller.abort()`. Cancela o request e rejeita a Promise com `AbortError`. Verificar: `signal.aborted`, ouvir evento: `signal.addEventListener("abort", callback)`. Uso com useEffect: `const c = new AbortController(); fetchData({ signal: c.signal }); return () => c.abort()`. Também funciona com `setTimeout` em Node.js e outras APIs que aceitam `signal`.',
    tags: ['AbortController', 'cancelamento', 'fetch', 'async', 'cleanup'],
  },
  {
    id: 'js-043',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Async Iterators e Async Generators? Qual o caso de uso principal?',
    hints: ['Symbol.asyncIterator', 'for await...of', 'Streaming de dados'],
    explanation: 'Async iterators implementam `Symbol.asyncIterator` — retornam Promises em vez de valores síncronos. `for await...of` consome async iterators. Async generators: `async function* gen() { yield await fetchPage(1); yield await fetchPage(2); }`. Caso de uso principal: streaming de dados — processar chunks à medida que chegam (ex: Response.body do fetch é um ReadableStream assíncrono). APIs de streaming de LLMs usam isso. Permite consumir dados grandes sem carregar tudo em memória.',
    tags: ['async-iterator', 'async-generator', 'streaming', 'for-await', 'es2018'],
  },
  {
    id: 'js-044',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como fazer requisições HTTP em JavaScript com `fetch`? Como tratar erros de HTTP?',
    hints: ['fetch não rejeita em erros HTTP (4xx, 5xx)', 'Verificar response.ok', 'response.json() retorna Promise'],
    explanation: 'Fetch básico: `const response = await fetch(url); const data = await response.json()`. Armadilha crucial: `fetch` só rejeita em erros de rede — erros HTTP (404, 500) retornam uma Response com `ok: false`. Tratamento correto: `if (!response.ok) throw new Error(response.statusText)`. POST com JSON: `fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })`. Para cancelamento, use AbortController.',
    tags: ['fetch', 'http', 'requisicoes', 'response-ok', 'erros'],
  },
  {
    id: 'js-045',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Observer em JavaScript? Como implementar um EventEmitter simples?',
    hints: ['Subscribe e emit', 'Map de eventos para listeners', 'Unsubscribe para evitar leaks'],
    explanation: `EventEmitter simples:
\`\`\`js
class EventEmitter {
  #listeners = new Map();
  on(event, fn) {
    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());
    this.#listeners.get(event).add(fn);
    return () => this.off(event, fn); // retorna unsubscribe
  }
  off(event, fn) { this.#listeners.get(event)?.delete(fn); }
  emit(event, ...args) { this.#listeners.get(event)?.forEach(fn => fn(...args)); }
  once(event, fn) {
    const wrapper = (...args) => { fn(...args); this.off(event, wrapper); };
    return this.on(event, wrapper);
  }
}
\`\`\``,
    tags: ['observer', 'event-emitter', 'pub-sub', 'pattern', 'implementacao'],
  },
  // ── SEGURANÇA E BOAS PRÁTICAS ────────────────────────────────────────────────
  {
    id: 'js-046',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é XSS (Cross-Site Scripting)? Como prevenir em JavaScript/React?',
    hints: ['Injeção de script malicioso', 'Escapar output', 'CSP', 'dangerouslySetInnerHTML'],
    explanation: 'XSS: injeção de scripts maliciosos no site. Tipos: Stored (salvo no banco), Reflected (via URL), DOM-based (manipulação do DOM). Prevenção: (1) Nunca inserir conteúdo do usuário sem escapar — React escapa automaticamente o JSX; (2) `dangerouslySetInnerHTML` apenas com conteúdo sanitizado (DOMPurify); (3) CSP (Content Security Policy) header; (4) Cookies httpOnly; (5) Evitar `eval()`, `innerHTML` com dados externos; (6) Validação e sanitização no backend. React por padrão é seguro para XSS no JSX.',
    tags: ['xss', 'seguranca', 'sanitizacao', 'csp', 'react'],
  },
  {
    id: 'js-047',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é CSRF (Cross-Site Request Forgery)? Como proteger APIs?',
    hints: ['Requisições forjadas de outro site', 'SameSite cookie', 'CSRF token', 'Origin header'],
    explanation: 'CSRF: site malicioso faz requests para sua API usando as credenciais (cookies) do usuário logado. Prevenção: (1) Cookies `SameSite=Strict` ou `Lax` — não enviados em requests cross-site; (2) CSRF token: token único por sessão no header (não cookie), verificado no servidor; (3) Verificar `Origin`/`Referer` header no servidor; (4) APIs JSON-only com `Content-Type: application/json` são naturalmente protegidas (CORS impede forms simples de definir esse header).',
    tags: ['csrf', 'seguranca', 'samesite', 'cors', 'token'],
  },
  {
    id: 'js-048',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é CORS? Por que o browser bloqueia algumas requisições?',
    hints: ['Same-Origin Policy', 'Headers de CORS', 'Preflight request'],
    explanation: 'CORS (Cross-Origin Resource Sharing): política do browser que restringe requests de uma origem para outra (diferente protocolo, domínio ou porta). Same-Origin Policy: protege dados do usuário. Para permitir cross-origin: o servidor adiciona headers: `Access-Control-Allow-Origin: *` ou domínio específico. Preflight: para requests "não simples" (DELETE, PUT, custom headers), o browser envia uma request OPTIONS primeiro pedindo permissão. CORS é aplicado pelo browser — não protege server-to-server requests.',
    tags: ['cors', 'same-origin', 'preflight', 'seguranca', 'browser'],
  },
  {
    id: 'js-049',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são as diferenças entre cookies, localStorage e sessionStorage?',
    hints: ['Expiração', 'Capacidade', 'Enviado ao servidor'],
    explanation: 'Cookie: enviado automaticamente ao servidor em cada request; configurável com `expires`, `httpOnly` (não acessível via JS), `secure`, `SameSite`; até ~4KB. localStorage: persiste indefinidamente até limpar manualmente; ~5-10MB; não enviado ao servidor. sessionStorage: persiste apenas na aba/session atual; limpo ao fechar aba; ~5-10MB. Para tokens de auth: use httpOnly cookies (protegido de XSS). Nunca armazene tokens em localStorage.',
    tags: ['cookies', 'localStorage', 'sessionStorage', 'storage', 'seguranca'],
  },
  {
    id: 'js-050',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é prototype pollution? Como prevenir?',
    hints: ['Injetar propriedades no Object.prototype', 'merge de objetos', '__proto__'],
    explanation: 'Prototype pollution: atacante injeta propriedades no `Object.prototype` via merge de objetos não seguro. Exemplo: `merge({}, JSON.parse(\'{"__proto__":{"admin":true}}\'))` → todos os objetos ganham `.admin = true`. Prevenção: (1) Use `Object.create(null)` para dicionários sem prototype; (2) Valide inputs externos antes de merge; (3) Use `Map` em vez de objetos para dados externos; (4) Bloqueie chaves `__proto__`, `constructor`, `prototype`; (5) `Object.freeze(Object.prototype)`. Libraries como lodash corrigiram merge para prevenir isso.',
    tags: ['prototype-pollution', 'seguranca', 'merge', 'object-prototype'],
  },
  // ── PATTERNS E PARADIGMAS ─────────────────────────────────────────────────────
  {
    id: 'js-051',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são funções puras? Por que são importantes na programação funcional?',
    hints: ['Mesmo input, mesmo output', 'Sem side effects', 'Testabilidade'],
    explanation: 'Função pura: (1) Mesmo input SEMPRE produz mesmo output; (2) Sem side effects (não modifica variáveis externas, não faz I/O, não muta argumentos). Importância: (1) Testabilidade: sem mocks, sem setup; (2) Cacheabilidade (memoização); (3) Paralelizável — sem condições de corrida; (4) Composição trivial; (5) Debugging: dado um output errado, verifique apenas os inputs. Exemplos puros: `Math.max`, `arr.map`. Impuros: `Date.now()`, `Math.random()`, `fetch`.',
    tags: ['funcoes-puras', 'side-effects', 'funcional', 'testabilidade'],
  },
  {
    id: 'js-052',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é imutabilidade em JavaScript? Como trabalhar com estruturas imutáveis?',
    hints: ['Object.freeze', 'Spread para novas cópias', 'structuredClone', 'Immer'],
    explanation: 'Imutabilidade: não modificar objetos/arrays existentes — criar novas versões. Técnicas: (1) Spread: `const newObj = { ...obj, key: newValue }`; (2) `Object.freeze(obj)`: impede mutações (apenas shallow); (3) `structuredClone`: deep clone para modificar sem mutar original; (4) Immer: escrita "mutável" que produz cópias imutáveis via Proxy; (5) Immutable.js para estruturas persistentes otimizadas. Por que: previne bugs de referência compartilhada, facilita change detection em React/Redux, time-travel debugging.',
    tags: ['imutabilidade', 'freeze', 'spread', 'immer', 'redux'],
  },
  {
    id: 'js-053',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o padrão Singleton em JavaScript? Como implementar?',
    hints: ['Uma única instância', 'Módulo ES é naturalmente singleton', 'Cache da instância'],
    explanation: 'Singleton: garante que uma classe tenha apenas uma instância. Em JavaScript: módulos ES são naturalmente singleton — `import { db } from "./db"` sempre retorna o mesmo módulo. Implementação com classe: `class Database { static #instance; static getInstance() { if (!this.#instance) this.#instance = new Database(); return this.#instance; } }`. Uso: conexões de banco, configuração global, loggers. Em React, evite Singletons de estado — use Context ou state management.',
    tags: ['singleton', 'pattern', 'instancia-unica', 'modulos'],
  },
  {
    id: 'js-054',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Factory em JavaScript? Qual a diferença para usar `new`?',
    hints: ['Função que cria objetos', 'Sem new', 'Encapsulamento de criação'],
    explanation: 'Factory function: função que retorna um objeto. Não usa `new` nem classes. `function createUser(name, role) { const permissions = getPermissions(role); return { name, role, hasPermission(p) { return permissions.includes(p); } }; }`. Vantagens sobre `new`: (1) Encapsulamento — variáveis internas privadas via closure; (2) Flexibilidade — pode retornar diferentes tipos; (3) Sem problema de `this`; (4) Fácil de compor. Desvantagem: cada instância tem cópia dos métodos (sem prototype sharing) — levemente mais memória.',
    tags: ['factory', 'pattern', 'objetos', 'closure', 'encapsulamento'],
  },
  {
    id: 'js-055',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são campos privados de classe (`#field`) em JavaScript? Como diferem das convenções anteriores?',
    hints: ['Privacidade real no runtime', '#field', 'TypeError ao acessar de fora'],
    explanation: 'Campos privados de classe (`#`) são suportados nativamente desde ES2022 — privacidade real em runtime, não apenas convenção. `class BankAccount { #balance = 0; deposit(n) { this.#balance += n; } get balance() { return this.#balance; } }`. Acesso externo: `account.#balance` → SyntaxError. Diferente de convenção `_balance` (apenas visual, acessível). Métodos privados: `#privateMethod()`. `in` operator para verificar: `#balance in obj`. Diferente de WeakMap (também privado mas mais verboso).',
    tags: ['private-fields', 'classes', 'encapsulamento', 'es2022', 'privacidade'],
  },
  {
    id: 'js-056',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o `for...of` e `for...in`? Qual usar para arrays vs objetos?',
    hints: ['for...of: valores iteráveis', 'for...in: chaves enumeráveis'],
    explanation: '`for...of`: itera sobre valores de qualquer iterável (Array, Map, Set, String, NodeList). Melhor para arrays. `for...in`: itera sobre CHAVES enumeráveis do objeto (e da cadeia de protótipos). Evite para arrays — itera índices como strings e inclui propriedades enumeráveis adicionadas no prototype. Use `for...of` para arrays, `for...in` com `hasOwnProperty` (ou `Object.keys`) para objetos. `Object.entries(obj)` com `for...of` é mais seguro que `for...in`.',
    tags: ['for-of', 'for-in', 'iteracao', 'arrays', 'objetos'],
  },
  {
    id: 'js-057',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.from`? Quais são seus casos de uso?',
    hints: ['Cria array de iterável', 'NodeList para array', 'Segundo argumento: map function'],
    explanation: '`Array.from(iterableOrArrayLike, mapFn)` cria um array de: (1) Objetos array-like (`{ length: 3, 0: "a" }`); (2) Iteráveis (NodeList, Map, Set, String). Casos de uso: (1) `Array.from(document.querySelectorAll("li"))` — NodeList para array; (2) `Array.from({ length: 5 }, (_, i) => i)` — cria `[0,1,2,3,4]`; (3) `Array.from(new Set(arr))` — deduplicar; (4) `Array.from("hello")` — string para chars. Alternativa: `[...iterable]` com spread.',
    tags: ['Array.from', 'array', 'iterable', 'NodeList', 'util'],
  },
  {
    id: 'js-058',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são expressões regulares (RegExp) em JavaScript? Como usar os métodos `test`, `match` e `replace`?',
    hints: ['Padrões de texto', 'flags: g, i, m', 'Grupos de captura'],
    explanation: 'RegExp: padrões para matching de texto. Sintaxe: `/pattern/flags` ou `new RegExp(pattern, flags)`. Flags: `g` (global, todas ocorrências), `i` (case-insensitive), `m` (multiline). Métodos: `pattern.test(str)` → boolean; `str.match(pattern)` → array de matches; `str.replace(pattern, replacement)` — com `$1`, `$2` para grupos capturados; `str.split(pattern)`. Grupos: `/(\d{2})\/(\d{2})\/(\d{4})/.exec("25/12/2024")` → `["25/12/2024", "25", "12", "2024"]`. Named groups: `(?<day>\d{2})`.',
    tags: ['regex', 'regexp', 'test', 'match', 'replace', 'pattern'],
  },
  {
    id: 'js-059',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é tail call optimization? JavaScript suporta?',
    hints: ['Chamada no final da função', 'Sem frame extra na stack', 'Suporte limitado'],
    explanation: 'Tail call: quando a última operação de uma função é uma chamada de outra função (ou de si mesma em recursão). Com TCO, o runtime pode reutilizar o frame da stack atual em vez de empilhar um novo — evita stack overflow em recursão profunda. Suporte JS: apenas Safari implementou TCO do ES2015 em produção. Node.js e V8 não implementaram (issues de debugging e overhead). Solução prática para recursão profunda: trampolines ou converter para iterativo.',
    tags: ['tail-call', 'tco', 'recursao', 'performance', 'stack'],
  },
  {
    id: 'js-060',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é lazy evaluation em JavaScript? Como implementar com generators ou closures?',
    hints: ['Computar apenas quando necessário', 'Sequências infinitas', 'Performance'],
    explanation: 'Lazy evaluation: computar valores apenas quando são necessários (vs eager/greedy que computa imediatamente). Com generators: `function* naturals() { let n = 0; while(true) yield n++; }` — sequência infinita que só computa quando pedido. Com closures: `const expensive = () => { let cached; return () => cached ?? (cached = computeExpensive()); }`. Benefícios: performance (evita computações desnecessárias), sequências potencialmente infinitas, composição sem materializar resultados intermediários.',
    tags: ['lazy-evaluation', 'generators', 'performance', 'closures', 'infinito'],
  },
  // ── BROWSER E DOM ──────────────────────────────────────────────────────────────
  {
    id: 'js-061',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é event delegation (delegação de eventos)? Por que é mais eficiente?',
    hints: ['Um listener no pai', 'event.target para identificar origem', 'Funciona com elementos dinâmicos'],
    explanation: 'Em vez de adicionar um listener em cada elemento filho (ex: 1000 botões), adicione um único listener no elemento pai. Quando o evento ocorre em um filho, ele "borbulha" (bubbles) até o pai. `ul.addEventListener("click", (e) => { if(e.target.matches("li")) handleClick(e.target); })`. Vantagens: (1) Menos memória — um listener vs milhares; (2) Funciona com elementos criados dinamicamente; (3) Melhor performance. Limitação: não funciona com eventos que não bubblam (`focus`, `blur` — use `focusin`, `focusout`).',
    tags: ['event-delegation', 'bubbling', 'performance', 'dom', 'listener'],
  },
  {
    id: 'js-062',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é event bubbling e event capturing (propagação de eventos)? Como `stopPropagation` e `preventDefault` diferem?',
    hints: ['Capturing: do root para o alvo', 'Bubbling: do alvo para o root', 'preventDefault: comportamento do browser'],
    explanation: 'Fases de evento: (1) Capturing: do documento → elemento alvo (raro); (2) Target: no elemento clicado; (3) Bubbling: do elemento → documento. `stopPropagation()`: impede o evento de continuar subindo (não impede outros listeners no mesmo elemento — use `stopImmediatePropagation` para isso). `preventDefault()`: cancela o comportamento padrão do browser (form submit, link navigation, checkbox toggle) sem parar a propagação. Muitos confundem os dois — eles são independentes.',
    tags: ['bubbling', 'capturing', 'stopPropagation', 'preventDefault', 'eventos'],
  },
  {
    id: 'js-063',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o `MutationObserver`? Para que serve?',
    hints: ['Observa mudanças no DOM', 'Substitui DOMSubtreeModified', 'Performance-friendly'],
    explanation: '`MutationObserver` observa mudanças no DOM de forma assíncrona e eficiente: adição/remoção de nós, mudanças de atributos, mudanças de texto. `const obs = new MutationObserver((mutations) => { mutations.forEach(m => console.log(m)) }); obs.observe(element, { childList: true, subtree: true, attributes: true })`. Casos de uso: (1) Detectar quando elementos são adicionados ao DOM (para libs de animação); (2) Integração com código legado que manipula DOM diretamente; (3) Polling-free detection de mudanças.',
    tags: ['MutationObserver', 'dom', 'observar', 'mudancas', 'async'],
  },
  {
    id: 'js-064',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o `IntersectionObserver`? Qual o principal caso de uso?',
    hints: ['Detectar quando elemento entra na viewport', 'Lazy loading', 'Infinite scroll'],
    explanation: '`IntersectionObserver` detecta quando um elemento entra ou sai da viewport (ou de outro elemento) — sem polling, sem scroll listeners pesados. `const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if(e.isIntersecting) loadImage(e.target); }); }, { threshold: 0.1 })`; `obs.observe(img)`. Casos de uso: (1) Lazy loading de imagens — carregue apenas quando visíveis; (2) Infinite scroll; (3) Animações trigger; (4) Anúncios/viewability tracking. Muito mais eficiente que `scroll` + `getBoundingClientRect()`.',
    tags: ['IntersectionObserver', 'lazy-loading', 'viewport', 'performance', 'scroll'],
  },
  {
    id: 'js-065',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `requestAnimationFrame`? Por que usá-lo em vez de `setTimeout` para animações?',
    hints: ['Sincronizado com refresh do browser', '60fps', 'Pausa quando tab inativa'],
    explanation: '`requestAnimationFrame(callback)` agenda uma função para executar antes do próximo repaint do browser (tipicamente 60fps = ~16ms). Vantagens sobre `setTimeout`: (1) Sincronizado com o ciclo de repaint — animações mais suaves; (2) Pausa automaticamente quando a tab fica inativa — economiza bateria; (3) O browser pode otimizar múltiplas animações em uma única repaint. Loop de animação: `function animate(timestamp) { /* atualiza posição */ requestAnimationFrame(animate); } requestAnimationFrame(animate);`. Para cancelar: `const id = requestAnimationFrame(fn); cancelAnimationFrame(id)`.',
    tags: ['requestAnimationFrame', 'animacao', 'performance', '60fps', 'repaint'],
  },
  {
    id: 'js-066',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a History API? Como implementar Single Page Application (SPA) routing?',
    hints: ['pushState, replaceState, popstate', 'Sem reload de página', 'URL muda sem request'],
    explanation: 'History API: controle da URL sem reload de página. `history.pushState(state, title, url)`: adiciona entrada no histórico. `history.replaceState(state, title, url)`: substitui entrada atual. Evento `popstate`: disparado quando usuário clica Voltar/Avançar. SPA routing: intercepta cliques em links (`e.preventDefault()`), chama `pushState` com nova URL, renderiza o componente correspondente. `popstate` → re-renderiza baseado em `location.pathname`. React Router usa essa API internamente. Next.js abstrai tudo isso.',
    tags: ['history-api', 'pushState', 'popstate', 'spa', 'routing'],
  },
  {
    id: 'js-067',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Web Storage API? Como usar localStorage e sessionStorage com dados complexos?',
    hints: ['JSON.stringify/parse', 'Apenas strings', 'try/catch para QuotaExceeded'],
    explanation: 'localStorage e sessionStorage só armazenam strings. Para objetos/arrays: `localStorage.setItem("data", JSON.stringify(obj)); const data = JSON.parse(localStorage.getItem("data"))`. Cuidados: (1) Limitação de ~5-10MB por origem; (2) `QuotaExceededError` se exceder — sempre use try/catch; (3) Síncrono — evite I/O pesado; (4) Não disponível em contextos como Service Workers (use IndexedDB). Para dados sensíveis: nunca localStorage — use httpOnly cookies.',
    tags: ['localStorage', 'sessionStorage', 'web-storage', 'JSON', 'strings'],
  },
  {
    id: 'js-068',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é IndexedDB? Quando usar em vez de localStorage?',
    hints: ['Banco de dados no browser', 'Async', 'Grandes volumes', 'Service Worker'],
    explanation: 'IndexedDB: banco de dados chave-valor no browser, orientado a objetos, assíncrono, suporta transações, índices, cursors. Capacidade: tipicamente GB, não KB. Use IndexedDB quando: (1) Grandes volumes de dados; (2) Dados estruturados/relacionais; (3) Necessidade de índices para buscas; (4) Service Worker (localStorage não disponível); (5) Operações transacionais. API nativa é verbosa — use `idb` (wrapper moderno com Promises) ou `Dexie.js`. localStorage suficiente para preferences simples (<1MB).',
    tags: ['indexeddb', 'browser-storage', 'offline', 'grande-volume', 'service-worker'],
  },
  {
    id: 'js-069',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Web Workers? Como permitir paralelismo em JavaScript single-thread?',
    hints: ['Thread separada', 'postMessage', 'Sem acesso ao DOM'],
    explanation: 'Web Workers executam JavaScript em thread separada sem bloquear a thread principal. Comunicação via `postMessage`/`onmessage`. `const worker = new Worker("worker.js"); worker.postMessage({ data }); worker.onmessage = (e) => console.log(e.data)`. Limitações: sem acesso ao DOM, sem localStorage. Casos de uso: computações pesadas (criptografia, processamento de imagem, ML), parsing de arquivos grandes. Service Workers são Workers especiais com acesso a fetch/cache para PWA. SharedWorker: compartilhado entre múltiplas tabs.',
    tags: ['web-workers', 'parallelism', 'thread', 'postMessage', 'performance'],
  },
  {
    id: 'js-070',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Clipboard API? Como copiar e colar programaticamente?',
    hints: ['navigator.clipboard', 'writeText/readText', 'Permissão do usuário'],
    explanation: 'Clipboard API: acesso assíncrono ao clipboard. `navigator.clipboard.writeText("texto")` — copia (requer HTTPS ou localhost). `navigator.clipboard.readText()` — lê (requer permissão do usuário). Para imagens: `write()/read()` com `ClipboardItem`. Fallback para browsers antigos: `document.execCommand("copy")` (deprecated mas ainda funciona). Em React: `useCallback(() => navigator.clipboard.writeText(code).then(() => setCopied(true)), [code])`. Sempre trate a Promise (pode falhar sem permissão).',
    tags: ['clipboard', 'copy', 'paste', 'browser-api', 'permissao'],
  },
  // ── PERFORMANCE E AVANÇADO ────────────────────────────────────────────────────
  {
    id: 'js-071',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é garbage collection em JavaScript? Como evitar memory leaks?',
    hints: ['Mark-and-sweep', 'Referências circulares', 'WeakRef e WeakMap'],
    explanation: 'GC JavaScript usa mark-and-sweep: parte do root (window), marca todos os objetos alcançáveis, descarta os não-marcados. Memory leaks comuns: (1) Global variables acidentais; (2) Event listeners não removidos; (3) Closures que retêm referências grandes; (4) Timers não cancelados; (5) Arrays/Maps que crescem indefinidamente sem limpar. Detectar: Chrome DevTools → Memory → Heap snapshot (compare dois snapshots para ver crescimento). WeakMap/WeakRef permitem referências que não impedem GC.',
    tags: ['garbage-collection', 'memory-leak', 'WeakMap', 'WeakRef', 'mark-sweep'],
  },
  {
    id: 'js-072',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema "thundering herd"? Como evitar com debounce, throttle e jitter?',
    hints: ['Muitos requests simultâneos', 'Cache miss', 'Jitter randômico'],
    explanation: 'Thundering herd: muitos clientes tentando a mesma operação simultaneamente (ex: cache expira → todos tentam recriar ao mesmo tempo). No frontend: muitos usuários tentando retry depois de um erro de rede ao mesmo tempo, sobrecarregando o servidor. Soluções: (1) Jitter: adicionar delay randômico ao retry: `delay + Math.random() * delay`; (2) Exponential backoff com jitter: `Math.min(base * 2^attempt, max) + random(0, 1000)ms`; (3) No servidor: cache stampede prevention com lock.',
    tags: ['thundering-herd', 'jitter', 'retry', 'cache', 'resilencia'],
  },
  {
    id: 'js-073',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o padrão de composição de funções (function composition)? Implemente `pipe` e `compose`.',
    hints: ['f(g(x)) = compose(f, g)(x)', 'pipe: esquerda para direita', 'compose: direita para esquerda'],
    explanation: `Composição: combinar funções onde saída de uma é input da próxima.
\`\`\`js
// compose: direita para esquerda: compose(f, g, h)(x) = f(g(h(x)))
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// pipe: esquerda para direita: pipe(f, g, h)(x) = h(g(f(x)))
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Uso:
const process = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.split(" ")
);
process("  Hello World  ") // ["hello", "world"]
\`\`\``,
    tags: ['compose', 'pipe', 'composicao', 'funcional', 'implementacao'],
  },
  {
    id: 'js-074',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são tagged template literals? Implemente um simples motor de template SQL-safe.',
    hints: ['Função que recebe template parts e valores', 'Previne SQL injection', 'styled-components usa isso'],
    explanation: `Tagged templates: função que processa template literal. Recebe: \`strings\` (partes literais) e \`...values\` (expressões interpoladas).
\`\`\`js
function sql(strings, ...values) {
  let query = strings[0];
  const params = [];
  values.forEach((val, i) => {
    params.push(val); // Parametrize em vez de interpolar
    query += \`$\${params.length}\` + strings[i + 1];
  });
  return { query, params };
}
// Uso:
const id = 1; const name = "'; DROP TABLE users;--";
const { query, params } = sql\`SELECT * FROM users WHERE id = \${id} AND name = \${name}\`;
// query: "SELECT * FROM users WHERE id = $1 AND name = $2"
// params: [1, "'; DROP TABLE users;--"] — seguro!
\`\`\``,
    tags: ['tagged-template', 'sql', 'seguranca', 'injecao', 'implementacao'],
  },
  {
    id: 'js-075',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os novos recursos do JavaScript ES2022/ES2023/ES2024 mais relevantes?',
    hints: ['Top-level await', 'Array.at()', 'Error.cause', 'Object.groupBy'],
    explanation: 'ES2022: `Array.at(-1)` (índice negativo), `Object.hasOwn()`, `Error.cause`, `await` top-level em módulos, campos privados `#`, `static` blocks em classes. ES2023: `Array.findLast/findLastIndex`, `Array.toSorted/toReversed/toSpliced/with` (versões imutáveis), `Array.from` como método de WeakMap/WeakSet. ES2024: `Object.groupBy`, `Map.groupBy`, `Promise.withResolvers()`, `ArrayBuffer.resize`, regex `/v` flag. Muitos desses já funcionam nos browsers modernos.',
    tags: ['es2022', 'es2023', 'es2024', 'novidades', 'javascript-moderno'],
  },
  {
    id: 'js-076',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é tree shaking? Por que importações named são melhores que default imports para isso?',
    hints: ['Eliminar código morto', 'Análise estática ESM', 'Bundle size'],
    explanation: 'Tree shaking: bundlers (Webpack, Rollup, esbuild) analisam estaticamente os imports e removem código não utilizado (dead code elimination). Requer ESM (não funciona com CJS dinâmico). Por que named imports são melhores: `import { format } from "date-fns"` — bundler sabe exatamente qual função importar, descarta o resto da lib. `import _ from "lodash"` — importa a lib inteira mesmo usando apenas `_.merge`. date-fns tem ~200KB, mas `import { format }` importa apenas ~3KB.',
    tags: ['tree-shaking', 'bundle', 'named-imports', 'dead-code', 'otimizacao'],
  },
  {
    id: 'js-077',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como funciona o `JSON.stringify` e `JSON.parse`? Quais são as limitações?',
    hints: ['Serialização de objetos', 'Não suporta undefined, Function, Symbol', 'Replacer e reviver'],
    explanation: '`JSON.stringify(value, replacer, space)`: converte para JSON string. Não suporta: `undefined` (ignorado), `Function`, `Symbol`, referências circulares (erro). Date vira string ISO. `JSON.parse(text, reviver)`: converte string JSON de volta para objeto. Replacer: `JSON.stringify(obj, (key, val) => typeof val === "number" ? undefined : val)` — filtra números. Reviver: `JSON.parse(str, (key, val) => key === "date" ? new Date(val) : val)` — converte strings de volta para Date.',
    tags: ['JSON', 'stringify', 'parse', 'serializacao', 'limitacoes'],
  },
  {
    id: 'js-078',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Strategy em JavaScript? Implemente um validador de formulário usando Strategy.',
    hints: ['Família de algoritmos intercambiáveis', 'Objeto com estratégias', 'Elimina if-else em cascata'],
    explanation: `Strategy: define família de algoritmos, encapsula cada um e torna intercambiáveis.
\`\`\`js
const validators = {
  required: (val) => val.trim() !== '' || 'Campo obrigatório',
  email: (val) => /^[^@]+@[^@]+\.[^@]+$/.test(val) || 'Email inválido',
  minLength: (min) => (val) => val.length >= min || \`Mínimo \${min} caracteres\`,
};

function validate(value, rules) {
  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) return result; // Retorna mensagem de erro
  }
  return null; // Válido
}

validate(email, [validators.required, validators.email]);
\`\`\``,
    tags: ['strategy-pattern', 'validacao', 'formulario', 'design-pattern', 'implementacao'],
  },
  {
    id: 'js-079',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique como funciona o V8 engine do JavaScript. O que são hidden classes e inline caches?',
    hints: ['Interpretação + JIT compilation', 'Shapes de objetos', 'Otimização de acesso a propriedades'],
    explanation: 'V8 (Chrome, Node.js): (1) Parser → AST; (2) Ignition (interpreter): executa bytecode rápido; (3) TurboFan (JIT compiler): compila código "hot" para machine code otimizado. Hidden Classes (Shapes): V8 cria classe interna para objetos com mesma estrutura — `{x, y}` sempre na mesma ordem compartilha a mesma hidden class, otimizando acesso. Inline Caches (IC): cacheia o resultado de operações (ex: propriedade "x" está em offset 0) para acesso direto sem lookup. Por que importa: crie objetos com mesma forma, não adicione props dinamicamente, não mude tipos de props.',
    tags: ['v8', 'jit', 'hidden-classes', 'inline-cache', 'otimizacao-engine'],
  },
  {
    id: 'js-080',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o operador `in` e `hasOwnProperty`? Qual a diferença?',
    hints: ['in: verifica cadeia de protótipos', 'hasOwnProperty: apenas no próprio objeto'],
    explanation: '`"prop" in obj`: verifica se a propriedade existe no objeto OU em qualquer objeto na cadeia de protótipos. `obj.hasOwnProperty("prop")`: verifica apenas no próprio objeto, não na cadeia. Exemplo: `"toString" in {}` → true (herdado de Object.prototype). `{}.hasOwnProperty("toString")` → false. Use moderno: `Object.hasOwn(obj, "prop")` — equivalente ao hasOwnProperty mas mais seguro (funciona mesmo se o objeto não tem Object.prototype).',
    tags: ['in-operator', 'hasOwnProperty', 'Object.hasOwn', 'prototype', 'propriedades'],
  },
  {
    id: 'js-081',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são métodos estáticos em JavaScript? Quando usar?',
    hints: ['Pertence à classe, não à instância', 'Utility functions', 'Factory methods'],
    explanation: 'Métodos estáticos pertencem à classe, não às instâncias — chamados como `MinhaClasse.metodo()`, não `instancia.metodo()`. Acessados via `this` dentro do método estático referencia a classe, não a instância. Casos de uso: (1) Utility functions relacionadas à classe: `Date.now()`, `Math.max()`; (2) Factory methods que retornam instâncias: `User.fromJSON(json)`; (3) Constants: `static MAX_SIZE = 100`. Não têm acesso a `this` de instância.',
    tags: ['static', 'metodos', 'classes', 'factory', 'utility'],
  },
  {
    id: 'js-082',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a diferença entre `Object.keys()`, `Object.values()` e `Object.entries()`?',
    hints: ['keys: array de chaves', 'values: array de valores', 'entries: array de pares'],
    explanation: 'Todos retornam arrays iteráveis com as propriedades próprias e enumeráveis do objeto. `Object.keys(obj)`: array de chaves (strings). `Object.values(obj)`: array de valores. `Object.entries(obj)`: array de pares [chave, valor]. Uso com for...of: `for (const [key, value] of Object.entries(obj)) { ... }`. Não incluem propriedades do prototype. Para incluir: use `for...in` com cuidado. Equivalente com Symbols: `Object.getOwnPropertySymbols()`. `Object.fromEntries(entries)`: inverso de entries.',
    tags: ['Object.keys', 'Object.values', 'Object.entries', 'objetos', 'iteracao'],
  },
  {
    id: 'js-083',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Mixins em JavaScript? Como implementar composição de comportamentos?',
    hints: ['Object.assign para adicionar métodos', 'Classe base + mixin', 'Composição vs herança'],
    explanation: `Mixin: objeto com métodos que podem ser copiados para outras classes — composição sem herança.
\`\`\`javascript
const Serializable = {
  serialize() { return JSON.stringify(this); },
  deserialize(data) { return Object.assign(Object.create(this), JSON.parse(data)); }
};
const Validatable = {
  validate() { return Object.keys(this).every(k => this[k] !== null); }
};
class User { constructor(name, email) { this.name = name; this.email = email; } }
Object.assign(User.prototype, Serializable, Validatable);
// User agora tem serialize, deserialize e validate
\`\`\``,
    tags: ['mixins', 'composicao', 'heranca', 'Object.assign', 'comportamentos'],
  },
  {
    id: 'js-084',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.flat()` e `Array.flatMap()`?',
    hints: ['Achata arrays aninhados', 'flatMap: map + flat(1)', 'Depth para flat'],
    explanation: '`Array.flat(depth)`: achata arrays aninhados até o depth especificado. `[[1,2],[3,4]].flat()` → `[1,2,3,4]`. `flat(Infinity)` achata completamente. `Array.flatMap(fn)`: equivale a `.map(fn).flat(1)` — mais eficiente. Caso de uso: `palavras.flatMap(p => p.split(" "))` — achata arrays de palavras. Performance: flatMap é mais eficiente que map().flat() pois faz em uma passagem. Alternativa histórica: `[].concat(...arr)` (antes do flat existir).',
    tags: ['flat', 'flatMap', 'arrays-aninhados', 'depth', 'performace'],
  },
  {
    id: 'js-085',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.reduce()` com objeto como acumulador? Mostre um exemplo de groupBy.',
    hints: ['Acumulador pode ser qualquer tipo', 'Construir objeto a partir de array', 'GroupBy pattern'],
    explanation: `reduce com objeto — agrupa por campo:
\`\`\`javascript
const users = [
  { name: "Ana", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Bia", role: "admin" },
];
const grouped = users.reduce((acc, user) => {
  const key = user.role;
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});
// { admin: [Ana, Bia], user: [Bob] }

// ES2024: Object.groupBy(users, u => u.role) — nativo!
\`\`\``,
    tags: ['reduce', 'groupBy', 'acumulador', 'objeto', 'ES2024'],
  },
  {
    id: 'js-086',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Publish-Subscribe (Pub/Sub)? Como implementar em JavaScript?',
    hints: ['Desacoplamento entre publisher e subscriber', 'Canal de eventos', 'Topic-based'],
    explanation: `Pub/Sub: publishers emitem para tópicos, subscribers escutam tópicos — sem conhecimento mútuo.
\`\`\`javascript
class PubSub {
  #channels = {};
  subscribe(topic, fn) {
    if (!this.#channels[topic]) this.#channels[topic] = [];
    this.#channels[topic].push(fn);
    return () => this.unsubscribe(topic, fn); // retorna cleanup
  }
  publish(topic, data) { this.#channels[topic]?.forEach(fn => fn(data)); }
  unsubscribe(topic, fn) {
    this.#channels[topic] = this.#channels[topic]?.filter(f => f !== fn);
  }
}
const bus = new PubSub();
bus.subscribe("user:login", ({ userId }) => analytics.track(userId));
bus.publish("user:login", { userId: "123" });
\`\`\``,
    tags: ['pub-sub', 'event-bus', 'desacoplamento', 'topicos', 'pattern'],
  },
  {
    id: 'js-087',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o conceito de imutabilidade em JavaScript puro? Técnicas sem bibliotecas externas.',
    hints: ['Object.freeze', 'Spread para novas cópias', 'structuredClone', 'Array methods que retornam novo array'],
    explanation: 'Técnicas de imutabilidade sem libs: (1) Spread: const newObj = { ...obj, key: newVal }; const newArr = [...arr, newItem]; (2) Slice em vez de splice: arr.slice(0, index).concat(arr.slice(index + 1)) para deletar; (3) Map, filter, reduce retornam novos arrays; (4) Object.freeze() para shallow freeze; (5) structuredClone() para deep clone antes de modificar; (6) Métodos imutáveis novos (ES2023): toSorted(), toReversed(), toSpliced(), with(index, value).',
    tags: ['imutabilidade', 'spread', 'freeze', 'structuredClone', 'ES2023'],
  },
  {
    id: 'js-088',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Promise.withResolvers()`? Como simplifica criação de Promises.',
    hints: ['ES2024', 'resolve e reject externamente', 'Sem callback executor'],
    explanation: 'Promise.withResolvers() (ES2024): retorna { promise, resolve, reject } — permite controlar a promise de fora do executor. Antes: const resolve, reject; const promise = new Promise((res, rej) => { resolve = res; reject = rej; }). Depois: const { promise, resolve, reject } = Promise.withResolvers(). Caso de uso: quando você precisa guardar resolve/reject para chamar depois (eventos, callbacks externos). Mais limpo que o hack de variáveis externas.',
    tags: ['Promise.withResolvers', 'ES2024', 'promise', 'resolve', 'deferred'],
  },
  {
    id: 'js-089',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `structuredClone()`? Como difere de JSON.parse(JSON.stringify())?',
    hints: ['Deep clone nativo', 'Suporta Date, Map, Set', 'Referências circulares'],
    explanation: 'structuredClone() (ES2022): deep clone nativo do browser/Node.js. Vantagens sobre JSON.parse(JSON.stringify()): (1) Suporta Date (preserva como Date, não string); (2) Suporta Map, Set, ArrayBuffer, RegExp, Error; (3) Suporta referências circulares; (4) Mais rápido para objetos complexos. Limitações: não suporta Function, Symbol, DOM nodes. JSON.parse(JSON.stringify()) ainda útil para: serialização simples, compartilhamento entre workers, compatibilidade máxima. Na maioria dos casos modernos, prefira structuredClone.',
    tags: ['structuredClone', 'deep-clone', 'Date', 'Map', 'referencias-circulares'],
  },
  {
    id: 'js-090',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o operador de atribuição lógica (`&&=`, `||=`, `??=`)? Quando usar?',
    hints: ['ES2021', 'Atribuição condicional', 'Short-circuit'],
    explanation: 'Logical Assignment Operators (ES2021): combinam operador lógico com atribuição. x ||= y: atribui y se x é falsy — x = x || y. x &&= y: atribui y se x é truthy — x = x && y. x ??= y: atribui y se x é null/undefined — x = x ?? y. Casos de uso: obj.config ??= defaultConfig — inicializa apenas se não definido; element.classList &&= element.classList.add("active") — só adiciona se classList existe. Mais legível que ternário para defaults simples.',
    tags: ['logical-assignment', 'nullish-assignment', 'ES2021', 'short-circuit', 'default'],
  },
  {
    id: 'js-091',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.at()` e `String.at()`? Por que são úteis?',
    hints: ['Índice negativo', 'Último elemento', 'Mais legível que arr.length-1'],
    explanation: 'O método at() aceita índices negativos contados do final: arr.at(-1) é o último elemento, arr.at(-2) o penúltimo. Equivalente legível de arr[arr.length - 1]. Funciona em Array, String e TypedArrays. Antes: arr[arr.length - 1] ou arr.slice(-1)[0]. Depois: arr.at(-1) — mais limpo e menos propenso a erro. String: "hello".at(-1) === "o". Caso de uso comum: histórico de navegação.at(-1), pilha.at(-1). Disponível desde ES2022 / Node 16.6.',
    tags: ['at', 'indice-negativo', 'ultimo-elemento', 'ES2022', 'ergonomia'],
  },
  {
    id: 'js-092',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `using` keyword e Symbol.dispose no JavaScript/TypeScript?',
    hints: ['Gerenciamento de recursos', 'Explicit Resource Management', 'TC39 Stage 3'],
    explanation: 'Explicit Resource Management (Stage 4 / ES2025): using keyword para gerenciamento automático de recursos (como using em C# ou with em Python). using conn = getConnection() — quando sair do escopo, conn[Symbol.dispose]() é chamado automaticamente. await using para async disposal. TypeScript 5.2+ já suporta. Implementação: export class DatabaseConnection { [Symbol.dispose]() { this.close(); } }. Elimina try/finally para cleanup de recursos como conexões, arquivos, handles.',
    tags: ['using', 'Symbol.dispose', 'resource-management', 'typescript5', 'cleanup'],
  },
  {
    id: 'js-093',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como otimizar performance de código JavaScript com técnicas de engine optimization?',
    hints: ['Monomorphic functions', 'Objetos com mesma forma', 'Evitar deoptimization'],
    explanation: 'Otimizações para o motor V8: (1) Funções monomórficas: sempre passe o mesmo tipo de argumento — evita deoptimization; (2) Objetos com forma consistente: crie sempre com as mesmas propriedades na mesma ordem — Hidden classes funcionam melhor; (3) Evite apagar propriedades (delete) — muda a hidden class; (4) Evite propriedades fora do constructor; (5) Strings: concatenação de muitas strings → use array.join(""); (6) Evite boxing/unboxing desnecessário de tipos primitivos; (7) Arrays homogêneos são mais otimizáveis.',
    tags: ['v8', 'monomorphic', 'hidden-class', 'otimizacao-engine', 'performance'],
  },
  {
    id: 'js-094',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Nullish Coalescing Assignment e como difere de `||` (OR)?',
    hints: ['?? trata apenas null/undefined', '|| trata todos falsy', '0 e "" são diferentes'],
    explanation: 'Diferença crucial: || retorna lado direito se esquerdo é QUALQUER valor falsy (0, "", false, null, undefined, NaN). ?? retorna lado direito apenas se esquerdo é null ou undefined. Exemplo: let count = 0; count = count || 10 → 10 (ERRADO — 0 é falsy!). count = count ?? 10 → 0 (CORRETO). Use || quando qualquer falsy deve usar o default. Use ?? quando apenas null/undefined deve usar o default (preserva 0, "", false como valores válidos).',
    tags: ['nullish-coalescing', 'or-operator', 'falsy', 'diferenca', 'default'],
  },
  {
    id: 'js-095',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Flyweight? Como reduz uso de memória em JavaScript?',
    hints: ['Compartilhar estado imutável', 'Pool de objetos', 'Muitas instâncias similares'],
    explanation: `Flyweight: compartilha dados comuns entre muitas instâncias para economizar memória. Útil quando você tem milhares de objetos similares.
\`\`\`javascript
// Sem Flyweight: cada objeto tem sua própria cópia de dados constantes
class Tree { constructor(x, y, type, texture) { /* 4 campos */ } }

// Com Flyweight: dados constantes compartilhados
class TreeType {
  constructor(name, texture) { this.name = name; this.texture = texture; }
}
const treeTypes = new Map(); // Pool de tipos compartilhados
class Tree {
  constructor(x, y, typeName) {
    this.x = x; this.y = y;
    if (!treeTypes.has(typeName)) treeTypes.set(typeName, new TreeType(typeName, loadTexture(typeName)));
    this.type = treeTypes.get(typeName); // Compartilhado!
  }
}
\`\`\``,
    tags: ['flyweight', 'memoria', 'pool', 'compartilhamento', 'pattern'],
  },
  {
    id: 'js-096',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `typeof`, `instanceof` e `Object.prototype.toString.call()`?',
    hints: ['typeof: primitivos', 'instanceof: prototype chain', 'toString: mais preciso'],
    explanation: 'typeof: retorna string para primitivos e "object" para maioria dos objetos (incluindo null — bug histórico). instanceof: verifica prototype chain — array instanceof Array é true. Não funciona cross-iframe (iframes têm Arrays diferentes). Object.prototype.toString.call(value): mais preciso — retorna "[object Array]", "[object Date]", "[object Null]", "[object Promise]". Usos: typeof para verificar primitivos (string, number, function, undefined); instanceof para instâncias de classes; toString.call para tipos específicos de objetos.',
    tags: ['typeof', 'instanceof', 'toString', 'type-checking', 'primitivos'],
  },
  {
    id: 'js-097',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Monad em programação funcional? Como o conceito aparece em JavaScript?',
    hints: ['Container com flatMap', 'Maybe/Option', 'Promise é uma monad'],
    explanation: 'Monad: estrutura que encapsula um valor e fornece operações para transformar o valor interno sem desempacotar. Leis: Left identity, Right identity, Associativity. Em JavaScript: Promise é uma monad — then() é flatMap. Maybe monad previne null pointer exceptions: Maybe(value).map(fn) — se value é null, retorna Maybe(null) sem executar fn. Either monad para error handling: Right(value).map(fn) executa; Left(error) propaga o erro. Bibliotecas: fp-ts, effect. Para a maioria dos casos práticos: Promise + optional chaining cobre os casos mais comuns.',
    tags: ['monad', 'funcional', 'promise', 'maybe', 'either'],
  },
  {
    id: 'js-098',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `queueMicrotask()`? Como difere de `setTimeout(fn, 0)`?',
    hints: ['Microtask queue', 'Mais rápido que setTimeout', 'Mesma prioridade que Promise.then'],
    explanation: 'queueMicrotask(fn) agenda uma função na Microtask Queue — executada antes de qualquer Macrotask (setTimeout), mas após o código síncrono atual. Mesma prioridade que Promise.then(). Diferença de setTimeout(fn, 0): microtasks são processadas TODAS antes da próxima macrotask. Ordem: código síncrono → microtasks → macrotask → microtasks → macrotask → ... Caso de uso: quando você quer executar algo "imediatamente após o código atual" mas sem o overhead mínimo de setTimeout (que pode ser ~4ms no browser).',
    tags: ['queueMicrotask', 'microtask', 'setTimeout', 'event-loop', 'prioridade'],
  },
  {
    id: 'js-099',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Mediator em JavaScript? Como reduz acoplamento entre componentes?',
    hints: ['Ponto central de comunicação', 'Componentes não se conhecem diretamente', 'Event bus'],
    explanation: `Mediator: objeto central que gerencia comunicação entre componentes — eles não se comunicam diretamente.
\`\`\`javascript
class ChatRoom {
  #users = [];
  join(user) { this.#users.push(user); user.setRoom(this); }
  send(message, from) {
    this.#users
      .filter(u => u !== from)
      .forEach(u => u.receive(message, from));
  }
}
class User {
  #room;
  setRoom(room) { this.#room = room; }
  send(msg) { this.#room.send(msg, this); }
  receive(msg, from) { console.log(\`\${from.name}: \${msg}\`); }
}
// Usuários não se conhecem — apenas conhecem o ChatRoom (Mediator)
\`\`\``,
    tags: ['mediator', 'chat', 'desacoplamento', 'componentes', 'pattern'],
  },
  {
    id: 'js-100',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Tagged Unions / Sum Types em JavaScript sem TypeScript?',
    hints: ['Objeto com type discriminant', 'Pattern matching manual', 'Alternativa ao tipo union do TS'],
    explanation: `Tagged union em JS puro — use um campo discriminante:
\`\`\`javascript
// Em vez de if/else baseado em instanceof:
function createResult(data) {
  return { type: "success", data };
}
function createError(message) {
  return { type: "error", message };
}
function handleResult(result) {
  switch (result.type) {
    case "success": return processData(result.data);
    case "error": return showError(result.message);
    default: throw new Error("Unknown result type: " + result.type);
  }
}
// Exaustivo: adicionar novo type sem tratar → default lança erro
\`\`\`
TypeScript torna isso ainda mais seguro com narrowing automático e exhaustive check via never.`,
    tags: ['tagged-union', 'sum-type', 'discriminant', 'pattern-matching', 'functional'],
  },
  {
    id: 'js-101',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Promise.any()` e quando usar?',
    hints: ['Primeiro sucesso', 'Rejeita se todos falharem', 'AggregateError'],
    explanation: 'Promise.any(promises): resolve com o PRIMEIRO sucesso; rejeita apenas se TODAS rejeitarem (lança AggregateError com todas as razões). Difere de Promise.race: race resolve/rejeita com o PRIMEIRO resultado (sucesso ou falha). Use Promise.any quando: você tem múltiplas fontes de dado e quer o mais rápido que funcione (fallback entre CDNs, múltiplas APIs). Se todas falharem: catch(err) { err instanceof AggregateError; err.errors — array com todos os erros }.',
    tags: ['Promise.any', 'AggregateError', 'race', 'fallback', 'promises'],
  },
  {
    id: 'js-102',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de "callback hell" e como async/await o resolve?',
    hints: ['Pirâmide de doom', 'Legibilidade', 'Tratamento de erro centralizado'],
    explanation: `Callback hell: callbacks aninhados para operações sequenciais — "pirâmide da perdição".
\`\`\`javascript
// ❌ Callback hell:
getUserData(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      // Mais níveis...
    }, onError);
  }, onError);
}, onError);

// ✓ async/await:
async function loadUserContent(id) {
  try {
    const user = await getUserData(id);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    return { user, posts, comments };
  } catch (err) { /* tratamento centralizado */ }
}
\`\`\``,
    tags: ['callback-hell', 'async-await', 'legibilidade', 'promises', 'aninhamento'],
  },
  {
    id: 'js-103',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são os métodos `Array.some()` e `Array.every()`?',
    hints: ['some: pelo menos um', 'every: todos', 'Short-circuit'],
    explanation: 'some(fn): retorna true se PELO MENOS UM elemento satisfaz a condição — para imediatamente quando encontra. [1,2,3].some(x => x > 2) → true. every(fn): retorna true se TODOS os elementos satisfazem — para imediatamente quando encontra um que não satisfaz. [1,2,3].every(x => x > 0) → true. Ambos fazem short-circuit (param antes de processar todos os elementos quando o resultado já é conhecido). Array vazio: some() → false (nenhum satisfaz), every() → true (vacuously true).',
    tags: ['some', 'every', 'array', 'short-circuit', 'condicao'],
  },
  {
    id: 'js-104',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Object.freeze()` e qual sua diferença de `Object.seal()`?',
    hints: ['freeze: read-only completo', 'seal: não adicionar/deletar', 'Shallow ambos'],
    explanation: 'Object.freeze(obj): (1) Não pode adicionar propriedades; (2) Não pode remover propriedades; (3) Não pode alterar valores; (4) Não pode alterar descritores. Object.seal(obj): (1) Não pode adicionar propriedades; (2) Não pode remover propriedades; (3) PODE alterar valores de propriedades existentes; (4) Não pode reconfigurar descritores. Ambos são shallow — objetos aninhados não são afetados. Para deep freeze: recursivamente aplique freeze a todos os objetos aninhados. Verificar: Object.isFrozen(obj), Object.isSealed(obj).',
    tags: ['freeze', 'seal', 'imutabilidade', 'objetos', 'shallow'],
  },
  {
    id: 'js-105',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Module Revealing? Como encapsular código sem classes?',
    hints: ['IIFE retorna objeto público', 'Closure para privacidade', 'API explícita'],
    explanation: `Revealing Module: IIFE retorna apenas os métodos e propriedades que devem ser públicos.
\`\`\`javascript
const counter = (() => {
  let count = 0; // Privado por closure
  const increment = () => ++count;
  const decrement = () => --count;
  const getCount = () => count;
  const reset = () => { count = 0; };
  return { increment, decrement, getCount, reset }; // API pública revelada
})();
counter.increment(); // 1
counter.count; // undefined — privado!
\`\`\`
Vantagem sobre classes: privacidade real em runtime (sem # necessário). Desvantagem: sem herança, cada instância tem cópia dos métodos (vs prototype sharing).`,
    tags: ['revealing-module', 'iife', 'closure', 'privacidade', 'encapsulamento'],
  },
  {
    id: 'js-106',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como funciona o operador de encadeamento opcional `?.` com chamadas de método e arrays?',
    hints: ['?.()  para métodos', '?.[index] para arrays', 'Retorna undefined se null'],
    explanation: 'Optional chaining em diferentes formas: (1) Propriedade: obj?.prop — se obj é null/undefined, retorna undefined; (2) Método: obj?.method() — se obj ou method é null/undefined, não chama e retorna undefined; (3) Índice: arr?.[0] — se arr é null/undefined, retorna undefined; (4) Encadeado: user?.address?.city; (5) Com nullish: user?.name ?? "Anônimo". Não para TypeError: obj?.nonExistentMethod() — nonExistentMethod é undefined então não é chamado, retorna undefined sem erro. Diferente de obj?.prop.method() — se prop existe mas method não, ainda lança TypeError.',
    tags: ['optional-chaining', 'metodos', 'arrays', 'null-safe', 'encadeamento'],
  },
  {
    id: 'js-107',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `Reflect` em JavaScript? Como difere de operações diretas?',
    hints: ['API funcional para operações de objeto', 'Complementa Proxy', 'Retorna boolean'],
    explanation: 'Reflect: API de objeto que fornece métodos para operações de metaprogramação como funções (em vez de operadores). Reflect.get(obj, "prop") ≡ obj.prop. Reflect.set(obj, "prop", val) ≡ obj.prop = val — retorna boolean. Reflect.deleteProperty(obj, "prop") ≡ delete obj.prop — retorna boolean. Reflect.has(obj, "prop") ≡ "prop" in obj. Reflect.ownKeys(obj): todas as propriedades (incluindo Symbols). Por que usar: (1) Em Proxy handlers — Reflect.get/set no target mantém comportamento correto; (2) Retorna boolean em vez de lançar erro (Reflect.set retorna false em vez de TypeError).',
    tags: ['Reflect', 'proxy', 'meta-programacao', 'objeto', 'boolean'],
  },
  {
    id: 'js-108',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o `for...of` vs `for...in` vs `forEach`? Quando usar cada um?',
    hints: ['for...of: valores iteráveis', 'for...in: chaves objeto', 'forEach: sem break'],
    explanation: 'for...of: itera valores de qualquer iterável (Array, Map, Set, String). Funciona com break/continue/return. Melhor para arrays e outros iteráveis. for...in: itera CHAVES enumeráveis do objeto (incluindo herdadas do prototype). Evite para arrays (itera índices como strings e pode incluir propriedades adicionais). Use para objetos com Object.hasOwn(). forEach(fn): método de Array, sem possibilidade de break ou return (use for...of nesse caso). Sem valor de retorno. Mais legível para iteração simples de arrays.',
    tags: ['for-of', 'for-in', 'forEach', 'iteracao', 'diferenca'],
  },
  {
    id: 'js-109',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Temporal Dead Zone (TDZ) de forma detalhada? Mostre com código.',
    hints: ['let e const hoisted mas não inicializados', 'ReferenceError antes da declaração', 'Block scope'],
    explanation: `TDZ: zona entre início do bloco e a declaração da variável, onde a variável existe mas não pode ser acessada.
\`\`\`javascript
{
  // TDZ para x começa aqui
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  // ↑ x existe (hoisted) mas não foi inicializada ainda
  let x = 10; // TDZ termina aqui
  console.log(x); // 10 — ok
}
// var não tem TDZ:
console.log(y); // undefined (hoisted e inicializado com undefined)
var y = 10;
// typeof também lança ReferenceError para variáveis em TDZ (diferente de não declaradas):
typeof x; // ReferenceError se x está em TDZ
typeof notDeclared; // "undefined" (seguro para var não declarada)
\`\`\``,
    tags: ['tdz', 'temporal-dead-zone', 'let', 'const', 'hoisting'],
  },
  {
    id: 'js-110',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um `pipe` funcional assíncrono em JavaScript?',
    hints: ['reduce com await', 'Cada função recebe o resultado da anterior', 'Composição async'],
    explanation: `Pipe assíncrono: aplica funções em sequência, cada uma com await.
\`\`\`javascript
const asyncPipe = (...fns) => async (initialValue) => {
  return fns.reduce(async (acc, fn) => {
    const value = await acc; // Aguarda resultado anterior
    return fn(value);        // Aplica próxima função
  }, Promise.resolve(initialValue));
};

// Uso:
const processUser = asyncPipe(
  validateUser,           // async (user) => user
  enrichWithProfile,      // async (user) => { ...user, profile }
  sendWelcomeEmail,       // async (user) => user (side effect + passa adiante)
  saveToDatabase,         // async (user) => savedUser
);
const result = await processUser(rawUserData);
\`\`\``,
    tags: ['pipe', 'async', 'composicao', 'reduce', 'funcional'],
  },
  {
    id: 'js-111',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são métodos `Array.findLast()` e `Array.findLastIndex()`? (ES2023)',
    hints: ['Busca do final para o início', 'Sem reverter o array', 'ES2023'],
    explanation: 'findLast(fn) e findLastIndex(fn) (ES2023): buscam de trás para frente, retornando o último elemento/índice que satisfaz a condição. [1,2,3,4].findLast(x => x % 2 === 0) → 4. [1,2,3,4].findLast(x => x > 10) → undefined. Antes: arr.slice().reverse().find(fn) — mas isso criava cópia e modificava índices. Agora não precisa reverter. Combinado com find: use findLast quando você sabe que o elemento relevante está mais próximo do final (histórico de ações, log de eventos).',
    tags: ['findLast', 'findLastIndex', 'ES2023', 'busca', 'array'],
  },
  {
    id: 'js-112',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são os novos métodos imutáveis de Array do ES2023? (`toSorted`, `toReversed`, `toSpliced`, `with`)',
    hints: ['Não mutam o original', 'Retornam nova cópia', 'Complementam sort/reverse/splice'],
    explanation: 'ES2023 adicionou versões imutáveis dos métodos mutantes: toSorted(fn): retorna nova cópia ordenada (sort muta). toReversed(): retorna nova cópia revertida (reverse muta). toSpliced(start, deleteCount, ...items): retorna nova cópia com modificação (splice muta). with(index, value): retorna nova cópia com elemento [index] substituído por value — muito útil! [1,2,3].with(1, 99) → [1,99,3]. Todos preservam o array original intacto — perfeito para uso com state do React e Redux.',
    tags: ['toSorted', 'toReversed', 'toSpliced', 'with', 'ES2023-imutavel'],
  },
  {
    id: 'js-113',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão de "error-first callback"? Como substituiu-se por Promises?',
    hints: ['Node.js convention', 'Primeiro argumento é o erro', 'util.promisify'],
    explanation: 'Error-first callback: convenção do Node.js onde o primeiro argumento do callback é sempre o erro (null se bem-sucedido), e os demais são os resultados. fs.readFile(path, (err, data) => { if (err) { handle(err); return; } process(data); }). Problema: callback hell com tratamento de erro repetido. Substituição por Promises: util.promisify(fn) converte callback error-first para Promise. const readFile = util.promisify(fs.readFile); const data = await readFile(path). Node.js moderno tem versões Promise nativas: fs.promises.readFile(path).',
    tags: ['error-first', 'callback', 'nodejs', 'promisify', 'convencao'],
  },
  {
    id: 'js-114',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Number.isNaN()` vs o global `isNaN()`? Por que o global é problemático?',
    hints: ['Global converte antes de verificar', 'Number.isNaN: sem coerção', 'isNaN("hello") = true'],
    explanation: 'Global isNaN(value): converte o argumento para número ANTES de verificar. isNaN("hello") → true (porque Number("hello") é NaN). isNaN(undefined) → true. isNaN("NaN") → true. Number.isNaN(value): sem coerção — retorna true APENAS se o valor JÁ é o valor especial NaN. Number.isNaN("hello") → false (é uma string, não NaN). Number.isNaN(NaN) → true. Number.isNaN(undefined) → false. Sempre use Number.isNaN() — é mais preciso. Verificar se um valor "não é um número": typeof value === "number" && Number.isNaN(value).',
    tags: ['NaN', 'Number.isNaN', 'isNaN', 'coercao', 'bug'],
  },
  {
    id: 'js-115',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Iterator Protocol e como implementar um Iterator customizado?',
    hints: ['next() retorna { value, done }', 'Symbol.iterator', 'Generators simplificam'],
    explanation: `Iterator Protocol: objeto com método next() que retorna { value, done }.
\`\`\`javascript
function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() { return this; }, // É iterável E iterator
    next() {
      if (start <= end) {
        const value = start;
        start += step;
        return { value, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}
// Uso com for...of:
for (const n of range(1, 10, 2)) console.log(n); // 1, 3, 5, 7, 9
// Spread: [...range(1, 5)] → [1,2,3,4,5]
// Equivalente com generator: function* range(start, end, step=1) { for(let i=start; i<=end; i+=step) yield i; }
\`\`\``,
    tags: ['iterator-protocol', 'next', 'Symbol.iterator', 'generator', 'customizado'],
  },
  {
    id: 'js-116',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `globalThis` em JavaScript? Por que é necessário?',
    hints: ['window em browser', 'global em Node.js', 'Compatível em todos os ambientes'],
    explanation: 'O objeto global tem nomes diferentes em cada ambiente: window (browser), global (Node.js), self (Web Worker). globalThis (ES2020) é a forma universal de referenciar o objeto global em qualquer ambiente. Útil para: código que roda em múltiplos ambientes (library, polyfills), detectar o ambiente: "window" in globalThis ? "browser" : "node". Antes: typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : self. Com globalThis: essa complexidade desaparece.',
    tags: ['globalThis', 'window', 'global', 'ES2020', 'ambientes'],
  },
  {
    id: 'js-117',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Private Methods em classes ES2022?',
    hints: ['#methodName', 'Não acessível fora da classe', 'Não herdado'],
    explanation: `Private methods (ES2022): métodos de classe prefixados com # — inacessíveis fora da classe.
\`\`\`javascript
class BankAccount {
  #balance = 0;
  #validateAmount(amount) { // Método privado
    if (amount <= 0) throw new Error("Invalid amount");
    return true;
  }
  deposit(amount) {
    this.#validateAmount(amount); // OK — chamado internamente
    this.#balance += amount;
  }
  get balance() { return this.#balance; }
}
const acc = new BankAccount();
acc.#validateAmount(100); // SyntaxError — inacessível externamente
acc.deposit(100); // OK
\`\`\`
Diferente de TypeScript private: #method é privacidade real em runtime.`,
    tags: ['private-methods', 'classes', 'ES2022', 'encapsulamento', 'privacidade'],
  },
  {
    id: 'js-118',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.from()` com função de mapeamento? Crie casos de uso práticos.',
    hints: ['Segundo argumento é map function', 'Cria e transforma simultaneamente', 'Alternativa para new Array().fill().map()'],
    explanation: `Array.from(iterable, mapFn) cria e transforma em uma passagem.
\`\`\`javascript
// Criar array de N elementos:
Array.from({ length: 5 }, (_, i) => i) // [0, 1, 2, 3, 4]
Array.from({ length: 10 }, (_, i) => i * i) // [0, 1, 4, 9, 16, ...]

// Deduplicar (Set → Array):
Array.from(new Set([1, 2, 2, 3, 3])) // [1, 2, 3]

// NodeList para Array:
Array.from(document.querySelectorAll("li"), el => el.textContent)

// String para array de caracteres:
Array.from("hello") // ["h", "e", "l", "l", "o"]
Array.from("hello", c => c.toUpperCase()) // ["H", "E", "L", "L", "O"]
\`\`\``,
    tags: ['Array.from', 'map-function', 'criacao', 'transformacao', 'util'],
  },
  {
    id: 'js-119',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Tagged Template Literals para internacionalização (i18n)?',
    hints: ['Parsing de strings interpoladas', 'Tradução com interpolação', 'Biblioteca intl-t'],
    explanation: `Tagged templates para i18n: permite tradução com interpolação de forma natural.
\`\`\`javascript
// Implementação simples de i18n com tagged template:
const translations = {
  "pt-BR": { "Hello, %s!": "Olá, %s!" },
  "en-US": { "Hello, %s!": "Hello, %s!" },
};
function t(strings, ...values) {
  const template = strings.reduce((acc, str, i) => acc + "%s" + str);
  const translated = translations[locale]?.[template] ?? template;
  return translated.split("%s").reduce((acc, part, i) => acc + (i < values.length ? values[i] : "") + part);
}
const name = "João";
console.log(t\`Hello, \${name}!\`); // "Olá, João!" em pt-BR
\`\`\``,
    tags: ['tagged-template', 'i18n', 'traducao', 'interpolacao', 'localizacao'],
  },
  {
    id: 'js-120',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `Array.reduceRight()`? Quando usar em vez de `reduce()`?',
    hints: ['Processa da direita para esquerda', 'Composição de funções', 'Aninhamento de arrays'],
    explanation: 'reduceRight(fn, initial): igual ao reduce mas processa do último elemento para o primeiro (direita para esquerda). Caso de uso principal: implementar compose (ao contrário de pipe). const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x). compose(f, g, h)(x) = f(g(h(x))). Também útil para: inverter ordem de operações sem reverter o array primeiro, parsear estruturas aninhadas de dentro para fora. Na maioria dos casos, reduce é suficiente.',
    tags: ['reduceRight', 'compose', 'direita-para-esquerda', 'funcional', 'array'],
  },
  {
    id: 'js-pred-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 1, 2', isCorrect: false },
      { id: 'b', text: '3, 3, 3', isCorrect: true },
      { id: 'c', text: '0, 0, 0', isCorrect: false },
      { id: 'd', text: 'undefined, undefined, undefined', isCorrect: false },
    ],
    hints: ['`var` não cria um novo binding por iteração do loop', 'Quando o callback executa, o loop já terminou'],
    explanation: '`var` é escopado à função (ou ao escopo global), não ao bloco do `for`. Existe uma única variável `i` compartilhada por todas as iterações. Como `setTimeout` agenda o callback para depois (mesmo com delay 0, ele entra na fila de macrotasks), o loop síncrono termina completamente antes de qualquer callback executar — nesse ponto `i` já vale 3. Os três callbacks leem a mesma variável `i`, agora igual a 3.',
    tags: ['closures', 'var', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'js-pred-002',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 1, 2', isCorrect: true },
      { id: 'b', text: '3, 3, 3', isCorrect: false },
      { id: 'c', text: '2, 2, 2', isCorrect: false },
      { id: 'd', text: 'A ordem é indefinida', isCorrect: false },
    ],
    hints: ['`let` é escopado ao bloco', 'Cada iteração do `for` com `let` cria um novo binding de `i`'],
    explanation: 'Diferente de `var`, `let` cria um novo binding de `i` para cada iteração do laço. Cada closure criada por `setTimeout` captura sua própria cópia de `i`, com o valor que tinha naquela iteração específica (0, 1 e 2). Esse comportamento é justamente o motivo pelo qual `let` resolveu um dos bugs mais comuns de closures em loops antes do ES6.',
    tags: ['closures', 'let', 'block-scope', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'js-pred-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(typeof null);
\`\`\``,
    options: [
      { id: 'a', text: "'null'", isCorrect: false },
      { id: 'b', text: "'object'", isCorrect: true },
      { id: 'c', text: "'undefined'", isCorrect: false },
      { id: 'd', text: 'Lança um erro', isCorrect: false },
    ],
    hints: ['É um bug histórico da linguagem, mantido por compatibilidade'],
    explanation: '`typeof null` retorna `"object"` — um bug conhecido desde a primeira versão do JavaScript (1995), relacionado à forma como valores eram representados internamente (null era representado com a mesma tag de tipo que objetos). Nunca foi corrigido porque corrigi-lo quebraria código existente na web. Para checar null de forma segura, use `valor === null`.',
    tags: ['typeof', 'null', 'quirks', 'output-prediction'],
  },
  {
    id: 'js-pred-004',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(typeof NaN);
\`\`\``,
    options: [
      { id: 'a', text: "'NaN'", isCorrect: false },
      { id: 'b', text: "'undefined'", isCorrect: false },
      { id: 'c', text: "'number'", isCorrect: true },
      { id: 'd', text: "'object'", isCorrect: false },
    ],
    hints: ['NaN significa "Not a Number", mas seu tipo continua sendo numérico'],
    explanation: 'Apesar do nome ("Not a Number"), `NaN` é um valor do tipo `number` — ele representa um resultado numérico inválido (como `0/0` ou `Number("abc")`), mas continua pertencendo ao tipo number. Curiosidade extra: `NaN` é o único valor em JavaScript que não é igual a si mesmo (`NaN === NaN` é `false`).',
    tags: ['typeof', 'NaN', 'output-prediction'],
  },
  {
    id: 'js-pred-005',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
let x;
console.log(typeof x, typeof y);
\`\`\``,
    options: [
      { id: 'a', text: "'undefined', 'undefined'", isCorrect: true },
      { id: 'b', text: 'Lança ReferenceError antes de imprimir qualquer coisa', isCorrect: false },
      { id: 'c', text: "'undefined', lança ReferenceError", isCorrect: false },
      { id: 'd', text: "'undefined', 'object'", isCorrect: false },
    ],
    hints: ['`y` nunca foi declarada em lugar nenhum', '`typeof` é uma das poucas operações seguras em variáveis não declaradas'],
    explanation: '`typeof` é especial: é o único operador que não lança erro ao ser aplicado a um identificador nunca declarado — ele simplesmente retorna `"undefined"`. Já `x`, declarada com `let` mas sem valor atribuído, também tem o valor `undefined`, então seu `typeof` também é `"undefined"`. Se você tentasse `console.log(y)` diretamente (sem `typeof`), aí sim teria um `ReferenceError`.',
    tags: ['typeof', 'undefined', 'reference-error', 'output-prediction'],
  },
  {
    id: 'js-pred-006',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log([] == false);
\`\`\``,
    options: [
      { id: 'a', text: 'false', isCorrect: false },
      { id: 'b', text: 'true', isCorrect: true },
      { id: 'c', text: 'Lança TypeError', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`==` faz coerção de tipos antes de comparar', 'Um array vazio é convertido para a string vazia ao ser coagido para primitivo'],
    explanation: 'Com `==`, o array é coagido para primitivo: `[].toString()` é `""`. Depois `false` é coagido para número (`0`) e `""` também é coagida para número (`0`). `0 == 0` é `true`. Esse é um dos exemplos clássicos usados para justificar "nunca use `==`, use `===`" — com `===`, `[] === false` seria `false` direto, sem coerção.',
    tags: ['coercao', 'loose-equality', 'array', 'output-prediction'],
  },
  {
    id: 'js-pred-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log('' == 0, '' === 0);
\`\`\``,
    options: [
      { id: 'a', text: 'true, true', isCorrect: false },
      { id: 'b', text: 'false, false', isCorrect: false },
      { id: 'c', text: 'true, false', isCorrect: true },
      { id: 'd', text: 'false, true', isCorrect: false },
    ],
    hints: ['`==` converte a string vazia para número antes de comparar', '`===` nunca faz coerção de tipo'],
    explanation: 'Com `==`, a string vazia `\'\'` é convertida para número, resultando em `0`, então `0 == 0` é `true`. Com `===` não há coerção: comparar um `string` com um `number` diretamente sempre resulta em `false`, independentemente dos valores.',
    tags: ['coercao', 'loose-equality', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'js-pred-008',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(null == undefined, null === undefined);
\`\`\``,
    options: [
      { id: 'a', text: 'true, true', isCorrect: false },
      { id: 'b', text: 'true, false', isCorrect: true },
      { id: 'c', text: 'false, false', isCorrect: false },
      { id: 'd', text: 'false, true', isCorrect: false },
    ],
    hints: ['A especificação trata `null == undefined` como um caso especial', '`===` também compara o tipo, e `null`/`undefined` são tipos primitivos distintos'],
    explanation: 'A especificação do JavaScript define uma regra especial: `null` é "loosely equal" a `undefined` (e somente a `undefined` — nenhum dos dois é `==` a qualquer outro valor falsy como `0` ou `""`). Por isso `null == undefined` é `true`. Já `===` compara também o tipo: `null` e `undefined` são tipos primitivos diferentes, então `null === undefined` é `false`.',
    tags: ['null', 'undefined', 'loose-equality', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'js-pred-009',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(NaN === NaN);
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['`NaN` é o único valor da linguagem que não é igual a si mesmo', 'Use `Number.isNaN()` ou `Object.is()` para checar NaN'],
    explanation: 'Por definição da especificação IEEE 754 (usada para números em JS), `NaN` nunca é igual a nada, nem a si mesmo. Para checar se um valor é `NaN` de forma confiável, use `Number.isNaN(valor)` ou `Object.is(valor, NaN)` — nunca `valor === NaN`.',
    tags: ['NaN', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'js-pred-010',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log([1, 2, 3] + [4, 5, 6]);
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 3, 4, 5, 6]', isCorrect: false },
      { id: 'b', text: "'1,2,34,5,6'", isCorrect: true },
      { id: 'c', text: 'NaN', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['O operador `+` não tem uma versão especial para arrays', 'Antes de somar, ambos os operandos são convertidos para primitivo'],
    explanation: 'O operador `+` não sabe concatenar arrays. Quando pelo menos um operando não é número, o JS converte ambos para primitivo via `toString()`. `[1,2,3].toString()` é `"1,2,3"` e `[4,5,6].toString()` é `"4,5,6"`. Depois disso, `+` vira concatenação de strings: `"1,2,3" + "4,5,6"` = `"1,2,34,5,6"`.',
    tags: ['coercao', 'array', 'operador-plus', 'output-prediction'],
  },
  {
    id: 'js-pred-011',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log({} + []);
\`\`\``,
    options: [
      { id: 'a', text: '0', isCorrect: false },
      { id: 'b', text: "'[object Object]'", isCorrect: true },
      { id: 'c', text: 'NaN', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['Como argumento de uma chamada de função, `{}` é sempre um valor de objeto, nunca um bloco', '`{}.toString()` retorna `"[object Object]"`'],
    explanation: 'Dentro de `console.log(...)`, `{}` é inequivocamente uma expressão de objeto literal (não há ambiguidade de bloco de código como haveria em uma instrução solta). Ambos operandos são convertidos para string: `{}.toString()` é `"[object Object]"` e `[].toString()` é `""`. O resultado da concatenação é `"[object Object]"`. (Curiosidade: `{} + []` como uma instrução solta no início de uma linha de script se comporta diferente, pois `{}` ali é interpretado como um bloco vazio.)',
    tags: ['coercao', 'object', 'operador-plus', 'output-prediction'],
  },
  {
    id: 'js-pred-012',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
function greet() {}
console.log(typeof greet);
\`\`\``,
    options: [
      { id: 'a', text: "'object'", isCorrect: false },
      { id: 'b', text: "'function'", isCorrect: true },
      { id: 'c', text: "'undefined'", isCorrect: false },
      { id: 'd', text: "'method'", isCorrect: false },
    ],
    hints: ['Funções são um tipo de primeira classe em JavaScript, com seu próprio retorno de `typeof`'],
    explanation: 'Embora funções sejam tecnicamente objetos por baixo dos panos (podem ter propriedades, por exemplo), `typeof` tem um valor de retorno dedicado para elas: `"function"`. Isso vale tanto para declarações de função quanto para arrow functions e funções criadas com `new Function()`.',
    tags: ['typeof', 'function', 'output-prediction'],
  },
  {
    id: 'js-pred-013',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const arr = [1, 2, 3];
console.log(typeof arr, Array.isArray(arr));
\`\`\``,
    options: [
      { id: 'a', text: "'array', true", isCorrect: false },
      { id: 'b', text: "'object', true", isCorrect: true },
      { id: 'c', text: "'object', false", isCorrect: false },
      { id: 'd', text: "'array', false", isCorrect: false },
    ],
    hints: ['Arrays não têm um tipo próprio no sistema de `typeof`', 'Para checar se algo é array, sempre use `Array.isArray()`, nunca `typeof`'],
    explanation: 'JavaScript não tem um tipo primitivo "array" — arrays são um tipo especial de objeto, então `typeof arr` retorna `"object"`. Para distinguir um array de um objeto comum, a forma correta é `Array.isArray(arr)`, que retorna `true` para arrays (incluindo arrays de outros realms/iframes, diferente de checar `arr.constructor === Array`).',
    tags: ['typeof', 'Array.isArray', 'array', 'output-prediction'],
  },
  {
    id: 'js-pred-014',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const obj = { a: 1, b: undefined, c: () => {}, d: 2 };
console.log(JSON.stringify(obj));
\`\`\``,
    options: [
      { id: 'a', text: '\'{"a":1,"b":undefined,"c":undefined,"d":2}\'', isCorrect: false },
      { id: 'b', text: '\'{"a":1,"d":2}\'', isCorrect: true },
      { id: 'c', text: '\'{"a":1,"b":null,"c":null,"d":2}\'', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['JSON não tem representação para `undefined` nem para funções', 'Propriedades cujo valor serializa para "nada" são omitidas, não viram `null`'],
    explanation: 'JSON não tem conceito de `undefined` ou de função. Ao serializar um objeto, `JSON.stringify` simplesmente omite propriedades cujo valor é `undefined` ou uma função — elas não aparecem no resultado (diferente de `null`, que é preservado como `null`). Por isso o resultado final é `\'{"a":1,"d":2}\'`.',
    tags: ['JSON.stringify', 'undefined', 'function', 'output-prediction'],
  },
  {
    id: 'js-pred-015',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(JSON.stringify(undefined));
console.log(typeof JSON.stringify(undefined));
\`\`\``,
    options: [
      { id: 'a', text: "'undefined' / 'string'", isCorrect: false },
      { id: 'b', text: 'undefined / \'undefined\'', isCorrect: true },
      { id: 'c', text: "'null' / 'string'", isCorrect: false },
      { id: 'd', text: 'Lança TypeError / nunca chega na segunda linha', isCorrect: false },
    ],
    hints: ['`JSON.stringify(undefined)` não retorna uma string — ele retorna o próprio valor `undefined`'],
    explanation: '`JSON.stringify(undefined)` é um caso especial: como `undefined` não tem representação em JSON, a função retorna o valor primitivo `undefined` (não a string `"undefined"`). `console.log(undefined)` imprime `undefined` sem aspas, e `typeof undefined` é `\'undefined\'`. Isso é diferente de dentro de um objeto/array (visto na questão anterior), onde a propriedade é simplesmente omitida.',
    tags: ['JSON.stringify', 'undefined', 'output-prediction'],
  },
  {
    id: 'js-pred-016',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const user = Object.freeze({ name: 'Ana', address: { city: 'SP' } });
user.name = 'Bia';
user.address.city = 'RJ';
console.log(user.name, user.address.city);
\`\`\``,
    options: [
      { id: 'a', text: "'Ana', 'SP'", isCorrect: false },
      { id: 'b', text: "'Bia', 'RJ'", isCorrect: false },
      { id: 'c', text: "'Ana', 'RJ'", isCorrect: true },
      { id: 'd', text: 'Lança TypeError na primeira atribuição', isCorrect: false },
    ],
    hints: ['`Object.freeze` só protege o primeiro nível do objeto', 'Em modo não-estrito, atribuições a propriedades congeladas falham silenciosamente (sem erro)'],
    explanation: '`Object.freeze` é **shallow** (superficial): impede adicionar, remover ou reatribuir propriedades diretas do objeto, mas não congela objetos aninhados dentro dele. `user.name = \'Bia\'` falha silenciosamente (em modo não-estrito) porque `name` está protegido — `user.name` continua `\'Ana\'`. Já `user.address` é apenas uma referência a outro objeto, que não está congelado: `user.address.city = \'RJ\'` funciona normalmente. Para congelar profundamente, seria necessário congelar recursivamente cada nível.',
    tags: ['Object.freeze', 'imutabilidade', 'shallow', 'output-prediction'],
  },
  {
    id: 'js-pred-017',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const arr = [1, 2, NaN];
console.log(arr.indexOf(NaN), arr.includes(NaN));
\`\`\``,
    options: [
      { id: 'a', text: '2, true', isCorrect: false },
      { id: 'b', text: '-1, false', isCorrect: false },
      { id: 'c', text: '2, false', isCorrect: false },
      { id: 'd', text: '-1, true', isCorrect: true },
    ],
    hints: ['`indexOf` usa `===` internamente (e `NaN === NaN` é `false`)', '`includes` usa o algoritmo "SameValueZero", que trata `NaN` como igual a `NaN`'],
    explanation: '`Array.prototype.indexOf` compara elementos usando igualdade estrita (`===`), e como `NaN === NaN` é `false`, `indexOf` nunca encontra um `NaN`, retornando `-1`. Já `Array.prototype.includes` usa o algoritmo SameValueZero, que trata `NaN` como igual a `NaN` — por isso `includes(NaN)` retorna `true` mesmo quando `indexOf(NaN)` retorna `-1`. Essa é uma das razões pelas quais `includes` foi adicionado: para resolver justamente essa limitação do `indexOf`.',
    tags: ['Array.includes', 'Array.indexOf', 'NaN', 'output-prediction'],
  },
  {
    id: 'js-pred-018',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const user = { name: 'Ana' };
console.log(user.getAge?.());
\`\`\``,
    options: [
      { id: 'a', text: 'Lança TypeError: getAge is not a function', isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: true },
      { id: 'c', text: 'null', isCorrect: false },
      { id: 'd', text: 'false', isCorrect: false },
    ],
    hints: ['`?.()` checa se a coisa à esquerda existe antes de tentar chamá-la como função'],
    explanation: 'Optional chaining (`?.`) também funciona em chamadas de função: `user.getAge?.()` primeiro verifica se `user.getAge` é `null`/`undefined`. Como `getAge` não existe em `user`, a expressão inteira "curto-circuita" e retorna `undefined` imediatamente, sem tentar invocar nada como função — evitando o `TypeError: getAge is not a function` que aconteceria com `user.getAge()` direto.',
    tags: ['optional-chaining', 'output-prediction'],
  },
  {
    id: 'js-pred-019',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const count = 0;
console.log(count ?? 10, count || 10);
\`\`\``,
    options: [
      { id: 'a', text: '10, 10', isCorrect: false },
      { id: 'b', text: '0, 0', isCorrect: false },
      { id: 'c', text: '0, 10', isCorrect: true },
      { id: 'd', text: '10, 0', isCorrect: false },
    ],
    hints: ['`??` só cai no valor padrão se o lado esquerdo for `null` ou `undefined`', '`||` cai no valor padrão para QUALQUER valor "falsy" (0, "", false, NaN...)'],
    explanation: '`??` (nullish coalescing) só usa o valor da direita quando o da esquerda é `null` ou `undefined`. Como `0` não é nem `null` nem `undefined`, `count ?? 10` retorna `0`. Já `||` usa o valor da direita para qualquer valor "falsy" — e `0` é falsy — então `count || 10` retorna `10`. Esse é exatamente o motivo pelo qual `??` foi adicionado: para evitar esse bug clássico ao lidar com valores numéricos que podem legitimamente ser `0`.',
    tags: ['nullish-coalescing', 'logical-or', 'falsy', 'output-prediction'],
  },
  {
    id: 'js-pred-020',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
function show({ a = 1, b = 2 } = {}) {
  console.log(a, b);
}
show({ a: null, b: undefined });
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: 'null, 2', isCorrect: true },
      { id: 'c', text: 'null, undefined', isCorrect: false },
      { id: 'd', text: '1, undefined', isCorrect: false },
    ],
    hints: ['Valores padrão de destructuring só entram em ação para `undefined`, nunca para `null`'],
    explanation: 'Valores padrão em destructuring (e em parâmetros de função) só são aplicados quando o valor correspondente é exatamente `undefined` — `null` é considerado um valor válido e não aciona o padrão. Por isso `a` recebe `null` (valor explícito, não substituído) e `b` recebe `2` (porque `undefined` aciona o padrão).',
    tags: ['destructuring', 'default-values', 'null', 'undefined', 'output-prediction'],
  },
  {
    id: 'js-pred-021',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const arr = [1, , 3];
console.log(arr.length, arr[1]);
\`\`\``,
    options: [
      { id: 'a', text: '2, undefined', isCorrect: false },
      { id: 'b', text: '3, undefined', isCorrect: true },
      { id: 'c', text: '3, null', isCorrect: false },
      { id: 'd', text: 'Lança SyntaxError', isCorrect: false },
    ],
    hints: ['Um array com "buracos" (sparse array) ainda conta a posição vazia no `.length`'],
    explanation: 'O literal `[1, , 3]` cria um array esparso (sparse array) com 3 posições: índice 0 = `1`, índice 1 = um "buraco" (slot vazio, não a mesma coisa que `undefined` explícito, mas que se comporta como `undefined` ao ser lido), índice 2 = `3`. `arr.length` é `3` e `arr[1]` retorna `undefined` ao ser acessado diretamente — embora métodos como `forEach`/`map` pulem posições vazias de forma diferente de um `undefined` real.',
    tags: ['sparse-array', 'array', 'output-prediction'],
  },
  {
    id: 'js-pred-022',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
const s = 'abc';
s[0] = 'z';
console.log(s);
\`\`\``,
    options: [
      { id: 'a', text: "'zbc'", isCorrect: false },
      { id: 'b', text: "'abc'", isCorrect: true },
      { id: 'c', text: 'Lança TypeError', isCorrect: false },
      { id: 'd', text: "'z'", isCorrect: false },
    ],
    hints: ['Strings são primitivos imutáveis em JavaScript'],
    explanation: 'Strings em JavaScript são imutáveis: nenhuma operação consegue alterar os caracteres de uma string existente. A atribuição `s[0] = \'z\'` é simplesmente ignorada silenciosamente (em modo não-estrito) porque índices de string não são propriedades graváveis. Para "modificar" uma string, é preciso criar uma nova, por exemplo: `s = \'z\' + s.slice(1)`.',
    tags: ['string', 'imutabilidade', 'output-prediction'],
  },
  {
    id: 'js-pred-023',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(0.1 + 0.2 === 0.3);
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Lança RangeError', isCorrect: false },
    ],
    hints: ['Números de ponto flutuante (IEEE 754) não representam todas as frações decimais com exatidão'],
    explanation: 'JavaScript usa números de ponto flutuante de precisão dupla (IEEE 754), que não conseguem representar exatamente certas frações decimais. `0.1 + 0.2` resulta em `0.30000000000000004`, não exatamente `0.3`. Para comparar floats com segurança, compare a diferença contra um epsilon: `Math.abs(a - b) < Number.EPSILON`.',
    tags: ['floating-point', 'precisao-numerica', 'output-prediction'],
  },
  {
    id: 'js-pred-024',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(parseInt('08'), parseInt('0x10'));
\`\`\``,
    options: [
      { id: 'a', text: '0, 16', isCorrect: false },
      { id: 'b', text: '8, 16', isCorrect: true },
      { id: 'c', text: '8, 10', isCorrect: false },
      { id: 'd', text: 'NaN, 16', isCorrect: false },
    ],
    hints: ['Motores modernos sempre assumem base 10 por padrão, exceto quando a string começa com "0x"'],
    explanation: 'Em engines modernas (ES5+), `parseInt` sem o segundo argumento de base assume base 10 por padrão — `parseInt(\'08\')` é `8`, não há mais o bug histórico de interpretar prefixo `0` como octal. A exceção é o prefixo `0x`/`0X`, que `parseInt` reconhece automaticamente como hexadecimal: `parseInt(\'0x10\')` é `16`. Boa prática: sempre passe a base explicitamente, ex: `parseInt(\'08\', 10)`.',
    tags: ['parseInt', 'output-prediction'],
  },
  {
    id: 'js-pred-025',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(parseInt('abc'), parseInt('12px'));
\`\`\``,
    options: [
      { id: 'a', text: 'NaN, NaN', isCorrect: false },
      { id: 'b', text: '0, 12', isCorrect: false },
      { id: 'c', text: 'NaN, 12', isCorrect: true },
      { id: 'd', text: 'NaN, NaN px', isCorrect: false },
    ],
    hints: ['`parseInt` lê dígitos da esquerda para a direita até encontrar um caractere inválido'],
    explanation: '`parseInt` analisa a string da esquerda para a direita e para no primeiro caractere que não forma um número válido. `\'abc\'` não começa com nenhum dígito, então o resultado é `NaN`. `\'12px\'` começa com dígitos válidos (`12`) e para ao encontrar `p`, retornando `12`. Isso é diferente de `Number(\'12px\')`, que retorna `NaN` porque `Number()` exige que a string inteira seja numérica.',
    tags: ['parseInt', 'NaN', 'output-prediction'],
  },
  {
    id: 'js-pred-026',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const obj = { x: 1 };
console.log(\`Valor: \${obj}\`);
\`\`\``,
    options: [
      { id: 'a', text: 'Valor: {"x":1}', isCorrect: false },
      { id: 'b', text: 'Valor: [object Object]', isCorrect: true },
      { id: 'c', text: 'Valor: undefined', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['Interpolação em template literal converte o valor para string com `toString()`, não com `JSON.stringify`'],
    explanation: 'Ao interpolar um valor dentro de `${...}` em um template literal, o JavaScript chama `String(valor)`, que por sua vez chama `toString()`. O `toString()` padrão de um objeto comum retorna `"[object Object]"` — ele não serializa as propriedades como `JSON.stringify` faria. Para ver o conteúdo do objeto, seria necessário usar `JSON.stringify(obj)` explicitamente.',
    tags: ['template-literal', 'toString', 'output-prediction'],
  },
  {
    id: 'js-pred-027',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log([10, 1, 2].sort());
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 10]', isCorrect: false },
      { id: 'b', text: '[1, 10, 2]', isCorrect: true },
      { id: 'c', text: '[10, 1, 2]', isCorrect: false },
      { id: 'd', text: '[2, 1, 10]', isCorrect: false },
    ],
    hints: ['Sem uma função de comparação, `sort()` converte cada elemento para string antes de comparar'],
    explanation: 'Sem uma função comparadora, `Array.prototype.sort()` converte cada elemento para string e ordena lexicograficamente (como em um dicionário). Comparando como texto: `"1"`, `"10"`, `"2"` — `"1"` vem antes de `"10"` (que começa com "1" e tem um caractere extra), e `"10"` vem antes de `"2"` porque `\'1\' < \'2\'` na comparação de caracteres. Resultado: `[1, 10, 2]`. Para ordenação numérica correta, use `sort((a, b) => a - b)`.',
    tags: ['Array.sort', 'output-prediction'],
  },
  {
    id: 'js-pred-028',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const it = gen();
console.log(it.next().value, it.next().value, it.next().value, it.next().value);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, undefined', isCorrect: true },
      { id: 'b', text: '1, 2, 3, 3', isCorrect: false },
      { id: 'c', text: '1, 2, undefined, undefined', isCorrect: false },
      { id: 'd', text: 'Lança erro na quarta chamada', isCorrect: false },
    ],
    hints: ['O `return` de um generator vira o `.value` da chamada que finaliza o iterador (com `done: true`)', 'Chamar `.next()` depois que o generator já terminou sempre retorna `{ value: undefined, done: true }`'],
    explanation: 'Cada `yield` pausa a função e entrega um valor: a primeira chamada de `.next()` retorna `{ value: 1, done: false }`, a segunda `{ value: 2, done: false }`. O `return 3` finaliza o generator entregando `{ value: 3, done: true }` na terceira chamada. Qualquer chamada de `.next()` depois disso (o generator já terminou) retorna `{ value: undefined, done: true }` para sempre.',
    tags: ['generators', 'yield', 'iterators', 'output-prediction'],
  },
  {
    id: 'js-pred-029',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log(Symbol('id') === Symbol('id'));
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: "'id'", isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['A string passada para `Symbol()` é só uma descrição para debug, não um identificador de igualdade'],
    explanation: 'Cada chamada de `Symbol()` cria um valor primitivo completamente único, mesmo que a descrição passada como argumento seja idêntica. A string `\'id\'` serve apenas para facilitar debug (aparece em `symbol.toString()` ou no console), mas não afeta a identidade do símbolo. Por isso dois `Symbol(\'id\')` distintos nunca são iguais — essa é justamente a utilidade de Symbol: criar chaves de objeto garantidamente únicas e sem colisão.',
    tags: ['Symbol', 'output-prediction'],
  },
  {
    id: 'js-pred-030',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const nested = [1, [2, [3, [4, 5]]]];
console.log(nested.flat(Infinity));
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, [3, [4, 5]]]', isCorrect: false },
      { id: 'b', text: '[1, 2, 3, 4, 5]', isCorrect: true },
      { id: 'c', text: '[1, [2, [3, [4, 5]]]]', isCorrect: false },
      { id: 'd', text: 'Lança RangeError', isCorrect: false },
    ],
    hints: ['O argumento de `flat()` define quantos níveis de profundidade achatar', '`Infinity` achata todos os níveis, não importa quão aninhado'],
    explanation: '`Array.prototype.flat(depth)` achata o array até `depth` níveis de profundidade (o padrão sem argumento é `1`). Passar `Infinity` instrui o método a achatar todos os níveis de aninhamento, não importa quão profundo — resultando em um array completamente plano: `[1, 2, 3, 4, 5]`.',
    tags: ['Array.flat', 'output-prediction'],
  },
  {
    id: 'js-pred-031',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA(), counterA(), counterB());
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 2, 1', isCorrect: true },
      { id: 'c', text: '1, 1, 1', isCorrect: false },
      { id: 'd', text: '0, 1, 0', isCorrect: false },
    ],
    hints: ['Cada chamada de `makeCounter()` cria um novo escopo léxico, com sua própria variável `count`'],
    explanation: 'Cada chamada a `makeCounter()` cria um escopo completamente novo, com sua própria variável `count` independente. `counterA` e `counterB` são closures separadas, cada uma fechando sobre sua própria cópia de `count`. Por isso `counterA()` chamado duas vezes retorna `1` e depois `2`, enquanto `counterB()`, chamado por uma closure diferente, começa do zero e retorna `1`.',
    tags: ['closures', 'factory-function', 'output-prediction'],
  },
  {
    id: 'js-pred-032',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
const key = 'role';
const user = { name: 'Ana', [key]: 'admin' };
console.log(user.role);
\`\`\``,
    options: [
      { id: 'a', text: "'key'", isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: false },
      { id: 'c', text: "'admin'", isCorrect: true },
      { id: 'd', text: 'Lança SyntaxError', isCorrect: false },
    ],
    hints: ['`[key]` dentro de um objeto literal usa o valor da variável `key` como nome da propriedade'],
    explanation: 'A sintaxe `[key]: valor` dentro de um objeto literal (computed property name) usa o **valor** da variável `key` (a string `\'role\'`) como nome da propriedade, não o nome literal "key". Como `key` vale `\'role\'`, o objeto resultante tem a propriedade `role: \'admin\'`, então `user.role` é `\'admin\'`.',
    tags: ['computed-property', 'object-literal', 'output-prediction'],
  },
  {
    id: 'js-pred-033',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: '2, 1', isCorrect: true },
      { id: 'c', text: '2, 2', isCorrect: false },
      { id: 'd', text: 'Lança SyntaxError', isCorrect: false },
    ],
    hints: ['O lado direito `[b, a]` é avaliado completamente (criando um novo array) antes de qualquer atribuição acontecer'],
    explanation: 'Destructuring assignment permite o clássico "swap sem variável temporária". O lado direito `[b, a]` é avaliado primeiro, criando um array temporário `[2, 1]` com os valores atuais. Só depois esse array é desestruturado nas variáveis do lado esquerdo: `a` recebe `2` e `b` recebe `1`.',
    tags: ['destructuring', 'swap', 'output-prediction'],
  },
  {
    id: 'js-pred-034',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
function add(a, b = a + 1) {
  return b;
}
console.log(add(1), add(5));
\`\`\``,
    options: [
      { id: 'a', text: '2, 6', isCorrect: true },
      { id: 'b', text: '1, 1', isCorrect: false },
      { id: 'c', text: 'undefined, undefined', isCorrect: false },
      { id: 'd', text: 'Lança ReferenceError', isCorrect: false },
    ],
    hints: ['Valores padrão de parâmetros são reavaliados em toda chamada da função, não memoizados', 'Um parâmetro padrão pode referenciar parâmetros anteriores na lista'],
    explanation: 'Valores padrão de parâmetros são expressões avaliadas a cada chamada da função, no momento em que a chamada acontece — e podem referenciar parâmetros declarados antes deles na lista. Em `add(1)`, `b` não foi passado, então `b = a + 1 = 1 + 1 = 2`. Em `add(5)`, novamente `b` não foi passado, então `b = 5 + 1 = 6`. O valor padrão nunca é "fixado" em tempo de definição da função.',
    tags: ['default-parameters', 'output-prediction'],
  },
  {
    id: 'js-pred-035',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
function test(x) {
  switch (x) {
    case 1:
    case 2:
      console.log('baixo');
      break;
    case 3:
      console.log('alto');
      break;
    default:
      console.log('outro');
  }
}
test(2);
\`\`\``,
    options: [
      { id: 'a', text: "'outro'", isCorrect: false },
      { id: 'b', text: "'baixo'", isCorrect: true },
      { id: 'c', text: "'alto'", isCorrect: false },
      { id: 'd', text: "'baixo' e depois 'alto'", isCorrect: false },
    ],
    hints: ['Um `case` sem `break` "cai" (fallthrough) para o próximo `case`, executando seu código', 'O `case 1` está vazio e cai direto no `case 2`, que é onde o `console.log` acontece'],
    explanation: 'Em um `switch`, quando um `case` não tem `break`, a execução "cai" (fallthrough) para o próximo `case`. Aqui, `case 1` está vazio e simplesmente cai para `case 2`. Com `x = 2`, o `switch` casa diretamente com `case 2`, executa `console.log(\'baixo\')` e encontra o `break`, parando ali — sem chegar em `case 3` ou no `default`.',
    tags: ['switch', 'fallthrough', 'output-prediction'],
  },
  {
    id: 'js-pred-036',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    text: `O que este código imprime no console?

\`\`\`javascript
function createFib() {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    return (cache[n] = fib(n - 1) + fib(n - 2));
  };
}
const fib = createFib();
console.log(fib(5));
\`\`\``,
    options: [
      { id: 'a', text: '5', isCorrect: true },
      { id: 'b', text: '8', isCorrect: false },
      { id: 'c', text: '3', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['A sequência de Fibonacci começa 0, 1, 1, 2, 3, 5...', 'O `cache` no closure memoiza resultados já calculados, mas não muda o valor final'],
    explanation: 'A função usa memoização via closure: `cache` persiste entre chamadas recursivas de `fib`, evitando recálculo de subproblemas já resolvidos — mas isso é uma otimização de performance, não altera o resultado matemático. A sequência de Fibonacci (0-indexada) é 0, 1, 1, 2, 3, 5, 8... Então `fib(5)` (o 6º termo, índice 5) é `5`: `fib(5) = fib(4) + fib(3) = 3 + 2 = 5`.',
    tags: ['closures', 'memoizacao', 'recursao', 'output-prediction'],
  },
  {
    id: 'js-pred-037',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const account = {
  _balance: 100,
  get balance() {
    return \`R$ \${this._balance}\`;
  },
  set balance(value) {
    this._balance = value;
  },
};
console.log(account.balance);
account.balance = 250;
console.log(account.balance);
\`\`\``,
    options: [
      { id: 'a', text: 'R$ 100 / R$ 250', isCorrect: true },
      { id: 'b', text: 'function / function', isCorrect: false },
      { id: 'c', text: 'R$ 100 / 250', isCorrect: false },
      { id: 'd', text: 'Lança TypeError ao atribuir', isCorrect: false },
    ],
    hints: ['`get`/`set` fazem `account.balance` se comportar como uma propriedade comum, não como um método', 'Acessar ou atribuir `account.balance` (sem parênteses) é o que dispara o getter/setter'],
    explanation: 'Getters e setters fazem uma propriedade se comportar de forma especial ao ser lida ou atribuída, sem precisar de sintaxe de chamada de função. `console.log(account.balance)` invoca o getter, que formata `_balance` como string: `\'R$ 100\'`. A atribuição `account.balance = 250` invoca o setter, que atualiza `_balance` para `250`. O próximo acesso ao getter reflete essa mudança: `\'R$ 250\'`.',
    tags: ['getters', 'setters', 'output-prediction'],
  },
  {
    id: 'js-pred-038',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
let x = (1, 2, 3);
console.log(x);
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '[1, 2, 3]', isCorrect: false },
      { id: 'c', text: '3', isCorrect: true },
      { id: 'd', text: 'Lança SyntaxError', isCorrect: false },
    ],
    hints: ['A vírgula aqui é o operador vírgula, não um separador de lista', 'O operador vírgula avalia cada expressão e retorna o valor da última'],
    explanation: 'Dentro de parênteses como expressão, a vírgula é o operador vírgula (comma operator): ele avalia cada uma das expressões da esquerda para a direita e descarta todos os resultados, exceto o último. `(1, 2, 3)` avalia `1`, depois `2`, depois `3`, e a expressão inteira retorna `3` — que é o valor atribuído a `x`. É um operador raramente usado intencionalmente, mas aparece em código minificado e em alguns padrões de loop `for`.',
    tags: ['comma-operator', 'output-prediction'],
  },
  {
    id: 'js-pred-039',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const arr = [3, 1, 2];
const sorted = arr.sort();
console.log(arr === sorted, arr);
\`\`\``,
    options: [
      { id: 'a', text: 'false, [1, 2, 3]', isCorrect: false },
      { id: 'b', text: 'true, [1, 2, 3]', isCorrect: true },
      { id: 'c', text: 'true, [3, 1, 2]', isCorrect: false },
      { id: 'd', text: 'false, [3, 1, 2]', isCorrect: false },
    ],
    hints: ['`sort()` ordena o array original *no lugar* (in-place)', 'Além de mutar o array original, `sort()` também retorna a mesma referência'],
    explanation: '`Array.prototype.sort()` é um método mutável: ele reordena os elementos do array original "no lugar" (in-place) e retorna a própria referência ao mesmo array, não uma cópia. Por isso `arr === sorted` é `true` (mesma referência) e o array `arr` original já aparece ordenado: `[1, 2, 3]`. Para não mutar o original, seria necessário copiar antes: `[...arr].sort()`.',
    tags: ['Array.sort', 'mutabilidade', 'referencia', 'output-prediction'],
  },
  {
    id: 'js-pred-040',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.a = 99;
copy.nested.b = 99;
console.log(original.a, original.nested.b);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: '99, 99', isCorrect: false },
      { id: 'c', text: '1, 99', isCorrect: true },
      { id: 'd', text: '99, 2', isCorrect: false },
    ],
    hints: ['Spread (`...`) faz uma cópia rasa (shallow copy), só do primeiro nível', 'Propriedades que são objetos continuam sendo a MESMA referência na cópia'],
    explanation: 'O spread operator (`{ ...original }`) cria uma cópia rasa: ele copia os valores das propriedades de primeiro nível, mas se uma propriedade é um objeto (como `nested`), apenas a *referência* é copiada — `copy.nested` e `original.nested` apontam para o mesmo objeto. Por isso `copy.a = 99` não afeta `original.a` (que continua `1`, pois `a` é um primitivo independente), mas `copy.nested.b = 99` afeta `original.nested.b` também, já que ambos compartilham o mesmo objeto aninhado.',
    tags: ['spread', 'shallow-copy', 'referencia', 'output-prediction'],
  },
  {
    id: 'js-async-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
\`\`\``,
    options: [
      { id: 'a', text: 'A, B, C, D', isCorrect: false },
      { id: 'b', text: 'A, D, C, B', isCorrect: true },
      { id: 'c', text: 'A, D, B, C', isCorrect: false },
      { id: 'd', text: 'A, C, D, B', isCorrect: false },
    ],
    hints: ['Código síncrono sempre executa por completo antes de qualquer fila ser processada', 'Microtasks (promises) são processadas antes de macrotasks (setTimeout)'],
    explanation: 'Primeiro todo o código síncrono executa: `A` e `D`. Depois disso, o event loop processa a fila de microtasks (promises) antes da fila de macrotasks (timers): `C` é impresso. Só então, com a fila de microtasks vazia, o event loop processa a próxima macrotask: `B`. Ordem final: A, D, C, B.',
    tags: ['event-loop', 'microtask', 'macrotask', 'setTimeout', 'Promise', 'output-prediction'],
  },
  {
    id: 'js-async-002',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function getData() {
  console.log('1');
  await null;
  console.log('2');
}
console.log('start');
getData();
console.log('end');
\`\`\``,
    options: [
      { id: 'a', text: 'start, 1, 2, end', isCorrect: false },
      { id: 'b', text: 'start, 1, end, 2', isCorrect: true },
      { id: 'c', text: 'start, end, 1, 2', isCorrect: false },
      { id: 'd', text: '1, start, end, 2', isCorrect: false },
    ],
    hints: ['Tudo antes do primeiro `await` em uma função async roda de forma síncrona, no momento da chamada', 'Depois do `await`, o resto da função vira uma continuação agendada como microtask'],
    explanation: 'Quando `getData()` é chamada, ela executa sincronamente até o primeiro `await`: imprime `1`. Ao encontrar `await null`, a função pausa e devolve o controle para quem a chamou — por isso `end` é impresso antes de `2`. A continuação depois do `await` (`console.log(\'2\')`) é agendada como uma microtask, que só executa depois que todo o código síncrono restante (`end`) termina.',
    tags: ['async-await', 'event-loop', 'microtask', 'output-prediction'],
  },
  {
    id: 'js-async-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise1'));
Promise.resolve().then(() => console.log('promise2'));
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: 'sync, timeout, promise1, promise2', isCorrect: false },
      { id: 'b', text: 'sync, promise1, promise2, timeout', isCorrect: true },
      { id: 'c', text: 'timeout, sync, promise1, promise2', isCorrect: false },
      { id: 'd', text: 'sync, promise2, promise1, timeout', isCorrect: false },
    ],
    hints: ['Toda a fila de microtasks é esvaziada antes da próxima macrotask rodar'],
    explanation: 'O código síncrono roda primeiro: `sync`. Depois, o event loop esvazia completamente a fila de microtasks antes de processar qualquer macrotask — as duas promises resolvidas são processadas na ordem em que foram enfileiradas: `promise1`, depois `promise2`. Só então a macrotask do `setTimeout` executa: `timeout`.',
    tags: ['event-loop', 'microtask', 'macrotask', 'output-prediction'],
  },
  {
    id: 'js-async-004',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function f() {
  return 42;
}
console.log(f());
\`\`\``,
    options: [
      { id: 'a', text: '42', isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: false },
      { id: 'c', text: 'Um objeto Promise (pendente/resolvida com 42)', isCorrect: true },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['Toda função `async` sempre retorna uma Promise, nunca o valor "puro" do `return`', 'Para obter `42`, seria necessário `await f()` ou `f().then(...)`'],
    explanation: 'Funções declaradas com `async` sempre retornam uma `Promise`, independente do que o `return` contenha. `f()` retorna uma Promise que será resolvida com `42` — mas `console.log(f())` imprime o próprio objeto Promise (algo como `Promise {42}` ou `Promise {<pending>}`, dependendo do timing de inspeção), não o valor `42` diretamente. Para acessar o valor resolvido, é preciso usar `await f()` ou `f().then(valor => ...)`.',
    tags: ['async-await', 'Promise', 'output-prediction'],
  },
  {
    id: 'js-async-005',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function run() {
  const arr = [1, 2, 3];
  arr.forEach(async (n) => {
    await Promise.resolve();
    console.log(n);
  });
  console.log('done');
}
run();
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, done', isCorrect: false },
      { id: 'b', text: 'done, 1, 2, 3', isCorrect: true },
      { id: 'c', text: 'done', isCorrect: false },
      { id: 'd', text: '1, done, 2, done, 3, done', isCorrect: false },
    ],
    hints: ['`Array.prototype.forEach` nunca espera (`await`) seus callbacks, mesmo que eles sejam `async`', 'Cada callback async roda até o primeiro `await` de forma síncrona, depois agenda o resto como microtask'],
    explanation: 'Esse é um erro clássico: `forEach` não tem suporte para `async/await` — ele chama cada callback e ignora completamente a Promise que ele retorna, sem esperar nada. Cada callback `async (n) => {...}` roda sincronamente até o `await Promise.resolve()`, aí pausa e agenda sua continuação como microtask. O `forEach` termina seu loop sem nunca esperar essas continuações, então `console.log(\'done\')` executa em seguida, de forma síncrona. Só depois disso, as três microtasks agendadas executam em ordem: `1`, `2`, `3`. Para esperar de fato, seria necessário um `for...of` com `await` dentro, ou `Promise.all(arr.map(...))`.',
    tags: ['async-await', 'forEach', 'microtask', 'armadilha', 'output-prediction'],
  },
  {
    id: 'js-async-006',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function fail() {
  throw new Error('oops');
}
async function run() {
  try {
    await fail();
  } catch (e) {
    console.log('caught:', e.message);
  }
}
run();
\`\`\``,
    options: [
      { id: 'a', text: 'Lança um erro não tratado, encerrando o script', isCorrect: false },
      { id: 'b', text: "'caught:', 'oops'", isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: "'oops'", isCorrect: false },
    ],
    hints: ['Um `throw` dentro de uma função `async` rejeita a Promise que ela retorna', '`await` numa Promise rejeitada relança o erro no local do `await`, capturável por `try/catch`'],
    explanation: 'Quando uma função `async` lança um erro com `throw`, isso não quebra o programa imediatamente — a Promise retornada por essa função é automaticamente rejeitada com aquele erro. Como `fail()` é chamada com `await` dentro de um bloco `try`, a rejeição é convertida de volta em uma exceção síncrona naquele ponto, que o `catch` consegue capturar normalmente. Resultado: `caught: oops`.',
    tags: ['async-await', 'try-catch', 'error-handling', 'output-prediction'],
  },
  {
    id: 'js-async-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
Promise.resolve(1)
  .then((v) => v + 1)
  .then((v) => {
    throw new Error('fail');
  })
  .catch((e) => 'recovered')
  .then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: "Lança 'fail' sem tratamento", isCorrect: false },
      { id: 'b', text: "'recovered'", isCorrect: true },
      { id: 'c', text: '2', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['Um `.catch()` que não relança o erro "recupera" a cadeia de promises, voltando ao estado resolvido', 'O valor de retorno do `.catch()` se torna o valor resolvido para o próximo `.then()`'],
    explanation: 'A cadeia segue assim: `1` → `+1` → `2`. O próximo `.then` lança um erro, fazendo a Promise entrar em estado rejeitado. O `.catch` intercepta essa rejeição e **retorna** a string `\'recovered\'` (sem relançar o erro) — isso volta a cadeia para o estado resolvido, com `\'recovered\'` como valor. O `.then` final recebe esse valor e imprime `recovered`.',
    tags: ['Promise', 'chaining', 'catch', 'error-recovery', 'output-prediction'],
  },
  {
    id: 'js-async-008',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    text: `O que este código imprime no console?

\`\`\`javascript
Promise.resolve().then(() => {
  console.log('1');
  Promise.resolve().then(() => console.log('2'));
});
Promise.resolve().then(() => console.log('3'));
console.log('4');
\`\`\``,
    options: [
      { id: 'a', text: '4, 1, 2, 3', isCorrect: false },
      { id: 'b', text: '4, 1, 3, 2', isCorrect: true },
      { id: 'c', text: '1, 2, 3, 4', isCorrect: false },
      { id: 'd', text: '4, 3, 1, 2', isCorrect: false },
    ],
    hints: ['Uma microtask agendada *dentro* de outra microtask vai para o FINAL da fila atual, não fura a fila'],
    explanation: 'Primeiro o código síncrono roda: `4`. A fila de microtasks já tem dois callbacks agendados, na ordem em que foram criados: [callback que imprime `1`, callback que imprime `3`]. Ao processar o primeiro, ele imprime `1` e agenda um NOVO callback (que imprime `2`) — esse novo callback vai para o final da fila, depois do callback que imprime `3`. Fila agora: [callback `3`, callback `2`]. Processando em ordem: `3`, depois `2`. Resultado final: 4, 1, 3, 2.',
    tags: ['event-loop', 'microtask', 'Promise', 'output-prediction'],
  },
  {
    id: 'js-async-009',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
(async () => {
  console.log('start');
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log('end');
})();
console.log('outside');
\`\`\``,
    options: [
      { id: 'a', text: 'start, end, outside', isCorrect: false },
      { id: 'b', text: 'start, outside, end', isCorrect: true },
      { id: 'c', text: 'outside, start, end', isCorrect: false },
      { id: 'd', text: 'start, outside', isCorrect: false },
    ],
    hints: ['A IIFE async roda sincronamente até o `await`', 'O `await` aqui depende de um `setTimeout`, que é uma macrotask — mais lenta que o código síncrono restante'],
    explanation: 'A IIFE async roda imediatamente e de forma síncrona até o `await`: imprime `start`. O `await` está esperando uma Promise que só resolve quando o `setTimeout` (uma macrotask) disparar — então a execução volta para o código de fora, que imprime `outside` de forma síncrona. Só depois disso o event loop processa a macrotask do `setTimeout`, resolvendo a Promise e retomando a função async, que imprime `end`.',
    tags: ['async-await', 'IIFE', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'js-async-010',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console (eventualmente)?

\`\`\`javascript
const slow = new Promise((res) => setTimeout(() => res('slow'), 100));
const fast = new Promise((res) => setTimeout(() => res('fast'), 10));
Promise.race([slow, fast]).then(console.log);
\`\`\``,
    options: [
      { id: 'a', text: "'slow'", isCorrect: false },
      { id: 'b', text: "'fast'", isCorrect: true },
      { id: 'c', text: "['slow', 'fast']", isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['`Promise.race` resolve (ou rejeita) com o resultado da PRIMEIRA promise do array a settle'],
    explanation: '`Promise.race` retorna uma Promise que segue o destino da primeira promise do array a resolver ou rejeitar, ignorando todas as outras depois disso. Como `fast` resolve em 10ms (mais rápido que `slow`, que leva 100ms), o `.then` recebe `\'fast\'`.',
    tags: ['Promise.race', 'output-prediction'],
  },
  {
    id: 'js-async-011',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function run() {
  const result = await 42;
  console.log(result);
}
run();
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: '42, sync', isCorrect: false },
      { id: 'b', text: 'sync, 42', isCorrect: true },
      { id: 'c', text: '42', isCorrect: false },
      { id: 'd', text: 'Lança TypeError: 42 não é uma Promise', isCorrect: false },
    ],
    hints: ['`await` funciona em qualquer valor, não apenas em Promises', 'Mesmo em um valor não-Promise, `await` ainda pausa a função e cede o controle por pelo menos um ciclo de microtask'],
    explanation: '`await` aceita qualquer valor — se não for uma Promise (ou thenable), ele é automaticamente envolvido em `Promise.resolve(valor)`. Isso significa que mesmo `await 42` faz a função pausar e ceder o controle de volta ao chamador por um ciclo de microtask, antes de continuar. Por isso `sync` (código fora da função async) é impresso antes de `42` (a continuação da função, agendada como microtask).',
    tags: ['async-await', 'microtask', 'output-prediction'],
  },
  {
    id: 'js-async-012',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function getValue() {
  return 10;
}
getValue().then((v) => console.log(v * 2));
console.log('called');
\`\`\``,
    options: [
      { id: 'a', text: '20, called', isCorrect: false },
      { id: 'b', text: 'called, 20', isCorrect: true },
      { id: 'c', text: '10, called, 20', isCorrect: false },
      { id: 'd', text: 'called', isCorrect: false },
    ],
    hints: ['O callback de `.then()` sempre executa de forma assíncrona, mesmo que o valor já esteja disponível'],
    explanation: 'Funções `async`/`.then()` sempre adiam a execução do callback para depois do código síncrono atual, via fila de microtasks — não importa quão rápido o valor esteja disponível. Por isso `console.log(\'called\')`, que é síncrono, executa primeiro. Só depois disso o callback do `.then` executa, imprimindo `20`.',
    tags: ['async-await', 'Promise.then', 'output-prediction'],
  },
  {
    id: 'js-async-013',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
Promise.resolve(Promise.resolve(5)).then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: 'Promise { 5 }', isCorrect: false },
      { id: 'b', text: '5', isCorrect: true },
      { id: 'c', text: 'Promise { Promise { 5 } }', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`Promise.resolve()` nunca cria uma "promise de promise" — promises aninhadas são sempre achatadas (flattened) automaticamente'],
    explanation: 'Promises nunca ficam aninhadas em JavaScript: se você resolve uma Promise com outra Promise (ou qualquer thenable), o resultado é automaticamente "achatado" — a Promise externa adota o estado e o valor final da interna. `Promise.resolve(Promise.resolve(5))` é equivalente a apenas `Promise.resolve(5)`, então o `.then` recebe diretamente `5`, nunca um objeto Promise aninhado.',
    tags: ['Promise', 'flattening', 'output-prediction'],
  },
  {
    id: 'js-async-014',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
Promise.resolve(1)
  .then((v) => Promise.resolve(v + 1))
  .then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: 'Promise { 2 }', isCorrect: false },
      { id: 'b', text: '2', isCorrect: true },
      { id: 'c', text: '1', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['Quando um `.then()` retorna uma Promise, a cadeia espera essa Promise resolver antes de seguir para o próximo `.then()`'],
    explanation: 'Quando o callback de um `.then()` retorna uma Promise (em vez de um valor simples), a cadeia automaticamente "espera" essa Promise resolver, e passa o valor resolvido (não a Promise em si) para o próximo `.then()`. Aqui, o primeiro `.then` retorna `Promise.resolve(2)`; a cadeia espera, desembrulha o valor, e o próximo `.then` recebe `2` diretamente.',
    tags: ['Promise', 'chaining', 'output-prediction'],
  },
  {
    id: 'js-async-015',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
Promise.resolve()
  .then(() => {
    throw new Error('boom');
  })
  .then(() => console.log('skipped'))
  .catch((e) => console.log('caught:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "'skipped'", isCorrect: false },
      { id: 'b', text: "'caught:', 'boom'", isCorrect: true },
      { id: 'c', text: "'skipped' e depois 'caught: boom'", isCorrect: false },
      { id: 'd', text: 'Lança um erro não tratado', isCorrect: false },
    ],
    hints: ['Quando uma Promise entra em estado rejeitado, todos os `.then()` seguintes são pulados até encontrar um `.catch()` (ou um `.then` com handler de erro)'],
    explanation: 'Quando o primeiro `.then` lança um erro, a Promise entra em estado rejeitado. Esse estado de rejeição "atravessa" qualquer `.then()` que só tenha handler de sucesso (sem segundo argumento) — por isso o `.then(() => console.log(\'skipped\'))` é completamente ignorado, sem executar. A rejeição só é tratada no primeiro `.catch()` encontrado na cadeia, que imprime `caught: boom`.',
    tags: ['Promise', 'chaining', 'catch', 'output-prediction'],
  },
  {
    id: 'js-async-016',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function* gen() {
  yield 1;
  yield 2;
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: true },
      { id: 'b', text: 'Promise {1}, Promise {2}', isCorrect: false },
      { id: 'c', text: '[1, 2]', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['`for await...of` desembrulha automaticamente cada valor produzido por um async generator', 'Cada `yield` de um async generator é tratado como uma Promise resolvida internamente'],
    explanation: 'Um async generator (`async function*`) produz valores que `for await...of` consome automaticamente, desembrulhando qualquer Promise envolvida — o código que itera nunca vê a Promise diretamente, apenas o valor final. Por isso o laço imprime `1` e depois `2`, exatamente como um generator síncrono comum imprimiria, apenas com pausas assíncronas entre cada valor.',
    tags: ['async-generators', 'for-await-of', 'output-prediction'],
  },
  {
    id: 'js-async-017',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console (eventualmente)?

\`\`\`javascript
const p1 = Promise.reject('error1');
const p2 = new Promise((res) => setTimeout(() => res('success'), 10));
Promise.any([p1, p2])
  .then(console.log)
  .catch(console.log);
\`\`\``,
    options: [
      { id: 'a', text: "'error1'", isCorrect: false },
      { id: 'b', text: "'success'", isCorrect: true },
      { id: 'c', text: 'AggregateError: All promises were rejected', isCorrect: false },
      { id: 'd', text: "['error1', 'success']", isCorrect: false },
    ],
    hints: ['`Promise.any` ignora rejeições individuais, desde que pelo menos uma promise do array seja cumprida (fulfilled)', 'Só rejeita (com um `AggregateError`) se TODAS as promises rejeitarem'],
    explanation: '`Promise.any` resolve com o valor da primeira promise a ser cumprida (fulfilled), ignorando rejeições individuais ao longo do caminho — ela só rejeita se *todas* as promises do array rejeitarem (nesse caso, com um `AggregateError`). Aqui, `p1` rejeita imediatamente, mas `Promise.any` continua esperando; `p2` eventualmente resolve com `\'success\'`, que é o valor final entregue ao `.then`.',
    tags: ['Promise.any', 'output-prediction'],
  },
  {
    id: 'js-async-018',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
setTimeout(() => console.log('timeout'), 0);
queueMicrotask(() => console.log('microtask'));
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: 'sync, timeout, microtask', isCorrect: false },
      { id: 'b', text: 'sync, microtask, timeout', isCorrect: true },
      { id: 'c', text: 'timeout, microtask, sync', isCorrect: false },
      { id: 'd', text: 'microtask, sync, timeout', isCorrect: false },
    ],
    hints: ['`queueMicrotask` agenda diretamente na fila de microtasks, igual a um `.then()` de Promise'],
    explanation: '`queueMicrotask` agenda um callback na fila de microtasks, com a mesma prioridade que callbacks de Promise — e microtasks sempre são processadas antes da próxima macrotask (como `setTimeout`). Ordem: código síncrono (`sync`), depois a microtask (`microtask`), e só então a macrotask do timer (`timeout`).',
    tags: ['queueMicrotask', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'js-async-019',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function f() {
  return Promise.reject('fail');
}
f().catch((e) => console.log('caught:', e));
\`\`\``,
    options: [
      { id: 'a', text: "'caught:', 'fail'", isCorrect: true },
      { id: 'b', text: 'Lança um erro não tratado', isCorrect: false },
      { id: 'c', text: "Promise { 'fail' }", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['Retornar uma Promise rejeitada de dentro de uma função `async` resulta numa Promise externa também rejeitada (achatamento automático)'],
    explanation: 'Quando uma função `async` retorna uma Promise, essa Promise é "adotada" pela Promise externa que a função `async` sempre retorna — incluindo seu estado de rejeição. Como `f()` retorna `Promise.reject(\'fail\')`, a Promise resultante de `f()` também acaba rejeitada com `\'fail\'`, capturada normalmente pelo `.catch`.',
    tags: ['async-await', 'Promise', 'rejection', 'output-prediction'],
  },
  {
    id: 'js-async-020',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function run() {
  const value = await Promise.resolve(Promise.resolve('done'));
  console.log(value);
}
run();
\`\`\``,
    options: [
      { id: 'a', text: "Promise { Promise { 'done' } }", isCorrect: false },
      { id: 'b', text: "'done'", isCorrect: true },
      { id: 'c', text: "Promise { 'done' }", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`await` desembrulha qualquer nível de Promises aninhadas, não apenas um nível'],
    explanation: '`await` (assim como `Promise.resolve`) desembrulha automaticamente Promises aninhadas, não importa quantos níveis de aninhamento existam — promises nunca ficam "dentro" de outras promises no resultado final. Por isso `value` recebe diretamente a string `\'done\'`, não um objeto Promise.',
    tags: ['async-await', 'Promise', 'flattening', 'output-prediction'],
  },
  {
    id: 'js-async-021',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function run() {
  console.log('1');
  await null;
  console.log('2');
  await null;
  console.log('3');
}
run();
console.log('4');
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, 4', isCorrect: false },
      { id: 'b', text: '1, 4, 2, 3', isCorrect: true },
      { id: 'c', text: '1, 4, 3, 2', isCorrect: false },
      { id: 'd', text: '4, 1, 2, 3', isCorrect: false },
    ],
    hints: ['Cada `await` cede o controle de volta ao chamador por (pelo menos) um ciclo de microtask', 'Depois que o código externo síncrono (`4`) termina, não há mais nada disputando a fila de microtasks com as continuações da função'],
    explanation: '`run()` executa sincronamente até o primeiro `await`, imprimindo `1`, e então cede o controle — por isso `4` (fora da função) é impresso a seguir. A partir daí, não há mais código síncrono concorrendo: a microtask que retoma depois do primeiro `await` executa, imprimindo `2`, encontra o segundo `await`, cede de novo — mas como a fila de microtasks está vazia (não há outro código síncrono pendente), a continuação final executa imediatamente depois, imprimindo `3`. Ordem final: 1, 4, 2, 3.',
    tags: ['async-await', 'event-loop', 'microtask', 'output-prediction'],
  },
  {
    id: 'js-async-022',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function run() {
  try {
    throw new Error('err');
  } finally {
    console.log('finally');
  }
}
run().catch((e) => console.log('caught:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "'caught:', 'err'", isCorrect: false },
      { id: 'b', text: "'finally', depois 'caught:', 'err'", isCorrect: true },
      { id: 'c', text: "'caught:', 'err', depois 'finally'", isCorrect: false },
      { id: 'd', text: "Apenas 'finally'", isCorrect: false },
    ],
    hints: ['Um bloco `finally` sempre executa antes do erro continuar se propagando para fora da função', 'A Promise rejeitada só "chega" no `.catch()` externo depois que toda a função async termina de processar internamente'],
    explanation: 'O `finally` sempre executa, independentemente de o `try` ter lançado um erro ou não — e ele executa *antes* do erro continuar se propagando para fora da função. Primeiro `finally` imprime `\'finally\'`. Só depois disso a função `async` termina sua execução, e a Promise que ela retorna é rejeitada com o erro original, que o `.catch()` externo captura, imprimindo `caught: err`.',
    tags: ['async-await', 'try-finally', 'error-handling', 'output-prediction'],
  },
  {
    id: 'js-async-023',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log('1');
new Promise((resolve) => {
  console.log('2');
  resolve();
});
console.log('3');
\`\`\``,
    options: [
      { id: 'a', text: "'1', '3', '2'", isCorrect: false },
      { id: 'b', text: "'1', '2', '3'", isCorrect: true },
      { id: 'c', text: "'2', '1', '3'", isCorrect: false },
      { id: 'd', text: "'1', '3'", isCorrect: false },
    ],
    hints: ['A função executora passada para `new Promise(...)` roda IMEDIATAMENTE e de forma síncrona, não é adiada'],
    explanation: 'Um erro comum é assumir que tudo relacionado a Promises é assíncrono — mas a função executora (o callback passado para `new Promise(executor)`) roda imediatamente, de forma totalmente síncrona, no momento em que a Promise é construída. Só o que vem DEPOIS (como callbacks de `.then()`) é que é adiado para a fila de microtasks. Por isso a ordem é simplesmente `1`, `2`, `3`.',
    tags: ['Promise', 'promise-constructor', 'output-prediction'],
  },
  {
    id: 'js-async-024',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function f() {
  console.log('inside');
  return 1;
}
console.log('before');
f();
console.log('after');
\`\`\``,
    options: [
      { id: 'a', text: 'before, inside, after', isCorrect: true },
      { id: 'b', text: 'before, after, inside', isCorrect: false },
      { id: 'c', text: 'inside, before, after', isCorrect: false },
      { id: 'd', text: 'before, inside, after, 1', isCorrect: false },
    ],
    hints: ['Sem nenhum `await` no corpo, uma função async roda inteiramente de forma síncrona até seu retorno'],
    explanation: 'Mesmo sendo `async`, sem nenhum `await` dentro do corpo, a função roda inteiramente de forma síncrona, do início até o `return` — a única diferença é que o valor retornado é automaticamente envolvido numa Promise. Por isso `f()` imprime `inside` imediatamente quando chamada, em sequência síncrona com `before` e `after`. Como nada usa o valor de retorno (nem `await`, nem `.then`), o `1` nunca aparece no console.',
    tags: ['async-await', 'output-prediction'],
  },
  {
    id: 'js-async-025',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const p1 = Promise.resolve('ok');
const p2 = Promise.reject('fail');
Promise.all([p1, p2])
  .then((values) => console.log('success:', values))
  .catch((err) => console.log('error:', err));
\`\`\``,
    options: [
      { id: 'a', text: "'success:', ['ok', undefined]", isCorrect: false },
      { id: 'b', text: "'error:', 'fail'", isCorrect: true },
      { id: 'c', text: "'success:', ['ok']", isCorrect: false },
      { id: 'd', text: "Espera as duas promises antes de decidir", isCorrect: false },
    ],
    hints: ['`Promise.all` rejeita imediatamente assim que QUALQUER promise do array rejeita, sem esperar as outras'],
    explanation: '`Promise.all` adota a estratégia "fail-fast": ela rejeita assim que a primeira promise do array rejeita, sem esperar o resultado das demais (mesmo que elas ainda estejam pendentes ou venham a ser cumpridas depois). Como `p2` já está rejeitada com `\'fail\'`, o `.catch` é acionado imediatamente com esse valor, e o `.then` de sucesso nunca executa.',
    tags: ['Promise.all', 'fail-fast', 'output-prediction'],
  },
  {
    id: 'js-async-026',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que este código imprime no console?

\`\`\`javascript
const p1 = Promise.resolve('ok');
const p2 = Promise.reject('fail');
Promise.allSettled([p1, p2]).then((results) =>
  console.log(results.map((r) => r.status))
);
\`\`\``,
    options: [
      { id: 'a', text: "Lança um erro, pois p2 rejeitou", isCorrect: false },
      { id: 'b', text: "['fulfilled', 'rejected']", isCorrect: true },
      { id: 'c', text: "['ok', 'fail']", isCorrect: false },
      { id: 'd', text: "['fulfilled']", isCorrect: false },
    ],
    hints: ['`Promise.allSettled` NUNCA rejeita — ela sempre resolve com o resultado de cada promise, seja sucesso ou falha'],
    explanation: 'Diferente de `Promise.all`, `Promise.allSettled` espera todas as promises terminarem (resolvidas ou rejeitadas) e sempre resolve com um array de objetos descrevendo o resultado de cada uma: `{ status: \'fulfilled\', value }` ou `{ status: \'rejected\', reason }`. Ela nunca entra em estado de rejeição, mesmo que todas as promises do array falhem. Por isso o resultado mapeado é `[\'fulfilled\', \'rejected\']`.',
    tags: ['Promise.allSettled', 'output-prediction'],
  },
  {
    id: 'js-async-027',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console (eventualmente)?

\`\`\`javascript
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function run() {
  const results = [];
  for (const n of [1, 2, 3]) {
    results.push(await delay(10, n));
  }
  console.log(results);
}
run();
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 3], depois de aproximadamente 10ms', isCorrect: false },
      { id: 'b', text: '[1, 2, 3], depois de aproximadamente 30ms', isCorrect: true },
      { id: 'c', text: '[3, 2, 1]', isCorrect: false },
      { id: 'd', text: 'Lança TypeError porque `for` não suporta `await`', isCorrect: false },
    ],
    hints: ['`await` dentro de um `for...of` comum executa cada iteração sequencialmente, esperando uma terminar antes de começar a próxima'],
    explanation: '`await` dentro de um `for...of` tradicional roda as iterações sequencialmente, não em paralelo: cada `delay(10, n)` só começa depois que o `await` anterior já resolveu. Com 3 iterações de ~10ms cada, o tempo total é a SOMA dos delays (~30ms), não o maior delay individual. O array final é `[1, 2, 3]` (a ordem é preservada porque é sequencial), mas para rodar em paralelo (e levar só ~10ms no total) seria necessário usar `Promise.all(arr.map(n => delay(10, n)))`.',
    tags: ['async-await', 'for-of', 'sequencial-vs-paralelo', 'output-prediction'],
  },
  {
    id: 'js-async-028',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
console.log('1');
Promise.resolve().then(() => console.log('2'));
console.log('3');
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 3, 2', isCorrect: true },
      { id: 'c', text: '2, 1, 3', isCorrect: false },
      { id: 'd', text: '1, 3', isCorrect: false },
    ],
    hints: ['O callback de `.then()` NUNCA executa de forma síncrona, nem quando a Promise já está resolvida no momento da chamada'],
    explanation: 'Mesmo que `Promise.resolve()` já esteja em estado resolvido no exato momento em que `.then()` é chamado, o callback passado para `.then()` é, por especificação, sempre agendado como uma microtask — nunca executado de forma síncrona e imediata. Por isso `3` (síncrono) é impresso antes de `2` (agendado).',
    tags: ['Promise.then', 'microtask', 'output-prediction'],
  },
  {
    id: 'js-async-029',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
const thenable = {
  then(resolve) {
    resolve('from thenable');
  },
};
Promise.resolve(thenable).then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: '{ then: [Function] }', isCorrect: false },
      { id: 'b', text: "'from thenable'", isCorrect: true },
      { id: 'c', text: 'Promise { thenable }', isCorrect: false },
      { id: 'd', text: 'Lança TypeError', isCorrect: false },
    ],
    hints: ['`Promise.resolve()` reconhece qualquer objeto com um método `.then()` como um "thenable" e adota seu valor, mesmo que não seja uma Promise real'],
    explanation: 'Promises em JavaScript seguem o conceito de "thenable": qualquer objeto com um método `.then()` válido é tratado como algo "promise-like", mesmo que não tenha sido criado com `new Promise()`. `Promise.resolve(thenable)` detecta esse `.then()` e adota o valor que ele eventualmente entrega via `resolve(...)`. Por isso o resultado final é a string `\'from thenable\'`.',
    tags: ['Promise', 'thenable', 'output-prediction'],
  },
  {
    id: 'js-async-030',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que este código imprime no console?

\`\`\`javascript
async function risky(shouldThrow) {
  if (shouldThrow) throw new Error('sync throw');
  return 'ok';
}
risky(true)
  .then((v) => console.log('resolved:', v))
  .catch((e) => console.log('rejected:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "Lança um erro não tratado, pois `throw` dentro de função async não é capturado por `.catch()`", isCorrect: false },
      { id: 'b', text: "'rejected:', 'sync throw'", isCorrect: true },
      { id: 'c', text: "'resolved:', undefined", isCorrect: false },
      { id: 'd', text: "'resolved:', 'sync throw'", isCorrect: false },
    ],
    hints: ['Dentro de uma função `async`, `throw` e `Promise.reject(...)` têm exatamente o mesmo efeito observável de fora'],
    explanation: 'Um `throw` síncrono dentro do corpo de uma função `async` nunca se propaga como uma exceção "crua" para quem chamou — ele é automaticamente convertido na rejeição da Promise que a função retorna. Por isso `.catch()` consegue capturá-lo normalmente, exatamente como capturaria uma rejeição explícita via `Promise.reject(...)`. Resultado: `rejected: sync throw`.',
    tags: ['async-await', 'throw', 'error-handling', 'output-prediction'],
  },
]
