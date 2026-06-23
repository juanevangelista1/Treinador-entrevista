'use client'

import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import type { SeniorityLevel } from '@interview-trainer/domain'

const LEVEL_CLASSNAMES: Record<SeniorityLevel, string> = {
  junior: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  pleno: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'pleno-senior': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  senior: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  staff: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

interface LevelBadgeProps {
  level: SeniorityLevel
  size?: 'sm' | 'md' | 'lg'
}

export function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const { t } = useTranslation()

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold',
        LEVEL_CLASSNAMES[level],
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        size === 'lg' && 'text-base px-4 py-1',
      )}
    >
      {t.seniority[level].label}
    </span>
  )
}
