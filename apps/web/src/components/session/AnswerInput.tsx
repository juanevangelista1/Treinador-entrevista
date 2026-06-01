'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Question, MultipleChoiceOption } from '@interview-trainer/domain'

interface AnswerInputProps {
  question: Question
  onSubmit: (answer: string) => void
  disabled?: boolean
}

function MultipleChoiceInput({
  options,
  onSubmit,
  disabled,
}: {
  options: MultipleChoiceOption[]
  onSubmit: (answer: string) => void
  disabled: boolean
}) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setSelected(option.id)}
          disabled={disabled}
          className={cn(
            'w-full text-left rounded-lg border px-4 py-3 text-sm transition-all',
            'hover:border-primary hover:bg-primary/5',
            selected === option.id
              ? 'border-primary bg-primary/10 text-foreground'
              : 'border-border bg-card text-foreground',
            disabled && 'cursor-not-allowed opacity-60',
          )}
        >
          <span className="font-medium text-muted-foreground mr-2">{option.id.toUpperCase()}.</span>
          {option.text}
        </button>
      ))}
      <button
        onClick={() => selected && onSubmit(selected)}
        disabled={!selected || disabled}
        className="mt-2 w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-40 hover:opacity-90"
      >
        Confirmar resposta
      </button>
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
          'w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground',
          'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
          disabled && 'cursor-not-allowed opacity-60',
        )}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{value.length} caracteres</span>
        <button
          onClick={() => onSubmit(value.trim())}
          disabled={!isValid || disabled}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-40 hover:opacity-90"
        >
          Enviar resposta
        </button>
      </div>
    </div>
  )
}

export function AnswerInput({ question, onSubmit, disabled = false }: AnswerInputProps) {
  if (question.type === 'multiple_choice' && question.options) {
    return <MultipleChoiceInput options={question.options} onSubmit={onSubmit} disabled={disabled} />
  }

  return <OpenTextInput onSubmit={onSubmit} disabled={disabled} />
}
