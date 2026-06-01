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
  const store = useUserProgressStore()

  const processAnswer = useCallback(
    (options: ProcessAnswerOptions): GamificationResult => {
      const { score, domain, difficulty, verdict } = options

      const isCorrect = verdict === 'correct'
      const isPartial = verdict === 'partial'

      if (isCorrect || score >= 70) {
        store.incrementStreak()
      } else {
        store.resetStreak()
      }

      store.updateDomainStats(domain, score)

      const progressSnapshot = {
        totalXp: store.totalXp,
        currentLevel: store.currentLevel,
        xpToNextLevel: store.xpToNextLevel,
        currentStreak: store.currentStreak + (isCorrect || score >= 70 ? 1 : 0),
        longestStreak: store.longestStreak,
        unlockedAchievements: store.unlockedAchievements,
        domainStats: store.domainStats,
        xpHistory: store.xpHistory,
        sessionsCompleted: store.sessionsCompleted,
      }

      const xpEvent = calculateXp({
        score,
        difficulty,
        currentStreak: progressSnapshot.currentStreak,
        eventType: isCorrect ? 'correct_answer' : isPartial ? 'partial_answer' : 'partial_answer',
      })

      store.addXpEvent(xpEvent)

      const newAchievements = checkUnlockedAchievements(progressSnapshot)
      newAchievements.forEach((achievement) => store.unlockAchievement(achievement))

      return {
        xpEarned: xpEvent.totalXp,
        unlockedAchievements: newAchievements,
      }
    },
    [store],
  )

  return {
    progress: {
      totalXp: store.totalXp,
      currentLevel: store.currentLevel,
      xpToNextLevel: store.xpToNextLevel,
      currentStreak: store.currentStreak,
      longestStreak: store.longestStreak,
      unlockedAchievements: store.unlockedAchievements,
      domainStats: store.domainStats,
      sessionsCompleted: store.sessionsCompleted,
    },
    processAnswer,
    incrementSessionsCompleted: store.incrementSessionsCompleted,
  }
}
