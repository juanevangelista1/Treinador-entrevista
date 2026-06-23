import type { SeniorityLevel } from '../gamification/types'

export type QuestionType = 'multiple_choice' | 'open_text' | 'true_false'

export const QUESTION_PREFERENCES = ['mixed', 'open_text', 'code', 'multiple_choice'] as const

export type QuestionPreference = (typeof QUESTION_PREFERENCES)[number]

export const KNOWLEDGE_DOMAINS = [
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'algorithms',
  'data_structures',
  'software_engineering',
  'html',
  'css',
  'internet_fundamentals',
] as const

export type KnowledgeDomain = (typeof KNOWLEDGE_DOMAINS)[number]

export const DIFFICULTY_LEVELS = [1, 2, 3, 4, 5] as const

export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number]

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
  readonly questionPreference?: QuestionPreference
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
