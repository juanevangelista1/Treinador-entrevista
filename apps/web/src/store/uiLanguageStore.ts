'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { QuestionLanguage } from '@interview-trainer/domain'

interface UiLanguageState {
  language: QuestionLanguage
  setLanguage: (language: QuestionLanguage) => void
}

export const useUiLanguageStore = create<UiLanguageState>()(
  persist(
    (set) => ({
      language: 'pt',
      setLanguage: (language) => set({ language }),
    }),
    { name: 'interview-trainer-ui-language' },
  ),
)
