import { streamObject } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { z } from 'zod'
import { ALL_QUESTIONS, type Question } from '@interview-trainer/domain'
import { checkRateLimit, getClientKey } from '@/lib/rateLimit'

const RATE_LIMIT = { limit: 10, windowMs: 60_000 }

const hintSchema = z.object({
  codeExample: z.string().min(10),
  technicalExplanation: z.string().min(20),
  analogy: z.string().min(20),
})

const requestSchema = z.object({
  questionId: z.string(),
})

function buildSystemPrompt(language: 'pt' | 'en'): string {
  if (language === 'en') {
    return `You are a technical mentor focused on helping candidates truly learn a concept, not just pass an interview.

Given a question and its explanation, produce:
1. "codeExample": a short, didactic code snippet that illustrates the concept in isolation (not the answer to the original question).
2. "technicalExplanation": a deeper technical explanation that complements (does not repeat) the explanation already given.
3. "analogy": a real-world analogy that makes the concept easier to remember.

Be concrete and concise. Respond in English.`
  }

  return `Você é um mentor técnico focado em ajudar o candidato a realmente aprender o conceito, não só passar na entrevista.

Dada uma pergunta e sua explicação, produza:
1. "codeExample": um trecho de código curto e didático que ilustre o conceito isoladamente (não a resposta da pergunta original).
2. "technicalExplanation": uma explicação técnica mais profunda que complementa (não repete) a explicação já dada.
3. "analogy": uma analogia do mundo real que facilite memorizar o conceito.

Seja concreto e conciso. Responda em português brasileiro.`
}

function buildUserPrompt(question: Question): string {
  return `Pergunta: ${question.text}

Explicação existente: ${question.explanation}

Domínio: ${question.domain}
Dificuldade: ${question.difficulty}/5`
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('/api/hint called without ANTHROPIC_API_KEY configured')
    return Response.json({ error: 'AI service is not configured' }, { status: 500 })
  }

  const rateLimit = checkRateLimit(getClientKey(req), RATE_LIMIT)
  if (!rateLimit.allowed) {
    return Response.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(rateLimit.retryAfterSeconds) } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = requestSchema.safeParse(body)

  if (!parsed.success) {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { questionId } = parsed.data

  const question = ALL_QUESTIONS.find((q) => q.id === questionId)
  if (!question) {
    return Response.json({ error: 'Question not found' }, { status: 404 })
  }

  const result = streamObject({
    model: anthropic('claude-sonnet-4-6'),
    schema: hintSchema,
    system: buildSystemPrompt(question.language ?? 'pt'),
    prompt: buildUserPrompt(question),
    onError: ({ error }) => {
      console.error('streamObject failed for /api/hint', error)
    },
  })

  return result.toTextStreamResponse()
}
