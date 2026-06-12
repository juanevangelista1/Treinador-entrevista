'use client'

import { motion } from 'framer-motion'
import { getLevelProgress, getXpToNextLevel } from '@interview-trainer/domain'
import type { SeniorityLevel } from '@interview-trainer/domain'

interface XpBarProps {
  totalXp: number
  currentLevel: SeniorityLevel
}

export function XpBar({ totalXp, currentLevel }: XpBarProps) {
  const progress = getLevelProgress(totalXp)
  const xpToNext = getXpToNextLevel(totalXp)
  const isMaxLevel = currentLevel === 'staff'

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{totalXp} XP</span>
        {!isMaxLevel && <span>+{xpToNext} para próximo nível</span>}
        {isMaxLevel && <span>Nível máximo!</span>}
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
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
