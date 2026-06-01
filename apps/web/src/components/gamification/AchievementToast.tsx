'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'
import type { Achievement } from '@interview-trainer/domain'

interface AchievementToastProps {
  achievement: Achievement | null
  onDismiss: () => void
}

export function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed right-4 top-4 z-50 flex max-w-sm cursor-pointer items-center gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 shadow-2xl backdrop-blur-sm"
          onClick={onDismiss}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
            <Trophy className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-yellow-400">Conquista desbloqueada!</p>
            <p className="text-sm font-bold text-foreground">{achievement.title}</p>
            <p className="truncate text-xs text-muted-foreground">{achievement.description}</p>
            <p className="mt-0.5 text-xs font-medium text-yellow-400">+{achievement.xpReward} XP</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
