'use client'

import { useTranslation } from '@/lib/i18n'
import './globals.css'

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  const { language, t } = useTranslation()

  return (
    <html lang={language === 'en' ? 'en' : 'pt-BR'} className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="max-w-sm space-y-4 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
            <h2 className="font-semibold text-foreground">{t.errors.title}</h2>
            <p className="text-sm text-muted-foreground">{t.errors.globalBody}</p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
            >
              {t.errors.retry}
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
