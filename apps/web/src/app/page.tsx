'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Trophy, Target } from 'lucide-react'
import { useUserProgressStore } from '@/store/userProgressStore'
import { LevelBadge } from '@/components/gamification/LevelBadge'
import { XpBar } from '@/components/gamification/XpBar'
import { StreakCounter } from '@/components/gamification/StreakCounter'
import { useTranslation } from '@/lib/i18n'
import { DOMAIN_ICONS } from '@/lib/domainIcons'
import type { SeniorityLevel, KnowledgeDomain, QuestionPreference, MdnTopicId } from '@interview-trainer/domain'
import { SENIORITY_LEVELS, QUESTION_PREFERENCES, MDN_TOPICS } from '@interview-trainer/domain'

const DOMAIN_VALUES: KnowledgeDomain[] = ['javascript', 'typescript', 'react', 'nextjs', 'algorithms', 'html', 'css', 'internet_fundamentals']

export default function DashboardPage() {
  const currentLevel = useUserProgressStore((s) => s.currentLevel)
  const currentStreak = useUserProgressStore((s) => s.currentStreak)
  const totalXp = useUserProgressStore((s) => s.totalXp)
  const sessionsCompleted = useUserProgressStore((s) => s.sessionsCompleted)
  const longestStreak = useUserProgressStore((s) => s.longestStreak)
  const unlockedAchievementsCount = useUserProgressStore((s) => s.unlockedAchievements.length)
  const { language, setLanguage, t } = useTranslation()
  const [selectedLevel, setSelectedLevel] = useState<SeniorityLevel>(currentLevel)
  const [selectedDomains, setSelectedDomains] = useState<KnowledgeDomain[]>(['javascript', 'react'])
  const [selectedTopics, setSelectedTopics] = useState<MdnTopicId[]>([])
  const [questionPreference, setQuestionPreference] = useState<QuestionPreference>('mixed')

  function toggleDomain(domain: KnowledgeDomain) {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain],
    )
    // Clear topics that belong to the domain being removed
    setSelectedTopics((prev) =>
      prev.filter((t) => {
        const topic = MDN_TOPICS.find((m) => m.id === t)
        return topic ? selectedDomains.includes(topic.domain) || topic.domain === domain : false
      }),
    )
  }

  function toggleTopic(topicId: MdnTopicId) {
    setSelectedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId],
    )
  }

  const visibleTopics = MDN_TOPICS.filter((t) => selectedDomains.includes(t.domain))

  const sessionUrl = `/session/${selectedLevel}?domains=${selectedDomains.join(',')}&lang=${language}&pref=${questionPreference}${selectedTopics.length > 0 ? `&topics=${selectedTopics.join(',')}` : ''}`

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="space-y-1">
          <h1 className="text-xl font-bold text-foreground">{t.dashboard.welcomeTitle}</h1>
          <p className="text-sm text-muted-foreground">{t.dashboard.subtitle}</p>
        </header>

        <section className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LevelBadge level={currentLevel} />
              <StreakCounter streak={currentStreak} />
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Trophy className="h-4 w-4" />
              <span className="text-sm">{t.dashboard.achievementsCount(unlockedAchievementsCount)}</span>
            </div>
          </div>
          <XpBar totalXp={totalXp} currentLevel={currentLevel} />
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg bg-secondary p-3 text-center">
              <p className="text-lg font-bold text-foreground">{sessionsCompleted}</p>
              <p className="text-xs text-muted-foreground">{t.dashboard.sessionsLabel}</p>
            </div>
            <div className="rounded-lg bg-secondary p-3 text-center">
              <p className="text-lg font-bold text-foreground">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">{t.dashboard.longestStreakLabel}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            {t.dashboard.startNewSessionTitle}
          </h2>

          <div className="space-y-3">
            <p id="seniority-label" className="text-sm font-medium text-muted-foreground">
              {t.dashboard.seniorityLabel}
            </p>
            <div
              role="group"
              aria-labelledby="seniority-label"
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {SENIORITY_LEVELS.map((level) => (
                <button
                  key={level}
                  type="button"
                  aria-pressed={selectedLevel === level}
                  onClick={() => setSelectedLevel(level)}
                  className={`text-left rounded-lg border px-4 py-3 text-sm cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.97] ${
                    selectedLevel === level
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  <p className="font-semibold text-foreground">{t.seniority[level].label}</p>
                  <p className="text-xs text-muted-foreground">{t.seniority[level].description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p id="domains-label" className="text-sm font-medium text-muted-foreground">
              {t.dashboard.domainsLabel}
            </p>
            <div role="group" aria-labelledby="domains-label" className="flex flex-wrap gap-2">
              {DOMAIN_VALUES.map((domain) => {
                const Icon = DOMAIN_ICONS[domain]
                return (
                  <button
                    key={domain}
                    type="button"
                    aria-pressed={selectedDomains.includes(domain)}
                    onClick={() => toggleDomain(domain)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.95] ${
                      selectedDomains.includes(domain)
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t.domains[domain]}
                  </button>
                )
              })}
            </div>
          </div>

          {visibleTopics.length > 0 && (
            <div className="space-y-3">
              <p id="topics-label" className="text-sm font-medium text-muted-foreground">
                {t.dashboard.topicsLabel}
              </p>
              <div role="group" aria-labelledby="topics-label" className="flex flex-wrap gap-2">
                {visibleTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    aria-pressed={selectedTopics.includes(topic.id as MdnTopicId)}
                    onClick={() => toggleTopic(topic.id as MdnTopicId)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.95] ${
                      selectedTopics.includes(topic.id as MdnTopicId)
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {language === 'pt' ? t.mdnTopics[topic.id as MdnTopicId] : t.mdnTopics[topic.id as MdnTopicId]}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <p id="language-label" className="text-sm font-medium text-muted-foreground">
              {t.dashboard.languageLabel}
            </p>
            <div role="group" aria-labelledby="language-label" className="flex gap-2">
              <button
                type="button"
                aria-pressed={language === 'pt'}
                onClick={() => setLanguage('pt')}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                  language === 'pt'
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <span className="text-base leading-none">🇧🇷</span>
                {t.dashboard.portuguese}
              </button>
              <button
                type="button"
                aria-pressed={language === 'en'}
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                  language === 'en'
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <span className="text-base leading-none">🇺🇸</span>
                {t.dashboard.english}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <p id="preference-label" className="text-sm font-medium text-muted-foreground">
              {t.dashboard.questionPreferenceLabel}
            </p>
            <div role="group" aria-labelledby="preference-label" className="flex flex-wrap gap-2">
              {QUESTION_PREFERENCES.map((preference) => (
                <button
                  key={preference}
                  type="button"
                  aria-pressed={questionPreference === preference}
                  onClick={() => setQuestionPreference(preference)}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] ${
                    questionPreference === preference
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {t.questionPreference[preference]}
                </button>
              ))}
            </div>
          </div>

          {selectedDomains.length > 0 ? (
            <Link
              href={sessionUrl}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-base font-bold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
            >
              <Zap className="h-5 w-5" />
              {t.dashboard.startSession}
            </Link>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-4 text-base font-bold text-muted-foreground"
            >
              <Zap className="h-5 w-5" />
              {t.dashboard.startSession}
            </button>
          )}
        </section>
      </div>
    </main>
  )
}
