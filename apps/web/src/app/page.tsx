'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Brain, Zap, Trophy, Target, BookOpen, Code2 } from 'lucide-react'
import { useUserProgressStore } from '@/store/userProgressStore'
import { LevelBadge } from '@/components/gamification/LevelBadge'
import { XpBar } from '@/components/gamification/XpBar'
import { StreakCounter } from '@/components/gamification/StreakCounter'
import type { SeniorityLevel, KnowledgeDomain, QuestionLanguage } from '@interview-trainer/domain'

const SENIORITY_OPTIONS: { value: SeniorityLevel; label: string; description: string }[] = [
  { value: 'junior', label: 'Junior', description: '0-2 anos de experiência' },
  { value: 'pleno', label: 'Pleno', description: '2-4 anos de experiência' },
  { value: 'pleno-senior', label: 'Pleno/Sênior', description: '4-6 anos de experiência' },
  { value: 'senior', label: 'Sênior', description: '6+ anos de experiência' },
  { value: 'staff', label: 'Staff', description: 'Referência técnica' },
]

const DOMAIN_OPTIONS: { value: KnowledgeDomain; label: string; icon: React.ReactNode }[] = [
  { value: 'javascript', label: 'JavaScript', icon: <Code2 className="h-4 w-4" /> },
  { value: 'typescript', label: 'TypeScript', icon: <Code2 className="h-4 w-4" /> },
  { value: 'react', label: 'React', icon: <Brain className="h-4 w-4" /> },
  { value: 'nextjs', label: 'Next.js', icon: <BookOpen className="h-4 w-4" /> },
  { value: 'algorithms', label: 'Algoritmos', icon: <Target className="h-4 w-4" /> },
]

export default function DashboardPage() {
  const currentLevel = useUserProgressStore((s) => s.currentLevel)
  const currentStreak = useUserProgressStore((s) => s.currentStreak)
  const totalXp = useUserProgressStore((s) => s.totalXp)
  const sessionsCompleted = useUserProgressStore((s) => s.sessionsCompleted)
  const longestStreak = useUserProgressStore((s) => s.longestStreak)
  const unlockedAchievementsCount = useUserProgressStore((s) => s.unlockedAchievements.length)
  const [selectedLevel, setSelectedLevel] = useState<SeniorityLevel>(currentLevel)
  const [selectedDomains, setSelectedDomains] = useState<KnowledgeDomain[]>(['javascript', 'react'])
  const [language, setLanguage] = useState<QuestionLanguage>('pt')

  function toggleDomain(domain: KnowledgeDomain) {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain],
    )
  }

  const sessionUrl = `/session/${selectedLevel}?domains=${selectedDomains.join(',')}&lang=${language}`

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Interview Trainer</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Treine para entrevistas técnicas com mentoria por IA
          </p>
        </header>

        <section className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LevelBadge level={currentLevel} />
              <StreakCounter streak={currentStreak} />
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Trophy className="h-4 w-4" />
              <span className="text-sm">{unlockedAchievementsCount} conquistas</span>
            </div>
          </div>
          <XpBar totalXp={totalXp} currentLevel={currentLevel} />
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg bg-secondary p-3 text-center">
              <p className="text-lg font-bold text-foreground">{sessionsCompleted}</p>
              <p className="text-xs text-muted-foreground">Sessões</p>
            </div>
            <div className="rounded-lg bg-secondary p-3 text-center">
              <p className="text-lg font-bold text-foreground">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">Maior sequência</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Iniciar nova sessão
          </h2>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Nível de senioridade</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENIORITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={selectedLevel === opt.value}
                  onClick={() => setSelectedLevel(opt.value)}
                  className={`text-left rounded-lg border px-4 py-3 text-sm transition-all ${
                    selectedLevel === opt.value
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  <p className="font-semibold text-foreground">{opt.label}</p>
                  <p className="text-xs text-muted-foreground">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Domínios (selecione um ou mais)</p>
            <div className="flex flex-wrap gap-2">
              {DOMAIN_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={selectedDomains.includes(opt.value)}
                  onClick={() => toggleDomain(opt.value)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                    selectedDomains.includes(opt.value)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {opt.icon}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Idioma das perguntas</p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-pressed={language === 'pt'}
                onClick={() => setLanguage('pt')}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                  language === 'pt'
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <span className="text-base leading-none">🇧🇷</span>
                Português
              </button>
              <button
                type="button"
                aria-pressed={language === 'en'}
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <span className="text-base leading-none">🇺🇸</span>
                English
              </button>
            </div>
          </div>

          {selectedDomains.length > 0 ? (
            <Link
              href={sessionUrl}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Zap className="h-5 w-5" />
              {language === 'en' ? 'Start session' : 'Começar sessão'}
            </Link>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-4 text-base font-bold text-muted-foreground"
            >
              <Zap className="h-5 w-5" />
              {language === 'en' ? 'Start session' : 'Começar sessão'}
            </button>
          )}
        </section>
      </div>
    </main>
  )
}
