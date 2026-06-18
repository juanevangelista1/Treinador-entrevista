'use client'

import { useCallback } from 'react'
import { useUserProgressStore } from '@/store/userProgressStore'
import {
  calculateXp,
  checkUnlockedAchievements,
  type AiFeedbackResponse,
  type KnowledgeDomain,
  type DifficultyLevel,
  type Achievement,
} from '@interview-trainer/domain'

interface ProcessAnswerOptions {
  score: number
  domain: KnowledgeDomain
  difficulty: DifficultyLevel
  verdict: AiFeedbackResponse['verdict']
}

interface GamificationResult {
  xpEarned: number
  unlockedAchievements: Achievement[]
}

export function useGamification() {
  const totalXp = useUserProgressStore((s) => s.totalXp)
  const currentLevel = useUserProgressStore((s) => s.currentLevel)
  const xpToNextLevel = useUserProgressStore((s) => s.xpToNextLevel)
  const currentStreak = useUserProgressStore((s) => s.currentStreak)
  const longestStreak = useUserProgressStore((s) => s.longestStreak)
  const unlockedAchievements = useUserProgressStore((s) => s.unlockedAchievements)
  const domainStats = useUserProgressStore((s) => s.domainStats)
  const xpHistory = useUserProgressStore((s) => s.xpHistory)
  const sessionsCompleted = useUserProgressStore((s) => s.sessionsCompleted)

  // Action references are stable across renders (zustand keeps the same
  // function identity unless the store creator itself changes), so selecting
  // them individually doesn't add re-renders but keeps the useCallback below
  // from being recreated on every unrelated state change.
  const incrementStreak = useUserProgressStore((s) => s.incrementStreak)
  const resetStreak = useUserProgressStore((s) => s.resetStreak)
  const updateDomainStats = useUserProgressStore((s) => s.updateDomainStats)
  const addXpEvent = useUserProgressStore((s) => s.addXpEvent)
  const unlockAchievement = useUserProgressStore((s) => s.unlockAchievement)
  const incrementSessionsCompleted = useUserProgressStore((s) => s.incrementSessionsCompleted)

  const processAnswer = useCallback(
    (options: ProcessAnswerOptions): GamificationResult => {
      const { score, domain, difficulty, verdict } = options

      const isCorrect = verdict === 'correct'
      const isPartial = verdict === 'partial'

      if (isCorrect || score >= 70) {
        incrementStreak()
      } else {
        resetStreak()
      }

      updateDomainStats(domain, score)

      const progressSnapshot = {
        totalXp,
        currentLevel,
        xpToNextLevel,
        currentStreak: currentStreak + (isCorrect || score >= 70 ? 1 : 0),
        longestStreak,
        unlockedAchievements,
        domainStats,
        xpHistory,
        sessionsCompleted,
      }

      const xpEvent = calculateXp({
        score,
        difficulty,
        currentStreak: progressSnapshot.currentStreak,
        eventType: isCorrect ? 'correct_answer' : isPartial ? 'partial_answer' : 'partial_answer',
      })

      addXpEvent(xpEvent)

      const newAchievements = checkUnlockedAchievements(progressSnapshot)
      newAchievements.forEach((achievement) => unlockAchievement(achievement))

      return {
        xpEarned: xpEvent.totalXp,
        unlockedAchievements: newAchievements,
      }
    },
    [
      incrementStreak,
      resetStreak,
      updateDomainStats,
      addXpEvent,
      unlockAchievement,
      totalXp,
      currentLevel,
      xpToNextLevel,
      currentStreak,
      longestStreak,
      unlockedAchievements,
      domainStats,
      xpHistory,
      sessionsCompleted,
    ],
  )

  return {
    progress: {
      totalXp,
      currentLevel,
      xpToNextLevel,
      currentStreak,
      longestStreak,
      unlockedAchievements,
      domainStats,
      sessionsCompleted,
    },
    processAnswer,
    incrementSessionsCompleted,
  }
}
