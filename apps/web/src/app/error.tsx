'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-sm space-y-4 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
        <AlertTriangle className="mx-auto h-8 w-8 text-red-400" />
        <h2 className="font-semibold text-foreground">Algo deu errado</h2>
        <p className="text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Você pode tentar novamente.
        </p>
        <button
          onClick={() => unstable_retry()}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
