import type { KnowledgeDomain, DifficultyLevel, QuestionLanguage } from '../session/types'

export interface HintRequest {
  readonly questionText: string
  readonly explanation: string
  readonly domain: KnowledgeDomain
  readonly difficulty: DifficultyLevel
  readonly language: QuestionLanguage
}

export interface HintResponse {
  readonly codeExample: string
  readonly technicalExplanation: string
  readonly analogy: string
}
