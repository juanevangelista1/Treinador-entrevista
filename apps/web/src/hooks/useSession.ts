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
  const session = useSessionStore((s) => s.session)
  const currentFeedback = useSessionStore((s) => s.currentFeedback)
  const pendingAnswer = useSessionStore((s) => s.pendingAnswer)
  const setSession = useSessionStore((s) => s.setSession)
  const updateSession = useSessionStore((s) => s.updateSession)
  const setFeedback = useSessionStore((s) => s.setFeedback)
  const setPendingAnswer = useSessionStore((s) => s.setPendingAnswer)
  const clearSession = useSessionStore((s) => s.clearSession)

  const { progress, processAnswer, incrementSessionsCompleted } = useGamification()

  const {
    object: streamingFeedback,
    submit: submitFeedbackRequest,
    isLoading: isStreamingFeedback,
    error: feedbackError,
  } = useObject({
    api: '/api/feedback',
    schema: feedbackSchema,
    onFinish: ({ object }) => {
      if (!object || !session || !pendingAnswer) return

      const currentQuestion = session.questions[session.currentQuestionIndex]
      if (!currentQuestion) return

      const { xpEarned } = processAnswer({
        score: object.score,
        domain: currentQuestion.domain as KnowledgeDomain,
        difficulty: currentQuestion.difficulty,
        verdict: object.verdict,
      })

      const updatedSession = advanceSession(session, pendingAnswer, object.score, xpEarned)

      updateSession(updatedSession)
      setFeedback(object as ReturnType<typeof feedbackSchema.parse>)
      setPendingAnswer(null)
    },
  })

  const startSession = useCallback(
    (config: SessionConfig) => {
      const recentIds = (session?.results ?? []).slice(-10).map((r) => r.question.id)

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

      const newSession = createSession(config, questions)
      setSession(newSession)
    },
    [session, progress, setSession],
  )

  const submitAnswer = useCallback(
    (answerValue: string) => {
      if (!session) return

      const currentQuestion = session.questions[session.currentQuestionIndex]
      if (!currentQuestion) return

      const answer = {
        questionId: currentQuestion.id,
        value: answerValue,
        submittedAt: Date.now(),
      }

      setPendingAnswer(answer)

      submitFeedbackRequest({
        question: currentQuestion,
        userAnswer: answerValue,
        seniorityLevel: session.config.seniorityLevel,
        domain: currentQuestion.domain,
      })
    },
    [session, setPendingAnswer, submitFeedbackRequest],
  )

  const retryFeedback = useCallback(() => {
    if (!session || !pendingAnswer) return

    const currentQuestion = session.questions[session.currentQuestionIndex]
    if (!currentQuestion) return

    submitFeedbackRequest({
      question: currentQuestion,
      userAnswer: pendingAnswer.value,
      seniorityLevel: session.config.seniorityLevel,
      domain: currentQuestion.domain,
    })
  }, [session, pendingAnswer, submitFeedbackRequest])

  const submitAnswerMC = useCallback(
    (selectedId: string, isCorrect: boolean) => {
      if (!session) return

      const currentQuestion = session.questions[session.currentQuestionIndex]
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

      const updated = advanceSession(session, answer, score, xpEarned)

      if (updated.status === 'reviewing') {
        updateSession(completeSession(updated))
        incrementSessionsCompleted()
      } else {
        updateSession(updated)
      }
      setPendingAnswer(null)
    },
    [session, processAnswer, incrementSessionsCompleted, updateSession, setPendingAnswer],
  )

  const finishSession = useCallback(() => {
    if (!session) return
    const finished = completeSession(session)
    updateSession(finished)
    incrementSessionsCompleted()
  }, [session, updateSession, incrementSessionsCompleted])

  const currentQuestion = session ? session.questions[session.currentQuestionIndex] : null

  return {
    session,
    currentQuestion,
    feedback: currentFeedback,
    streamingFeedback,
    isLoadingFeedback: isStreamingFeedback,
    feedbackError,
    startSession,
    submitAnswer,
    submitAnswerMC,
    retryFeedback,
    finishSession,
    clearSession,
  }
}
