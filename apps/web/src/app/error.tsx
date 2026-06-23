'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  const { t } = useTranslation()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-sm space-y-4 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
        <AlertTriangle className="mx-auto h-8 w-8 text-red-400" />
        <h2 className="font-semibold text-foreground">{t.errors.title}</h2>
        <p className="text-sm text-muted-foreground">{t.errors.body}</p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
        >
          {t.errors.retry}
        </button>
      </div>
    </div>
  )
}
