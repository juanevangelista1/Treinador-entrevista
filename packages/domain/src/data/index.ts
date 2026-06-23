import { javascriptQuestions } from './javascript'
import { typescriptQuestions } from './typescript'
import { reactQuestions } from './react'
import { reactFundamentalsQuestions } from './react-fundamentals'
import { reactInterview2026Questions } from './react-interview-2026'
import { reactPatternsQuestions } from './react-patterns'
import { nextjsQuestions } from './nextjs'
import { algorithmsQuestions } from './algorithms'
import { stateManagementQuestions } from './state-management'
import { systemDesignQuestions } from './system-design'
import { webApisQuestions } from './web-apis'
import { softwareEngineeringQuestions } from './software-engineering'
import { careerInterviewQuestions } from './career-interview'
import { htmlQuestions } from './html'
import { cssQuestions } from './css'
import { internetFundamentalsQuestions } from './internet-fundamentals'
import { questionsEn } from './questions-en'
import type { Question } from '../session/types'

export const ALL_QUESTIONS: Question[] = [
  ...javascriptQuestions,
  ...typescriptQuestions,
  ...reactQuestions,
  ...reactFundamentalsQuestions,
  ...reactInterview2026Questions,
  ...reactPatternsQuestions,
  ...nextjsQuestions,
  ...algorithmsQuestions,
  ...stateManagementQuestions,
  ...systemDesignQuestions,
  ...webApisQuestions,
  ...softwareEngineeringQuestions,
  ...careerInterviewQuestions,
  ...htmlQuestions,
  ...cssQuestions,
  ...internetFundamentalsQuestions,
  ...questionsEn,
]

export {
  javascriptQuestions,
  typescriptQuestions,
  reactQuestions,
  reactFundamentalsQuestions,
  reactInterview2026Questions,
  reactPatternsQuestions,
  nextjsQuestions,
  algorithmsQuestions,
  stateManagementQuestions,
  systemDesignQuestions,
  webApisQuestions,
  softwareEngineeringQuestions,
  careerInterviewQuestions,
  htmlQuestions,
  cssQuestions,
  internetFundamentalsQuestions,
}
