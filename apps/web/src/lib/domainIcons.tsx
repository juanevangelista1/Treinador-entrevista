import { Brain, BookOpen, Target, Code2, FileCode, Palette, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { KnowledgeDomain } from '@interview-trainer/domain'

export const DOMAIN_ICONS: Record<KnowledgeDomain, LucideIcon> = {
  javascript: Code2,
  typescript: Code2,
  react: Brain,
  nextjs: BookOpen,
  algorithms: Target,
  data_structures: Target,
  software_engineering: Code2,
  html: FileCode,
  css: Palette,
  internet_fundamentals: Globe,
}
