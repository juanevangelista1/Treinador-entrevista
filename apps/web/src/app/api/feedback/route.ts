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
  feedback: z.string().min(20),
  hint: z.string().min(10),
  example: z.string().min(10),
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

REGRAS DE AVALIAÇÃO (siga rigorosamente, não seja leniente):
1. Se a resposta for vaga, genérica, não relacionada ao conceito perguntado, ou claramente não demonstrar entendimento real — mesmo que tenha tamanho razoável — dê "verdict": "incorrect" e "score" abaixo de 30. NÃO escolha "partial" por padrão.
2. Use "partial" apenas quando o candidato demonstrar entendimento de PARTE do conceito, mas errar ou omitir outra parte específica e identificável.
3. Use "correct" apenas quando a resposta cobrir os pontos centrais do conceito esperado para o nível "${seniorityLevel}".
4. "feedback" deve ter no mínimo 2 frases, citando especificamente o que a resposta acertou ou errou — nunca uma frase genérica como "boa tentativa" ou "continue estudando" sem conteúdo concreto.
5. Se "verdict" não for "correct", "keyConceptsMissed" deve conter pelo menos 1 item nomeando o conceito específico que faltou ou foi usado incorretamente.
6. Dê uma dica progressiva ("hint") que ajude o aprendizado sem entregar a resposta completa.
7. O "example" deve ilustrar o conceito com um trecho de código ou cenário concreto, não ser a solução exata da pergunta.
8. Responda sempre em português brasileiro.
9. Seja encorajador no tom, mas rigoroso e honesto na nota.`
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
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('/api/feedback called without ANTHROPIC_API_KEY configured')
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

  const feedbackRequest = parsed.data as AiFeedbackRequest

  const result = streamObject({
    model: anthropic('claude-sonnet-4-6'),
    schema: feedbackSchema,
    system: buildSystemPrompt(feedbackRequest.seniorityLevel),
    prompt: buildUserPrompt(feedbackRequest),
    onError: ({ error }) => {
      console.error('streamObject failed for /api/feedback', error)
    },
  })

  return result.toTextStreamResponse()
}
