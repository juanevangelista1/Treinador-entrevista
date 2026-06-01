import { javascriptQuestions } from './javascript'
import { typescriptQuestions } from './typescript'
import { reactQuestions } from './react'
import { nextjsQuestions } from './nextjs'
import { algorithmsQuestions } from './algorithms'
import type { Question } from '../session/types'

export const ALL_QUESTIONS: Question[] = [
  ...javascriptQuestions,
  ...typescriptQuestions,
  ...reactQuestions,
  ...nextjsQuestions,
  ...algorithmsQuestions,
]

export {
  javascriptQuestions,
  typescriptQuestions,
  reactQuestions,
  nextjsQuestions,
  algorithmsQuestions,
}
