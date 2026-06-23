'use client'

import { useUiLanguageStore } from '@/store/uiLanguageStore'
import type { KnowledgeDomain, QuestionPreference, SeniorityLevel } from '@interview-trainer/domain'

const translations = {
  pt: {
    header: {
      appName: 'Interview Trainer',
    },
    footer: {
      developedBy: 'Desenvolvido por',
      linkedin: 'LinkedIn',
    },
    dashboard: {
      welcomeTitle: 'Bem-vindo de volta',
      subtitle: 'Treine para entrevistas técnicas com mentoria por IA',
      achievementsCount: (n: number) => `${n} conquistas`,
      sessionsLabel: 'Sessões',
      longestStreakLabel: 'Maior sequência',
      startNewSessionTitle: 'Iniciar nova sessão',
      seniorityLabel: 'Nível de senioridade',
      domainsLabel: 'Domínios (selecione um ou mais)',
      languageLabel: 'Idioma das perguntas',
      portuguese: 'Português',
      english: 'English',
      startSession: 'Começar sessão',
      questionPreferenceLabel: 'Tipo de pergunta preferido',
    },
    questionPreference: {
      mixed: 'Misto',
      open_text: 'Texto aberto',
      code: 'Código',
      multiple_choice: 'Múltipla escolha',
    } satisfies Record<QuestionPreference, string>,
    seniority: {
      junior: { label: 'Junior', description: '0-2 anos de experiência' },
      pleno: { label: 'Pleno', description: '2-4 anos de experiência' },
      'pleno-senior': { label: 'Pleno/Sênior', description: '4-6 anos de experiência' },
      senior: { label: 'Sênior', description: '6+ anos de experiência' },
      staff: { label: 'Staff', description: 'Referência técnica' },
    } satisfies Record<SeniorityLevel, { label: string; description: string }>,
    domains: {
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      react: 'React',
      nextjs: 'Next.js',
      algorithms: 'Algoritmos',
      data_structures: 'Estruturas de Dados',
      software_engineering: 'Engenharia de Software',
    } satisfies Record<KnowledgeDomain, string>,
    session: {
      back: 'Voltar',
      preparing: 'Preparando sessão...',
      errorTitle: 'Não foi possível avaliar sua resposta',
      errorBody: 'Houve um erro ao conversar com o mentor de IA. Verifique sua conexão e tente novamente.',
      retry: 'Tentar novamente',
    },
    answerInput: {
      optionsLabel: 'Opções de resposta',
      correct: 'Correto!',
      incorrect: 'Incorreto',
      nextQuestion: 'Próxima pergunta →',
      seeSessionResult: 'Ver resultado da sessão',
      yourAnswerLabel: 'Sua resposta',
      placeholder: 'Digite sua resposta aqui... (mínimo 20 caracteres)',
      charactersLabel: (n: number) => `${n} caracteres`,
      submit: 'Enviar resposta',
    },
    feedbackPanel: {
      correct: 'Correto!',
      partial: 'Parcialmente correto',
      incorrect: 'Incorreto',
      hintTitle: 'Dica para aprofundar',
      exampleTitle: 'Exemplo',
      nextTopicTitle: 'Próximo passo sugerido',
      nextQuestion: 'Próxima pergunta →',
      seeSummary: 'Ver resumo da sessão',
    },
    sessionSummary: {
      completedTitle: 'Sessão concluída!',
      xpEarnedLabel: 'XP ganho',
      correctAnswersLabel: 'Acertos',
      averageScoreLabel: 'Score médio',
      dashboardLink: 'Dashboard',
      newSessionButton: 'Nova sessão',
    },
    errors: {
      title: 'Algo deu errado',
      body: 'Ocorreu um erro inesperado. Você pode tentar novamente.',
      globalBody: 'Ocorreu um erro grave na aplicação. Recarregue a página para continuar.',
      retry: 'Tentar novamente',
    },
    questionCard: {
      questionOf: (n: number, total: number) => `Questão ${n} de ${total}`,
      difficulty: {
        1: 'Fácil',
        2: 'Básico',
        3: 'Médio',
        4: 'Difícil',
        5: 'Expert',
      } as Record<number, string>,
    },
    xpBar: {
      toNextLevel: (n: number) => `+${n} para próximo nível`,
      maxLevel: 'Nível máximo!',
      progressLabel: 'Progresso de XP até o próximo nível',
    },
    achievementToast: {
      unlocked: 'Conquista desbloqueada!',
      dismissLabel: 'Dispensar notificação de conquista',
    },
    hintModal: {
      openLabel: 'Ver dica',
      title: 'Dica e aprendizado',
      hintsTitle: 'Dicas',
      explanationTitle: 'Explicação',
      generateButton: 'Gerar exemplo e analogia com IA',
      generating: 'Gerando...',
      codeExampleTitle: 'Exemplo de código',
      analogyTitle: 'Analogia',
      errorBody: 'Não foi possível gerar o exemplo. Tente novamente.',
      retry: 'Tentar novamente',
      close: 'Fechar',
    },
  },
  en: {
    header: {
      appName: 'Interview Trainer',
    },
    footer: {
      developedBy: 'Developed by',
      linkedin: 'LinkedIn',
    },
    dashboard: {
      welcomeTitle: 'Welcome back',
      subtitle: 'Practice for technical interviews with AI mentoring',
      achievementsCount: (n: number) => `${n} achievements`,
      sessionsLabel: 'Sessions',
      longestStreakLabel: 'Longest streak',
      startNewSessionTitle: 'Start new session',
      seniorityLabel: 'Seniority level',
      domainsLabel: 'Domains (select one or more)',
      languageLabel: 'Question language',
      portuguese: 'Português',
      english: 'English',
      startSession: 'Start session',
      questionPreferenceLabel: 'Preferred question type',
    },
    questionPreference: {
      mixed: 'Mixed',
      open_text: 'Open text',
      code: 'Code',
      multiple_choice: 'Multiple choice',
    } satisfies Record<QuestionPreference, string>,
    seniority: {
      junior: { label: 'Junior', description: '0-2 years of experience' },
      pleno: { label: 'Mid-level', description: '2-4 years of experience' },
      'pleno-senior': { label: 'Mid-Senior', description: '4-6 years of experience' },
      senior: { label: 'Senior', description: '6+ years of experience' },
      staff: { label: 'Staff', description: 'Technical reference' },
    } satisfies Record<SeniorityLevel, { label: string; description: string }>,
    domains: {
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      react: 'React',
      nextjs: 'Next.js',
      algorithms: 'Algorithms',
      data_structures: 'Data Structures',
      software_engineering: 'Software Engineering',
    } satisfies Record<KnowledgeDomain, string>,
    session: {
      back: 'Back',
      preparing: 'Preparing session...',
      errorTitle: "We couldn't evaluate your answer",
      errorBody: 'There was an error talking to the AI mentor. Check your connection and try again.',
      retry: 'Try again',
    },
    answerInput: {
      optionsLabel: 'Answer options',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      nextQuestion: 'Next question →',
      seeSessionResult: 'See session result',
      yourAnswerLabel: 'Your answer',
      placeholder: 'Type your answer here... (minimum 20 characters)',
      charactersLabel: (n: number) => `${n} characters`,
      submit: 'Submit answer',
    },
    feedbackPanel: {
      correct: 'Correct!',
      partial: 'Partially correct',
      incorrect: 'Incorrect',
      hintTitle: 'Hint to dig deeper',
      exampleTitle: 'Example',
      nextTopicTitle: 'Suggested next step',
      nextQuestion: 'Next question →',
      seeSummary: 'See session summary',
    },
    sessionSummary: {
      completedTitle: 'Session completed!',
      xpEarnedLabel: 'XP earned',
      correctAnswersLabel: 'Correct answers',
      averageScoreLabel: 'Average score',
      dashboardLink: 'Dashboard',
      newSessionButton: 'New session',
    },
    errors: {
      title: 'Something went wrong',
      body: 'An unexpected error occurred. You can try again.',
      globalBody: 'A critical application error occurred. Reload the page to continue.',
      retry: 'Try again',
    },
    questionCard: {
      questionOf: (n: number, total: number) => `Question ${n} of ${total}`,
      difficulty: {
        1: 'Easy',
        2: 'Basic',
        3: 'Medium',
        4: 'Hard',
        5: 'Expert',
      } as Record<number, string>,
    },
    xpBar: {
      toNextLevel: (n: number) => `+${n} to next level`,
      maxLevel: 'Max level!',
      progressLabel: 'XP progress to next level',
    },
    achievementToast: {
      unlocked: 'Achievement unlocked!',
      dismissLabel: 'Dismiss achievement notification',
    },
    hintModal: {
      openLabel: 'View hint',
      title: 'Hint & learning',
      hintsTitle: 'Hints',
      explanationTitle: 'Explanation',
      generateButton: 'Generate example and analogy with AI',
      generating: 'Generating...',
      codeExampleTitle: 'Code example',
      analogyTitle: 'Analogy',
      errorBody: "Couldn't generate the example. Please try again.",
      retry: 'Try again',
      close: 'Close',
    },
  },
} as const

export type UiLanguage = keyof typeof translations

export function useTranslation() {
  const language = useUiLanguageStore((s) => s.language)
  const setLanguage = useUiLanguageStore((s) => s.setLanguage)
  return { language, setLanguage, t: translations[language] }
}

export function getTranslation(language: UiLanguage) {
  return translations[language]
}
