import type { Question } from '../session/types'

export const reactInterview2026Questions: Question[] = [
  // ── REACT FUNDAMENTALS 2026 ──────────────────────────────────────────────────
  {
    id: 'ri26-001',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como você explicaria o Virtual DOM para alguém que nunca ouviu falar? Use uma analogia.',
    hints: ['Rascunho vs documento final', 'Blueprint de arquiteto', 'Cópia de trabalho'],
    explanation: 'Analogia: imagine que você está editando um documento importante. Em vez de riscar e reescrever o original toda vez (manipulação direta do DOM = lento e arriscado), você faz todas as alterações em um rascunho primeiro. Quando terminar, compara o rascunho com o original, identifica exatamente o que mudou e aplica apenas essas diferenças no documento real. O Virtual DOM é esse rascunho — uma cópia leve em memória. Cada mudança de state gera um novo rascunho; o React compara os dois (diffing) e só atualiza o necessário no DOM real.',
    tags: ['virtual-dom', 'analogia', 'entrevista', 'explicacao', 'fundamentos'],
  },
  {
    id: 'ri26-002',
    domain: 'react',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a diferença entre `state` e `props`? Quando você usa cada um?',
    hints: ['State: interno e mutável', 'Props: externo e imutável no filho', 'Quem é o dono do dado?'],
    explanation: 'State: dado que pertence ao componente, pode mudar com o tempo, dispara re-render quando muda. Use para: valor de um input, toggle de modal aberto/fechado, dados carregados da API no próprio componente. Props: dados passados de fora (pelo pai), imutáveis no componente filho. Use para: customizar comportamento/aparência de um componente filho, comunicação pai→filho. Regra de ouro: "quem é o dono do dado?" — o dono usa state, os outros recebem props. Se dois componentes precisam do mesmo dado → Lifting State Up (o pai comum é o dono).',
    tags: ['state', 'props', 'diferenca', 'fundamentos', 'entrevista'],
  },
  {
    id: 'ri26-003',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que acontece exatamente quando o state muda em React?',
    hints: ['Re-render do componente', 'Novo Virtual DOM', 'Reconciliação', 'Atualização do DOM real'],
    explanation: 'Sequência completa: (1) Você chama o setter: `setCount(count + 1)`; (2) React agenda um re-render do componente (e seus filhos que não forem memoizados); (3) React executa a função do componente novamente, produzindo novo JSX (novo Virtual DOM); (4) React compara o novo Virtual DOM com o anterior (reconciliação/diffing); (5) React aplica apenas as mudanças necessárias no DOM real (DOM mutations são caras, por isso minimiza); (6) `useEffect` com deps que incluem o state é executado após o commit no DOM. No React 18, esse processo pode ser interrompido e retomado (Concurrent Mode).',
    tags: ['state', 're-render', 'reconciliacao', 'dom', 'fluxo'],
  },
  {
    id: 'ri26-004',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique o processo de reconciliação do React em detalhes.',
    hints: ['Comparar árvores', 'Heurísticas de tipo e key', 'O(n) em vez de O(n³)'],
    explanation: 'Reconciliação é o algoritmo do React para determinar quais partes do DOM precisam ser atualizadas. Sem heurísticas, comparar duas árvores seria O(n³). O React usa duas suposições para chegar a O(n): (1) Elementos de tipos diferentes produzem árvores diferentes — ao encontrar um tipo diferente (ex: `div` virou `span`), destrói toda a árvore filha e cria nova; (2) O `key` indica qual item de lista é qual entre renders — sem key, React compara por posição (ineficiente em listas mutáveis). Com `key` estável, React pode detectar reordenações, adições e remoções com precisão.',
    tags: ['reconciliacao', 'diffing', 'algoritmo', 'performance', 'key'],
  },
  {
    id: 'ri26-005',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Por que `key` deve ser única nas listas? O que acontece se usar o index?',
    hints: ['React rastreia identidade por key', 'Reordenação com index causa bugs', 'Input values deslocados'],
    explanation: 'Key é a identidade de um item de lista para o React. Com key estável e única, o React sabe exatamente qual elemento é qual entre renders — pode mover, criar ou destruir com precisão. Com index como key: se você adicionar um item no início da lista, todos os índices mudam — o React acha que TODOS os itens mudaram e pode re-renderizar desnecessariamente ou, pior, associar state antigo (como valor de um input) ao item errado. Bug clássico: lista de inputs com key=index, ao deletar o primeiro item, o texto dos inputs restantes "desloca" para o item anterior.',
    tags: ['key', 'index', 'lista', 'bug', 'identidade'],
  },
  {
    id: 'ri26-006',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre componente controlado e não controlado? Qual você prefere e por quê?',
    hints: ['React como source of truth', 'Formulários simples vs complexos', 'React Hook Form'],
    explanation: 'Controlado: React controla o valor via state. `value={state}` + `onChange={setter}`. Vantagens: validação em tempo real, transformação, submit programático fácil. Não controlado: DOM mantém o valor; você acessa via ref quando precisar. Mais simples para forms sem validação dinâmica. Preferência moderna: para formulários complexos com validação, use React Hook Form — ele usa refs internamente (não controlado) mas oferece uma API de alto nível com validação, desempenho superior (não re-renderiza a cada keystroke) e integração com Zod para schemas.',
    tags: ['controlado', 'nao-controlado', 'formularios', 'react-hook-form', 'preferencia'],
  },
  {
    id: 'ri26-007',
    domain: 'react',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que são Fragments no React? Por que usar?',
    hints: ['Sem nó extra no DOM', '<> </>', 'Regras de tabela'],
    explanation: 'Fragments permitem retornar múltiplos elementos JSX sem adicionar um elemento wrapper desnecessário no DOM. Sintaxe: `<></>` (shorthand) ou `<React.Fragment>` (quando precisa de `key`). Por que usar: (1) HTML semântico — `<tr>` só pode ter `<td>` diretamente, sem `<div>` intermediária; (2) Layouts CSS — flexbox e grid tratam filhos diretos; um `<div>` extra quebra o layout; (3) Performance — menos nós no DOM; (4) Limpeza — sem markup inútil. Em listas que precisam de `key`: `<React.Fragment key={item.id}>`.',
    tags: ['fragments', 'dom', 'semantica', 'layout', 'jsx'],
  },
  {
    id: 'ri26-008',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "lifting state up"? Dê um exemplo concreto.',
    hints: ['Compartilhar entre irmãos', 'Ancestral comum', 'Props down, callbacks up'],
    explanation: 'Lifting state up: quando dois componentes irmãos precisam compartilhar o mesmo estado, você move o estado para o ancestral comum mais próximo. Exemplo concreto: conversor de temperatura. Você tem `<CelsiusInput>` e `<FahrenheitInput>`. Se cada um tem seu próprio state, eles ficam fora de sincronia. Solução: o pai `<TemperatureConverter>` mantém o state `temperature`. Passa o valor como prop para cada input e passa uma função `onTemperatureChange` como callback. Quando o usuário digita em Celsius, o callback atualiza o state do pai, que passa o equivalente em Fahrenheit para o outro input.',
    tags: ['lifting-state', 'compartilhar', 'pai', 'exemplo', 'entrevista'],
  },
  {
    id: 'ri26-009',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que causa re-renders desnecessários em React?',
    options: [
      { id: 'a', text: 'Objetos/arrays criados inline nas props, ausência de React.memo, e mudança de context por inteiro', isCorrect: true },
      { id: 'b', text: 'Usar TypeScript em vez de JavaScript', isCorrect: false },
      { id: 'c', text: 'Ter muitos componentes na página', isCorrect: false },
      { id: 'd', text: 'Usar useState em vez de useReducer', isCorrect: false },
    ],
    hints: ['Nova referência = re-render', 'React.memo compara por referência'],
    explanation: 'Causas principais de re-renders desnecessários: (1) Props com novos objetos/arrays criados inline: `<Child config={{debug: true}}/>` cria novo objeto a cada render do pai — mesmo valor, referência diferente → filho re-renderiza mesmo com React.memo; (2) Pai re-renderiza → todos os filhos não memoizados re-renderizam; (3) Context: ao mudar qualquer parte do value do Provider, todos os consumidores re-renderizam; (4) Ausência de `useCallback` em funções passadas como props. Solução: memoize props que são objetos/funções com `useMemo`/`useCallback`.',
    tags: ['re-render', 'performance', 'memo', 'inline-objects', 'otimizacao'],
  },
  {
    id: 'ri26-010',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença prática entre componentes funcionais e de classe em 2024?',
    hints: ['Funcionais + Hooks substituíram classes', 'Error Boundaries: única exceção', 'Legado vs moderno'],
    explanation: 'Funcionais: mais simples, menos boilerplate, suportam Hooks, mais fáceis de testar e compor, sem preocupação com `this`. Classes: sintaxe mais verbosa, precisam de `this`, ciclo de vida explícito, `constructor` para state inicial. Em 2024: use sempre componentes funcionais com Hooks. A ÚNICA razão técnica para usar classe ainda é Error Boundaries — `componentDidCatch` e `getDerivedStateFromError` não têm equivalente em Hooks. Em projetos legados com classes, não é necessário refatorar tudo — mas código novo deveria ser funcional.',
    tags: ['funcional', 'classe', 'diferenca', 'hooks', 'moderno'],
  },
  // ── HOOKS 2026 ───────────────────────────────────────────────────────────────
  {
    id: 'ri26-011',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `useEffect` e `useLayoutEffect`? Quando usar cada um?',
    hints: ['useEffect: após pintura', 'useLayoutEffect: antes da pintura', 'Flickering de layout'],
    explanation: '`useEffect`: executado de forma assíncrona após o React commitar as mudanças no DOM e o browser pintar a tela. É o padrão — 95% dos casos. `useLayoutEffect`: executado de forma síncrona após o commit, mas ANTES da pintura do browser. Use quando precisar medir o DOM ou fazer mudanças visuais que, se adiadas, causariam "flickering" (piscada). Exemplo: tooltip que precisa medir a posição de um elemento antes de se posicionar, animações que dependem de medidas do DOM. Cuidado: `useLayoutEffect` bloqueia a pintura — use apenas quando necessário.',
    tags: ['useEffect', 'useLayoutEffect', 'diferenca', 'dom', 'pintura'],
  },
  {
    id: 'ri26-012',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Quando `useMemo` deve ser EVITADO?',
    hints: ['Custo da memoização', 'Valor primitivo', 'Computação barata'],
    explanation: 'Evite `useMemo` quando: (1) A computação é barata (somar dois números, concatenar strings simples) — o overhead do useMemo supera o ganho; (2) O valor retornado é um primitivo (string, number, boolean) — primitivos já são comparados por valor, não precisam de memoização de referência; (3) As dependências mudam a cada render de qualquer forma — a memoização nunca "pega"; (4) O componente raramente re-renderiza — otimização prematura. Reserve `useMemo` para: cálculos verdadeiramente caros, objetos/arrays usados como deps em outros hooks, ou passados para componentes memoizados.',
    tags: ['useMemo', 'quando-evitar', 'otimizacao-prematura', 'performance', 'overhead'],
  },
  {
    id: 'ri26-013',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Explique `useCallback` com um caso de uso real e concreto.',
    hints: ['Estabilizar referência de função', 'Componente filho com React.memo', 'onClick passado como prop'],
    explanation: 'Caso real: você tem uma lista de itens com um botão "Favoritar" em cada linha. O componente de linha usa `React.memo`. `const ListItem = React.memo(({ item, onFavorite }) => ...)`. Sem `useCallback`, cada re-render do componente pai cria uma nova função `handleFavorite` → nova referência → React.memo vê props diferentes → todos os itens re-renderizam mesmo que só um dado tenha mudado. Com `useCallback`: `const handleFavorite = useCallback((id) => { setFavorites(prev => [...prev, id]) }, [])` — a referência é estável entre renders → React.memo funciona como esperado.',
    tags: ['useCallback', 'memo', 'referencia', 'performance', 'caso-real'],
  },
  {
    id: 'ri26-014',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Por que loops infinitos acontecem no `useEffect`? Como evitar?',
    hints: ['Dependência que muda a cada render', 'Objeto/função nas deps', 'Dep ausente vs dep problemática'],
    explanation: 'Loop infinito em useEffect: `useEffect(() => { setData(fetch()); }, [data])` — setData atualiza data → useEffect roda → setData atualiza data → infinito. Causas comuns: (1) State como dep que é atualizado dentro do efeito; (2) Objeto/array criado inline nas deps: `useEffect(() => {}, [{ id: 1 }])` — novo objeto a cada render → deps sempre "mudam" → loop; (3) Função instável como dep. Soluções: (1) Remover a dep problemática do array se o efeito não precisar re-executar com ela; (2) Usar `useCallback`/`useMemo` para estabilizar funções/objetos; (3) Usar a forma funcional do setter: `setCount(c => c+1)` sem precisar de `count` nas deps.',
    tags: ['useEffect', 'loop-infinito', 'dependencias', 'debug', 'stale-closure'],
  },
  {
    id: 'ri26-015',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são stale closures? Como afetam os Hooks do React?',
    hints: ['Closure captura variável do momento da criação', 'useEffect com deps stale', 'Valor antigo capturado'],
    explanation: 'Stale closure: uma função que capturou uma variável do escopo no momento de sua criação, mas o valor dessa variável mudou depois. Em React: `useEffect(() => { const id = setInterval(() => { console.log(count) }, 1000) }, [])`. O callback do interval captura `count` no momento da montagem — mesmo que `count` mude, a closure sempre verá o valor inicial. Fix: adicionar `count` nas deps (reinicia o interval quando muda) ou usar `ref`: `const countRef = useRef(count); countRef.current = count` e ler `countRef.current` dentro do interval.',
    tags: ['stale-closure', 'closure', 'useEffect', 'deps', 'ref'],
  },
  {
    id: 'ri26-016',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Como funciona o array de dependências do `useEffect`? Explique cada variação.',
    hints: ['Vazio: só monta', 'Com deps: quando deps mudam', 'Sem array: todo render'],
    explanation: 'Três variações: (1) Sem array: `useEffect(() => {...})` — executa após CADA render. Raro — pode causar problemas de performance; (2) Array vazio `[]`: executa apenas na montagem do componente (equivalente a `componentDidMount`). Cleanup roda na desmontagem; (3) Com dependências `[dep1, dep2]`: executa na montagem e sempre que qualquer dep mudar (comparação rasa/shallow). Cleanup roda antes da próxima execução e na desmontagem. Regra: inclua todas as variáveis reativas (state, props, context) que o efeito usa. Use eslint-plugin-react-hooks para detectar deps faltantes.',
    tags: ['useEffect', 'dependencias', 'array', 'montagem', 'cleanup'],
  },
  {
    id: 'ri26-017',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: '`useRef` pode causar re-render? Explique a diferença entre `useRef` e `useState` para armazenar valores.',
    hints: ['ref.current não dispara re-render', 'Estado persistente sem re-render', 'Quando usar cada um'],
    explanation: '`useRef` NÃO dispara re-render quando `ref.current` muda — isso o torna ideal para armazenar valores que precisam persistir entre renders mas não precisam atualizar a UI (ex: timers, instâncias de objetos externos, valores anteriores para comparação). `useState` dispara re-render ao mudar — use quando a mudança precisa refletir na UI. Exemplo: `const timerRef = useRef(null); timerRef.current = setTimeout(...)` — nunca causará re-render ao ser atribuído. Se você fizesse `const [timer, setTimer] = useState(null)`, cada `setTimer` dispararia re-render desnecessário.',
    tags: ['useRef', 'useState', 'diferenca', 're-render', 'persistencia'],
  },
  {
    id: 'ri26-018',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como construir um custom hook? Quais são as regras que ele deve seguir?',
    hints: ['Prefixo use', 'Pode usar outros hooks', 'Encapsula lógica reutilizável'],
    explanation: 'Custom hook: função JavaScript cujo nome começa com `use` e que pode chamar outros hooks. Regras: deve seguir as Rules of Hooks — chamar hooks apenas no nível superior (não dentro de condicionais/loops) e apenas em componentes React ou outros hooks. Estrutura: `function useLocalStorage<T>(key: string, initialValue: T) { const [stored, setStored] = useState<T>(() => { try { const item = localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch { return initialValue; } }); const setValue = (value: T) => { setStored(value); localStorage.setItem(key, JSON.stringify(value)); }; return [stored, setValue] as const; }`',
    tags: ['custom-hook', 'use-prefix', 'regras', 'hooks', 'reutilizacao'],
  },
  {
    id: 'ri26-019',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique a ordem de execução dos Hooks em um componente React.',
    hints: ['Sempre na mesma ordem', 'Por isso não pode estar em condicionais', 'Estado interno indexado por ordem'],
    explanation: 'Os Hooks são executados sempre na mesma ordem a cada render — é por isso que não podem estar dentro de condicionais, loops ou funções aninhadas. O React rastreia internamente os hooks por índice: hook 0 = primeiro useState, hook 1 = segundo useState, etc. Cada render usa esses índices para associar o valor correto ao hook correto. Se a ordem mudar (ex: um hook dentro de `if` que às vezes não executa), os índices ficam desalinhados e os hooks ficam com valores errados. O ESLint plugin `react-hooks/rules-of-hooks` detecta violações dessa regra.',
    tags: ['hooks', 'ordem', 'regras', 'indice', 'condicional'],
  },
  // ── PERFORMANCE 2026 ─────────────────────────────────────────────────────────
  {
    id: 'ri26-020',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Como `React.memo` funciona? Quando pode se tornar um problema?',
    hints: ['Shallow comparison', 'Props que mudam sempre', 'Overhead de comparação'],
    explanation: '`React.memo(Component)` envolve o componente com uma verificação: antes de re-renderizar, compara as novas props com as anteriores por shallow comparison (===). Se iguais, reutiliza o resultado anterior. Pode ser problema quando: (1) Props incluem objetos/funções criados inline — sempre "diferentes" na shallow comparison → memo nunca evita o re-render e você pagou o custo da comparação à toa; (2) Componente é muito simples — o custo da comparação supera o custo de re-renderizar; (3) Props sempre mudam de qualquer forma. Use memo estrategicamente: componentes caros de renderizar com props relativamente estáveis.',
    tags: ['memo', 'shallow-comparison', 'performance', 'problema', 'overhead'],
  },
  {
    id: 'ri26-021',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Quando a memoização pode PIORAR a performance?',
    hints: ['Custo de useMemo e useCallback', 'Comparações desnecessárias', 'Componentes simples'],
    explanation: 'Memoização tem custo: cada `useMemo` e `useCallback` executa código extra para comparar dependências e armazenar o resultado em memória. Piora a performance quando: (1) A computação memoizada é mais barata que o overhead de comparar as deps e guardar o resultado; (2) React.memo em componentes que sempre recebem novas props — nunca aproveita o cache mas paga o custo da comparação; (3) useMemo em valores primitivos — desnecessário, comparação direta já é eficiente; (4) Memoização excessiva obscurece o código sem ganho real. Otimize baseado em medições (Profiler), não em intuição.',
    tags: ['memoizacao', 'useMemo', 'useCallback', 'overhead', 'anti-pattern'],
  },
  {
    id: 'ri26-022',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'O que é code splitting? Como implementar em React?',
    hints: ['Dividir bundle em partes menores', 'React.lazy', 'next/dynamic', 'Suspense'],
    explanation: 'Code splitting divide o bundle JavaScript em partes menores carregadas sob demanda — usuário não precisa baixar código de rotas que ainda não visitou. Em React: `const Dashboard = React.lazy(() => import("./Dashboard"))`. Combine com Suspense: `<Suspense fallback={<Loading/>}><Dashboard/></Suspense>`. No Next.js: `const Chart = dynamic(() => import("./Chart"), { ssr: false })`. Estratégias: por rota (automático no Next.js), por componente pesado (editor de texto, gráficos), por feature raramente usada. Resultado: menor First Load, carregamento mais rápido.',
    tags: ['code-splitting', 'lazy', 'suspense', 'dynamic-import', 'bundle'],
  },
  {
    id: 'ri26-023',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Qual a diferença entre lazy loading e dynamic imports? Como se relacionam?',
    hints: ['Dynamic imports: funcionalidade JavaScript', 'Lazy loading: conceito mais amplo', 'React.lazy usa dynamic imports'],
    explanation: 'Dynamic imports é uma funcionalidade JavaScript (`import()`) que retorna uma Promise — permite carregar módulos sob demanda em tempo de execução, em vez de incluí-los no bundle inicial. Lazy loading é o conceito mais amplo de adiar o carregamento de recursos (imagens, scripts, componentes) até que sejam necessários. `React.lazy()` usa dynamic imports internamente para implementar lazy loading de componentes. Outros exemplos de lazy loading: `loading="lazy"` em imagens HTML, `IntersectionObserver` para carregar conteúdo ao entrar na viewport.',
    tags: ['lazy-loading', 'dynamic-import', 'relacao', 'bundle', 'performance'],
  },
  {
    id: 'ri26-024',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como otimizar a renderização de uma lista grande em React?',
    hints: ['Virtualização', 'Paginação', 'React.memo em cada item', 'useCallback para handlers'],
    explanation: 'Estratégias em camadas: (1) Paginação/infinite scroll: não carregue todos os dados de uma vez — o problema começa no servidor; (2) Virtualização: `react-virtual` ou `react-window` renderiza apenas os itens visíveis na viewport — essencial para 1000+ itens; (3) `React.memo` em cada item de lista — evita re-render de todos os itens quando um muda; (4) `useCallback` para handlers passados para cada item (ex: onDelete, onSelect); (5) `useMemo` para operações de filtro/sort; (6) `key` estável (não index) para reconciliação eficiente; (7) Evite criação de objetos inline nas props de cada item.',
    tags: ['lista', 'virtualizacao', 'react-window', 'memo', 'performance', 'otimizacao'],
  },
  {
    id: 'ri26-025',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'O que é bundle optimization? Por que é importante?',
    hints: ['Tamanho do JS', 'Tempo de carregamento', 'Tree shaking', 'Análise do bundle'],
    explanation: 'Bundle optimization é o conjunto de técnicas para reduzir o tamanho do JavaScript enviado ao browser. Importância: cada KB extra de JS aumenta o tempo de download (especialmente em conexões móveis) e de parse/execução. Técnicas: (1) Análise: `webpack-bundle-analyzer` ou `rollup-plugin-visualizer` — identifique o que é grande; (2) Tree shaking: importações named para eliminar código morto; (3) Code splitting: carregue apenas o necessário; (4) Substituição de libs pesadas: `date-fns` em vez de `moment.js`; (5) Minificação e compressão (Terser, Brotli/Gzip); (6) Bundle size budget no CI.',
    tags: ['bundle', 'otimizacao', 'tree-shaking', 'tamanho', 'performance'],
  },
  // ── STATE MANAGEMENT 2026 ────────────────────────────────────────────────────
  {
    id: 'ri26-026',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Redux vs Context API: explique as diferenças e quando escolher cada um.',
    hints: ['Context: simples, frequência de update', 'Redux: complexidade, DevTools, testabilidade'],
    explanation: 'Context API: zero deps externas, nativa do React, ótima para dados que raramente mudam (tema, idioma, usuário). Limitação: todos os consumidores re-renderizam quando o value muda — problemático para dados de alta frequência. Redux (com RTK): mais estruturado, DevTools excelentes, middleware, seletores memoizados, testabilidade de reducers. Overhead de setup. Regra prática: (1) Dados quase estáticos + app pequena → Context; (2) Estado global complexo + time grande → Redux/RTK; (3) Meio-termo → Zustand (simplicidade + poder). Não há resposta única — depende do projeto.',
    tags: ['redux', 'context', 'zustand', 'tradeoff', 'escolha'],
  },
  {
    id: 'ri26-027',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Por que o state do Redux deve ser imutável? Como garantir isso na prática?',
    hints: ['Detecção de mudanças por referência', 'Immer no Redux Toolkit', 'Spread operator'],
    explanation: 'Imutabilidade é fundamental porque: React-Redux detecta mudanças por comparação de referência (===). Se você mutar o estado diretamente, a referência permanece a mesma → React-Redux pensa que nada mudou → sem re-render. Também impossibilita time-travel debugging. Na prática: (1) Spread operator: `{ ...state, count: state.count + 1 }`; (2) Redux Toolkit usa Immer — você pode escrever código aparentemente mutante (`state.count++`) mas o Immer produz um novo objeto imutável; (3) Eslint `no-param-reassign` para detectar mutações acidentais. O RTK é a forma recomendada.',
    tags: ['redux', 'imutabilidade', 'immer', 'rtk', 'referencia'],
  },
  {
    id: 'ri26-028',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique Redux middleware com um exemplo de implementação.',
    hints: ['Curry function tripla', 'Intercept entre dispatch e reducer', 'Logger como exemplo'],
    explanation: 'Middleware é uma função com assinatura `store => next => action => { ... }`. Exemplo de logger: ```javascript const loggerMiddleware = store => next => action => { console.log("dispatching:", action); const result = next(action); // passa para o próximo middleware ou reducer console.log("next state:", store.getState()); return result; }```. Adicionado via `configureStore({ middleware: (getDefault) => getDefault().concat(loggerMiddleware) })`. O `next(action)` passa a action adiante — se um middleware não chamar `next`, a action é interceptada e nunca chega ao reducer.',
    tags: ['redux', 'middleware', 'logger', 'implementacao', 'curry'],
  },
  {
    id: 'ri26-029',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'Qual problema o Redux Toolkit resolve? Como ele simplifica o uso do Redux?',
    hints: ['Boilerplate', 'createSlice', 'Immer', 'configureStore'],
    explanation: 'Redux clássico exigia: definir action type strings, criar action creators, escrever reducers com switch/case, configurar o store manualmente, combinar reducers. RTK resolve: (1) `createSlice`: gera types, creators e reducer juntos em poucas linhas; (2) `configureStore`: setup com DevTools e middleware padrão; (3) Immer embutido: escreva reducers de forma "mutável" com segurança; (4) `createAsyncThunk`: async actions padronizadas com loading/success/error; (5) `createEntityAdapter`: CRUD normalizado. O RTK é hoje a forma oficial recomendada — se estiver escrevendo Redux sem RTK, você está fazendo mais trabalho do que precisa.',
    tags: ['redux-toolkit', 'boilerplate', 'createSlice', 'simplificacao', 'rtk'],
  },
  {
    id: 'ri26-030',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: 'O que são selectors no Redux? Por que Reselect é importante?',
    hints: ['Derivar dados do state', 'Memoização', 'Evitar recomputação'],
    explanation: 'Selectors são funções que extraem dados do state: `const selectTodos = state => state.todos`. Para dados derivados: `const selectActiveTodos = state => state.todos.filter(t => !t.done)`. Problema: a cada chamada, `filter()` cria um novo array — mesmo que `todos` não tenha mudado, o array retornado é novo → React re-renderiza desnecessariamente. Reselect/createSelector: `const selectActiveTodos = createSelector([selectTodos], todos => todos.filter(t => !t.done))`. Recalcula APENAS quando as entradas mudam. RTK exporta `createSelector` diretamente.',
    tags: ['selectors', 'reselect', 'memoizacao', 'redux', 'createSelector'],
  },
  // ── SYSTEM DESIGN 2026 ──────────────────────────────────────────────────────
  {
    id: 'ri26-031',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você desenharia uma arquitetura frontend escalável? Pense em um app de 10+ desenvolvedores.',
    hints: ['Feature folders', 'Shared packages', 'Conventions', 'Automation'],
    explanation: 'Para times grandes: (1) Feature-based structure: `src/features/auth/`, `src/features/products/` — cada feature tem seus próprios componentes, hooks, services, types. Evita arquivos gigantes; (2) Shared layer: `src/components/` (UI genérico), `src/hooks/` (reutilizável), `src/lib/` (utils); (3) Monorepo com Turborepo: shared design system, shared types; (4) Conventions documentadas: naming, estrutura de arquivo, patterns de imports; (5) Automation: ESLint + Prettier + Husky + Conventional Commits; (6) ADRs (Architecture Decision Records) para decisões importantes; (7) CI: lint, tests, bundle budget.',
    tags: ['arquitetura', 'escalabilidade', 'feature-based', 'monorepo', 'times'],
  },
  {
    id: 'ri26-032',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como estruturar um projeto React grande? Quais critérios você usa para organizar os arquivos?',
    hints: ['Por domínio vs por tipo', 'Feature folders', 'Índices de exportação', 'Colocation'],
    explanation: 'Critérios: (1) Colocation: coloque próximo o que muda junto — teste no mesmo diretório do componente que testa; (2) Organizar por domínio/feature, não por tipo (evite: `components/`, `hooks/`, `utils/` com centenas de arquivos misturados); (3) Index.ts para exports limpos de cada feature — `import { AuthModal } from "@/features/auth"` em vez de caminho longo; (4) Public vs private: exports de um feature são a API pública; internals ficam dentro; (5) Naming consistente: `UserProfile.tsx`, `UserProfile.test.tsx`, `useUserProfile.ts`, `userProfile.types.ts`.',
    tags: ['estrutura', 'organizacao', 'feature-folders', 'colocation', 'escala'],
  },
  {
    id: 'ri26-033',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Monolito vs micro-frontend: explique o tradeoff central e quando cada um faz sentido.',
    hints: ['Autonomia de deploy', 'Bundle duplication', 'Complexidade operacional'],
    explanation: 'Tradeoff central: autonomia vs complexidade. Monolito: todos os times no mesmo codebase, shared components naturais, deployment simples, consistência fácil. Mais fácil de refatorar. Funciona bem até ~50 devs. Micro-frontend: cada time tem seu app independente, deploy separado, tecnologias diferentes por time, escala para 100+ devs. Complexidade: como compartilhar o design system? Como comunicar entre apps? Bundle duplication (React carregado múltiplas vezes). Module Federation resolve parte disso. Conselho: comece com monolito bem estruturado (monorepo). Migre para micro-frontends apenas quando a dor de coordenação for real e frequente.',
    tags: ['monolito', 'micro-frontend', 'tradeoff', 'times', 'deploy'],
  },
  {
    id: 'ri26-034',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar controle de acesso baseado em roles (RBAC) no frontend?',
    hints: ['Enum de permissões', 'Hook usePermission', 'UI é apenas UX, não segurança'],
    explanation: 'Implementação: (1) Defina permissões como enum: `"READ_REPORTS" | "CREATE_USER" | "DELETE_PRODUCT"`; (2) Context com roles/permissões do usuário autenticado; (3) Hook: `const canCreate = usePermission("CREATE_PRODUCT")`; (4) Componente: `<CanDo action="DELETE" resource="product"><DeleteButton/></CanDo>`; (5) Rotas protegidas: redireciona se sem permissão. CRÍTICO: isso é apenas UX — o backend DEVE verificar permissões em cada request. O frontend esconde/mostra elementos, mas nunca confie apenas nisso. Um usuário pode manipular o estado do frontend.',
    tags: ['rbac', 'permissoes', 'autorizacao', 'seguranca', 'ux-vs-seguranca'],
  },
  {
    id: 'ri26-035',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar retry de API no frontend de forma robusta?',
    hints: ['Exponential backoff', 'Jitter', 'Quais status codes merecem retry', 'TanStack Query'],
    explanation: 'Implementação robusta: (1) Exponential backoff com jitter: `delay = Math.min(1000 * 2^attempt + random(0, 1000), 30000)`. O jitter randômico evita que múltiplos clientes tentem ao mesmo tempo (thundering herd); (2) Quais erros fazer retry: APENAS erros de rede e 5xx. NUNCA em 4xx (erro do cliente); (3) Limite de tentativas: 3-5 máximo; (4) Feedback visual: "Tentativa 2 de 3..."; (5) TanStack Query: `useQuery({ retry: 3, retryDelay: (attempt) => Math.min(1000 * 2**attempt, 30000) })`; (6) Circuit breaker: após N falhas em X tempo, "abra" e mostre fallback.',
    tags: ['retry', 'exponential-backoff', 'jitter', 'api', 'resilencia'],
  },
  {
    id: 'ri26-036',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique as estratégias de caching no frontend e quando usar cada uma.',
    hints: ['HTTP Cache', 'React Query staleTime', 'Service Worker', 'LocalStorage'],
    explanation: 'Estratégias em camadas: (1) HTTP Cache (Cache-Control): `max-age` — browser não faz request se dado recente. Configurado no servidor. `stale-while-revalidate`: mostra cache e revalida em background; (2) React Query/SWR: cache in-memory com `staleTime` (quando o dado é "fresco") e `gcTime` (quando jogar fora do cache); (3) Service Worker: cache de assets e respostas para offline-first; (4) LocalStorage/IndexedDB: persistência entre sessões para dados do usuário. Cache invalidation: o problema difícil — use TTL (tempo de vida), invalidação por evento (após mutation) ou versioning.',
    tags: ['cache', 'http-cache', 'react-query', 'service-worker', 'estrategia'],
  },
  {
    id: 'ri26-037',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Quais são os princípios de um componente reutilizável bem projetado?',
    hints: ['API mínima', 'Composição', 'Sem side effects externos', 'Acessibilidade'],
    explanation: 'Princípios: (1) API mínima: exponha apenas o que o consumidor precisa — cada prop adicionada é um contrato; (2) Single responsibility: um componente faz uma coisa bem; (3) Composição sobre configuração: use `children` e compound components em vez de 15 props de configuração; (4) Sem opinião de layout: não emita margin ou width — responsabilidade de quem usa; (5) Ref forwarding para integração com o DOM; (6) Acessibilidade: ARIA correto, navegação por teclado, labels; (7) Testabilidade: comportamento testável sem mocks complexos; (8) Documentado no Storybook com exemplos.',
    tags: ['componentes', 'reutilizaveis', 'principios', 'api', 'composicao'],
  },
  {
    id: 'ri26-038',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar feature flags? Quais os benefícios além de ligar/desligar features?',
    hints: ['Deploy sem release', 'A/B testing', 'Canary releases', 'Kill switch'],
    explanation: 'Feature flags desacoplam deploy de release. Benefícios: (1) Deploy antecipado: código vai para produção mas inativo — sem feature branches longas; (2) A/B testing: envie variante A para 50% dos usuários e B para 50%; (3) Canary releases: ative para 5% → 20% → 100% gradualmente; (4) Kill switch: desative instantaneamente sem deploy em caso de bug; (5) Targeting: ative para usuários beta, empresa específica, feature tier. Implementação: use plataforma remota (LaunchDarkly, GrowthBook, OpenFeature) — nunca hardcode flags, elas devem ser configuráveis sem deploy.',
    tags: ['feature-flags', 'a-b-testing', 'canary', 'kill-switch', 'deploy'],
  },
  {
    id: 'ri26-039',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como tratar autenticação de forma segura em aplicações React/Next.js?',
    hints: ['httpOnly cookies', 'Nunca localStorage para tokens', 'CSRF', 'Refresh rotation'],
    explanation: 'Práticas seguras: (1) httpOnly cookies para tokens — não acessíveis por JS, protegidos contra XSS; (2) NUNCA armazene tokens em localStorage — qualquer script pode ler; (3) SameSite=Strict ou Lax para cookies — proteção CSRF; (4) Refresh token rotation: a cada uso, emita novo refresh token e invalide o anterior; (5) HTTPS obrigatório; (6) Token expiration curta para access tokens (15min) + refresh token mais longa (7 dias); (7) No Next.js: middleware para proteger rotas server-side sem expor lógica ao client; (8) Logout em todas as tabs com BroadcastChannel API.',
    tags: ['autenticacao', 'seguranca', 'httpOnly', 'csrf', 'refresh-token'],
  },
  {
    id: 'ri26-040',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você debugaria um problema de performance em produção que não reproduz localmente?',
    hints: ['RUM (Real User Monitoring)', 'Session replay', 'Feature flags para logging extra', 'Reproduzir com throttle'],
    explanation: 'Processo: (1) Dados reais: RUM via Sentry, Datadog ou Google Analytics — Web Vitals de usuários reais. Identifique segmentos afetados (device, browser, região); (2) Session replay: Sentry Session Replay ou Hotjar — veja o que o usuário fez antes do problema; (3) Reprodução: use DevTools → Network → Throttle para simular conexão lenta; CPU throttle para mobile lento; (4) Feature flag para logging extra: ative logging detalhado para % dos usuários afetados sem deploy; (5) Lighthouse com configurações de mobile; (6) Analise Long Tasks, Core Web Vitals por segmento; (7) Componha hipóteses e teste com experimentos A/B.',
    tags: ['debugging', 'producao', 'rum', 'session-replay', 'performance'],
  },
  // ── PRÁTICA E LIVE CODING ──────────────────────────────────────────────────
  {
    id: 'ri26-041',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE HOOKS] Implemente um hook `useToggle` e um `useCounter` com incremento/decremento/reset.',
    hints: ['useToggle: boolean que alterna', 'useCounter: operações numéricas', 'Retorne valores e funções'],
    explanation: `\`\`\`typescript
// useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setOn = useCallback(() => setValue(true), []);
  const setOff = useCallback(() => setValue(false), []);
  return { value, toggle, setOn, setOff };
}

// useCounter
function useCounter(initialValue = 0, { min = -Infinity, max = Infinity, step = 1 } = {}) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount(c => Math.min(c + step, max)), [step, max]);
  const decrement = useCallback(() => setCount(c => Math.max(c - step, min)), [step, min]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, decrement, reset };
}
\`\`\``,
    tags: ['useToggle', 'useCounter', 'custom-hook', 'pratica', 'live-coding'],
  },
  {
    id: 'ri26-042',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE HOOKS] Implemente `usePrevious` — um hook que retorna o valor anterior de uma variável.',
    hints: ['useRef para guardar valor sem re-render', 'Atualizar após render', 'useEffect'],
    explanation: `\`\`\`typescript
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    // Atualiza a ref APÓS o render — então durante o render atual,
    // ref.current ainda tem o valor do render anterior
    ref.current = value;
  }, [value]);

  return ref.current; // Retorna o valor do render anterior
}

// Uso:
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <div>Atual: {count}, Anterior: {prevCount}</div>;
}
\`\`\``,
    tags: ['usePrevious', 'useRef', 'useEffect', 'custom-hook', 'pratica'],
  },
  {
    id: 'ri26-043',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE DEBUGGING] Identifique e corrija o bug: `useEffect(() => { fetchData(userId); }, [])` — dados desatualizados quando userId muda.',
    hints: ['Deps do useEffect', 'ESLint react-hooks/exhaustive-deps', 'userId deve estar nas deps'],
    explanation: `Bug: \`userId\` está faltando no array de dependências — o efeito só roda na montagem, mas quando \`userId\` muda, \`fetchData\` não é chamado novamente → dados desatualizados.

\`\`\`typescript
// ❌ Bugado:
useEffect(() => {
  fetchData(userId);
}, []); // userId não está nas deps!

// ✅ Correto:
useEffect(() => {
  const controller = new AbortController();
  fetchData(userId, { signal: controller.signal });
  return () => controller.abort(); // Cancela request anterior se userId mudar
}, [userId]); // userId nas deps
\`\`\`

O ESLint plugin \`react-hooks/exhaustive-deps\` detecta esse erro automaticamente. Sempre configure-o.`,
    tags: ['debugging', 'useEffect', 'deps', 'stale', 'pratica'],
  },
  {
    id: 'ri26-044',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE DEBUGGING] Por que esse componente tem um memory leak? `useEffect(() => { document.addEventListener("click", handler) }, [])`',
    hints: ['Event listener não removido', 'Componente desmontado', 'Cleanup function'],
    explanation: `Memory leak: o event listener é adicionado na montagem mas nunca removido. Quando o componente desmonta, o listener persiste no DOM e ainda tem uma referência para o componente → impede garbage collection.

\`\`\`typescript
// ❌ Memory leak:
useEffect(() => {
  document.addEventListener("click", handler);
}, []); // Sem cleanup!

// ✅ Sem leak:
useEffect(() => {
  document.addEventListener("click", handler);
  return () => {
    document.removeEventListener("click", handler); // Cleanup na desmontagem
  };
}, [handler]); // handler deve ser estável — use useCallback
\`\`\`

Regra: todo \`addEventListener\`, \`setInterval\`, \`subscribe\` ou similar deve ter seu cancelamento no cleanup do useEffect.`,
    tags: ['memory-leak', 'event-listener', 'cleanup', 'debugging', 'pratica'],
  },
  {
    id: 'ri26-045',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE ARQUITETURA] Como você estruturaria os arquivos de uma feature "Autenticação" em um projeto React grande?',
    hints: ['Feature folder', 'Separação de responsabilidades', 'Public API'],
    explanation: `Estrutura de feature \`auth\`:
\`\`\`
src/features/auth/
├── index.ts                    # Public API: o que outros features podem importar
├── components/
│   ├── LoginForm.tsx
│   ├── LoginForm.test.tsx
│   ├── SignupForm.tsx
│   └── AuthGuard.tsx           # Wrapper para rotas protegidas
├── hooks/
│   ├── useAuth.ts              # Estado de autenticação
│   └── useAuthForm.ts          # Lógica do formulário
├── services/
│   └── authService.ts          # Chamadas à API de auth
├── store/
│   └── authSlice.ts            # Redux slice ou Zustand store
└── types.ts                    # Tipos específicos de auth
\`\`\`

\`index.ts\` expõe apenas o necessário: \`export { AuthGuard } from "./components/AuthGuard"; export { useAuth } from "./hooks/useAuth";\`. Internals ficam privados.`,
    tags: ['arquitetura', 'feature-folder', 'estrutura', 'auth', 'pratica'],
  },
  {
    id: 'ri26-046',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[PRÁTICA DE PERFORMANCE] Identifique 5 problemas de performance neste componente e proponha soluções.',
    hints: ['Objetos inline', 'Funções sem useCallback', 'Sem React.memo', 'Computação cara no render', 'Console.log'],
    explanation: `Problemas comuns em componentes reais:
1. **Objeto inline como prop**: \`<Child config={{debug: true}}/>\` → cria novo objeto a cada render → \`const config = useMemo(() => ({debug: true}), [])\`
2. **Função sem useCallback**: \`<Button onClick={() => handleClick(id)}/>\` → nova função a cada render → \`useCallback\`
3. **Computação cara no render**: \`const sorted = hugeArray.sort(...)\` → \`useMemo\`
4. **Sem React.memo no filho**: filho re-renderiza sempre que pai re-renderiza → \`React.memo(Child)\`
5. **console.log no render**: em produção pode ser lento com dados grandes → remover ou condicionar a \`process.env.NODE_ENV !== "production"\`
6. **Dependências incorretas no useEffect**: loop infinito ou stale data`,
    tags: ['performance', 'otimizacao', 'debugging', 'pratica', 'problemas-comuns'],
  },
  {
    id: 'ri26-047',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE COMUNICAÇÃO] Explique o problema do "prop drilling" e suas soluções, como se estivesse em uma entrevista.',
    hints: ['Defina o problema', 'Contexto', 'Composição', 'State management'],
    explanation: 'Resposta estruturada para entrevista: "Prop drilling acontece quando você precisa passar uma prop por muitos níveis de componentes intermediários que não usam essa prop — apenas a repassam para baixo. O problema é que cria acoplamento desnecessário e torna refatorações difíceis. Existem três soluções principais: (1) Context API — bom para dados globais que mudam raramente como tema ou usuário logado; cuidado pois todos os consumidores re-renderizam quando o value muda; (2) Component Composition — passar componentes como children ou props pode eliminar a necessidade de passar dados em cascata; (3) State management global (Zustand, Redux) — para dados que mudam com frequência." Em seguida, explique quando escolheria cada um.',
    tags: ['prop-drilling', 'context', 'composicao', 'comunicacao', 'entrevista'],
  },
  {
    id: 'ri26-048',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE COMUNICAÇÃO] Como você explicaria Concurrent Mode do React 18 para um desenvolvedor júnior?',
    hints: ['Analogia com lista de tarefas', 'Priorização', 'Sem bloquear a UI'],
    explanation: 'Explicação para júnior: "Imagine que você é um garçom em um restaurante. No modelo antigo do React, uma vez que você começava a servir uma mesa, não podia parar — mesmo que o cliente da mesa 3 estivesse impaciente. Concurrent Mode é como ter a habilidade de pausar o serviço da mesa atual, atender um pedido urgente, e depois voltar de onde parou. Tecnicamente: o React pode interromper a renderização de uma atualização menos urgente para processar uma mais urgente (como digitação do usuário). Isso é controlado com useTransition — você marca updates lentos como não urgentes e o React prioriza as interações do usuário."',
    tags: ['concurrent-mode', 'useTransition', 'comunicacao', 'explicacao', 'analogia'],
  },
  {
    id: 'ri26-049',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[PRÁTICA DE COMUNICAÇÃO] Como você apresentaria um tradeoff técnico importante para um stakeholder não técnico?',
    hints: ['Impacto no negócio', 'Sem jargão', 'Custo vs benefício', 'Recomendação clara'],
    explanation: 'Estrutura: (1) Contexto do problema em termos de negócio: "Nossa página de produtos está demorando 5 segundos para carregar — estudos mostram que cada segundo adicional reduz conversões em 7%"; (2) Opções em termos de impacto: "Opção A: investir 2 semanas, reduz o tempo para 1.5s — estimativa de aumento de X% em conversão. Opção B: solução rápida, 2 dias, reduz para 3s — menos impacto"; (3) Recomendação clara com razão: "Recomendo a Opção A porque o ROI justifica o investimento"; (4) Riscos: "O único risco é...". Nunca fale em "refatorar para Clean Architecture" — fale em "reduzir o custo de adicionar novas features em 30%".',
    tags: ['comunicacao', 'stakeholder', 'tradeoff', 'negocio', 'senior'],
  },
  {
    id: 'ri26-050',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[PRÁTICA DE PERFORMANCE] Você recebe uma reclamação: "A página de listagem de produtos está lenta com mais de 200 itens." Qual seu processo de investigação e solução?',
    hints: ['Medir antes de otimizar', 'Profiler do React', 'Virtualização', 'Paginação'],
    explanation: 'Processo completo: (1) Medir: React DevTools Profiler — identifique quais componentes são lentos e por quê (muitos renders, renders lentos); (2) Performance tab do browser → Long Tasks (JS que bloqueia a thread por >50ms); (3) Hipóteses prováveis: 200 componentes renderizando de uma vez, lógica cara em cada item, re-renders desnecessários; (4) Soluções em ordem de impacto: a) Paginação/infinite scroll (não renderize 200 itens de uma vez); b) Virtualização com react-virtual (se precisar de todos visíveis); c) React.memo em cada item de lista; d) useCallback para handlers; e) useMemo para filtros/sorts; (5) Valide com números — meça antes e depois. Nunca otimize sem dados.',
    tags: ['performance', 'investigacao', 'profiler', 'virtualizacao', 'processo', 'pratica'],
  },
  // ── FUNDAMENTOS JAVASCRIPT PARA REACT ───────────────────────────────────────
  {
    id: 'ri26-051',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA: JS FUNDAMENTAL] Explique o Event Loop. Por que `setTimeout(fn, 0)` não executa imediatamente?',
    hints: ['Call stack', 'Microtasks vs Macrotasks', 'Promise.resolve vs setTimeout'],
    explanation: 'Event Loop: (1) Call Stack executa código síncrono; (2) Quando encontra async, move para a fila de tarefas (macrotasks: setTimeout, setInterval; ou microtasks: Promise.then, queueMicrotask); (3) Quando a Call Stack fica vazia, o Event Loop processa TODAS as microtasks antes de qualquer macrotask; (4) Então processa uma macrotask, depois todas as microtasks geradas por ela, etc. `setTimeout(fn, 0)` é uma macrotask — não executa antes de todo código síncrono atual E de todas as microtasks pendentes terminarem. Por isso: `Promise.resolve().then(fn)` executa antes de `setTimeout(fn, 0)`. Crucial para entender a ordem de execução em React.',
    tags: ['event-loop', 'javascript', 'microtasks', 'macrotasks', 'setTimeout'],
  },
  {
    id: 'ri26-052',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA: JS FUNDAMENTAL] O que são closures? Como causam stale closures em React Hooks?',
    hints: ['Função que captura o escopo onde foi criada', 'useEffect com valor capturado no momento da criação'],
    explanation: 'Closure: função que tem acesso às variáveis do escopo onde foi definida, mesmo após esse escopo terminar. `function makeCounter() { let count = 0; return () => ++count; }` — a função retornada "fecha sobre" a variável `count`. Em React: `useEffect(() => { const handler = () => console.log(count) }, [])`. O `handler` captura `count` no momento da montagem (closure). Quando `count` muda, o handler ainda usa o valor antigo (stale closure). Fix: (1) Adicione `count` nas deps; (2) Use ref para acessar sempre o valor atual: `const countRef = useRef(count); countRef.current = count; // atualizado a cada render`.',
    tags: ['closures', 'javascript', 'stale-closure', 'hooks', 'pratica'],
  },
  {
    id: 'ri26-053',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: '[PRÁTICA: JS FUNDAMENTAL] Como o rendering do browser funciona? O que são Reflow e Repaint?',
    hints: ['Parse HTML/CSS', 'Layout', 'Paint', 'Composite'],
    explanation: 'Pipeline de rendering do browser: (1) Parse: HTML → DOM, CSS → CSSOM; (2) Style: combina DOM + CSSOM; (3) Layout (Reflow): calcula posição e tamanho de cada elemento; (4) Paint (Repaint): preenche pixels; (5) Composite: ordena camadas. Reflow (caro): recalcula layout — disparado por: mudar width/height/margin, adicionar/remover elementos, ler `offsetWidth` após mudanças de DOM. Repaint (menos caro): repintar sem recalcular layout — mudar color, background, visibility. Para evitar: use `transform` e `opacity` (apenas composite, sem reflow/repaint), batch DOM reads antes de writes, Virtual DOM do React minimiza manipulações desnecessárias.',
    tags: ['browser', 'reflow', 'repaint', 'layout', 'performance', 'pratica'],
  },
  {
    id: 'ri26-054',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['pleno'],
    text: '[PRÁTICA: ACESSIBILIDADE] Quais são as práticas de acessibilidade mais importantes para componentes React?',
    hints: ['HTML semântico', 'ARIA', 'Foco', 'Contraste', 'Screen readers'],
    explanation: 'Práticas essenciais: (1) HTML semântico: use `<button>` para ações, `<a>` para links, `<header>`, `<main>`, `<nav>` — não DIV tudo; (2) ARIA quando necessário: `aria-label` para ícones sem texto, `aria-expanded` para dropdowns, `role` para componentes custom; (3) Gerenciamento de foco: modais devem prender o foco (focus trap); ao fechar, retorna ao elemento que abriu; (4) Navegação por teclado: Tab, Enter, Space, Escape devem funcionar; (5) Contraste: 4.5:1 para texto normal (WCAG AA); (6) Screen readers: teste com VoiceOver (Mac) ou NVDA (Windows); (7) Textos alternativos em imagens significativas.',
    tags: ['acessibilidade', 'aria', 'focus', 'semantico', 'wcag', 'pratica'],
  },
  {
    id: 'ri26-055',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[PRÁTICA: SISTEMA DE DESIGN] Você precisa implementar um sistema de design do zero. Qual a ordem de prioridades e as decisões chave?',
    hints: ['Tokens antes de componentes', 'Primitivos antes de compostos', 'Governance'],
    explanation: 'Ordem de prioridades: (1) Design Tokens PRIMEIRO: cores, tipografia, espaçamento, border-radius, sombras como CSS variables ou JSON. Sem tokens, componentes ficam hardcoded e inconsistentes; (2) Primitivos (dumb): Button, Input, Text, Icon — sem lógica de domínio, altamente customizáveis; (3) Compostos: Card, Modal, DataTable — usam primitivos; (4) Templates: layouts de página. Decisões chave: como distribuir (npm package? monorepo?), Storybook para documentação, versioning semântico, processo de contribuição (quem aprova mudanças?), testes visuais (Chromatic). O maior risco: mover rápido sem governance → inconsistência.',
    tags: ['design-system', 'tokens', 'primitivos', 'governance', 'pratica'],
  },
  {
    id: 'ri26-056',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE PERFORMANCE] Implemente um `useVirtualList` simples para renderização de listas grandes.',
    hints: ['Calcular itens visíveis baseado no scroll', 'Altura fixa dos itens', 'containerHeight e itemHeight'],
    explanation: `\`\`\`typescript
function useVirtualList<T>(items: T[], itemHeight: number, containerHeight: number) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length - 1
  );

  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, i) => ({
    item,
    index: startIndex + i,
    offsetTop: (startIndex + i) * itemHeight,
  }));

  const totalHeight = items.length * itemHeight;
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop);

  return { visibleItems, totalHeight, onScroll };
}
// Use: apenas renderiza ~10-20 itens, independente do total
\`\`\``,
    tags: ['virtualizacao', 'useVirtualList', 'performance', 'scroll', 'pratica'],
  },
  {
    id: 'ri26-057',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE HOOKS] Implemente `useLocalStorage` — sincronizado entre tabs.',
    hints: ['storage event', 'JSON.parse/stringify', 'Tab sync com window event'],
    explanation: `\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try { return JSON.parse(localStorage.getItem(key)!) ?? initialValue; }
    catch { return initialValue; }
  });

  const setStoredValue = useCallback((newValue: T | ((prev: T) => T)) => {
    setValue(prev => {
      const next = typeof newValue === 'function' ? (newValue as Function)(prev) : newValue;
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }, [key]);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key && e.newValue) setValue(JSON.parse(e.newValue));
    };
    window.addEventListener('storage', handler); // Sincroniza entre tabs!
    return () => window.removeEventListener('storage', handler);
  }, [key]);

  return [value, setStoredValue] as const;
}
\`\`\``,
    tags: ['useLocalStorage', 'custom-hook', 'storage-event', 'tabs', 'pratica'],
  },
  {
    id: 'ri26-058',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: '[PRÁTICA DE ARQUITETURA] Como você explicaria a diferença entre SSR, SSG e CSR em uma entrevista?',
    hints: ['Quando HTML é gerado', 'Performance vs dinamismo', 'Casos de uso'],
    explanation: 'Explicação para entrevista: "Existem três principais formas de renderização no React: (1) CSR (Client-Side Rendering): o servidor envia HTML vazio + JS bundle. O React renderiza tudo no browser. Prós: interativo rapidamente após carregado, simples de hospedar. Contras: SEO ruim, tela branca inicial enquanto JS carrega. Use para: painéis internos, apps autenticadas. (2) SSR (Server-Side Rendering): cada request gera HTML no servidor. Prós: SEO ótimo, conteúdo visível imediatamente. Contras: servidor necessário, TTFB maior. Use para: páginas de produto, landing pages com dados dinâmicos. (3) SSG (Static Site Generation): HTML gerado em build time. Prós: performance máxima, CDN barato, sem servidor. Contras: dados podem estar desatualizados. Use para: blog, documentação, landing pages."',
    tags: ['ssr', 'ssg', 'csr', 'renderizacao', 'nextjs', 'entrevista'],
  },
  {
    id: 'ri26-059',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[PRÁTICA DE PERFORMANCE] Otimize esse componente que está causando lentidão: um filtro em tempo real sobre 5000 itens.',
    hints: ['useMemo para filtro', 'useDebounce para input', 'Virtualizacao para lista', 'Nao filtre no render diretamente'],
    explanation: `\`\`\`typescript
// ❌ Lento:
function ProductList({ products }) {
  const [query, setQuery] = useState('');
  // Filtra 5000 itens a cada keystroke + re-render de 5000 componentes
  const filtered = products.filter(p => p.name.includes(query));
  return <>{filtered.map(p => <ProductCard key={p.id} product={p}/>)}</>;
}

// ✅ Otimizado:
const ProductCard = memo(({ product }) => <div>{product.name}</div>); // Memo no item

function ProductList({ products }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200); // Espera parar de digitar

  const filtered = useMemo( // Não recalcula a menos que deps mudem
    () => products.filter(p => p.name.toLowerCase().includes(debouncedQuery.toLowerCase())),
    [products, debouncedQuery]
  );

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)}/>
      <VirtualList items={filtered} itemHeight={60} containerHeight={600}/> {/* Virtualiza */}
    </>
  );
}
\`\`\``,
    tags: ['performance', 'filtro', 'useMemo', 'debounce', 'virtualizacao', 'pratica'],
  },
  {
    id: 'ri26-060',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: '[DESAFIO FINAL] Você tem 45 minutos de entrevista técnica React. Qual sua estratégia?',
    hints: ['Confirme o problema', 'Pense em voz alta', 'Comece simples', 'Mencione tradeoffs'],
    explanation: 'Estratégia comprovada: (1) Primeiros 5 minutos: confirme o entendimento. "Posso fazer algumas perguntas antes de começar?" → entenda constraints, casos de uso, escala; (2) Planeje em voz alta: "Minha abordagem inicial seria X porque Y. Depois poderia otimizar para Z"; (3) Comece com solução funcional simples, depois refine — demonstra processo, não apenas produto; (4) Mencione edge cases enquanto codifica: "E se o array vier vazio? E null?"; (5) Mencione tradeoffs mesmo sem ser perguntado: "Escolhi useMemo aqui porque os filtros são caros — em uma lista pequena não seria necessário"; (6) Se travar: verbalize o raciocínio, peça dica se necessário — é melhor do que silêncio; (7) Reserve 5 min para revisar e testar.',
    tags: ['entrevista', 'estrategia', 'live-coding', 'processo', 'dicas'],
  },
  {
    id: 'ri26-061',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é React Strict Mode e por que ele renderiza componentes duas vezes em desenvolvimento?',
    hints: ['Detecta side effects', 'Apenas em desenvolvimento', 'componentDidMount chamado 2x'],
    explanation: 'React Strict Mode renderiza componentes e executa efeitos DUAS VEZES em desenvolvimento para detectar efeitos colaterais não intencionais. Se o código for puro (mesmo output para mesmo input), não há problema. Se tiver side effects que não deveriam ocorrer em renders duplos (ex: subscription duplicada), o Strict Mode expõe o bug. Em produção: sem renderizações duplas. useEffect também roda mount→unmount→mount para verificar se o cleanup está correto. Use Strict Mode em toda a aplicação para detectar problemas cedo.',
    tags: ['strict-mode', 'double-render', 'side-effects', 'desenvolvimento', 'deteccao'],
  },
  {
    id: 'ri26-062',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é React.memo e como funciona shallow comparison? Quando a memoização pode falhar?',
    hints: ['Shallow: compara referências', 'Objetos inline', 'Função sem useCallback'],
    explanation: 'React.memo previne re-renders desnecessários comparando props com shallow comparison (===). Compara apenas o primeiro nível — objetos e arrays são comparados por referência, não por valor. Quando falha: (1) Objeto inline: Component config={{debug: true}} cria novo objeto a cada render do pai — sempre "diferente"; (2) Função sem useCallback: nova referência a cada render; (3) Array inline: props=[1,2,3] cria novo array. Solução: use useMemo para objetos e useCallback para funções passadas como props.',
    tags: ['memo', 'shallow-comparison', 'referencia', 'inline-objects', 'falha'],
  },
  {
    id: 'ri26-063',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Implemente um hook `useAsync` que gerencia estados de loading, error e data.',
    hints: ['useState para loading/error/data', 'useCallback para a função', 'Cancelamento no cleanup'],
    explanation: `\`\`\`typescript
function useAsync<T>(asyncFn: () => Promise<T>, immediate = true) {
  const [state, setState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    data: T | null;
    error: Error | null;
  }>({ status: idle ? 'loading' : 'idle', data: null, error: null });

  const execute = useCallback(async () => {
    setState({ status: 'loading', data: null, error: null });
    try {
      const data = await asyncFn();
      setState({ status: 'success', data, error: null });
    } catch (error) {
      setState({ status: 'error', data: null, error: error as Error });
    }
  }, [asyncFn]);

  useEffect(() => { if (immediate) execute(); }, [execute, immediate]);

  return { ...state, execute,
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
  };
}
\`\`\``,
    tags: ['useAsync', 'custom-hook', 'loading', 'error', 'data'],
  },
  {
    id: 'ri26-064',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um sistema de toast notifications com React Context?',
    hints: ['Context para funções de adicionar/remover', 'Estado de lista de toasts', 'Auto-dismiss'],
    explanation: `\`\`\`typescript
type Toast = { id: string; message: string; type: 'success' | 'error' | 'info' };
type ToastContextValue = { addToast: (msg: string, type: Toast['type']) => void };
const ToastContext = createContext<ToastContextValue | null>(null);

function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = useCallback((message: string, type: Toast['type']) => {
    const id = crypto.randomUUID();
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(toast => toast.id !== id)), 3000);
  }, []);
  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(t => <ToastItem key={t.id} {...t} />)}
      </div>
    </ToastContext.Provider>
  );
}
export const useToast = () => useContext(ToastContext)!;
\`\`\``,
    tags: ['toast', 'context', 'notifications', 'useCallback', 'auto-dismiss'],
  },
  {
    id: 'ri26-065',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um modal reutilizável com foco preso (focus trap) em React?',
    hints: ['Portal para escapar do overflow', 'Focus trap via keydown', 'Fechar com Escape'],
    explanation: `\`\`\`typescript
function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const focusableEls = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableEls?.[0] as HTMLElement;
    const last = focusableEls?.[focusableEls.length - 1] as HTMLElement;
    first?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return createPortal(
    <div role="dialog" aria-modal="true" ref={modalRef}>{children}</div>,
    document.body
  );
}
\`\`\``,
    tags: ['modal', 'focus-trap', 'portal', 'acessibilidade', 'teclado'],
  },
  {
    id: 'ri26-066',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Suspense para data fetching? Como combinar com lazy e Error Boundary?',
    hints: ['throw Promise para Suspense', 'Error Boundary para erros', 'React 18 + bibliotecas'],
    explanation: 'Suspense para data fetching: o componente "suspende" lançando uma Promise. O Suspense boundary captura e exibe o fallback. Quando a Promise resolve, o componente re-renderiza com os dados. Implementar manualmente é complexo — use bibliotecas que suportam Suspense: React Query (suspense: true), SWR, Relay. Com React.lazy para code splitting: lazy é o caso de uso principal sempre suportado. Combine com Error Boundary: ErrorBoundary (erros) > Suspense (loading) > Componente. Em Next.js: loading.tsx é automático.',
    tags: ['suspense', 'data-fetching', 'lazy', 'error-boundary', 'react-query'],
  },
  {
    id: 'ri26-067',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são React Server Components (RSC)? Como diferem de componentes com SSR?',
    hints: ['Zero JS no cliente', 'Acesso direto ao servidor', 'Serialização das props'],
    explanation: 'RSC (React 19/Next.js App Router): componentes que rodam APENAS no servidor — sem JavaScript enviado ao browser. Diferença de SSR: SSR gera HTML no servidor mas o código React também vai ao cliente para hidratação. RSC: nunca vai ao cliente — sem hydration, zero bundle size para esse componente. Pode: acessar banco diretamente, ler filesystem, usar segredos. Não pode: hooks de estado, event handlers, browser APIs. Props de RSC para Client Components devem ser serializáveis (sem funções, sem Date nativo). Mistura RSC + Client Components é o modelo do Next.js App Router.',
    tags: ['rsc', 'server-components', 'zero-js', 'hidratacao', 'nextjs'],
  },
  {
    id: 'ri26-068',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como otimizar formulários em React que têm muitos campos sem re-renderizar tudo?',
    hints: ['React Hook Form não controlado', 'Dividir state', 'Evitar state único grande'],
    explanation: 'Problema: um único state de objeto para todos os campos faz o formulário inteiro re-renderizar a cada keystroke. Soluções: (1) React Hook Form: usa refs internamente (não controlado) — sem re-renders por digitação; validação apenas quando necessário; (2) Dividir state: useState por campo individualmente — re-render apenas do campo que mudou; (3) Agrupar campos relacionados em sub-componentes memoizados; (4) Validação diferida: valide no blur, não no change; (5) Zustand ou similar para form state global com seletores granulares. RHF é a solução mais comum e eficiente.',
    tags: ['formularios', 'performance', 'react-hook-form', 're-render', 'optimizacao'],
  },
  {
    id: 'ri26-069',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Compound Components? Implemente um Select acessível.',
    hints: ['Context interno', 'Componentes filhos compartilham estado', 'API de composição'],
    explanation: `Compound Components: múltiplos componentes que trabalham juntos compartilhando estado implícito.
\`\`\`tsx
const SelectContext = createContext<SelectContextValue>(null!);
function Select({ children, value, onChange }: SelectProps) {
  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div role="listbox">{children}</div>
    </SelectContext.Provider>
  );
}
function Option({ value, children }: OptionProps) {
  const { value: selected, onChange } = useContext(SelectContext);
  return (
    <div role="option" aria-selected={value === selected}
      onClick={() => onChange(value)} tabIndex={0}>
      {children}
    </div>
  );
}
Select.Option = Option;
// Uso: <Select value={v} onChange={setV}><Select.Option value="a">A</Select.Option></Select>
\`\`\``,
    tags: ['compound-components', 'context', 'composicao', 'acessivel', 'api'],
  },
  {
    id: 'ri26-070',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como implementar um sistema de feature flags em React com Context e tipagem TypeScript?',
    hints: ['Record de flags', 'useFeatureFlag hook', 'Provider com configuração remota'],
    explanation: `\`\`\`typescript
type FeatureFlags = { "new-ui": boolean; "beta-checkout": boolean; "ai-recommendations": boolean };

const FeatureFlagContext = createContext<FeatureFlags>({
  "new-ui": false, "beta-checkout": false, "ai-recommendations": false,
});

function FeatureFlagProvider({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<FeatureFlags>(() => ({
    "new-ui": false, "beta-checkout": false, "ai-recommendations": false,
  }));
  useEffect(() => {
    fetchFlags().then(setFlags); // Busca config remota
  }, []);
  return <FeatureFlagContext.Provider value={flags}>{children}</FeatureFlagContext.Provider>;
}

function useFeatureFlag<K extends keyof FeatureFlags>(flag: K): boolean {
  return useContext(FeatureFlagContext)[flag];
}

// Uso: const showNewUI = useFeatureFlag("new-ui");
\`\`\``,
    tags: ['feature-flags', 'context', 'typescript', 'remoto', 'tipagem'],
  },
  {
    id: 'ri26-071',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar paginação com React Query (TanStack Query)?',
    hints: ['keepPreviousData', 'page state', 'prefetch da próxima página'],
    explanation: `\`\`\`typescript
function ProductList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    placeholderData: keepPreviousData, // Mantém dados antigos enquanto carrega novos
  });
  const queryClient = useQueryClient();

  // Prefetch da próxima página
  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["products", page + 1],
        queryFn: () => fetchProducts(page + 1),
      });
    }
  }, [data, page, isPreviousData, queryClient]);

  return (
    <>
      {data?.items.map(item => <ProductCard key={item.id} item={item} />)}
      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Anterior</button>
      <button onClick={() => setPage(p => p + 1)} disabled={isPreviousData || !data?.hasMore}>Próxima</button>
      {isFetching && <Spinner />}
    </>
  );
}
\`\`\``,
    tags: ['paginacao', 'react-query', 'prefetch', 'keepPreviousData', 'paginas'],
  },
  {
    id: 'ri26-072',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como implementar optimistic updates com React Query?',
    hints: ['onMutate', 'cancelQueries', 'rollback em onError', 'invalidate em onSettled'],
    explanation: `\`\`\`typescript
const queryClient = useQueryClient();
const { mutate } = useMutation({
  mutationFn: (todo: Todo) => updateTodo(todo),
  onMutate: async (newTodo) => {
    // Cancela refetch em andamento
    await queryClient.cancelQueries({ queryKey: ["todos"] });
    // Snapshot do estado anterior
    const previousTodos = queryClient.getQueryData(["todos"]);
    // Optimistic update
    queryClient.setQueryData(["todos"], (old: Todo[]) =>
      old.map(t => t.id === newTodo.id ? newTodo : t)
    );
    return { previousTodos }; // Contexto para rollback
  },
  onError: (err, newTodo, context) => {
    // Rollback em caso de erro
    queryClient.setQueryData(["todos"], context?.previousTodos);
  },
  onSettled: () => {
    // Sempre revalida após success ou error
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
\`\`\``,
    tags: ['optimistic-update', 'react-query', 'onMutate', 'rollback', 'cancelQueries'],
  },
  {
    id: 'ri26-073',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useId` em React 18? Como resolver o problema de IDs únicos em SSR?',
    hints: ['Gera ID consistente entre server e client', 'Accessibility', 'Sem Math.random'],
    explanation: 'useId() gera um ID único e consistente entre o render do servidor e do cliente — evitando hydration mismatch. Problema antigo: usar Math.random() ou Date.now() para gerar IDs de atributos ARIA: cada render (servidor e cliente) gerava valores diferentes → hydration mismatch. Com useId: const id = useId() → sempre o mesmo ID para o mesmo componente no mesmo local da árvore. Uso: id e htmlFor de inputs, aria-labelledby, aria-describedby. Não use para keys de listas (use IDs dos dados). Prefixo configurável: useId() com useId prefix no createRoot.',
    tags: ['useId', 'ssr', 'hydration', 'acessibilidade', 'aria'],
  },
  {
    id: 'ri26-074',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useTransition` e `startTransition`? Como melhoram a responsividade da UI?',
    hints: ['Marcar updates como não-urgentes', 'Input permanece responsivo', 'isPending'],
    explanation: 'startTransition: marca um update de state como não-urgente — React pode interromper e priorizar interações do usuário. Exemplo: pesquisa em lista grande. const [isPending, startTransition] = useTransition(); onChange = (e) => { setQuery(e.target.value); // Urgente: input atualiza imediatamente startTransition(() => { setFilteredList(filter(list, e.target.value)); // Não urgente }); }. isPending: true enquanto o update não-urgente está pendente — pode mostrar spinner sutil. Sem startTransition: digitação rápida trava enquanto filtra 10k itens.',
    tags: ['useTransition', 'startTransition', 'concurrent', 'responsividade', 'prioridade'],
  },
  {
    id: 'ri26-075',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useDeferredValue`? Como difere de `useTransition`?',
    hints: ['Defere update de um valor', 'Sem controle sobre qual código é não-urgente', 'Recebe o valor'],
    explanation: 'useDeferredValue(value): retorna uma versão "atrasada" do valor — durante um render urgente, exibe o valor antigo até que o React tenha tempo de processar o novo. Diferença de useTransition: useTransition você controla qual code path é não-urgente (você faz o setState). useDeferredValue: você recebe um prop/valor que pode vir de fora, sem controle sobre o setState. const deferredQuery = useDeferredValue(query) — deferredQuery muda após o query mas em prioridade menor. Passe deferredQuery para componentes pesados que filtram/renderizam.',
    tags: ['useDeferredValue', 'useTransition', 'diferenca', 'deferido', 'concurrent'],
  },
  {
    id: 'ri26-076',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `useImperativeHandle`? Quando usar com `forwardRef`?',
    hints: ['Expor API controlada via ref', 'Não expor o DOM inteiro', 'Design system'],
    explanation: 'useImperativeHandle permite controlar o que é exposto quando pai acessa ref de filho. Sem useImperativeHandle: pai tem acesso ao DOM element inteiro. Com useImperativeHandle: expõe apenas a API que você definiu. forwardRef((props, ref) => { useImperativeHandle(ref, () => ({ focus: () => inputRef.current?.focus(), shake: () => inputRef.current?.classList.add("shake"), })); return input }). Pai pode chamar ref.current.focus() e ref.current.shake() mas não tem acesso ao DOM element. Ideal para componentes de design system.',
    tags: ['useImperativeHandle', 'forwardRef', 'ref', 'api-controlada', 'design-system'],
  },
  {
    id: 'ri26-077',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como lidar com erros em async/await dentro de useEffect?',
    hints: ['try/catch dentro do efeito', 'Não pode ser async o useEffect', 'Estado de erro'],
    explanation: 'useEffect não pode receber async function diretamente (retornaria Promise em vez de função de cleanup). Padrão correto: const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { try { const data = await api.get(url); setData(data); } catch (err) { setError(err); } finally { setLoading(false); } }; fetchData(); return () => controller.abort(); }, [url]). Para centralizar: use React Query ou custom hook useAsync. Com AbortController: verifique if (err.name === "AbortError") return para não setar erro ao cancelar.',
    tags: ['useEffect', 'async', 'try-catch', 'erro', 'AbortController'],
  },
  {
    id: 'ri26-078',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um hook `useIntersectionObserver` para lazy loading?',
    hints: ['IntersectionObserver', 'useRef para o elemento', 'Cleanup no return'],
    explanation: `\`\`\`typescript
function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<Element>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}

// Uso:
function LazyImage({ src }: { src: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  return <img ref={ref} src={isIntersecting ? src : undefined} alt="" />;
}
\`\`\``,
    tags: ['useIntersectionObserver', 'lazy-loading', 'custom-hook', 'viewport', 'imagem'],
  },
  {
    id: 'ri26-079',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar infinite scroll em React com React Query?',
    hints: ['useInfiniteQuery', 'getNextPageParam', 'IntersectionObserver', 'flattened data'],
    explanation: `\`\`\`typescript
function InfiniteList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam = 1 }) => fetchItems(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [isIntersecting, hasNextPage]);

  const items = data?.pages.flatMap(page => page.items) ?? [];
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
      <div ref={ref}>{isFetchingNextPage && <Spinner />}</div>
    </ul>
  );
}
\`\`\``,
    tags: ['infinite-scroll', 'useInfiniteQuery', 'cursor', 'intersection', 'react-query'],
  },
  {
    id: 'ri26-080',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você estruturaria testes de integração para um fluxo de checkout em React?',
    hints: ['Testing Library', 'Mockar API com MSW', 'Testar fluxo completo do usuário'],
    explanation: `Teste de integração do fluxo de checkout:
\`\`\`typescript
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer(
  http.post("/api/orders", () => HttpResponse.json({ id: "order-123" }))
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("usuário completa checkout com sucesso", async () => {
  const user = userEvent.setup();
  render(<CheckoutFlow />);

  await user.type(screen.getByLabelText(/nome no cartão/i), "João Silva");
  await user.type(screen.getByLabelText(/número do cartão/i), "4111111111111111");
  await user.click(screen.getByRole("button", { name: /finalizar compra/i }));

  await screen.findByText(/pedido #order-123 confirmado/i);
  expect(screen.getByText(/email de confirmação enviado/i)).toBeInTheDocument();
});
\`\`\``,
    tags: ['integration-test', 'checkout', 'msw', 'userEvent', 'fluxo'],
  },
  {
    id: 'ri26-081',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é reconciliação de listas no React? Por que `key` é fundamental?',
    hints: ['Identificar itens entre renders', 'Sem key: compara por posição', 'Com key: identidade estável'],
    explanation: 'Quando React reconcilia uma lista, precisa saber quais itens adicionaram, removeram ou moveram. Sem key: compara elemento por posição — se você adiciona um item no início, React pensa que TODOS os itens mudaram (eles se "deslocaram"). Com key estável: React sabe exatamente qual item é qual — apenas os efetivamente novos/removidos/alterados são processados. Resultado: performance melhor e sem bugs de state (o input text value fica no item correto). Key deve ser estável, única entre irmãos e baseada nos dados (não no índice de arrays dinâmicos).',
    tags: ['reconciliacao', 'key', 'lista', 'identidade', 'performance'],
  },
  {
    id: 'ri26-082',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `useEffect` cleanup? Por que é importante para evitar memory leaks?',
    hints: ['Retornar função de cleanup', 'Roda antes do próximo efeito e na desmontagem', 'Remover listeners, cancelar subscriptions'],
    explanation: 'useEffect pode retornar uma função de cleanup que roda: (1) Antes do próximo efeito (quando as deps mudam); (2) Quando o componente desmonta. Sem cleanup: event listeners se acumulam, setIntervals continuam rodando, WebSocket connections ficam abertas, subscriptions disparam setState em componentes desmontados (Warning: Can\'t perform state update on an unmounted component). Cleanup correto: return () => { window.removeEventListener("click", handler); clearInterval(id); socket.close(); subscription.unsubscribe(); }. Todo recurso "aberto" deve ser "fechado" no cleanup.',
    tags: ['useEffect', 'cleanup', 'memory-leak', 'desmontagem', 'listeners'],
  },
  {
    id: 'ri26-083',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um componente de Rate/Stars em React acessível?',
    hints: ['Botões de rádio', 'aria-label', 'Hover preview', 'Keyboard navigation'],
    explanation: `Componente Stars acessível — usa radio buttons nativos:
\`\`\`tsx
function StarRating({ value, onChange, max = 5 }: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <fieldset>
      <legend>Avaliação</legend>
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <label key={star} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(null)}>
          <input type="radio" name="rating" value={star}
            checked={value === star} onChange={() => onChange(star)}
            style={{ position: "absolute", opacity: 0 }} />
          <span aria-hidden="true">{(hover ?? value) >= star ? "★" : "☆"}</span>
          <span className="sr-only">{star} {star === 1 ? "estrela" : "estrelas"}</span>
        </label>
      ))}
    </fieldset>
  );
}
\`\`\``,
    tags: ['star-rating', 'acessivel', 'radio-button', 'hover', 'aria'],
  },
  {
    id: 'ri26-084',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar lazy loading de imagens com `loading="lazy"` e IntersectionObserver?',
    hints: ['loading=lazy nativo', 'IntersectionObserver para controle', 'src swap', 'placeholder'],
    explanation: `Duas abordagens:
\`\`\`tsx
// 1. Nativo — simples e eficiente:
<img src={url} alt="Produto" loading="lazy" />

// 2. Customizado com IntersectionObserver (mais controle):
function LazyImage({ src, placeholder, alt }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setLoaded(true); observer.unobserve(img); }
    }, { threshold: 0.1 });
    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  return <img ref={imgRef} src={loaded ? src : placeholder} alt={alt}
    style={{ filter: loaded ? "none" : "blur(10px)", transition: "filter 0.3s" }} />;
}
\`\`\``,
    tags: ['lazy-image', 'loading-lazy', 'intersection-observer', 'placeholder', 'blur'],
  },
  {
    id: 'ri26-085',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como criar um componente de Accordion acessível com React?',
    hints: ['aria-expanded', 'aria-controls', 'Keyboard: Enter/Space', 'Único ou múltiplo aberto'],
    explanation: `Accordion acessível:
\`\`\`tsx
function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = \`panel-\${item.id}\`;
        return (
          <div key={item.id}>
            <button
              aria-expanded={isOpen} aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >{item.title}</button>
            <div id={panelId} role="region" hidden={!isOpen}
              aria-labelledby={\`btn-\${item.id}\`}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
\`\`\``,
    tags: ['accordion', 'acessivel', 'aria-expanded', 'keyboard', 'toggle'],
  },
  {
    id: 'ri26-086',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como passar dados de componente filho para pai em React?',
    hints: ['Callback prop', 'Lifting state up', 'Evento com dados'],
    explanation: 'React tem fluxo unidirecional — dados vão de pai para filho via props. Para comunicação inversa (filho → pai), passe uma função como prop: function Parent() { const [value, setValue] = useState(""); return <Child onChange={setValue} />; }. function Child({ onChange }) { return <input onChange={(e) => onChange(e.target.value)} />; }. O filho chama a função passada pelo pai com os dados. O pai decide o que fazer com esses dados. Padrão: callback prop geralmente nomeado com prefixo "on": onChange, onSubmit, onSelect, onDelete.',
    tags: ['filho-para-pai', 'callback', 'lifting-state', 'comunicacao', 'unidirecional'],
  },
  {
    id: 'ri26-087',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um hook `useClickOutside` para fechar dropdowns?',
    hints: ['mousedown no document', 'contains()', 'Cleanup'],
    explanation: `\`\`\`typescript
function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // mousedown em vez de click para capturar antes de outros handlers
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

// Uso:
function Dropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <ul>...</ul>}
    </div>
  );
}
\`\`\``,
    tags: ['useClickOutside', 'dropdown', 'document', 'contains', 'cleanup'],
  },
  {
    id: 'ri26-088',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Virtualization em React? Implemente um Virtual List simples.',
    hints: ['Render apenas o visível', 'Espaço reservado acima e abaixo', 'scrollTop + itemHeight'],
    explanation: `Virtual List com posicionamento absoluto:
\`\`\`tsx
function VirtualList({ items, itemHeight = 50, visibleCount = 10 }: VirtualListProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const startIdx = Math.floor(scrollTop / itemHeight);
  const endIdx = Math.min(startIdx + visibleCount + 1, items.length);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIdx * itemHeight;

  return (
    <div style={{ height: visibleCount * itemHeight, overflow: "auto" }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}>
      <div style={{ height: totalHeight, position: "relative" }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {items.slice(startIdx, endIdx).map((item, i) => (
            <div key={startIdx + i} style={{ height: itemHeight }}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Renderiza apenas ~11 itens independente de quantos existam
\`\`\``,
    tags: ['virtual-list', 'virtualizacao', 'scroll', 'posicionamento', 'performance'],
  },
  {
    id: 'ri26-089',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são "controlled" e "uncontrolled" inputs? Quando usar React Hook Form?',
    hints: ['Controlled: valor no state', 'Uncontrolled: DOM controla', 'RHF: performance'],
    explanation: 'Controlled: `<input value={state} onChange={setStateFromEvent}>` — React controla o valor. Re-renderiza a cada keystroke. Bom para validação em tempo real, transformação de input. Uncontrolled: `<input ref={inputRef}>` — DOM controla o valor, você acessa via ref quando necessário. Sem re-renders por keystroke. React Hook Form usa uncontrolled inputs internamente — performance superior para formulários grandes. Quando usar RHF: formulários com muitos campos, validação complexa (integra com Zod), ou quando performance é crítica. Para formulários simples com 1-3 campos: useState controlado é suficiente.',
    tags: ['controlled', 'uncontrolled', 'react-hook-form', 'performance', 'formularios'],
  },
  {
    id: 'ri26-090',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um componente de Tabs acessível com React?',
    hints: ['role tablist/tab/tabpanel', 'aria-selected', 'Setas do teclado', 'aria-controls'],
    explanation: `\`\`\`tsx
function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);
  const handleKeyDown = (e: KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") setActive((idx + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((idx - 1 + tabs.length) % tabs.length);
    if (e.key === "Home") setActive(0);
    if (e.key === "End") setActive(tabs.length - 1);
  };
  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, i) => (
          <button key={i} role="tab" aria-selected={active === i}
            aria-controls={\`panel-\${i}\`} id={\`tab-\${i}\`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)} onKeyDown={(e) => handleKeyDown(e, i)}>
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div key={i} role="tabpanel" id={\`panel-\${i}\`} aria-labelledby={\`tab-\${i}\`}
          hidden={active !== i}>{tab.content}</div>
      ))}
    </div>
  );
}
\`\`\``,
    tags: ['tabs', 'acessivel', 'tablist', 'aria-selected', 'keyboard'],
  },
]
