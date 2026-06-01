import type { SeniorityLevel } from '../gamification/types'
import type { KnowledgeDomain, Question } from '../session/types'

export interface AiFeedbackRequest {
  readonly question: Question
  readonly userAnswer: string
  readonly seniorityLevel: SeniorityLevel
  readonly domain: KnowledgeDomain
}

export interface AiFeedbackResponse {
  readonly score: number
  readonly verdict: 'correct' | 'partial' | 'incorrect'
  readonly feedback: string
  readonly hint: string
  readonly example: string
  readonly keyConceptsMissed: string[]
  readonly suggestedNextTopic: string
}
