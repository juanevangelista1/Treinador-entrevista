import type { SeniorityLevel } from '../gamification/types'

export type QuestionType = 'multiple_choice' | 'open_text' | 'true_false'

export type KnowledgeDomain =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'algorithms'
  | 'data_structures'
  | 'software_engineering'

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5

export interface MultipleChoiceOption {
  readonly id: string
  readonly text: string
  readonly isCorrect: boolean
}

export type QuestionLanguage = 'pt' | 'en'

export interface Question {
  readonly id: string
  readonly domain: KnowledgeDomain
  readonly type: QuestionType
  readonly difficulty: DifficultyLevel
  readonly targetLevel: SeniorityLevel[]
  readonly text: string
  readonly options?: MultipleChoiceOption[]
  readonly correctAnswer?: string
  readonly hints: string[]
  readonly explanation: string
  readonly tags: string[]
  readonly language?: QuestionLanguage
}

export interface Answer {
  readonly questionId: string
  readonly value: string
  readonly submittedAt: number
}

export type SessionStatus = 'idle' | 'active' | 'reviewing' | 'completed'

export interface SessionConfig {
  readonly seniorityLevel: SeniorityLevel
  readonly domains: KnowledgeDomain[]
  readonly totalQuestions: number
  readonly language: QuestionLanguage
}

export interface QuestionResult {
  readonly question: Question
  readonly answer: Answer
  readonly score: number
  readonly xpEarned: number
}

export interface Session {
  readonly id: string
  readonly config: SessionConfig
  readonly status: SessionStatus
  readonly questions: Question[]
  readonly currentQuestionIndex: number
  readonly results: QuestionResult[]
  readonly startedAt: number
  readonly completedAt?: number
}
