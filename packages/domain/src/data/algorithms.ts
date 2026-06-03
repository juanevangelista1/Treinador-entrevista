import type { Question } from '../session/types'

export const algorithmsQuestions: Question[] = [
  {
    id: 'algo-001',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    text: 'Qual é a complexidade de tempo de uma busca binária em um array ordenado?',
    options: [
      { id: 'a', text: 'O(n)', isCorrect: false },
      { id: 'b', text: 'O(n²)', isCorrect: false },
      { id: 'c', text: 'O(log n)', isCorrect: true },
      { id: 'd', text: 'O(1)', isCorrect: false },
    ],
    hints: ['A cada iteração, metade dos elementos é descartada'],
    explanation: 'Busca binária divide o espaço de busca ao meio a cada iteração — T(n) = T(n/2) + O(1), que pelo Master Theorem resulta em O(log n). Requer que o array esteja ordenado.',
    tags: ['busca-binaria', 'complexidade', 'log-n'],
  },
  {
    id: 'algo-002',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Big O Notation? Explique as complexidades mais comuns: O(1), O(log n), O(n), O(n log n), O(n²).',
    hints: ['Descreve o crescimento do tempo/espaço em relação ao input', 'Foca no pior caso e no comportamento assintótico'],
    explanation: 'Big O descreve o crescimento da complexidade: O(1) = constante (acesso a array por índice); O(log n) = logarítmico (busca binária); O(n) = linear (percorrer array); O(n log n) = linearítmico (merge sort, heap sort); O(n²) = quadrático (bubble sort, dois loops aninhados); O(2ⁿ) = exponencial (subconjuntos); O(n!) = fatorial (permutações). Ignoramos constantes e termos menores.',
    tags: ['big-o', 'complexidade', 'notacao', 'performance'],
  },
  {
    id: 'algo-003',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Implemente uma pilha (Stack) em JavaScript. Explique suas operações e complexidade.',
    hints: ['LIFO — Last In, First Out', 'push, pop, peek', 'Array pode ser usado'],
    explanation: 'Stack (LIFO): `push` adiciona ao topo, `pop` remove do topo, `peek` lê o topo. Com array JS: `push()` e `pop()` já são O(1). Implementação com linked list dá O(1) garantido sem resize. Aplicações: undo/redo, call stack, DFS, parsing de expressões, avaliação de parênteses.',
    tags: ['stack', 'pilha', 'lifo', 'estrutura-dados'],
  },
  {
    id: 'algo-004',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma Fila (Queue)? Como implementar em JavaScript com complexidade O(1) para enqueue e dequeue?',
    hints: ['FIFO — First In, First Out', 'Problema com shift() do array', 'Linked list ou circular buffer'],
    explanation: 'Queue (FIFO): enqueue adiciona ao fim, dequeue remove do início. Problema: `Array.shift()` é O(n) pois reindexia todos os elementos. Solução O(1): usar linked list (head e tail pointers) ou um objeto com índices: `{ items: {}, head: 0, tail: 0 }`. Aplicações: BFS, gerenciamento de tasks, event queue, sistemas de filas (impressoras, OS scheduling).',
    tags: ['queue', 'fila', 'fifo', 'estrutura-dados', 'linked-list'],
  },
  {
    id: 'algo-005',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Linked List? Compare com arrays. Implemente uma doubly linked list com insert e delete.',
    hints: ['Nós com referências', 'Insert O(1) em posição conhecida', 'Sem acesso aleatório O(1)'],
    explanation: 'Linked List: sequência de nós, cada um com valor e referência(s) para próximo (singly) e/ou anterior (doubly). Vantagens sobre arrays: insert/delete O(1) em posição conhecida (sem reindexação), tamanho dinâmico. Desvantagens: sem acesso aleatório (O(n) para buscar por posição), uso maior de memória (ponteiros extras), cache locality ruim. Doubly linked list: permite percurso em ambas direções, delete O(1) com referência ao nó.',
    tags: ['linked-list', 'doubly', 'estrutura-dados', 'insert', 'delete'],
  },
  {
    id: 'algo-006',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Hash Table? Como funciona o hashing e como resolver colisões?',
    hints: ['Chave → índice via hash function', 'Colisão: chaining ou open addressing', 'O(1) amortizado'],
    explanation: 'Hash table mapeia chaves para valores via função hash (chave → índice). Complexidade: O(1) amortizado para insert/lookup/delete. Colisões: (1) Chaining: cada bucket tem linked list de pares key-value — degrada para O(n) em pior caso; (2) Open addressing: procura próximo slot disponível (linear probing, quadratic probing). Load factor: quantidade de elementos / tamanho da tabela — quando alto (>0.75), rehash (dobra o tamanho). JavaScript Object e Map são hash tables.',
    tags: ['hash-table', 'hash-function', 'colisao', 'chaining', 'o1'],
  },
  {
    id: 'algo-007',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Implemente BFS (Breadth-First Search) e DFS (Depth-First Search) em um grafo. Quando usar cada um?',
    hints: ['BFS: fila, menor caminho', 'DFS: pilha ou recursão', 'BFS: nível por nível'],
    explanation: 'BFS: usa fila, explora nível por nível. Encontra o caminho mais curto em grafos não ponderados. Usa mais memória. DFS: usa pilha (ou recursão), vai o mais fundo possível. Usa menos memória. Quando usar: BFS para menor caminho (ex: rede social, GPS simples); DFS para detectar ciclos, topological sort, componentes conectados, resolver labirintos. Ambos: O(V + E) em tempo e espaço.',
    tags: ['bfs', 'dfs', 'grafo', 'traversal', 'algoritmo'],
  },
  {
    id: 'algo-008',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é programação dinâmica (Dynamic Programming)? Explique memoização vs tabulação com o exemplo de Fibonacci.',
    hints: ['Problemas com subproblemas sobrepostos', 'Memoização: top-down', 'Tabulação: bottom-up'],
    explanation: 'DP: otimização que armazena resultados de subproblemas para evitar recálculo. Condições: optimal substructure + overlapping subproblems. Fibonacci com memoização: `function fib(n, memo = {}) { if(n <= 1) return n; if(memo[n]) return memo[n]; return memo[n] = fib(n-1, memo) + fib(n-2, memo); }` — O(n). Tabulação: `dp[0]=0, dp[1]=1; for(i=2; i<=n; i++) dp[i] = dp[i-1] + dp[i-2]` — O(n). Memoização é top-down (recursivo + cache); tabulação é bottom-up (iterativo).',
    tags: ['dynamic-programming', 'memoizacao', 'tabulacao', 'fibonacci', 'dp'],
  },
  {
    id: 'algo-009',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é quicksort? Implemente e analise a complexidade no melhor, médio e pior caso.',
    hints: ['Pivot', 'Particionamento', 'O(n log n) médio, O(n²) pior'],
    explanation: 'Quicksort: escolhe um pivot, particiona em menores/maiores, ordena recursivamente. Implementação: escolhe pivot (ex: último elemento), percorre colocando menores antes do pivot. Complexidade: O(n log n) médio, O(n²) pior caso (array já ordenado com pivot ruim). Melhorias: pivot aleatório ou median-of-three. In-place (O(log n) stack space). Na prática, mais rápido que merge sort por melhor cache locality. JavaScript `Array.sort()` usa TimSort (merge sort + insertion sort).',
    tags: ['quicksort', 'ordenacao', 'pivot', 'complexidade', 'in-place'],
  },
  {
    id: 'algo-010',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é uma Binary Search Tree (BST)? Implemente insert, search e traversal (inorder, preorder, postorder).',
    hints: ['Esquerda: menor', 'Direita: maior', 'Inorder: crescente'],
    explanation: 'BST: árvore onde cada nó tem filhos esquerdo (menor) e direito (maior). Busca/Insert: O(log n) balanceada, O(n) degenerada. Traversals: Inorder (esq → raiz → dir): produz ordenação crescente; Preorder (raiz → esq → dir): serialização/clone; Postorder (esq → dir → raiz): deletar árvore, avaliação de expressão. Problema: pode degenerar em lista se inserir em ordem. Solução: AVL trees, Red-Black trees (auto-balanceamento).',
    tags: ['bst', 'arvore-binaria', 'traversal', 'inorder', 'estrutura-dados'],
  },
  // ── MAIS ALGORITMOS ──────────────────────────────────────────────────────────
  {
    id: 'algo-011',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Implemente a busca binária em JavaScript. Quais são as pré-condições?',
    hints: ['Array ordenado', 'left e right pointers', 'mid = (left + right) / 2'],
    explanation: `\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // não encontrado
}
\`\`\`
Pré-condição: array deve estar ordenado. Complexidade: O(log n) tempo, O(1) espaço. Variações: encontrar primeiro/último elemento que satisfaz condição (binary search on answer).`,
    tags: ['busca-binaria', 'implementacao', 'sorted', 'pointers'],
  },
  {
    id: 'algo-012',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é bubble sort? Por que é ineficiente e quando ainda é útil?',
    hints: ['Comparar pares adjacentes', 'O(n²)', 'Adaptativo para arrays quase ordenados'],
    explanation: 'Bubble sort: percorre o array comparando pares adjacentes e trocando se necessário. Cada passagem "flutua" o maior elemento para o fim. Complexidade: O(n²) pior/médio caso, O(n) melhor caso (array ordenado com early stop). Por que ineficiente: muitas trocas desnecessárias. Quando útil: arrays muito pequenos (<20 elementos), quase ordenados, ou para ensino. Insertion sort geralmente melhor para arrays pequenos. Merge/Quick sort para produção.',
    tags: ['bubble-sort', 'ordenacao', 'ineficiente', 'comparacao'],
  },
  {
    id: 'algo-013',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é merge sort? Por que é preferido em alguns cenários mesmo sendo O(n log n)?',
    hints: ['Divide e conquista', 'Estável', 'O(n) espaço extra'],
    explanation: `Merge sort: divide o array pela metade, ordena recursivamente, e merge os dois arrays ordenados.
\`\`\`javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
\`\`\`
Estável (preserva ordem de elementos iguais), O(n log n) garantido (sem pior caso como quicksort), ideal para linked lists. Desvantagem: O(n) espaço extra.`,
    tags: ['merge-sort', 'divide-conquista', 'estavel', 'linked-list'],
  },
  {
    id: 'algo-014',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo Two Pointers? Resolva: "encontrar dois números em array ordenado que somam target".',
    hints: ['Pointer esquerdo e direito', 'Move conforme a soma', 'O(n) tempo'],
    explanation: `Two Pointers: dois ponteiros se movendo em direções opostas ou mesma direção.
\`\`\`javascript
function twoSum(sortedArr, target) {
  let left = 0, right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}
// O(n) tempo, O(1) espaço
\`\`\`
Aplicações: remover duplicatas de array ordenado, verificar palíndromo, container with most water.`,
    tags: ['two-pointers', 'array', 'soma', 'otimizacao', 'o-n'],
  },
  {
    id: 'algo-015',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Sliding Window? Resolva: "máximo subarray de tamanho k".',
    hints: ['Janela deslizante', 'Evita recálculo', 'O(n)'],
    explanation: `Sliding Window: janela de tamanho fixo ou variável que desliza pelo array sem recalcular tudo.
\`\`\`javascript
function maxSubarraySum(arr, k) {
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Adiciona novo, remove antigo
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// O(n) vs O(n*k) da abordagem ingênua
\`\`\`
Aplicações: longest substring without repeating chars, minimum window substring, max sum subarray.`,
    tags: ['sliding-window', 'subarray', 'otimizacao', 'janela', 'o-n'],
  },
  {
    id: 'algo-016',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Explique o problema clássico de Two Sum com hash map. Por que é O(n) e não O(n²)?',
    hints: ['Armazenar complementos no hash', 'Uma passagem', 'Lookup O(1)'],
    explanation: `\`\`\`javascript
function twoSum(nums, target) {
  const seen = new Map(); // { number -> index }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
  return null;
}
// O(n) tempo: uma passagem + O(1) lookup no Map
// O(n) espaço: Map pode ter n entradas
\`\`\`
A abordagem ingênua com dois loops é O(n²). O hash map transforma o lookup de O(n) para O(1).`,
    tags: ['two-sum', 'hash-map', 'o-n', 'lookup', 'complemento'],
  },
  {
    id: 'algo-017',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é recursão? Como evitar stack overflow? Explique tail recursion e trampolines.',
    hints: ['Base case', 'Stack frames', 'Trampoline para simular TCO'],
    explanation: `Recursão sem base case ou muito profunda causa stack overflow (RangeError). Técnicas: (1) Converter para iterativo; (2) Memoização; (3) Trampoline: simula TCO.
\`\`\`javascript
const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') result = result();
  return result;
};
// Fatorial com trampoline:
const factorial = trampoline(function fact(n, acc = 1) {
  if (n <= 1) return acc;
  return () => fact(n - 1, n * acc); // Retorna função em vez de chamar
});
factorial(10000); // Sem stack overflow!
\`\`\``,
    tags: ['recursao', 'stack-overflow', 'trampoline', 'tco', 'iterativo'],
  },
  {
    id: 'algo-018',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um Heap (max-heap / min-heap)? Quais operações ele suporta e qual a complexidade?',
    hints: ['Árvore binária quase completa', 'Propriedade de heap', 'Priority Queue'],
    explanation: 'Heap: árvore binária completa onde pai é maior (max-heap) ou menor (min-heap) que os filhos. Implementado eficientemente com array: pai de i está em `(i-1)/2`, filhos em `2i+1` e `2i+2`. Operações: insert O(log n) — adiciona e faz "bubble up"; extract-max/min O(log n) — remove raiz e faz "heapify down"; peek O(1) — lê raiz. Usado em: Priority Queue, Heap Sort (O(n log n) in-place), algoritmo de Dijkstra.',
    tags: ['heap', 'max-heap', 'min-heap', 'priority-queue', 'complexidade'],
  },
  {
    id: 'algo-019',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é um Trie (Prefix Tree)? Implemente insert e search. Qual o caso de uso principal?',
    hints: ['Cada nó é um caractere', 'Busca de prefixo O(m)', 'Autocomplete'],
    explanation: `Trie: árvore onde cada caminho da raiz a um nó representa um prefixo.
\`\`\`javascript
class TrieNode { children = {}; isEnd = false; }
class Trie {
  root = new TrieNode();
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }
}
\`\`\`
Uso: autocomplete, spell checking, busca de prefixos. O(m) para operações onde m é o comprimento da palavra.`,
    tags: ['trie', 'prefix-tree', 'autocomplete', 'string', 'implementacao'],
  },
  {
    id: 'algo-020',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de Dijkstra? Para que serve? Qual a complexidade?',
    hints: ['Caminho mais curto', 'Grafo ponderado', 'Priority Queue'],
    explanation: 'Dijkstra: menor caminho de um vértice de origem para todos os outros em um grafo ponderado (sem arestas negativas). Usa uma Priority Queue (min-heap). Algoritmo: (1) dist[origem] = 0, todos os outros = ∞; (2) Insere origem na PQ; (3) Extrai menor distância, relaxa vizinhos; (4) Repete até PQ vazia. Complexidade: O((V + E) log V) com heap binário. Para arestas negativas: Bellman-Ford O(VE). Para grafos densos: considerar Dijkstra com matriz de adjacência O(V²).',
    tags: ['dijkstra', 'caminho-curto', 'grafo', 'priority-queue', 'ponderado'],
  },
  {
    id: 'algo-021',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Topological Sort? Em qual tipo de grafo funciona e quais são os algoritmos?',
    hints: ['DAG (Directed Acyclic Graph)', 'Ordenação de dependências', "Kahn's ou DFS"],
    explanation: `Topological Sort: ordenar vértices de um DAG de forma que toda aresta (u, v) aparece com u antes de v. Aplicações: ordem de compilação, resolução de dependências, currículo de disciplinas. Algoritmos: (1) Kahn's (BFS): conta in-degrees, começa com 0-indegree, vai diminuindo; detecta ciclos se resultado incompleto. (2) DFS: faz DFS, adiciona ao início da lista quando retorna de um nó (post-order). Ambos O(V + E). Não funciona em grafos com ciclos.`,
    tags: ['topological-sort', 'dag', 'dependencias', 'grafo-direcionado', 'dfs'],
  },
  {
    id: 'algo-022',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'Explique o problema da mochila (Knapsack Problem). Resolva com programação dinâmica.',
    hints: ['0/1 Knapsack', 'dp[i][w]', 'Subproblemas sobrepostos'],
    explanation: `0/1 Knapsack: n itens com peso e valor, mochila com capacidade W. Maximizar valor sem exceder W.
\`\`\`javascript
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = dp[i-1][w]; // Não incluir item i
      if (weights[i-1] <= w) {
        dp[i][w] = Math.max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1]);
      }
    }
  }
  return dp[n][capacity];
}
// O(n*W) tempo e espaço
\`\`\``,
    tags: ['knapsack', 'dp', 'mochila', 'otimizacao', 'subproblemas'],
  },
  {
    id: 'algo-023',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Longest Common Subsequence (LCS)? Implemente com programação dinâmica.',
    hints: ['Subsequência: não necessariamente contígua', 'dp[i][j]', 'O(m*n)'],
    explanation: `LCS: maior subsequência (não precisa ser contígua) comum a duas strings.
\`\`\`javascript
function lcs(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}
// "ABCBDAB" e "BDCAB" → LCS length = 4 (BCAB ou BDAB)
\`\`\``,
    tags: ['lcs', 'subsequencia', 'dp', 'strings', 'dinamico'],
  },
  {
    id: 'algo-024',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de detecção de ciclos em linked list (Floyd\'s Cycle Detection)?',
    hints: ['Slow e fast pointer', 'Tortoise and Hare', 'O(1) espaço'],
    explanation: `Floyd's (Tortoise and Hare): dois ponteiros, um move 1 passo, outro 2 passos. Se há ciclo, o rápido alcança o lento.
\`\`\`javascript
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
// O(n) tempo, O(1) espaço
// Para encontrar início do ciclo: após detecção, move slow para head,
// ambos avançam 1 passo — onde se encontram é o início do ciclo.
\`\`\``,
    tags: ['floyd', 'ciclo', 'linked-list', 'slow-fast', 'tortoise-hare'],
  },
  {
    id: 'algo-025',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Maximum Subarray Problem (Kadane\'s Algorithm)?',
    hints: ['Subarray contíguo com maior soma', 'O(n)', 'currentSum e maxSum'],
    explanation: `Kadane's: encontra subarray contíguo com maior soma em O(n).
\`\`\`javascript
function maxSubarray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
// [-2,1,-3,4,-1,2,1,-5,4] → 6 (subarray [4,-1,2,1])
// Intuição: se currentSum ficou negativo, é melhor começar novo subarray
\`\`\``,
    tags: ['kadane', 'maximum-subarray', 'dp', 'array', 'o-n'],
  },
  {
    id: 'algo-026',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um Grafo? Explique representação por lista de adjacência vs matriz de adjacência.',
    hints: ['Vértices e arestas', 'Esparso vs denso', 'Complexidade de operações'],
    explanation: 'Grafo: conjunto de vértices (V) e arestas (E). Lista de adjacência: array/map de listas — `adj[u] = [v1, v2]`. Espaço: O(V + E). Melhor para grafos esparsos (poucos edges). Verificar aresta: O(grau). Matriz de adjacência: matriz V×V onde `matrix[u][v] = peso`. Espaço: O(V²). Melhor para grafos densos. Verificar aresta: O(1). Variações: direcionado/não-direcionado, ponderado/não-ponderado, cíclico/acíclico.',
    tags: ['grafo', 'lista-adjacencia', 'matriz-adjacencia', 'representacao'],
  },
  {
    id: 'algo-027',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o algoritmo de Union-Find (Disjoint Set Union)? Implemente com path compression e union by rank.',
    hints: ['Detectar ciclos', 'Encontrar componentes conectados', 'Quase O(1) amortizado'],
    explanation: `Union-Find: estrutura para gerenciar conjuntos disjuntos.
\`\`\`javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x]); // Path compression
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false; // Já no mesmo conjunto
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px]; // Union by rank
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    return true;
  }
}
\`\`\``,
    tags: ['union-find', 'disjoint-set', 'path-compression', 'kruskal', 'ciclos'],
  },
  {
    id: 'algo-028',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Backtracking algorithms? Resolva N-Queens ou Sudoku Solver.',
    hints: ['Tentar, verificar, desfazer', 'Recursão com pruning', 'Exploração de espaço de soluções'],
    explanation: `Backtracking: tenta uma solução, se inválida volta atrás. Pruning: podas para não explorar ramos impossíveis.
\`\`\`javascript
function permute(nums) {
  const result = [];
  function backtrack(current, remaining) {
    if (remaining.length === 0) { result.push([...current]); return; }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      backtrack(current, [...remaining.slice(0,i), ...remaining.slice(i+1)]);
      current.pop(); // Desfaz
    }
  }
  backtrack([], nums);
  return result;
}
// Aplicações: N-Queens, Sudoku, combinações, subsets
\`\`\``,
    tags: ['backtracking', 'n-queens', 'recursao', 'pruning', 'exploracao'],
  },
  {
    id: 'algo-029',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Greedy Algorithm (algoritmo guloso)? Quando é correto usar e quando falha?',
    hints: ['Escolha ótima local', 'Nem sempre ótimo global', 'Activity selection, Huffman'],
    explanation: 'Greedy: a cada passo, escolhe a opção localmente ótima esperando atingir o ótimo global. Correto quando: o problema tem "greedy choice property" e "optimal substructure". Exemplos corretos: Activity selection (selecionar mais atividades sem conflito → escolhe a de menor fim), Dijkstra, Huffman coding, algoritmo de Kruskal. Falha: Knapsack 0/1 (greedy por razão valor/peso falha), problema do troco com denominações arbitrárias (DP necessária). Verifique se "fazer a melhor escolha agora" leva ao ótimo global.',
    tags: ['greedy', 'guloso', 'otimizacao', 'activity-selection', 'huffman'],
  },
  {
    id: 'algo-030',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Deque (Double-ended queue)? Implemente e resolva o problema de Sliding Window Maximum.',
    hints: ['Push/pop em ambas extremidades', 'O(1) para deque ops', 'Monotonic deque'],
    explanation: `Deque: fila onde pode adicionar/remover de ambas extremidades em O(1). Problema Sliding Window Maximum: para cada janela de k elementos, encontrar o máximo.
\`\`\`javascript
function maxSlidingWindow(nums, k) {
  const deque = []; // Armazena índices
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // Remove elementos fora da janela
    if (deque[0] < i - k + 1) deque.shift();
    // Remove elementos menores (não podem ser máximo)
    while (deque.length && nums[deque[deque.length-1]] < nums[i])
      deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}
// O(n) — cada elemento é adicionado/removido uma vez
\`\`\``,
    tags: ['deque', 'sliding-window-max', 'monotonic-deque', 'o-n'],
  },
  {
    id: 'algo-031',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é insertion sort? Quando é preferível a algoritmos mais eficientes?',
    hints: ['O(n²) pior caso', 'O(n) melhor caso', 'Estável e in-place'],
    explanation: 'Insertion sort: para cada elemento, insere-o na posição correta na parte já ordenada. O(n²) pior caso (array invertido), O(n) melhor caso (array quase ordenado). Estável e in-place. Preferível quando: (1) Arrays pequenos (< 20 elementos) — overhead de algoritmos complexos não compensa; (2) Arrays quase ordenados — quase O(n); (3) TimSort (usado em Python e JavaScript) usa insertion sort para partições pequenas do merge sort.',
    tags: ['insertion-sort', 'ordenacao', 'pequenos-arrays', 'timsort', 'estavel'],
  },
  {
    id: 'algo-032',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Heap Sort? Implemente usando um max-heap.',
    hints: ['In-place', 'O(n log n) garantido', 'Build heap O(n)'],
    explanation: `Heap sort: constrói max-heap do array, então extrai máximo repetidamente.
\`\`\`javascript
function heapSort(arr) {
  const n = arr.length;
  // Build max-heap: O(n)
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) heapify(arr, n, i);
  // Extrai elementos um a um: O(n log n)
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move max para o final
    heapify(arr, i, 0);
  }
}
function heapify(arr, n, i) {
  let largest = i, l = 2*i+1, r = 2*i+2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest !== i) { [arr[i], arr[largest]] = [arr[largest], arr[i]]; heapify(arr, n, largest); }
}
\`\`\``,
    tags: ['heap-sort', 'max-heap', 'o-n-log-n', 'in-place', 'ordenacao'],
  },
  {
    id: 'algo-033',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma AVL Tree? Como ela mantém o balanceamento?',
    hints: ['Balance factor', 'Rotações', 'O(log n) garantido'],
    explanation: 'AVL Tree: BST auto-balanceada onde a diferença de altura (balance factor) entre filhos esquerdo e direito é no máximo 1 para cada nó. Após insert/delete, rotações simples ou duplas restauram o balanço. Rotações: Direita (para desequilíbrio à esquerda), Esquerda (para direita), Esquerda-Direita, Direita-Esquerda. Garante O(log n) para todas as operações. Mais rígidamente balanceada que Red-Black trees — melhores para lookups frequentes.',
    tags: ['avl-tree', 'balanceamento', 'rotacoes', 'bst', 'o-log-n'],
  },
  {
    id: 'algo-034',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é o algoritmo de Kruskal para Minimum Spanning Tree?',
    hints: ['Greedy', 'Union-Find', 'Arestas ordenadas por peso'],
    explanation: `Kruskal: encontra MST de grafo ponderado não-direcionado. Greedy: ordena arestas por peso, adiciona a próxima menor aresta que não cria ciclo.
\`\`\`javascript
function kruskal(vertices, edges) {
  edges.sort((a, b) => a.weight - b.weight);
  const uf = new UnionFind(vertices);
  const mst = [];
  for (const edge of edges) {
    if (uf.find(edge.u) !== uf.find(edge.v)) {
      mst.push(edge);
      uf.union(edge.u, edge.v);
      if (mst.length === vertices - 1) break;
    }
  }
  return mst;
}
// O(E log E) — dominado pelo sorting
\`\`\``,
    tags: ['kruskal', 'mst', 'spanning-tree', 'union-find', 'greedy'],
  },
  {
    id: 'algo-035',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Coin Change? Resolva com DP.',
    hints: ['dp[amount]', 'Bottom-up', 'Subproblemas overlapping'],
    explanation: `Coin Change: dado um conjunto de moedas e um valor, encontre o mínimo de moedas.
\`\`\`javascript
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// coins=[1,5,11], amount=15 → 3 (11+3*1 ou 5+5+5)
// O(amount * coins.length) tempo, O(amount) espaço
\`\`\``,
    tags: ['coin-change', 'dp', 'greedy-falha', 'bottom-up', 'otimizacao'],
  },
  {
    id: 'algo-036',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de busca em profundidade (DFS) iterativo?',
    hints: ['Stack explícita', 'Equivalente ao recursivo', 'Sem stack overflow'],
    explanation: `DFS iterativo evita stack overflow em grafos muito profundos:
\`\`\`javascript
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    result.push(node);
    // Adiciona vizinhos (reverso para manter mesma ordem do recursivo)
    for (const neighbor of [...(graph[node] || [])].reverse()) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return result;
}
\`\`\``,
    tags: ['dfs', 'iterativo', 'stack', 'grafo', 'traversal'],
  },
  {
    id: 'algo-037',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Longest Increasing Subsequence (LIS)? Resolva com DP.',
    hints: ['dp[i]: LIS terminando em i', 'O(n²) DP', 'O(n log n) com binary search'],
    explanation: `LIS: maior subsequência estritamente crescente.
\`\`\`javascript
function lis(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}
// [10,9,2,5,3,7,101,18] → 4 (2,3,7,101 ou 2,5,7,101)
// Versão O(n log n): mantém array de "tails" e binary search
\`\`\``,
    tags: ['lis', 'subsequencia', 'dp', 'binary-search', 'dinamico'],
  },
  {
    id: 'algo-038',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são Graph Coloring problems? O que é o problema de n-coloração?',
    hints: ['Chromatic number', 'Backtracking', 'Bipartite graph = 2-colorable'],
    explanation: 'Graph coloring: atribuir cores a vértices de forma que vértices adjacentes tenham cores diferentes. Chromatic number χ(G): mínimo de cores necessárias. NP-hard em geral. Bipartito: 2-colorável (verificável com BFS). Aplicações: scheduling (conflitos = arestas), register allocation em compiladores. Algoritmos: greedy (não ótimo mas rápido), backtracking (ótimo mas exponencial). Welsh-Powell: ordena por grau decrescente, greedy — produz boa solução.',
    tags: ['graph-coloring', 'bipartite', 'np-hard', 'scheduling', 'chromatic'],
  },
  {
    id: 'algo-039',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que é um Segment Tree? Para que serve e qual a complexidade?',
    hints: ['Range queries', 'O(log n) query e update', 'Divisão em segmentos'],
    explanation: `Segment Tree: estrutura para responder range queries (ex: soma, mínimo de um intervalo) em O(log n) e fazer point updates em O(log n). Construção: O(n). Cada nó armazena resultado de um intervalo. Para range sum:
\`\`\`javascript
class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(4 * this.n).fill(0);
    this.build(arr, 0, 0, this.n - 1);
  }
  build(arr, node, start, end) {
    if (start === end) { this.tree[node] = arr[start]; return; }
    const mid = Math.floor((start + end) / 2);
    this.build(arr, 2*node+1, start, mid);
    this.build(arr, 2*node+2, mid+1, end);
    this.tree[node] = this.tree[2*node+1] + this.tree[2*node+2];
  }
}
\`\`\``,
    tags: ['segment-tree', 'range-query', 'o-log-n', 'sum', 'update'],
  },
  {
    id: 'algo-040',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Climbing Stairs? Como resolve com DP e como se relaciona com Fibonacci?',
    hints: ['dp[i] = dp[i-1] + dp[i-2]', 'Base cases', 'Igual a Fibonacci'],
    explanation: `Climbing Stairs: n degraus, pode subir 1 ou 2 de cada vez. Quantas formas de chegar ao topo?
\`\`\`javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
// n=3: [1+1+1, 1+2, 2+1] = 3 formas
// Relação de Fibonacci: dp[n] = dp[n-1] + dp[n-2]
// O(n) tempo, O(1) espaço (espaço otimizado)
\`\`\``,
    tags: ['climbing-stairs', 'fibonacci', 'dp', 'espaco-otimizado', 'o-1'],
  },
  {
    id: 'algo-041',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a técnica Fast and Slow Pointer (Floyd\'s)? Resolva o problema de encontrar o meio de uma linked list.',
    hints: ['Slow: 1 passo', 'Fast: 2 passos', 'Quando fast chega ao fim, slow está no meio'],
    explanation: `Fast and Slow Pointer: slow avança 1 nó, fast avança 2. Quando fast chega ao fim, slow está no meio.
\`\`\`javascript
function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // slow aponta para o nó do meio
}
// Para lista ímpar: retorna o meio exato
// Para lista par: retorna o segundo do par do meio
// Aplicações: detectar ciclo, palíndromo de linked list
\`\`\``,
    tags: ['fast-slow-pointer', 'meio', 'linked-list', 'palindromo', 'ciclo'],
  },
  {
    id: 'algo-042',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma Circular Linked List? Quais são os casos de uso?',
    hints: ['Last.next aponta para head', 'Nenhum null no final', 'Round-robin'],
    explanation: 'Circular Linked List: o nó final aponta de volta para o head em vez de null. Singly ou doubly. Casos de uso: (1) Round-robin scheduling (processos em fila circular); (2) Buffer circular (streaming de dados); (3) Reprodução em loop (playlist). Detecção de lista circular vs bug: Floyd\'s cycle detection. Implementação: ao inserir ao final, `newNode.next = head`. Cuidado ao percorrer: use `do...while` para processar pelo menos um elemento antes de checar se voltou ao head.',
    tags: ['circular-linked-list', 'round-robin', 'buffer', 'scheduling', 'ciclo'],
  },
  {
    id: 'algo-043',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema House Robber? Resolva com programação dinâmica.',
    hints: ['Não pode roubar casas adjacentes', 'dp[i] = max de incluir ou não', 'O(n) tempo O(1) espaço'],
    explanation: `House Robber: máximo de dinheiro sem roubar casas adjacentes.
\`\`\`javascript
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const curr = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
// [2,7,9,3,1] → 12 (2+9+1)
// Relação: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
\`\`\``,
    tags: ['house-robber', 'dp', 'adjacente', 'otimizacao', 'o-1-espaco'],
  },
  {
    id: 'algo-044',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um LRU Cache? Implemente com O(1) para get e put.',
    hints: ['HashMap + Doubly Linked List', 'O(1) lookup e update', 'Evict least recently used'],
    explanation: `LRU Cache: remove o item menos recentemente usado quando cheio. O(1) via HashMap + DLL.
\`\`\`javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // key → node
    this.head = { prev: null, next: null }; // Dummy head (MRU)
    this.tail = { prev: null, next: null }; // Dummy tail (LRU)
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.remove(node); this.insertFront(node);
    return node.val;
  }
  put(key, val) {
    if (this.cache.has(key)) this.remove(this.cache.get(key));
    const node = { key, val };
    this.cache.set(key, node); this.insertFront(node);
    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this.remove(lru); this.cache.delete(lru.key);
    }
  }
  remove(node) { node.prev.next = node.next; node.next.prev = node.prev; }
  insertFront(node) {
    node.next = this.head.next; node.prev = this.head;
    this.head.next.prev = node; this.head.next = node;
  }
}
\`\`\``,
    tags: ['lru-cache', 'hashmap', 'doubly-linked-list', 'o-1', 'cache'],
  },
  {
    id: 'algo-045',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Merge Intervals problem? Resolva com sorting.',
    hints: ['Ordena por start', 'Compara com intervalo anterior', 'O(n log n)'],
    explanation: `Merge Intervals: dado array de intervalos, merge todos os sobrepostos.
\`\`\`javascript
function merge(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); // Ordena por start
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = result[result.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end); // Merge: expande o end
    } else {
      result.push([start, end]); // Sem sobreposição
    }
  }
  return result;
}
// [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]
\`\`\``,
    tags: ['merge-intervals', 'sorting', 'sobreposicao', 'array', 'o-n-log-n'],
  },
  {
    id: 'algo-046',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de anagramas? Como verificar se duas strings são anagramas?',
    hints: ['Mesmos caracteres com mesma frequência', 'Sort vs HashMap', 'O(n log n) vs O(n)'],
    explanation: `\`\`\`javascript
// Abordagem 1: Sort — O(n log n)
function isAnagram1(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Abordagem 2: HashMap — O(n) tempo, O(1) espaço (26 letras)
function isAnagram2(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const ch of s) count[ch] = (count[ch] || 0) + 1;
  for (const ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}
\`\`\``,
    tags: ['anagrama', 'strings', 'hashmap', 'sort', 'frequencia'],
  },
  {
    id: 'algo-047',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Product of Array Except Self? Resolva sem divisão.',
    hints: ['Prefix e suffix products', 'O(n) tempo, O(1) espaço extra', 'Dois passes'],
    explanation: `Para cada índice i, calcular o produto de todos os outros elementos sem usar divisão.
\`\`\`javascript
function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);
  // Passe 1: prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  // Passe 2: suffix products (multiplica ao result existente)
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}
// [1,2,3,4] → [24,12,8,6]
\`\`\``,
    tags: ['product-array', 'prefix-suffix', 'sem-divisao', 'o-n', 'dois-passes'],
  },
  {
    id: 'algo-048',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Implemente uma fila (Queue) usando duas pilhas (Stacks).',
    hints: ['Push stack e pop stack', 'Transferir quando pop stack vazia', 'O(1) amortizado'],
    explanation: `\`\`\`javascript
class QueueUsingStacks {
  pushStack = [];
  popStack = [];
  enqueue(val) { this.pushStack.push(val); }
  dequeue() {
    if (this.popStack.length === 0) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (this.popStack.length === 0) {
      while (this.pushStack.length) this.popStack.push(this.pushStack.pop());
    }
    return this.popStack[this.popStack.length - 1];
  }
  get size() { return this.pushStack.length + this.popStack.length; }
}
// dequeue: O(1) amortizado — cada elemento é movido no máximo uma vez
\`\`\``,
    tags: ['queue', 'stack', 'duas-pilhas', 'amortizado', 'data-structures'],
  },
  {
    id: 'algo-049',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é um Palindrome? Como verificar se uma string é palíndromo?',
    hints: ['Two pointers', 'Reverter e comparar', 'Ignorar non-alphanumeric'],
    explanation: `\`\`\`javascript
// Abordagem 1: Reverter
function isPalindrome1(s) { return s === s.split("").reverse().join(""); }

// Abordagem 2: Two pointers — O(n/2) comparações
function isPalindrome2(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;
}

// Variação: ignora non-alphanumeric (típico de entrevistas)
function isPalindromeString(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
\`\`\``,
    tags: ['palindromo', 'two-pointers', 'string', 'reverter', 'alphanumeric'],
  },
  {
    id: 'algo-050',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Breadth-First Search em árvore? Como calcular a altura de uma árvore binária?',
    hints: ['BFS: nível por nível com fila', 'DFS recursivo para altura', 'Contar níveis'],
    explanation: `\`\`\`javascript
// Altura com DFS (recursão):
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

// BFS com nível (usa fila):
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
\`\`\``,
    tags: ['bfs', 'arvore-binaria', 'altura', 'level-order', 'recursao'],
  },
  {
    id: 'algo-051',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Selection Sort? Compare com Insertion Sort.',
    hints: ['Seleciona mínimo e coloca no início', 'O(n²) sempre', 'Não estável'],
    explanation: 'Selection Sort: para cada posição i, encontra o mínimo em [i, n-1] e troca com o elemento em i. O(n²) em todos os casos — não se adapta a dados ordenados. Não é estável (pode trocar elementos iguais). Vantagem: faz no máximo O(n) trocas (vs O(n²) no Bubble Sort). Insertion Sort: mais rápido em arrays quase ordenados (O(n)); estável; melhores constantes. Para arrays pequenos e aleatórios: ambos similares. Em prática: prefira Insertion Sort — mais eficiente e estável.',
    tags: ['selection-sort', 'insertion-sort', 'comparacao', 'trocas', 'estabilidade'],
  },
  {
    id: 'algo-052',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema do Container With Most Water? Resolva com two pointers.',
    hints: ['Área = min(altura) * largura', 'Mover o menor ponteiro', 'O(n)'],
    explanation: `Container With Most Water: dado array de alturas, encontrar dois índices que formam o container de maior volume.
\`\`\`javascript
function maxArea(height) {
  let left = 0, right = height.length - 1, max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    // Move o ponteiro da barra menor (barra maior não pode ajudar mais)
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}
// [1,8,6,2,5,4,8,3,7] → 49
\`\`\``,
    tags: ['container-water', 'two-pointers', 'greedy', 'area', 'o-n'],
  },
  {
    id: 'algo-053',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Monotonic Stack? Quando usar?',
    hints: ['Elementos em ordem crescente ou decrescente', 'Next Greater Element', 'O(n)'],
    explanation: `Monotonic Stack: pilha que mantém elementos em ordem (crescente ou decrescente). Ao inserir, remove elementos que violam a ordem. O(n) pois cada elemento é inserido/removido no máximo uma vez. Problema clássico: Next Greater Element.
\`\`\`javascript
function nextGreaterElement(nums) {
  const result = Array(nums.length).fill(-1);
  const stack = []; // Índices
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length-1]] < nums[i]) {
      result[stack.pop()] = nums[i]; // nums[i] é o próximo maior
    }
    stack.push(i);
  }
  return result;
}
\`\`\`
Também: Largest Rectangle in Histogram, Daily Temperatures.`,
    tags: ['monotonic-stack', 'next-greater', 'histogram', 'o-n', 'pattern'],
  },
  {
    id: 'algo-054',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema 3Sum? Resolva de forma eficiente.',
    hints: ['Sort + Two Pointers', 'Evitar duplicatas', 'O(n²)'],
    explanation: `3Sum: encontrar todos os triplets que somam zero.
\`\`\`javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue; // Skip duplicatas
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left+1]) left++;
        while (left < right && nums[right] === nums[right-1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
\`\`\``,
    tags: ['three-sum', 'two-pointers', 'sort', 'duplicatas', 'o-n2'],
  },
  {
    id: 'algo-055',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Valid Parentheses? Use uma Stack.',
    hints: ['Stack para abertura', 'Fechar deve corresponder', 'Stack vazia no final = válido'],
    explanation: `Valid Parentheses: verificar se string de parênteses é válida.
\`\`\`javascript
function isValid(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };
  for (const ch of s) {
    if (!map[ch]) {
      stack.push(ch); // Abertura: empilha
    } else {
      if (stack.pop() !== map[ch]) return false; // Fechamento: verifica topo
    }
  }
  return stack.length === 0; // Stack vazia = todos fechados
}
// "([])" → true
// "([)]" → false
// Complexidade: O(n) tempo, O(n) espaço
\`\`\``,
    tags: ['parentheses', 'stack', 'validacao', 'matching', 'o-n'],
  },
  {
    id: 'algo-056',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Reverse Linked List? Implemente iterativamente e recursivamente.',
    hints: ['prev, current, next pointers', 'Cuidado com tail', 'O(n)'],
    explanation: `\`\`\`javascript
// Iterativo:
function reverseList(head) {
  let prev = null, current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev; // Novo head
}

// Recursivo:
function reverseListRec(head) {
  if (!head || !head.next) return head;
  const newHead = reverseListRec(head.next);
  head.next.next = head; // Filho aponta de volta
  head.next = null;       // Remove referência original
  return newHead;
}
// Ambos: O(n) tempo, recursivo O(n) espaço (stack)
\`\`\``,
    tags: ['reverse-linked-list', 'iterativo', 'recursivo', 'pointers', 'o-n'],
  },
  {
    id: 'algo-057',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Number of Islands? Use DFS/BFS.',
    hints: ['Grid 2D', 'Marcar visitados', 'DFS recursive em cada "1"'],
    explanation: `Number of Islands: contar ilhas em grid de 0s e 1s (DFS em cada célula "1" não visitada).
\`\`\`javascript
function numIslands(grid) {
  let count = 0;
  function dfs(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") return;
    grid[i][j] = "0"; // Marca como visitado
    dfs(i+1, j); dfs(i-1, j); dfs(i, j+1); dfs(i, j-1);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") { dfs(i, j); count++; }
    }
  }
  return count;
}
// O(m*n) tempo e espaço
\`\`\``,
    tags: ['number-of-islands', 'dfs', 'grid', '2d', 'matrix'],
  },
  {
    id: 'algo-058',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Binary Search em uma rotated sorted array?',
    hints: ['Uma metade sempre ordenada', 'Verificar qual metade', 'O(log n)'],
    explanation: `Search in Rotated Sorted Array: array ordenado foi rotacionado. Use binary search modificado.
\`\`\`javascript
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    // Metade esquerda está ordenada?
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else { // Metade direita está ordenada
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
\`\`\``,
    tags: ['rotated-array', 'binary-search', 'sorted', 'o-log-n', 'modificado'],
  },
  {
    id: 'algo-059',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a função de hashing MD5/SHA? Para que serve em algoritmos?',
    hints: ['Digest de dados', 'Determinístico', 'Não criptográfico (MD5) vs criptográfico (SHA-256)'],
    explanation: 'Hash functions mapeiam dados de tamanho arbitrário para digest de tamanho fixo. MD5: 128 bits, rápido, mas considerado inseguro criptograficamente (colisões encontradas). SHA-256: 256 bits, parte da família SHA-2, seguro. Em algoritmos: (1) Verificação de integridade de dados (checksums); (2) Hashing de senhas (bcrypt, Argon2 são melhores — incluem salt e são lentos intencionalmente); (3) Estruturas de dados (hash tables); (4) Caching por conteúdo (cache keys). Em JavaScript: Web Crypto API — await crypto.subtle.digest("SHA-256", data).',
    tags: ['hash', 'md5', 'sha256', 'criptografia', 'integridade'],
  },
  {
    id: 'algo-060',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    text: 'O que são Bloom Filters? Como funcionam e qual é o caso de uso?',
    hints: ['Estrutura probabilística', 'False positives possíveis', 'No false negatives'],
    explanation: 'Bloom Filter: estrutura de dados probabilística para testar se um elemento pertence a um conjunto. Usa múltiplos hash functions e um array de bits. Inserir: marca múltiplos bits. Verificar: todos os bits marcados → "possivelmente está" (pode ser false positive); qualquer bit não marcado → "definitivamente não está" (no false negatives). Uso de memória muito menor que Set. Casos de uso: verificar URLs maliciosas em browsers (Google Safe Browsing), deduplicação em sistemas distribuídos, cache de banco de dados (evitar queries desnecessárias).',
    tags: ['bloom-filter', 'probabilistico', 'false-positive', 'memoria', 'distribuido'],
  },
  {
    id: 'algo-061',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Jump Game? Resolva com greedy.',
    hints: ['Chegou até o final?', 'maxReach variável', 'O(n)'],
    explanation: `Jump Game: dado array onde nums[i] é o salto máximo a partir de i, determine se pode chegar ao último índice.
\`\`\`javascript
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // Posição inalcançável
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}
// [2,3,1,1,4] → true (2→3→fim)
// [3,2,1,0,4] → false (fica preso no índice 3)
// Greedy: sempre mantém o alcance máximo
\`\`\``,
    tags: ['jump-game', 'greedy', 'alcance', 'o-n', 'array'],
  },
  {
    id: 'algo-062',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Best Time to Buy and Sell Stock? Resolva em O(n).',
    hints: ['Mínimo até agora', 'Máximo lucro', 'Uma passagem'],
    explanation: `Best Time: comprar em um dia, vender em outro posterior, maximizar lucro.
\`\`\`javascript
function maxProfit(prices) {
  let minPrice = Infinity, maxProfit = 0;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
// [7,1,5,3,6,4] → 5 (compra em 1, vende em 6)
// [7,6,4,3,1] → 0 (preços só caem)
// Uma passagem: mantém o mínimo visto e calcula lucro em cada ponto
\`\`\``,
    tags: ['stock', 'buy-sell', 'greedy', 'o-n', 'lucro'],
  },
  {
    id: 'algo-063',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Trapping Rain Water? Resolva com two pointers O(n) O(1).',
    hints: ['Altura máxima esquerda e direita', 'Mínimo entre as duas', 'Mover o menor ponteiro'],
    explanation: `Trapping Rain Water: quanto de água pode ser preso entre barras.
\`\`\`javascript
function trap(height) {
  let left = 0, right = height.length - 1, water = 0;
  let maxLeft = 0, maxRight = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) maxLeft = height[left];
      else water += maxLeft - height[left];
      left++;
    } else {
      if (height[right] >= maxRight) maxRight = height[right];
      else water += maxRight - height[right];
      right--;
    }
  }
  return water;
}
// [0,1,0,2,1,0,1,3,2,1,2,1] → 6
\`\`\``,
    tags: ['rain-water', 'two-pointers', 'o-1-espaço', 'agua', 'altura'],
  },
  {
    id: 'algo-064',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma permutação e como gerar todas as permutações de um array?',
    hints: ['backtracking', 'Swap no índice', 'Recursão com índice atual'],
    explanation: `Permutações: todas as ordenações possíveis de um conjunto. N elementos = N! permutações.
\`\`\`javascript
function permutations(arr) {
  const result = [];
  function backtrack(start) {
    if (start === arr.length) { result.push([...arr]); return; }
    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // Undo swap
    }
  }
  backtrack(0);
  return result;
}
// [1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
// Complexidade: O(n * n!)
\`\`\``,
    tags: ['permutacoes', 'backtracking', 'recursao', 'combinatoria', 'swap'],
  },
  {
    id: 'algo-065',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Subset Sum? Como resolver com DP?',
    hints: ['dp[i][s]: possível usar i itens para atingir soma s', 'Boolean DP', 'O(n*sum)'],
    explanation: `Subset Sum: existe subconjunto de nums que soma para target?
\`\`\`javascript
function canSum(nums, target) {
  const dp = Array(target + 1).fill(false);
  dp[0] = true; // Soma 0 sempre possível (subconjunto vazio)
  for (const num of nums) {
    // Iterar de trás para frente para não usar mesmo num duas vezes
    for (let s = target; s >= num; s--) {
      if (dp[s - num]) dp[s] = true;
    }
  }
  return dp[target];
}
// [3, 1, 5, 9, 12], target=8 → true (3+5)
// O(n*target) tempo, O(target) espaço
\`\`\``,
    tags: ['subset-sum', 'dp', 'booleano', 'subconjunto', 'target'],
  },
  {
    id: 'algo-066',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é um Binary Indexed Tree (Fenwick Tree)?',
    hints: ['Prefix sum com update O(log n)', 'Mais simples que Segment Tree', 'Bit manipulation'],
    explanation: 'Fenwick Tree: estrutura para calcular prefix sums com update O(log n) e query O(log n). Mais simples de implementar que Segment Tree para problemas de prefix sum. Cada índice i guarda a soma de um intervalo cujo tamanho é determinado por LSB (Least Significant Bit) de i. Para consultar a soma de [1..i]: some valores em posições i, i - LSB(i), ... Para atualizar posição i: atualize i, i + LSB(i), .... Útil para: número de inversões, rank de elementos, histogramas com updates.',
    tags: ['fenwick-tree', 'binary-indexed', 'prefix-sum', 'o-log-n', 'bit'],
  },
  {
    id: 'algo-067',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de Two Sum II (array ordenado)?',
    hints: ['Two pointers', 'Array ordenado', 'Move esquerda se soma < target'],
    explanation: `Two Sum II: array já ordenado — retornar índices (1-based) do par que soma target.
\`\`\`javascript
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
// [2,7,11,15], target=9 → [1,2]
// Complexidade: O(n) tempo, O(1) espaço
// Por que funciona: se soma < target, precisa de número maior → move left
\`\`\``,
    tags: ['two-sum-ii', 'two-pointers', 'sorted', 'o-n', 'indices'],
  },
  {
    id: 'algo-068',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de Floyd-Warshall? Como difere do Dijkstra?',
    hints: ['All-pairs shortest path', 'DP entre todos os pares', 'Aceita arestas negativas'],
    explanation: 'Floyd-Warshall: encontra o menor caminho entre TODOS os pares de vértices em O(V³). Aceita arestas negativas (mas não ciclos negativos). DP: dp[i][j][k] = menor caminho de i para j usando vértices 1..k como intermediários. Simplificado: para cada vértice k como intermediário, verifique se passar por k encurta o caminho entre i e j: dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j]). Diferença do Dijkstra: Dijkstra é single-source (um vértice para todos); Floyd-Warshall é all-pairs. Use Floyd-Warshall quando V é pequeno ou precisa de todos os caminhos.',
    tags: ['floyd-warshall', 'dijkstra', 'all-pairs', 'arestas-negativas', 'dp'],
  },
  {
    id: 'algo-069',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma "Dummy Node" e por que é usada em problemas de linked list?',
    hints: ['Nó sentinela', 'Simplifica edge cases', 'Head pode mudar'],
    explanation: 'Dummy node (sentinela): nó fictício no início da linked list para simplificar operações. Por que usar: ao deletar ou inserir no início, o head pode mudar — tratar esse caso especial adiciona complexidade. Com dummy node, o head real sempre é dummy.next, eliminando o caso especial. Exemplo: deletar nó com valor val. Com dummy: const dummy = { next: head }; deixa percorrer sem verificar se cur é null. Retorne dummy.next no final. Amplamente usado em: Merge Two Sorted Lists, Remove Nth Node, Add Two Numbers.',
    tags: ['dummy-node', 'sentinel', 'linked-list', 'simplificacao', 'edge-cases'],
  },
  {
    id: 'algo-070',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Word Search? Resolva com backtracking no grid.',
    hints: ['DFS no grid', 'Marcar visitados', 'Desfazer ao retornar'],
    explanation: `Word Search: dado grid de caracteres, verificar se a palavra existe conectando células adjacentes.
\`\`\`javascript
function exist(board, word) {
  const rows = board.length, cols = board[0].length;
  function dfs(r, c, idx) {
    if (idx === word.length) return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[idx]) return false;
    const temp = board[r][c];
    board[r][c] = "#"; // Marca visitado
    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);
    board[r][c] = temp; // Desfaz
    return found;
  }
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (dfs(r, c, 0)) return true;
  return false;
}
\`\`\``,
    tags: ['word-search', 'backtracking', 'dfs', 'grid', 'visitados'],
  },
  {
    id: 'algo-071',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Longest Palindromic Substring? Resolva com expand around center.',
    hints: ['Expandir a partir do centro', 'Palindromo ímpar e par', 'O(n²)'],
    explanation: `Expandir a partir de cada centro possível:
\`\`\`javascript
function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
    if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }
  }
  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // Palindromo ímpar ("aba")
    expand(i, i + 1); // Palindromo par ("abba")
  }
  return s.slice(start, start + maxLen);
}
// "babad" → "bab" ou "aba"; "cbbd" → "bb"
// O(n²) tempo, O(1) espaço (vs Manacher O(n))
\`\`\``,
    tags: ['palindromo', 'expand-center', 'substring', 'o-n2', 'string'],
  },
  {
    id: 'algo-072',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Edit Distance (Levenshtein)? Resolva com DP.',
    hints: ['dp[i][j]: custo para converter s1[:i] em s2[:j]', 'Operações: insert, delete, replace', 'O(m*n)'],
    explanation: `Edit Distance: mínimo de operações (insert, delete, replace) para transformar s1 em s2.
\`\`\`javascript
function minDistance(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array(n + 1).fill(0).map((_, j) => i || j));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1]; // Caracteres iguais
      else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      // delete (i-1,j), insert (i,j-1), replace (i-1,j-1)
    }
  }
  return dp[m][n];
}
// "horse" → "ros" = 3 operações
\`\`\``,
    tags: ['edit-distance', 'levenshtein', 'dp', 'string', 'operacoes'],
  },
  {
    id: 'algo-073',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é uma Árvore de Expressão? Como avaliar expressões matemáticas?',
    hints: ['Nó interno: operador', 'Folha: operando', 'Recursão pós-ordem'],
    explanation: `Expression Tree: árvore binária onde folhas são operandos e nós internos são operadores. Avaliação com pós-ordem traversal (esquerda, direita, raiz):
\`\`\`javascript
function evaluate(node) {
  if (!node.left && !node.right) return node.value; // Folha
  const left = evaluate(node.left);
  const right = evaluate(node.right);
  switch (node.operator) {
    case "+": return left + right;
    case "-": return left - right;
    case "*": return left * right;
    case "/": return left / right;
  }
}
// Árvore para (3 + 2) * 4:
// Node(*) -> Node(+) [esq] -> Node(4) [dir]
// Node(+) -> Node(3) [esq] -> Node(2) [dir]
\`\`\`
Base para compiladores e calculadoras.`,
    tags: ['expression-tree', 'pos-ordem', 'operadores', 'recursao', 'compilador'],
  },
  {
    id: 'algo-074',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Counting Sort? Quando é mais eficiente que comparison-based sorts?',
    hints: ['O(n+k)', 'Range pequeno e conhecido', 'Estável'],
    explanation: `Counting Sort: conta ocorrências de cada valor para ordenar. O(n+k) onde k é o range de valores.
\`\`\`javascript
function countingSort(arr, max) {
  const count = Array(max + 1).fill(0);
  arr.forEach(x => count[x]++);
  // Acumular para posições
  for (let i = 1; i <= max; i++) count[i] += count[i-1];
  const output = Array(arr.length);
  // Percorrer de trás para frente (estável)
  for (let i = arr.length - 1; i >= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }
  return output;
}
\`\`\`
Quando usar: range pequeno e conhecido (idades, notas 0-100, caracteres ASCII). Não funciona para floats. Base do Radix Sort.`,
    tags: ['counting-sort', 'o-n+k', 'estavel', 'range', 'linear'],
  },
  {
    id: 'algo-075',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Minimum Path Sum em um grid? Resolva com DP.',
    hints: ['dp[i][j] = min caminho até (i,j)', 'Só pode ir direita ou baixo', 'Inicializar bordas'],
    explanation: `Minimum Path Sum: encontrar caminho de (0,0) a (m-1,n-1) com menor soma (apenas direita/baixo).
\`\`\`javascript
function minPathSum(grid) {
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  // Primeira linha (só pode vir da esquerda)
  for (let j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j];
  // Primeira coluna (só pode vir de cima)
  for (let i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
  // Restante
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
  return dp[m-1][n-1];
}
\`\`\``,
    tags: ['minimum-path', 'grid', 'dp', 'caminhos', 'dinamico'],
  },
  {
    id: 'algo-076',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Radix Sort? Explique a implementação e complexidade.',
    hints: ['Ordena dígito por dígito', 'O(d*n)', 'Estável', 'Counting sort como subroutine'],
    explanation: `Radix Sort: ordena números processando um dígito por vez (do menos significativo ao mais).
\`\`\`javascript
function radixSort(arr) {
  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    // Counting sort pelo dígito atual
    const output = Array(arr.length);
    const count = Array(10).fill(0);
    arr.forEach(n => count[Math.floor(n / exp) % 10]++);
    for (let i = 1; i < 10; i++) count[i] += count[i-1];
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[--count[digit]] = arr[i];
    }
    arr = output;
  }
  return arr;
}
// O(d*n) onde d = número de dígitos. Para 32-bit int: d = 10 = constante → O(n)
\`\`\``,
    tags: ['radix-sort', 'digito', 'counting-sort', 'estavel', 'linear'],
  },
  {
    id: 'algo-077',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Serialize e Deserialize uma Árvore Binária?',
    hints: ['BFS com null markers', 'Pré-ordem com null', 'String para reconstruir'],
    explanation: `Serialize: BFS com null para posições vazias. Deserialize: reconstrói da string.
\`\`\`javascript
function serialize(root) {
  if (!root) return "null";
  const queue = [root], result = [];
  while (queue.length) {
    const node = queue.shift();
    if (!node) { result.push("null"); continue; }
    result.push(node.val);
    queue.push(node.left, node.right);
  }
  return result.join(",");
}
function deserialize(data) {
  const vals = data.split(",");
  if (vals[0] === "null") return null;
  const root = new TreeNode(parseInt(vals[0]));
  const queue = [root];
  let i = 1;
  while (queue.length) {
    const node = queue.shift();
    node.left = vals[i] === "null" ? null : new TreeNode(parseInt(vals[i]));
    if (node.left) queue.push(node.left);
    i++;
    node.right = vals[i] === "null" ? null : new TreeNode(parseInt(vals[i]));
    if (node.right) queue.push(node.right);
    i++;
  }
  return root;
}
\`\`\``,
    tags: ['serialize', 'deserialize', 'arvore', 'bfs', 'string'],
  },
  {
    id: 'algo-078',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Majority Element? O algoritmo de Boyer-Moore Voting.',
    hints: ['Elemento com mais de n/2 ocorrências', 'O(n) O(1)', 'Candidato e contador'],
    explanation: `Boyer-Moore Voting: encontra o elemento majoritário em O(n) O(1).
\`\`\`javascript
function majorityElement(nums) {
  let candidate = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) { candidate = nums[i]; count = 1; }
    else if (nums[i] === candidate) count++;
    else count--;
  }
  return candidate; // Correto se garantido que existe majoritário
}
// [2,2,1,1,1,2,2] → 2
// Intuição: candidatos se "cancelam" entre si — o majoritário sobrevive
\`\`\``,
    tags: ['majority', 'boyer-moore', 'voting', 'o-1-espaco', 'counting'],
  },
  {
    id: 'algo-079',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Unique Paths em um grid? Resolva com DP e combinatória.',
    hints: ['m*n grid', 'Direita ou baixo', 'C(m+n-2, m-1)'],
    explanation: `Unique Paths: quantos caminhos únicos de (0,0) a (m-1,n-1) indo apenas direita/baixo.
\`\`\`javascript
// DP O(m*n):
function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
  return dp[m-1][n-1];
}

// Combinatória O(min(m,n)):
function uniquePathsMath(m, n) {
  // Total de passos: m+n-2. Escolher m-1 para baixo = C(m+n-2, m-1)
  let result = 1;
  for (let i = 0; i < Math.min(m-1, n-1); i++) {
    result = result * (m + n - 2 - i) / (i + 1);
  }
  return Math.round(result);
}
\`\`\``,
    tags: ['unique-paths', 'dp', 'combinatoria', 'grid', 'matematica'],
  },
  {
    id: 'algo-080',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Median of Two Sorted Arrays? Resolva em O(log(m+n)).',
    hints: ['Binary search na menor array', 'Particionar', 'O(log(min(m,n)))'],
    explanation: `Encontrar mediana de duas arrays ordenadas em O(log(min(m,n))):
Abordagem O(log n): binary search para encontrar a partição correta. Particione as duas arrays de forma que os elementos à esquerda de ambas sejam <= elementos à direita. A mediana é max(maxLeft) se total ímpar, ou (max(maxLeft)+min(minRight))/2 se par. Casos especiais: quando a partição vai além dos limites, use -Infinity/+Infinity. Implementação completa requer cuidado com edge cases. Complexidade: O(log(min(m,n))). Para entrevistas: comece com abordagem O((m+n)log(m+n)) (merge + mediana) e otimize para O(log n).`,
    tags: ['mediana', 'sorted-arrays', 'binary-search', 'o-log-n', 'particao'],
  },
  {
    id: 'algo-081',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Reverse String in-place? E Reverse Words in a String?',
    hints: ['Two pointers no array', 'Trim e split', 'Filter vazio'],
    explanation: `\`\`\`javascript
// Reverse String in-place:
function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; right--;
  }
}

// Reverse Words (sem espaços extras):
function reverseWords(s) {
  return s.trim().split(/\\s+/).reverse().join(" ");
}
// "  the  sky is  blue  " → "blue is sky the"
// trim: remove espaços nas bordas
// split(/\\s+/): divide por qualquer espaço (múltiplos)
// filter vazio desnecessário com /\\s+/
\`\`\``,
    tags: ['reverse-string', 'reverse-words', 'two-pointers', 'split', 'o-n'],
  },
  {
    id: 'algo-082',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é verificar se uma linked list é um palíndromo? Implemente em O(n) O(1).',
    hints: ['Encontrar meio', 'Reverter metade', 'Comparar', 'Restaurar (opcional)'],
    explanation: `Palíndromo em linked list O(n) tempo O(1) espaço:
\`\`\`javascript
function isPalindrome(head) {
  // 1. Encontrar meio (slow/fast pointers)
  let slow = head, fast = head;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  // 2. Reverter segunda metade
  let prev = null, curr = slow;
  while (curr) { const next = curr.next; curr.next = prev; prev = curr; curr = next; }
  // 3. Comparar
  let left = head, right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next; right = right.next;
  }
  return true;
}
\`\`\``,
    tags: ['palindromo', 'linked-list', 'reverter', 'slow-fast', 'o-1'],
  },
  {
    id: 'algo-083',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de encontrar todos os subsets (Power Set)?',
    hints: ['2^n subsets', 'Backtracking ou bit manipulation', 'O(n*2^n)'],
    explanation: `Power Set: todos os subconjuntos possíveis.
\`\`\`javascript
// Abordagem iterativa:
function subsets(nums) {
  const result = [[]];
  for (const num of nums) {
    // Para cada subset existente, criar novo com num adicionado
    const newSubsets = result.map(s => [...s, num]);
    result.push(...newSubsets);
  }
  return result;
}
// [1,2,3] → [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
// 2^3 = 8 subsets

// Alternativa: bit manipulation
// Para n=3: 0b000 a 0b111 (0 a 7)
// Se bit i está ativo, inclui nums[i]
\`\`\``,
    tags: ['subsets', 'power-set', 'backtracking', 'bit-manipulation', '2-n'],
  },
  {
    id: 'algo-084',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de encontrar pares com diferença K em um array?',
    hints: ['HashSet', 'Sort + Two Pointers', 'Contagem de duplicatas'],
    explanation: `Encontrar pares com diferença |a-b| = k:
\`\`\`javascript
function findPairsWithDiffK(arr, k) {
  if (k < 0) return 0;
  const set = new Set(arr);
  const uniquePairs = new Set();
  for (const num of arr) {
    // Procurar num + k ou num - k no set
    if (set.has(num + k)) {
      const pair = [Math.min(num, num+k), Math.max(num, num+k)];
      uniquePairs.add(pair.toString());
    }
  }
  return uniquePairs.size;
}
// [3,1,4,1,5], k=2 → 2 pares: (1,3) e (3,5)
// O(n) tempo, O(n) espaço
\`\`\``,
    tags: ['pares', 'diferenca-k', 'hashset', 'two-pointers', 'contagem'],
  },
  {
    id: 'algo-085',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma Max Heap e como implementar `heapifyUp` e `heapifyDown`?',
    hints: ['Array representation', 'Parent: (i-1)/2', 'Children: 2i+1 e 2i+2'],
    explanation: `Max Heap em array:
\`\`\`javascript
class MaxHeap {
  heap = [];
  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }
  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  heapifyUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] < this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else break;
    }
  }
  heapifyDown(i) {
    while (2*i+1 < this.heap.length) {
      let largest = i, l = 2*i+1, r = 2*i+2;
      if (l < this.heap.length && this.heap[l] > this.heap[largest]) largest = l;
      if (r < this.heap.length && this.heap[r] > this.heap[largest]) largest = r;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }
}
\`\`\``,
    tags: ['max-heap', 'heapifyUp', 'heapifyDown', 'array', 'implementacao'],
  },
  {
    id: 'algo-086',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema Kth Largest Element? Resolva com min-heap e quickselect.',
    hints: ['Min-heap de tamanho k', 'Quickselect O(n) médio', 'Sem ordenação completa'],
    explanation: `Kth Largest: sem ordenar tudo O(n log k) com min-heap:
\`\`\`javascript
// Min-heap size k: O(n log k)
function kthLargest(nums, k) {
  // Manter heap com k maiores elementos
  const heap = new MinHeap();
  for (const num of nums) {
    heap.insert(num);
    if (heap.size > k) heap.extractMin(); // Remove o menor
  }
  return heap.peek(); // O menor dos k maiores = kth largest
}

// Quickselect: O(n) médio
function quickSelect(nums, k) {
  const target = nums.length - k;
  function partition(l, r) {
    const pivot = nums[r];
    let idx = l;
    for (let i = l; i < r; i++) if (nums[i] <= pivot) [nums[idx++], nums[i]] = [nums[i], nums[idx]];
    [nums[idx], nums[r]] = [nums[r], nums[idx]];
    return idx;
  }
  let l = 0, r = nums.length - 1;
  while (l <= r) { const p = partition(l, r); if (p === target) return nums[p]; if (p < target) l = p+1; else r = p-1; }
}
\`\`\``,
    tags: ['kth-largest', 'min-heap', 'quickselect', 'o-n-log-k', 'particao'],
  },
  {
    id: 'algo-087',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de ordenação TimSort? Por que é usado em JavaScript nativo?',
    hints: ['Merge Sort + Insertion Sort', 'Runs', 'Adaptativo'],
    explanation: 'TimSort: algoritmo híbrido (Merge Sort + Insertion Sort) desenvolvido por Tim Peters para Python, usado em Java, Python e JavaScript (Array.sort()). Funcionamento: (1) Divide o array em "runs" — sequências já ordenadas (crescente ou decrescente); (2) Runs menores que 64 elementos usam Insertion Sort (mais rápido para pequenos); (3) Runs são mergeadas com Merge Sort. Vantagens: O(n log n) pior caso, O(n) melhor caso (array quase ordenado), estável, adaptativo (aproveita ordenações existentes). Por isso é perfeito para dados do mundo real que frequentemente têm padrões.',
    tags: ['timsort', 'merge-sort', 'insertion-sort', 'adaptativo', 'javascript-sort'],
  },
  {
    id: 'algo-088',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de Remove Duplicates from Sorted Array in-place?',
    hints: ['Dois ponteiros', 'slow incrementa apenas em elemento único', 'O(1) espaço'],
    explanation: `Remove duplicatas in-place (array ordenado):
\`\`\`javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // Sobrescreve a posição seguinte
    }
  }
  return slow + 1; // Comprimento do array sem duplicatas
}
// [1,1,2,3,3,4] → modifica array para [1,2,3,4,...] e retorna 4
// Os elementos após posição 3 são irrelevantes
// O(n) tempo, O(1) espaço
\`\`\``,
    tags: ['remove-duplicatas', 'sorted', 'two-pointers', 'in-place', 'o-1'],
  },
  {
    id: 'algo-089',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Group Anagrams? Resolva com Map.',
    hints: ['Sorted string como chave', 'Ou frequency array', 'Agrupar por chave'],
    explanation: `Group Anagrams: agrupar strings que são anagramas entre si.
\`\`\`javascript
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join(""); // "eat" → "aet"
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
// ["eat","tea","tan","ate","nat","bat"]
// → [["eat","tea","ate"],["tan","nat"],["bat"]]

// Alternativa O(n*k) com frequency array como chave:
// count de 26 caracteres separados por #: "1#0#0#..."
\`\`\``,
    tags: ['group-anagrams', 'hashmap', 'sort-key', 'anagrama', 'agrupamento'],
  },
  {
    id: 'algo-090',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o algoritmo de Topological Sort com Kahn\'s Algorithm?',
    hints: ['In-degree', 'Fila BFS', 'Detecta ciclos', 'Dependências'],
    explanation: `Kahn's Algorithm para Topological Sort:
\`\`\`javascript
function topologicalSort(numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    inDegree[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  return order.length === numCourses ? order : []; // [] = ciclo detectado!
}
\`\`\``,
    tags: ['topological-sort', 'kahns', 'in-degree', 'dag', 'ciclo'],
  },
  {
    id: 'algo-091',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Fibonacci com memoização vs tabulação? Compare as abordagens.',
    hints: ['Top-down vs bottom-up', 'Recursão + cache vs iterativo + tabela', 'Tradeoffs'],
    explanation: `\`\`\`javascript
// Memoização (top-down): recursão + cache
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
}

// Tabulação (bottom-up): iterativo
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
  return dp[n];
}

// Espaço otimizado O(1):
function fibOpt(n) {
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) [a, b] = [b, a+b];
  return b;
}
// Memoização: natural para problemas com muitos subproblemas
// Tabulação: sem overhead de recursão, melhor performance
\`\`\``,
    tags: ['fibonacci', 'memoizacao', 'tabulacao', 'top-down', 'bottom-up'],
  },
  {
    id: 'algo-092',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de rotacionar um array? Implemente in-place.',
    hints: ['Reverter subarray', 'Três reversões', 'O(n) O(1)'],
    explanation: `Rotate Array: rotacionar k posições à direita in-place com O(1) espaço extra.
\`\`\`javascript
function rotate(nums, k) {
  k = k % nums.length; // k pode ser maior que length
  function reverse(l, r) {
    while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }
  }
  // Truque das 3 reversões:
  reverse(0, nums.length - 1); // Reverte tudo
  reverse(0, k - 1);           // Reverte os primeiros k
  reverse(k, nums.length - 1); // Reverte o restante
}
// [1,2,3,4,5,6,7], k=3 → [5,6,7,1,2,3,4]
// Passo 1: [7,6,5,4,3,2,1]
// Passo 2: [5,6,7,4,3,2,1]
// Passo 3: [5,6,7,1,2,3,4]
\`\`\``,
    tags: ['rotate-array', 'reversao', 'in-place', 'o-1-espaco', 'truque'],
  },
  {
    id: 'algo-093',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é "Divide and Conquer"? Explique o paradigma com exemplos.',
    hints: ['Dividir em subproblemas', 'Resolver recursivamente', 'Combinar resultados'],
    explanation: 'Divide and Conquer: (1) Dividir o problema em subproblemas menores do mesmo tipo; (2) Resolver cada subproblema recursivamente (base case quando pequeno o suficiente); (3) Combinar as soluções dos subproblemas. Exemplos: (1) Merge Sort: dividir array ao meio, ordenar cada metade, combinar; (2) Binary Search: dividir ao meio, resolver em uma metade; (3) Quick Sort: particionar, ordenar cada parte; (4) Strassen matrix multiplication; (5) Closest Pair of Points. Master Theorem: T(n) = aT(n/b) + O(n^d) determina a complexidade.',
    tags: ['divide-conquer', 'recursao', 'merge-sort', 'binary-search', 'paradigma'],
  },
  {
    id: 'algo-094',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Missing Number? Resolva com XOR e com soma.',
    hints: ['XOR de 0..n cancelam pares', 'Soma esperada - soma real', 'O(n) O(1)'],
    explanation: `Missing Number: dado array com n números de 0..n sem um elemento, encontrar o faltante.
\`\`\`javascript
// Com XOR: n XOR (todos os elementos) = faltante
function missingNumber(nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i]; // XOR do índice com o valor
  }
  return result;
}
// Com soma: esperada - real
function missingNumberSum(nums) {
  const n = nums.length;
  const expected = n * (n + 1) / 2; // Soma de 0..n
  const actual = nums.reduce((a, b) => a + b, 0);
  return expected - actual;
}
// Ambos: O(n) tempo, O(1) espaço
\`\`\``,
    tags: ['missing-number', 'xor', 'soma-gaussiana', 'o-1', 'bit-manipulation'],
  },
  {
    id: 'algo-095',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Spiral Matrix? Como percorrer em espiral?',
    hints: ['Quatro ponteiros de borda', 'top, bottom, left, right', 'Reduzir a cada volta'],
    explanation: `Spiral Matrix: percorrer uma matrix em ordem espiral.
\`\`\`javascript
function spiralOrder(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }
  return result;
}
\`\`\``,
    tags: ['spiral-matrix', 'matrix', 'four-pointers', 'percurso', 'grid'],
  },
  {
    id: 'algo-096',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de String Compression? Implemente a codificação run-length.',
    hints: ['Contar caracteres consecutivos', 'Escrever char + count', 'Só comprimir se menor'],
    explanation: `Run-Length Encoding: comprimir "aabcccdddd" em "a2bc3d4".
\`\`\`javascript
function compress(chars) {
  let write = 0, read = 0;
  while (read < chars.length) {
    const char = chars[read];
    let count = 0;
    while (read < chars.length && chars[read] === char) { read++; count++; }
    chars[write++] = char;
    if (count > 1) {
      for (const digit of count.toString()) chars[write++] = digit;
    }
  }
  return write; // Comprimento do array comprimido
}
// In-place no array original
// O(n) tempo, O(1) espaço extra
// "aabcccdddd" → "a2bc3d4", length = 7
\`\`\``,
    tags: ['run-length', 'compressao', 'string', 'in-place', 'o-1'],
  },
  {
    id: 'algo-097',
    domain: 'data_structures',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma Circular Queue (Ring Buffer)? Como implementar?',
    hints: ['Array fixo com wrap-around', 'head e tail pointers', 'isFull e isEmpty'],
    explanation: `Circular Queue: array de tamanho fixo com comportamento FIFO usando índices circulares.
\`\`\`javascript
class CircularQueue {
  constructor(k) { this.data = Array(k); this.head = -1; this.tail = -1; this.size = 0; this.capacity = k; }
  enqueue(val) {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.capacity;
    this.data[this.tail] = val;
    if (this.head === -1) this.head = this.tail;
    this.size++;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) { this.head = this.tail = -1; }
    else { this.head = (this.head + 1) % this.capacity; }
    this.size--;
    return true;
  }
  isFull() { return this.size === this.capacity; }
  isEmpty() { return this.size === 0; }
}
\`\`\``,
    tags: ['circular-queue', 'ring-buffer', 'head-tail', 'wrap-around', 'fifo'],
  },
  {
    id: 'algo-098',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o problema de Count Islands usando Union-Find?',
    hints: ['Alternativa ao DFS/BFS', 'Union de células adjacentes', 'Contar componentes finais'],
    explanation: `Count Islands com Union-Find — alternativa ao DFS:
\`\`\`javascript
function numIslands(grid) {
  const m = grid.length, n = grid[0].length;
  const uf = new UnionFind(m * n);
  let waterCells = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "0") { waterCells++; continue; }
      const idx = i * n + j;
      if (j + 1 < n && grid[i][j+1] === "1") uf.union(idx, idx + 1);
      if (i + 1 < m && grid[i+1][j] === "1") uf.union(idx, idx + n);
    }
  }
  // Total de componentes - células de água = ilhas
  return uf.components - waterCells;
}
\`\`\``,
    tags: ['count-islands', 'union-find', 'alternativa', 'componentes', 'grid'],
  },
  {
    id: 'algo-099',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Kadane\'s Algorithm para subarrays? Como estender para Maximum Circular Subarray?',
    hints: ['Total - mínimo subarray = máximo circular', 'Caso especial: todos negativos'],
    explanation: `Maximum Circular Subarray: o máximo pode "envolver" o fim para o início.
\`\`\`javascript
function maxSubarrayCircular(nums) {
  // Caso 1: subarray não circular → Kadane normal
  let maxSum = nums[0], curMax = nums[0];
  let minSum = nums[0], curMin = nums[0];
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(nums[i], curMin + nums[i]);
    minSum = Math.min(minSum, curMin);
    total += nums[i];
  }

  // Caso 2: circular = total - mínimo subarray
  // Caso especial: todos negativos → apenas Caso 1
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}
\`\`\``,
    tags: ['kadane', 'circular', 'maximum-subarray', 'minimo', 'total'],
  },
  {
    id: 'algo-100',
    domain: 'algorithms',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o problema de encontrar o Peak Element em um array? Resolva em O(log n).',
    hints: ['Binary search', 'Peak: maior que vizinhos', 'Sempre existe se bordas são -Infinity'],
    explanation: `Peak Element: elemento maior que seus vizinhos. O(log n) com binary search.
\`\`\`javascript
function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // Peak está em [left, mid] (pode ser mid)
      right = mid;
    } else {
      // Peak está em [mid+1, right]
      left = mid + 1;
    }
  }
  return left; // Índice do peak
}
// [1,2,3,1] → 2 (índice do 3)
// [1,2,1,3,5,6,4] → 5 ou 1 (ambos são peaks válidos)
// Sempre existe peak pois bordas são -Infinity implicitamente
\`\`\``,
    tags: ['peak-element', 'binary-search', 'o-log-n', 'vizinhos', 'monotonic'],
  },
]
