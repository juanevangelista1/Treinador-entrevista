'use client'

import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import type { Question, KnowledgeDomain } from '@interview-trainer/domain'

const DIFFICULTY_COLORS: Record<number, string> = {
  1: 'bg-emerald-500',
  2: 'bg-green-500',
  3: 'bg-yellow-500',
  4: 'bg-orange-500',
  5: 'bg-red-500',
}

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
}

interface TextSegment {
  type: 'text' | 'code'
  content: string
}

function splitCodeFences(text: string): TextSegment[] {
  const segments: TextSegment[] = []
  const fenceRegex = /```[a-zA-Z]*\n?([\s\S]*?)```/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = fenceRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }
    segments.push({ type: 'code', content: (match[1] ?? '').replace(/\n$/, '') })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return segments
}

export function QuestionCard({ question, questionNumber, totalQuestions }: QuestionCardProps) {
  const { t } = useTranslation()
  const progress = (questionNumber / totalQuestions) * 100
  const segments = splitCodeFences(question.text)
  const domainLabel = t.domains[question.domain as KnowledgeDomain] ?? question.domain

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-5">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {t.questionCard.questionOf(questionNumber, totalQuestions)}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
              {domainLabel}
            </span>
            <span
              className={cn(
                'text-xs font-medium text-white px-2.5 py-1 rounded-md',
                DIFFICULTY_COLORS[question.difficulty],
              )}
            >
              {t.questionCard.difficulty[question.difficulty]}
            </span>
          </div>
        </div>

        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {segments.map((segment, index) =>
          segment.type === 'code' ? (
            <pre
              key={index}
              className="overflow-x-auto rounded-lg border border-border bg-secondary p-4 text-sm font-mono text-foreground"
            >
              <code>{segment.content}</code>
            </pre>
          ) : segment.content.trim() ? (
            <p key={index} className="text-base leading-relaxed text-foreground whitespace-pre-wrap">
              {segment.content.trim()}
            </p>
          ) : null,
        )}
      </div>
    </div>
  )
}
