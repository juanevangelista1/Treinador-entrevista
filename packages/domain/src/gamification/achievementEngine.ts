import type { Achievement, UserProgress } from './types'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-answer',
    title: 'Primeira Resposta',
    description: 'Respondeu sua primeira pergunta',
    xpReward: 50,
    condition: (p) => p.sessionsCompleted >= 1 || Object.values(p.domainStats).some((d) => d.totalAnswered >= 1),
  },
  {
    id: 'streak-3',
    title: 'Em Chamas',
    description: 'Alcançou uma sequência de 3 acertos',
    xpReward: 75,
    condition: (p) => p.longestStreak >= 3,
  },
  {
    id: 'streak-5',
    title: 'Imparável',
    description: 'Alcançou uma sequência de 5 acertos',
    xpReward: 150,
    condition: (p) => p.longestStreak >= 5,
  },
  {
    id: 'streak-10',
    title: 'Lendário',
    description: 'Alcançou uma sequência de 10 acertos',
    xpReward: 300,
    condition: (p) => p.longestStreak >= 10,
  },
  {
    id: 'level-pleno',
    title: 'Pleno Conquistado',
    description: 'Atingiu o nível Pleno',
    xpReward: 200,
    condition: (p) =>
      ['pleno', 'pleno-senior', 'senior', 'staff'].includes(p.currentLevel),
  },
  {
    id: 'level-senior',
    title: 'Sênior de Verdade',
    description: 'Atingiu o nível Sênior',
    xpReward: 500,
    condition: (p) => ['senior', 'staff'].includes(p.currentLevel),
  },
  {
    id: 'level-staff',
    title: 'Staff Engineer',
    description: 'Atingiu o nível máximo',
    xpReward: 1000,
    condition: (p) => p.currentLevel === 'staff',
  },
  {
    id: 'js-master',
    title: 'JavaScript Master',
    description: 'Respondeu 20 perguntas de JavaScript com score acima de 70%',
    xpReward: 250,
    condition: (p) => {
      const stats = p.domainStats['javascript']
      return Boolean(stats && stats.totalAnswered >= 20 && stats.averageScore >= 70)
    },
  },
  {
    id: 'session-5',
    title: 'Dedicado',
    description: 'Completou 5 sessões de treinamento',
    xpReward: 200,
    condition: (p) => p.sessionsCompleted >= 5,
  },
  {
    id: 'perfectionist',
    title: 'Perfeccionista',
    description: 'Obteve score 100 em alguma resposta',
    xpReward: 100,
    condition: (p) =>
      p.xpHistory.some((e) => e.type === 'correct_answer' && e.multiplier >= 1 && e.baseXp === e.totalXp / e.multiplier),
  },
]

export function checkUnlockedAchievements(
  progress: UserProgress,
): Achievement[] {
  return ACHIEVEMENTS.filter(
    (achievement) =>
      !progress.unlockedAchievements.includes(achievement.id) &&
      achievement.condition(progress),
  )
}
