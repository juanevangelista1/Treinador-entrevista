import { Mail } from 'lucide-react'

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 px-4 py-6 text-center md:px-8">
        <p className="text-sm text-muted-foreground">
          Desenvolvido por <span className="font-semibold text-foreground">Juan Evangelista</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/juan-evangelista-developer/?locale=pt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href="mailto:juan.evangelista.nascimentoo@gmail.com"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            juan.evangelista.nascimentoo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
