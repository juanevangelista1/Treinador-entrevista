import { cn } from '@/lib/utils'
import type { SeniorityLevel } from '@interview-trainer/domain'

const LEVEL_CONFIG: Record<SeniorityLevel, { label: string; className: string }> = {
  junior: { label: 'Junior', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  pleno: { label: 'Pleno', className: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  'pleno-senior': { label: 'Pleno/Sênior', className: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  senior: { label: 'Sênior', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  staff: { label: 'Staff', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
}

interface LevelBadgeProps {
  level: SeniorityLevel
  size?: 'sm' | 'md' | 'lg'
}

export function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const config = LEVEL_CONFIG[level]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold',
        config.className,
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        size === 'lg' && 'text-base px-4 py-1',
      )}
    >
      {config.label}
    </span>
  )
}
