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

const DIFFICULTY_STARS: Record<number, string> = {
  1: '★☆☆☆☆',
  2: '★★☆☆☆',
  3: '★★★☆☆',
  4: '★★★★☆',
  5: '★★★★★',
}

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
}

export function QuestionCard({ question, questionNumber, totalQuestions }: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
            {DOMAIN_LABELS[question.domain] ?? question.domain}
          </span>
          <span className="text-xs text-yellow-500" title={`Dificuldade ${question.difficulty}/5`}>
            {DIFFICULTY_STARS[question.difficulty]}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {questionNumber} / {totalQuestions}
        </span>
      </div>

      <div className="text-base leading-relaxed text-foreground whitespace-pre-wrap">
        {question.text}
      </div>
    </div>
  )
}
