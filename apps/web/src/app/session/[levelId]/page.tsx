'use client'

import { useEffect, useState, use } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, AlertTriangle, Brain } from 'lucide-react'
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
import { useTranslation } from '@/lib/i18n'
import type { SeniorityLevel, KnowledgeDomain, QuestionLanguage, Achievement } from '@interview-trainer/domain'

interface PageProps {
  params: Promise<{ levelId: string }>
}

export default function SessionPage({ params }: PageProps) {
  const { levelId } = use(params)
  const searchParams = useSearchParams()
  const domainsParam = searchParams.get('domains') ?? 'javascript'
  const domains = domainsParam.split(',') as KnowledgeDomain[]
  const language = (searchParams.get('lang') ?? 'pt') as QuestionLanguage
  const { t } = useTranslation()

  const {
    session,
    currentQuestion,
    feedback,
    streamingFeedback,
    isLoadingFeedback,
    feedbackError,
    startSession,
    submitAnswer,
    submitAnswerMC,
    retryFeedback,
    finishSession,
    clearSession,
  } = useSession()

  const { progress } = useGamification()
  const [pendingAchievement, setPendingAchievement] = useState<Achievement | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    startSession({
      seniorityLevel: levelId as SeniorityLevel,
      domains,
      totalQuestions: 5,
      language,
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
          <span className="text-sm">{t.session.preparing}</span>
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
              startSession({ seniorityLevel: levelId as SeniorityLevel, domains, totalQuestions: 5, language })
            }}
          />
        </div>
      </main>
    )
  }

  const isLastQuestion = session.currentQuestionIndex >= session.questions.length - 1

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-xl space-y-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:scale-[1.03] hover:text-foreground hover:border-primary/50 active:scale-[0.97]"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.session.back}
            </Link>
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
              transition={{ duration: 0.2 }}
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
                onAnswered={submitAnswerMC}
                isLastQuestion={isLastQuestion}
                disabled={isLoadingFeedback}
              />
            </motion.div>
          )}

          {showFeedback && feedbackError && (
            <motion.div
              key="feedback-error"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              role="alert"
              aria-live="assertive"
              className="space-y-4 rounded-xl border border-red-500/30 bg-red-500/10 p-5"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="font-semibold text-foreground">{t.session.errorTitle}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.session.errorBody}</p>
              <button
                type="button"
                onClick={retryFeedback}
                className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
              >
                {t.session.retry}
              </button>
            </motion.div>
          )}

          {showFeedback && !feedbackError && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              aria-live="polite"
            >
              <FeedbackPanel
                feedback={(streamingFeedback ?? feedback ?? {}) as Partial<import('@interview-trainer/domain').AiFeedbackResponse>}
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
