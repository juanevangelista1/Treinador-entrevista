'use client'

import { useEffect, useState, use } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { useSession } from '@/hooks/useSession'
import { useGamification } from '@/hooks/useGamification'
import { QuestionCard } from '@/components/session/QuestionCard'
import { AnswerInput } from '@/components/session/AnswerInput'
import { FeedbackPanel } from '@/components/session/FeedbackPanel'
import { SessionSummary } from '@/components/session/SessionSummary'
import { AchievementToast } from '@/components/gamification/AchievementToast'
import { XpBar } from '@/components/gamification/XpBar'
import { StreakCounter } from '@/components/gamification/StreakCounter'
import { LevelBadge } from '@/components/gamification/LevelBadge'
import type { SeniorityLevel, KnowledgeDomain, Achievement } from '@interview-trainer/domain'

interface PageProps {
  params: Promise<{ levelId: string }>
}

export default function SessionPage({ params }: PageProps) {
  const { levelId } = use(params)
  const searchParams = useSearchParams()
  const domainsParam = searchParams.get('domains') ?? 'javascript'
  const domains = domainsParam.split(',') as KnowledgeDomain[]

  const {
    session,
    currentQuestion,
    feedback,
    streamingFeedback,
    isLoadingFeedback,
    startSession,
    submitAnswer,
    finishSession,
    clearSession,
  } = useSession()

  const { progress } = useGamification()
  const [pendingAchievement, setPendingAchievement] = useState<Achievement | null>(null)
  const [sessionXpTotal, setSessionXpTotal] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    startSession({
      seniorityLevel: levelId as SeniorityLevel,
      domains,
      totalQuestions: 5,
    })
    return () => clearSession()
  }, [])

  useEffect(() => {
    if (isLoadingFeedback) {
      setShowFeedback(true)
    }
  }, [isLoadingFeedback])

  function handleNext() {
    setShowFeedback(false)
    if (session?.status === 'reviewing') {
      finishSession()
    }
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Brain className="h-5 w-5 animate-pulse text-primary" />
          <span className="text-sm">Preparando sessão...</span>
        </div>
      </div>
    )
  }

  if (session.status === 'completed') {
    const totalXpEarned = session.results.reduce((sum, r) => sum + r.xpEarned, 0)
    return (
      <main className="min-h-screen p-4 md:p-8">
        <div className="mx-auto max-w-xl">
          <SessionSummary
            session={session}
            currentLevel={progress.currentLevel}
            totalXpEarned={totalXpEarned}
            onRestart={() => {
              clearSession()
              startSession({ seniorityLevel: levelId as SeniorityLevel, domains, totalQuestions: 5 })
            }}
          />
        </div>
      </main>
    )
  }

  const isLastQuestion = session.currentQuestionIndex >= session.questions.length - 1

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <LevelBadge level={levelId as SeniorityLevel} size="sm" />
          </div>
          <StreakCounter streak={progress.currentStreak} />
        </header>

        <XpBar totalXp={progress.totalXp} currentLevel={progress.currentLevel} />

        <AnimatePresence mode="wait">
          {currentQuestion && !showFeedback && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <QuestionCard
                question={currentQuestion}
                questionNumber={session.currentQuestionIndex + 1}
                totalQuestions={session.questions.length}
              />
              <AnswerInput
                question={currentQuestion}
                onSubmit={submitAnswer}
                disabled={isLoadingFeedback}
              />
            </motion.div>
          )}

          {showFeedback && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FeedbackPanel
                feedback={streamingFeedback ?? feedback ?? {}}
                isStreaming={isLoadingFeedback}
                onNext={handleNext}
                isLastQuestion={isLastQuestion}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AchievementToast
        achievement={pendingAchievement}
        onDismiss={() => setPendingAchievement(null)}
      />
    </main>
  )
}
