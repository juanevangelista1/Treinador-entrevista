'use client'

import { useCallback } from 'react'
import { experimental_useObject as useObject } from '@ai-sdk/react'
import { z } from 'zod'
import { useSessionStore } from '@/store/sessionStore'
import { useGamification } from './useGamification'
import {
  selectQuestions,
  createSession,
  advanceSession,
  completeSession,
  type SessionConfig,
  type KnowledgeDomain,
} from '@interview-trainer/domain'

const feedbackSchema = z.object({
  score: z.number().min(0).max(100),
  verdict: z.enum(['correct', 'partial', 'incorrect']),
  feedback: z.string(),
  hint: z.string(),
  example: z.string(),
  keyConceptsMissed: z.array(z.string()),
  suggestedNextTopic: z.string(),
})

export function useSession() {
  const sessionStore = useSessionStore()
  const { progress, processAnswer, incrementSessionsCompleted } = useGamification()

  const { object: streamingFeedback, submit: submitFeedbackRequest, isLoading: isStreamingFeedback } = useObject({
    api: '/api/feedback',
    schema: feedbackSchema,
    onFinish: ({ object }) => {
      if (!object || !sessionStore.session || !sessionStore.pendingAnswer) return

      const currentQuestion = sessionStore.session.questions[sessionStore.session.currentQuestionIndex]
      if (!currentQuestion) return

      const { xpEarned } = processAnswer({
        score: object.score,
        domain: currentQuestion.domain as KnowledgeDomain,
        difficulty: currentQuestion.difficulty,
        verdict: object.verdict,
      })

      const updatedSession = advanceSession(
        sessionStore.session,
        sessionStore.pendingAnswer,
        object.score,
        xpEarned,
      )

      sessionStore.updateSession(updatedSession)
      sessionStore.setFeedback(object as ReturnType<typeof feedbackSchema.parse>)
      sessionStore.setPendingAnswer(null)
    },
  })

  const startSession = useCallback(
    (config: SessionConfig) => {
      const recentIds = (sessionStore.session?.results ?? [])
        .slice(-10)
        .map((r) => r.question.id)

      const questions = selectQuestions({
        config,
        progress: {
          totalXp: progress.totalXp,
          currentLevel: progress.currentLevel,
          xpToNextLevel: progress.xpToNextLevel,
          currentStreak: progress.currentStreak,
          longestStreak: progress.longestStreak,
          unlockedAchievements: progress.unlockedAchievements,
          domainStats: progress.domainStats,
          xpHistory: [],
          sessionsCompleted: progress.sessionsCompleted,
        },
        recentQuestionIds: recentIds,
      })

      const session = createSession(config, questions)
      sessionStore.setSession(session)
    },
    [sessionStore, progress],
  )

  const submitAnswer = useCallback(
    (answerValue: string) => {
      if (!sessionStore.session) return

      const currentQuestion = sessionStore.session.questions[sessionStore.session.currentQuestionIndex]
      if (!currentQuestion) return

      const answer = {
        questionId: currentQuestion.id,
        value: answerValue,
        submittedAt: Date.now(),
      }

      sessionStore.setPendingAnswer(answer)

      submitFeedbackRequest({
        question: currentQuestion,
        userAnswer: answerValue,
        seniorityLevel: sessionStore.session.config.seniorityLevel,
        domain: currentQuestion.domain,
      })
    },
    [sessionStore, submitFeedbackRequest],
  )

  const submitAnswerMC = useCallback(
    (selectedId: string, isCorrect: boolean) => {
      if (!sessionStore.session) return

      const currentQuestion = sessionStore.session.questions[sessionStore.session.currentQuestionIndex]
      if (!currentQuestion) return

      const score = isCorrect ? 100 : 0
      const answer = {
        questionId: currentQuestion.id,
        value: selectedId,
        submittedAt: Date.now(),
      }

      const { xpEarned } = processAnswer({
        score,
        domain: currentQuestion.domain as KnowledgeDomain,
        difficulty: currentQuestion.difficulty,
        verdict: isCorrect ? 'correct' : 'incorrect',
      })

      const updated = advanceSession(sessionStore.session, answer, score, xpEarned)

      if (updated.status === 'reviewing') {
        sessionStore.updateSession(completeSession(updated))
        incrementSessionsCompleted()
      } else {
        sessionStore.updateSession(updated)
      }
      sessionStore.setPendingAnswer(null)
    },
    [sessionStore, processAnswer, incrementSessionsCompleted],
  )

  const finishSession = useCallback(() => {
    if (!sessionStore.session) return
    const finished = completeSession(sessionStore.session)
    sessionStore.updateSession(finished)
    incrementSessionsCompleted()
  }, [sessionStore, incrementSessionsCompleted])

  const currentQuestion = sessionStore.session
    ? sessionStore.session.questions[sessionStore.session.currentQuestionIndex]
    : null

  return {
    session: sessionStore.session,
    currentQuestion,
    feedback: sessionStore.currentFeedback,
    streamingFeedback,
    isLoadingFeedback: isStreamingFeedback,
    startSession,
    submitAnswer,
    submitAnswerMC,
    finishSession,
    clearSession: sessionStore.clearSession,
  }
}
