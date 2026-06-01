export type {
  SeniorityLevel,
  XpEventType,
  XpEvent,
  Achievement,
  DomainStats,
  UserProgress,
} from './gamification/types'

export type {
  QuestionType,
  KnowledgeDomain,
  DifficultyLevel,
  MultipleChoiceOption,
  Question,
  Answer,
  SessionStatus,
  SessionConfig,
  QuestionResult,
  Session,
} from './session/types'

export type { AiFeedbackRequest, AiFeedbackResponse } from './feedback/types'

export { XP_THRESHOLDS, LEVEL_ORDER, calculateLevel, getXpToNextLevel } from './gamification/levelResolver'
export { calculateXp, DIFFICULTY_XP_BASE, STREAK_MULTIPLIERS } from './gamification/xpCalculator'
export { ACHIEVEMENTS, checkUnlockedAchievements } from './gamification/achievementEngine'
export { selectQuestions } from './session/questionSelector'
export { createSession, advanceSession, completeSession } from './session/sessionOrchestrator'
export { ALL_QUESTIONS } from './data'
