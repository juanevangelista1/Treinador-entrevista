import type { Question, KnowledgeDomain, QuestionPreference, SessionConfig } from './types'
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
    // Safe: the while condition guarantees remaining.length > 0, so `picked` is in bounds.
    result.push(remaining[picked]!.value)
    remaining.splice(picked, 1)
  }

  return result
}

function matchesPreference(question: Question, preference: QuestionPreference): boolean {
  switch (preference) {
    case 'open_text':
      return question.type === 'open_text'
    case 'code':
      return question.tags.includes('output-prediction')
    case 'multiple_choice':
      return question.type === 'multiple_choice' && !question.tags.includes('output-prediction')
    case 'mixed':
      return true
  }
}

export function selectQuestions(options: SelectQuestionsOptions): Question[] {
  const { config, progress, recentQuestionIds } = options

  const eligible = ALL_QUESTIONS.filter(
    (q) =>
      config.domains.includes(q.domain) &&
      q.targetLevel.includes(config.seniorityLevel) &&
      !recentQuestionIds.includes(q.id) &&
      (q.language ?? 'pt') === config.language &&
      (config.topics == null || config.topics.length === 0 || (q.topicId != null && config.topics.includes(q.topicId))),
  )

  const preference = config.questionPreference ?? 'mixed'
  const preferred = preference === 'mixed' ? eligible : eligible.filter((q) => matchesPreference(q, preference))

  const toWeighted = (questions: Question[]) =>
    questions.map((question) => ({
      value: question,
      weight: weightByDomainWeakness(question.domain, progress),
    }))

  const picked = pickWeighted(toWeighted(preferred), config.totalQuestions)

  if (picked.length >= config.totalQuestions || preferred.length === eligible.length) {
    return picked
  }

  // Not enough questions matching the preference: fill the rest from the
  // remaining eligible pool so a narrow preference + domain combo never
  // produces an incomplete session.
  const pickedIds = new Set(picked.map((q) => q.id))
  const fallbackPool = eligible.filter((q) => !pickedIds.has(q.id))
  const fallback = pickWeighted(toWeighted(fallbackPool), config.totalQuestions - picked.length)

  return [...picked, ...fallback]
}
