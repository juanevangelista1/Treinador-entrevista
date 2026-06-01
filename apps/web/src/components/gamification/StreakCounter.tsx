'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StreakCounterProps {
  streak: number
}

export function StreakCounter({ streak }: StreakCounterProps) {
  const isActive = streak >= 3

  return (
    <div className={cn('flex items-center gap-1.5', isActive ? 'text-orange-400' : 'text-muted-foreground')}>
      <Flame className={cn('h-4 w-4', isActive && 'fill-orange-400')} />
      <AnimatePresence mode="wait">
        <motion.span
          key={streak}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="text-sm font-bold"
        >
          {streak}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
