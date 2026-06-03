import type { Question } from '../session/types'

export const webApisQuestions: Question[] = [
  // ── HTTP E REDES ─────────────────────────────────────────────────────────────
  {
    id: 'web-001',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Explique os métodos HTTP mais comuns: GET, POST, PUT, PATCH, DELETE. Quando usar cada um?',
    hints: ['Idempotência', 'Safe methods', 'RESTful'],
    explanation: 'GET: lê recurso, safe, idempotente, pode ser cacheado. POST: cria recurso ou envia dados, não idempotente. PUT: substitui recurso completamente, idempotente. PATCH: atualização parcial, não obrigatoriamente idempotente. DELETE: remove recurso, idempotente. Safe: não altera estado do servidor (GET, HEAD, OPTIONS). Idempotente: múltiplas chamadas idênticas = mesmo resultado (GET, PUT, DELETE).',
    tags: ['http', 'metodos', 'rest', 'idempotencia', 'get-post'],
  },
  {
    id: 'web-002',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'Quais são os principais códigos de status HTTP e o que eles significam?',
    hints: ['2xx: sucesso', '3xx: redirecionamento', '4xx: erro do cliente', '5xx: erro do servidor'],
    explanation: '1xx: informational. 200 OK, 201 Created, 204 No Content. 301 Moved Permanently, 302 Found, 304 Not Modified. 400 Bad Request, 401 Unauthorized (não autenticado), 403 Forbidden (autenticado mas sem permissão), 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests. 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable. 401 vs 403: muita gente confunde — 401 = não sei quem você é, 403 = sei quem você é mas não pode.',
    tags: ['http', 'status-codes', '200', '404', '500', 'rest'],
  },
  {
    id: 'web-003',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são HTTP headers? Quais são os mais importantes para performance e segurança?',
    hints: ['Cache-Control', 'Content-Type', 'Authorization', 'CORS headers'],
    explanation: 'Headers de performance: `Cache-Control: max-age=3600, stale-while-revalidate=60`; `ETag` para conditional requests; `Last-Modified`. Headers de segurança: `Content-Security-Policy` (CSP); `X-Frame-Options: DENY`; `Strict-Transport-Security` (HSTS); `X-Content-Type-Options: nosniff`. CORS: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`. Autenticação: `Authorization: Bearer <token>`. Conteúdo: `Content-Type: application/json; charset=utf-8`.',
    tags: ['http-headers', 'cache-control', 'csp', 'hsts', 'cors'],
  },
  {
    id: 'web-004',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é REST? Quais são seus princípios fundamentais?',
    hints: ['Stateless', 'Uniform interface', 'Cliente-servidor', 'Cacheable'],
    explanation: 'REST (Representational State Transfer): estilo arquitetural para APIs. Princípios: (1) Stateless: cada request contém toda info necessária — sem sessão no servidor; (2) Client-server: separação clara; (3) Cacheable: responses devem indicar se podem ser cacheados; (4) Uniform interface: recursos identificados por URL, manipulação via representações, mensagens auto-descritivas; (5) Layered system: cliente não sabe se fala com servidor final ou intermediário; (6) Code on demand (opcional).',
    tags: ['rest', 'api', 'stateless', 'principios', 'arquitetura'],
  },
  {
    id: 'web-005',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é GraphQL? Quais as vantagens e desvantagens em relação a REST?',
    hints: ['Query language', 'Over-fetching', 'Under-fetching', 'Schema'],
    explanation: 'GraphQL: linguagem de query para APIs onde o cliente especifica exatamente o que precisa. Vantagens: elimina over-fetching (dados demais) e under-fetching (dados de menos — waterfall de requests). Um endpoint, múltiplas queries. Tipagem forte com schema. Desvantagens: mais complexo de implementar; caching é mais difícil (POST); N+1 problem (DataLoader); tooling mais pesado. Quando usar GraphQL: múltiplos clients com diferentes necessidades, dados muito relacionados. REST: APIs simples, caching forte, baixa complexidade.',
    tags: ['graphql', 'rest', 'comparacao', 'over-fetching', 'schema'],
  },
  {
    id: 'web-006',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é WebSocket? Como difere de HTTP? Implemente uma conexão básica.',
    hints: ['Full-duplex', 'Handshake HTTP', 'Upgrade protocol'],
    explanation: `WebSocket: protocolo de comunicação bidirecional full-duplex sobre TCP. Inicia com handshake HTTP (upgrade), depois mantém conexão persistente. Diferença: HTTP é request-response (cliente sempre inicia); WebSocket permite servidor enviar a qualquer momento.
\`\`\`javascript
const ws = new WebSocket("wss://exemplo.com/ws");
ws.onopen = () => ws.send(JSON.stringify({ type: "subscribe", channel: "prices" }));
ws.onmessage = (event) => { const data = JSON.parse(event.data); updateUI(data); };
ws.onclose = (event) => console.log("Closed:", event.code, event.reason);
ws.onerror = (error) => console.error("Error:", error);
\`\`\``,
    tags: ['websocket', 'full-duplex', 'tempo-real', 'handshake', 'protocolo'],
  },
  {
    id: 'web-007',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é DNS? Como funciona a resolução de um domínio?',
    hints: ['Hierarquia de servidores', 'Cache', 'TTL', 'Recursive resolver'],
    explanation: 'DNS (Domain Name System): converte nomes de domínio em IPs. Processo: (1) Browser verifica cache local e OS; (2) Consulta resolver do ISP (recursive resolver); (3) Resolver consulta root nameserver (sabe onde estão os TLD servers); (4) TLD server (.com) indica o authoritative nameserver do domínio; (5) Authoritative nameserver retorna o IP. TTL: quanto tempo cada resposta é cacheada. CDNs usam GeoDNS — retornam IP diferente por localização.',
    tags: ['dns', 'resolucao', 'ttl', 'cache', 'ip'],
  },
  {
    id: 'web-008',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é HTTPS? Como funciona o TLS handshake?',
    hints: ['Criptografia assimétrica', 'Certificado SSL', 'Chave pública/privada'],
    explanation: 'HTTPS = HTTP + TLS (Transport Layer Security). TLS handshake: (1) Client Hello: versões TLS e cipher suites suportadas; (2) Server Hello: certificado (chave pública) e cipher escolhido; (3) Client verifica certificado (CA chain); (4) Troca de chave: cliente gera session key, criptografa com chave pública do servidor; (5) Servidor decripta com chave privada; (6) Comunicação criptografada com session key (simétrica, mais rápida). TLS 1.3: handshake em 1-RTT vs 2-RTT do 1.2.',
    tags: ['https', 'tls', 'ssl', 'criptografia', 'handshake'],
  },
  {
    id: 'web-009',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é HTTP/2 e HTTP/3? Quais as melhorias em relação ao HTTP/1.1?',
    hints: ['Multiplexing', 'Header compression', 'QUIC', 'Server push'],
    explanation: 'HTTP/1.1: uma request por TCP connection, head-of-line blocking, headers repetidos sem compressão. HTTP/2: multiplexing (múltiplas requests na mesma conexão TCP), compressão de headers (HPACK), server push, priorização. HTTP/3: usa QUIC (UDP-based), elimina head-of-line blocking do TCP, 0-RTT connection resumption. Principal ganho prático: HTTP/2 multiplexing elimina a necessidade de sprite images e domain sharding (hacks do HTTP/1.1).',
    tags: ['http2', 'http3', 'multiplexing', 'quic', 'performance'],
  },
  {
    id: 'web-010',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é CORS? Como configurar corretamente no backend?',
    hints: ['Same-Origin Policy', 'Headers de CORS', 'Preflight OPTIONS'],
    explanation: 'CORS: mecanismo que permite ou bloqueia requests cross-origin. O browser bloqueia automaticamente requests para origens diferentes. Configuração no servidor: `Access-Control-Allow-Origin: https://meusite.com` (ou * para público); `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`; `Access-Control-Allow-Headers: Content-Type, Authorization`; `Access-Control-Allow-Credentials: true` (para cookies, não combina com *). Preflight OPTIONS: browser envia antes de requests "não simples" (DELETE, custom headers).',
    tags: ['cors', 'same-origin', 'preflight', 'access-control', 'backend'],
  },
  {
    id: 'web-011',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são JWT (JSON Web Tokens)? Qual sua estrutura? Quando usar vs opaque tokens?',
    hints: ['Header.Payload.Signature', 'Stateless', 'Não criptografado por padrão'],
    explanation: 'JWT: token auto-contido com 3 partes base64url separadas por `.`: (1) Header: algoritmo; (2) Payload: claims (sub, exp, iat, dados do usuário); (3) Signature: `HMACSHA256(header+payload, secret)`. Stateless: servidor não precisa de BD para verificar. Quando preferir: microservices (sem necessidade de lookup central), tokens de curta duração. Problemas: não pode ser invalidado antes do exp sem blacklist; payload visível (não criptografado — use JWE para dados sensíveis). Use httpOnly cookie para armazenar, não localStorage.',
    tags: ['jwt', 'token', 'stateless', 'autenticacao', 'payload'],
  },
  {
    id: 'web-012',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é caching HTTP? Explique Cache-Control, ETag e o processo de conditional request.',
    hints: ['Cache-Control: max-age', 'ETag: fingerprint do recurso', '304 Not Modified'],
    explanation: 'Cache-Control directives: `max-age=3600` (cache por 1h), `no-cache` (sempre revalida), `no-store` (nunca cachear), `private` (apenas browser), `public` (proxy pode cachear), `stale-while-revalidate=60`. ETag: fingerprint do conteúdo. Conditional request: browser envia `If-None-Match: "etag-value"` — servidor responde 304 Not Modified se não mudou (sem body). Last-Modified/If-Modified-Since: similar mas por data. CDNs e proxies usam `Cache-Control: public` para cachear na edge.',
    tags: ['cache-http', 'cache-control', 'etag', 'conditional-request', '304'],
  },
  // ── BROWSER APIs ─────────────────────────────────────────────────────────────
  {
    id: 'web-013',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Fetch API? Como enviar dados JSON? Como tratar erros corretamente?',
    hints: ['fetch não rejeita em 4xx/5xx', 'response.ok', 'JSON.stringify no body'],
    explanation: `\`\`\`javascript
async function apiCall(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": \`Bearer \${token}\` },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(5000), // Timeout de 5s (ES2022)
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message);
  }
  return response.json();
}
\`\`\`
Armadilha: fetch só rejeita em erros de rede, não em 4xx/5xx. Sempre verifique \`response.ok\`.`,
    tags: ['fetch', 'api', 'json', 'erro', 'abort'],
  },
  {
    id: 'web-014',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Service Worker API? O que é uma PWA (Progressive Web App)?',
    hints: ['Proxy de rede', 'Offline first', 'Background sync', 'Push notifications'],
    explanation: 'Service Worker: script que roda em background, separado da página, intercepta requests de rede. Capabilities: cache de assets para offline, background sync, push notifications. Ciclo de vida: install → activate → fetch. PWA: aplicação web com características de app nativa — installable (manifest.json), offline-capable (service worker), responsive, secure (HTTPS). Web App Manifest: `name`, `icons`, `start_url`, `display: "standalone"`. Workbox simplifica service worker.',
    tags: ['service-worker', 'pwa', 'offline', 'push-notifications', 'cache'],
  },
  {
    id: 'web-015',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Geolocation API? Como usá-la e quais são as considerações de privacidade?',
    hints: ['navigator.geolocation', 'Permissão obrigatória', 'watchPosition'],
    explanation: '`navigator.geolocation.getCurrentPosition(success, error, options)` — pede localização uma vez. `watchPosition` — atualiza conforme se move. Success callback: `{ coords: { latitude, longitude, accuracy, altitude, speed } }`. Permissão obrigatória do usuário — browsers exibem prompt. HTTPS obrigatório. Privacidade: guarde o mínimo necessário, deixe claro por que precisa, não rastreie sem consentimento contínuo. Fallback para IP geolocation quando usuário nega.',
    tags: ['geolocation', 'privacidade', 'permissao', 'gps', 'navegador'],
  },
  {
    id: 'web-016',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Web Speech API? Como implementar reconhecimento de voz e síntese?',
    hints: ['SpeechRecognition', 'SpeechSynthesis', 'Suporte limitado'],
    explanation: 'SpeechRecognition (voice input): `const recognition = new SpeechRecognition(); recognition.lang = "pt-BR"; recognition.onresult = (e) => console.log(e.results[0][0].transcript); recognition.start()`. SpeechSynthesis (text-to-speech): `const utterance = new SpeechSynthesisUtterance("Olá!"); utterance.lang = "pt-BR"; utterance.rate = 1; speechSynthesis.speak(utterance)`. Suporte: Chrome/Edge principalmente. Firefox e Safari limitados. HTTPS obrigatório para recognition.',
    tags: ['speech-api', 'reconhecimento-voz', 'tts', 'browser-api', 'acessibilidade'],
  },
  {
    id: 'web-017',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a Permissions API? Como verificar e solicitar permissões do browser?',
    hints: ['navigator.permissions', 'query, request', 'status: granted/denied/prompt'],
    explanation: '`navigator.permissions.query({ name: "geolocation" })` retorna `{ state: "granted"|"denied"|"prompt" }`. Não solicita permissão — apenas verifica o estado. Para solicitar: use a API específica (ex: `getUserMedia` para câmera). Permissões disponíveis: `geolocation`, `notifications`, `push`, `midi`, `camera`, `microphone`, `clipboard-read`, `clipboard-write`. Ouça mudanças: `result.onchange = () => updateUI(result.state)`. Boa prática: peça permissão no momento em que o usuário tenta usar a feature, não ao carregar a página.',
    tags: ['permissions-api', 'geolocation', 'notifications', 'camera', 'privacidade'],
  },
  {
    id: 'web-018',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Notification API? Como implementar notificações web?',
    hints: ['Notification.requestPermission()', 'new Notification()', 'Service Worker para push'],
    explanation: `\`\`\`javascript
async function showNotification() {
  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
  if (Notification.permission === "granted") {
    const n = new Notification("Novo Pedido!", {
      body: "Você tem um novo pedido #1234",
      icon: "/icon-192.png",
      badge: "/badge.png",
      data: { orderId: 1234 },
    });
    n.onclick = () => { window.focus(); n.close(); navigate(\`/orders/1234\`); };
  }
}
\`\`\`
Para push (quando página fechada): Service Worker + Push API + servidor VAPID.`,
    tags: ['notification-api', 'web-push', 'permissao', 'service-worker'],
  },
  {
    id: 'web-019',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a File API e FileReader? Como ler arquivos selecionados pelo usuário?',
    hints: ['input type=file', 'FileReader', 'readAsDataURL, readAsText'],
    explanation: `\`\`\`javascript
function handleFile(input) {
  const file = input.files[0];
  if (!file) return;
  console.log(file.name, file.size, file.type, file.lastModified);
  const reader = new FileReader();
  reader.onload = (e) => { // readAsDataURL
    const dataUrl = e.target.result; // "data:image/png;base64,..."
    previewImg.src = dataUrl;
  };
  reader.onerror = () => console.error("Erro ao ler arquivo");
  reader.readAsDataURL(file); // Para imagens/binários
  // reader.readAsText(file, "utf-8"); // Para texto
  // reader.readAsArrayBuffer(file); // Para binários
}
// URL.createObjectURL(file) — mais eficiente para preview
\`\`\``,
    tags: ['file-api', 'filereader', 'upload', 'preview', 'input-file'],
  },
  {
    id: 'web-020',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Canvas API? Para que é usada?',
    hints: ['2D drawing context', 'Pixel manipulation', 'Jogos e gráficos'],
    explanation: 'Canvas API: elemento HTML para renderização gráfica via JavaScript. `const ctx = canvas.getContext("2d")`. Operações: `fillRect`, `strokeRect`, `drawImage`, `fillText`, `arc` (círculos), `beginPath`, `lineTo`, `moveTo`. Usos: jogos 2D, visualizações de dados personalizadas, edição de imagens no browser, geração de imagens dinamicamente, captcha. WebGL para 3D. Diferença de SVG: Canvas é raster (pixels), SVG é vetorial (escalável). Three.js usa WebGL/Canvas para 3D.',
    tags: ['canvas', '2d', 'graficos', 'jogos', 'desenho'],
  },
  // ── CSS E LAYOUT ─────────────────────────────────────────────────────────────
  {
    id: 'web-021',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é CSS Flexbox? Explique os principais conceitos: container, eixos, flex-direction, justify-content, align-items.',
    hints: ['Main axis vs cross axis', 'flex-direction muda os eixos', 'justify: main axis'],
    explanation: 'Flexbox: layout unidimensional. Container: `display: flex`. Main axis: direção definida por `flex-direction` (row=horizontal, column=vertical). Cross axis: perpendicular. `justify-content`: alinhamento no main axis (flex-start, center, space-between, space-around, space-evenly). `align-items`: alinhamento no cross axis (stretch, center, flex-start, flex-end, baseline). Itens: `flex-grow`, `flex-shrink`, `flex-basis`. `align-self` sobreescreve `align-items` por item.',
    tags: ['flexbox', 'css', 'layout', 'justify-content', 'align-items'],
  },
  {
    id: 'web-022',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é CSS Grid? Quando preferir sobre Flexbox?',
    hints: ['Bidimensional', 'grid-template-columns', 'Linhas E colunas'],
    explanation: 'CSS Grid: layout bidimensional (linhas E colunas). `grid-template-columns: repeat(3, 1fr)` — 3 colunas iguais. `fr` = fração do espaço disponível. `gap` — espaçamento. `grid-area`, `grid-column`, `grid-row` para posicionar itens. `auto-fill vs auto-fit`. Quando preferir Grid: layouts de página 2D (header, sidebar, main, footer), qualquer layout onde você controla linhas e colunas. Quando preferir Flexbox: layout 1D (navbar, botões lado a lado, cards em uma linha). Muitas vezes use ambos: Grid para layout geral, Flex para componentes.',
    tags: ['css-grid', 'layout', 'bidimensional', 'fr', 'grid-template'],
  },
  {
    id: 'web-023',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são CSS Custom Properties (variáveis CSS)? Como criar e usar?',
    hints: ['--nome-variavel', 'var()', ':root', 'Herança'],
    explanation: 'CSS Custom Properties: variáveis reutilizáveis nativas do CSS. Declaração: `--color-primary: #3b82f6` (no `:root` para global, ou em qualquer seletor para escopo). Uso: `color: var(--color-primary, blue)` — blue é o fallback. Herança: filhos herdam variáveis dos pais. JavaScript: `element.style.setProperty("--color", "red")` e `getComputedStyle(el).getPropertyValue("--color")`. Diferença de variáveis Sass: CSS vars são dinâmicas (mudam em runtime), Sass é compilação. Fundamental para temas e design systems.',
    tags: ['css-variables', 'custom-properties', 'temas', 'design-system', 'dinamico'],
  },
  {
    id: 'web-024',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é responsividade? Como implementar usando media queries e técnicas modernas?',
    hints: ['Mobile-first', 'media queries', 'clamp()', 'container queries'],
    explanation: 'Mobile-first: comece pelo menor breakpoint, expanda. Media queries: `@media (min-width: 768px) { ... }`. Breakpoints comuns: sm=640, md=768, lg=1024, xl=1280. Técnicas modernas: `clamp(1rem, 2.5vw, 2rem)` — tamanho fluido entre min e max; `min()`, `max()`. Container queries (CSS 2023): `@container (min-width: 400px) { ... }` — responsivo ao container, não à viewport. `aspect-ratio: 16/9` para proporções. `ch` e `em` em vez de pixels para fontes.',
    tags: ['responsividade', 'media-queries', 'mobile-first', 'clamp', 'container-queries'],
  },
  {
    id: 'web-025',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são CSS Modules? Como diferem de CSS global e CSS-in-JS?',
    hints: ['Escopo local por padrão', 'Hash nos nomes de classe', 'Zero runtime'],
    explanation: 'CSS Modules: arquivos CSS com escopo local — `.button { color: red }` gera hash único (`.button_abc123`). Importação: `import styles from "./Button.module.css"` e `className={styles.button}`. Zero runtime — processado em build time. Evita conflitos globais. Diferença de CSS global: sem colisão de nomes. Diferença de CSS-in-JS (styled-components, Emotion): CSS Modules é static (pré-compilado, zero JS em runtime); CSS-in-JS é dinâmico (estilização baseada em props) mas adiciona JS em runtime. Tailwind: utility classes, diferente de ambos.',
    tags: ['css-modules', 'escopo', 'css-in-js', 'zero-runtime', 'next-js'],
  },
  {
    id: 'web-026',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Tailwind CSS? Quais as vantagens e desvantagens do modelo utility-first?',
    hints: ['Utility classes', 'Purge de CSS não usado', 'Design system via config'],
    explanation: 'Tailwind: framework CSS utility-first — classes para cada propriedade CSS. Vantagens: (1) Sem CSS custom (menos arquivos); (2) Nunca cresce — purge remove classes não usadas; (3) Consistência via design tokens no config; (4) Fácil de customizar. Desvantagens: (1) HTML verboso com muitas classes; (2) Curva de aprendizado dos nomes; (3) Difícil de extrair estilos reutilizáveis (use `@apply` com moderação). Popular em projetos Next.js/React. Alternativas: UnoCSS, Panda CSS.',
    tags: ['tailwind', 'utility-first', 'css', 'purge', 'design-tokens'],
  },
  {
    id: 'web-027',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são CSS Transitions e CSS Animations? Quando usar cada uma?',
    hints: ['transition: propriedade', 'animation: keyframes', 'Performance: transform e opacity'],
    explanation: 'Transitions: suaviza mudança de estado CSS. `transition: color 0.3s ease, transform 0.2s`. Disparadas por: hover, focus, change de classe via JS. Animations: loop ou sequência complexa com `@keyframes`. `animation: slide-in 0.5s ease forwards`. Ambas: performance melhor com `transform` e `opacity` (GPU composite layer, sem reflow/repaint). Evite animar: `width`, `height`, `margin`, `top`, `left` — causam reflow. Use `transform: translateX()` em vez de `left`. `will-change: transform` como hint para browser (use com moderação).',
    tags: ['css-transitions', 'css-animations', 'keyframes', 'performance', 'transform'],
  },
  {
    id: 'web-028',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é specificity (especificidade) em CSS? Como resolver conflitos de especificidade?',
    hints: ['ID > class > element', 'Calculada por tipo de seletor', '!important último recurso'],
    explanation: 'Especificidade: determina qual regra CSS vence quando múltiplas se aplicam ao mesmo elemento. Calculada como `(ID, classe/atributo/pseudo-class, elemento/pseudo-element)`: `#id` = (1,0,0); `.class` = (0,1,0); `div` = (0,0,1); `*` = (0,0,0). `style=""` inline = (1,0,0,0). `!important` sobrescreve tudo (evitar). Resolver conflitos: (1) Reduzir especificidade desnecessária (evitar IDs em CSS); (2) Ordem de declaração (último vence em empate); (3) CSS Modules evita conflitos; (4) Cascade layers (`@layer`) para controle granular.',
    tags: ['specificity', 'css', 'cascata', 'important', 'seletores'],
  },
  {
    id: 'web-029',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `position` em CSS? Explique as diferenças entre static, relative, absolute, fixed e sticky.',
    hints: ['Contexto de posicionamento', 'relative: fluxo mantido', 'absolute: remove do fluxo'],
    explanation: 'Static: padrão, sem posicionamento especial. Relative: no fluxo normal, offset visual com top/left/right/bottom sem afetar outros. Absolute: removido do fluxo, posicionado relativo ao ancestral `position: relative` mais próximo (ou viewport se nenhum). Fixed: removido do fluxo, relativo à viewport (não muda com scroll). Sticky: relative até atingir threshold de scroll, então fixed — volta a relative quando scroll passa do container pai. Uso: modais (absolute/fixed), navbar fixa (fixed), elementos que "grudam" (sticky).',
    tags: ['position', 'css', 'absolute', 'fixed', 'sticky', 'relative'],
  },
  {
    id: 'web-030',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Box Model do CSS? Qual a diferença entre `box-sizing: content-box` e `border-box`?',
    hints: ['Conteúdo + padding + border + margin', 'border-box: mais intuitivo'],
    explanation: 'Box Model: todo elemento é uma caixa com conteúdo + padding + border + margin. `content-box` (padrão): `width` define apenas o conteúdo — padding e border adicionam ao tamanho total. `border-box`: `width` inclui conteúdo + padding + border — mais intuitivo. `* { box-sizing: border-box }` é padrão em todos os frameworks CSS modernos. Com border-box: um elemento `width: 100px; padding: 20px` continua com 100px total (conteúdo = 60px).',
    tags: ['box-model', 'box-sizing', 'border-box', 'padding', 'margin'],
  },
  // ── ACESSIBILIDADE ──────────────────────────────────────────────────────────
  {
    id: 'web-031',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é WCAG? Quais são os níveis de conformidade e os 4 princípios?',
    hints: ['Perceivable, Operable, Understandable, Robust', 'A, AA, AAA', 'Contraste'],
    explanation: 'WCAG (Web Content Accessibility Guidelines): padrão W3C de acessibilidade. 4 princípios (POUR): Perceivable (percebível — alt text, captions); Operable (operável — navegação por teclado, sem tempo limitado); Understandable (compreensível — linguagem clara, erros explicados); Robust (robusto — compatível com tecnologias assistivas). Níveis: A (mínimo), AA (padrão de mercado e legal), AAA (ótimo, nem sempre possível). AA mínimo: contraste 4.5:1 para texto normal, 3:1 para texto grande.',
    tags: ['wcag', 'a11y', 'pour', 'contraste', 'conformidade'],
  },
  {
    id: 'web-032',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é ARIA? Quando usar e quando evitar?',
    hints: ['Acessible Rich Internet Applications', 'Complementa HTML semântico', 'Não use se HTML nativo funciona'],
    explanation: 'ARIA (Accessible Rich Internet Applications): conjunto de atributos HTML que melhoram acessibilidade para tecnologias assistivas. Regra 1: use HTML semântico nativo primeiro (role="button" em div vs `<button>`). Quando usar ARIA: (1) `aria-label` para elementos sem texto visível (botão com ícone); (2) `aria-expanded`, `aria-selected` para estados de UI; (3) `aria-live` para atualizações dinâmicas; (4) `role` para componentes customizados sem equivalente HTML; (5) `aria-describedby` para instruções adicionais. Quando evitar: quando HTML semântico nativo já fornece o significado.',
    tags: ['aria', 'a11y', 'html-semantico', 'screen-reader', 'role'],
  },
  {
    id: 'web-033',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é navegação por teclado? Quais são as regras fundamentais para implementar corretamente?',
    hints: ['Tab order', 'Focus visible', 'Teclas de atalho padrão'],
    explanation: 'Regras fundamentais: (1) Todos os elementos interativos devem ser alcançáveis via Tab; (2) Foco deve ser visível — `outline: none` sem alternativa visual é violação A11y; (3) Tab order deve ser lógico — siga a ordem visual; (4) Botões: ativados com Space/Enter; (5) Links: ativados com Enter; (6) Menus: Arrow keys para navegar entre itens; (7) Modais: foco fica preso dentro (focus trap) e retorna ao trigger ao fechar; (8) Escape fecha modais/dropdowns. `tabindex="0"`: inclui no Tab order natural; `tabindex="-1"`: focável via JS, não via Tab.',
    tags: ['teclado', 'tab-order', 'focus', 'a11y', 'navegacao'],
  },
  {
    id: 'web-034',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar um menu dropdown acessível com React?',
    hints: ['aria-haspopup', 'aria-expanded', 'Setas do teclado', 'Escape fecha'],
    explanation: `Dropdown acessível requer:
\`\`\`tsx
function Dropdown({ trigger, items }) {
  const [open, setOpen] = useState(false);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowDown") { /* foca próximo item */ }
    if (e.key === "ArrowUp") { /* foca item anterior */ }
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {trigger}
      </button>
      {open && (
        <ul role="menu">
          {items.map(item => (
            <li role="menuitem" key={item.id} tabIndex={-1}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\``,
    tags: ['dropdown', 'aria', 'teclado', 'menu', 'acessibilidade'],
  },
  {
    id: 'web-035',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `alt` text em imagens? Como escrever um bom alt text?',
    hints: ['Descreve o conteúdo', 'Alt vazio para decorativas', 'Não repita "imagem de"'],
    explanation: 'Alt text: texto alternativo para imagens lidas por screen readers e exibidas quando imagem falha. Boas práticas: (1) Descreva o CONTEÚDO e FUNÇÃO, não "imagem de"; (2) Contexto importa — a mesma imagem pode ter alt diferente em contextos diferentes; (3) Imagens decorativas: `alt=""` (vazio) — screen reader pula; (4) Imagens informativas: descreva o que a imagem comunica; (5) Imagens de ação (botões com imagem): descreva a ação, não a imagem; (6) Gráficos complexos: forneça descrição longa ou tabela de dados equivalente.',
    tags: ['alt-text', 'imagens', 'screen-reader', 'a11y', 'descricao'],
  },
  // ── SEGURANÇA WEB ────────────────────────────────────────────────────────────
  {
    id: 'web-036',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que são os OWASP Top 10? Explique os mais relevantes para frontend.',
    hints: ['XSS', 'Insecure design', 'A01-A10'],
    explanation: 'OWASP Top 10 (2021): A01 Broken Access Control (RBAC incorreto); A02 Cryptographic Failures (dados sensíveis sem criptografia); A03 Injection (XSS, SQL injection); A04 Insecure Design; A05 Security Misconfiguration; A06 Vulnerable Components; A07 Authentication Failures (senhas fracas, sem MFA); A08 Integrity Failures; A09 Logging Failures; A10 Server-Side Request Forgery. Mais relevantes frontend: A03 XSS (sanitização de inputs), A07 Autenticação (tokens seguros), A01 Access Control (RBAC), A05 Misconfiguration (headers de segurança).',
    tags: ['owasp', 'seguranca', 'xss', 'injection', 'top10'],
  },
  {
    id: 'web-037',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é SQL Injection? Como o frontend pode prevenir? E o backend?',
    hints: ['Não use concatenação de string', 'Parametrize queries', 'Frontend: validação adicional'],
    explanation: 'SQL Injection: inserção de SQL malicioso via input do usuário. Ex: SELECT * FROM users WHERE name = [valor do usuário] — se o valor contiver código SQL, o banco executa comandos maliciosos. Prevenção no backend: parameterized queries/prepared statements (NUNCA concatene strings em SQL). ORMs (Prisma, Drizzle) parametrizam automaticamente. Frontend: validação de tipo e tamanho de inputs (não substitui validação server-side), não exponha mensagens de erro SQL ao usuário.',
    tags: ['sql-injection', 'seguranca', 'parametrized', 'orm', 'validacao'],
  },
  {
    id: 'web-038',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Content Security Policy (CSP)? Como configurar no Next.js?',
    hints: ['Whitelist de origens', 'Nonces para inline scripts', 'Report-Only para testar'],
    explanation: `CSP: header HTTP que restringe recursos que o browser pode carregar — defesa principal contra XSS. Diretivas: \`script-src\` (fontes de scripts), \`style-src\`, \`img-src\`, \`connect-src\` (fetch/XHR). Nonce para scripts inline: \`script-src 'nonce-{random}'\`.
\`\`\`javascript
// next.config.js headers:
headers: [{ key: "Content-Security-Policy",
  value: "default-src 'self'; script-src 'self' 'nonce-{nonce}'; style-src 'self' 'unsafe-inline';"
}]
\`\`\`
Teste com \`Content-Security-Policy-Report-Only\` primeiro — viola sem bloquear, loga no Report-To endpoint.`,
    tags: ['csp', 'content-security-policy', 'xss', 'nonce', 'next-js'],
  },
  {
    id: 'web-039',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é clickjacking? Como prevenir com X-Frame-Options e CSP?',
    hints: ['iframe malicioso', 'X-Frame-Options: DENY', 'frame-ancestors'],
    explanation: 'Clickjacking: atacante coloca sua aplicação em um iframe transparente, induzindo usuário a clicar em elementos sem saber. Prevenção: (1) `X-Frame-Options: DENY` — impede carregamento em qualquer frame; `SAMEORIGIN` — permite apenas mesmo domínio; (2) CSP `frame-ancestors "none"` — mais granular, substitui X-Frame-Options; (3) `frame-ancestors "self" https://trusteddomain.com` — whitelist. No Next.js: configure em `headers()` do `next.config.js`. Combine com `Permissions-Policy` para controlar funcionalidades.',
    tags: ['clickjacking', 'iframe', 'x-frame-options', 'frame-ancestors', 'seguranca'],
  },
  {
    id: 'web-040',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é rate limiting? Como implementar proteção no frontend?',
    hints: ['Limite de requests', 'Throttle do frontend', '429 Too Many Requests'],
    explanation: 'Rate limiting: limitar número de requests em um período. Frontend: (1) Throttle de chamadas da UI (debounce em search, throttle em scroll); (2) Tratar respostas 429 com retry após `Retry-After` header; (3) Não fazer requests desnecessários (cache, deduplicação). Backend: rate limit por IP, usuário, API key. Frontend não pode substituir rate limit do servidor — qualquer lógica no browser pode ser bypassada. Implementações: Nginx, API Gateway, Redis com sliding window.',
    tags: ['rate-limiting', '429', 'throttle', 'debounce', 'seguranca'],
  },
  // ── PERFORMANCE WEB ─────────────────────────────────────────────────────────
  {
    id: 'web-041',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Critical Rendering Path? Como otimizá-lo?',
    hints: ['DOM + CSSOM = Render Tree', 'Render-blocking', 'Above-the-fold'],
    explanation: 'Critical Rendering Path: sequência de passos para renderizar o primeiro pixel. HTML → DOM, CSS → CSSOM, ambos → Render Tree → Layout → Paint. CSS e `<script>` sem defer/async bloqueiam a renderização. Otimizações: (1) CSS crítico inline no `<head>` (above-the-fold); (2) Scripts com `defer` ou `async`; (3) Minificar CSS/JS; (4) `<link rel="preload">` para recursos críticos; (5) Compressão Brotli; (6) HTTP/2 para requests paralelos; (7) Evitar CSS @import (síncrono).',
    tags: ['critical-rendering-path', 'dom', 'cssom', 'render-blocking', 'performance'],
  },
  {
    id: 'web-042',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é lazy loading? Como implementar para imagens e componentes?',
    hints: ['loading="lazy"', 'IntersectionObserver', 'React.lazy'],
    explanation: 'Lazy loading: adiar carregamento até que seja necessário. Imagens: `<img loading="lazy" src="foto.jpg"/>` — nativo no browser. Para mais controle: IntersectionObserver. Scripts: `<script defer>` ou `<script async>`. Componentes React: `React.lazy(() => import("./Heavy"))` + `<Suspense>`. Next.js: `import dynamic from "next/dynamic"`. O que lazy loading não faz: não melhora o tempo total de carregamento, melhora o tempo de carregamento inicial (First Load) e a percepção de performance.',
    tags: ['lazy-loading', 'loading-lazy', 'intersection-observer', 'react-lazy', 'performance'],
  },
  {
    id: 'web-043',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é `preload`, `prefetch` e `preconnect` em HTML? Quando usar cada um?',
    hints: ['preload: prioritário e crítico', 'prefetch: próxima navegação', 'preconnect: DNS + TCP'],
    explanation: '`<link rel="preload" href="font.woff2" as="font">`: carrega recurso crítico da rota ATUAL com alta prioridade. Use para: hero image, fontes, scripts críticos. `<link rel="prefetch" href="/next-page.js">`: carrega em background para PRÓXIMAS navegações com baixa prioridade. Use para: próximas rotas prováveis. `<link rel="preconnect" href="https://fonts.googleapis.com">`: estabelece conexão TCP+TLS com terceiros antes de precisar. `<link rel="dns-prefetch">`: apenas DNS (mais barato, para muitas origens). Não abuse do preload — prioriza muito e pode atrasar outros recursos.',
    tags: ['preload', 'prefetch', 'preconnect', 'resource-hints', 'performance'],
  },
  {
    id: 'web-044',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Long Task em JavaScript? Como detectar e resolver?',
    hints: ['Bloqueia a thread principal', 'PerformanceObserver', 'Mais de 50ms'],
    explanation: 'Long Task: tarefa JavaScript que bloqueia a thread principal por mais de 50ms — causa frames lentos, UI não responsiva. Detectar com PerformanceObserver: `new PerformanceObserver((list) => { list.getEntries().forEach(e => console.log("Long Task:", e.duration)) }).observe({ entryTypes: ["longtask"] })`. Também visível no Performance tab do DevTools como blocos grandes na thread principal. Soluções: (1) Divide a tarefa em pedaços com `setTimeout(fn, 0)` ou `scheduler.yield()`; (2) Web Workers para cálculos pesados; (3) Virtualização para listas.',
    tags: ['long-task', 'thread-principal', 'performance', 'PerformanceObserver', 'jank'],
  },
  {
    id: 'web-045',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é minificação e compressão de ativos web? Qual a diferença?',
    hints: ['Minificação: remove espaços/comentários', 'Compressão: Gzip/Brotli', 'Bundler faz minificação'],
    explanation: 'Minificação: remove espaços, comentários, encurta nomes de variáveis — feita pelo bundler (Terser para JS, CSS Nano para CSS). Resultado: arquivo menor sem alterar funcionalidade. Compressão: algoritmo (Gzip, Brotli) comprime o arquivo para transferência — feita pelo servidor web/CDN. O browser descomprime automaticamente. Brotli 20-30% menor que Gzip. Ambas são complementares: minifique o código E configure compressão no servidor. Em Next.js: compressão automática via Vercel/plataforma de deploy.',
    tags: ['minificacao', 'compressao', 'gzip', 'brotli', 'performance'],
  },
  {
    id: 'web-046',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é uma CDN (Content Delivery Network)? Como melhora a performance?',
    hints: ['Servidores geograficamente distribuídos', 'Cache de assets estáticos', 'Edge locations'],
    explanation: 'CDN: rede de servidores distribuídos globalmente que cacheia e serve assets próximos ao usuário. Como melhora: (1) Latência: arquivo servido do servidor mais próximo (não do servidor de origem em outro continente); (2) Throughput: conexão mais rápida à edge location; (3) Menos carga no servidor de origem; (4) Redundância e disponibilidade. Assets ideais para CDN: imagens, JS, CSS, fontes, vídeos. Providers: Cloudflare, AWS CloudFront, Vercel Edge Network, Fastly. Vercel CDN é automático para Next.js.',
    tags: ['cdn', 'performance', 'latencia', 'edge', 'cache'],
  },
  // ── WEB STANDARDS ────────────────────────────────────────────────────────────
  {
    id: 'web-047',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Web Components? Quais são suas 3 tecnologias principais?',
    hints: ['Custom Elements', 'Shadow DOM', 'HTML Templates'],
    explanation: 'Web Components: conjunto de APIs web padrão para criar componentes reutilizáveis e encapsulados. (1) Custom Elements: `customElements.define("my-button", MyButtonClass)` — cria elementos HTML customizados; (2) Shadow DOM: DOM encapsulado onde CSS interno não afeta externo e vice-versa; (3) HTML Templates: `<template>` e `<slot>` para markup reutilizável. Vantagem: framework-agnostic — funciona em qualquer framework. Desvantagem: SSR limitado, curva de aprendizado, sem reconciliation. Lit (Google) simplifica criação.',
    tags: ['web-components', 'custom-elements', 'shadow-dom', 'templates', 'encapsulamento'],
  },
  {
    id: 'web-048',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é SSE (Server-Sent Events)? Como implementar no cliente e servidor?',
    hints: ['Unidirecional servidor → cliente', 'EventSource', 'Auto-reconexão'],
    explanation: `SSE: conexão HTTP de longa duração onde servidor envia eventos ao cliente (unidirecional). Mais simples que WebSocket para casos unidirecionais.
\`\`\`javascript
// Cliente:
const source = new EventSource("/api/stream");
source.onmessage = (e) => console.log(JSON.parse(e.data));
source.addEventListener("userJoined", (e) => console.log(e.data));
source.onerror = () => { /* Auto-reconecta */ };
// source.close(); // Para fechar
\`\`\`
Servidor (Node.js): response com \`Content-Type: text/event-stream\`, escreve \`data: {...}\\n\\n\`. ChatGPT usa SSE para streaming de resposta. Use SSE para: notificações, feeds, streaming LLM.`,
    tags: ['sse', 'server-sent-events', 'EventSource', 'streaming', 'tempo-real'],
  },
  {
    id: 'web-049',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é WebRTC? Para que serve? Quais são seus casos de uso?',
    hints: ['Peer-to-peer', 'Vídeo/áudio/dados', 'Signaling separado'],
    explanation: 'WebRTC (Web Real-Time Communication): API para comunicação P2P direta entre browsers — sem passar pelo servidor para o fluxo de dados. Componentes: (1) MediaStream: captura câmera/microfone; (2) RTCPeerConnection: conexão P2P; (3) RTCDataChannel: dados arbitrários P2P. Requer "signaling server" para troca inicial de metadados (ICE candidates, SDP). Casos de uso: videochamadas (Google Meet), screensharing, transferência de arquivo P2P, jogos multiplayer. Bibliotecas: simple-peer, PeerJS simplificam a API.',
    tags: ['webrtc', 'p2p', 'video', 'audio', 'tempo-real'],
  },
  {
    id: 'web-050',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a BroadcastChannel API? Como sincronizar estado entre múltiplas abas?',
    hints: ['Comunicação entre abas', 'Same origin', 'postMessage'],
    explanation: `BroadcastChannel: comunicação entre browsing contexts (abas, workers) da mesma origem.
\`\`\`javascript
// Em todas as abas:
const channel = new BroadcastChannel("app-state");

// Enviar:
channel.postMessage({ type: "LOGOUT", userId: 123 });

// Receber:
channel.onmessage = (e) => {
  if (e.data.type === "LOGOUT") {
    clearAuth();
    redirect("/login");
  }
};

// Fechar quando não precisar mais:
channel.close();
\`\`\`
Caso de uso: logout em todas as abas, sincronizar tema, atualizar carrinho. Alternativa: localStorage + storage event (mas BroadcastChannel é mais limpo).`,
    tags: ['BroadcastChannel', 'multi-tab', 'sincronizacao', 'comunicacao', 'logout'],
  },
  // ── TESTING WEB ─────────────────────────────────────────────────────────────
  {
    id: 'web-051',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Testing Library? Qual é a filosofia por trás dela?',
    hints: ['Comportamento, não implementação', 'Como o usuário usaria', 'getByRole, getByText'],
    explanation: 'Testing Library: família de bibliotecas para testar UI de forma centrada no usuário. Filosofia: "The more your tests resemble the way your software is used, the more confidence they can give you." Queries preferidas (ordem): `getByRole` (semântico, a11y-friendly), `getByLabelText` (forms), `getByPlaceholderText`, `getByText`, `getByDisplayValue`, `getByAltText`, `getByTitle`, `getByTestId` (último recurso). Evite testar detalhes de implementação — teste comportamento visível ao usuário.',
    tags: ['testing-library', 'rtl', 'comportamento', 'filosofia', 'queries'],
  },
  {
    id: 'web-052',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Vitest? Como configurar e escrever um teste unitário em React com Testing Library?',
    hints: ['Jest-compatible', 'Vite-based', 'describe, it, expect'],
    explanation: `Vitest: test runner compatível com Jest, integrado ao Vite. Configurar no \`vite.config.ts\`: \`test: { environment: "jsdom" }\`.
\`\`\`typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("incrementa quando botão é clicado", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: /incrementar/i });
    const count = screen.getByText("0");
    await userEvent.click(button);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
\`\`\``,
    tags: ['vitest', 'testing-library', 'jest', 'react', 'unitario'],
  },
  {
    id: 'web-053',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Playwright? Como usar para testes E2E em Next.js?',
    hints: ['Browser automation', 'Chromium, Firefox, WebKit', 'page.goto, page.click'],
    explanation: `Playwright: framework de testes E2E que controla browsers reais.
\`\`\`typescript
import { test, expect } from "@playwright/test";

test("usuário pode fazer login", async ({ page }) => {
  await page.goto("/login");
  await page.fill('[name="email"]', "user@email.com");
  await page.fill('[name="password"]', "senha123");
  await page.click('[type="submit"]');
  await expect(page).toHaveURL("/dashboard");
  await expect(page.getByText("Bem-vindo!")).toBeVisible();
});
\`\`\`
Configuração Next.js: \`webServer: { command: "npm run dev", port: 3000 }\` no \`playwright.config.ts\`. Grava vídeos/screenshots em falhas.`,
    tags: ['playwright', 'e2e', 'browser', 'automacao', 'nextjs'],
  },
  {
    id: 'web-054',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como testar custom hooks em React com Testing Library?',
    hints: ['renderHook', 'act para state updates', 'waitFor para async'],
    explanation: `\`\`\`typescript
import { renderHook, act, waitFor } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

// Hook síncrono:
it("incrementa o contador", () => {
  const { result } = renderHook(() => useCounter(0));
  act(() => { result.current.increment(); });
  expect(result.current.count).toBe(1);
});

// Hook assíncrono:
it("busca usuário", async () => {
  const { result } = renderHook(() => useFetch("/api/user/1"));
  expect(result.current.loading).toBe(true);
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toEqual({ id: 1, name: "João" });
});
\`\`\``,
    tags: ['renderHook', 'act', 'custom-hook', 'testing', 'waitFor'],
  },
  {
    id: 'web-055',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é mocking em testes? Como usar `vi.mock` com Vitest?',
    hints: ['Substituir dependências', 'vi.mock para módulos', 'vi.fn para funções'],
    explanation: `\`\`\`typescript
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import * as api from "../api";

// Mock do módulo inteiro:
vi.mock("../api", () => ({
  fetchUser: vi.fn(),
}));

it("exibe nome do usuário", async () => {
  vi.mocked(api.fetchUser).mockResolvedValue({ name: "Maria", email: "maria@test.com" });
  render(<UserProfile userId="1" />);
  await screen.findByText("Maria"); // findBy = waitFor + getBy
  expect(api.fetchUser).toHaveBeenCalledWith("1");
});

// Restaurar após cada teste:
afterEach(() => vi.clearAllMocks());
\`\`\``,
    tags: ['mocking', 'vi.mock', 'vi.fn', 'vitest', 'testes'],
  },
  // ── TOOLING E BUILD ─────────────────────────────────────────────────────────
  {
    id: 'web-056',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Vite? Por que é mais rápido que Webpack em desenvolvimento?',
    hints: ['ESM nativo', 'HMR granular', 'esbuild para deps'],
    explanation: 'Vite: ferramenta de build moderna. Em desenvolvimento: serve arquivos sem bundle (aproveitando ESM nativo do browser) — sem bundle inicial demorado. Deps são pré-compiladas com esbuild (70-100x mais rápido que Node.js bundlers). HMR: substitui apenas o módulo que mudou, não rebundla tudo. Em produção: usa Rollup para bundle otimizado. Por que mais rápido que Webpack dev: Webpack bundla TUDO antes de servir; Vite serve cada módulo individualmente.',
    tags: ['vite', 'webpack', 'esm', 'hmr', 'build'],
  },
  {
    id: 'web-057',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é ESLint? Como configurar para um projeto React + TypeScript?',
    hints: ['Linting estático', 'plugins', '.eslintrc', 'eslint-config-next'],
    explanation: `ESLint: ferramenta de análise estática que detecta problemas. Config para React + TypeScript:
\`\`\`json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
\`\`\`
Plugins essenciais: \`@typescript-eslint/eslint-plugin\`, \`eslint-plugin-react-hooks\` (detecta deps incorretas), \`eslint-plugin-jsx-a11y\` (acessibilidade).`,
    tags: ['eslint', 'linting', 'typescript', 'react-hooks', 'configuracao'],
  },
  {
    id: 'web-058',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Prettier? Como integrar com ESLint? O que é `husky` e `lint-staged`?',
    hints: ['Formatação automática', 'Pre-commit hook', 'Somente arquivos staged'],
    explanation: 'Prettier: formatador de código automático — sem debates sobre estilo. Integração com ESLint: `eslint-config-prettier` desativa regras do ESLint que conflitam com Prettier. Husky: gerencia git hooks (pre-commit, commit-msg, pre-push). lint-staged: executa comandos apenas nos arquivos staged (não em todo o projeto). Configuração: `"lint-staged": { "*.{ts,tsx}": ["eslint --fix", "prettier --write"] }`. Resultado: código é automaticamente lint-checked e formatado antes de cada commit.',
    tags: ['prettier', 'eslint', 'husky', 'lint-staged', 'git-hooks'],
  },
  {
    id: 'web-059',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é CI/CD? Explique um pipeline típico para um projeto Next.js.',
    hints: ['Continuous Integration', 'Continuous Deployment', 'GitHub Actions'],
    explanation: `CI/CD: prática de automatizar build, test e deploy. Pipeline típico:
\`\`\`yaml
# .github/workflows/ci.yml
jobs:
  ci:
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint         # ESLint
      - run: pnpm type-check   # tsc --noEmit
      - run: pnpm test         # Vitest
      - run: pnpm build        # Next.js build (detecta erros de build)
  e2e:
    needs: ci
    run: pnpm playwright test
  deploy:
    needs: [ci, e2e]
    # Deploy para Vercel/staging
\`\`\`
Vercel tem CI/CD automático para Next.js: preview deployments em PRs, produção em main.`,
    tags: ['ci-cd', 'github-actions', 'pipeline', 'deploy', 'automacao'],
  },
  {
    id: 'web-060',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que são Conventional Commits? Por que adotar no seu projeto?',
    hints: ['feat, fix, chore, docs', 'CHANGELOG automático', 'Semântica nas mensagens'],
    explanation: 'Conventional Commits: especificação para mensagens de commit padronizadas. Formato: `type(scope): description`. Types: `feat` (nova feature), `fix` (bug fix), `docs`, `style`, `refactor`, `test`, `chore`, `perf`. Breaking changes: `feat!: ` ou footer `BREAKING CHANGE:`. Benefícios: (1) CHANGELOG automático (semantic-release); (2) Semver automático (feat = minor, fix = patch, BREAKING = major); (3) Histórico legível; (4) Fácil de filtrar no git log. Ferramentas: commitlint (valida), commitizen (interactive helper).',
    tags: ['conventional-commits', 'git', 'changelog', 'semver', 'padrao'],
  },
  {
    id: 'web-061',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Resize Observer API? Como usar para detectar mudanças de tamanho de elemento?',
    hints: ['Substitui resize no window', 'Observa elemento específico', 'Não causa reflow'],
    explanation: 'ResizeObserver detecta mudanças de tamanho de um elemento específico — mais eficiente que ouvir resize no window. const observer = new ResizeObserver((entries) => { for (const entry of entries) { const { width, height } = entry.contentRect; doSomething(width, height); } }); observer.observe(element); observer.disconnect() para parar. Casos de uso: componentes que precisam se ajustar ao tamanho do container (charts, editors), container queries em JS, layout calculado por tamanho de elemento.',
    tags: ['ResizeObserver', 'layout', 'element-size', 'responsivo', 'performance'],
  },
  {
    id: 'web-062',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Performance API? Como medir métricas de performance customizadas?',
    hints: ['performance.mark', 'performance.measure', 'PerformanceObserver'],
    explanation: 'Performance API permite medir timing de código com precisão de microsegundos. performance.now(): timestamp de alta precisão relativo ao início da página. performance.mark("start"): cria um marcador. performance.measure("minha-op", "start"): mede entre marcadores. PerformanceObserver: observa entradas de performance (navigation, resource, longtask, paint, layout-shift). Uso: medir tempo de operações críticas, detectar long tasks, monitorar LCP/FID/CLS. performance.getEntriesByType("navigation") para métricas de carregamento.',
    tags: ['performance-api', 'mark', 'measure', 'PerformanceObserver', 'timing'],
  },
  {
    id: 'web-063',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Page Visibility API? Como economizar recursos quando a aba fica inativa?',
    hints: ['visibilitychange event', 'document.hidden', 'Pausar operações'],
    explanation: 'Page Visibility API detecta quando o usuário muda de aba ou minimiza a janela. document.hidden: boolean — true se não visível. document.visibilityState: "visible" | "hidden" | "prerender". document.addEventListener("visibilitychange", () => { if (document.hidden) { pauseVideo(); stopPolling(); } else { resumeVideo(); startPolling(); } }). Casos de uso: pausar vídeo/animações, reduzir polling de API, salvar estado, economizar bateria em mobile. Browsers já pausam requestAnimationFrame automaticamente em abas inativas.',
    tags: ['page-visibility', 'visibilitychange', 'performance', 'bateria', 'polling'],
  },
  {
    id: 'web-064',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a Share API? Como integrar compartilhamento nativo do SO em uma PWA?',
    hints: ['navigator.share', 'Web Share API', 'Mobile principalmente'],
    explanation: 'Web Share API: abre o diálogo de compartilhamento nativo do SO. navigator.share({ title: "Meu Artigo", text: "Confira este artigo", url: location.href }). Verificar suporte antes: if (navigator.canShare && navigator.canShare({ url })) { await navigator.share({...}) }. Suporte: Chrome mobile, Safari iOS/macOS 12.1+, Edge. Desktop: Chrome 89+, Firefox parcial. Casos de uso: "Compartilhar" em artigos de blog, fotos, produtos. Requer user gesture (click/touch) para funcionar.',
    tags: ['web-share', 'share-api', 'pwa', 'mobile', 'nativo'],
  },
  {
    id: 'web-065',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é o Screen Orientation API? Como criar uma app mobile que bloqueia orientação?',
    hints: ['screen.orientation', 'lock()', 'landscape e portrait'],
    explanation: 'Screen Orientation API controla e detecta orientação da tela. screen.orientation.type: "portrait-primary" | "landscape-primary" etc. Bloquear orientação: await screen.orientation.lock("landscape"). screen.orientation.addEventListener("change", handler). Desbloquear: screen.orientation.unlock(). Suporte: Chrome/Edge/Firefox em mobile. Safari iOS: lock() não suportado (apenas detectar). Em React: useEffect com cleanup. Requer fullscreen em alguns browsers. Casos de uso: jogos, players de vídeo, apps de câmera.',
    tags: ['screen-orientation', 'lock', 'landscape', 'portrait', 'mobile'],
  },
  {
    id: 'web-066',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Storybook? Como usar para desenvolver e documentar componentes isolados?',
    hints: ['Ambiente isolado', 'Stories', 'Args e controls', 'Testes visuais'],
    explanation: 'Storybook: ambiente de desenvolvimento para componentes UI em isolamento — sem precisar do app inteiro. Stories: exemplos de um componente em diferentes estados/props. Args: props configuráveis no Controls panel. CSF (Component Story Format): export default { component: Button }; export const Primary = { args: { label: "Click", variant: "primary" } }. Add-ons: accessibility (axe), viewport (mobile/desktop), interactions (teste de UI). Chromatic (cloud): visual regression testing. Publish Storybook como documentação viva do design system.',
    tags: ['storybook', 'componentes', 'documentacao', 'stories', 'design-system'],
  },
  {
    id: 'web-067',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é Visual Regression Testing? Como implementar com Chromatic ou Percy?',
    hints: ['Screenshot comparison', 'PR review de mudanças visuais', 'Snapshots de UI'],
    explanation: 'Visual Regression Testing: compara screenshots de componentes entre commits para detectar mudanças visuais não intencionais. Chromatic (by Storybook): integra com Storybook, detecta mudanças visuais em PRs — aprove ou rejeite cada mudança. Percy (BrowserStack): similar, mais maduro para apps além de componentes. Workflow: push PR → build Storybook → Chromatic captura screenshots → compara com baseline → aprovação humana das mudanças. Detecta: mudanças de cor, font, spacing, layout. Essencial para design systems.',
    tags: ['visual-regression', 'chromatic', 'percy', 'storybook', 'screenshot'],
  },
  {
    id: 'web-068',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Lighthouse? Como usar para auditoria de performance e acessibilidade?',
    hints: ['Chrome DevTools', 'CLI', 'CI integration', 'Performance score'],
    explanation: 'Lighthouse: ferramenta automatizada de auditoria de qualidade web. Métricas: Performance (LCP, TBT, CLS, FCP), Accessibility (axe), Best Practices, SEO, PWA. Como usar: (1) Chrome DevTools → Lighthouse tab; (2) CLI: npx lighthouse https://site.com --output html; (3) CI com lighthouse-ci: threshold de score mínimo — falha o build se cair. Scores 0-100. Meta: Performance > 90, Accessibility > 95. Importante: rode em condições similares à produção (modo incógnito, throttle de rede).',
    tags: ['lighthouse', 'performance', 'acessibilidade', 'auditoria', 'ci'],
  },
  {
    id: 'web-069',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é axe-core? Como integrar testes de acessibilidade automatizados?',
    hints: ['Detecta violações de WCAG', 'jest-axe', 'Storybook addon'],
    explanation: 'axe-core: biblioteca de testes de acessibilidade automatizados — detecta violações de WCAG. Integração com testes: jest-axe — npm install jest-axe; import { axe, toHaveNoViolations } from "jest-axe"; expect.extend(toHaveNoViolations); const { container } = render(<Button/>); expect(await axe(container)).toHaveNoViolations(). Integração com Storybook: @storybook/addon-a11y — painel de violações em cada story. Integração com Playwright: @axe-core/playwright. Detecta: falta de alt text, contraste insuficiente, falta de labels, ordem de heading errada.',
    tags: ['axe-core', 'acessibilidade', 'jest-axe', 'testes', 'wcag'],
  },
  {
    id: 'web-070',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar monitoramento de erros com Sentry em um projeto Next.js?',
    hints: ['@sentry/nextjs', 'Source maps', 'Error boundary', 'Session replay'],
    explanation: 'Configuração: npx @sentry/wizard@latest -i nextjs. Automaticamente configura: (1) sentry.client.config.ts e sentry.server.config.ts; (2) withSentryConfig no next.config.js (source maps automáticos); (3) Error boundary global. Features: (1) Captures JS errors com stack trace humanizado (source maps); (2) Breadcrumbs: ações do usuário antes do erro; (3) Session Replay: vídeo do que o usuário fez; (4) Performance: traces de requests; (5) Release tracking: associa erros a deploys. DSN em variável de ambiente. Amostragem: sampleRate: 0.1 para 10% das sessões.',
    tags: ['sentry', 'error-monitoring', 'source-maps', 'nextjs', 'session-replay'],
  },
  {
    id: 'web-071',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Battery Status API? Como detectar nível de bateria?',
    hints: ['navigator.getBattery()', 'level, charging', 'Privacidade limitada'],
    explanation: 'Battery Status API: acessa informações da bateria do dispositivo. navigator.getBattery().then(battery => { console.log(battery.level * 100 + "%"); console.log(battery.charging ? "Carregando" : "Descarregando"); battery.addEventListener("chargingchange", () => {}); }). Disponível principalmente em Android Chrome. Desativada no Firefox e Safari por privacidade (fingerprinting). Caso de uso: reduzir atualizações em background quando bateria baixa, desativar animações pesadas. Não confie demais nessa API — suporte limitado.',
    tags: ['battery-api', 'nivel-bateria', 'privacidade', 'dispositivo', 'performace'],
  },
  {
    id: 'web-072',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Vibration API? Como criar feedback tátil em aplicações web?',
    hints: ['navigator.vibrate()', 'Padrões', 'Mobile apenas'],
    explanation: 'Vibration API: controla o motor de vibração do dispositivo. navigator.vibrate(200) — vibra por 200ms. navigator.vibrate([100, 30, 100]) — padrão: vibra 100ms, pausa 30ms, vibra 100ms. navigator.vibrate(0) ou navigator.vibrate([]) — para vibração. Suporte: Chrome Android, Firefox Android. iOS/Safari: não suportado. Casos de uso: feedback em jogos, confirmação de ação (submit de formulário), alertas de notificação em PWAs. Use com moderação — vibração excessiva é intrusiva.',
    tags: ['vibration-api', 'haptic', 'mobile', 'feedback', 'pwa'],
  },
  {
    id: 'web-073',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Network Information API? Como adaptar a experiência ao tipo de conexão?',
    hints: ['navigator.connection', 'effectiveType', 'downlink', 'saveData'],
    explanation: 'Network Information API: informações sobre a conexão do usuário. navigator.connection: { effectiveType: "4g"|"3g"|"2g"|"slow-2g", downlink: Mbps, rtt: ms, saveData: boolean }. Adaptar experiência: if (navigator.connection?.saveData || navigator.connection?.effectiveType === "2g") { loadLowQualityImages(); skipVideoAutoplay(); }. navigator.connection.addEventListener("change", handler) — detecta mudanças. Suporte: Chrome/Android. Safari/Firefox: suporte limitado. Use como progressive enhancement — não como requisito.',
    tags: ['network-api', 'conexao', 'adaptive', 'saveData', '4g'],
  },
  {
    id: 'web-074',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a Payment Request API? Como integrar pagamentos nativos no browser?',
    hints: ['navigator.paymentRequest', 'PaymentMethodData', 'Apple Pay, Google Pay'],
    explanation: 'Payment Request API: interface padronizada para pagamentos no browser. Permite que o browser mostre UI nativa de pagamento com cartões salvos, Apple Pay, Google Pay. const request = new PaymentRequest([{ supportedMethods: "basic-card" }], { total: { label: "Total", amount: { currency: "BRL", value: "29.90" } } }). const response = await request.show(); await processPayment(response.methodDetails); await response.complete("success"). Benefícios: UX melhor (sem digitar número de cartão), mais seguro (dados no browser, não na página), mais conversão.',
    tags: ['payment-request', 'apple-pay', 'google-pay', 'pagamento', 'browser'],
  },
  {
    id: 'web-075',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Contact Picker API? Como selecionar contatos do dispositivo?',
    hints: ['navigator.contacts.select()', 'Permissions', 'Mobile'],
    explanation: 'Contact Picker API: acessa contatos do dispositivo de forma segura — o usuário escolhe quais compartilhar, a app não vê toda a agenda. const contacts = await navigator.contacts.select(["name", "email", "tel"], { multiple: true }). Retorna array com as propriedades solicitadas dos contatos selecionados. Suporte: Chrome Android 80+, Safari iOS 14.5+. Caso de uso: compartilhar com contatos, preenchimento automático de destinatários em formulários. Verificar suporte: "contacts" in navigator && "ContactsManager" in window.',
    tags: ['contact-picker', 'agenda', 'mobile', 'privacidade', 'compartilhar'],
  },
  {
    id: 'web-076',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é a Background Fetch API? Como baixar arquivos grandes em background?',
    hints: ['Service Worker', 'Persiste entre fechamentos', 'Progress'],
    explanation: 'Background Fetch API: permite downloads e uploads grandes que continuam mesmo se o usuário fechar a aba. Requer Service Worker. const bgFetch = await registration.backgroundFetch.fetch("my-podcast", ["/audio/episode.mp3"], { title: "Baixando episódio", icons: [{ src: "/icon.png", sizes: "192x192", type: "image/png" }] }). bgFetch.addEventListener("progress", () => { const ratio = bgFetch.downloaded / bgFetch.downloadTotal; }). No Service Worker: backgroundfetchsuccess event para processar. Suporte: Chrome 74+, Edge.',
    tags: ['background-fetch', 'download', 'service-worker', 'offline', 'progress'],
  },
  {
    id: 'web-077',
    domain: 'javascript',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é a Screen Wake Lock API? Como prevenir que a tela apague?',
    hints: ['navigator.wakeLock', 'sentinel', 'Release ao perder foco'],
    explanation: 'Screen Wake Lock API: previne que a tela apague durante operações importantes (ex: apresentações, receitas, GPS). const sentinel = await navigator.wakeLock.request("screen"). Para liberar: await sentinel.release(). Release automático quando aba fica inativa. Por isso, re-adquira ao visibilitychange: document.addEventListener("visibilitychange", async () => { if (document.visibilityState === "visible") sentinel = await navigator.wakeLock.request("screen"); }). Suporte: Chrome 84+, Edge, Firefox (parcial). Requer HTTPS.',
    tags: ['wake-lock', 'tela', 'apresentacao', 'receita', 'gps'],
  },
  {
    id: 'web-078',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é Testing Coverage e como configurar no Vitest?',
    hints: ['--coverage', 'v8 ou istanbul', 'thresholds', 'ignore patterns'],
    explanation: 'Code coverage no Vitest: configure em vite.config.ts: test: { coverage: { provider: "v8", reporter: ["text", "html", "lcov"], all: true, include: ["src/**"], exclude: ["src/**/*.test.*"], thresholds: { global: { statements: 80, branches: 70, functions: 80, lines: 80 } } } }. Execute: vitest run --coverage. Relatório HTML mostra quais linhas foram executadas. Integração CI: falha se thresholds não atingidos. Lcov: formato para integração com CodeCov ou outros serviços. Não persiga 100% — foque em branches críticos.',
    tags: ['coverage', 'vitest', 'v8', 'thresholds', 'lcov'],
  },
  {
    id: 'web-079',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como implementar testes de acessibilidade automatizados com axe e Playwright?',
    hints: ['@axe-core/playwright', 'checkA11y', 'injectAxe', 'Violações como falhas'],
    explanation: `Acessibilidade E2E com Playwright + axe:
\`\`\`typescript
import { test, expect } from "@playwright/test";
import { checkA11y, injectAxe } from "axe-playwright";

test("homepage deve ser acessível", async ({ page }) => {
  await page.goto("/");
  await injectAxe(page);
  await checkA11y(page, undefined, {
    detailedReport: true,
    axeOptions: {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] }
    }
  });
});
// Falha automaticamente se houver violações de WCAG 2.0 A ou AA
// Integre no CI para detectar regressões de acessibilidade
\`\`\``,
    tags: ['axe', 'playwright', 'acessibilidade', 'wcag', 'automacao'],
  },
  {
    id: 'web-080',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `cy.intercept()` no Cypress? Como usar para mockar APIs em testes E2E?',
    hints: ['Intercepta requests', 'Substituir por fixture', 'Spy em chamadas'],
    explanation: `Cypress intercept para mockar APIs em E2E:
\`\`\`javascript
// Mock de response:
cy.intercept("GET", "/api/users", { fixture: "users.json" });

// Mock com handler:
cy.intercept("POST", "/api/orders", (req) => {
  expect(req.body.total).to.be.greaterThan(0);
  req.reply({ statusCode: 201, body: { id: "order-123" } });
});

// Spy sem mock:
cy.intercept("GET", "/api/products").as("getProducts");
cy.visit("/products");
cy.wait("@getProducts").then(({ response }) => {
  expect(response.statusCode).to.eq(200);
});
\`\`\``,
    tags: ['cypress', 'intercept', 'mock', 'fixture', 'e2e'],
  },
  {
    id: 'web-081',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como testar hooks com `renderHook` e `act` do Testing Library?',
    hints: ['renderHook retorna result', 'act para state updates', 'waitForNextUpdate'],
    explanation: `\`\`\`typescript
import { renderHook, act, waitFor } from "@testing-library/react";

// Hook síncrono:
it("useCounter incrementa", () => {
  const { result } = renderHook(() => useCounter(0));
  act(() => { result.current.increment(); });
  expect(result.current.count).toBe(1);
});

// Hook com Context:
it("useAuth retorna user", () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuth(), { wrapper });
  expect(result.current.user).toBeNull();
});

// Hook assíncrono:
it("useFetch carrega dados", async () => {
  const { result } = renderHook(() => useFetch("/api/data"));
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toBeDefined();
});
\`\`\``,
    tags: ['renderHook', 'act', 'testing-library', 'hooks', 'context'],
  },
  {
    id: 'web-082',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `userEvent` do Testing Library? Por que é preferido sobre `fireEvent`?',
    hints: ['Simula comportamento real do usuário', 'Sequência de eventos', 'Mais preciso'],
    explanation: 'userEvent: simula interações do usuário de forma mais realística que fireEvent. Diferença: fireEvent.click dispara apenas o evento click. userEvent.click dispara a sequência completa: mouseenter, mouseover, mousedown, mouseup, click, mouseleave. Para typing: userEvent.type dispara keydown, keypress, keyup para cada caractere — igual ao comportamento real. Isso detecta bugs que fireEvent mascara (ex: botão que só funciona quando pointer enter event é processado). Configuração: const user = userEvent.setup() (com timer control em vitest). Use userEvent para a grande maioria dos testes.',
    tags: ['userEvent', 'fireEvent', 'testing-library', 'interacao', 'simulacao'],
  },
  {
    id: 'web-083',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como fazer contract testing entre frontend e backend?',
    hints: ['Pact', 'Consumer-driven contracts', 'Independência de deploy'],
    explanation: 'Contract testing verifica que consumidor e provedor concordam com o contrato da API — sem precisar de E2E integration tests. Pact: (1) Consumer (frontend) define expectativas; (2) Gera um arquivo de pact (contrato); (3) Provedor (backend) verifica que implementa o contrato. Benefício: frontend e backend podem deployar independentemente sem quebrar. Processo: npm install @pact-foundation/pact. Consumer test define o que espera da API. Provedor verifica com pact:verify. Mais leve que E2E, mais confiável que mocks.',
    tags: ['contract-testing', 'pact', 'consumer-driven', 'deploy-independente', 'api'],
  },
  {
    id: 'web-084',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é test isolation? Como garantir que testes não se interferem?',
    hints: ['beforeEach/afterEach', 'Sem estado global', 'Cleanup automático RTL', 'Mocks resetados'],
    explanation: 'Test isolation: cada teste deve rodar independentemente, sem depender de outros. Práticas: (1) beforeEach para setup, afterEach para teardown; (2) Testing Library: cleanup automático após cada teste (unmount do componente); (3) Vitest: vi.clearAllMocks() no afterEach ou configurar clearMocks: true no config; (4) Banco de dados: use transações que são rollback após cada teste; (5) HTTP mocks: resetHandlers() no afterEach no MSW; (6) LocalStorage: limpar no afterEach; (7) Nunca compartilhe estado mutável entre testes. Violação de isolamento causa testes que passam sozinhos mas falham em conjunto.',
    tags: ['isolamento', 'beforeEach', 'afterEach', 'cleanup', 'mocks'],
  },
  {
    id: 'web-085',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como testar componentes com Zustand store em testes unitários?',
    hints: ['Criar store separado por teste', 'Provider wrapper', 'Resetar estado'],
    explanation: `Testando com Zustand:
\`\`\`typescript
import { renderWithStore } from "./test-utils";

// Criar factory de store para isolamento:
const createStore = () => create<CounterStore>((set) => ({
  count: 0,
  increment: () => set(s => ({ count: s.count + 1 })),
}));

// Em cada teste, nova instância:
it("componente exibe contador", () => {
  const store = createStore();
  render(
    <StoreContext.Provider value={store}>
      <Counter />
    </StoreContext.Provider>
  );
  expect(screen.getByText("0")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("1")).toBeInTheDocument();
});
\`\`\``,
    tags: ['zustand', 'teste', 'store', 'isolamento', 'provider'],
  },
  {
    id: 'web-086',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é `findBy*` vs `getBy*` vs `queryBy*` no Testing Library?',
    hints: ['findBy: async wait', 'getBy: throws if not found', 'queryBy: null if not found'],
    explanation: 'Variantes de query do Testing Library: getBy*: retorna o elemento ou lança erro se não encontrado — use quando o elemento DEVE estar na tela. queryBy*: retorna o elemento ou null — use para verificar que algo NÃO está: expect(queryByText("Loading")).toBeNull(). findBy*: async, aguarda o elemento aparecer (combina waitFor + getBy) — use para elementos assíncronos. Preferência: findBy para conteúdo assíncrono, getBy para síncrono, queryBy para verificações negativas. Versões *All retornam arrays.',
    tags: ['findBy', 'getBy', 'queryBy', 'testing-library', 'queries'],
  },
  {
    id: 'web-087',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'Como configurar e usar o coverage badge no GitHub com Codecov?',
    hints: ['CODECOV_TOKEN', 'GitHub Actions', 'lcov.info', 'Badge no README'],
    explanation: 'Setup Codecov: (1) Crie conta em codecov.io e conecte o repositório; (2) Configure no GitHub Actions: - run: pnpm test --coverage; - uses: codecov/codecov-action@v4 with: token: ${{ secrets.CODECOV_TOKEN }} files: ./coverage/lcov.info; (3) Adicione badge no README: [![codecov](https://codecov.io/gh/user/repo/branch/main/graph/badge.svg?token=TOKEN)](url); (4) Configure required status check no GitHub: PR não pode ser mergeado se coverage diminuir. Codecov mostra diff de coverage por arquivo para cada PR.',
    tags: ['codecov', 'coverage-badge', 'github-actions', 'lcov', 'pr'],
  },
  {
    id: 'web-088',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é o Prettier e como configurar opções para um projeto React/TypeScript?',
    hints: ['Formatação opinativa', 'Sem debates de estilo', 'Integration com ESLint'],
    explanation: 'Prettier: formatador automático sem muita configuração. .prettierrc: { "semi": true, "singleQuote": true, "tabWidth": 2, "trailingComma": "all", "printWidth": 100, "arrowParens": "always" }. Integração com ESLint: npm install eslint-config-prettier — desativa regras do ESLint que conflitam. Adicione "prettier" ao final do extends no ESLint. .prettierignore: similar ao .gitignore para arquivos que o Prettier não deve formatar. Editor: configure "format on save" + Prettier extension. Funciona com: TypeScript, JSX, CSS, JSON, Markdown.',
    tags: ['prettier', 'formatacao', 'eslint', 'configuracao', 'typescript'],
  },
  {
    id: 'web-089',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    text: 'O que é commitlint? Como enforçar mensagens de commit padronizadas?',
    hints: ['husky hook', 'commit-msg', 'conventional commits', 'Falha se não seguir'],
    explanation: 'Commitlint valida mensagens de commit contra uma especificação. Setup: npm install @commitlint/cli @commitlint/config-conventional. commitlint.config.js: module.exports = { extends: ["@commitlint/config-conventional"] }. Integrar com Husky: npx husky add .husky/commit-msg "npx commitlint --edit $1". Agora commits inválidos são rejeitados: git commit -m "fix stuff" → falha. git commit -m "fix: corrigir bug no login" → passa. Combine com commitizen (npm install commitizen) para CLI interativa que ajuda a formatar mensagens.',
    tags: ['commitlint', 'husky', 'commit-msg', 'conventional-commits', 'validacao'],
  },
  {
    id: 'web-090',
    domain: 'software_engineering',
    type: 'open_text',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    text: 'O que é semantic-release? Como automatizar versioning e changelog?',
    hints: ['Conventional commits para semver', 'npm publish automático', 'GitHub releases'],
    explanation: 'semantic-release: automatiza o processo de release baseado nas mensagens de commit. feat: → minor version bump (0.1.0 → 0.2.0). fix: → patch bump (0.1.0 → 0.1.1). BREAKING CHANGE: → major bump (0.1.0 → 1.0.0). Gera: CHANGELOG.md automático, GitHub Release com notas, npm publish, tag de versão. Configuração: .releaserc.json ou campo "release" no package.json. Requer: Conventional Commits, CI/CD, NPM_TOKEN e GITHUB_TOKEN como secrets. Execute apenas na branch main/master após testes passarem.',
    tags: ['semantic-release', 'semver', 'changelog', 'npm-publish', 'automacao'],
  },
]
