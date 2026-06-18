import { streamObject } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { z } from 'zod'
import { KNOWLEDGE_DOMAINS, DIFFICULTY_LEVELS, SENIORITY_LEVELS } from '@interview-trainer/domain'
import type { AiFeedbackRequest } from '@interview-trainer/domain'
import { checkRateLimit, getClientKey } from '@/lib/rateLimit'

const RATE_LIMIT = { limit: 10, windowMs: 60_000 }

const feedbackSchema = z.object({
  score: z.number().min(0).max(100),
  verdict: z.enum(['correct', 'partial', 'incorrect']),
  feedback: z.string(),
  hint: z.string(),
  example: z.string(),
  keyConceptsMissed: z.array(z.string()),
  suggestedNextTopic: z.string(),
})

const requestSchema = z.object({
  question: z.object({
    id: z.string(),
    text: z.string().max(2000),
    domain: z.enum(KNOWLEDGE_DOMAINS),
    difficulty: z.union(DIFFICULTY_LEVELS.map((level) => z.literal(level))),
    explanation: z.string().max(2000),
    hints: z.array(z.string().max(500)).max(20),
  }),
  userAnswer: z.string().min(1).max(5000),
  seniorityLevel: z.enum(SENIORITY_LEVELS),
  domain: z.enum(KNOWLEDGE_DOMAINS),
})

function buildSystemPrompt(seniorityLevel: string): string {
  return `Você é um mentor técnico especializado em entrevistas de tecnologia, com foco em Frontend e Engenharia de Software.

Seu objetivo é avaliar respostas de candidatos ao nível "${seniorityLevel}" de senioridade.

REGRAS IMPORTANTES:
1. NÃO entregue a resposta completa diretamente — guie o candidato
2. Seja específico sobre o que estava certo e o que pode melhorar
3. Dê uma dica progressiva que ajude o aprendizado
4. O exemplo deve ilustrar o conceito, não ser a solução exata
5. O score deve refletir honestamente a qualidade da resposta para o nível "${seniorityLevel}"
6. Responda sempre em português brasileiro
7. Seja encorajador mas honesto`
}

function buildUserPrompt(request: AiFeedbackRequest): string {
  return `Pergunta: ${request.question.text}

Resposta do candidato: ${request.userAnswer}

Nível esperado: ${request.seniorityLevel}
Domínio: ${request.domain}
Dificuldade da pergunta: ${request.question.difficulty}/5

Avalie esta resposta e retorne o JSON estruturado solicitado.`
}

export async function POST(req: Request) {
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

  const feedbackRequest = parsed.data as AiFeedbackRequest

  const result = streamObject({
    model: anthropic('claude-haiku-4-5-20251001'),
    schema: feedbackSchema,
    system: buildSystemPrompt(feedbackRequest.seniorityLevel),
    prompt: buildUserPrompt(feedbackRequest),
    onError: ({ error }) => {
      console.error('streamObject failed for /api/feedback', error)
    },
  })

  return result.toTextStreamResponse()
}
