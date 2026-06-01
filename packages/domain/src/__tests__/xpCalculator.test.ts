import { describe, it, expect } from 'vitest'
import { calculateXp, DIFFICULTY_XP_BASE, STREAK_MULTIPLIERS } from '../gamification/xpCalculator'

describe('calculateXp', () => {
  it('returns 0 xp for score 0', () => {
    const event = calculateXp({ score: 0, difficulty: 1, currentStreak: 0 })
    expect(event.totalXp).toBe(0)
  })

  it('returns full base xp for score 100 with no streak', () => {
    const event = calculateXp({ score: 100, difficulty: 1, currentStreak: 0 })
    expect(event.totalXp).toBe(DIFFICULTY_XP_BASE[1])
    expect(event.multiplier).toBe(1)
  })

  it('applies streak multiplier at streak 3', () => {
    const event = calculateXp({ score: 100, difficulty: 1, currentStreak: 3 })
    expect(event.multiplier).toBe(STREAK_MULTIPLIERS[3])
    expect(event.totalXp).toBe(Math.round(DIFFICULTY_XP_BASE[1] * STREAK_MULTIPLIERS[3]))
  })

  it('applies highest applicable streak multiplier', () => {
    const event = calculateXp({ score: 100, difficulty: 2, currentStreak: 7 })
    expect(event.multiplier).toBe(STREAK_MULTIPLIERS[7])
  })

  it('scales xp proportionally to score', () => {
    const half = calculateXp({ score: 50, difficulty: 3, currentStreak: 0 })
    const full = calculateXp({ score: 100, difficulty: 3, currentStreak: 0 })
    expect(half.totalXp).toBe(Math.round(full.totalXp / 2))
  })

  it('uses correct base xp for each difficulty', () => {
    const difficulties = [1, 2, 3, 4, 5] as const
    difficulties.forEach((d) => {
      const event = calculateXp({ score: 100, difficulty: d, currentStreak: 0 })
      expect(event.baseXp).toBe(DIFFICULTY_XP_BASE[d])
    })
  })

  it('sets the correct event type', () => {
    const event = calculateXp({ score: 100, difficulty: 1, currentStreak: 0, eventType: 'streak_bonus' })
    expect(event.type).toBe('streak_bonus')
  })
})
