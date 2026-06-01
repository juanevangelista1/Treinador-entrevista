import type { Session, SessionConfig, Answer, QuestionResult } from './types'

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function createSession(
  config: SessionConfig,
  questions: ReturnType<typeof import('../session/questionSelector').selectQuestions>,
): Session {
  return {
    id: generateId(),
    config,
    status: 'active',
    questions,
    currentQuestionIndex: 0,
    results: [],
    startedAt: Date.now(),
  }
}

export function advanceSession(
  session: Session,
  answer: Answer,
  score: number,
  xpEarned: number,
): Session {
  const currentQuestion = session.questions[session.currentQuestionIndex]

  if (!currentQuestion) return session

  const result: QuestionResult = {
    question: currentQuestion,
    answer,
    score,
    xpEarned,
  }

  const newResults = [...session.results, result]
  const nextIndex = session.currentQuestionIndex + 1
  const isLastQuestion = nextIndex >= session.questions.length

  return {
    ...session,
    results: newResults,
    currentQuestionIndex: nextIndex,
    status: isLastQuestion ? 'reviewing' : 'active',
  }
}

export function completeSession(session: Session): Session {
  return {
    ...session,
    status: 'completed',
    completedAt: Date.now(),
  }
}
