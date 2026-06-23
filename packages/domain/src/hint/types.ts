export interface HintRequest {
  readonly questionId: string
}

export interface HintResponse {
  readonly codeExample: string
  readonly technicalExplanation: string
  readonly analogy: string
}
