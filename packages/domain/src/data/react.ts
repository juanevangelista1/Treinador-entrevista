import type { Question } from '../session/types'

export const reactQuestions: Question[] = [
  // ── FUNDAMENTALS ────────────────────────────────────────────────────────────
  {
    id: 'react-001',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que é o Virtual DOM no React?',
    options: [
      { id: 'a', text: 'Uma cópia em memória da estrutura da página, usada para calcular diferenças antes de atualizar o DOM real', isCorrect: true },
      { id: 'b', text: 'Um DOM alternativo que substitui completamente o DOM do navegador', isCorrect: false },
      { id: 'c', text: 'Uma API para manipular diretamente o HTML', isCorrect: false },
      { id: 'd', text: 'Um banco de dados em memória para o estado da aplicação', isCorrect: false },
    ],
    hints: ['O React compara duas versões do Virtual DOM para encontrar diferenças (diffing)'],
    explanation: 'O Virtual DOM é uma representação leve do DOM real armazenada em memória como objetos JavaScript. Quando o estado muda, o React cria um novo Virtual DOM, compara com o anterior (reconciliation/diffing) e aplica apenas as mudanças necessárias no DOM real, tornando as atualizações eficientes.',
    tags: ['virtual-dom', 'performance', 'reconciliation', 'fundamentos'],
  },
  {
    id: 'react-002',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a diferença entre `state` e `props` em React?',
    options: [
      { id: 'a', text: 'State e props são a mesma coisa com nomes diferentes', isCorrect: false },
      { id: 'b', text: 'State é gerenciado internamente pelo componente; props são passadas pelo componente pai e são read-only', isCorrect: true },
      { id: 'c', text: 'Props podem ser modificadas pelo componente filho; state não pode', isCorrect: false },
      { id: 'd', text: 'State é para dados do servidor; props são para dados do cliente', isCorrect: false },
    ],
    hints: ['Pense em qual componente "possui" cada dado'],
    explanation: 'State é privado e controlado pelo próprio componente — ele pode ser atualizado via setState/useState. Props são dados passados do pai para o filho e são imutáveis dentro do filho. Um componente pode passar seu state como prop para um filho.',
    tags: ['state', 'props', 'fundamentos', 'componentes'],
  },
  {
    id: 'react-003',
    domain: 'react',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'O que é JSX e como o navegador o interpreta?',
    hints: ['JSX não é HTML', 'Babel faz a transpilação'],
    explanation: 'JSX é uma extensão de sintaxe do JavaScript que se parece com HTML. O navegador não entende JSX diretamente — ele é transpilado por ferramentas como Babel para chamadas `React.createElement()`. Por exemplo, `<h1>Olá</h1>` vira `React.createElement("h1", null, "Olá")`.',
    tags: ['jsx', 'babel', 'transpilacao', 'fundamentos'],
  },
  {
    id: 'react-004',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual das opções abaixo é um componente funcional válido em React?',
    options: [
      { id: 'a', text: 'function Greeting(props) { return <h1>Olá, {props.name}</h1> }', isCorrect: true },
      { id: 'b', text: 'function greeting(props) { return <h1>Olá</h1> }', isCorrect: false },
      { id: 'c', text: 'const Greeting = (props) => { <h1>Olá</h1> }', isCorrect: false },
      { id: 'd', text: 'Greeting = function(props) { return <h1>Olá</h1> }', isCorrect: false },
    ],
    hints: ['Componentes React devem começar com letra maiúscula'],
    explanation: 'Componentes funcionais devem começar com letra maiúscula (para o JSX distinguir de tags HTML), receber props como parâmetro e retornar JSX explicitamente. Arrow functions sem `return` explícito (sem chaves) funcionam; com chaves precisam do `return`.',
    tags: ['componentes', 'funcional', 'jsx', 'fundamentos'],
  },
  {
    id: 'react-005',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são componentes controlados e não-controlados em formulários React? Qual é a diferença?',
    hints: ['Controlado = React controla o valor do input', 'Não-controlado = o DOM controla o valor'],
    explanation: 'Componente controlado: o valor do input é gerenciado pelo state do React via `value` e `onChange`. O React é a "única fonte da verdade". Componente não-controlado: o valor é gerenciado pelo próprio DOM, acessado via `ref`. Controlados são preferidos pois facilitam validação e sincronização com outros estados.',
    tags: ['formularios', 'controlado', 'nao-controlado', 'refs'],
  },
  {
    id: 'react-006',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Por que a prop `key` é necessária em listas de elementos React?',
    options: [
      { id: 'a', text: 'Para aplicar CSS específico a cada item', isCorrect: false },
      { id: 'b', text: 'Para ajudar o React a identificar quais itens foram adicionados, removidos ou reordenados durante a reconciliação', isCorrect: true },
      { id: 'c', text: 'Para passar dados entre componentes irmãos', isCorrect: false },
      { id: 'd', text: 'É obrigatório apenas com TypeScript', isCorrect: false },
    ],
    hints: ['O React precisa rastrear cada elemento da lista entre re-renders'],
    explanation: 'A prop `key` permite ao React identificar unicamente cada elemento em uma lista. Sem ela, o React usa a posição do índice, o que causa bugs quando a lista é reordenada ou filtrada — estado local dos componentes pode ser associado ao item errado. Use IDs estáveis e únicos dos dados.',
    tags: ['key', 'listas', 'reconciliation', 'fundamentos'],
  },
  {
    id: 'react-007',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "lifting state up" em React e quando você deve aplicar esse padrão?',
    hints: ['Compartilhamento de estado entre componentes irmãos', 'Mova o estado para o ancestral comum mais próximo'],
    explanation: '"Lifting state up" é mover o estado para o ancestral comum mais próximo quando dois ou mais componentes precisam compartilhar e sincronizar o mesmo dado. O estado fica no pai, que passa o valor e a função de atualização como props para os filhos. É o padrão fundamental antes de introduzir Context ou estado global.',
    tags: ['state-lifting', 'compartilhamento', 'arquitetura', 'fundamentos'],
  },
  {
    id: 'react-008',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Fragments em React e por que são úteis?',
    options: [
      { id: 'a', text: 'São componentes para quebrar a aplicação em partes menores para lazy loading', isCorrect: false },
      { id: 'b', text: 'Permitem agrupar múltiplos elementos sem adicionar nós extras ao DOM', isCorrect: true },
      { id: 'c', text: 'São um tipo especial de HOC para reutilização de lógica', isCorrect: false },
      { id: 'd', text: 'São usados para criar portais fora da hierarquia do DOM', isCorrect: false },
    ],
    hints: ['`<>...</>` é a sintaxe curta de Fragment'],
    explanation: 'Fragments (`<React.Fragment>` ou `<>`) permitem retornar múltiplos elementos de um componente sem criar um nó div extra no DOM. Isso é importante para layouts CSS (Flexbox/Grid) onde nós extras interferem na estrutura, e também melhora a semântica HTML.',
    tags: ['fragments', 'dom', 'jsx', 'layout'],
  },
  {
    id: 'react-009',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique o que são props drilling e como ele pode ser problemático em aplicações maiores.',
    hints: ['Props drilling = passar props por múltiplos níveis de componentes', 'Context API resolve isso'],
    explanation: 'Prop drilling ocorre quando você precisa passar dados através de vários componentes intermediários que não precisam do dado — apenas repassam ao filho mais profundo. Isso dificulta manutenção (mudar uma prop requer alterar vários arquivos), aumenta o acoplamento e torna o refactoring mais arriscado. Context API, Zustand ou composição de componentes são alternativas.',
    tags: ['prop-drilling', 'context', 'manutencao', 'arquitetura'],
  },
  {
    id: 'react-010',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença entre um componente stateful e stateless?',
    options: [
      { id: 'a', text: 'Componentes stateless não podem receber props', isCorrect: false },
      { id: 'b', text: 'Componentes stateful gerenciam estado interno; stateless apenas renderizam baseados em props sem estado próprio', isCorrect: true },
      { id: 'c', text: 'Componentes stateful são apenas class components; stateless são apenas function components', isCorrect: false },
      { id: 'd', text: 'Não há diferença desde o React 16.8', isCorrect: false },
    ],
    hints: ['Desde os Hooks, function components também podem ter estado'],
    explanation: 'Stateful: componente que mantém estado interno (via useState, useReducer ou this.state em classes). Stateless: apenas recebe props e renderiza — sem estado próprio. Com os Hooks no React 16.8, a distinção deixou de ser função vs. classe; qualquer function component pode ser stateful.',
    tags: ['stateful', 'stateless', 'hooks', 'componentes'],
  },
  // ── HOOKS ───────────────────────────────────────────────────────────────────
  {
    id: 'react-011',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a regra fundamental dos React Hooks?',
    options: [
      { id: 'a', text: 'Hooks só podem ser usados em class components', isCorrect: false },
      { id: 'b', text: 'Hooks devem ser chamados no nível superior — nunca dentro de loops, condicionais ou funções aninhadas', isCorrect: true },
      { id: 'c', text: 'Hooks não podem aceitar parâmetros', isCorrect: false },
      { id: 'd', text: 'Só pode usar um Hook por componente', isCorrect: false },
    ],
    hints: ['O React rastreia a ordem de chamada dos Hooks entre renders'],
    explanation: 'O React mantém uma lista interna de Hooks indexada pela ordem de chamada. Se você chama um Hook condicionalmente, a ordem pode mudar entre renders, corrompendo o estado interno. Por isso: sempre no nível superior, sempre na mesma ordem. O ESLint plugin `eslint-plugin-react-hooks` detecta violações.',
    tags: ['hooks', 'regras', 'fundamentos', 'eslint'],
  },
  {
    id: 'react-012',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique o hook `useState`. O que acontece quando você chama a função de atualização com o mesmo valor atual?',
    hints: ['O React usa Object.is() para comparar valores', 'Mesmo valor = sem re-render'],
    explanation: '`useState` retorna um par [valor, setValor]. Quando você chama `setValor(novoValor)`, o React usa `Object.is()` para comparar o novo valor com o atual. Se forem iguais, o React ignora a atualização e não re-renderiza o componente (bail-out). Para objetos/arrays, como a referência muda, sempre causa re-render mesmo que o conteúdo seja o mesmo.',
    tags: ['useState', 'bailout', 're-render', 'hooks'],
  },
  {
    id: 'react-013',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como funciona o `useEffect`? Explique as diferenças entre sem array de dependências, array vazio e array com dependências.',
    hints: ['Execução após o render', 'Array de dependências controla quando o efeito é executado'],
    explanation: 'useEffect executa após a renderização ser commitada ao DOM. (1) Sem deps: executa após todo render. (2) `[]`: executa apenas uma vez após o primeiro render (mount). (3) `[dep1, dep2]`: executa quando qualquer dependência muda. A função de retorno (cleanup) é chamada antes do próximo efeito e no unmount — use para cancelar subscriptions, timers, etc.',
    tags: ['useEffect', 'lifecycle', 'cleanup', 'dependencias'],
  },
  {
    id: 'react-014',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Para que serve o `useRef`? Quais são os dois principais casos de uso?',
    hints: ['Não causa re-render quando muda', 'Acesso direto a elementos do DOM'],
    explanation: '`useRef` retorna um objeto mutável `{current: initialValue}` que persiste entre renders sem causar re-render quando modificado. Dois casos de uso principais: (1) Armazenar referência a um elemento DOM (ex: focar um input); (2) Armazenar um valor mutável que você quer preservar entre renders mas sem causar re-render (ex: armazenar um timer ID, o valor anterior de um state).',
    tags: ['useRef', 'dom', 'mutavel', 'hooks'],
  },
  {
    id: 'react-015',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique a diferença entre `useEffect` e `useLayoutEffect`. Quando você usaria cada um?',
    hints: ['Timing em relação ao paint do browser', 'useLayoutEffect bloqueia o paint'],
    explanation: '`useEffect` executa de forma assíncrona após o browser pintar a tela — não bloqueia a renderização visual. `useLayoutEffect` executa de forma síncrona após as mutações do DOM mas ANTES do browser pintar — como o antigo `componentDidMount`. Use `useLayoutEffect` quando precisar medir o DOM (getBoundingClientRect) ou fazer mutações que causariam flickering se fossem síncronas. Prefira `useEffect` para tudo mais — é mais performático.',
    tags: ['useLayoutEffect', 'useEffect', 'paint', 'timing', 'dom'],
  },
  {
    id: 'react-016',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um "stale closure" em React? Dê um exemplo e explique como evitar.',
    hints: ['Closure captura variáveis no momento de sua criação', 'Dependências do useEffect'],
    explanation: 'Stale closure ocorre quando uma função (dentro de useEffect, setTimeout, etc.) captura uma variável de um render antigo, enquanto o valor atual já mudou. Exemplo: `useEffect(() => { setInterval(() => console.log(count), 1000) }, [])` — `count` sempre mostrará 0. Solução: adicionar `count` nas dependências, usar o callback funcional `setCount(prev => prev + 1)`, ou usar `useRef` para o valor.',
    tags: ['stale-closure', 'closure', 'useEffect', 'bugs'],
  },
  {
    id: 'react-017',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique `useCallback` e `useMemo`. Como eles diferem e quando devem ser usados?',
    hints: ['useMemo memoiza valores; useCallback memoiza funções', 'Memoização tem custo'],
    explanation: '`useCallback(fn, deps)` retorna a mesma instância da função entre renders enquanto as deps não mudarem. `useMemo(fn, deps)` retorna o resultado memoizado de um cálculo. Use `useCallback` quando passar funções para componentes com `React.memo` (evita re-renders desnecessários). Use `useMemo` para cálculos computacionalmente caros. NUNCA overuse — a memoização tem custo de memória e comparação de deps; só aplique quando houver problema mensurável de performance.',
    tags: ['useCallback', 'useMemo', 'memoizacao', 'performance'],
  },
  {
    id: 'react-018',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `useContext` e como ele resolve o problema de prop drilling?',
    hints: ['createContext + Provider + useContext', 'Todos consumidores re-renderizam quando o valor muda'],
    explanation: '`useContext(Context)` permite acessar o valor do Context mais próximo na árvore sem passar props manualmente. O padrão: (1) `createContext(defaultValue)` cria o contexto; (2) `<Context.Provider value={dados}>` envolve os componentes que precisam do dado; (3) qualquer descendente usa `useContext(Context)` para acessar. Atenção: qualquer mudança no valor do Provider faz TODOS os consumidores re-renderizarem.',
    tags: ['useContext', 'context', 'prop-drilling', 'provider'],
  },
  {
    id: 'react-019',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique `useReducer`. Quando é mais adequado que `useState`?',
    hints: ['Pattern similar ao Redux', 'Estado complexo com múltiplas sub-propriedades'],
    explanation: '`useReducer(reducer, initialState)` gerencia estado via uma função redutora pura `(state, action) => newState`. Prefira a `useState` quando: (1) o estado tem múltiplas sub-propriedades interdependentes; (2) o próximo estado depende do anterior de forma complexa; (3) a lógica de atualização é suficientemente complexa para centralizar; (4) você quer testabilidade — reducers puros são facilmente testáveis sem mock do React.',
    tags: ['useReducer', 'reducer', 'estado-complexo', 'testabilidade'],
  },
  {
    id: 'react-020',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você criaria um custom hook? Quais são as convenções e benefícios?',
    hints: ['Deve começar com "use"', 'Pode usar outros Hooks internamente'],
    explanation: 'Custom hooks são funções JavaScript que começam com "use" e podem chamar outros Hooks. Benefícios: (1) extração e reutilização de lógica stateful entre componentes; (2) separação de concerns; (3) testabilidade isolada da lógica. Exemplo: `useFetch`, `useLocalStorage`, `useDebounce`. A convenção "use" permite que o ESLint plugin das regras de Hooks valide seu uso.',
    tags: ['custom-hooks', 'reutilizacao', 'separacao-concerns', 'hooks'],
  },
  // ── PERFORMANCE ─────────────────────────────────────────────────────────────
  {
    id: 'react-021',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `React.memo`? Quando você o usaria e quais são suas limitações?',
    hints: ['Equivalente ao PureComponent para function components', 'Comparação superficial de props'],
    explanation: '`React.memo(Component)` é um HOC que previne re-renders quando as props não mudaram, fazendo comparação superficial (shallow comparison). Use quando: o componente é re-renderizado frequentemente com as mesmas props, e o render é custoso. Limitações: (1) comparação superficial — objetos/funções com nova referência sempre causam re-render; (2) tem custo de comparação; (3) não resolve renders causados por Context ou state interno.',
    tags: ['react-memo', 'performance', 're-render', 'shallow-comparison'],
  },
  {
    id: 'react-022',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é code splitting em React? Como você implementa com `React.lazy` e `Suspense`?',
    hints: ['Divide o bundle em chunks menores', 'Carregamento sob demanda'],
    explanation: 'Code splitting divide o bundle JS em chunks menores carregados sob demanda. `React.lazy(() => import("./Component"))` cria um componente que carrega seu módulo apenas quando renderizado. `<Suspense fallback={<Loading />}>` exibe o fallback enquanto o chunk está sendo carregado. Use para rotas (route-based splitting) ou componentes pesados usados raramente.',
    tags: ['code-splitting', 'lazy', 'suspense', 'performance', 'bundling'],
  },
  {
    id: 'react-023',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que causa renders desnecessários em React e como você os evita?',
    hints: ['Nova referência de objeto/função causa re-render em componentes memo', 'Context broadcast'],
    explanation: 'Causas comuns: (1) Criar objetos/funções inline nas props — nova referência a cada render; (2) Context com valor que muda frequentemente; (3) State desnecessariamente elevado (estado que só um filho precisa fica no pai). Soluções: `React.memo` + `useCallback`/`useMemo` para estabilizar referências; dividir Context em múltiplos contextos granulares; mover estado para baixo (state co-location).',
    tags: ['re-render', 'performance', 'otimizacao', 'memo'],
  },
  {
    id: 'react-024',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é Concurrent Mode no React? Quais problemas ele resolve?',
    hints: ['React pode pausar e retomar o trabalho de renderização', 'useTransition, useDeferredValue'],
    explanation: 'Concurrent Mode permite ao React interromper renders de baixa prioridade para responder a interações do usuário. Resolve: renders longos que travam a UI (ex: filtrar uma lista grande). APIs: `useTransition` marca atualizações como não-urgentes (React pode interrompê-las); `useDeferredValue` atrasa a atualização de um valor. No React 18, é ativado por padrão com `createRoot()`. Permite Server Streaming e Suspense avançado.',
    tags: ['concurrent-mode', 'useTransition', 'useDeferredValue', 'react-18'],
  },
  {
    id: 'react-025',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você identificaria e corrigiria um memory leak em React?',
    hints: ['Subscriptions não canceladas em useEffect cleanup', 'setState após unmount'],
    explanation: 'Memory leaks comuns: (1) Event listeners, WebSocket subscriptions ou timers em useEffect sem cleanup — resolva retornando função de limpeza no useEffect; (2) setState chamado após unmount (ex: fetch em componente desmontado) — use AbortController ou flag `isMounted`; (3) Closures retendo referências a objetos grandes. Use Chrome DevTools Memory tab para tirar heap snapshots e identificar objetos retidos.',
    tags: ['memory-leak', 'cleanup', 'useEffect', 'debugging', 'abortcontroller'],
  },
  // ── PATTERNS ─────────────────────────────────────────────────────────────────
  {
    id: 'react-026',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Higher-Order Components (HOC)? Como eles diferem dos hooks customizados?',
    hints: ['HOC = função que recebe componente e retorna componente', 'Hooks extraem lógica sem wrapper'],
    explanation: 'HOC é uma função `(Component) => EnhancedComponent` que adiciona funcionalidade envolvendo o componente original. Exemplos: `withAuth`, `withLogger`. Desvantagem: "wrapper hell" com múltiplos HOCs aninhados, e dificulta inspeção no DevTools. Custom hooks resolvem o mesmo problema de reutilização de lógica sem adicionar componentes à árvore. Prefira hooks — HOCs ainda são úteis para casos como `React.memo` e `React.forwardRef`.',
    tags: ['hoc', 'custom-hooks', 'reutilizacao', 'padroes'],
  },
  {
    id: 'react-027',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o padrão Render Props. Quando é adequado e quais suas desvantagens?',
    hints: ['Prop cujo valor é uma função que retorna JSX', 'Substituído em grande parte por hooks'],
    explanation: 'Render Props é quando um componente aceita uma prop que é uma função retornando JSX: `<Mouse render={(pos) => <Cat position={pos} />} />`. Isso compartilha lógica stateful sem HOCs. Desvantagens: "callback hell", componentes mais difíceis de entender, e performance — a prop função é recriada a cada render. Hooks substituem esse padrão na maioria dos casos. Ainda comum em bibliotecas (Formik render props, react-spring).',
    tags: ['render-props', 'reutilizacao', 'padroes', 'hooks'],
  },
  {
    id: 'react-028',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Error Boundaries em React? Como você os implementa?',
    hints: ['Só funcionam como class components', 'Capturam erros na renderização e lifecycle dos filhos'],
    explanation: 'Error Boundaries são class components que capturam erros em qualquer componente filho durante render, lifecycle methods e construtores, evitando que a aplicação crash. Precisam implementar `componentDidCatch(error, info)` e/ou `static getDerivedStateFromError(error)`. Não capturam erros em: event handlers, código assíncrono, SSR e erros no próprio Error Boundary. Use `react-error-boundary` para uma solução funcional.',
    tags: ['error-boundary', 'class-component', 'tratamento-erros', 'resiliencia'],
  },
  {
    id: 'react-029',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o padrão Compound Components? Dê um exemplo de quando usá-lo.',
    hints: ['Múltiplos componentes que trabalham juntos compartilhando estado implicitamente via Context', 'Exemplo: Tabs, Select, Accordion'],
    explanation: 'Compound Components é um padrão onde múltiplos componentes trabalham juntos com estado implícito compartilhado via Context — sem prop drilling. Exemplo: `<Select value={v} onChange={fn}><Select.Option value="a">A</Select.Option></Select>`. O componente pai gerencia estado; filhos acessam via Context. Vantagens: API declarativa e flexível, o usuário controla a estrutura visual. Usado em radix-ui, headless-ui.',
    tags: ['compound-components', 'context', 'api-design', 'padroes'],
  },
  {
    id: 'react-030',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Portals no React? Qual é o caso de uso principal?',
    hints: ['Renderiza um componente fora da hierarquia DOM do pai', 'Modais, tooltips, dropdowns'],
    explanation: '`ReactDOM.createPortal(children, domNode)` renderiza um componente em um nó DOM diferente do pai na hierarquia — geralmente `document.body`. Embora o componente seja renderizado fora, React Events ainda borbulham normalmente pela árvore React (não pelo DOM). Casos de uso: modais, tooltips, dropdowns, notificações — onde o componente pai tem `overflow: hidden` ou `z-index` que impediria a visualização correta.',
    tags: ['portals', 'modal', 'dom', 'eventos'],
  },
  // ── RECONCILIATION & FIBER ───────────────────────────────────────────────────
  {
    id: 'react-031',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o React Fiber? Qual problema ele resolveu em relação ao algoritmo de reconciliação anterior?',
    hints: ['Antes: stack-based síncrono; depois: fiber-based incremental', 'Prioridades de trabalho'],
    explanation: 'React Fiber (React 16) substituiu o algoritmo de reconciliação síncrono/stack-based por um sistema baseado em unidades de trabalho (fibers) que podem ser pausadas, priorizadas e retomadas. O algoritmo antigo bloqueava a thread principal durante trees grandes. Fiber permite: interromper trabalho de baixa prioridade para responder a interações urgentes, priorização de diferentes tipos de atualizações, e é a base para Concurrent Mode, Suspense e Streaming SSR.',
    tags: ['fiber', 'reconciliation', 'concurrent', 'performance', 'arquitetura'],
  },
  {
    id: 'react-032',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como o algoritmo de diffing do React decide o que atualizar no DOM? Quais são suas heurísticas principais?',
    hints: ['Dois elementos de tipos diferentes = nova árvore', 'Key para listas'],
    explanation: 'O diffing do React usa duas heurísticas O(n): (1) Elementos de tipos diferentes produzem árvores completamente diferentes — React destrói e cria novamente; (2) A prop `key` permite identificar itens estáveis em listas — sem ela, React usa posição. Comparação de mesmo tipo: atualiza apenas atributos alterados sem recriar o nó DOM. Isso torna o algoritmo O(n) em vez do O(n³) teórico.',
    tags: ['diffing', 'reconciliation', 'performance', 'key', 'otimizacao'],
  },
  {
    id: 'react-033',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que acontece quando você chama `setState` dentro de um `useEffect` sem as dependências corretas?',
    options: [
      { id: 'a', text: 'O componente para de renderizar completamente', isCorrect: false },
      { id: 'b', text: 'Pode causar um loop infinito de renders', isCorrect: true },
      { id: 'c', text: 'O React ignora a chamada de setState dentro de useEffect', isCorrect: false },
      { id: 'd', text: 'Causa um erro de runtime imediatamente', isCorrect: false },
    ],
    hints: ['useEffect sem dependências corretas executa após todo render'],
    explanation: 'Se useEffect não tem array de dependências (ou tem deps erradas) e chama setState, cria um loop: setState → re-render → useEffect roda → setState → re-render... O React detecta esse padrão e pode mostrar warnings, mas não para automaticamente. Sempre defina as dependências corretamente e use o ESLint plugin de hooks.',
    tags: ['useEffect', 'setState', 'loop-infinito', 'bugs'],
  },
  // ── LIFECYCLE ────────────────────────────────────────────────────────────────
  {
    id: 'react-034',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Descreva os três principais métodos de lifecycle de class components e seus equivalentes com Hooks.',
    hints: ['componentDidMount, componentDidUpdate, componentWillUnmount', 'Todos podem ser implementados com useEffect'],
    explanation: '`componentDidMount` → `useEffect(() => {}, [])`: executado após o primeiro render. `componentDidUpdate(prevProps, prevState)` → `useEffect(() => {}, [deps])`: executado quando dependências mudam; acesse valores anteriores via closure ou ref. `componentWillUnmount` → retorno do useEffect: função de limpeza executada no unmount. `getDerivedStateFromProps` → calcular valores derivados durante render ou com `useMemo`.',
    tags: ['lifecycle', 'class-component', 'hooks', 'useEffect'],
  },
  {
    id: 'react-035',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `getDerivedStateFromProps`? Quando você deveria usar e quando evitar?',
    hints: ['Muito raramente necessário', "Prefira 'estado totalmente controlado' ou 'key' para resetar"],
    explanation: '`static getDerivedStateFromProps(props, state)` deriva estado a partir das props a cada render. É raramente necessário — a maioria dos casos é coberta por estado controlado pelo pai ou computed values via useMemo. Use apenas para animações baseadas em mudança de props. Para resetar estado quando props mudam, prefira mudar a `key` do componente (força remount). "Você provavelmente não precisa de getDerivedStateFromProps" é a recomendação da equipe React.',
    tags: ['getDerivedStateFromProps', 'lifecycle', 'antipattern', 'classe'],
  },
  // ── REACT SERVER COMPONENTS ──────────────────────────────────────────────────
  {
    id: 'react-036',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são React Server Components (RSC)? Quais são suas restrições e vantagens em relação a Client Components?',
    hints: ['Rodam exclusivamente no servidor', 'Sem estado, sem event handlers', 'Zero JavaScript no cliente'],
    explanation: 'RSC executam no servidor (ou em build time), têm acesso direto a banco de dados, filesystem e APIs privadas, e enviam apenas HTML/serialized tree — sem JS. Restrições: não podem usar useState, useEffect, event handlers ou APIs de browser. Client Components (com "use client") são os componentes React tradicionais — interativos mas com payload de JS. O padrão ideal: RSC para data fetching e layout estático, Client Components apenas onde há interatividade real.',
    tags: ['rsc', 'server-components', 'nextjs', 'client-components', 'arquitetura'],
  },
  {
    id: 'react-037',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você pode passar dados de um Server Component para um Client Component no Next.js App Router?',
    hints: ['Props serializable', 'Não pode passar funções ou classes'],
    explanation: 'Server Components podem passar dados para Client Components apenas via props serializáveis (strings, números, arrays, objetos planos). Não é possível passar: funções, Map, Set, Dates como instâncias (envie o timestamp), classes ou qualquer valor não-JSON-serializable. Para eventos/callbacks, o Client Component define os handlers. Para dados assíncronos, o Server Component faz o await e passa o resultado.',
    tags: ['rsc', 'client-components', 'props', 'nextjs', 'serializacao'],
  },
  // ── ADVANCED PATTERNS ────────────────────────────────────────────────────────
  {
    id: 'react-038',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é `forwardRef`? Quando você precisa dele?',
    hints: ['Refs não são props normais', 'Componentes de biblioteca que expõem acesso ao DOM'],
    explanation: '`React.forwardRef((props, ref) => <input ref={ref} />)` permite que um componente receba um `ref` passado pelo pai e o "encaminhe" para um elemento DOM interno. Necessário quando você tem um componente wrapper e quer que o pai tenha acesso direto ao elemento DOM interno (ex: uma biblioteca de Input que precisa expor `focus()`). Sem forwardRef, refs passados a function components são ignorados.',
    tags: ['forwardRef', 'refs', 'dom', 'bibliotecas'],
  },
  {
    id: 'react-039',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é `useImperativeHandle`? Dê um exemplo de uso.',
    hints: ['Combina com forwardRef', 'Expõe API imperativa customizada ao pai'],
    explanation: '`useImperativeHandle(ref, () => ({ focus, scroll, ... }))` permite que um componente exponha uma API imperativa customizada através do ref — em vez de expor o nó DOM diretamente. Exemplo: `<VideoPlayer ref={ref} />` pode expor `ref.current.play()` e `ref.current.pause()` sem expor o elemento `<video>`. Isso encapsula melhor o componente e mantém o contrato da API estável mesmo se a implementação mudar.',
    tags: ['useImperativeHandle', 'forwardRef', 'api-imperativa', 'encapsulamento'],
  },
  {
    id: 'react-040',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como funciona o `React.memo` com objetos e funções como props? Como você garante que a memoização funciona?',
    hints: ['Shallow comparison de props', 'Objetos/funções têm nova referência a cada render'],
    explanation: 'React.memo faz comparação superficial (===) das props. Objetos e funções inline sempre têm nova referência a cada render — `{}` !== `{}` — então React.memo não previne o re-render. Solução: (1) para funções, use `useCallback` para estabilizar a referência; (2) para objetos, use `useMemo` para memoizar o objeto ou passe valores primitivos; (3) para comparação customizada, passe um segundo argumento `areEqual` ao React.memo.',
    tags: ['react-memo', 'shallow-comparison', 'useCallback', 'useMemo', 'performance'],
  },
  // ── STATE MANAGEMENT ─────────────────────────────────────────────────────────
  {
    id: 'react-041',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Quando você usaria Context API vs uma biblioteca de estado global como Zustand ou Redux?',
    hints: ['Frequência de atualizações', 'Complexidade e features necessárias'],
    explanation: 'Context API: adequada para dados que mudam raramente (tema, idioma, user info após login). Problema: qualquer mudança re-renderiza todos os consumidores. Zustand/Jotai: subscriptions granulares — componente só re-renderiza quando o slice que ele usa muda. Redux Toolkit: adiciona devtools, time-travel debugging, normalização de estado — vale a complexidade em apps grandes com muitos developers. React Query/SWR: para estado do servidor (fetch, cache, mutations) — substitui grande parte do Redux.',
    tags: ['context', 'zustand', 'redux', 'estado-global', 'comparacao'],
  },
  {
    id: 'react-042',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você separaria e organizaria o gerenciamento de estado em uma aplicação React grande?',
    hints: ['Estado do servidor vs estado do cliente', 'Granularidade e co-location'],
    explanation: 'Estratégia por camadas: (1) Estado local (useState/useReducer): UI transitória local ao componente; (2) Estado compartilhado próximo: lifting state ou Context para dados de uma feature; (3) Estado do servidor: React Query/SWR/TanStack Query — cache, loading, error handling automáticos; (4) Estado global do cliente: Zustand/Jotai para dados como user session, preferências, state de UI cross-feature. Princípio: coloque estado o mais próximo possível de quem o usa.',
    tags: ['estado-global', 'arquitetura', 'react-query', 'zustand', 'organization'],
  },
  // ── TESTING ──────────────────────────────────────────────────────────────────
  {
    id: 'react-043',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você testaria um componente React com React Testing Library? Qual é a filosofia dessa biblioteca?',
    hints: ['Testar como o usuário interage', 'Evitar detalhes de implementação'],
    explanation: 'RTL encoraja testar componentes como usuários reais os usam — buscando por texto, role ARIA, label — não por IDs internos ou estrutura de classes. Filosofia: "quanto mais seus testes se parecerem com o uso real do software, mais confiança eles darão". Evite: `getByTestId` em excesso, testar state interno, testar nomes de métodos. Use: `userEvent` para interações, `screen` queries, `waitFor` para async.',
    tags: ['testing', 'rtl', 'react-testing-library', 'filosofia'],
  },
  {
    id: 'react-044',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é shallow rendering em testes? Quais são suas vantagens e desvantagens?',
    hints: ['Renderiza apenas um nível de profundidade', 'Enzyme vs RTL'],
    explanation: 'Shallow rendering renderiza apenas o componente em teste, sem renderizar filhos — eles aparecem como placeholders. Vantagem: teste isolado, mais rápido, não depende da implementação dos filhos. Desvantagem: não testa integração real; pode passar enquanto a interação entre componentes está quebrada. A tendência moderna (e a filosofia da RTL) é evitar shallow rendering e preferir testes de integração que refletem uso real.',
    tags: ['shallow-rendering', 'enzyme', 'testing', 'integracao'],
  },
  // ── ACCESSIBILITY ─────────────────────────────────────────────────────────────
  {
    id: 'react-045',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são as práticas de acessibilidade mais importantes ao desenvolver componentes React?',
    hints: ['ARIA attributes', 'Semântica HTML', 'Navegação por teclado'],
    explanation: 'Práticas essenciais: (1) HTML semântico — use `<button>`, `<nav>`, `<main>` em vez de `<div>` para tudo; (2) Atributos ARIA — `aria-label`, `aria-hidden`, `role`; (3) Navegação por teclado — todos elementos interativos devem ser acessíveis por Tab/Enter; (4) Gerenciamento de foco — mova foco para modal quando abrir; (5) Imagens com `alt`; (6) Contraste de cores; (7) Formulários com `label` associado ao `input`. Ferramenta: axe DevTools.',
    tags: ['acessibilidade', 'aria', 'a11y', 'semantica'],
  },
  // ── FORMS ────────────────────────────────────────────────────────────────────
  {
    id: 'react-046',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são as melhores práticas para gerenciar formulários complexos em React? Compare React Hook Form com Formik.',
    hints: ['Formulários não-controlados vs controlados', 'Performance com muitos campos'],
    explanation: 'React Hook Form: usa refs (não-controlado), quase sem re-renders — ideal para formulários grandes com muitos campos. API simples com `register`, `handleSubmit`, `watch`. Formik: baseado em estado controlado — mais re-renders mas API mais explícita. Para formulários grandes: React Hook Form + Zod para validação. Para casos simples, useState com validação manual é suficiente.',
    tags: ['formularios', 'react-hook-form', 'formik', 'validacao', 'zod'],
  },
  // ── RENDERING PATTERNS ──────────────────────────────────────────────────────
  {
    id: 'react-047',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é hidratação (hydration) em React? O que são erros de hidratação e como evitá-los?',
    hints: ['HTML estático + JS interativo', 'Diferença entre servidor e cliente'],
    explanation: 'Hidratação é o processo de "animar" HTML estático gerado no servidor com JavaScript — o React "assume controle" do DOM existente sem recriar o DOM. Erros de hidratação ocorrem quando o HTML do servidor e o resultado do primeiro render no cliente diferem (datas, Math.random, sessionStorage). Evite: condicionais `typeof window !== undefined` durante o render inicial, use `useEffect` para código client-only, ou o atributo `suppressHydrationWarning` para casos inevitáveis.',
    tags: ['hydration', 'ssr', 'erros', 'nextjs', 'server-rendering'],
  },
  {
    id: 'react-048',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique os padrões de renderização: CSR, SSR, SSG e ISR. Quando você escolheria cada um?',
    hints: ['Performance, SEO e frescor dos dados', 'Trade-offs entre servidor e cliente'],
    explanation: 'CSR (Client-Side Rendering): todo JS no cliente, ótimo para apps altamente interativos, ruim para SEO/first load. SSR (Server-Side Rendering): renderiza por request no servidor, dados sempre frescos, custo de servidor por request. SSG (Static Site Generation): gerado em build time, sem custo de servidor por request, dados podem ficar stale. ISR (Incremental Static Regeneration): SSG com revalidação após X segundos — melhor dos dois mundos para conteúdo que muda periodicamente.',
    tags: ['csr', 'ssr', 'ssg', 'isr', 'renderizacao', 'nextjs'],
  },
  // ── REACT 18+ ────────────────────────────────────────────────────────────────
  {
    id: 'react-049',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Automatic Batching no React 18? O que mudou em relação ao React 17?',
    hints: ['Agrupa múltiplas atualizações de estado', 'Antes: só em event handlers síncronos'],
    explanation: 'Antes do React 18, batching (agrupa atualizações de setState para um único re-render) funcionava apenas dentro de event handlers síncronos do React. No React 18, com `createRoot()`, batching é automático em TODOS os contextos: Promises, setTimeout, handlers nativos de eventos. Isso reduz renders desnecessários. Use `flushSync()` se precisar forçar um render síncrono imediato.',
    tags: ['automatic-batching', 'react-18', 'setState', 'performance'],
  },
  {
    id: 'react-050',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que faz o hook `useTransition`? Dê um exemplo de caso de uso.',
    hints: ['Marca atualizações como não-urgentes', 'Mantém UI responsiva durante updates lentos'],
    explanation: '`const [isPending, startTransition] = useTransition()` permite marcar atualizações de estado como não-urgentes — o React pode interrompê-las para responder a interações do usuário. Exemplo: filtrar uma lista de 10.000 itens enquanto o usuário digita. `startTransition(() => setFilter(input))` — o filter update é não-urgente; o input state é urgente e atualiza imediatamente. `isPending` é `true` enquanto a transição está sendo processada.',
    tags: ['useTransition', 'concurrent', 'react-18', 'performance', 'ux'],
  },
  {
    id: 'react-051',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useDeferredValue`? Como ele difere de `useTransition`?',
    hints: ['Defere a atualização de um valor específico', 'Recebe um valor, não uma função'],
    explanation: '`useDeferredValue(value)` retorna uma versão "adiada" de um valor — o React pode usar o valor antigo temporariamente enquanto renderiza com o novo valor. Diferença de `useTransition`: `useDeferredValue` é para valores que você NÃO controla (ex: prop de um componente externo). `useTransition` é para state updates que você controla. Ambos permitem que a UI permaneça responsiva durante renders lentos.',
    tags: ['useDeferredValue', 'useTransition', 'concurrent', 'react-18'],
  },
  // ── EVENTS ────────────────────────────────────────────────────────────────────
  {
    id: 'react-052',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Synthetic Events no React? Por que o React usa seu próprio sistema de eventos?',
    hints: ['Wrapper cross-browser', 'Delegação de eventos no root'],
    explanation: 'SyntheticEvent é um wrapper cross-browser em torno dos eventos nativos do navegador. O React usa delegação de eventos — não adiciona event listeners a cada elemento, mas sim ao root do documento (React 17+: ao root container). Isso permite: normalização cross-browser, pool de eventos (otimização de memória em versões antigas), e controle sobre o fluxo de eventos dentro da árvore React. Você pode acessar o evento nativo via `e.nativeEvent`.',
    tags: ['synthetic-events', 'delegacao', 'cross-browser', 'performance'],
  },
  {
    id: 'react-053',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença principal entre HTML `onclick` e React `onClick`?',
    options: [
      { id: 'a', text: 'Não há diferença — são equivalentes', isCorrect: false },
      { id: 'b', text: 'React usa camelCase e recebe uma função; HTML usa lowercase e recebe uma string com código', isCorrect: true },
      { id: 'c', text: 'React `onClick` não suporta eventos de foco', isCorrect: false },
      { id: 'd', text: 'HTML `onclick` é mais eficiente que React `onClick`', isCorrect: false },
    ],
    hints: ['Pense nas convenções de nomenclatura'],
    explanation: 'HTML: `<button onclick="handleClick()">` — lowercase, string de código. React: `<button onClick={handleClick}>` — camelCase, referência à função (sem parênteses). No React, para chamar `preventDefault()` você deve chamar explicitamente `e.preventDefault()` — retornar `false` não funciona como no HTML puro.',
    tags: ['eventos', 'onClick', 'html', 'comparacao'],
  },
  // ── CONDITIONAL RENDERING ────────────────────────────────────────────────────
  {
    id: 'react-054',
    domain: 'react',
    type: 'open_text',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Quais são as formas de fazer renderização condicional em React? Quais são os trade-offs?',
    hints: ['if/else, ternário, &&, switch'],
    explanation: 'Opções: (1) if/else fora do return — mais legível para condições complexas; (2) operador ternário `{cond ? <A /> : <B />}` — bom para dois casos; (3) `&&` curto-circuito `{cond && <A />}` — atenção: `{0 && <A />}` renderiza o número 0! Use `{count > 0 && <A />}`; (4) função que retorna JSX — para condições muito complexas; (5) objeto como switch — para muitos casos. Prefira legibilidade sobre brevidade.',
    tags: ['renderizacao-condicional', 'ternario', 'curto-circuito', 'jsx'],
  },
  // ── SUSPENSE ─────────────────────────────────────────────────────────────────
  {
    id: 'react-055',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é `Suspense` no React e como ele funciona com `React.lazy` e data fetching?',
    hints: ['Fallback enquanto algo está carregando', 'throw de Promise'],
    explanation: '`<Suspense fallback={<Loader />}>` exibe o fallback enquanto qualquer componente filho está "suspendo" (aguardando algo). Com `React.lazy`: o componente lança uma Promise quando ainda não carregou; Suspense a captura e mostra o fallback. Para data fetching (React 18+): libs como `use()` ou Relay podem lançar Promises de dados. No Next.js App Router, Server Components com `async/await` integram com Suspense para Streaming SSR.',
    tags: ['suspense', 'lazy', 'loading', 'streaming', 'react-18'],
  },
  // ── LIVE CODING SCENARIOS ──────────────────────────────────────────────────
  {
    id: 'react-056',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Implemente um hook `useDebounce(value, delay)` que retorna o valor debounced.',
    hints: ['useEffect + setTimeout + clearTimeout', 'delay como dependência'],
    explanation: '```js\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer); // cleanup cancela o timer anterior\n  }, [value, delay]);\n  return debouncedValue;\n}\n``` Cada vez que `value` muda, o cleanup cancela o timer anterior e um novo é criado. Só atualiza `debouncedValue` quando `delay` ms passam sem nova mudança.',
    tags: ['custom-hook', 'debounce', 'useEffect', 'live-coding'],
  },
  {
    id: 'react-057',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Implemente um hook `useLocalStorage(key, initialValue)` que sincroniza estado com o localStorage.',
    hints: ['useState inicializado do localStorage', 'useEffect para sincronizar'],
    explanation: '```js\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch { return initialValue; }\n  });\n  const setStoredValue = useCallback((val) => {\n    const valueToStore = val instanceof Function ? val(value) : val;\n    setValue(valueToStore);\n    localStorage.setItem(key, JSON.stringify(valueToStore));\n  }, [key, value]);\n  return [value, setStoredValue];\n}```',
    tags: ['custom-hook', 'localStorage', 'useState', 'live-coding'],
  },
  {
    id: 'react-058',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Implemente um hook `useFetch(url)` que retorna `{ data, loading, error }`.',
    hints: ['useEffect para disparar o fetch', 'AbortController para cleanup', 'Estado loading/error'],
    explanation: '```js\nfunction useFetch(url) {\n  const [state, setState] = useState({ data: null, loading: true, error: null });\n  useEffect(() => {\n    const controller = new AbortController();\n    setState(prev => ({ ...prev, loading: true }));\n    fetch(url, { signal: controller.signal })\n      .then(r => r.json())\n      .then(data => setState({ data, loading: false, error: null }))\n      .catch(error => {\n        if (error.name !== "AbortError")\n          setState({ data: null, loading: false, error });\n      });\n    return () => controller.abort();\n  }, [url]);\n  return state;\n}```',
    tags: ['custom-hook', 'fetch', 'abortcontroller', 'live-coding', 'async'],
  },
  {
    id: 'react-059',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Implemente um componente `<Toggle>` que alterna entre dois estados usando Context para compartilhar o estado com filhos.',
    hints: ['createContext + useContext', 'Provider wrapping children'],
    explanation: 'Crie `ToggleContext = createContext()`. O componente `Toggle` mantém `isOn` state, cria um Provider com `{isOn, toggle}`, e envolve `children`. Componentes filhos usam `useContext(ToggleContext)` para acessar `isOn` e `toggle`. Padrão compound component — `Toggle.On`, `Toggle.Off`, `Toggle.Button` podem ser sub-componentes que acessam o contexto implicitamente.',
    tags: ['context', 'compound-component', 'toggle', 'live-coding', 'padroes'],
  },
  {
    id: 'react-060',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria uma lista infinita (infinite scroll) em React?',
    hints: ['Intersection Observer API', 'useRef para o último elemento', 'Paginação de dados'],
    explanation: 'Use Intersection Observer para detectar quando o último elemento fica visível: crie um `ref` no último item da lista e use `useEffect` para criar um `IntersectionObserver` que dispara o carregamento da próxima página quando o elemento entra na viewport. Mantenha um state `[pages, setPages]` acumulando os resultados. Cleanup o observer no return do useEffect. Bibliotecas: `react-intersection-observer`, `react-infinite-scroll-component`.',
    tags: ['infinite-scroll', 'intersection-observer', 'useRef', 'live-coding'],
  },
  // ── DEBUGGING ─────────────────────────────────────────────────────────────────
  {
    id: 'react-061',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você debug um componente React que está re-renderizando mais vezes do que deveria?',
    hints: ['React DevTools Profiler', 'console.log no corpo do componente', 'why-did-you-render'],
    explanation: 'Ferramentas: (1) React DevTools Profiler — grava uma sessão e mostra qual componente renderizou, quanto demorou e por quê (qual prop/state mudou); (2) `console.log` no corpo do componente para contar renders; (3) `why-did-you-render` library — loga no console quando props "mudaram" mas eram iguais (nova referência). Causas comuns: objetos/funções inline, Context com valor novo a cada render, state desnecessariamente elevado.',
    tags: ['debugging', 'profiler', 're-render', 'devtools', 'why-did-you-render'],
  },
  // ── STYLING ───────────────────────────────────────────────────────────────────
  {
    id: 'react-062',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são as principais abordagens para estilizar componentes React? Compare CSS Modules, Styled Components e Tailwind CSS.',
    hints: ['Escopo de estilos', 'Performance e DX'],
    explanation: 'CSS Modules: CSS local com escopo automático por componente, sem conflitos de classe — ótimo para projetos que preferem CSS tradicional. Styled Components/Emotion (CSS-in-JS): estilos dinâmicos com acesso a props, mas overhead de runtime e bundle maior. Tailwind CSS: utility-first, zero CSS gerado em runtime, excelente para design systems — curva de aprendizado de classes mas produtividade alta. Escolha baseado no time e escala: Tailwind para velocidade, CSS Modules para separação, CSS-in-JS para componentes altamente dinâmicos.',
    tags: ['styling', 'css-modules', 'styled-components', 'tailwind', 'comparacao'],
  },
  // ── NEXT.JS + REACT ───────────────────────────────────────────────────────────
  {
    id: 'react-063',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como o App Router do Next.js 13+ mudou a forma como os componentes React são organizados e renderizados?',
    hints: ['Server Components por padrão', 'Convenções de arquivo: page.tsx, layout.tsx, loading.tsx'],
    explanation: 'No App Router, todos os componentes são Server Components por padrão — você adiciona "use client" apenas onde há interatividade. Convenções de arquivo: `page.tsx` (rota), `layout.tsx` (layout persistente), `loading.tsx` (Suspense fallback automático), `error.tsx` (Error Boundary automático), `template.tsx` (layout que remonta). Rotas paralelas e intercepted routes permitem layouts complexos. Metadata é exportada como objeto/função — sem react-helmet.',
    tags: ['nextjs', 'app-router', 'server-components', 'convencoes'],
  },
  // ── MISCELLANEOUS ─────────────────────────────────────────────────────────────
  {
    id: 'react-064',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Por que não é recomendado usar `Math.random()` ou `Date.now()` como key em listas React?',
    options: [
      { id: 'a', text: 'Porque geram erros de TypeScript', isCorrect: false },
      { id: 'b', text: 'Porque geram um novo valor a cada render, fazendo o React recriar cada elemento mesmo quando desnecessário', isCorrect: true },
      { id: 'c', text: 'Porque keys numéricas não são suportadas', isCorrect: false },
      { id: 'd', text: 'Porque Math.random é uma função assíncrona', isCorrect: false },
    ],
    hints: ['Keys devem ser estáveis entre renders'],
    explanation: 'Keys devem ser estáveis, previsíveis e únicas entre irmãos. `Math.random()` gera um valor diferente a cada render — o React pensa que todos os elementos foram substituídos, recria tudo, e estado local de componentes é perdido. Use IDs estáveis dos dados, ou se não houver, combine campos que criem unicidade (ex: `${item.userId}-${item.postId}`).',
    tags: ['key', 'listas', 'performance', 'anti-pattern'],
  },
  {
    id: 'react-065',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `dangerouslySetInnerHTML` e por que é perigoso?',
    hints: ['XSS', 'Inserção de HTML não sanitizado'],
    explanation: '`dangerouslySetInnerHTML={{ __html: htmlString }}` injeta HTML diretamente no DOM. É perigoso porque abre vetores para XSS (Cross-Site Scripting) — se o HTML vier de input do usuário ou de uma fonte não confiável, scripts maliciosos podem ser executados. Use apenas com HTML previamente sanitizado (ex: DOMPurify). Sempre prefira renderizar dados como texto: `{userData.name}` — React escapa automaticamente.',
    tags: ['dangerouslySetInnerHTML', 'xss', 'seguranca', 'html'],
  },
  {
    id: 'react-066',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão "State Machine" em React? Quando é preferível ao boolean state?',
    hints: ['Estados impossíveis se tornam impossíveis de representar', 'XState, useReducer'],
    explanation: 'State machines definem todos os estados possíveis explicitamente e as transições entre eles. Em vez de `{isLoading: bool, isError: bool, isSuccess: bool}` (que permite estados impossíveis como `isLoading: true, isError: true`), use um único estado: `"idle" | "loading" | "success" | "error"`. Implementação: `useReducer` simples ou XState para máquinas complexas. Benefício: elimina estados impossíveis e torna o comportamento previsível.',
    tags: ['state-machine', 'useReducer', 'estados-impossiveis', 'robustez'],
  },
  {
    id: 'react-067',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria um sistema de feature flags em uma aplicação React?',
    hints: ['Context para distribuir flags', 'Hook para consumir', 'Decisão no servidor vs cliente'],
    explanation: 'Abordagem: (1) Busque as feature flags no servidor (SSR/SSG) para evitar flash de conteúdo; (2) Distribua via Context: `<FeatureFlagProvider flags={flags}>`; (3) Hook de consumo: `const isEnabled = useFeatureFlag("new-checkout")`; (4) Componente: `<Feature name="new-checkout"><NewCheckout /></Feature>`. Para flags dinâmicas, use serviços como LaunchDarkly ou Split.io. Evite renderizar ambas as versões — isso aumenta o bundle.',
    tags: ['feature-flags', 'context', 'ab-testing', 'arquitetura'],
  },
  {
    id: 'react-068',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria autenticação e autorização em uma aplicação React?',
    hints: ['Proteger rotas', 'Tokens JWT vs cookies httpOnly', 'Context para user state'],
    explanation: 'Padrão: (1) Auth state em Context ou Zustand (user, token, isAuthenticated); (2) Rota protegida: componente que verifica `isAuthenticated` e redireciona para login; (3) Tokens: prefira httpOnly cookies (imunes a XSS) sobre localStorage; (4) No Next.js: middleware no servidor para proteger rotas antes de renderizar; (5) Role-based access: enum de roles + hook `useHasPermission(role)`. Bibliotecas: NextAuth.js, Auth.js, Clerk.',
    tags: ['autenticacao', 'autorizacao', 'jwt', 'cookies', 'seguranca'],
  },
  {
    id: 'react-069',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria internacionalização (i18n) em React?',
    hints: ['react-i18next', 'Locale em Context', 'Formatação de datas e números'],
    explanation: 'Bibliotecas padrão: `react-i18next` (baseada em i18next) ou `react-intl` (FormatJS). Estrutura: (1) Arquivos de tradução por locale (`en.json`, `pt.json`); (2) Provider com o locale atual; (3) Hook `useTranslation()` para acessar strings; (4) Formatação de datas/números via `Intl.DateTimeFormat` ou `react-intl`. No Next.js: suporte nativo a i18n routing. Considere: carregamento lazy dos namespaces de tradução para não aumentar o bundle.',
    tags: ['i18n', 'internacionalizacao', 'react-i18next', 'locale'],
  },
  {
    id: 'react-070',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você garantiria que uma aplicação React grande permaneça performática à medida que cresce?',
    hints: ['Bundle analysis', 'Profiling', 'Code splitting', 'Virtualização'],
    explanation: 'Estratégias: (1) Bundle: analyse com webpack-bundle-analyzer, code splitting por rota e feature; (2) Runtime: React Profiler para identificar componentes lentos; (3) Renderização: virtualização de listas longas (react-window/react-virtual); (4) Imagens: lazy loading, formatos modernos (WebP/AVIF), Next/Image; (5) Fonts: `font-display: swap`, preconnect; (6) Core Web Vitals como métricas alvo (LCP, FID/INP, CLS); (7) Monitoring: Lighthouse CI em pipeline, Sentry Performance.',
    tags: ['performance', 'bundle', 'profiling', 'core-web-vitals', 'escalabilidade'],
  },
  {
    id: 'react-071',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual é a diferença entre `React.createElement` e JSX? Por que usamos JSX?',
    hints: ['JSX é açúcar sintático', 'Babel compila JSX para createElement'],
    explanation: 'JSX é transformado por Babel em chamadas `React.createElement(type, props, ...children)`. Exemplo: `<Button color="blue">Click</Button>` → `React.createElement(Button, {color: "blue"}, "Click")`. Usamos JSX porque é mais legível, se parece com HTML que os devs já conhecem, e erros de tipagem/estrutura são mais fáceis de detectar visualmente. Com o novo transform do React 17+, não é mais necessário importar React em cada arquivo JSX.',
    tags: ['jsx', 'createElement', 'babel', 'transpilacao'],
  },
  {
    id: 'react-072',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `React.StrictMode`? Quais verificações ele realiza e por que é útil?',
    hints: ['Apenas em desenvolvimento', 'Double-invokes funções intencionalmente'],
    explanation: 'StrictMode ativa verificações extras em desenvolvimento (sem impacto em produção): (1) Detecta side effects inesperados — invoca funções de render, state initializers e reducers duas vezes para expor efeitos colaterais; (2) Alerta sobre uso de APIs legadas (findDOMNode, string refs); (3) Detecta ciclos de vida deprecados. Em React 18, também detecta comportamentos problemáticos com Concurrent Features. Use em toda a aplicação: `<StrictMode><App /></StrictMode>`.',
    tags: ['strict-mode', 'desenvolvimento', 'side-effects', 'debugging'],
  },
  {
    id: 'react-073',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como você lidaria com listas grandes em React sem degradar a performance?',
    hints: ['Virtualização/windowing', 'react-window, react-virtual', 'Paginação'],
    explanation: 'Virtualização (windowing): renderizar apenas os itens visíveis na viewport, não todos. Bibliotecas: `react-window` (leve), `@tanstack/react-virtual` (flexível), `react-virtuoso` (suporte a tamanhos variáveis). Alternativas: paginação (renderiza apenas uma página de itens por vez) ou infinite scroll com paginação interna. Para listas muito pequenas (<100 itens), virtualização pode ser desnecessária — meça primeiro.',
    tags: ['virtualizacao', 'windowing', 'react-window', 'performance', 'listas'],
  },
  {
    id: 'react-074',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria um sistema de toast/notificações globais em React?',
    hints: ['Context + Portal', 'Gerenciamento de fila de toasts', 'Auto-dismiss'],
    explanation: 'Abordagem: (1) `ToastContext` com `addToast(message, type)` e lista de toasts; (2) Componente `ToastContainer` renderizado via Portal (no body) para evitar problemas de z-index/overflow; (3) Cada toast tem ID único e auto-dismiss via setTimeout com cleanup. Hook `useToast()` para disparar de qualquer componente. Bibliotecas prontas: `react-hot-toast`, `sonner`, `react-toastify`.',
    tags: ['toast', 'portal', 'context', 'global-state', 'ux'],
  },
  {
    id: 'react-075',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique o conceito de "Derived State" e por que preferimos calculá-lo ao invés de armazená-lo.',
    hints: ['Estado derivável não precisa de useState', 'Evita sincronização de estado'],
    explanation: 'Estado derivado é um valor que pode ser calculado a partir de outros states/props existentes. Armazenar em state separado força sincronização manual (fonte de bugs). Em vez disso, calcule durante o render: `const fullName = firstName + " " + lastName` — sem useState. Para cálculos custosos, use `useMemo(...)`. Regra: se você pode derivar um valor de outros valores existentes, não armazene — derive.',
    tags: ['derived-state', 'useMemo', 'antipattern', 'state-management'],
  },
  {
    id: 'react-076',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como você passaria uma função de atualização de estado para componentes aninhados sem prop drilling?',
    hints: ['Context para a função de update', 'Ou estado global'],
    explanation: 'Opção 1 (Context): crie um Context separado para a função de dispatch/setState — separar dados de actions previne re-renders em componentes que só precisam disparar ações mas não ler dados. Opção 2 (Estado global): Zustand, Jotai — qualquer componente pode chamar `store.setState()`. Opção 3 (Composição): redesenhe a árvore para que o componente que precisa da função seja filho direto do que tem o estado.',
    tags: ['prop-drilling', 'context', 'zustand', 'composicao', 'padroes'],
  },
  {
    id: 'react-077',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "state co-location" e por que é importante para performance?',
    hints: ['Coloque estado o mais próximo possível de onde é usado', 'Menos re-renders desnecessários'],
    explanation: 'State co-location: coloque o estado o mais próximo possível do componente que o usa. Se apenas um componente precisa de um dado, o estado deve estar nele — não no pai ou em estado global. Benefícios: (1) Re-renders afetam apenas a sub-árvore relevante; (2) Código mais simples e coeso; (3) Mais fácil de remover quando não necessário. Mova para cima (lifting) apenas quando múltiplos componentes realmente precisam compartilhar.',
    tags: ['state-co-location', 'performance', 're-render', 'boas-praticas'],
  },
  {
    id: 'react-078',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Pure Components em React? Como `React.PureComponent` difere de `React.Component`?',
    hints: ['shouldComponentUpdate automático', 'Shallow comparison de props e state'],
    explanation: '`React.PureComponent` implementa automaticamente `shouldComponentUpdate` com comparação superficial de props e state. Se nada mudou superficialmente, o re-render é pulado. Equivalente funcional: `React.memo`. Limitações: comparação superficial não detecta mudanças em objetos/arrays aninhados. Riscos: mutação direta do state/props fará o componente não re-renderizar (use spread ou immer para imutabilidade).',
    tags: ['pure-component', 'shouldComponentUpdate', 'shallow-comparison', 'otimizacao'],
  },
  {
    id: 'react-079',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria roteamento protegido (protected routes) em uma aplicação React com React Router?',
    hints: ['Componente PrivateRoute', 'Verificação de autenticação antes de renderizar'],
    explanation: 'Com React Router v6: componente `<ProtectedRoute>` que verifica `isAuthenticated`; se falso, usa `<Navigate to="/login" replace />`. Coloque o estado da rota de destino no navigate para redirecionar após login: `<Navigate to="/login" state={{ from: location }} replace />`. No servidor (Next.js), proteja via middleware antes de qualquer render. Para autorização baseada em roles, crie variantes: `<RoleRoute roles={["admin"]}>`.',
    tags: ['react-router', 'autenticacao', 'protected-route', 'navegacao'],
  },
  {
    id: 'react-080',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você abordaria a migração de uma aplicação React com class components para function components com Hooks?',
    hints: ['Migração incremental', 'Começar pelos componentes folha', 'Error Boundaries ainda precisam de classes'],
    explanation: 'Estratégia incremental: (1) Comece pelos "leaf components" — componentes sem filhos, mais simples de migrar; (2) Migre para cima na árvore gradualmente; (3) Mantenha Error Boundaries como class components (hooks não suportam ainda); (4) Use codemods disponíveis (react-codemod) para conversões básicas; (5) Escreva testes antes de migrar para garantir equivalência. Não migre tudo de uma vez — o React suporta ambas as abordagens simultaneamente.',
    tags: ['migracao', 'class-components', 'hooks', 'refactoring', 'estrategia'],
  },
  // ── REACT QUERY ──────────────────────────────────────────────────────────────
  {
    id: 'react-081',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é React Query (TanStack Query)? Quais problemas ele resolve?',
    hints: ['Cache de dados do servidor', 'Loading/error states automáticos', 'Invalidação de cache'],
    explanation: 'TanStack Query gerencia estado do servidor: caching, sincronização, revalidação em background, retry automático, loading/error states. Problemas resolvidos: (1) Boilerplate de fetch+loading+error em cada componente; (2) Cache compartilhado entre componentes que precisam dos mesmos dados; (3) Stale data — `staleTime` define quando os dados expiram; (4) Mutações com invalidação de cache automática. Substitui grande parte do Redux em apps data-fetching heavy.',
    tags: ['react-query', 'tanstack', 'cache', 'servidor', 'state'],
  },
  {
    id: 'react-082',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique `useQuery` e `useMutation` do TanStack Query. Como eles funcionam?',
    hints: ['useQuery para leitura', 'useMutation para escrita + invalidação de cache'],
    explanation: '`useQuery({ queryKey: ["users"], queryFn: fetchUsers })` busca e armazena em cache os dados. `queryKey` é a identidade do cache — array de valores únicos. `staleTime` define por quanto tempo os dados são considerados frescos (sem rebuscar). `useMutation` para operações de escrita (POST/PUT/DELETE); `onSuccess` pode chamar `queryClient.invalidateQueries` para atualizar dados cacheados automaticamente.',
    tags: ['react-query', 'useQuery', 'useMutation', 'cache', 'invalidacao'],
  },
  // ── NEXTJS INTEGRATION ────────────────────────────────────────────────────────
  {
    id: 'react-083',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Server Actions no Next.js e como eles se integram com componentes React?',
    hints: ['Funções que rodam no servidor', 'Formulários sem API routes', '"use server"'],
    explanation: 'Server Actions são funções assíncronas marcadas com `"use server"` que executam no servidor. Permitem submeter formulários e fazer mutations sem criar API routes explícitas. Uso: `<form action={createUser}>` — o Next.js serializa o FormData e executa a função no servidor. Integram com `useFormState` e `useFormStatus` para feedback de loading/erro. São a alternativa a API routes para operações de escrita em Server Components.',
    tags: ['server-actions', 'nextjs', 'formularios', 'servidor', 'mutations'],
  },
  // ── EXTRAS FROM PDFs ──────────────────────────────────────────────────────────
  {
    id: 'react-084',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "children prop" em React? Dê um exemplo de uso.',
    hints: ['Conteúdo entre as tags de abertura e fechamento', 'Composição de componentes'],
    explanation: 'A prop `children` recebe qualquer conteúdo colocado entre as tags de abertura e fechamento de um componente: `<Card><Button>OK</Button></Card>` — `props.children` dentro de Card é o `<Button>OK</Button>`. Permite composição flexível sem saber de antemão o conteúdo. APIs disponíveis: `React.Children.map`, `React.Children.count`, `React.cloneElement`. Fundamental para layouts, wrappers e componentes reutilizáveis.',
    tags: ['children', 'composicao', 'props', 'layout'],
  },
  {
    id: 'react-085',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Por que o React usa `className` em vez de `class` no JSX?',
    options: [
      { id: 'a', text: 'É uma convenção opcional — ambos funcionam', isCorrect: false },
      { id: 'b', text: '`class` é uma palavra reservada em JavaScript e JSX é uma extensão JS', isCorrect: true },
      { id: 'c', text: 'Por razões de performance no Virtual DOM', isCorrect: false },
      { id: 'd', text: 'Para distinguir HTML de SVG', isCorrect: false },
    ],
    hints: ['JavaScript tem a palavra-chave `class` para definir classes ES6'],
    explanation: '`class` é palavra reservada em JavaScript (para definir classes). Como JSX é JavaScript, usar `class` causaria conflito de sintaxe. O React usa `className` (equivalente ao `class` HTML) e `htmlFor` (equivalente ao `for` do `<label>`). A DOM API do JavaScript também usa `element.className`.',
    tags: ['className', 'jsx', 'palavras-reservadas', 'fundamentos'],
  },
  {
    id: 'react-086',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `cloneElement`? Quando seria necessário usá-lo?',
    hints: ['Clonar e modificar um elemento React existente', 'Injetar props adicionais'],
    explanation: '`React.cloneElement(element, additionalProps, ...children)` cria uma cópia de um elemento React com props adicionais ou modificadas. Caso de uso: um componente pai que recebe `children` e precisa injetar props adicionais nos filhos (ex: injetar `isActive` em cada filho de um `<TabList>`). Hoje, Context e composição explícita são preferidos ao cloneElement para evitar acoplamento implícito.',
    tags: ['cloneElement', 'children', 'props', 'padroes'],
  },
  {
    id: 'react-087',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como você lida com erros em chamadas de API dentro de useEffect?',
    hints: ['try/catch dentro do efeito', 'Estado de erro', 'Async/await em useEffect'],
    explanation: 'useEffect não pode ser async diretamente. Use uma função async interna:\n```js\nuseEffect(() => {\n  let cancelled = false;\n  async function fetchData() {\n    try {\n      const data = await fetch(url).then(r => r.json());\n      if (!cancelled) setData(data);\n    } catch (error) {\n      if (!cancelled) setError(error);\n    } finally {\n      if (!cancelled) setLoading(false);\n    }\n  }\n  fetchData();\n  return () => { cancelled = true; };\n}, [url]);\n``` Prefira TanStack Query para gerenciar isso automaticamente.',
    tags: ['useEffect', 'async', 'error-handling', 'fetch'],
  },
  {
    id: 'react-088',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useId`? Qual problema ele resolve?',
    hints: ['IDs únicos para acessibilidade', 'Hidratação correta'],
    explanation: '`useId()` gera um ID único estável que funciona tanto no servidor quanto no cliente — essencial para evitar erros de hidratação. Útil para associar `label` com `input` via `htmlFor`: `const id = useId(); <label htmlFor={id}> ... <input id={id}>`. Não use para gerar keys de listas — use IDs dos dados. Garante que o ID seja idêntico entre o SSR e o primeiro render do cliente.',
    tags: ['useId', 'acessibilidade', 'hidratacao', 'ssr', 'react-18'],
  },
  {
    id: 'react-089',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique micro-frontends. Como React pode ser usado nessa arquitetura?',
    hints: ['Múltiplos times/deployments independentes', 'Module Federation'],
    explanation: 'Micro-frontends é uma arquitetura onde o frontend é dividido em partes independentes desenvolvidas e deployadas por times separados. Com React: (1) Webpack Module Federation — carregue componentes React de apps separadas em runtime; (2) iframes — isolamento total mas com limitações de comunicação; (3) Single-spa — orquestrador que carrega apps React/Vue/Angular. Desafios: state compartilhado entre micro-frontends, CSS isolation, bundle duplication (múltiplas cópias do React).',
    tags: ['micro-frontends', 'module-federation', 'arquitetura', 'escalabilidade'],
  },
  {
    id: 'react-090',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria otimismo (optimistic updates) em React?',
    hints: ['Atualizar UI antes da resposta do servidor', 'Rollback em caso de erro'],
    explanation: 'Optimistic update: atualiza a UI imediatamente como se a operação tivesse sucesso, sem esperar a resposta do servidor. Se falhar, reverte. Implementação com TanStack Query: `useMutation` com `onMutate` (atualiza cache otimisticamente), `onError` (reverte via `context.previousData`), `onSettled` (invalida query para sincronizar). Melhora significativamente a UX em operações como like, checkbox, reordenação.',
    tags: ['optimistic-update', 'ux', 'react-query', 'useMutation'],
  },
  // ── ADVANCED HOOKS ───────────────────────────────────────────────────────────
  {
    id: 'react-091',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria um hook `useEventCallback` que sempre tem acesso ao valor mais recente sem ser incluído nas dependências?',
    hints: ['useRef para armazenar a função mais recente', 'Retorna uma função estável'],
    explanation: '```js\nfunction useEventCallback(fn) {\n  const ref = useRef(fn);\n  useLayoutEffect(() => { ref.current = fn; });\n  return useCallback((...args) => ref.current(...args), []);\n}\n``` O ref sempre tem a versão mais recente da função. A função retornada tem referência estável ([], sem deps). Isso permite usar callbacks em event listeners sem re-registrar o listener quando a função muda. React tem planos de adicionar `useEffectEvent` com semântica similar.',
    tags: ['useEventCallback', 'useRef', 'closures', 'avancado', 'hooks'],
  },
  {
    id: 'react-092',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Qual é a diferença entre `useRef` e `createRef`? Quando você usaria cada um?',
    hints: ['createRef cria nova ref a cada render', 'useRef persiste entre renders'],
    explanation: '`createRef()` cria uma nova referência a cada chamada — em function components, isso significa uma nova ref a cada render. `useRef()` retorna sempre o mesmo objeto `{current}` entre renders. Em class components, use `createRef()` no construtor (chamado uma vez). Em function components, sempre use `useRef` — garante persistência. `createRef` em function components é geralmente um bug.',
    tags: ['useRef', 'createRef', 'refs', 'class-components', 'function-components'],
  },
  {
    id: 'react-093',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você usaria `useCallback` corretamente para evitar re-renders desnecessários em componentes filhos?',
    hints: ['Filho com React.memo', 'Função como prop do filho'],
    explanation: 'Padrão correto: (1) Filho envolto em `React.memo(ChildComponent)`; (2) Pai usa `useCallback(fn, deps)` ao passar a função como prop. Sem `useCallback`, uma nova referência de função é criada a cada render do pai, quebrando a memoização do filho. Armadilha: se `deps` inclui um valor que muda frequentemente (ex: outro state), `useCallback` cria nova referência igualmente — reavalie a estrutura.',
    tags: ['useCallback', 'react-memo', 'performance', 're-render', 'padroes'],
  },
  {
    id: 'react-094',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `defaultProps` e como ele foi substituído em componentes funcionais modernos?',
    hints: ['Valores padrão para props', 'Default parameters do JavaScript'],
    explanation: '`defaultProps` era a forma de definir valores padrão para props em class components e function components. Em function components modernos, use JavaScript default parameters diretamente: `function Button({ color = "blue", size = "md" })`. Para TypeScript, defina defaults inline — TypeScript infere os tipos corretamente. `defaultProps` está deprecated para function components desde React 18.3.',
    tags: ['defaultProps', 'props', 'defaults', 'typescript', 'modernizacao'],
  },
  {
    id: 'react-095',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria um gerenciador de modais global em React sem prop drilling?',
    hints: ['Context + Portal', 'Stack de modais', 'Hook para abrir/fechar'],
    explanation: 'Abordagem: (1) `ModalContext` com `openModal(config)`, `closeModal()`, e lista de modais abertos; (2) `ModalContainer` renderizado via Portal no body — itera a lista e renderiza cada modal; (3) Hook `useModal()` para abrir modais de qualquer componente sem props; (4) Suporte a stack de modais com z-index crescente. Alternativa: bibliotecas como `@ebay/nice-modal-react` que gerenciam isso com um padrão similar.',
    tags: ['modal', 'portal', 'context', 'global', 'padroes'],
  },
  {
    id: 'react-096',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o padrão "Presentational vs Container components". Ainda é relevante com hooks?',
    hints: ['Separação de UI e lógica de negócio', 'Hooks modernizaram esse padrão'],
    explanation: 'O padrão antigo: Container components (com lógica, state, data fetching) + Presentational components (apenas UI, props). Hooks tornaram esse padrão mais fluido: a lógica pode ser extraída para custom hooks, deixando o componente ser ao mesmo tempo "container" e "presentational" de forma concisa. Ainda válido como princípio: separe concerns, mas não force a criação de dois arquivos quando um componente com um hook custom resolve de forma mais simples.',
    tags: ['container-presentational', 'separacao-concerns', 'hooks', 'padroes'],
  },
  {
    id: 'react-097',
    domain: 'react',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "prop spreading" (`{...props}`) e quando é perigoso?',
    hints: ['Passa todas as props adiante', 'Pode vazar props de implementação para o DOM'],
    explanation: 'Spread de props `<Component {...props}>` passa todas as props de uma vez — útil para wrappers. Perigo: props de implementação (ex: `isActive`, `onSelect`) podem ser passadas para elementos DOM nativos, gerando warnings e poluindo o DOM. Solução: desestruture as props que você usa e spread apenas o resto: `const { isActive, onSelect, ...rest } = props; return <div {...rest}>`. Em TypeScript, isso é mais seguro pois o tipo limita as props do DOM.',
    tags: ['prop-spreading', 'dom', 'typescript', 'boas-praticas'],
  },
  {
    id: 'react-098',
    domain: 'react',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria lazy loading de imagens em React sem uma biblioteca externa?',
    hints: ['Intersection Observer', 'placeholder/skeleton', 'useRef para o elemento'],
    explanation: '```js\nfunction LazyImage({ src, alt }) {\n  const [loaded, setLoaded] = useState(false);\n  const imgRef = useRef();\n  useEffect(() => {\n    const observer = new IntersectionObserver(([entry]) => {\n      if (entry.isIntersecting) {\n        setLoaded(true);\n        observer.disconnect();\n      }\n    });\n    if (imgRef.current) observer.observe(imgRef.current);\n    return () => observer.disconnect();\n  }, []);\n  return <img ref={imgRef} src={loaded ? src : undefined} alt={alt} />;\n}``` Alternativamente, o atributo nativo `loading="lazy"` já funciona na maioria dos browsers modernos.',
    tags: ['lazy-loading', 'intersection-observer', 'imagens', 'performance'],
  },
  {
    id: 'react-099',
    domain: 'react',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como você previne que um componente renderize usando a prop `null` ou retorno condicional?',
    hints: ['Retornar null no render', 'Não desmonta, apenas não renderiza nada'],
    explanation: 'Retornar `null` de um componente faz com que ele não renderize nada no DOM, mas o componente ainda está montado — lifecycle e hooks continuam funcionando (ex: useEffect ainda roda). Isso é diferente de condicionar a montagem: `{shouldRender && <Component />}` — quando `false`, o componente desmonta e remonta (state é perdido). Para esconder sem desmontar, use CSS `display: none` ou retorne null.',
    tags: ['null-render', 'condicional', 'lifecycle', 'estado', 'desmontagem'],
  },
  {
    id: 'react-100',
    domain: 'react',
    type: 'open_text',
    difficulty: 5,
    targetLevel: ['staff'],
    text: 'Como você desenharia a arquitetura de uma aplicação React para suportar 100+ desenvolvedores e múltiplos times trabalhando em paralelo?',
    hints: ['Monorepo', 'Design system compartilhado', 'Módulos com fronteiras claras', 'Feature flags'],
    explanation: 'Estratégias: (1) Monorepo (Turborepo/Nx) — packages compartilhados com versionamento coeso; (2) Design System independente com componentes primitivos; (3) Feature modules com fronteiras claras (não podem importar uns dos outros diretamente — apenas via interfaces públicas); (4) Feature flags para deploys independentes; (5) Contrato de API tipado (tRPC/OpenAPI) para desacoplamento front-back; (6) CI/CD com affected-only builds; (7) ADRs documentando decisões arquiteturais.',
    tags: ['arquitetura', 'monorepo', 'escalabilidade', 'design-system', 'times'],
  },
  {
    id: 'react-pred-001',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que este código imprime no console, repetidamente, depois de clicar no botão 5 vezes?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 0, 0, 0, 0...', isCorrect: true },
      { id: 'b', text: '1, 2, 3, 4, 5...', isCorrect: false },
      { id: 'c', text: 'Lança um erro', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`useEffect` com `[]` roda só uma vez, no mount — sua closure captura as variáveis de NAQUELE render', 'O botão exibe o `count` correto na tela, mas o console.log do `setInterval` é outra história'],
    explanation: 'Como `useEffect` tem `[]` como dependências, ele roda só uma vez, no mount, e cria a closure do `setInterval` capturando o `count` que existia naquele momento: `0`. Cliques subsequentes atualizam o estado (e a UI exibe `1`, `2`, `3`...), mas o `console.log` dentro do `setInterval` continua sendo a MESMA função, criada uma única vez, presa para sempre lendo o `count = 0` original — essa é a "stale closure" clássica.',
    tags: ['useEffect', 'stale-closure', 'setInterval', 'output-prediction'],
  },
  {
    id: 'react-pred-002',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Esta é uma correção do bug da questão anterior. O que este código imprime no console, repetidamente, depois de clicar no botão 3 vezes?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 0, 0... (continua travado)', isCorrect: false },
      { id: 'b', text: 'O valor atual de `count` a cada tick, refletindo os cliques', isCorrect: true },
      { id: 'c', text: 'Lança TypeError', isCorrect: false },
      { id: 'd', text: '3, 3, 3... (só o valor final)', isCorrect: false },
    ],
    hints: ['`countRef.current = count` é executado em TODO render, então a ref sempre reflete o valor mais recente', 'Ler `countRef.current` dentro do `setInterval` sempre busca o valor atualizado, não o capturado no mount'],
    explanation: 'Diferente da questão anterior, aqui `countRef.current = count` roda a cada render, mantendo a ref sempre sincronizada com o estado mais recente. Como o `setInterval` lê `countRef.current` (e não a variável `count` diretamente), ele sempre vê o valor atualizado no momento em que o tick acontece, mesmo que a função do `setInterval` em si tenha sido criada apenas uma vez. Essa é uma forma idiomática de contornar stale closures sem recriar o efeito.',
    tags: ['useEffect', 'useRef', 'stale-closure-fix', 'output-prediction'],
  },
  {
    id: 'react-pred-003',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que acontece com este código se o usuário clicar no botão repetidamente, bem rápido?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => console.log(count), 1000);
    return () => clearInterval(id);
  }, [count]);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'O console sempre mostra o valor correto, e o timer nunca reinicia', isCorrect: false },
      { id: 'b', text: 'O console sempre mostra o valor correto, mas o timer de 1s é cancelado e recriado a cada clique', isCorrect: true },
      { id: 'c', text: 'O console sempre mostra `0`, como nas versões anteriores', isCorrect: false },
      { id: 'd', text: 'Lança um erro de "Maximum update depth exceeded"', isCorrect: false },
    ],
    hints: ['Colocar `count` nas dependências resolve o valor obsoleto, mas tem um efeito colateral', 'Toda vez que uma dependência do `useEffect` muda, o cleanup anterior roda e um novo efeito é criado — recriando o `setInterval` do zero'],
    explanation: 'Adicionar `count` às dependências resolve a closure obsoleta (o valor lido sempre estará correto), mas introduz um efeito colateral: a cada mudança de `count`, o `useEffect` desmonta o `setInterval` anterior (via cleanup) e cria um NOVO, reiniciando a contagem de 1 segundo do zero. Se o usuário clicar repetidamente em menos de 1 segundo, o timer nunca chega a disparar, pois é cancelado e recriado a cada clique antes do tick acontecer.',
    tags: ['useEffect', 'dependencias', 'setInterval', 'output-prediction'],
  },
  {
    id: 'react-pred-004',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de UM clique, quantas vezes 'render' é impresso (sem contar o render inicial de montagem)?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  console.log('render');

  function handleClick() {
    setCount(count + 1);
    setFlag(true);
  }

  return <button onClick={handleClick}>Click</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '2 vezes (uma para cada setState)', isCorrect: false },
      { id: 'b', text: '1 vez', isCorrect: true },
      { id: 'c', text: '0 vezes', isCorrect: false },
      { id: 'd', text: 'Depende do navegador', isCorrect: false },
    ],
    hints: ['React agrupa (batches) múltiplas chamadas de `setState` feitas dentro do mesmo handler de evento em um único re-render'],
    explanation: 'React agrupa automaticamente todas as atualizações de estado disparadas dentro do mesmo handler de evento em uma única re-renderização (batching) — não importa quantos `setState` diferentes sejam chamados. Por isso, mesmo chamando `setCount` e `setFlag`, o componente re-renderiza apenas UMA vez, com ambos os novos valores já aplicados.',
    tags: ['batching', 'setState', 'output-prediction'],
  },
  {
    id: 'react-pred-005',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Depois de UM clique, qual é o valor de \`count\` exibido?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '2', isCorrect: false },
      { id: 'b', text: '1', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Incrementa indefinidamente', isCorrect: false },
    ],
    hints: ['Ambas as chamadas de `setCount` leem a MESMA variável `count`, capturada pela closure deste render específico'],
    explanation: 'As duas chamadas de `setCount(count + 1)` leem o mesmo `count` (o valor capturado pela closure do render atual, digamos `0`). Ambas calculam `0 + 1 = 1` e agendam essa mesma atualização. React aplica o resultado final, que é `1`, não `2` — esse é o bug clássico de "perder updates" ao não usar a forma funcional do setter.',
    tags: ['useState', 'stale-closure', 'batching', 'output-prediction'],
  },
  {
    id: 'react-pred-006',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção do bug anterior. Depois de UM clique, qual é o valor de \`count\` exibido?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '2', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Indefinido', isCorrect: false },
    ],
    hints: ['Cada atualização funcional recebe o valor PENDENTE mais recente, não o valor capturado pela closure do render'],
    explanation: 'Usando a forma funcional (`c => c + 1`), cada chamada recebe o valor de estado mais atualizado disponível no momento em que React processa a fila de atualizações — incluindo atualizações pendentes da MESMA rodada de batching. A primeira chamada recebe `0` e produz `1`; a segunda chamada recebe esse `1` pendente e produz `2`. Resultado final: `2`.',
    tags: ['useState', 'functional-update', 'batching', 'output-prediction'],
  },
  {
    id: 'react-pred-007',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `\`App\` re-renderiza várias vezes (por exemplo, ao clicar em um botão que muda um estado não relacionado). O que acontece com o log 'computed' a cada re-render de \`App\`?

\`\`\`jsx
function List({ items }) {
  const sorted = useMemo(() => [...items].sort(), [items]);
  console.log('computed');
  return null;
}
function App() {
  const [n, setN] = useState(0);
  return (
    <>
      <List items={[3, 1, 2]} />
      <button onClick={() => setN(n + 1)}>{n}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "'computed' nunca mais é impresso após o primeiro render, pois o array de itens nunca muda de valor", isCorrect: false },
      { id: 'b', text: "'computed' é impresso a cada re-render, mesmo com os mesmos valores", isCorrect: true },
      { id: 'c', text: 'Lança um erro de dependência ausente', isCorrect: false },
      { id: 'd', text: "'computed' é impresso apenas uma vez, mesmo sem `useMemo`", isCorrect: false },
    ],
    hints: ['`[3, 1, 2]` é um LITERAL de array, recriado como uma referência completamente nova em todo render de `App`', '`useMemo` compara dependências por referência (`Object.is`), não por valor profundo'],
    explanation: 'O array `[3, 1, 2]` é recriado como um novo objeto em memória a cada render de `App` — mesmo que os VALORES sejam idênticos, a REFERÊNCIA é diferente. `useMemo` compara dependências usando `Object.is` (igualdade referencial), então ele sempre vê `items` como "diferente" do anterior e recalcula `sorted`, imprimindo `computed` em todo re-render. O `useMemo` aqui não está cumprindo sua função de otimização.',
    tags: ['useMemo', 'dependencias', 'referencia', 'output-prediction'],
  },
  {
    id: 'react-pred-008',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Ao clicar no botão "Parent", o log 'Child render' aparece de novo, mesmo o \`Child\` estando dentro de \`React.memo\`?

\`\`\`jsx
const Child = React.memo(function Child({ onClick }) {
  console.log('Child render');
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(c => c + 1);
  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Parent</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Não, `React.memo` impede qualquer re-render do `Child`', isCorrect: false },
      { id: 'b', text: 'Sim, porque `handleClick` é uma nova função a cada render de `Parent`', isCorrect: true },
      { id: 'c', text: 'Não, porque `onClick` nunca muda de comportamento', isCorrect: false },
      { id: 'd', text: 'Sim, mas só na primeira vez', isCorrect: false },
    ],
    hints: ['`React.memo` faz uma comparação RASA (shallow) das props', '`const handleClick = () => ...` cria uma função nova a cada chamada de `Parent`, com uma referência diferente da anterior'],
    explanation: '`React.memo` evita re-render apenas quando TODAS as props são referencialmente iguais às do render anterior (comparação rasa). `handleClick` é declarada dentro do corpo de `Parent`, então uma nova função (com nova referência) é criada em TODO render de `Parent` — mesmo fazendo exatamente a mesma coisa. Como a prop `onClick` do `Child` muda de referência a cada vez, `React.memo` falha em sua comparação e o `Child` re-renderiza de qualquer forma.',
    tags: ['React.memo', 'useCallback', 'referencia', 'output-prediction'],
  },
  {
    id: 'react-pred-009',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção do bug anterior, usando \`useCallback\`. Ao clicar no botão "Parent", o log 'Child render' aparece de novo?

\`\`\`jsx
const Child = React.memo(function Child({ onClick }) {
  console.log('Child render');
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Parent</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, igual à versão anterior', isCorrect: false },
      { id: 'b', text: 'Não, `Child` não re-renderiza mais', isCorrect: true },
      { id: 'c', text: 'Lança um erro de referência circular', isCorrect: false },
      { id: 'd', text: 'Depende do React DevTools estar aberto', isCorrect: false },
    ],
    hints: ['`useCallback` com array de dependências vazio memoiza a função, retornando a MESMA referência em todo render'],
    explanation: '`useCallback(fn, [])` garante que a mesma referência de função seja retornada em todos os renders subsequentes (já que não há dependências para invalidar o cache). Como a prop `onClick` do `Child` agora permanece referencialmente estável, a comparação rasa do `React.memo` passa, e `Child` não re-renderiza mais quando apenas `Parent` muda de estado.',
    tags: ['useCallback', 'React.memo', 'output-prediction'],
  },
  {
    id: 'react-pred-010',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `Depois de clicar no botão "Render" duas vezes, quais valores foram impressos no console (incluindo o mount)?

\`\`\`jsx
function Timer() {
  const renders = useRef(0);
  renders.current += 1;
  console.log(renders.current);
  const [, forceUpdate] = useState(0);
  return <button onClick={() => forceUpdate(n => n + 1)}>Render</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1, 1, 1', isCorrect: false },
      { id: 'b', text: '1, 2, 3', isCorrect: true },
      { id: 'c', text: '0, 1, 2', isCorrect: false },
      { id: 'd', text: 'Apenas 1 (refs não mudam)', isCorrect: false },
    ],
    hints: ['Mutar uma ref não causa re-render por si só, mas o componente PRECISA re-renderizar por outro motivo (aqui, o `forceUpdate`)', 'Toda vez que o componente renderiza, a linha `renders.current += 1` roda de novo'],
    explanation: 'Mutar `renders.current` diretamente NÃO dispara um re-render por conta própria — mas aqui o `forceUpdate` (um estado dummy) é o que provoca o re-render a cada clique. Em cada render (mount + 2 cliques = 3 renders no total), a linha `renders.current += 1` executa, incrementando o contador persistente da ref e imprimindo seu novo valor: `1`, depois `2`, depois `3`.',
    tags: ['useRef', 'forceUpdate', 'output-prediction'],
  },
  {
    id: 'react-pred-011',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Depois de clicar no botão 3 vezes (4 renders no total), quantas vezes 'computing initial state' é impresso?

\`\`\`jsx
function expensiveInit() {
  console.log('computing initial state');
  return 0;
}
function App() {
  const [count, setCount] = useState(expensiveInit());
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 vez (apenas no mount)', isCorrect: false },
      { id: 'b', text: '4 vezes (em todo render)', isCorrect: true },
      { id: 'c', text: '0 vezes', isCorrect: false },
      { id: 'd', text: '3 vezes (não conta o mount)', isCorrect: false },
    ],
    hints: ['`useState(expensiveInit())` CHAMA a função imediatamente, em todo render — React só usa o resultado no primeiro render, mas a chamada em si sempre acontece', 'A otimização de "lazy initial state" só funciona passando a referência da função, sem os parênteses: `useState(expensiveInit)`'],
    explanation: 'Aqui `expensiveInit()` é invocada diretamente, com parênteses — isso significa que a função roda em TODO render, mesmo que React só use o valor retornado para inicializar o estado na primeira vez. Esse é um erro comum: a otimização de "lazy initial state" do `useState` só existe quando você passa a FUNÇÃO em si (sem chamá-la), permitindo que o React decida invocá-la apenas uma vez.',
    tags: ['useState', 'lazy-initial-state', 'output-prediction'],
  },
  {
    id: 'react-pred-012',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção do bug anterior. Depois de clicar no botão 3 vezes, quantas vezes 'computing initial state' é impresso?

\`\`\`jsx
function expensiveInit() {
  console.log('computing initial state');
  return 0;
}
function App() {
  const [count, setCount] = useState(expensiveInit);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '4 vezes', isCorrect: false },
      { id: 'b', text: '1 vez', isCorrect: true },
      { id: 'c', text: '3 vezes', isCorrect: false },
      { id: 'd', text: '0 vezes', isCorrect: false },
    ],
    hints: ['Passar a referência da função (sem parênteses) ativa a otimização de lazy initialization do React'],
    explanation: 'Quando você passa a FUNÇÃO em si para `useState` (sem chamá-la), React só a invoca uma única vez, durante o render inicial, para calcular o estado de partida — em renders subsequentes, o estado já existe e o inicializador é completamente ignorado. Por isso `computing initial state` aparece apenas uma vez, independente de quantos cliques aconteçam depois.',
    tags: ['useState', 'lazy-initial-state', 'output-prediction'],
  },
  {
    id: 'react-pred-013',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Este componente é renderizado primeiro com \`label="A"\`, depois com \`label="B"\`. Qual é a ordem exata dos logs?

\`\`\`jsx
function Timer({ label }) {
  useEffect(() => {
    console.log('effect:', label);
    return () => console.log('cleanup:', label);
  }, [label]);
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "'effect: A', 'effect: B', 'cleanup: A'", isCorrect: false },
      { id: 'b', text: "'effect: A', 'cleanup: A', 'effect: B'", isCorrect: true },
      { id: 'c', text: "'cleanup: A', 'effect: A', 'effect: B'", isCorrect: false },
      { id: 'd', text: "'effect: A', 'effect: B'", isCorrect: false },
    ],
    hints: ['Antes de rodar um novo efeito (por mudança de dependência), React sempre executa o cleanup do efeito ANTERIOR primeiro'],
    explanation: 'Quando uma dependência do `useEffect` muda (`label` de `\'A\'` para `\'B\'`), React sempre executa a função de cleanup do efeito ANTERIOR antes de rodar o novo efeito. Sequência: `effect: A` (no mount) → `cleanup: A` (antes de reagir à mudança) → `effect: B` (o novo efeito, já com o label atualizado).',
    tags: ['useEffect', 'cleanup', 'output-prediction'],
  },
  {
    id: 'react-pred-014',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de clicar no botão 3 vezes, quantas vezes 'mounted, count is' aparece no console, e com qual valor?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('mounted, count is', count);
  }, []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '4 vezes, com os valores 0, 1, 2, 3', isCorrect: false },
      { id: 'b', text: '1 vez, sempre com o valor 0', isCorrect: true },
      { id: 'c', text: '1 vez, com o valor 3 (o mais recente)', isCorrect: false },
      { id: 'd', text: '3 vezes, com os valores 1, 2, 3', isCorrect: false },
    ],
    hints: ['`[]` como dependências faz o efeito rodar só uma vez, no mount, para sempre', 'A closure do efeito está presa ao `count` que existia no momento do mount'],
    explanation: 'Com `[]` como array de dependências, o efeito roda exatamente uma vez, no mount, e nunca mais — independente de quantas vezes o estado mude depois. A closure dessa única execução capturou `count = 0` (o valor no momento do mount), então o log fica congelado em `mounted, count is 0` para sempre, mesmo que a UI mostre valores diferentes depois dos cliques.',
    tags: ['useEffect', 'stale-closure', 'output-prediction'],
  },
  {
    id: 'react-pred-015',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Com \`items = []\`, o que aparece na tela?

\`\`\`jsx
function Cart({ items }) {
  return (
    <div>
      {items.length && <p>{items.length} items</p>}
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nada é renderizado dentro da div', isCorrect: false },
      { id: 'b', text: 'O número "0" aparece sozinho na tela', isCorrect: true },
      { id: 'c', text: 'Um erro de renderização', isCorrect: false },
      { id: 'd', text: 'A string "false"', isCorrect: false },
    ],
    hints: ['`items.length` quando vazio é o número `0`, e `0 && <p>...</p>` é avaliado como `0` (curto-circuito do `&&`)', 'React não renderiza `false`, `null`, `undefined` ou `true` — mas RENDERIZA o número `0` normalmente'],
    explanation: 'Esse é um bug muito comum. Com `items.length === 0`, a expressão `items.length && <p>...</p>` faz curto-circuito no operador `&&` e retorna o próprio `0` (não `false`). React tem uma lista específica de valores que não renderiza nada (`false`, `null`, `undefined`, `true`), mas `0` NÃO está nessa lista — React o renderiza como texto normalmente. Resultado: um "0" solto aparece na tela quando o carrinho está vazio. A correção comum é usar `items.length > 0 && ...` ou `Boolean(items.length) && ...`.',
    tags: ['renderização-condicional', 'falsy-values', 'jsx', 'output-prediction'],
  },
  {
    id: 'react-pred-016',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de UM clique, quantas vezes 'reducer called' é impresso, e qual o valor final de \`state.count\`?

\`\`\`jsx
function reducer(state, action) {
  console.log('reducer called, action:', action.type);
  if (action.type === 'inc') return { count: state.count + 1 };
  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function handleClick() {
    dispatch({ type: 'inc' });
    dispatch({ type: 'inc' });
  }
  return <button onClick={handleClick}>{state.count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 vez, count vira 1 (mesmo bug do useState)', isCorrect: false },
      { id: 'b', text: '2 vezes, count vira 2', isCorrect: true },
      { id: 'c', text: '2 vezes, count vira 1', isCorrect: false },
      { id: 'd', text: '0 vezes, pois dispatch é assíncrono', isCorrect: false },
    ],
    hints: ['Cada `dispatch` SEMPRE chama o reducer, mesmo que múltiplos dispatches aconteçam no mesmo handler', 'Diferente de `setCount(count + 1)`, o reducer recebe o `state` mais atual a cada chamada, não uma closure presa ao render'],
    explanation: 'Cada chamada de `dispatch` invoca o `reducer` (por isso o log aparece 2 vezes). Diferente do bug clássico com `setCount(count + 1)` chamado duas vezes (que perde uma atualização por usar uma closure presa ao valor do render), o `reducer` sempre recebe o `state` mais recente como primeiro argumento, processando as atualizações em sequência: a primeira chamada recebe `{ count: 0 }` e retorna `{ count: 1 }`; a segunda chamada recebe esse `{ count: 1 }` (já atualizado) e retorna `{ count: 2 }`.',
    tags: ['useReducer', 'output-prediction'],
  },
  {
    id: 'react-pred-017',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que é impresso no console?

\`\`\`jsx
const ThemeContext = createContext('light');

function Display() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return null;
}

function App() {
  return <Display />;
}
\`\`\``,
    options: [
      { id: 'a', text: 'undefined', isCorrect: false },
      { id: 'b', text: "'light'", isCorrect: true },
      { id: 'c', text: 'Lança um erro: nenhum Provider encontrado', isCorrect: false },
      { id: 'd', text: 'null', isCorrect: false },
    ],
    hints: ['O valor passado para `createContext(valorPadrao)` é usado sempre que não há nenhum `Provider` correspondente acima na árvore'],
    explanation: '`Display` chama `useContext(ThemeContext)` sem que nenhum `<ThemeContext.Provider>` exista entre ele e a raiz da árvore. Nesse caso, React usa o valor padrão fornecido na criação do contexto — `createContext(\'light\')` — sem lançar erro algum. Por isso o log mostra `\'light\'`.',
    tags: ['Context', 'useContext', 'valor-padrao', 'output-prediction'],
  },
  {
    id: 'react-pred-018',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    text: `\`App\` primeiro renderiza com \`value="A"\`, depois re-renderiza com \`value="B"\` (sem clicar em nada ainda). DEPOIS disso, o usuário clica no botão. O que é impresso?

\`\`\`jsx
function useLogger(value) {
  const log = useCallback(() => {
    console.log(value);
  }, []); // dependência ausente: value
  return log;
}

function App({ value }) {
  const log = useLogger(value);
  return <button onClick={log}>Log</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'B' (o valor mais recente)", isCorrect: false },
      { id: 'b', text: "'A' (o valor do primeiro render)", isCorrect: true },
      { id: 'c', text: "'A' e depois 'B'", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`useCallback` com `[]` memoiza a função no PRIMEIRO render e nunca a recria, mesmo que `value` mude depois', 'A função `log` retornada permanece para sempre como a closure original, presa ao `value` do primeiro render'],
    explanation: 'Como `useCallback` tem um array de dependências vazio (`[]`), ele memoiza a função `log` na primeira vez que o hook é chamado e NUNCA a recria em renders subsequentes — mesmo que `value` mude de `\'A\'` para `\'B\'`. A função retornada continua sendo exatamente a mesma closure original, presa para sempre ao `value` que existia no primeiro render. Por isso, ao clicar no botão depois da mudança de prop, ainda é impresso `\'A\'`.',
    tags: ['useCallback', 'stale-closure', 'custom-hook', 'output-prediction'],
  },
  {
    id: 'react-pred-019',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Ao clicar no botão, o log 'Box render' aparece de novo, mesmo \`Box\` estando em \`React.memo\`?

\`\`\`jsx
const Box = React.memo(function Box({ children }) {
  console.log('Box render');
  return <div>{children}</div>;
});

function App() {
  const [n, setN] = useState(0);
  return (
    <>
      <Box><span>Static</span></Box>
      <button onClick={() => setN(n + 1)}>{n}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Não, o conteúdo de `children` nunca muda', isCorrect: false },
      { id: 'b', text: 'Sim, porque `<span>Static</span>` é um novo elemento (objeto) a cada render de `App`', isCorrect: true },
      { id: 'c', text: 'Não, JSX estático é automaticamente memoizado pelo React', isCorrect: false },
      { id: 'd', text: 'Sim, mas apenas se `Box` não estivesse em `React.memo`', isCorrect: false },
    ],
    hints: ['JSX sempre cria um NOVO objeto de elemento React a cada vez que o código que o contém executa, mesmo que o markup pareça idêntico', '`children` é só mais uma prop — e `React.memo` compara props por referência'],
    explanation: 'Todo JSX (`<span>Static</span>`) é transformado em uma chamada de função (`React.createElement` ou equivalente) que retorna um NOVO objeto a cada vez que `App` renderiza — mesmo que o markup seja visualmente idêntico. Esse novo objeto é passado como a prop `children` para `Box`. Como `React.memo` compara props com igualdade referencial (shallow), ele detecta que `children` "mudou" (é um objeto diferente) e permite o re-render de `Box`.',
    tags: ['React.memo', 'children', 'referencia', 'output-prediction'],
  },
  {
    id: 'react-pred-020',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O usuário clica no botão várias vezes (que sempre chama \`setCount(0)\`, o mesmo valor inicial). O que acontece com o log 'render' depois do PRIMEIRO clique?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  console.log('render');
  return <button onClick={() => setCount(0)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'render' é impresso de novo a cada clique, mesmo sem mudança visual", isCorrect: false },
      { id: 'b', text: "'render' NÃO é impresso de novo em nenhum clique seguinte", isCorrect: true },
      { id: 'c', text: 'Lança um erro de estado inválido', isCorrect: false },
      { id: 'd', text: "'render' aparece só na primeira vez que clicar, depois nunca mais reage a cliques", isCorrect: false },
    ],
    hints: ['React compara o novo valor de estado com o atual usando `Object.is`', 'Se o novo valor é igual ao atual, React "bail out" (desiste) do re-render, sem nem executar o corpo do componente de novo'],
    explanation: 'Toda chamada de `setCount(0)` está tentando definir o estado para o MESMO valor que ele já tem (`0`). React detecta essa igualdade usando `Object.is` e decide pular completamente o re-render — nem o corpo da função `App` (e portanto o `console.log(\'render\')`) executa de novo. Esse comportamento de "bail out" é uma otimização interna do React, independente de quantas vezes o clique aconteça.',
    tags: ['useState', 'bail-out', 'Object.is', 'output-prediction'],
  },
  {
    id: 'react-pred-021',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Com \`count\` começando em 0, o usuário clica UMA vez. Depois de 1 segundo, o que é impresso?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setTimeout(() => {
      console.log('count is', count);
    }, 1000);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'count is 1'", isCorrect: false },
      { id: 'b', text: "'count is 0'", isCorrect: true },
      { id: 'c', text: 'Lança um erro de closure inválida', isCorrect: false },
      { id: 'd', text: "'count is undefined'", isCorrect: false },
    ],
    hints: ['O callback do `setTimeout` é uma closure que captura o `count` do MOMENTO em que `handleClick` foi chamada', 'A re-renderização causada por `setCount` cria uma NOVA instância de `handleClick` com o `count` atualizado — mas o `setTimeout` já agendado continua usando a closure antiga'],
    explanation: 'O callback passado para `setTimeout` é criado dentro de `handleClick`, fechando sobre o `count` que existia NAQUELE clique específico (`0`). Mesmo que `setCount(count + 1)` dispare um re-render (e a UI passe a mostrar `1`), o callback já agendado no `setTimeout` não é afetado por esse re-render — ele continua sendo a mesma função, presa para sempre ao `count = 0` da closure original. Por isso, depois de 1 segundo, ainda é impresso `count is 0`.',
    tags: ['stale-closure', 'setTimeout', 'event-handler', 'output-prediction'],
  },
  {
    id: 'react-pred-022',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `No mount, em que ordem esses três logs aparecem?

\`\`\`jsx
function App() {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));
  console.log('render');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "'render', 'useEffect', 'useLayoutEffect'", isCorrect: false },
      { id: 'b', text: "'render', 'useLayoutEffect', 'useEffect'", isCorrect: true },
      { id: 'c', text: "'useLayoutEffect', 'render', 'useEffect'", isCorrect: false },
      { id: 'd', text: 'A ordem entre os dois hooks é indefinida', isCorrect: false },
    ],
    hints: ['O corpo do componente (incluindo `console.log(\'render\')`) sempre executa primeiro, durante a renderização', '`useLayoutEffect` é SEMPRE executado de forma síncrona antes do navegador pintar a tela; `useEffect` é executado de forma assíncrona, depois da pintura'],
    explanation: '`render` sempre acontece primeiro, pois é o corpo da função sendo executado durante a renderização. Entre os dois hooks de efeito, `useLayoutEffect` é garantido rodar de forma síncrona, IMEDIATAMENTE após o DOM ser atualizado mas ANTES do navegador pintar a tela — por isso ele sempre dispara antes do `useEffect`, que é adiado (efeito "passivo") para depois da pintura.',
    tags: ['useEffect', 'useLayoutEffect', 'ordem-de-execucao', 'output-prediction'],
  },
  {
    id: 'react-pred-023',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `No mount, em que ordem esses logs aparecem?

\`\`\`jsx
function Child() {
  useEffect(() => console.log('child effect'));
  return null;
}
function Parent() {
  useEffect(() => console.log('parent effect'));
  return <Child />;
}
\`\`\``,
    options: [
      { id: 'a', text: "'parent effect', 'child effect'", isCorrect: false },
      { id: 'b', text: "'child effect', 'parent effect'", isCorrect: true },
      { id: 'c', text: 'A ordem é aleatória entre execuções', isCorrect: false },
      { id: 'd', text: 'Apenas o efeito do componente mais externo executa', isCorrect: false },
    ],
    hints: ['React monta e executa os efeitos dos componentes filhos completamente antes de rodar o efeito do componente pai'],
    explanation: 'React monta a árvore de componentes de "baixo para cima" em relação aos efeitos: primeiro um componente filho termina de montar e rodar TODOS os seus próprios efeitos, e só depois disso o componente pai roda os seus. Isso garante que, quando o efeito do pai executa, toda a árvore de filhos já está completamente montada e estável. Por isso `child effect` aparece antes de `parent effect`.',
    tags: ['useEffect', 'ordem-de-montagem', 'output-prediction'],
  },
  {
    id: 'react-pred-024',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O usuário clica 3 vezes no botão do PRIMEIRO \`Counter\` e 1 vez no botão do SEGUNDO. O que cada um exibe?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
function App() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Ambos mostram 4 (a soma de todos os cliques)', isCorrect: false },
      { id: 'b', text: 'O primeiro mostra 3, o segundo mostra 1', isCorrect: true },
      { id: 'c', text: 'Ambos mostram 3 (o valor do último clique sincroniza os dois)', isCorrect: false },
      { id: 'd', text: 'Lança um erro: hooks duplicados', isCorrect: false },
    ],
    hints: ['Cada elemento `<Counter />` é uma instância completamente independente, com seu próprio estado isolado'],
    explanation: 'Cada `<Counter />` renderizado é uma instância separada do componente, e o React mantém o estado (`useState`) de forma completamente isolada para cada instância — mesmo sendo o mesmo código de componente. Cliques em um `Counter` nunca afetam o estado de outro `Counter`. Por isso o primeiro termina em `3` e o segundo em `1`, de forma totalmente independente.',
    tags: ['useState', 'instancias-de-componente', 'output-prediction'],
  },
  {
    id: 'react-pred-025',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que acontece quando este componente é montado?

\`\`\`jsx
function App() {
  const [data, setData] = useState({ count: 0 });
  useEffect(() => {
    setData({ count: data.count + 1 });
  }, [data]);
  console.log('render');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "Renderiza e imprime 'render' uma única vez, normalmente", isCorrect: false },
      { id: 'b', text: 'Um loop infinito de renders e efeitos', isCorrect: true },
      { id: 'c', text: 'Lança um erro de sintaxe', isCorrect: false },
      { id: 'd', text: 'Renderiza duas vezes e depois estabiliza', isCorrect: false },
    ],
    hints: ['`{ count: 0 }` é um objeto NOVO a cada render — `data` nunca é `Object.is`-igual ao `data` do render anterior', 'O efeito sempre vê a dependência `data` como "diferente", então sempre roda, e ele próprio chama `setData`, causando outro render, repetindo para sempre'],
    explanation: 'Esse é um loop infinito clássico: a cada render, `data` é um objeto recém-criado (mesmo que o `count` dentro dele eventualmente se repita, a REFERÊNCIA do objeto é sempre nova). O `useEffect` depende de `data` por referência, então ele SEMPRE considera que a dependência "mudou" e roda de novo — e dentro dele, `setData` cria mais um objeto novo, disparando outro render, que dispara outro efeito, indefinidamente.',
    tags: ['useEffect', 'loop-infinito', 'dependencias', 'output-prediction'],
  },
  {
    id: 'react-pred-026',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O usuário clica em "Hide". O que é impresso no console?

\`\`\`jsx
function Message() {
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);
  return <p>Hi</p>;
}
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Message />}
      <button onClick={() => setShow(false)}>Hide</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "Nada — 'unmount' só seria impresso se a página fosse recarregada", isCorrect: false },
      { id: 'b', text: "'unmount'", isCorrect: true },
      { id: 'c', text: "'mount' de novo", isCorrect: false },
      { id: 'd', text: 'Um erro, pois `Message` ainda está referenciado no JSX', isCorrect: false },
    ],
    hints: ['Quando um componente deixa de ser renderizado (sai da árvore), React executa a função de cleanup do seu `useEffect` antes de descartá-lo'],
    explanation: 'Ao clicar em "Hide", `show` passa a `false`, e `{show && <Message />}` deixa de renderizar `<Message />` — o componente é desmontado. Antes de descartá-lo completamente, React executa a função de cleanup retornada pelo `useEffect`, imprimindo `unmount`. Isso vale mesmo com `[]` como dependências: o cleanup roda quando o componente desmonta, não apenas quando as dependências mudam.',
    tags: ['useEffect', 'cleanup', 'unmount', 'renderização-condicional', 'output-prediction'],
  },
  {
    id: 'react-pred-027',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Com \`count\` começando em 0, o usuário clica UMA vez. O que é impresso no console (pelo \`console.log\` dentro de \`handleClick\`, não o que aparece na tela)?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '0', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Depende de quão rápido o React re-renderiza', isCorrect: false },
    ],
    hints: ['Chamar `setCount` NÃO atualiza a variável `count` imediatamente dentro do mesmo handler — a atualização só se reflete em um PRÓXIMO render'],
    explanation: 'Uma das confusões mais comuns sobre React: `setCount` não é uma atribuição síncrona, então `count` lido logo depois, AINDA DENTRO do mesmo `handleClick`, continua sendo o valor capturado pela closure deste render (`0`). A atualização de estado só passa a valer no próximo render do componente, quando uma nova instância de `handleClick` (com um novo `count` na closure) é criada.',
    tags: ['useState', 'stale-closure', 'output-prediction'],
  },
  {
    id: 'react-pred-028',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O botão é clicado 3 vezes seguidas, bem rápido. O que é impresso a cada clique?

\`\`\`jsx
function Counter() {
  let count = 0;
  function handleClick() {
    count = count + 1;
    console.log(count);
  }
  return <button onClick={handleClick}>Click</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 1, 1', isCorrect: true },
      { id: 'c', text: '0, 1, 2', isCorrect: false },
      { id: 'd', text: 'Lança um erro: `count` é `const` implicitamente', isCorrect: false },
    ],
    hints: ['Como nada aqui dispara um re-render, o corpo de `Counter` nunca executa de novo', 'Mas `handleClick` é recriada do zero TODA VEZ que o componente renderiza (e aqui ele só renderizou uma vez — no mount)'],
    explanation: 'Esse componente nunca usa `useState`, então `count` é apenas uma variável local comum, reiniciada para `0` toda vez que `Counter` é executado como função. Como nada aqui chama um setter de estado, o componente NUNCA re-renderiza depois do mount inicial — `handleClick` continua sendo a MESMA closure, fechando sobre a MESMA variável `count` (que não é resetada entre cliques, pois a função não é recriada). A cada clique, `count = count + 1` incrementa essa variável persistente dentro da closure: `1`, depois `2`, depois `3`... Atenção: como `handleClick` não muda entre cliques (não há re-render), a variável realmente acumula.',
    tags: ['let-vs-useState', 'closures', 'output-prediction'],
  },
  {
    id: 'react-pred-029',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `\`App\` é renderizado de novo (por exemplo, clicando no botão), mas a prop \`id\` continua com o MESMO valor. O efeito roda de novo?

\`\`\`jsx
function App({ id }) {
  useEffect(() => {
    console.log('fetching for', id);
  }, [id]);
  const [, forceRender] = useState(0);
  return <button onClick={() => forceRender(n => n + 1)}>{id}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, todo re-render dispara o efeito de novo', isCorrect: false },
      { id: 'b', text: 'Não, o efeito só roda quando `id` de fato muda de valor', isCorrect: true },
      { id: 'c', text: 'Sim, mas só a partir do segundo clique', isCorrect: false },
      { id: 'd', text: 'Lança um erro de dependência inconsistente', isCorrect: false },
    ],
    hints: ['`useEffect` compara cada item do array de dependências com o valor do render anterior, e só roda de novo se ALGO mudou'],
    explanation: 'O `useEffect` só executa de novo quando pelo menos uma dependência do array realmente muda de valor (comparado via `Object.is`) entre um render e outro. Aqui, `forceRender` causa um re-render de `App`, mas `id` continua sendo exatamente o mesmo valor — então o efeito não roda de novo. Re-renderizar um componente não significa, por si só, re-executar todos os seus efeitos.',
    tags: ['useEffect', 'dependencias', 'output-prediction'],
  },
  {
    id: 'react-pred-030',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `Renderizando com \`items = ['a', 'b', 'c']\` (sem prop \`key\`), o que é exibido na tela?

\`\`\`jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => <li>{item}</li>)}
    </ul>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nada é renderizado, pois falta a prop `key`', isCorrect: false },
      { id: 'b', text: 'Os três itens são renderizados normalmente, na ordem correta', isCorrect: true },
      { id: 'c', text: 'Lança um erro fatal de renderização', isCorrect: false },
      { id: 'd', text: 'Apenas o primeiro item é renderizado', isCorrect: false },
    ],
    hints: ['A ausência de `key` gera apenas um AVISO no console (não um erro), e não impede a renderização inicial', 'O problema real de não usar `key` aparece em RECONCILIAÇÕES futuras (reordenar, inserir, remover itens), não na primeira renderização'],
    explanation: 'A prop `key` ajuda o React a identificar quais itens de uma lista mudaram, foram adicionados ou removidos entre renders — mas sua ausência gera apenas um aviso no console, sem impedir a renderização. Na primeira renderização (ou em listas que nunca são reordenadas/filtradas), o resultado visual é idêntico com ou sem `key`. Os problemas reais de pular `key` aparecem em reconciliações futuras: estado de componentes pode "vazar" para o item errado quando a lista é reordenada.',
    tags: ['key-prop', 'listas', 'reconciliacao', 'output-prediction'],
  },
  {
    id: 'react-pred-031',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `Em React 18+, o usuário clica uma vez em qualquer lugar da página. Quantas vezes 'render' é impresso (sem contar a montagem)?

\`\`\`jsx
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  console.log('render');

  useEffect(() => {
    function handler() {
      setA(x => x + 1);
      setB(x => x + 1);
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: '2 vezes, uma para cada `setState`', isCorrect: false },
      { id: 'b', text: '1 vez', isCorrect: true },
      { id: 'c', text: '0 vezes, listeners nativos não disparam re-render', isCorrect: false },
      { id: 'd', text: 'Depende do navegador', isCorrect: false },
    ],
    hints: ['Desde o React 18, o "automatic batching" se aplica a TODAS as atualizações de estado, não só às disparadas por handlers de eventos sintéticos do React', 'Antes do React 18, atualizações dentro de listeners nativos (`addEventListener`), promises ou timeouts NÃO eram agrupadas — cada uma causava seu próprio re-render'],
    explanation: 'A partir do React 18, o "automatic batching" passou a valer para QUALQUER atualização de estado, independente de onde ela aconteça — incluindo listeners de eventos nativos do DOM (`addEventListener`), callbacks de Promise e `setTimeout`. Antes (React 17), apenas atualizações dentro dos handlers sintéticos do próprio React eram agrupadas; fora deles, cada `setState` causava um re-render separado. Aqui, mesmo com `setA` e `setB` dentro de um listener nativo, ambas são agrupadas em uma única re-renderização.',
    tags: ['automatic-batching', 'react-18', 'addEventListener', 'output-prediction'],
  },
  {
    id: 'react-pred-032',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de clicar 3 vezes, o que aparece como TEXTO DO BOTÃO na tela (não no console)?

\`\`\`jsx
function App() {
  const countRef = useRef(0);
  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }
  return <button onClick={handleClick}>{countRef.current}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '"3" (acompanha os cliques)', isCorrect: false },
      { id: 'b', text: '"0" (nunca atualiza visualmente)', isCorrect: true },
      { id: 'c', text: '"1", depois "2", depois "3" (atualiza a cada clique)', isCorrect: false },
      { id: 'd', text: 'Lança um erro de leitura de ref durante o render', isCorrect: false },
    ],
    hints: ['Mutar `.current` de uma ref NUNCA dispara um re-render por si só', 'O `console.log` mostra o valor correto (1, 2, 3), mas a TELA não é atualizada, pois nada provoca uma nova renderização'],
    explanation: 'Esse exemplo contrasta com a questão sobre `useRef` + `forceUpdate`: aqui não existe NENHUM estado (`useState`) e nada dispara um re-render. `countRef.current += 1` realmente incrementa o valor interno da ref (e o `console.log` confirma isso, mostrando `1`, `2`, `3`), mas como mutar uma ref não causa re-renderização, o JSX `{countRef.current}` nunca é re-avaliado na tela — o texto do botão permanece congelado em `"0"` para sempre, mesmo que o valor real da ref tenha mudado.',
    tags: ['useRef', 'sem-re-render', 'output-prediction'],
  },
  {
    id: 'react-pred-033',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de clicar no botão 3 vezes, quantas vezes 'effect ran' aparece no total (incluindo o mount)?

\`\`\`jsx
function App() {
  const [n, setN] = useState(0);
  function getValue() {
    return 5;
  }
  useEffect(() => {
    console.log('effect ran');
  }, [getValue]);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 vez (apenas o mount)', isCorrect: false },
      { id: 'b', text: '4 vezes', isCorrect: true },
      { id: 'c', text: '3 vezes (não conta o mount)', isCorrect: false },
      { id: 'd', text: 'Lança um erro de dependência inválida', isCorrect: false },
    ],
    hints: ['`function getValue() {...}` declarada dentro do componente é recriada (nova referência) a cada render', 'Mesmo que `getValue` sempre retorne `5` e nunca "mude de comportamento", `useEffect` só compara REFERÊNCIAS, não o que a função faz'],
    explanation: 'A função `getValue` é redeclarada do zero em todo render de `App`, recebendo uma nova referência mesmo que seu comportamento jamais mude. Como `useEffect` usa comparação referencial (`Object.is`) em suas dependências, ele sempre vê `getValue` como "diferente" da anterior e roda de novo: uma vez no mount, e mais uma vez em cada um dos 3 cliques — totalizando 4 execuções.',
    tags: ['useEffect', 'dependencias', 'referencia', 'output-prediction'],
  },
  {
    id: 'react-pred-034',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que é exibido na tela depois de clicar no botão?

\`\`\`jsx
function Form() {
  const [user, setUser] = useState({ name: 'Ana', age: 25 });
  function updateName() {
    setUser({ name: 'Bia' });
  }
  return <button onClick={updateName}>{JSON.stringify(user)}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '{"name":"Bia","age":25}', isCorrect: false },
      { id: 'b', text: '{"name":"Bia"}', isCorrect: true },
      { id: 'c', text: '{"name":"Ana","age":25}', isCorrect: false },
      { id: 'd', text: 'Lança TypeError: propriedade `age` ausente', isCorrect: false },
    ],
    hints: ['Diferente de `this.setState` em class components, o setter do `useState` NÃO faz merge automático de objetos', 'O setter SUBSTITUI completamente o estado anterior pelo novo valor passado'],
    explanation: 'Uma diferença importante entre `useState` e o `this.setState` de class components: `this.setState` faz um merge superficial automático, mas o setter de `useState` simplesmente SUBSTITUI o valor de estado anterior pelo novo, sem misturar nada. Como `setUser({ name: \'Bia\' })` passa um objeto sem `age`, a propriedade `age` é completamente perdida. A forma correta seria espalhar o estado anterior: `setUser(prev => ({ ...prev, name: \'Bia\' }))`.',
    tags: ['useState', 'object-state', 'merge', 'output-prediction'],
  },
  {
    id: 'react-pred-035',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção do bug anterior. O que é exibido na tela depois de clicar no botão?

\`\`\`jsx
function Form() {
  const [user, setUser] = useState({ name: 'Ana', age: 25 });
  function updateName() {
    setUser(prev => ({ ...prev, name: 'Bia' }));
  }
  return <button onClick={updateName}>{JSON.stringify(user)}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '{"name":"Bia"}', isCorrect: false },
      { id: 'b', text: '{"name":"Bia","age":25}', isCorrect: true },
      { id: 'c', text: '{"name":"Ana","age":25}', isCorrect: false },
      { id: 'd', text: 'Lança um erro de spread inválido', isCorrect: false },
    ],
    hints: ['`{ ...prev, name: \'Bia\' }` copia todas as propriedades existentes e só sobrescreve `name`'],
    explanation: 'Ao espalhar o estado anterior (`...prev`) antes de sobrescrever apenas o campo desejado, todas as outras propriedades (como `age: 25`) são preservadas no novo objeto. Esse é o padrão idiomático para simular um "merge parcial" de objeto com `useState`, já que o React não faz isso automaticamente.',
    tags: ['useState', 'object-state', 'spread', 'output-prediction'],
  },
  {
    id: 'react-pred-036',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O usuário clica em "Change" (que muda o estado \`n\` de \`App\`, passado como \`initialName\`). O \`<Profile>\` passa a exibir "Bia"?

\`\`\`jsx
function Profile({ initialName }) {
  const [name, setName] = useState(initialName);
  return <p>{name}</p>;
}
function App() {
  const [n, setN] = useState('Ana');
  return (
    <>
      <Profile initialName={n} />
      <button onClick={() => setN('Bia')}>Change</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, `Profile` sincroniza automaticamente com a nova prop', isCorrect: false },
      { id: 'b', text: 'Não, continua mostrando "Ana"', isCorrect: true },
      { id: 'c', text: 'Lança um erro de estado não controlado', isCorrect: false },
      { id: 'd', text: 'Mostra "Ana Bia" (concatenado)', isCorrect: false },
    ],
    hints: ['`useState(initialName)` só usa o valor da prop para definir o estado no PRIMEIRO render daquela instância do componente', 'Depois do mount, o estado interno de `name` tem vida própria, completamente desacoplado de futuras mudanças em `initialName`'],
    explanation: 'O argumento passado para `useState` só é utilizado como valor inicial no PRIMEIRO render daquela instância de componente — React nunca "reexecuta" o inicializador em renders subsequentes, mesmo que a prop original mude. Como o próprio nome da prop sugere (`initialName`), ela só importa no começo. Depois disso, `name` é um estado independente, e mudar `n` em `App` não tem efeito algum sobre o `name` já existente dentro de `Profile`.',
    tags: ['useState', 'props-como-estado-inicial', 'output-prediction'],
  },
  {
    id: 'react-pred-037',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O usuário clica no botão "+". O log 'B render' aparece de novo, mesmo \`DisplayB\` nunca lendo \`count\` do contexto?

\`\`\`jsx
const CountContext = createContext();

function DisplayA() {
  const { count } = useContext(CountContext);
  console.log('A render');
  return <p>{count}</p>;
}
function DisplayB() {
  useContext(CountContext); // não usa o valor
  console.log('B render');
  return <p>static</p>;
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count }}>
      <DisplayA />
      <DisplayB />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </CountContext.Provider>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Não, `DisplayB` nunca usa `count`, então React o ignora', isCorrect: false },
      { id: 'b', text: 'Sim, qualquer consumidor do contexto re-renderiza quando o `value` do Provider muda', isCorrect: true },
      { id: 'c', text: 'Não, apenas `DisplayA` re-renderiza', isCorrect: false },
      { id: 'd', text: 'Apenas na primeira mudança de `count`', isCorrect: false },
    ],
    hints: ['Context não tem assinatura "granular" por campo — qualquer componente que chama `useContext` naquele contexto re-renderiza quando o `value` do Provider muda', '`{ count }` também é um objeto NOVO a cada render de `App`, então o `value` do Provider muda de referência sempre'],
    explanation: 'Diferente de bibliotecas de state management mais granulares, `useContext` não permite "assinar" apenas uma parte específica do valor — TODO componente que chama `useContext(CountContext)` re-renderiza sempre que o `value` passado ao `Provider` mudar de referência, mesmo que esse componente nunca leia o campo que de fato mudou. Como `{ count }` é recriado a cada render de `App`, o `value` muda de referência toda vez, forçando até `DisplayB` (que nem usa o valor) a re-renderizar.',
    tags: ['Context', 'useContext', 're-render', 'output-prediction'],
  },
  {
    id: 'react-pred-038',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O usuário clica no botão. O nome exibido na tela atualiza para "Bia"?

\`\`\`jsx
function App() {
  const [user, setUser] = useState({ name: 'Ana' });
  function rename() {
    user.name = 'Bia'; // mutação direta
    setUser(user); // mesma referência
  }
  return <button onClick={rename}>{user.name}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, mostra "Bia"', isCorrect: false },
      { id: 'b', text: 'Não, continua mostrando "Ana"', isCorrect: true },
      { id: 'c', text: 'Lança TypeError: objeto imutável', isCorrect: false },
      { id: 'd', text: 'Mostra "Bia" só depois do segundo clique', isCorrect: false },
    ],
    hints: ['O objeto `user` foi mutado DIRETAMENTE (`user.name = \'Bia\'`), e depois a MESMA referência foi passada para `setUser`', 'React compara a referência recebida com a anterior via `Object.is` — como é o MESMO objeto, ele decide que "nada mudou" e ignora a atualização'],
    explanation: 'Embora `user.name = \'Bia\'` realmente mude o conteúdo do objeto em memória, `setUser(user)` está passando a referência EXATA do objeto que já estava armazenado como estado. React compara a nova referência com a antiga via `Object.is`, vê que são o MESMO objeto, e decide pular o re-render — mesmo que o conteúdo interno tenha sido alterado por fora das regras de imutabilidade. Por isso a tela continua mostrando "Ana", mesmo que `user.name` já seja `\'Bia\'` internamente.',
    tags: ['useState', 'mutacao-direta', 'imutabilidade', 'output-prediction'],
  },
  {
    id: 'react-pred-039',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O usuário clica no botão. O número exibido na tela muda de "2" para "3"?

\`\`\`jsx
function App() {
  const [items, setItems] = useState([1, 2]);
  function add() {
    items.push(3);
    setItems(items);
  }
  return <button onClick={add}>{items.length}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, vira "3"', isCorrect: false },
      { id: 'b', text: 'Não, continua mostrando "2"', isCorrect: true },
      { id: 'c', text: 'Lança um erro: arrays de estado são readonly e `.push` falha', isCorrect: false },
      { id: 'd', text: 'Vira "3" só depois de clicar duas vezes', isCorrect: false },
    ],
    hints: ['`.push()` muta o array original NO LUGAR e retorna o tamanho novo (não um array novo)', 'Passar a mesma referência de array de volta para `setItems` faz React pular o re-render, exatamente como aconteceria com um objeto mutado'],
    explanation: 'O mesmo padrão de bug da questão anterior, agora com um array: `.push(3)` modifica o array `items` diretamente, no lugar, sem criar uma nova referência. Quando `setItems(items)` é chamado passando essa MESMA referência, React não detecta nenhuma mudança (`Object.is` considera-as iguais) e pula a re-renderização — mesmo que o array já tenha `3` elementos internamente. A correção seria `setItems([...items, 3])`, criando um array novo.',
    tags: ['useState', 'array-mutation', 'imutabilidade', 'output-prediction'],
  },
  {
    id: 'react-pred-040',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Depois de UM clique, qual é o valor final de \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '5', isCorrect: false },
      { id: 'b', text: '1', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: '4', isCorrect: false },
    ],
    hints: ['Todas as 5 chamadas dentro do laço leem a MESMA variável `count`, capturada pela closure deste render', 'Não importa quantas vezes você chame `setCount(count + 1)` no mesmo handler — todas calculam exatamente o mesmo resultado'],
    explanation: 'Cada uma das 5 chamadas de `setCount(count + 1)` dentro do laço lê a mesma variável `count` (capturada pela closure do render atual, digamos `0`), então todas calculam exatamente `0 + 1 = 1` e agendam essa mesma atualização repetidamente. O resultado final é `1`, não `5` — rodar o `for` mais vezes não ajuda quando não se usa a forma funcional do setter.',
    tags: ['useState', 'stale-closure', 'loop', 'output-prediction'],
  },
  {
    id: 'react-pred-041',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção do bug anterior. Depois de UM clique, qual é o valor final de \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    for (let i = 0; i < 5; i++) {
      setCount(c => c + 1);
    }
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '5', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Indefinido, depende do navegador', isCorrect: false },
    ],
    hints: ['Cada chamada funcional recebe o resultado PENDENTE da chamada anterior, formando uma cadeia de atualizações'],
    explanation: 'Usando a forma funcional (`c => c + 1`), cada uma das 5 chamadas dentro do laço recebe o valor mais atualizado disponível na fila de atualizações — formando uma cadeia: a primeira recebe `0` e produz `1`; a segunda recebe esse `1` pendente e produz `2`; e assim por diante, até a quinta produzir `5`. React aplica essa cadeia inteira de uma vez, resultando em `count = 5`.',
    tags: ['useState', 'functional-update', 'loop', 'output-prediction'],
  },
  {
    id: 'react-pred-042',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `O que é renderizado para cada \`<Greeting>\`?

\`\`\`jsx
function Greeting({ name = 'Guest' }) {
  return <p>Hello, {name}</p>;
}
function App() {
  return (
    <>
      <Greeting name={undefined} />
      <Greeting name={null} />
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: '"Hello, Guest" nas duas', isCorrect: false },
      { id: 'b', text: '"Hello, Guest" na primeira; "Hello, " (sem nada visível depois) na segunda', isCorrect: true },
      { id: 'c', text: '"Hello, undefined" na primeira; "Hello, null" na segunda', isCorrect: false },
      { id: 'd', text: 'Lança TypeError na segunda, pois `null` não tem valor padrão', isCorrect: false },
    ],
    hints: ['Valores padrão de destructuring em props funcionam exatamente como em qualquer parâmetro de função: só entram em ação para `undefined`', '`null` é um valor "válido" que não aciona o padrão — e React simplesmente não renderiza `null` na JSX'],
    explanation: 'Essa é a mesma regra de destructuring do JavaScript puro, aplicada a props: o valor padrão (`= \'Guest\'`) só é usado quando a prop é exatamente `undefined`. No primeiro `<Greeting>`, `name` é `undefined`, então o padrão entra em ação: "Hello, Guest". No segundo, `name` é `null` — um valor explícito que NÃO aciona o padrão — então `name` permanece `null`, e como o React simplesmente não renderiza `null`/`undefined`/`false`/`true` na árvore, aparece apenas "Hello, " sem nada visível depois.',
    tags: ['default-props', 'destructuring', 'null-vs-undefined', 'output-prediction'],
  },
  {
    id: 'react-pred-043',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O que acontece quando este componente é montado?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // chamado diretamente no corpo do render
  return <p>{count}</p>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Renderiza normalmente, mostrando "1"', isCorrect: false },
      { id: 'b', text: 'React detecta um loop e lança um erro ("Too many re-renders")', isCorrect: true },
      { id: 'c', text: 'O `setCount` é ignorado silenciosamente durante o render', isCorrect: false },
      { id: 'd', text: 'Renderiza apenas uma vez, mostrando "0"', isCorrect: false },
    ],
    hints: ['Chamar um setter de estado diretamente no corpo do componente (fora de um handler ou efeito), sem nenhuma condição de parada, dispara IMEDIATAMENTE outro render', 'Como não há nenhuma condição para parar (o `setCount` roda incondicionalmente em todo render), isso se repete infinitamente'],
    explanation: 'Chamar `setCount` diretamente no corpo do componente, durante a renderização, dispara outra renderização imediatamente — que executa o corpo de novo, que chama `setCount` de novo, e assim por diante, sem nenhuma condição que pare o ciclo. React detecta esse padrão (atualizações de estado disparadas repetidamente durante a própria renderização) e lança um erro de proteção, algo como "Too many re-renders. React limits the number of renders to prevent an infinite loop", em vez de deixar o navegador travar de verdade.',
    tags: ['useState', 'setState-durante-render', 'loop-infinito', 'output-prediction'],
  },
  {
    id: 'react-pred-044',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O usuário clica no botão várias vezes. Quantas vezes 'effect ran' é impresso no total (incluindo o mount)?

\`\`\`jsx
function Child({ setCount }) {
  useEffect(() => {
    console.log('effect ran');
  }, [setCount]);
  return null;
}
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child setCount={setCount} />
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Uma vez para cada clique, mais o mount', isCorrect: false },
      { id: 'b', text: 'Apenas 1 vez (só no mount)', isCorrect: true },
      { id: 'c', text: 'Nunca — `setCount` não é uma dependência válida', isCorrect: false },
      { id: 'd', text: 'Depende de quantos componentes consomem `setCount`', isCorrect: false },
    ],
    hints: ['React GARANTE que a função setter retornada por `useState` é estável — a MESMA referência em todos os renders do componente', 'Diferente de uma função comum declarada dentro do componente, `setCount` nunca é "recriada"'],
    explanation: 'Diferente de funções comuns declaradas dentro do corpo do componente (que são recriadas a cada render, com novas referências), o setter retornado por `useState` (aqui, `setCount`) é garantido pelo React como estável — é sempre a MESMA referência de função, em todos os renders, durante toda a vida do componente. Como `setCount` nunca "muda" como dependência, o efeito em `Child` roda apenas uma vez, no mount, e nunca mais, independente de quantos cliques aconteçam.',
    tags: ['useState', 'setter-estavel', 'useEffect', 'output-prediction'],
  },
  {
    id: 'react-pred-045',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Este componente tem um \`return\` condicional ANTES do JSX final. Ele viola as Regras dos Hooks?

\`\`\`jsx
function Profile({ user }) {
  const [expanded, setExpanded] = useState(false);
  if (!user) {
    return <p>Loading...</p>;
  }
  return <button onClick={() => setExpanded(!expanded)}>{user.name}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Sim, qualquer `if` antes de um `return` quebra as regras dos hooks', isCorrect: false },
      { id: 'b', text: 'Não, pois o hook `useState` é chamado incondicionalmente, antes de qualquer `if`', isCorrect: true },
      { id: 'c', text: 'Sim, mas só causa erro em produção, não em desenvolvimento', isCorrect: false },
      { id: 'd', text: 'Não, mas apenas porque há somente um hook neste componente', isCorrect: false },
    ],
    hints: ['As Regras dos Hooks proíbem que os HOOKS EM SI sejam chamados condicionalmente ou dentro de laços — não proíbem `return`s condicionais', 'Aqui, `useState` sempre executa, em toda chamada da função, antes de qualquer `if`'],
    explanation: 'Este código é perfeitamente válido. As Regras dos Hooks exigem que hooks sejam chamados sempre na mesma ordem, incondicionalmente, em todo render — mas isso não impede que o JSX retornado (ou seja, o `return`) seja condicional. Aqui, `useState(false)` sempre executa antes de qualquer verificação condicional, então a ordem dos hooks nunca varia entre renders, independente do valor de `user`.',
    tags: ['rules-of-hooks', 'useState', 'conditional-return', 'output-prediction'],
  },
  {
    id: 'react-pred-046',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `O contador é incrementado algumas vezes (count > 0). Depois disso, o usuário clica em "Reset" (que muda \`key\`). O que acontece com o \`Counter\`?

\`\`\`jsx
function Counter({ resetKey }) {
  const [count, setCount] = useState(0);
  useEffect(() => console.log('mounted with count reset to', count), []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
function App() {
  const [key, setKey] = useState(0);
  return (
    <>
      <Counter key={key} />
      <button onClick={() => setKey(k => k + 1)}>Reset</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nada acontece com `Counter`, pois `key` não é uma prop usada internamente', isCorrect: false },
      { id: 'b', text: '`Counter` é desmontado e remontado do zero: `count` volta a 0, e o log do mount aparece de novo', isCorrect: true },
      { id: 'c', text: 'Apenas o texto do botão é resetado, mas o efeito não roda de novo', isCorrect: false },
      { id: 'd', text: 'Lança um erro: `key` não pode mudar depois do mount', isCorrect: false },
    ],
    hints: ['Quando o valor de `key` de um elemento muda, React trata isso como um componente LOGICAMENTE DIFERENTE, não uma atualização do mesmo', 'Um "componente diferente" significa que o antigo é desmontado (perdendo todo seu estado) e um novo é montado do zero'],
    explanation: 'Mudar o valor da prop especial `key` sinaliza ao React que aquele elemento agora representa uma instância LOGICAMENTE DIFERENTE, mesmo sendo o mesmo tipo de componente. Em vez de simplesmente atualizar a instância existente, React desmonta completamente a antiga (descartando todo o estado interno, como `count`) e monta uma instância completamente nova do zero. Por isso `count` volta a `0` e o `console.log` do mount roda de novo — esse é, na verdade, um padrão intencional muito usado para "resetar" o estado de um componente.',
    tags: ['key-prop', 'remount', 'useState', 'output-prediction'],
  },
  {
    id: 'react-pred-047',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    text: `O usuário clica no botão (que aciona tanto \`handleChildClick\` diretamente quanto \`handleParentClick\`, via bubbling do evento DOM). Em React 18+, quantas vezes 'render' é impresso, e qual o valor final de \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  console.log('render');

  function handleParentClick() {
    setCount(c => c + 1);
  }
  function handleChildClick() {
    setCount(c => c + 1);
  }

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Click</button>
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "'render' 2 vezes, count aumenta em 2", isCorrect: false },
      { id: 'b', text: "'render' 1 vez, count aumenta em 2", isCorrect: true },
      { id: 'c', text: "'render' 1 vez, count aumenta em 1 (apenas o handler do botão dispara)", isCorrect: false },
      { id: 'd', text: "'render' 2 vezes, count aumenta em 1", isCorrect: false },
    ],
    hints: ['Um clique no `<button>` faz o evento "borbulhar" (bubble) pelo DOM, disparando também o `onClick` do `<div>` pai, ambos como parte do MESMO evento nativo do navegador', 'O automatic batching do React 18 agrupa TODAS as atualizações de estado disparadas durante o processamento do mesmo evento nativo, mesmo passando por múltiplos handlers via bubbling'],
    explanation: 'Clicar no botão dispara `handleChildClick` diretamente, e o evento continua "borbulhando" pelo DOM até o `<div>` pai, disparando também `handleParentClick` — ambos fazem parte do mesmo evento de clique nativo do navegador. O automatic batching do React 18 agrupa todas as atualizações de estado que ocorrem durante o processamento desse único evento, não importa quantos handlers diferentes sejam executados por bubbling. Por isso `render` aparece apenas mais 1 vez (não 2), e como ambos os handlers usam a forma funcional do setter, `count` aumenta corretamente em 2.',
    tags: ['automatic-batching', 'react-18', 'event-bubbling', 'output-prediction'],
  },
  {
    id: 'react-pred-048',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: `O que é renderizado na tela?

\`\`\`jsx
function Labels() {
  return (
    <div>
      {false}{null}{undefined}{true}{0}{NaN}{'text'}
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nada aparece: todos esses valores são ignorados pelo React', isCorrect: false },
      { id: 'b', text: '"0NaNtext"', isCorrect: true },
      { id: 'c', text: '"falsenullundefinedtrue0NaNtext"', isCorrect: false },
      { id: 'd', text: 'Lança um erro: `NaN` não pode ser renderizado', isCorrect: false },
    ],
    hints: ['React tem uma lista curta e específica de valores que renderiza como "nada": `false`, `null`, `undefined` e `true`', 'Números (incluindo `0` e `NaN`) e strings SÃO renderizados normalmente, sem nenhum tratamento especial'],
    explanation: 'React silenciosamente não renderiza nada para exatamente quatro valores: `false`, `null`, `undefined` e `true` — uma lista curta e específica, não "qualquer valor falsy". Números (incluindo `0` e `NaN`, que também são "falsy" em JavaScript) e strings são renderizados normalmente como texto. Por isso o resultado final concatenado, sem separadores, é `"0NaNtext"`.',
    tags: ['jsx', 'falsy-values', 'renderização-condicional', 'output-prediction'],
  },
  {
    id: 'react-pred-049',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    text: `\`showExtra\` muda de \`true\` para \`false\` entre dois renders. O que acontece?

\`\`\`jsx
function App({ showExtra }) {
  const [a, setA] = useState('a');
  if (showExtra) {
    const [b, setB] = useState('b');
  }
  const [c, setC] = useState('c');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Funciona normalmente; React ajusta os hooks dinamicamente', isCorrect: false },
      { id: 'b', text: 'React lança um erro, algo como "Rendered fewer hooks than expected"', isCorrect: true },
      { id: 'c', text: 'O hook `c` simplesmente recebe `undefined` nesse render', isCorrect: false },
      { id: 'd', text: 'Nenhum erro, mas `a` e `c` trocam de valor entre si', isCorrect: false },
    ],
    hints: ['React rastreia o estado de cada hook pela ORDEM em que são chamados durante o render, não pelo nome da variável', 'Pular a chamada de um hook entre um render e outro desalinha a posição de TODOS os hooks declarados depois dele'],
    explanation: 'O React identifica cada hook por sua POSIÇÃO na sequência de chamadas durante o render (como uma lista ligada interna), não pelo nome da variável no código. Quando `showExtra` é `true`, a ordem de chamadas é `[a, b, c]`; quando vira `false`, o hook `b` é pulado e a ordem passa a ser `[a, c]` — fazendo o terceiro hook declarado (`c`) ocupar a POSIÇÃO que antes pertencia a `b`. React detecta essa inconsistência entre renders e lança um erro de proteção, exatamente o motivo pelo qual as Regras dos Hooks proíbem chamá-los condicionalmente.',
    tags: ['rules-of-hooks', 'useState', 'conditional-hooks', 'output-prediction'],
  },
  {
    id: 'react-pred-050',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: `Esta é a correção definitiva do bug da primeira questão deste bloco (closure obsoleta no \`setInterval\`). O contador exibido na tela é incrementado corretamente a cada segundo?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <p>{count}</p>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Não, fica travado em 0, como na primeira versão', isCorrect: false },
      { id: 'b', text: 'Sim, incrementa corretamente a cada segundo', isCorrect: true },
      { id: 'c', text: 'Não, pois o efeito com `[]` só roda uma vez', isCorrect: false },
      { id: 'd', text: 'Apenas se `count` for adicionado às dependências', isCorrect: false },
    ],
    hints: ['Mesmo que o `setInterval` (e sua closure) seja criado apenas uma vez, a forma FUNCIONAL do setter sempre recebe o estado mais recente do React quando é executada', 'Isso evita completamente o problema de closure obsoleta, sem precisar de `useRef` nem recriar o efeito a cada mudança de `count`'],
    explanation: 'Essa é a correção mais idiomática do bug visto na primeira questão deste bloco. Mesmo que o `useEffect` rode apenas uma vez (`[]`) e a função do `setInterval` seja criada uma única vez, a forma funcional do setter (`prev => prev + 1`) não depende da closure capturar o valor certo — ela recebe diretamente, do próprio React, o valor de estado mais atualizado no momento em que é executada. Por isso o contador incrementa corretamente a cada segundo, sem precisar de `useRef` ou de recriar o `setInterval` a cada mudança de estado.',
    tags: ['useEffect', 'functional-update', 'setInterval', 'stale-closure-fix', 'output-prediction'],
  },
]
