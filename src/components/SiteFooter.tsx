import Link from 'next/link'
import { NectarineMark } from './NectarineMark'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500">
            <NectarineMark size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-slate-900">Nectarine</p>
            <p className="text-xs text-slate-500">Pet prescription cash savings</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <Link href="/#demo" className="hover:text-orange-700">
            Savings calculator
          </Link>
          <Link href="/privacy" className="hover:text-orange-700">
            Privacy
          </Link>
          <a href="#install" className="hover:text-orange-700">
            Install
          </a>
          <p className="text-xs text-slate-400">© 2026 Nectarine</p>
        </div>
      </div>
      <p className="border-t border-slate-200 px-5 py-3 text-center text-[11px] text-slate-400 sm:px-8">
        Nectarine is a price-comparison tool, not a pharmacy, vet clinic, or insurer. Always confirm
        pricing with your pharmacist.
      </p>
    </footer>
  )
}
