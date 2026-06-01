import type { SeniorityLevel } from './types'

export const LEVEL_ORDER: SeniorityLevel[] = [
  'junior',
  'pleno',
  'pleno-senior',
  'senior',
  'staff',
]

export const XP_THRESHOLDS: Record<SeniorityLevel, number> = {
  junior: 0,
  pleno: 500,
  'pleno-senior': 1500,
  senior: 3000,
  staff: 6000,
}

export function calculateLevel(totalXp: number): SeniorityLevel {
  const levels = [...LEVEL_ORDER].reverse()
  return levels.find((level) => totalXp >= XP_THRESHOLDS[level]) ?? 'junior'
}

export function getXpToNextLevel(totalXp: number): number {
  const currentLevel = calculateLevel(totalXp)
  const currentIndex = LEVEL_ORDER.indexOf(currentLevel)
  const nextLevel = LEVEL_ORDER[currentIndex + 1]

  if (!nextLevel) return 0

  return XP_THRESHOLDS[nextLevel] - totalXp
}

export function getLevelProgress(totalXp: number): number {
  const currentLevel = calculateLevel(totalXp)
  const currentIndex = LEVEL_ORDER.indexOf(currentLevel)
  const nextLevel = LEVEL_ORDER[currentIndex + 1]

  if (!nextLevel) return 100

  const currentThreshold = XP_THRESHOLDS[currentLevel]
  const nextThreshold = XP_THRESHOLDS[nextLevel]
  const range = nextThreshold - currentThreshold
  const earned = totalXp - currentThreshold

  return Math.round((earned / range) * 100)
}
