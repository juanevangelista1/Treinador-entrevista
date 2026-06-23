'use client'

import { experimental_useObject as useObject } from '@ai-sdk/react'
import { z } from 'zod'
import { Lightbulb, Code2, Sparkles, RefreshCw } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useTranslation } from '@/lib/i18n'
import type { Question } from '@interview-trainer/domain'

const hintResponseSchema = z.object({
  codeExample: z.string().min(10),
  technicalExplanation: z.string().min(20),
  analogy: z.string().min(20),
})

interface HintModalProps {
  question: Question
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HintModal({ question, open, onOpenChange }: HintModalProps) {
  const { t } = useTranslation()
  const {
    object: generated,
    submit: generate,
    isLoading,
    error,
  } = useObject({
    api: '/api/hint',
    schema: hintResponseSchema,
  })

  function handleGenerate() {
    generate({
      questionText: question.text,
      explanation: question.explanation,
      domain: question.domain,
      difficulty: question.difficulty,
      language: question.language ?? 'pt',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent closeLabel={t.hintModal.close}>
        <DialogTitle className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Lightbulb className="h-5 w-5 text-primary" />
          {t.hintModal.title}
        </DialogTitle>

        {question.hints.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">{t.hintModal.hintsTitle}</p>
            <ul className="space-y-1.5">
              {question.hints.map((hint, index) => (
                <li key={index} className="flex gap-2 text-sm text-foreground">
                  <span className="text-primary">•</span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">{t.hintModal.explanationTitle}</p>
          <p className="text-sm leading-relaxed text-foreground">{question.explanation}</p>
        </div>

        {!generated && !isLoading && (
          <button
            type="button"
            onClick={handleGenerate}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-primary/20 active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4" />
            {t.hintModal.generateButton}
          </button>
        )}

        {isLoading && !generated && (
          <div className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4 animate-spin" />
            {t.hintModal.generating}
          </div>
        )}

        {error && (
          <div className="space-y-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
            <p className="text-sm text-muted-foreground">{t.hintModal.errorBody}</p>
            <button
              type="button"
              onClick={handleGenerate}
              className="cursor-pointer text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              {t.hintModal.retry}
            </button>
          </div>
        )}

        {generated?.codeExample && (
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" />
              {t.hintModal.codeExampleTitle}
            </p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-secondary p-3 text-sm font-mono text-foreground">
              <code>{generated.codeExample}</code>
            </pre>
          </div>
        )}

        {generated?.technicalExplanation && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">{t.hintModal.explanationTitle}</p>
            <p className="text-sm leading-relaxed text-foreground">{generated.technicalExplanation}</p>
          </div>
        )}

        {generated?.analogy && (
          <div className="space-y-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
            <p className="text-xs font-semibold text-blue-400">{t.hintModal.analogyTitle}</p>
            <p className="text-sm text-foreground">{generated.analogy}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
