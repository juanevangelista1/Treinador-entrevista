export const SENIORITY_LEVELS = ['junior', 'pleno', 'pleno-senior', 'senior', 'staff'] as const

export type SeniorityLevel = (typeof SENIORITY_LEVELS)[number]

export type XpEventType =
  | 'correct_answer'
  | 'partial_answer'
  | 'streak_bonus'
  | 'domain_mastery'
  | 'session_complete'

export interface XpEvent {
  readonly type: XpEventType
  readonly baseXp: number
  readonly multiplier: number
  readonly totalXp: number
  readonly timestamp: number
}

export interface Achievement {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly xpReward: number
  readonly condition: (progress: UserProgress) => boolean
}

export interface DomainStats {
  readonly domain: string
  readonly totalAnswered: number
  readonly correctAnswers: number
  readonly averageScore: number
}

export interface UserProgress {
  readonly totalXp: number
  readonly currentLevel: SeniorityLevel
  readonly xpToNextLevel: number
  readonly currentStreak: number
  readonly longestStreak: number
  readonly unlockedAchievements: string[]
  readonly domainStats: Record<string, DomainStats>
  readonly xpHistory: XpEvent[]
  readonly sessionsCompleted: number
}
