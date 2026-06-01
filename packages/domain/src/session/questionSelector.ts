import type { Question, KnowledgeDomain, SessionConfig } from './types'
import type { UserProgress } from '../gamification/types'
import { ALL_QUESTIONS } from '../data'

interface SelectQuestionsOptions {
  readonly config: SessionConfig
  readonly progress: UserProgress
  readonly recentQuestionIds: string[]
}

function weightByDomainWeakness(
  domain: KnowledgeDomain,
  progress: UserProgress,
): number {
  const stats = progress.domainStats[domain]
  if (!stats || stats.totalAnswered === 0) return 2.0
  const successRate = stats.correctAnswers / stats.totalAnswered
  return 1 + (1 - successRate)
}

function pickWeighted<T>(
  items: { value: T; weight: number }[],
  count: number,
): T[] {
  const result: T[] = []
  const remaining = [...items]

  while (result.length < count && remaining.length > 0) {
    const totalWeight = remaining.reduce((sum, item) => sum + item.weight, 0)
    let random = Math.random() * totalWeight
    const index = remaining.findIndex((item) => {
      random -= item.weight
      return random <= 0
    })
    const picked = index >= 0 ? index : 0
    result.push(remaining[picked].value)
    remaining.splice(picked, 1)
  }

  return result
}

export function selectQuestions(options: SelectQuestionsOptions): Question[] {
  const { config, progress, recentQuestionIds } = options

  const eligible = ALL_QUESTIONS.filter(
    (q) =>
      config.domains.includes(q.domain) &&
      q.targetLevel.includes(config.seniorityLevel) &&
      !recentQuestionIds.includes(q.id),
  )

  const weighted = eligible.map((question) => ({
    value: question,
    weight: weightByDomainWeakness(question.domain, progress),
  }))

  return pickWeighted(weighted, config.totalQuestions)
}
