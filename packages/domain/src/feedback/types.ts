import type { SeniorityLevel } from '../gamification/types'

export interface AiFeedbackRequest {
  readonly questionId: string
  readonly userAnswer: string
  readonly seniorityLevel: SeniorityLevel
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
