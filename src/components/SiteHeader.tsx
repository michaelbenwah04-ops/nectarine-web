import Link from 'next/link'
import { NectarineMark } from './NectarineMark'

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-orange-900/5 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-sm shadow-orange-500/30 transition group-hover:scale-105">
            <NectarineMark size={22} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">Nectarine</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/#how"
            className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:inline"
          >
            How it works
          </Link>
          <Link
            href="/privacy"
            className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:inline"
          >
            Privacy
          </Link>
          <a
            href="#install"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-orange-500/25 transition hover:from-orange-600 hover:to-orange-500"
          >
            Add to Chrome
          </a>
        </nav>
      </div>
    </header>
  )
}
