'use server'

import {
  selectQuestions,
  type SessionConfig,
  type UserProgress,
  type Question,
} from '@interview-trainer/domain'

export async function selectSessionQuestions(
  config: SessionConfig,
  progress: UserProgress,
  recentQuestionIds: string[],
): Promise<Question[]> {
  return selectQuestions({ config, progress, recentQuestionIds })
}
