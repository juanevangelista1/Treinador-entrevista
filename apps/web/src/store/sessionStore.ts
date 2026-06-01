'use client'

import { create } from 'zustand'
import type { Session, Answer, AiFeedbackResponse } from '@interview-trainer/domain'

interface SessionState {
  session: Session | null
  currentFeedback: AiFeedbackResponse | null
  isLoadingFeedback: boolean
  pendingAnswer: Answer | null
}

interface SessionActions {
  setSession: (session: Session) => void
  updateSession: (session: Session) => void
  setFeedback: (feedback: AiFeedbackResponse) => void
  setLoadingFeedback: (loading: boolean) => void
  setPendingAnswer: (answer: Answer | null) => void
  clearSession: () => void
}

const initialState: SessionState = {
  session: null,
  currentFeedback: null,
  isLoadingFeedback: false,
  pendingAnswer: null,
}

export const useSessionStore = create<SessionState & SessionActions>()((set) => ({
  ...initialState,

  setSession: (session) => set({ session }),

  updateSession: (session) => set({ session }),

  setFeedback: (feedback) => set({ currentFeedback: feedback }),

  setLoadingFeedback: (loading) => set({ isLoadingFeedback: loading }),

  setPendingAnswer: (answer) => set({ pendingAnswer: answer }),

  clearSession: () => set(initialState),
}))
