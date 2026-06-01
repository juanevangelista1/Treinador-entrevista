import { describe, it, expect } from 'vitest'
import { calculateLevel, getXpToNextLevel, getLevelProgress, XP_THRESHOLDS } from '../gamification/levelResolver'

describe('calculateLevel', () => {
  it('returns junior for 0 xp', () => {
    expect(calculateLevel(0)).toBe('junior')
  })

  it('returns junior below pleno threshold', () => {
    expect(calculateLevel(499)).toBe('junior')
  })

  it('returns pleno at threshold', () => {
    expect(calculateLevel(500)).toBe('pleno')
  })

  it('returns pleno-senior at threshold', () => {
    expect(calculateLevel(1500)).toBe('pleno-senior')
  })

  it('returns senior at threshold', () => {
    expect(calculateLevel(3000)).toBe('senior')
  })

  it('returns staff at threshold', () => {
    expect(calculateLevel(6000)).toBe('staff')
  })

  it('returns staff above max threshold', () => {
    expect(calculateLevel(10000)).toBe('staff')
  })
})

describe('getXpToNextLevel', () => {
  it('returns remaining xp to pleno from junior', () => {
    expect(getXpToNextLevel(0)).toBe(XP_THRESHOLDS.pleno)
    expect(getXpToNextLevel(200)).toBe(300)
  })

  it('returns 0 for max level', () => {
    expect(getXpToNextLevel(6000)).toBe(0)
    expect(getXpToNextLevel(9999)).toBe(0)
  })
})

describe('getLevelProgress', () => {
  it('returns 0 progress at level start', () => {
    expect(getLevelProgress(0)).toBe(0)
    expect(getLevelProgress(500)).toBe(0)
  })

  it('returns 50% progress at midpoint of junior level', () => {
    // Junior: 0→500 (range 500), midpoint = 250 → 50%
    expect(getLevelProgress(250)).toBe(50)
  })

  it('returns 25% progress at 750 xp (pleno level, range 500→1500)', () => {
    // Pleno: 500→1500 (range 1000), 750-500=250 earned → 25%
    expect(getLevelProgress(750)).toBe(25)
  })

  it('returns 100 for max level', () => {
    expect(getLevelProgress(6000)).toBe(100)
  })
})
