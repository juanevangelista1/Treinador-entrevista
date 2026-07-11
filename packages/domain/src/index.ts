export type {
  SeniorityLevel,
  XpEventType,
  XpEvent,
  Achievement,
  DomainStats,
  UserProgress,
} from './gamification/types'
export { SENIORITY_LEVELS } from './gamification/types'

export type {
  QuestionType,
  QuestionPreference,
  QuestionLanguage,
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
export { KNOWLEDGE_DOMAINS, DIFFICULTY_LEVELS, QUESTION_PREFERENCES } from './session/types'
export type { MdnTopic, MdnTopicId } from './session/mdnTopics'
export { MDN_TOPICS, MDN_TOPIC_IDS } from './session/mdnTopics'

export type { AiFeedbackRequest, AiFeedbackResponse } from './feedback/types'
export type { HintRequest, HintResponse } from './hint/types'

export { XP_THRESHOLDS, LEVEL_ORDER, calculateLevel, getXpToNextLevel, getLevelProgress } from './gamification/levelResolver'
export { calculateXp, DIFFICULTY_XP_BASE, STREAK_MULTIPLIERS } from './gamification/xpCalculator'
export { ACHIEVEMENTS, checkUnlockedAchievements } from './gamification/achievementEngine'
export { selectQuestions } from './session/questionSelector'
export { createSession, advanceSession, completeSession } from './session/sessionOrchestrator'
export { ALL_QUESTIONS } from './data'
