'use client'

import { motion } from 'framer-motion'
import { getLevelProgress, getXpToNextLevel } from '@interview-trainer/domain'
import { useTranslation } from '@/lib/i18n'
import type { SeniorityLevel } from '@interview-trainer/domain'

interface XpBarProps {
  totalXp: number
  currentLevel: SeniorityLevel
}

export function XpBar({ totalXp, currentLevel }: XpBarProps) {
  const { t } = useTranslation()
  const progress = getLevelProgress(totalXp)
  const xpToNext = getXpToNextLevel(totalXp)
  const isMaxLevel = currentLevel === 'staff'

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{totalXp} XP</span>
        {!isMaxLevel && <span>{t.xpBar.toNextLevel(xpToNext)}</span>}
        {isMaxLevel && <span>{t.xpBar.maxLevel}</span>}
      </div>
      <div
        role="progressbar"
        aria-label={t.xpBar.progressLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className="h-2 w-full overflow-hidden rounded-full bg-secondary"
      >
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
