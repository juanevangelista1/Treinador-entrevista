'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, XpEvent, Achievement } from '@interview-trainer/domain'
import { calculateLevel, getXpToNextLevel } from '@interview-trainer/domain'

interface UserProgressActions {
  addXpEvent: (event: XpEvent) => void
  unlockAchievement: (achievement: Achievement) => void
  incrementStreak: () => void
  resetStreak: () => void
  incrementSessionsCompleted: () => void
  updateDomainStats: (domain: string, score: number) => void
  reset: () => void
}

const initialProgress: UserProgress = {
  totalXp: 0,
  currentLevel: 'junior',
  xpToNextLevel: 500,
  currentStreak: 0,
  longestStreak: 0,
  unlockedAchievements: [],
  domainStats: {},
  xpHistory: [],
  sessionsCompleted: 0,
}

export const useUserProgressStore = create<UserProgress & UserProgressActions>()(
  persist(
    (set, get) => ({
      ...initialProgress,

      addXpEvent: (event) =>
        set((state) => {
          const newTotalXp = state.totalXp + event.totalXp
          return {
            totalXp: newTotalXp,
            currentLevel: calculateLevel(newTotalXp),
            xpToNextLevel: getXpToNextLevel(newTotalXp),
            xpHistory: [...state.xpHistory, event],
          }
        }),

      unlockAchievement: (achievement) =>
        set((state) => ({
          unlockedAchievements: [...state.unlockedAchievements, achievement.id],
          totalXp: state.totalXp + achievement.xpReward,
        })),

      incrementStreak: () =>
        set((state) => {
          const newStreak = state.currentStreak + 1
          return {
            currentStreak: newStreak,
            longestStreak: Math.max(state.longestStreak, newStreak),
          }
        }),

      resetStreak: () => set({ currentStreak: 0 }),

      incrementSessionsCompleted: () =>
        set((state) => ({ sessionsCompleted: state.sessionsCompleted + 1 })),

      updateDomainStats: (domain, score) =>
        set((state) => {
          const existing = state.domainStats[domain] ?? {
            domain,
            totalAnswered: 0,
            correctAnswers: 0,
            averageScore: 0,
          }
          const newTotal = existing.totalAnswered + 1
          const newCorrect = score >= 70 ? existing.correctAnswers + 1 : existing.correctAnswers
          const newAverage = Math.round(
            (existing.averageScore * existing.totalAnswered + score) / newTotal,
          )
          return {
            domainStats: {
              ...state.domainStats,
              [domain]: {
                domain,
                totalAnswered: newTotal,
                correctAnswers: newCorrect,
                averageScore: newAverage,
              },
            },
          }
        }),

      reset: () => set(initialProgress),
    }),
    {
      name: 'interview-trainer-progress',
      version: 1,
    },
  ),
)
