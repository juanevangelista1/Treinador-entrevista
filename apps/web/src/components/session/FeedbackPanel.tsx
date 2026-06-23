'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Lightbulb, Code2, TrendingUp, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import type { AiFeedbackResponse } from '@interview-trainer/domain'

const VERDICT_CONFIG = {
  correct: {
    icon: CheckCircle,
    className: 'border-emerald-500/30 bg-emerald-500/10',
    iconClassName: 'text-emerald-400',
    scoreClassName: 'text-emerald-400',
  },
  partial: {
    icon: AlertCircle,
    className: 'border-yellow-500/30 bg-yellow-500/10',
    iconClassName: 'text-yellow-400',
    scoreClassName: 'text-yellow-400',
  },
  incorrect: {
    icon: XCircle,
    className: 'border-red-500/30 bg-red-500/10',
    iconClassName: 'text-red-400',
    scoreClassName: 'text-red-400',
  },
}

interface FeedbackPanelProps {
  feedback: Partial<AiFeedbackResponse>
  xpEarned?: number
  isStreaming?: boolean
  onNext: () => void
  isLastQuestion: boolean
}

export function FeedbackPanel({
  feedback,
  xpEarned,
  isStreaming = false,
  onNext,
  isLastQuestion,
}: FeedbackPanelProps) {
  const { t } = useTranslation()
  const verdict = feedback.verdict ?? 'partial'
  const config = VERDICT_CONFIG[verdict]
  const Icon = config.icon
  const verdictLabel = t.feedbackPanel[verdict]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className={cn('rounded-xl border p-5 space-y-4', config.className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={cn('h-5 w-5', config.iconClassName)} />
            <span className="font-semibold text-foreground">{verdictLabel}</span>
          </div>
          <div className="flex items-center gap-3">
            {feedback.score !== undefined && (
              <span className={cn('text-lg font-bold', config.scoreClassName)}>
                {feedback.score}/100
              </span>
            )}
            {xpEarned !== undefined && xpEarned > 0 && (
              <div className="flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1">
                <Zap className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">+{xpEarned} XP</span>
              </div>
            )}
          </div>
        </div>

        {feedback.feedback && (
          <p className="text-sm leading-relaxed text-foreground">{feedback.feedback}</p>
        )}
      </div>

      {feedback.hint && (
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 flex gap-3">
          <Lightbulb className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-blue-400 mb-1">{t.feedbackPanel.hintTitle}</p>
            <p className="text-sm text-foreground">{feedback.hint}</p>
          </div>
        </div>
      )}

      {feedback.example && (
        <div className="rounded-lg border border-border bg-secondary p-4 flex gap-3">
          <Code2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">{t.feedbackPanel.exampleTitle}</p>
            <p className="text-sm font-mono text-foreground whitespace-pre-wrap">{feedback.example}</p>
          </div>
        </div>
      )}

      {feedback.suggestedNextTopic && (
        <div className="rounded-lg border border-border bg-card p-4 flex gap-3">
          <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-primary mb-1">{t.feedbackPanel.nextTopicTitle}</p>
            <p className="text-sm text-foreground">{feedback.suggestedNextTopic}</p>
          </div>
        </div>
      )}

      {!isStreaming && (
        <button
          type="button"
          onClick={onNext}
          className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
        >
          {isLastQuestion ? t.feedbackPanel.seeSummary : t.feedbackPanel.nextQuestion}
        </button>
      )}
    </motion.div>
  )
}
