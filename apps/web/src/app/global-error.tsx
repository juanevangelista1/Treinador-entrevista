'use client'

import './globals.css'

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="max-w-sm space-y-4 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
            <h2 className="font-semibold text-foreground">Algo deu errado</h2>
            <p className="text-sm text-muted-foreground">
              Ocorreu um erro grave na aplicação. Recarregue a página para continuar.
            </p>
            <button
              onClick={() => unstable_retry()}
              className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
