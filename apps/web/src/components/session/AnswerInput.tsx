'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Question, MultipleChoiceOption } from '@interview-trainer/domain'

interface AnswerInputProps {
  question: Question
  onSubmit: (answer: string) => void
  onAnswered?: (id: string, isCorrect: boolean) => void
  isLastQuestion?: boolean
  disabled?: boolean
}

function MultipleChoiceInput({
  options,
  explanation,
  isLastQuestion = false,
  onAnswered,
}: {
  options: MultipleChoiceOption[]
  explanation: string
  isLastQuestion?: boolean
  onAnswered: (id: string, isCorrect: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const revealed = selected !== null
  const isCorrect = options.find((o) => o.id === selected)?.isCorrect ?? false

  function handleSelect(id: string) {
    if (revealed) return
    setSelected(id)
  }

  function getOptionClassName(option: MultipleChoiceOption): string {
    if (!revealed) {
      return 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5 cursor-pointer'
    }
    if (option.isCorrect) {
      return 'border-emerald-500 bg-emerald-500/10 text-foreground cursor-default'
    }
    if (option.id === selected) {
      return 'border-red-500 bg-red-500/10 text-foreground cursor-default'
    }
    return 'border-border bg-card text-muted-foreground opacity-40 cursor-default'
  }

  function getBadgeClassName(option: MultipleChoiceOption): string {
    if (!revealed) return 'border-border text-muted-foreground bg-secondary'
    if (option.isCorrect) return 'border-emerald-500 bg-emerald-500 text-white'
    if (option.id === selected) return 'border-red-500 bg-red-500 text-white'
    return 'border-border text-muted-foreground bg-secondary'
  }

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelect(option.id)}
          disabled={revealed}
          className={cn(
            'w-full text-left rounded-xl border px-4 py-3.5 text-sm transition-all',
            getOptionClassName(option),
          )}
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5 transition-all',
                getBadgeClassName(option),
              )}
            >
              {option.id.toUpperCase()}
            </span>
            <span className="leading-relaxed">{option.text}</span>
          </div>
        </button>
      ))}

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-3 pt-2"
        >
          <div
            className={cn(
              'rounded-xl border p-4 space-y-2',
              isCorrect
                ? 'border-emerald-500/40 bg-emerald-500/5'
                : 'border-red-500/40 bg-red-500/5',
            )}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 text-red-400 shrink-0" />
              )}
              <span
                className={cn(
                  'text-sm font-semibold',
                  isCorrect ? 'text-emerald-400' : 'text-red-400',
                )}
              >
                {isCorrect ? 'Correto!' : 'Incorreto'}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground">{explanation}</p>
          </div>

          <button
            onClick={() => onAnswered(selected!, isCorrect)}
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {isLastQuestion ? 'Ver resultado da sessão' : 'Próxima pergunta →'}
          </button>
        </motion.div>
      )}
    </div>
  )
}

function OpenTextInput({
  onSubmit,
  disabled,
}: {
  onSubmit: (answer: string) => void
  disabled: boolean
}) {
  const [value, setValue] = useState('')
  const isValid = value.trim().length >= 20

  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Digite sua resposta aqui... (mínimo 20 caracteres)"
        rows={6}
        className={cn(
          'w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground',
          'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
          disabled && 'cursor-not-allowed opacity-60',
        )}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{value.length} caracteres</span>
        <button
          onClick={() => onSubmit(value.trim())}
          disabled={!isValid || disabled}
          className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-40 hover:opacity-90"
        >
          Enviar resposta
        </button>
      </div>
    </div>
  )
}

export function AnswerInput({
  question,
  onSubmit,
  onAnswered,
  isLastQuestion = false,
  disabled = false,
}: AnswerInputProps) {
  if (question.type === 'multiple_choice' && question.options && onAnswered) {
    return (
      <MultipleChoiceInput
        options={question.options}
        explanation={question.explanation}
        isLastQuestion={isLastQuestion}
        onAnswered={onAnswered}
      />
    )
  }

  return <OpenTextInput onSubmit={onSubmit} disabled={disabled} />
}
