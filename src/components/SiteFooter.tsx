import Link from 'next/link'
import { NectarineMark } from './NectarineMark'

const PRODUCT = [
  { href: '/#how', label: 'How it works' },
  { href: '/#demo', label: 'Savings calculator' },
  { href: '/#install', label: 'Add to Chrome' },
  { href: '/card', label: 'Mobile Rx card' },
]

const POPULAR = [
  { href: '/#demo', label: 'Gabapentin' },
  { href: '/#demo', label: 'Apoquel' },
  { href: '/#demo', label: 'Trazodone' },
  { href: '/#demo', label: 'Simparica Trio' },
]

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: 'mailto:privacy@joinnectarine.com', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <NectarineMark size={22} />
            <span className="text-base font-bold text-[#111827]">Nectarine</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Cash-discount prices for pet &amp; family prescriptions. Free forever.
          </p>
        </div>

        {[
          { title: 'Product', links: PRODUCT },
          { title: 'Popular Meds', links: POPULAR },
          { title: 'Legal', links: LEGAL },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-[#EA580C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 px-5 py-5 sm:px-8">
        <p className="mx-auto max-w-6xl text-center text-[11px] leading-relaxed text-slate-400">
          Nectarine is a free prescription price-comparison tool, not a pharmacy or insurance
          provider. Always confirm pricing with your pharmacist. © 2026 Nectarine · joinnectarine.com
        </p>
      </div>
    </footer>
  )
}
