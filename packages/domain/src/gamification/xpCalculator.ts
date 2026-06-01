import type { DifficultyLevel } from '../session/types'
import type { XpEvent, XpEventType } from './types'

export const DIFFICULTY_XP_BASE: Record<DifficultyLevel, number> = {
  1: 20,
  2: 35,
  3: 55,
  4: 80,
  5: 120,
}

export const STREAK_MULTIPLIERS: Record<number, number> = {
  3: 1.2,
  5: 1.5,
  7: 1.75,
  10: 2.0,
}

function getStreakMultiplier(streak: number): number {
  const thresholds = Object.keys(STREAK_MULTIPLIERS)
    .map(Number)
    .sort((a, b) => b - a)

  const matched = thresholds.find((threshold) => streak >= threshold)
  return matched ? STREAK_MULTIPLIERS[matched] : 1
}

interface CalculateXpOptions {
  readonly score: number
  readonly difficulty: DifficultyLevel
  readonly currentStreak: number
  readonly eventType?: XpEventType
}

export function calculateXp(options: CalculateXpOptions): XpEvent {
  const { score, difficulty, currentStreak, eventType = 'correct_answer' } = options

  const scoreRatio = score / 100
  const baseXp = DIFFICULTY_XP_BASE[difficulty]
  const streakMultiplier = getStreakMultiplier(currentStreak)

  const totalXp = Math.round(baseXp * scoreRatio * streakMultiplier)

  return {
    type: eventType,
    baseXp,
    multiplier: streakMultiplier,
    totalXp,
    timestamp: Date.now(),
  }
}
