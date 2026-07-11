import type { KnowledgeDomain } from './types'

export interface MdnTopic {
  readonly id: string
  readonly domain: KnowledgeDomain
  readonly namePt: string
  readonly nameEn: string
}

export const MDN_TOPICS = [
  // internet_fundamentals
  { id: 'web-rendering-patterns', domain: 'internet_fundamentals', namePt: 'Padrões de Renderização Web', nameEn: 'Web Rendering Patterns' },
  { id: 'browser-rendering-pipeline', domain: 'internet_fundamentals', namePt: 'Pipeline de Renderização do Browser', nameEn: 'Browser Rendering Pipeline' },
  { id: 'http-cache-cdn', domain: 'internet_fundamentals', namePt: 'HTTP, Cache e CDN', nameEn: 'HTTP, Cache & CDN' },
  // html
  { id: 'html-basic-syntax', domain: 'html', namePt: 'Sintaxe básica de HTML', nameEn: 'Basic HTML Syntax' },
  { id: 'html-page-metadata', domain: 'html', namePt: 'Metadados da página', nameEn: 'Page Metadata' },
  { id: 'html-headings-paragraphs', domain: 'html', namePt: 'Títulos e parágrafos', nameEn: 'Headings & Paragraphs' },
  { id: 'html-emphasis-importance', domain: 'html', namePt: 'Ênfase e importância', nameEn: 'Emphasis & Importance' },
  { id: 'html-lists', domain: 'html', namePt: 'Listas HTML', nameEn: 'HTML Lists' },
  { id: 'html-advanced-text', domain: 'html', namePt: 'Recursos avançados de texto', nameEn: 'Advanced Text Features' },
  { id: 'html-structuring-documents', domain: 'html', namePt: 'Estruturação de documentos', nameEn: 'Structuring Documents' },
  { id: 'html-creating-links', domain: 'html', namePt: 'Criando links', nameEn: 'Creating Links' },
] as const satisfies MdnTopic[]

export type MdnTopicId = (typeof MDN_TOPICS)[number]['id']

export const MDN_TOPIC_IDS = MDN_TOPICS.map((t) => t.id) as MdnTopicId[]
