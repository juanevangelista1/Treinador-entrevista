import { cn } from '@/lib/utils'
import type { Question } from '@interview-trainer/domain'

const DOMAIN_LABELS: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  algorithms: 'Algoritmos',
  data_structures: 'Estruturas de Dados',
  software_engineering: 'Engenharia de Software',
}

const DIFFICULTY_COLORS: Record<number, string> = {
  1: 'bg-emerald-500',
  2: 'bg-green-500',
  3: 'bg-yellow-500',
  4: 'bg-orange-500',
  5: 'bg-red-500',
}

const DIFFICULTY_LABELS: Record<number, string> = {
  1: 'Fácil',
  2: 'Básico',
  3: 'Médio',
  4: 'Difícil',
  5: 'Expert',
}

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
}

export function QuestionCard({ question, questionNumber, totalQuestions }: QuestionCardProps) {
  const progress = (questionNumber / totalQuestions) * 100

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-5">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            Questão {questionNumber} de {totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
              {DOMAIN_LABELS[question.domain] ?? question.domain}
            </span>
            <span
              className={cn(
                'text-xs font-medium text-white px-2.5 py-1 rounded-md',
                DIFFICULTY_COLORS[question.difficulty],
              )}
            >
              {DIFFICULTY_LABELS[question.difficulty]}
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

      <p className="text-base leading-relaxed text-foreground whitespace-pre-wrap">
        {question.text}
      </p>
    </div>
  )
}
