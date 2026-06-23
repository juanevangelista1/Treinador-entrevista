'use client'

import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Home } from 'lucide-react'
import Link from 'next/link'
import type { Session } from '@interview-trainer/domain'
import { LevelBadge } from '@/components/gamification/LevelBadge'
import { useTranslation } from '@/lib/i18n'
import type { SeniorityLevel } from '@interview-trainer/domain'

interface SessionSummaryProps {
  session: Session
  currentLevel: SeniorityLevel
  totalXpEarned: number
  onRestart: () => void
}

export function SessionSummary({ session, currentLevel, totalXpEarned, onRestart }: SessionSummaryProps) {
  const { t } = useTranslation()
  const totalQuestions = session.results.length
  const correctAnswers = session.results.filter((r) => r.score >= 70).length
  const averageScore = totalQuestions > 0
    ? Math.round(session.results.reduce((sum, r) => sum + r.score, 0) / totalQuestions)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-border bg-card p-8 space-y-6 text-center"
    >
      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">{t.sessionSummary.completedTitle}</h2>
        <LevelBadge level={currentLevel} size="lg" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-secondary p-4">
          <p className="text-2xl font-bold text-primary">{totalXpEarned}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.sessionSummary.xpEarnedLabel}</p>
        </div>
        <div className="rounded-xl border border-border bg-secondary p-4">
          <p className="text-2xl font-bold text-foreground">{correctAnswers}/{totalQuestions}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.sessionSummary.correctAnswersLabel}</p>
        </div>
        <div className="rounded-xl border border-border bg-secondary p-4">
          <p className="text-2xl font-bold text-foreground">{averageScore}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.sessionSummary.averageScoreLabel}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-accent active:scale-[0.98]"
        >
          <Home className="h-4 w-4" />
          {t.sessionSummary.dashboardLink}
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
        >
          <RotateCcw className="h-4 w-4" />
          {t.sessionSummary.newSessionButton}
        </button>
      </div>
    </motion.div>
  )
}
