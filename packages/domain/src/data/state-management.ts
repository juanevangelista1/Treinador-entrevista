import type { Question } from '../session/types'

export const stateManagementQuestions: Question[] = [
  // ── REDUX FUNDAMENTALS ──────────────────────────────────────────────────────
  {
    id: 'sm-001',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique os três princípios fundamentais do Redux.',
    hints: ['Única fonte de verdade', 'Estado é read-only', 'Mudanças via funções puras'],
    explanation: '(1) Single source of truth: todo o estado da aplicação em um único store. (2) State is read-only: a única forma de mudar o estado é dispatch de uma action — previne mutações acidentais. (3) Changes via pure functions: reducers são funções puras `(state, action) => newState` sem side effects — previsíveis e testáveis.',
    tags: ['redux', 'principios', 'fundamentos', 'state-management'],
  },
  {
    id: 'sm-002',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Flux? Como o Redux se relaciona com o padrão Flux?',
    hints: ['Fluxo unidirecional de dados', 'Facebook criou Flux, Dan Abramov criou Redux'],
    explanation: 'Flux é um padrão arquitetural do Facebook para fluxo unidirecional de dados: Action → Dispatcher → Store → View → Action. Redux é inspirado em Flux mas simplifica: elimina o Dispatcher (cada action vai direto ao reducer), tem um único Store (Flux pode ter múltiplos), e usa funções puras (reducers). Redux também se inspirou em Elm (linguagem funcional).',
    tags: ['flux', 'redux', 'padroes', 'arquitetura'],
  },
  {
    id: 'sm-003',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Actions, Reducers e o Store no Redux? Como eles interagem?',
    hints: ['Action descreve o que aconteceu', 'Reducer define como o estado muda', 'Store guarda o estado'],
    explanation: 'Action: objeto JavaScript com `type` e dados opcionais (`payload`) que descreve um evento. Reducer: função pura `(currentState, action) => newState` que define como o estado muda em resposta a cada action. Store: objeto central criado com `createStore(reducer)` que guarda o estado, permite `dispatch(action)`, `getState()` e `subscribe()`. Fluxo: `dispatch(action)` → reducer calcula novo estado → store notifica subscribers.',
    tags: ['redux', 'actions', 'reducers', 'store', 'fluxo'],
  },
  {
    id: 'sm-004',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é imutabilidade no Redux e por que é obrigatória? Como você garante imutabilidade?',
    hints: ['Reducers nunca mutam o estado', 'Spread operator, Object.assign, Immer'],
    explanation: 'Imutabilidade: reducers nunca modificam o estado atual — sempre retornam um NOVO objeto. Por que: Redux usa comparação por referência para detectar mudanças; mutar o estado direto faz a referência ser a mesma, e Redux pensa que nada mudou. Como: spread `{...state, key: newValue}`, `[...array, newItem]`, `array.filter()`, `Object.assign({}, state)`. Immer (usado pelo RTK) permite escrita mutativa que gera objetos imutáveis.',
    tags: ['redux', 'imutabilidade', 'immer', 'spread', 'boas-praticas'],
  },
  {
    id: 'sm-005',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é middleware no Redux? Explique `redux-thunk` e para que serve.',
    hints: ['Intercepta dispatches de actions', 'Permite side effects assíncronos'],
    explanation: 'Middleware é uma função que intercepta ações antes de chegarem ao reducer — permite logging, crash reporting, async operations. `redux-thunk`: permite fazer dispatch de funções (thunks) em vez de objetos — a função recebe `dispatch` e `getState`. Útil para operações assíncronas: dentro do thunk, você `dispatch` actions de loading, success e error. Com RTK, `createAsyncThunk` gera esses cases automaticamente.',
    tags: ['redux', 'middleware', 'thunk', 'async', 'side-effects'],
  },
  {
    id: 'sm-006',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Redux Toolkit (RTK)? Quais problemas do Redux clássico ele resolve?',
    hints: ['Menos boilerplate', 'createSlice, createAsyncThunk', 'Immer built-in'],
    explanation: 'RTK é a forma oficial e recomendada de escrever Redux. Problemas que resolve: (1) Muito boilerplate — `createSlice` gera actions e reducers; (2) Imutabilidade manual — usa Immer (escrita mutativa); (3) Configuração complexa — `configureStore` configura devtools e thunk automaticamente; (4) Async verboso — `createAsyncThunk` lida com pending/fulfilled/rejected; (5) Seletores sem memoização — integra com reselect.',
    tags: ['rtk', 'redux-toolkit', 'boilerplate', 'createSlice', 'modernizacao'],
  },
  {
    id: 'sm-007',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique `createSlice` do Redux Toolkit. O que ele gera automaticamente?',
    hints: ['Nome, estado inicial, reducers', 'Gera action creators automaticamente'],
    explanation: '`createSlice({ name, initialState, reducers: { ... } })` gera automaticamente: (1) Action creators com o mesmo nome dos reducers (ex: `setUser`, `logout`); (2) Action types como strings `"auth/setUser"`; (3) O reducer combinado do slice. Usa Immer internamente — você pode escrever `state.count++` sem problemas. Exporta `slice.actions` (action creators) e `slice.reducer` para usar no store.',
    tags: ['createSlice', 'rtk', 'action-creators', 'reducers', 'immer'],
  },
  {
    id: 'sm-008',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `createAsyncThunk`? Como ele lida com os estados de uma operação assíncrona?',
    hints: ['pending, fulfilled, rejected', 'Gera action creators para cada estado'],
    explanation: '`createAsyncThunk("user/fetch", async (userId) => { return await api.getUser(userId) })` gera três action types: `user/fetch/pending`, `user/fetch/fulfilled`, `user/fetch/rejected`. No createSlice, use `extraReducers` para lidar com cada caso. Vantagens: cancellation com `AbortController`, condição de skip, e callback `thunkAPI` com `dispatch`, `getState`, `rejectWithValue`.',
    tags: ['createAsyncThunk', 'rtk', 'async', 'pending-fulfilled-rejected'],
  },
  {
    id: 'sm-009',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são selectors no Redux? Por que usar `createSelector` do Reselect?',
    hints: ['Calcular dados derivados do state', 'Memoização para evitar cálculos repetidos'],
    explanation: 'Selectors são funções que extraem e calculam dados do store: `const users = (state) => state.users.list`. `createSelector(inputSelectors, resultFunc)` do Reselect cria selectors memoizados — o `resultFunc` só é chamado quando os inputs mudam (comparação por referência). Sem memoização, cálculos derivados (ex: filtrar e ordenar uma lista) são refeitos a cada render. RTK inclui Reselect.',
    tags: ['selectors', 'reselect', 'createSelector', 'memoizacao', 'redux'],
  },
  {
    id: 'sm-010',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é `redux-saga`? Como difere de `redux-thunk`? Quando usaria cada um?',
    hints: ['Generators em sagas', 'Thunks são mais simples; sagas são mais poderosas'],
    explanation: 'Redux-saga usa generators para gerenciar side effects. Vantagens sobre thunk: (1) Efeitos declarativos testáveis sem mocks reais; (2) Takelatest/takeEvery para controle de concorrência; (3) Canais para streams de eventos; (4) Mais fácil de cancelar. Desvantagens: curva de aprendizado alta (generators), mais verboso. Use thunk para casos simples; saga para fluxos complexos (ex: wizard com múltiplos steps, polling, websockets).',
    tags: ['redux-saga', 'redux-thunk', 'generators', 'side-effects', 'concorrencia'],
  },
  {
    id: 'sm-011',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é normalização de estado no Redux? Por que é importante?',
    hints: ['Evitar dados duplicados', 'Estrutura similar a banco de dados relacional'],
    explanation: 'Normalização: armazenar dados sem duplicação, referenciando por ID. Em vez de `posts: [{id:1, author:{id:10, name:"Ana"}}]`, use: `posts: {1: {id:1, authorId:10}}` e `users: {10: {id:10, name:"Ana"}}`. Benefícios: (1) Evita inconsistências quando o mesmo dado aparece em vários lugares; (2) Atualizações em O(1) por ID; (3) Fácil de buscar por ID sem `find`. `@reduxjs/toolkit` inclui `createEntityAdapter` para isso.',
    tags: ['normalizacao', 'redux', 'createEntityAdapter', 'dados', 'performance'],
  },
  {
    id: 'sm-012',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são `mapStateToProps` e `mapDispatchToProps` na API `connect()` do React-Redux?',
    hints: ['Conecta o componente ao store', 'Injeta state e dispatch como props'],
    explanation: '`connect(mapStateToProps, mapDispatchToProps)(Component)` é a API legacy do React-Redux. `mapStateToProps(state, ownProps) => {}`: define quais dados do store virar props do componente. `mapDispatchToProps`: objeto de action creators ou função `(dispatch) => {}` que mapeia funções de dispatch como props. Hoje, prefira os hooks `useSelector` e `useDispatch` — mais simples e sem HOC wrapper.',
    tags: ['react-redux', 'connect', 'mapStateToProps', 'mapDispatchToProps', 'legacy'],
  },
  {
    id: 'sm-013',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique `useSelector` e `useDispatch`. Como eles substituem `connect()`?',
    hints: ['Hooks do React-Redux', 'Mais simples que connect'],
    explanation: '`useSelector(selector)`: lê dados do store; re-renderiza o componente quando o dado selecionado muda (comparação por referência). `useDispatch()`: retorna a função dispatch do store para disparar actions. Ambos eliminam o boilerplate de `connect()` e HOC wrappers. Cuidado com `useSelector`: seletores que retornam objetos novos a cada chamada causam re-renders frequentes — use `createSelector` para memoizar.',
    tags: ['useSelector', 'useDispatch', 'react-redux', 'hooks', 'modernizacao'],
  },
  {
    id: 'sm-014',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Quais são as desvantagens do Redux e quando você não deveria usá-lo?',
    hints: ['Boilerplate', 'Overhead para apps simples'],
    explanation: 'Desvantagens: (1) Muito boilerplate para simples sharing de estado; (2) Curva de aprendizado (reducers, actions, selectors, thunks); (3) Overhead de bundle; (4) Pode levar a over-engineering. Não use quando: app tem pouco estado compartilhado (useState/Context suficiente); estado é principalmente do servidor (use React Query); pequenos projetos sem time grande. Use quando: muitas interações entre features, debugging importante (time-travel), estado complexo com muitas mutations.',
    tags: ['redux', 'desvantagens', 'quando-usar', 'over-engineering'],
  },
  {
    id: 'sm-015',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é RTK Query? Como ele difere de React Query?',
    hints: ['Integrado no Redux Toolkit', 'Cache gerenciado no Redux store'],
    explanation: 'RTK Query é uma solução de data fetching e caching integrada ao RTK. Diferenças do React Query: (1) RTK Query armazena cache no Redux store — visível no DevTools; (2) RTK Query é mais integrado ao ecossistema Redux — gera actions e reducers automaticamente; (3) React Query é agnóstico de framework (funciona sem Redux); (4) React Query tem mais features (infinite queries, prefetching). Escolha RTK Query se já usa Redux; React Query para projetos sem Redux.',
    tags: ['rtk-query', 'react-query', 'cache', 'fetching', 'comparacao'],
  },
  // ── CONTEXT API ──────────────────────────────────────────────────────────────
  {
    id: 'sm-016',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como otimizar um Context que está causando re-renders excessivos?',
    hints: ['Dividir em múltiplos Contexts', 'Memoizar o valor do Provider', 'useMemo'],
    explanation: 'Estratégias: (1) Dividir em múltiplos Contexts por frequência de atualização — ex: separar `UserContext` (muda raramente) de `ThemeContext` (pode mudar frequentemente); (2) Memoizar o valor: `const value = useMemo(() => ({ user, setUser }), [user])` — sem `useMemo`, novo objeto a cada render do Provider; (3) Separar dados de ações: Context de dados vs Context de dispatch — quem só dispara ações não re-renderiza com mudanças de dados.',
    tags: ['context', 're-render', 'otimizacao', 'useMemo', 'performance'],
  },
  {
    id: 'sm-017',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria um Context de autenticação completo com login, logout e persistência?',
    hints: ['createContext + Provider', 'useEffect para checar token ao montar', 'Axios interceptors'],
    explanation: 'Estrutura: (1) `AuthContext` com `{user, login, logout, isLoading}`; (2) Provider verifica token no mount (`useEffect(() => checkAuth(), [])`); (3) `login(credentials)`: chama API, salva token (httpOnly cookie preferivelmente), atualiza state; (4) `logout()`: limpa token, reseta state, redireciona; (5) Axios interceptor adiciona token automaticamente; (6) `PrivateRoute` verifica `user` e redireciona. Use `useReducer` para lógica de auth complexa.',
    tags: ['context', 'autenticacao', 'provider', 'token', 'implementacao'],
  },
  // ── ZUSTAND ──────────────────────────────────────────────────────────────────
  {
    id: 'sm-018',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Zustand? Quais são suas vantagens em relação ao Redux?',
    hints: ['Minimalista', 'Sem boilerplate', 'Subscriptions granulares'],
    explanation: 'Zustand é uma biblioteca de estado global minimalista. Vantagens sobre Redux: (1) Sem boilerplate — store em ~5 linhas; (2) Subscriptions granulares — componente só re-renderiza quando o slice que usa muda; (3) Sem providers necessários; (4) Funciona fora de componentes React; (5) Bundle pequeno (~1KB). Desvantagem: sem devtools tão poderoso quanto Redux (mas tem suporte básico), estrutura menos opinionada.',
    tags: ['zustand', 'redux', 'comparacao', 'estado-global', 'minimalista'],
  },
  {
    id: 'sm-019',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Mostre como criar e usar um store básico com Zustand.',
    hints: ['create(set => ({}))', 'Hook direto, sem Provider'],
    explanation: '```js\nimport { create } from "zustand";\nconst useCountStore = create((set) => ({\n  count: 0,\n  increment: () => set(state => ({ count: state.count + 1 })),\n  reset: () => set({ count: 0 }),\n}));\n// No componente:\nconst { count, increment } = useCountStore();\n// Seletor granular (só re-renderiza quando count muda):\nconst count = useCountStore(state => state.count);\n``` Sem Provider, sem actions separadas, sem reducers — tudo inline.',
    tags: ['zustand', 'create', 'store', 'exemplo', 'implementacao'],
  },
  {
    id: 'sm-020',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como adicionar persistência no Zustand (middleware persist)?',
    hints: ['persist middleware', 'localStorage ou sessionStorage', 'hydration'],
    explanation: '```js\nimport { create } from "zustand";\nimport { persist } from "zustand/middleware";\nconst useStore = create(persist(\n  (set) => ({ theme: "dark", setTheme: (t) => set({ theme: t }) }),\n  { name: "app-storage", storage: createJSONStorage(() => localStorage) }\n));\n``` O middleware `persist` serializa o state para storage (localStorage por padrão) e rehidrata ao montar. Configure `partialize` para persistir apenas parte do estado. Cuidado com hidratação no SSR — use `skipHydration`.',
    tags: ['zustand', 'persist', 'localStorage', 'middleware', 'hidratacao'],
  },
  {
    id: 'sm-021',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você estruturaria um store Zustand grande? Qual é o padrão "slices"?',
    hints: ['Múltiplos slices combinados em um store', 'Similar ao combineReducers do Redux'],
    explanation: 'Para stores grandes, divida em slices (partes): `createUserSlice = (set) => ({user: null, setUser: ...})`. Combine: `const useStore = create((...a) => ({ ...createUserSlice(...a), ...createCartSlice(...a) }))`. Cada slice é autossuficiente e pode ser testado independentemente. Alternativamente, crie múltiplos stores separados — Zustand suporta isso sem problema e é mais simples de manter.',
    tags: ['zustand', 'slices', 'organizacao', 'escalabilidade', 'padroes'],
  },
  // ── JOTAI / RECOIL ───────────────────────────────────────────────────────────
  {
    id: 'sm-022',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Jotai? Como o modelo atômico de estado difere de Zustand e Redux?',
    hints: ['Átomos são unidades granulares de estado', 'Sem store central'],
    explanation: 'Jotai usa átomos — unidades atômicas de estado. Cada átomo é independente: `const countAtom = atom(0)`. Componentes subscrevem a átomos específicos com `useAtom(countAtom)` e só re-renderizam quando ESSE átomo muda. Benefício sobre Zustand: granularidade máxima — sem seletores, a reatividade é automática. Deriva átomos com `atom(get => get(countAtom) * 2)`. Ideal para estado granular sem acoplamento entre partes da UI.',
    tags: ['jotai', 'atomos', 'granularidade', 'reatividade', 'comparacao'],
  },
  {
    id: 'sm-023',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é MobX? Como sua abordagem de programação reativa difere do Redux?',
    hints: ['Observables e computed values', 'Mutação direta do estado'],
    explanation: 'MobX usa programação reativa: state como observables, components como observers (re-renderizam automaticamente quando observables usados mudam). Permite mutação direta do estado (sem imutabilidade forçada). Diferenças do Redux: (1) MobX: menos boilerplate, mutação direta, "mágico" e automático; (2) Redux: mais explícito e previsível (estado imutável, ações explícitas). MobX é popular em times que preferem menos verbosidade; Redux em times que valorizam rastreabilidade.',
    tags: ['mobx', 'redux', 'observables', 'reatividade', 'comparacao'],
  },
  // ── REACT QUERY ──────────────────────────────────────────────────────────────
  {
    id: 'sm-024',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o ciclo de vida do cache no TanStack Query. O que são stale time, cache time e background refetch?',
    hints: ['staleTime: por quanto tempo os dados são "frescos"', 'gcTime: por quanto tempo ficam em cache após não serem usados'],
    explanation: 'staleTime (padrão 0ms): por quanto tempo os dados são "fresh" — zero significa que imediatamente após o fetch, os dados são "stale" (podem ser refetchados). gcTime (antigo cacheTime, padrão 5min): por quanto tempo dados não utilizados ficam em cache (garbage collected depois). Background refetch: quando dados stale são exibidos imediatamente (cache hit) enquanto um refetch acontece em background — UX responsiva com dados atualizados.',
    tags: ['react-query', 'staleTime', 'gcTime', 'cache', 'background-refetch'],
  },
  {
    id: 'sm-025',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementaria prefetching de dados com TanStack Query?',
    hints: ['queryClient.prefetchQuery()', 'Em hover ou em layout/route transition'],
    explanation: 'Prefetch: `queryClient.prefetchQuery({ queryKey: ["user", id], queryFn: fetchUser })` carrega dados antes do componente montar — idealmente no hover de um link ou na transição de rota. No Next.js App Router: em Server Components, use `queryClient.prefetchQuery` antes de renderizar Client Components. O hook `useQuery` encontrará os dados no cache e não fará refetch se dentro do staleTime.',
    tags: ['prefetch', 'react-query', 'performance', 'ux', 'cache'],
  },
  {
    id: 'sm-026',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você implementa paginação e infinite loading com TanStack Query?',
    hints: ['useQuery com pageParam', 'useInfiniteQuery para infinite scroll'],
    explanation: 'Paginação simples: `useQuery` com `queryKey: ["posts", page]` — o `page` no key garante diferentes entradas no cache. Infinite loading: `useInfiniteQuery({ queryKey, queryFn: ({pageParam}) => fetch(pageParam), getNextPageParam: (lastPage) => lastPage.nextCursor })`. Acumula `data.pages`. Trigger: Intersection Observer que chama `fetchNextPage()`. `hasNextPage` indica se há mais dados.',
    tags: ['paginacao', 'infinite-scroll', 'useInfiniteQuery', 'react-query'],
  },
  {
    id: 'sm-027',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria otimistic updates com TanStack Query?',
    hints: ['onMutate', 'cancelQueries', 'rollback em onError'],
    explanation: '```js\nuseMutation({\n  mutationFn: updateTodo,\n  onMutate: async (newTodo) => {\n    await queryClient.cancelQueries({ queryKey: ["todos"] });\n    const prev = queryClient.getQueryData(["todos"]);\n    queryClient.setQueryData(["todos"], old => [...old.filter(t => t.id !== newTodo.id), newTodo]);\n    return { prev };\n  },\n  onError: (err, _, context) => queryClient.setQueryData(["todos"], context.prev),\n  onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),\n})``` Cancela queries em voo, atualiza cache otimisticamente, reverte em erro.',
    tags: ['optimistic-update', 'react-query', 'onMutate', 'rollback', 'ux'],
  },
  // ── STATE PATTERNS ────────────────────────────────────────────────────────────
  {
    id: 'sm-028',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Qual é a diferença entre estado do servidor e estado do cliente? Por que essa distinção é importante?',
    hints: ['Estado do servidor: dados que vêm da API', 'Estado do cliente: UI state local'],
    explanation: 'Estado do servidor: dados originados no backend (users, posts, products) — têm lógica de caching, sincronização, stale detection. Estado do cliente: estado de UI local (modal aberto, aba ativa, filtros) — nunca precisa ir ao servidor. Distinção importante: misturar os dois em Redux leva a complexidade desnecessária (gerenciar manualmente loading/error/cache). Use React Query/SWR para estado do servidor; Zustand/Context para estado do cliente.',
    tags: ['estado-servidor', 'estado-cliente', 'react-query', 'separacao', 'arquitetura'],
  },
  {
    id: 'sm-029',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão Pub/Sub no contexto de gerenciamento de estado?',
    hints: ['Publisher emite eventos', 'Subscribers escutam e reagem'],
    explanation: 'Pub/Sub (Publisher/Subscriber): publishers emitem eventos sem conhecer os subscribers; subscribers escutam eventos sem conhecer o publisher — desacoplamento total. No contexto React: EventEmitter nativo, Redux (store notifica todos os subscribers), RxJS observables. Útil para comunicação entre partes desacopladas da app (ex: analytics, logging, features independentes que precisam saber sobre mudanças de outras). Context API é uma forma de Pub/Sub.',
    tags: ['pubsub', 'eventos', 'desacoplamento', 'padroes', 'arquitetura'],
  },
  {
    id: 'sm-030',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você lidaria com sincronização de estado entre múltiplas abas do browser?',
    hints: ['BroadcastChannel API', 'localStorage events', 'Service Worker'],
    explanation: 'Opções: (1) `localStorage` event + listener: quando aba A muda localStorage, aba B detecta via `window.on("storage")` — funciona cross-origin; (2) `BroadcastChannel API`: canal de comunicação direta entre abas do mesmo origin, mais simples e sem write ao storage; (3) Service Worker como intermediário — para casos mais complexos. Para auth: ao fazer logout, propague para outras abas via BroadcastChannel ou localStorage event.',
    tags: ['multi-tab', 'BroadcastChannel', 'localStorage', 'sincronizacao', 'browser'],
  },
  {
    id: 'sm-031',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é "state colocation" e como pode melhorar a performance da sua aplicação?',
    hints: ['Estado mais próximo de quem usa', 'Menos re-renders desnecessários'],
    explanation: 'State colocation: manter estado o mais próximo possível do componente que o usa. Se apenas `ComponentA` usa um state, ele deve estar EM `ComponentA` — não no componente raiz ou em estado global. Benefício: quando o state muda, apenas `ComponentA` e seus filhos re-renderizam. Estado global desnecessário re-renderiza toda a app. Regra: comece local, eleve (lift) apenas quando múltiplos componentes precisam compartilhar.',
    tags: ['state-colocation', 'performance', 're-render', 'boas-praticas'],
  },
  {
    id: 'sm-032',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria undo/redo em uma aplicação React?',
    hints: ['Stack de estados passados', 'useReducer com histórico', 'Redux com redux-undo'],
    explanation: 'Implementação com useReducer: mantenha histórico como `{past: State[], present: State, future: State[]}`. Undo: move `present` para `future[0]` e o último `past` vira `present`. Redo: move `present` para `past` e primeiro `future` vira `present`. Em Redux: biblioteca `redux-undo` envolve qualquer reducer. Para apps como editores, considere snapshots em vez de estado completo — mais eficiente.',
    tags: ['undo-redo', 'useReducer', 'historico', 'editor', 'padroes'],
  },
  {
    id: 'sm-033',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você gerenciaria o estado de filtros e pesquisa em uma URL em vez de no estado do React?',
    hints: ['useSearchParams', 'URL como fonte da verdade', 'Compartilhamento por link'],
    explanation: 'Armazenar filtros na URL via query strings permite: compartilhar o estado via link, funcionar com botão voltar do browser, persistência de estado sem localStorage. No React Router: `useSearchParams()` lê e escreve na URL. No Next.js: `useSearchParams()`, `useRouter().push({ query: {...} })`. Benefícios UX: usuário pode bookmarkar, compartilhar, navegar com histórico. Implicação: cada mudança de filtro é navegação — use `replace` para não poluir o histórico.',
    tags: ['url-state', 'filtros', 'useSearchParams', 'ux', 'navegacao'],
  },
  // ── REDUX DEVTOOLS ────────────────────────────────────────────────────────────
  {
    id: 'sm-034',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Redux DevTools e quais são suas principais funcionalidades?',
    hints: ['Time-travel debugging', 'Inspecionar actions e state'],
    explanation: 'Redux DevTools Extension para Chrome/Firefox oferece: (1) Action log — histórico de todas as actions disparadas; (2) State inspector — estado atual e diff entre actions; (3) Time-travel — voltar e avançar no histórico de estados; (4) Dispatch manual de actions; (5) Import/export de estado; (6) Hot reload de reducers. Configurado via `configureStore()` do RTK automaticamente em desenvolvimento.',
    tags: ['redux-devtools', 'time-travel', 'debugging', 'desenvolvimento'],
  },
  // ── WEBSOCKETS / REALTIME ─────────────────────────────────────────────────────
  {
    id: 'sm-035',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você integraria WebSocket com gerenciamento de estado React (Redux ou Zustand) para dados em tempo real?',
    hints: ['Middleware Redux para WebSocket', 'Custom hook para WebSocket + Zustand'],
    explanation: 'Redux: middleware personalizado que abre WebSocket no init e `dispatch`a actions para cada mensagem recebida. Zustand: hook `useWebSocket` que abre conexão no mount e chama `store.setState` em cada mensagem. Padrão: (1) Estado da conexão (connecting/connected/disconnected); (2) Reconexão automática com exponential backoff; (3) Limpeza no unmount; (4) Filtros para evitar atualizações de estado desnecessárias. Bibliotecas: `socket.io-client`, `@tanstack/query` com subscriptions.',
    tags: ['websocket', 'realtime', 'redux', 'zustand', 'middleware'],
  },
  // ── MISCELLANEOUS ─────────────────────────────────────────────────────────────
  {
    id: 'sm-036',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você decidiria entre `useState`, `useReducer`, Context, Zustand e Redux para um novo projeto?',
    hints: ['Complexidade do estado', 'Tamanho do time', 'Necessidade de devtools'],
    explanation: 'Flowchart de decisão: (1) Estado local de um componente → `useState`; (2) Lógica de transição complexa (múltiplos sub-values, state machine) → `useReducer`; (3) Dados compartilhados por poucos componentes próximos → Context + useReducer; (4) Estado global do cliente simples, sem devtools sofisticado → Zustand; (5) Estado do servidor (fetch, cache) → TanStack Query; (6) App grande com muitos devs, necessidade de time-travel, strict patterns → Redux Toolkit.',
    tags: ['decisao', 'useState', 'useReducer', 'context', 'zustand', 'redux'],
  },
  {
    id: 'sm-037',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é event sourcing e como ele se relaciona com o padrão de gerenciamento de estado em Redux?',
    hints: ['Estado é derivado de eventos', 'Redux: estado como resultado de todos os dispatches'],
    explanation: 'Event sourcing: o estado da aplicação é reconstruído a partir de uma sequência de eventos imutáveis armazenados. Redux espelha esse padrão: o state atual é o resultado de aplicar todos os reducers a todas as actions em ordem. Time-travel no Redux é possível exatamente porque você pode "replay" as actions para chegar a qualquer estado histórico. Diferença: Event sourcing formal persiste os eventos permanentemente; Redux só mantém em memória.',
    tags: ['event-sourcing', 'redux', 'time-travel', 'padroes', 'historico'],
  },
  {
    id: 'sm-038',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Por que não devemos despachar (dispatch) actions dentro de reducers?',
    hints: ['Reducers são funções puras', 'Dispatcher em reducer = efeito colateral'],
    explanation: 'Reducers são funções puras — sem side effects, apenas transformação de estado. Dispatch dentro de um reducer cria dependência no sistema de dispatch externo (side effect), pode causar loops de dispatch, e quebra a predictabilidade e testabilidade. Se você precisa de múltiplas actions em resposta a um evento, dispare-as em sequência no componente/thunk, ou use middleware (redux-saga) para coordenar.',
    tags: ['redux', 'reducers', 'funcoes-puras', 'dispatch', 'antipattern'],
  },
  {
    id: 'sm-039',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você trataria race conditions em chamadas de API com estado React?',
    hints: ['AbortController', 'Flag de cancelamento', 'TanStack Query trata automaticamente'],
    explanation: 'Problema: múltiplos fetches em voo simultaneamente — a resposta mais antiga pode chegar depois da mais recente. Soluções: (1) AbortController: cancele o fetch anterior no cleanup do useEffect; (2) Flag: `let cancelled = false; ... if (!cancelled) setState(data); return () => { cancelled = true }`; (3) TanStack Query: gerencia automaticamente — ignora respostas de queries obsoletas; (4) `useRef` com versão atual da query para descartar versões antigas.',
    tags: ['race-condition', 'async', 'AbortController', 'useEffect', 'fetch'],
  },
  {
    id: 'sm-040',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Como você implementaria uma estratégia de cache offline-first em uma aplicação React?',
    hints: ['Service Worker', 'IndexedDB', 'Sync quando online'],
    explanation: 'Estratégia offline-first: (1) Service Worker intercepta requests — serve do cache; (2) IndexedDB para dados estruturados locais (TanStack Query pode usar como storage adapter); (3) Background sync — operações feitas offline são sincronizadas quando a conexão volta; (4) Conflict resolution — quando dados locais e do servidor diferem; (5) `navigator.onLine` e evento `online`/`offline` para feedback de UX. Frameworks: Workbox (SW), Dexie.js (IndexedDB).',
    tags: ['offline-first', 'service-worker', 'indexeddb', 'sync', 'pwa'],
  },
  {
    id: 'sm-041',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `combineReducers` no Redux? Como você estruturaria reducers de uma aplicação grande?',
    hints: ['Divide o state em slices', 'Cada reducer cuida de sua fatia'],
    explanation: '`combineReducers({ users: usersReducer, posts: postsReducer })` cria um reducer raiz que delega cada key do state ao reducer correspondente. O state resultante: `{users: {...}, posts: {...}}`. Estrutura recomendada: organize por feature (user, auth, cart, products) — cada pasta com seu slice RTK. Evite reducers muito grandes — divida por domínio do negócio. Com RTK, `configureStore({reducer: rootReducer})` aceita o objeto combinado diretamente.',
    tags: ['combineReducers', 'redux', 'organizacao', 'features', 'escalabilidade'],
  },
  {
    id: 'sm-042',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como você compartilharia estado entre rotas em uma aplicação React (mantendo dados ao navegar)?',
    hints: ['Estado no layout pai', 'Estado global', 'React Router state', 'persistência'],
    explanation: 'Opções: (1) Estado em componente pai/layout — persiste enquanto o layout não desmonta; (2) Estado global (Zustand/Redux) — persiste além da navegação; (3) URL state (query params) — persiste via URL; (4) navigate com state passa dados transientes entre rotas (não persiste no reload); (5) sessionStorage — persiste na sessão mas não entre sessões. Escolha baseado em: lifetime necessário, se precisa ser compartilhável (URL) e a complexidade.',
    tags: ['roteamento', 'estado', 'navegacao', 'persist', 'react-router'],
  },
  {
    id: 'sm-043',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como gerenciar estado de formulários multi-step em React?',
    hints: ['useReducer para fluxo complexo', 'Estado centralizado', 'Persistência entre steps'],
    explanation: 'Padrão wizard com useReducer: (1) Define tipo Steps = "personal" | "address" | "payment"; (2) State = { step: Steps, data: Partial<FormData> }; (3) Ações NEXT, PREV, SET_DATA; (4) Cada step componente recebe os dados e dispatch como props; (5) Na ação NEXT, mescla dados do step atual com o state. Para persistir entre refreshes: salve no sessionStorage via useEffect. Para validação: useForm do React Hook Form em cada step com handleSubmit chamando dispatch.',
    tags: ['formulario', 'multi-step', 'useReducer', 'wizard', 'estado'],
  },
  {
    id: 'sm-044',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a técnica de "lifting state up" vs "colocating state"? Quando usar cada uma?',
    hints: ['Lift quando compartilhar', 'Colocat quando só um componente usa', 'Evite estado global desnecessário'],
    explanation: 'Lifting state up: mover state para o ancestral comum quando múltiplos componentes precisam do mesmo dado. Colocating state: manter state o mais perto possível de onde é usado (no componente que o consome). Regra: sempre comece colocando o state no componente que o usa. Só eleve quando um irmão precisa. Só coloque em estado global quando múltiplos componentes não relacionados precisam. Problema comum: estado global excessivo — tudo no Redux/Context quando deveria estar no componente local.',
    tags: ['lifting-state', 'colocation', 'estado-local', 'global', 'boas-praticas'],
  },
  {
    id: 'sm-045',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `useReducer`? Quando preferir sobre `useState`?',
    hints: ['Lógica complexa de transição', 'Múltiplas sub-values', 'State máquina'],
    explanation: 'useReducer(reducer, initialState) é preferível ao useState quando: (1) Lógica de transição complexa com múltiplos sub-valores relacionados; (2) O próximo state depende do anterior de forma não trivial; (3) State tem muitas formas diferentes de mudar; (4) Implementar state machine (autenticação, checkout). Vantagem: lógica de transição testável fora do componente como função pura: reducer(state, action) => newState.',
    tags: ['useReducer', 'useState', 'reducer', 'state-machine', 'logica'],
  },
  {
    id: 'sm-046',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como sincronizar estado do React com localStorage usando persist middleware do Zustand?',
    hints: ['persist middleware', 'Hydration mismatch', 'partialize para campos selecionados'],
    explanation: 'Com Zustand persist: wrapeie o store com persist(create(...), { name: "storage-key", storage: createJSONStorage(() => localStorage) }). Use partialize para selecionar apenas campos seguros para persistir: partialize: (state) => ({ theme: state.theme, language: state.language }). Cuidado com SSR: localStorage não existe no servidor — use skipHydration e chame rehydrate() no useEffect. Nunca persista dados sensíveis (tokens, informações pessoais) no localStorage.',
    tags: ['persist', 'zustand', 'localStorage', 'ssr', 'hidratacao'],
  },
  {
    id: 'sm-047',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Jotai? Como o modelo de átomos difere do Zustand?',
    hints: ['Atoms individuais vs store central', 'Bottom-up vs top-down', 'Granularidade'],
    explanation: 'Jotai usa átomos individuais como unidades mínimas de estado. const countAtom = atom(0). Componentes subscrevem apenas aos átomos que usam — granularidade máxima sem re-renders desnecessários. Átomos derivados: atom((get) => get(countAtom) * 2). Async atoms: atom(async (get) => await fetch(url)). Difere do Zustand: Zustand tem uma store com múltiplos campos (top-down), Jotai tem muitos átomos independentes (bottom-up). Mais próximo ao Recoil (Facebook) mas com API mais simples e menor bundle.',
    tags: ['jotai', 'atomos', 'granular', 'bottom-up', 'recoil'],
  },
  {
    id: 'sm-048',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de "stale state" em event handlers? Como evitar com functional updates?',
    hints: ['Closure captura state antigo', 'Functional update', 'useRef para valor atual'],
    explanation: 'Stale state: event handler captura o valor do state no momento de sua criação — quando o state muda, o handler ainda usa o valor antigo. Soluções: (1) Functional update: setCount(prev => prev + 1) — não precisa do valor atual do state, recebe sempre o mais recente; (2) useRef para acesso sempre atual: const countRef = useRef(count); useEffect(() => { countRef.current = count; }, [count]) — leia countRef.current dentro do handler; (3) Reinicie o handler quando state muda (inclua nas deps do useEffect ou useCallback).',
    tags: ['stale-state', 'closure', 'functional-update', 'useRef', 'handlers'],
  },
  {
    id: 'sm-049',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é RTK Query? Como se compara ao TanStack Query?',
    hints: ['Gerado automaticamente do API slice', 'Code generation', 'Mais integrado com Redux'],
    explanation: 'RTK Query: solução de data fetching e caching integrada ao Redux Toolkit. Define um "API slice" com endpoints e RTK Query gera automaticamente hooks (useGetUsersQuery, useCreateUserMutation), cache, invalidation e loading states. Integrado ao Redux DevTools. TanStack Query: agnóstico de estado global — funciona sem Redux. API mais simples, mais flexível, maior adoção. RTK Query: melhor se já usa Redux e quer tudo integrado. TanStack Query: melhor escolha geral, especialmente se não usa Redux. Ambos suportam invalidation e optimistic updates.',
    tags: ['rtk-query', 'tanstack-query', 'comparacao', 'redux', 'data-fetching'],
  },
  {
    id: 'sm-050',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é XState? Quando usar máquinas de estado para gerenciar UI?',
    hints: ['State machines', 'Transições explícitas', 'UI complexa com muitos estados'],
    explanation: 'XState: biblioteca para implementar máquinas de estado e statecharts. Define estados explícitos, transições e ações — impossível entrar em estados inválidos. Quando usar: (1) UIs com muitos estados interdependentes (formulário multistep, player de vídeo, autenticação); (2) Fluxos com lógica complexa de transição; (3) Quando "estado de loading + estado de error + estado de success" não captura toda a complexidade. Vantagem: estados impossíveis são impossíveis de representar. Pode ser "pesado" para UIs simples — use apenas onde a complexidade justifica.',
    tags: ['xstate', 'state-machine', 'statechart', 'ui-complexa', 'transicoes'],
  },
  {
    id: 'sm-051',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar seleção múltipla de itens (tipo Gmail) em React com performance?',
    hints: ['Set para seleção', 'Ref para evitar re-render geral', 'Shift+click para range'],
    explanation: `Seleção eficiente com Set e granular re-renders:
\`\`\`typescript
function useSelection<T>(items: T[]) {
  const [selected, setSelected] = useState(new Set<string>());
  const toggle = useCallback((id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);
  const selectAll = useCallback(() => setSelected(new Set(items.map(i => i.id))), [items]);
  const clearAll = useCallback(() => setSelected(new Set()), []);
  return { selected, toggle, selectAll, clearAll, isSelected: (id) => selected.has(id) };
}
// Cada item usa React.memo e recebe apenas isSelected(id) — evita re-render global
\`\`\``,
    tags: ['selecao-multipla', 'Set', 'react-memo', 'performance', 'gmail'],
  },
  {
    id: 'sm-052',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como evitar "prop drilling" sem usar Context ou estado global?',
    hints: ['Composição com children', 'Passar componentes', 'Element as prop'],
    explanation: 'Prop drilling pode ser evitado com composição sem Context: (1) Passar elementos como props: <Layout header={<UserAvatar user={user}/>}> em vez de passar user até Avatar; (2) Children: componente pai com state passa children que acessam o estado via closure; (3) Render props: função passada como prop que recebe os dados. A técnica de "element as prop" é especialmente poderosa — o componente pai cria o elemento com os dados que precisa, e o filho apenas renderiza onde deve aparecer, sem saber do que se trata.',
    tags: ['prop-drilling', 'composicao', 'children', 'element-as-prop', 'render-props'],
  },
  {
    id: 'sm-053',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como gerenciar estado de busca/filtro na URL com React Router ou Next.js?',
    hints: ['searchParams', 'useSearchParams', 'Bookmark/share', 'Back button funciona'],
    explanation: 'URL como fonte de verdade para filtros: (1) Benefício: bookmarkável, compartilhável, back button restaura filtros; (2) Next.js App Router: const searchParams = useSearchParams(); router.push("?" + new URLSearchParams({...params}).toString()); (3) Leitura: const q = searchParams.get("q"); (4) Debounce antes de atualizar a URL (não a cada keystroke); (5) Hydration: leia searchParams no servidor em Server Components para SSR correto; (6) Múltiplos filtros: ?category=electronics&min=100&max=500. Cuidado: URL tem limite de tamanho — não armazene listas grandes.',
    tags: ['url-state', 'searchParams', 'filtros', 'bookmark', 'next-js'],
  },
  {
    id: 'sm-054',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o padrão de "Flux" que inspirou o Redux?',
    hints: ['Action', 'Dispatcher', 'Store', 'View', 'Unidirecional'],
    explanation: 'Flux (Facebook, 2014): arquitetura para gerenciar estado em aplicações React. Fluxo estritamente unidirecional: (1) View dispara Action (objeto descrevendo o que aconteceu); (2) Action vai ao Dispatcher (coordenador central); (3) Dispatcher notifica todas as Stores; (4) Stores atualizam seu estado; (5) Views subscrevem às Stores e atualizam a UI. Redux simplificou o Flux: substituiu múltiplos stores por um único, e substituiu o Dispatcher por reducers puros. O fluxo unidirecional torna o estado previsível e debuggável.',
    tags: ['flux', 'redux', 'unidirecional', 'action', 'dispatcher', 'store'],
  },
  {
    id: 'sm-055',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o hook `useContext` e quando ele causa re-renders desnecessários?',
    hints: ['Todos os consumidores re-renderizam', 'Dividir contextos', 'useMemo no value'],
    explanation: 'useContext(MyContext): acessa o valor do Context mais próximo. Re-renderiza quando o value do Provider muda — qualquer mudança no object do value causa re-render de TODOS os consumidores, mesmo que a propriedade que eles usam não mudou. Soluções: (1) Dividir em múltiplos contextos (AuthContext separado de ThemeContext); (2) Memoizar o value: useMemo(() => ({ user, setUser }), [user]); (3) Usar bibliotecas como use-context-selector para seleção granular; (4) Para high-frequency updates: não use Context, use Zustand/Jotai.',
    tags: ['useContext', 're-render', 'memoizacao', 'contextos', 'performance'],
  },
  {
    id: 'sm-056',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar Recoil ou Jotai para estado atômico em React?',
    hints: ['atom()', 'useAtom', 'Derivados', 'Sem Provider global'],
    explanation: `Jotai (mais simples que Recoil):
\`\`\`typescript
import { atom, useAtom } from "jotai";
const countAtom = atom(0);
const doubledAtom = atom((get) => get(countAtom) * 2); // Derivado

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [doubled] = useAtom(doubledAtom);
  return <button onClick={() => setCount(c => c+1)}>{count} (dobro: {doubled})</button>;
}
// Não precisa de Provider global para átomos simples
// Async atom:
const userAtom = atom(async (get) => await fetchUser(get(userIdAtom)));
\`\`\``,
    tags: ['jotai', 'recoil', 'atomico', 'atom', 'useAtom'],
  },
  {
    id: 'sm-057',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os casos de uso corretos para `localStorage`, `sessionStorage` e Redux?',
    hints: ['localStorage: entre sessões', 'sessionStorage: na aba', 'Redux: em memória'],
    explanation: 'localStorage: persiste entre sessões e abas (mesmo browser). Uso: preferências do usuário (tema, idioma), tokens (nunca! use httpOnly cookies). sessionStorage: persiste apenas na aba atual — fecha a aba → apaga. Uso: dados de formulário em andamento, estado temporário. Redux/Zustand: estado em memória, resetado ao recarregar. Uso: estado da UI, dados da API cacheados na sessão. Combinação: Zustand + persist middleware para salvar slice no localStorage. Nunca salve em localStorage: tokens de autenticação, dados sensíveis, dados grandes (sessões de cache de API).',
    tags: ['localStorage', 'sessionStorage', 'redux', 'persistencia', 'sessao'],
  },
  {
    id: 'sm-058',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são "derived state" (estado derivado)? Por que é um anti-padrão sincronizá-lo com useEffect?',
    hints: ['Calcule durante o render', 'useMemo para caro', 'Sem useState para derivados'],
    explanation: 'Estado derivado: dados que podem ser calculados a partir de outros dados. Anti-padrão: usar useState + useEffect para "sincronizar": const [filtered, setFiltered] = useState([]); useEffect(() => { setFiltered(items.filter(i => i.active)) }, [items]) — cria estado desnecessário, causa re-render extra, e pode ficar stale. Correto: const filtered = items.filter(i => i.active) — calcule diretamente no render. Para computações caras: const filtered = useMemo(() => items.filter(...), [items]) — sem useEffect.',
    tags: ['derived-state', 'anti-pattern', 'useMemo', 'useEffect', 'calcular'],
  },
  {
    id: 'sm-059',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como usar Zustand com slices para organizar uma store grande?',
    hints: ['Múltiplos slices combinados', 'Cada slice tem seu estado e actions', 'Type safety'],
    explanation: `Padrão de slices com Zustand:
\`\`\`typescript
type AuthSlice = { user: User | null; login: (u: User) => void; logout: () => void };
type CartSlice = { items: CartItem[]; addItem: (item: CartItem) => void; clear: () => void };

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
});
const createCartSlice: StateCreator<CartSlice> = (set) => ({
  items: [],
  addItem: (item) => set(s => ({ items: [...s.items, item] })),
  clear: () => set({ items: [] }),
});

const useStore = create<AuthSlice & CartSlice>((...a) => ({
  ...createAuthSlice(...a),
  ...createCartSlice(...a),
}));
\`\`\``,
    tags: ['zustand', 'slices', 'store', 'organizacao', 'typescript'],
  },
  {
    id: 'sm-060',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como gerenciar estado de paginação com cursor no TanStack Query?',
    hints: ['hasNextPage', 'fetchNextPage', 'getNextPageParam', 'cursor'],
    explanation: 'Cursor pagination com TanStack Query: usa useInfiniteQuery. getNextPageParam: (lastPage) => lastPage.nextCursor — retorna undefined quando não há mais páginas. fetchNextPage(): carrega a próxima página. hasNextPage: boolean baseado em getNextPageParam retornar undefined ou não. Para UI de paginação tradicional: use useQuery com page state e keepPreviousData para não piscar ao mudar páginas. Para infinite scroll: useInfiniteQuery + IntersectionObserver. Dados: data.pages.flatMap(p => p.items) para lista flat.',
    tags: ['paginacao', 'cursor', 'tanstack-query', 'infinite-query', 'hasNextPage'],
  },
  {
    id: 'sm-061',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como usar Redux DevTools para depurar o estado da aplicação?',
    hints: ['Time-travel debugging', 'Action log', 'Dispatcher manual', 'State diff'],
    explanation: 'Redux DevTools Extension: (1) Action log: histórico de todas as actions disparadas em ordem; (2) State diff: o que mudou a cada action; (3) Time-travel: volte e avance no histórico de actions — reaplica estados anteriores; (4) Dispatch manual: dispatche actions diretamente na extensão para testar; (5) Import/Export do state: salve e restaure o estado para reproduzir bugs. Com RTK: DevTools integrado automaticamente. Configuração: configureStore({ devTools: process.env.NODE_ENV !== "production" }). Zustand também tem integração via middleware devtools().',
    tags: ['redux-devtools', 'time-travel', 'debug', 'action-log', 'state-diff'],
  },
  {
    id: 'sm-062',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `startTransition` e `flushSync` em React?',
    hints: ['startTransition: baixa prioridade', 'flushSync: força update síncrono', 'Evite flushSync'],
    explanation: 'startTransition(fn): marca updates dentro de fn como não-urgentes — React pode adiar e pode ser interrompido por updates mais urgentes. Melhora responsividade. flushSync(fn): força React a processar TODOS os updates pendentes de forma síncrona antes de retornar. Útil para situações raras onde você precisa ler o DOM após um setState. Exemplo: flushSync(() => setState(x)); const el = ref.current.getBoundingClientRect(). Evite flushSync — é um escape hatch que pode impactar performance. Na maioria dos casos, flushSync indica um design problem.',
    tags: ['startTransition', 'flushSync', 'sincronismo', 'prioritizacao', 'dom'],
  },
  {
    id: 'sm-063',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar polling de dados em React (atualização periódica)?',
    hints: ['setInterval com cleanup', 'refetchInterval no React Query', 'Page Visibility para pausar'],
    explanation: `Com React Query (mais robusto):
\`\`\`typescript
const { data } = useQuery({
  queryKey: ["status"],
  queryFn: fetchStatus,
  refetchInterval: 5000, // Polling a cada 5 segundos
  refetchIntervalInBackground: false, // Pausa quando aba inativa
});

// Manual com hook:
function usePolling(fn: () => void, interval: number) {
  useEffect(() => {
    const id = setInterval(fn, interval);
    return () => clearInterval(id); // Cleanup essencial!
  }, [fn, interval]);
}
\`\`\`
Use polling apenas quando SSE/WebSocket não for viável. Combine com Page Visibility API para pausar quando aba inativa.`,
    tags: ['polling', 'refetchInterval', 'setInterval', 'react-query', 'cleanup'],
  },
  {
    id: 'sm-064',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o hook `useCallback` dependency array? Por que omitir deps é perigoso?',
    hints: ['Stale closure', 'ESLint detecta', 'Deps ausentes capturam valores antigos'],
    explanation: 'useCallback(fn, [dep1, dep2]) retorna versão memoizada de fn, recriada apenas quando deps mudam. Deps ausentes: o callback captura versões antigas de variáveis (stale closure). Exemplo: const handleSubmit = useCallback(async () => { await api.create(formData) }, []) — formData nas deps seria necessário. Se formData muda mas não está nas deps, handleSubmit usa o formData antigo. eslint-plugin-react-hooks/exhaustive-deps detecta esse problema. Use o linter e siga as sugestões — raramente há razão legítima para omitir deps.',
    tags: ['useCallback', 'deps', 'stale-closure', 'eslint', 'memoizacao'],
  },
  {
    id: 'sm-065',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a diferença entre estado do servidor (server state) e estado do cliente (client state)?',
    hints: ['Server: dados remotos que mudam', 'Client: estado puro de UI', 'Tools diferentes'],
    explanation: 'Server state: dados que existem no servidor e são sincronizados com o cliente. Características: assíncrono, pode ficar desatualizado (stale), múltiplos usuários compartilham, pode falhar. Gerenciado com: TanStack Query, SWR, Apollo. Client state: estado puramente local da UI — não existe no servidor. Características: síncrono, sempre atualizado, apenas desse usuário. Gerenciado com: useState, useReducer, Zustand. Erro comum: usar Redux para server state (reinventando a roda que TanStack Query resolve melhor). Separe sempre: server state na ferramenta de cache, client state no state manager.',
    tags: ['server-state', 'client-state', 'tanstack-query', 'zustand', 'separacao'],
  },
  {
    id: 'sm-066',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um carrinho de compras com Zustand que persiste no localStorage?',
    hints: ['Persist middleware', 'Ações de add/remove/update', 'Quantidade e total'],
    explanation: `\`\`\`typescript
type CartItem = { id: string; name: string; price: number; quantity: number };
type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  total: () => number;
  clear: () => void;
};
const useCartStore = create(persist<CartStore>(
  (set, get) => ({
    items: [],
    addItem: (item) => set(s => {
      const existing = s.items.find(i => i.id === item.id);
      if (existing) return { items: s.items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) };
      return { items: [...s.items, { ...item, quantity: 1 }] };
    }),
    removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),
    updateQuantity: (id, qty) => set(s => ({ items: s.items.map(i => i.id === id ? { ...i, quantity: qty } : i) })),
    total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    clear: () => set({ items: [] }),
  }),
  { name: "cart-storage" }
));
\`\`\``,
    tags: ['carrinho', 'zustand', 'persist', 'localStorage', 'e-commerce'],
  },
  {
    id: 'sm-067',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são `onMutate`, `onError` e `onSuccess` no TanStack Query? Como usar com mutations?',
    hints: ['Ciclo de vida da mutation', 'Optimistic update', 'Side effects'],
    explanation: 'Callbacks da mutation no TanStack Query: onMutate(variables): executado ANTES da mutation — ideal para optimistic updates. Retorne contexto para rollback. onSuccess(data, variables, context): executado após sucesso — invalidar queries, mostrar toast. onError(error, variables, context): executado em erro — rollback do optimistic update usando context do onMutate. onSettled(data, error, variables, context): executado sempre (sucesso ou erro) — re-validate queries. Ordem: onMutate → (success: onSuccess → onSettled) | (error: onError → onSettled).',
    tags: ['mutation', 'onMutate', 'onError', 'onSuccess', 'tanstack-query'],
  },
  {
    id: 'sm-068',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar "optimistic UI" para likes em um feed social?',
    hints: ['Atualizar cache imediatamente', 'Rollback em erro', 'useMutation'],
    explanation: `Like otimístico com TanStack Query:
\`\`\`typescript
const { mutate: toggleLike } = useMutation({
  mutationFn: ({ postId, liked }: { postId: string; liked: boolean }) =>
    liked ? unlikePost(postId) : likePost(postId),
  onMutate: async ({ postId, liked }) => {
    await queryClient.cancelQueries({ queryKey: ["posts"] });
    const prev = queryClient.getQueryData(["posts"]);
    // Update otimístico
    queryClient.setQueryData(["posts"], (old: Post[]) =>
      old.map(p => p.id === postId
        ? { ...p, liked: !liked, likesCount: liked ? p.likesCount - 1 : p.likesCount + 1 }
        : p)
    );
    return { prev };
  },
  onError: (err, vars, ctx) => queryClient.setQueryData(["posts"], ctx?.prev),
  onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
});
\`\`\``,
    tags: ['optimistic-ui', 'likes', 'feed', 'rollback', 'useMutation'],
  },
  {
    id: 'sm-069',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `invalidateQueries` e `setQueryData` no TanStack Query?',
    hints: ['invalidate: refetch do servidor', 'setQueryData: update local', 'Quando usar cada'],
    explanation: 'invalidateQueries({ queryKey: ["users"] }): marca a query como stale e dispara um refetch (busca dados frescos do servidor). Use quando dados podem ter mudado no servidor. setQueryData(["users"], newData): atualiza o cache localmente SEM fazer um request ao servidor. Use para: (1) Optimistic updates (atualiza antes do servidor confirmar); (2) Após receber dados via WebSocket sem precisar de refetch. Combinação comum em mutations: setQueryData para update otimístico (onMutate) + invalidateQueries para confirmar com dados reais (onSettled).',
    tags: ['invalidateQueries', 'setQueryData', 'cache', 'refetch', 'otimistico'],
  },
  {
    id: 'sm-070',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `gcTime` (antes `cacheTime`) no TanStack Query? Como difere de `staleTime`?',
    hints: ['gcTime: quanto tempo no cache', 'staleTime: quando refetch', 'Inativo vs stale'],
    explanation: 'staleTime: quanto tempo os dados são considerados "frescos" — sem refetch automático durante esse período. Default: 0 (sempre stale). gcTime (garbage collection time): quanto tempo dados INATIVOS ficam no cache antes de serem removidos. Default: 5 minutos. Exemplo: staleTime: 60000 (1 min) + gcTime: 300000 (5 min). Se componente desmonta: dados ficam no cache por 5 minutos. Se remonta em 1 minuto: dados estão frescos (stale = false), sem refetch. Se remonta em 2 minutos: dados estão stale, refetch em background mas mostra cache. Se remonta em 6 minutos: sem cache, loading.',
    tags: ['gcTime', 'staleTime', 'cache', 'inativo', 'tanstack-query'],
  },
  {
    id: 'sm-071',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar debounce de queries no TanStack Query?',
    hints: ['useDebounce hook', 'enabled flag', 'Prevenir excesso de requests'],
    explanation: `Debounce de queries — não dispare request a cada keystroke:
\`\`\`typescript
function SearchResults({ query }: { query: string }) {
  // Debounce de 300ms antes de fazer a query
  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => searchProducts(debouncedQuery),
    enabled: debouncedQuery.length >= 2, // Só busca com 2+ caracteres
    placeholderData: keepPreviousData, // Mantém resultado anterior durante nova busca
  });

  return (
    <div>
      {isFetching && <SearchSpinner />}
      <ProductList items={data?.results ?? []} />
    </div>
  );
}
\`\`\``,
    tags: ['debounce', 'search', 'enabled', 'placeholderData', 'react-query'],
  },
  {
    id: 'sm-072',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `queryClient.prefetchQuery()`? Como melhorar a performance antecipando dados?',
    hints: ['Pre-carrega antes do usuário navegar', 'Hover como trigger', 'Menos latência percebida'],
    explanation: 'prefetchQuery: carrega dados em background antes do usuário precisar deles, populando o cache sem afetar nenhum componente. Estratégias: (1) Hover: ao passar o mouse sobre um link de produto, prefetch os dados do produto; (2) Route transition: ao iniciar navegação para /dashboard, prefetch dados do dashboard; (3) Next page: ao ver a última linha de uma lista paginada, prefetch a próxima página. Em Next.js Server Components: queryClient.prefetchQuery + HydrationBoundary. Resultado: quando o usuário navega, dados já estão no cache — sem loading state.',
    tags: ['prefetchQuery', 'pre-carregamento', 'hover', 'performance', 'ux'],
  },
  {
    id: 'sm-073',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um store de autenticação com Zustand e proteção de rotas?',
    hints: ['persist para lembrar sessão', 'Middleware de verificação', 'Hydration pattern'],
    explanation: `\`\`\`typescript
type AuthStore = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null, token: null, isAuthenticated: false,
      login: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    { name: "auth", partialize: (s) => ({ user: s.user, token: s.token, isAuthenticated: s.isAuthenticated }) }
  )
);

// Hook para proteção:
function useRequireAuth() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  useEffect(() => { if (!isAuthenticated) router.push("/login"); }, [isAuthenticated]);
}
\`\`\``,
    tags: ['auth', 'zustand', 'persist', 'protecao-rotas', 'token'],
  },
  {
    id: 'sm-074',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como gerenciar estado de UI (modais, drawers, tabs) globalmente em Zustand?',
    hints: ['UI store separada do domain store', 'Boolean flags', 'Ação para abrir/fechar'],
    explanation: `Store de UI para estado da interface:
\`\`\`typescript
type UIStore = {
  modals: Record<string, boolean>;
  activeTab: string;
  sidebarOpen: boolean;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  setActiveTab: (tab: string) => void;
  toggleSidebar: () => void;
};

const useUIStore = create<UIStore>((set) => ({
  modals: {}, activeTab: "overview", sidebarOpen: false,
  openModal: (id) => set(s => ({ modals: { ...s.modals, [id]: true } })),
  closeModal: (id) => set(s => ({ modals: { ...s.modals, [id]: false } })),
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
}));
// Uso: const isOpen = useUIStore(s => s.modals["delete-confirm"]);
\`\`\``,
    tags: ['ui-store', 'modais', 'zustand', 'estado-interface', 'tabs'],
  },
  {
    id: 'sm-075',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `useSyncExternalStore`? Por que foi introduzido no React 18?',
    hints: ['Sincronizar com stores externas', 'Tearing em Concurrent Mode', 'Snapshot'],
    explanation: 'useSyncExternalStore (React 18): hook para subscrevem a stores externas de forma segura com Concurrent Mode. Problema que resolve: "tearing" — com rendering concorrente, a UI pode renderizar partes com valores diferentes do mesmo store externo se o store mudar durante a renderização. API: useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?). subscribe: função que registra callback para mudanças. getSnapshot: retorna o valor atual (deve ser puro e estável se valor não mudou). Zustand, Redux e outras libs usam internamente para garantir consistência.',
    tags: ['useSyncExternalStore', 'concurrent', 'tearing', 'store', 'react18'],
  },
  {
    id: 'sm-076',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `select` no Zustand? Como usar para performance granular?',
    hints: ['Seleciona slice do store', 'Shallow comparison opcional', 'Evita re-renders'],
    explanation: 'No Zustand, o hook recebe um selector que extrai apenas o dado necessário. const count = useStore(state => state.count). Componente só re-renderiza quando count muda. Sem selector (useStore()): re-renderiza quando QUALQUER parte do store muda. Para objetos: use shallow do zustand: const { name, email } = useStore(state => ({ name: state.user.name, email: state.user.email }), shallow). Shallow compara propriedades superficialmente — sem shallow, um novo objeto seria criado sempre e o componente re-renderizaria a cada mudança.',
    tags: ['selector', 'shallow', 'performance', 'zustand', 'granular'],
  },
  {
    id: 'sm-077',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar `redux-saga` para side effects complexos? Compare com `redux-thunk`.',
    hints: ['Generators', 'takeEvery vs takeLatest', 'Testabilidade superior'],
    explanation: `Redux-saga com takeLatest (cancela requests anteriores):
\`\`\`javascript
import { call, put, takeLatest, cancelled } from "redux-saga/effects";

function* fetchUserSaga(action) {
  const controller = new AbortController();
  try {
    const user = yield call(fetchUser, action.userId, controller.signal);
    yield put({ type: "USER_FETCHED", payload: user });
  } catch (err) {
    yield put({ type: "USER_FETCH_ERROR", error: err });
  } finally {
    if (yield cancelled()) controller.abort(); // Cancela se saga for cancelada
  }
}
function* watchFetchUser() {
  // takeLatest: cancela a saga anterior se nova action chegar
  yield takeLatest("FETCH_USER", fetchUserSaga);
}
\`\`\`
Saga > Thunk quando: cancelamento, race conditions, retry lógica, sequências complexas.`,
    tags: ['redux-saga', 'takeLatest', 'generators', 'cancelamento', 'thunk'],
  },
  {
    id: 'sm-078',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `createAsyncThunk` do Redux Toolkit? Como gerencia loading/success/error?',
    hints: ['pending/fulfilled/rejected', 'extraReducers', 'Cancellation'],
    explanation: `createAsyncThunk simplifica async actions:
\`\`\`typescript
export const fetchUsers = createAsyncThunk("users/fetchAll", async (_, { rejectWithValue }) => {
  try { return await api.getUsers(); }
  catch (err) { return rejectWithValue(err.response.data); } // Controla o payload do rejected
});

// Slice:
const usersSlice = createSlice({
  name: "users", initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = "loading"; })
      .addCase(fetchUsers.fulfilled, (state, action) => { state.status = "succeeded"; state.items = action.payload; })
      .addCase(fetchUsers.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
  },
});
\`\`\``,
    tags: ['createAsyncThunk', 'extraReducers', 'pending', 'fulfilled', 'rejected'],
  },
  {
    id: 'sm-079',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são "actions" e "reducers" no Redux? Qual a relação entre eles?',
    hints: ['Action: evento', 'Reducer: função pura', 'Tipo da action guia o reducer'],
    explanation: 'Action: objeto que descreve O QUE aconteceu. { type: "products/add", payload: product }. O type é a identidade única da action. Action creator: função que cria actions. Reducer: função pura (state, action) => newState. Recebe o estado atual e uma action, retorna o novo estado. Nunca muta o estado — cria cópia. Switch/case no type para determinar qual transformação aplicar. Com RTK createSlice: action creators e reducer gerados automaticamente — você define apenas as "case reducers" por nome. Relação: você dispatcha uma action, todos os reducers recebem, apenas o correto transforma o estado.',
    tags: ['actions', 'reducers', 'redux', 'pure-function', 'dispatch'],
  },
  {
    id: 'sm-080',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um tema dark/light com Zustand e persistência?',
    hints: ['prefers-color-scheme', 'CSS variables', 'Persist no localStorage', 'SSR hydration'],
    explanation: `\`\`\`typescript
type ThemeStore = { theme: "light" | "dark"; toggleTheme: () => void; setTheme: (t: "light" | "dark") => void };

const useThemeStore = create(persist<ThemeStore>(
  (set) => ({
    theme: "light",
    toggleTheme: () => set(s => ({ theme: s.theme === "light" ? "dark" : "light" })),
    setTheme: (theme) => set({ theme }),
  }),
  { name: "theme-preference" }
));

// Inicializar com preferência do sistema:
function ThemeInitializer() {
  const setTheme = useThemeStore(s => s.setTheme);
  useEffect(() => {
    const stored = localStorage.getItem("theme-preference");
    if (!stored) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);
  return null;
}
\`\`\``,
    tags: ['tema', 'dark-mode', 'zustand', 'persist', 'prefers-color-scheme'],
  },
  {
    id: 'sm-081',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Zustand `immer` middleware? Como simplifica updates de estado aninhado?',
    hints: ['Escrever código mutante que gera imutável', 'Sem spread profundo', 'Immer por baixo'],
    explanation: 'O middleware `immer` do Zustand permite escrever updates de estado aninhado de forma "mutante" — mas internamente usa Immer para criar cópias imutáveis. Sem immer: set(s => ({ ...s, user: { ...s.user, address: { ...s.user.address, city: "São Paulo" } } })). Com immer: set(produce(s => { s.user.address.city = "São Paulo"; })). Muito mais limpo para estados profundamente aninhados. Configuração: import { immer } from "zustand/middleware/immer"; const useStore = create(immer(set => (...))).',
    tags: ['immer', 'zustand', 'middleware', 'mutavel', 'aninhado'],
  },
  {
    id: 'sm-082',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar "prefetching" de dados com TanStack Query ao hover?',
    hints: ['onMouseEnter', 'prefetchQuery', 'queryClient', 'Sem refetch se recente'],
    explanation: `Prefetch ao hover para navegação instantânea:
\`\`\`typescript
function ProductLink({ productId, children }: ProductLinkProps) {
  const queryClient = useQueryClient();
  const handleMouseEnter = useCallback(() => {
    // Prefetch apenas se não há dados recentes no cache
    queryClient.prefetchQuery({
      queryKey: ["product", productId],
      queryFn: () => fetchProduct(productId),
      staleTime: 60 * 1000, // Não refetch se dados têm menos de 1 min
    });
  }, [productId, queryClient]);

  return (
    <Link href={\`/products/\${productId}\`} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}
// Ao navegar: dados já no cache → sem loading state
\`\`\``,
    tags: ['prefetch', 'hover', 'queryClient', 'cache', 'navegacao'],
  },
  {
    id: 'sm-083',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Qual a diferença entre `useQuery` com `enabled: false` vs `queryClient.fetchQuery()`?',
    hints: ['enabled: false não roda automaticamente', 'fetchQuery: imperativo', 'Quando usar cada'],
    explanation: 'useQuery({ enabled: false }): hook que não executa automaticamente — aguarda ser "habilitado". Use quando a query depende de uma ação do usuário (ex: busca ao clicar). Acesse `refetch()` para executar manualmente. queryClient.fetchQuery(options): fora de componentes, retorna Promise diretamente. Use em Server Components, Server Actions, ou funções utilitárias. Diferença: useQuery é declarativo + reativo (re-renderiza ao mudar); fetchQuery é imperativo (retorna Promise, não integrado ao ciclo de vida React). Para queries manuais em componentes: prefira useQuery com enabled: false + refetch.',
    tags: ['enabled', 'fetchQuery', 'imperativo', 'declarativo', 'manual'],
  },
  {
    id: 'sm-084',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar "real-time collaboration" com TanStack Query e WebSocket?',
    hints: ['WebSocket para invalidar queries', 'setQueryData para update imediato', 'Reconexão'],
    explanation: `Real-time com WebSocket + TanStack Query:
\`\`\`typescript
function useRealtimeQuery<T>(queryKey: string[], queryFn: () => Promise<T>, wsChannel: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);
      if (type === "UPDATE") {
        // Update imediato sem refetch:
        queryClient.setQueryData(queryKey, data);
      } else if (type === "INVALIDATE") {
        // Refetch para dados novos:
        queryClient.invalidateQueries({ queryKey });
      }
    };
    ws.onclose = () => {
      // Reconectar após 3s
      setTimeout(() => ws.connect(), 3000);
    };
    return () => ws.close();
  }, [queryKey, queryClient, wsChannel]);

  return useQuery({ queryKey, queryFn });
}
\`\`\``,
    tags: ['realtime', 'websocket', 'tanstack-query', 'setQueryData', 'invalidate'],
  },
  {
    id: 'sm-085',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como implementar um hook `useLocalStorage` com suporte a SSR (sem hydration mismatch)?',
    hints: ['useState com undefined inicial', 'useEffect para ler localStorage', 'Sem acesso no servidor'],
    explanation: `useLocalStorage SSR-safe:
\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  // undefined no servidor, lê localStorage apenas no cliente
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    // Roda apenas no cliente (após hidratação)
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch { setStoredValue(initialValue); }
  }, [key, initialValue]);

  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) { console.error(err); }
  }, [key]);

  return [storedValue ?? initialValue, setValue] as const;
}
// ✓ Sem hydration mismatch: servidor e primeiro render do cliente → undefined
// ✓ Após hydration: lê localStorage e atualiza
\`\`\``,
    tags: ['useLocalStorage', 'ssr', 'hydration', 'useEffect', 'cliente'],
  },
  {
    id: 'sm-086',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `queryClient.getQueryData()` e `queryClient.setQueryData()`? Como usar fora de componentes?',
    hints: ['Acesso ao cache fora do React', 'Leitura e escrita direta', 'Server Actions'],
    explanation: 'getQueryData(key): lê diretamente do cache do TanStack Query sem causar re-render. setQueryData(key, updater): escreve no cache. Útil fora de componentes: em Server Actions (se usando server-side client), utilitários, ou em handlers de WebSocket. Exemplo em handler de WebSocket: ws.onmessage = ({ data }) => { const msg = JSON.parse(data); queryClient.setQueryData(["messages", msg.chatId], (old) => [...(old ?? []), msg]); }. Para leitura: const cachedUser = queryClient.getQueryData(["user", userId]) — verifica cache antes de fazer request manual.',
    tags: ['getQueryData', 'setQueryData', 'cache', 'fora-componente', 'websocket'],
  },
  {
    id: 'sm-087',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Como implementar "select" granular no TanStack Query para otimizar re-renders?',
    hints: ['select option', 'Apenas subset dos dados', 'Memoização interna'],
    explanation: 'A opção `select` do useQuery transforma/filtra os dados retornados e o componente só re-renderiza quando o resultado do select muda. useQuery({ queryKey: ["users"], queryFn: fetchUsers, select: (data) => data.filter(u => u.active) }). O componente renderiza apenas quando a lista de usuários ativos muda, mesmo que outros campos dos usuários mudem. TanStack Query memoiza o resultado do select. Uso avançado: select: (data) => ({ count: data.length, firstUser: data[0] }) — componente só re-renderiza quando count ou firstUser mudam.',
    tags: ['select', 'granular', 'memoizacao', 're-render', 'transformacao'],
  },
  {
    id: 'sm-088',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um pattern de "global loader" usando Zustand com interceptors de API?',
    hints: ['Contador de requests ativos', 'Interceptar todas as chamadas', 'NProgress pattern'],
    explanation: `Global loader com Axios interceptors e Zustand:
\`\`\`typescript
const useLoadingStore = create<{ count: number }>(() => ({ count: 0 }));
const startLoading = () => useLoadingStore.setState(s => ({ count: s.count + 1 }));
const stopLoading = () => useLoadingStore.setState(s => ({ count: Math.max(0, s.count - 1) }));
export const useIsLoading = () => useLoadingStore(s => s.count > 0);

// Axios interceptors:
axios.interceptors.request.use(config => { startLoading(); return config; });
axios.interceptors.response.use(
  response => { stopLoading(); return response; },
  error => { stopLoading(); return Promise.reject(error); }
);

// Componente:
function GlobalLoader() {
  const isLoading = useIsLoading();
  return isLoading ? <div className="global-progress" /> : null;
}
\`\`\``,
    tags: ['global-loader', 'axios-interceptors', 'zustand', 'contador', 'nprogress'],
  },
  {
    id: 'sm-089',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "Hydration" no contexto de TanStack Query com SSR?',
    hints: ['dehydrate no servidor', 'HydrationBoundary no cliente', 'Sem re-fetch inicial'],
    explanation: 'Hydration no TanStack Query: serializar o cache do servidor para o cliente evitando re-fetch desnecessário. Servidor: cria QueryClient, prefetch as queries, dehydrate(queryClient) serializa o cache. Cliente: HydrationBoundary state={dehydratedState} restaura o cache antes do primeiro render. Resultado: componente monta com dados já disponíveis (sem loading state), React Query não faz novo request se dentro do staleTime. Em Next.js Server Components: const queryClient = new QueryClient(); await queryClient.prefetchQuery({...}); return <HydrationBoundary state={dehydrate(queryClient)}>...',
    tags: ['hydration', 'dehydrate', 'HydrationBoundary', 'ssr', 'prefetch'],
  },
  {
    id: 'sm-090',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar "retry" customizado no TanStack Query baseado no tipo de erro?',
    hints: ['retry função', 'Não retente 4xx', 'Exponential backoff'],
    explanation: `Retry customizado no TanStack Query:
\`\`\`typescript
const { data } = useQuery({
  queryKey: ["resource"],
  queryFn: fetchResource,
  retry: (failureCount, error) => {
    // Nunca retente erros do cliente (4xx)
    if (error instanceof ApiError && error.status >= 400 && error.status < 500) return false;
    // Máximo de 3 tentativas para outros erros
    return failureCount < 3;
  },
  retryDelay: (attemptIndex) => {
    // Exponential backoff com jitter: 1s, 2s, 4s + random(0-1000ms)
    return Math.min(1000 * 2 ** attemptIndex + Math.random() * 1000, 30000);
  },
});
\`\`\``,
    tags: ['retry', 'exponential-backoff', 'jitter', '4xx', 'tanstack-query'],
  },
]
