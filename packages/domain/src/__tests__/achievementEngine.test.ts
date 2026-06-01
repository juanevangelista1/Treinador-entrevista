import { describe, it, expect } from 'vitest'
import { checkUnlockedAchievements, ACHIEVEMENTS } from '../gamification/achievementEngine'
import type { UserProgress } from '../gamification/types'

function makeProgress(overrides: Partial<UserProgress> = {}): UserProgress {
  return {
    totalXp: 0,
    currentLevel: 'junior',
    xpToNextLevel: 500,
    currentStreak: 0,
    longestStreak: 0,
    unlockedAchievements: [],
    domainStats: {},
    xpHistory: [],
    sessionsCompleted: 0,
    ...overrides,
  }
}

describe('checkUnlockedAchievements', () => {
  it('returns empty array when no conditions are met', () => {
    const result = checkUnlockedAchievements(makeProgress())
    expect(result).toHaveLength(0)
  })

  it('unlocks streak-3 when longestStreak >= 3', () => {
    const progress = makeProgress({ longestStreak: 3 })
    const unlocked = checkUnlockedAchievements(progress)
    expect(unlocked.some((a) => a.id === 'streak-3')).toBe(true)
  })

  it('does not re-unlock already unlocked achievements', () => {
    const progress = makeProgress({
      longestStreak: 5,
      unlockedAchievements: ['streak-3', 'streak-5'],
    })
    const unlocked = checkUnlockedAchievements(progress)
    expect(unlocked.every((a) => a.id !== 'streak-3' && a.id !== 'streak-5')).toBe(true)
  })

  it('unlocks level-pleno when currentLevel is pleno', () => {
    const progress = makeProgress({ currentLevel: 'pleno', totalXp: 500 })
    const unlocked = checkUnlockedAchievements(progress)
    expect(unlocked.some((a) => a.id === 'level-pleno')).toBe(true)
  })

  it('unlocks session-5 when sessionsCompleted >= 5', () => {
    const progress = makeProgress({ sessionsCompleted: 5 })
    const unlocked = checkUnlockedAchievements(progress)
    expect(unlocked.some((a) => a.id === 'session-5')).toBe(true)
  })

  it('all achievements have valid ids and positive xpReward', () => {
    ACHIEVEMENTS.forEach((a) => {
      expect(a.id).toBeTruthy()
      expect(a.xpReward).toBeGreaterThan(0)
      expect(typeof a.condition).toBe('function')
    })
  })
})
