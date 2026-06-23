# Plano de conteúdo — Trilha "Web Fundamentals" (baseada no currículo MDN Learn Web Development)

## Contexto

Pedido do usuário: adicionar perguntas de múltipla escolha para a lista de subtemas fornecida (currículo estilo MDN "Learn web development"), 5 perguntas por item, seguindo o padrão já usado em `add-questions.json` (PT/EN, 5 alternativas, `hint`, `explanation`, `example`, `analogy`, `topic_explanation`, `tags`), e que cada item seja adicionado como um tema selecionável.

A lista original tem 112 linhas. Nem toda linha é um "tema" testável de forma independente:

- **Cabeçalhos de seção** (ex.: "Web standards", "Structuring content with HTML", "Web forms") agrupam outros itens da lista — não são, por si só, um conceito para gerar pergunta, e sim um agrupador.
- **Páginas de teste/desafio** (ex.: "Test: Links", "Challenge: Bird watching site", "Test: HTML tests index") são exercícios práticos de uma página específica do MDN, não um conceito técnico autônomo — o conceito que elas avaliam já é coberto pelo tema "pai" da lição correspondente.
- **Itens genéricos de catálogo** (ex.: "Additional tutorials", "Further resources") não descrevem um conceito, só um link para outros materiais.
- **Duplicações no fim da lista** ("Web mechanics" ~ "Web standards"/"How the web works"; "Tools and setup" ~ "Understanding client-side tools"; "Design and accessibility" ~ "Accessibility" + "Design for developers") parecem repetir seções já cobertas.

**Decisão de filtragem aplicada neste plano** (sujeita à confirmação do usuário): manter como temas reais apenas os itens que representam um conceito técnico ensinável, e tratar cabeçalhos de seção como agrupadores de organização neste documento (não geram pergunta própria). Itens "Introduction"/"Overview" que se repetem em seções diferentes são renomeados com o prefixo da seção para ficarem específicos (ex.: "Client-side Web APIs: Introduction").

Resultado: **75 temas reais**, 5 perguntas cada = **375 perguntas** no total desta trilha. Volume grande demais para gerar em uma única rodada com qualidade — será feito em lotes (batches), como já vínhamos fazendo nos temas anteriores (1 tema por rodada ali; aqui, como cada tema tem só 5 perguntas em vez de 20, o equivalente de esforço é ~4 temas por rodada).

## Formato de cada tema (mantém o padrão de `add-questions.json`)

```json
{
  "topic_id": "kebab-case-id",
  "name_pt": "Nome em português",
  "name_en": "Name in English",
  "questions": [
    {
      "question_id": "topic-id-01",
      "difficulty": "easy|medium|hard",
      "question_pt": "...", "question_en": "...",
      "options_pt": [{"label":"A","text":"..."}, ...5],
      "options_en": [{"label":"A","text":"..."}, ...5],
      "correct_option": "A",
      "explanation_pt": "...", "explanation_en": "...",
      "hint_pt": "...", "hint_en": "...",
      "example_pt": "...", "example_en": "...",
      "analogy_pt": "...", "analogy_en": "...",
      "topic_explanation_pt": "...", "topic_explanation_en": "...",
      "tags": ["..."]
    }
  ]
}
```

Distribuição de dificuldade sugerida por tema de 5 perguntas: 2 easy, 2 medium, 1 hard (proporcional ao padrão 3/7/10 usado nos temas de 20 perguntas).

## Mapeamento e status

Legenda de status: `pending` (não iniciado), `in_progress`, `done`.

### Seção: HTML — Structuring content with HTML (14 temas)

| # | topic_id | Nome (PT) | Origem na lista | Status |
|---|---|---|---|---|
| 1 | html-basic-syntax | Sintaxe básica de HTML | Basic HTML syntax | done |
| 2 | html-page-metadata | Metadados da página (`<head>`, `<meta>`, `<title>`) | Web page metadata | done |
| 3 | html-headings-paragraphs | Títulos e parágrafos | Headings and paragraphs | done |
| 4 | html-emphasis-importance | Ênfase e importância (`<em>`, `<strong>`) | Emphasis and importance | done |
| 5 | html-lists | Listas (`<ul>`, `<ol>`, `<dl>`) | Lists | done |
| 6 | html-advanced-text | Recursos avançados de texto | Advanced text features | done |
| 7 | html-structuring-documents | Estruturação de documentos (semântica) | Structuring documents | done |
| 8 | html-creating-links | Criando links | Creating links | done |
| 9 | html-images | Imagens | Images | pending |
| 10 | html-video-audio | Vídeo e áudio | Video and audio | pending |
| 11 | html-table-basics | Tabelas: o básico | Table basics | pending |
| 12 | html-table-accessibility | Acessibilidade em tabelas | Table accessibility | pending |
| 13 | html-forms-buttons | Formulários e botões (introdução) | Forms and buttons | pending |
| 14 | html-debugging | Debugando HTML | Debugging HTML | pending |

### Seção: CSS (3 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 15 | css-styling-basics | Fundamentos de estilização CSS | CSS styling basics | pending |
| 16 | css-text-styling | Estilização de texto em CSS | CSS text styling | pending |
| 17 | css-layout | Layout em CSS | CSS layout | pending |

### Transversais (4 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 18 | js-dynamic-scripting | Scripting dinâmico com JavaScript (introdução) | Dynamic scripting with JavaScript | pending |
| 19 | js-frameworks-libraries | Frameworks e bibliotecas JavaScript | JavaScript frameworks and libraries | pending |
| 20 | web-accessibility | Acessibilidade web | Accessibility | pending |
| 21 | web-design-for-developers | Design para desenvolvedores | Design for developers | pending |
| 22 | version-control | Controle de versão | Version control | pending |

### Seção: Advanced JavaScript objects / OOP (4 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 23 | js-object-prototypes | Prototypes de objetos | Object prototypes | pending |
| 24 | js-oop-concepts | Programação orientada a objetos | Object-oriented programming | pending |
| 25 | js-classes | Classes em JavaScript | Classes in JavaScript | pending |
| 26 | js-object-building-practice | Prática de construção de objetos | Object building practice | pending |

### Seção: Client-side Web APIs (5 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 27 | webapi-introduction | APIs do navegador: introdução | Client-side web APIs > Introduction | pending |
| 28 | webapi-video-audio | APIs de vídeo e áudio | Client-side web APIs > Video and audio | pending |
| 29 | webapi-drawing-graphics | Desenho gráfico (Canvas/SVG) | Drawing graphics | pending |
| 30 | webapi-client-storage | Armazenamento no cliente (localStorage, IndexedDB) | Client-side storage | pending |
| 31 | webapi-third-party | APIs de terceiros | Third-party APIs | pending |

### Seção: Asynchronous JavaScript (4 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 32 | async-js-introduction | JavaScript assíncrono: introdução | Asynchronous JavaScript > Introduction | pending |
| 33 | async-js-promises | Usando Promises | Using promises | pending |
| 34 | async-js-promise-based-apis | Implementando APIs baseadas em Promise | Implementing promise-based APIs | pending |
| 35 | async-js-workers | Introdução a Web Workers | Introducing workers | pending |

### Seção: Web forms (12 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 36 | forms-first-form | Seu primeiro formulário | Your first form | pending |
| 37 | forms-structure | Como estruturar um formulário web | How to structure a web form | pending |
| 38 | forms-native-controls | Controles nativos básicos de formulário | Basic native form controls | pending |
| 39 | forms-html5-input-types | Tipos de input do HTML5 | The HTML5 input types | pending |
| 40 | forms-other-controls | Outros controles de formulário | Other form controls | pending |
| 41 | forms-styling | Estilizando formulários web | Styling web forms | pending |
| 42 | forms-advanced-styling | Estilização avançada de formulários | Advanced form styling | pending |
| 43 | forms-customizable-selects | Selects customizáveis | Customizable selects | pending |
| 44 | forms-customizable-listboxes | Listboxes customizáveis | Customizable listboxes | pending |
| 45 | forms-ui-pseudo-classes | Pseudo-classes de UI de formulário | UI pseudo-classes | pending |
| 46 | forms-client-validation | Validação de formulário no cliente | Client-side form validation | pending |
| 47 | forms-sending-data | Enviando dados de formulário | Sending form data | pending |

### Seção: Understanding client-side tools (4 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 48 | tooling-overview | Ferramentas de cliente: visão geral | Overview | pending |
| 49 | tooling-package-management | Gerenciamento de pacotes | Package management | pending |
| 50 | tooling-sample-toolchain | Exemplo de toolchain | Sample toolchain | pending |
| 51 | tooling-deploying-app | Deploy de uma aplicação | Deploying our app | pending |

### Seção: Server-side websites (3 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 52 | server-side-first-steps | Primeiros passos no server-side | First steps | pending |
| 53 | server-side-django | Django (Python) | Django (Python) | pending |
| 54 | server-side-express | Express (Node.js) | Express (Node.js) | pending |

### Seção: Web performance (11 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 55 | perf-why-it-matters | Por que performance web importa | The "why" of web performance | pending |
| 56 | perf-what-is-it | O que é performance web | What is web performance? | pending |
| 57 | perf-perceived-performance | Performance percebida | Perceived performance | pending |
| 58 | perf-measuring | Medindo performance | Measuring performance | pending |
| 59 | perf-multimedia-images | Performance de imagens | Multimedia: Images | pending |
| 60 | perf-multimedia-video | Performance de vídeo | Multimedia: video | pending |
| 61 | perf-javascript | JavaScript performático | Performant JavaScript | pending |
| 62 | perf-html | HTML performático | Performant HTML | pending |
| 63 | perf-css | CSS performático | Performant CSS | pending |
| 64 | perf-business-case | O caso de negócio da performance | Performance business case | pending |
| 65 | perf-best-practices | Boas práticas e dicas de performance | Best practices & tips | pending |

### Seção: Testing (6 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 66 | testing-introduction | Testes: introdução | Testing > Introduction | pending |
| 67 | testing-strategies | Estratégias de teste | Testing strategies | pending |
| 68 | testing-common-html-css-problems | Problemas comuns de HTML e CSS (testing) | Common HTML and CSS problems | pending |
| 69 | testing-feature-detection | Detecção de funcionalidades (feature detection) | Feature detection | pending |
| 70 | testing-automated-testing | Testes automatizados | Automated testing | pending |
| 71 | testing-automation-env-setup | Configuração de ambiente de automação | Automation environment setup | pending |

### Seção: How to solve common problems (3 temas)

| # | topic_id | Nome (PT) | Origem | Status |
|---|---|---|---|---|
| 72 | common-problems-css | Problemas comuns de CSS | Common CSS problems | pending |
| 73 | common-problems-html | Problemas comuns de HTML | Common HTML problems | pending |
| 74 | common-problems-js | Problemas comuns de JavaScript | Common JavaScript problems | pending |

### Itens descartados / mesclados (não geram tema próprio)

| Item da lista original | Motivo |
|---|---|
| Web standards, Structuring content with HTML, Advanced JavaScript objects, Client-side web APIs, Asynchronous JavaScript, Web forms, Understanding client-side tools, Server-side websites, Web performance, Testing, How to solve common problems | Cabeçalhos de seção — usados como agrupadores neste documento |
| How the web works, The web standards model, How browsers load websites | Sobrepõem o tema já existente `browser-rendering-pipeline` (adicionado anteriormente) — não duplicar |
| Test: HTML text basics, Test: Advanced HTML text, Challenge: Letter markup, Test: Links, Challenge: Bird watching site, Test: Images, Test: Audio and video, Challenge: Splash page, Challenge: Planet data table, Test: Forms and buttons, Challenge: Feedback form, Test: HTML tests index, Test: Object-oriented JavaScript, Challenge: Bouncing balls features, Test: OOJS tests index, Challenge: Animation sequence | Páginas de exercício/avaliação de uma lição específica do MDN, não um conceito autônomo |
| Additional tutorials (×3), Further resources | Catálogos de links, sem conceito próprio |
| Extension modules | Item de menu do MDN sem conceito técnico definido |
| Web mechanics, Design and accessibility, Tools and setup | Duplicam seções já cobertas (Web standards / Accessibility + Design for developers / Understanding client-side tools) |

## Lotes de execução propostos

Cada lote ≈ 4 temas (20 perguntas), no mesmo ritmo de esforço dos temas anteriores de `add-questions.json`:

1. **Lote 1**: html-basic-syntax, html-page-metadata, html-headings-paragraphs, html-emphasis-importance
2. **Lote 2**: html-lists, html-advanced-text, html-structuring-documents, html-creating-links
3. **Lote 3**: html-images, html-video-audio, html-table-basics, html-table-accessibility
4. **Lote 4**: html-forms-buttons, html-debugging, css-styling-basics, css-text-styling
5. ... (continua pela tabela acima, na ordem listada, até o tema 74)

Ao final de cada lote: validação automática (JSON válido, sem ID duplicado, 5 alternativas por pergunta, `correct_option` válido em PT/EN, contagem de metadados) — igual ao processo já usado nos temas anteriores.

## Pendências de decisão do usuário

1. Confirmar a filtragem proposta (seções/testes/desafios/duplicados descartados).
2. Confirmar o tamanho do lote por rodada (proposto: 4 temas / 20 perguntas).
3. Confirmar se o Lote 1 pode começar imediatamente.
