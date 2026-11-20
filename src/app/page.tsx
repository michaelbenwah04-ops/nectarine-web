import Link from 'next/link'
import {
  Download,
  Lock,
  PawPrint,
  Puzzle,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react'
import { DemoWidget } from '@/components/DemoWidget'
import { NectarineMark } from '@/components/NectarineMark'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#fffaf5]">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="animate-nectarine-pulse-soft pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-300/35 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.12),_transparent_55%)]"
          />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
            <div>
              <div className="animate-nectarine-fade-up inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-orange-700 shadow-sm backdrop-blur">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500">
                  <NectarineMark size={14} />
                </span>
                Nectarine
              </div>

              <h1 className="animate-nectarine-fade-up-delay mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                Stop overpaying for your pet&apos;s prescriptions.
              </h1>

              <p className="animate-nectarine-fade-up-delay-2 mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                Nectarine automatically finds the lowest local cash-discount prices on dog, cat, and
                household medications while you browse—no sign-up, no pet insurance needed, and 100%
                free.
              </p>

              <div className="animate-nectarine-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#install"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-600 hover:to-orange-500"
                >
                  <Download className="h-4 w-4" />
                  Add Nectarine to Chrome — It&apos;s Free
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  Preview Savings Calculator
                </a>
              </div>

              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-orange-600" />
                  No account
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
                  No PHI stored
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PawPrint className="h-3.5 w-3.5 text-orange-600" />
                  Dogs, cats &amp; household pets
                </span>
              </p>
            </div>

            <div className="animate-nectarine-float relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-200/40 via-white/20 to-amber-200/30 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-2xl shadow-orange-900/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500">
                      <NectarineMark size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Gabapentin</p>
                      <p className="text-xs text-slate-500">Dog &amp; Cat · Pain &amp; Anxiety</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                    Save up to 75%
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { name: 'Walmart Pharmacy', price: '$12.48', best: true },
                    { name: 'Costco', price: '$14.10', best: false },
                    { name: 'CVS', price: '$18.85', best: false },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 ${
                        row.best ? 'bg-emerald-50 ring-1 ring-emerald-200' : 'bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-medium text-slate-700">{row.name}</span>
                      <span className="text-sm font-bold text-slate-900">{row.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">
                  Get free coupon · Scan QR at counter
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="scroll-mt-20 border-y border-orange-100/80 bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                Preview savings
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                See pet med cash prices before you install.
              </h2>
              <p className="mt-4 max-w-md text-slate-600">
                Search any medication from our pet-first list, add your ZIP, and compare Walmart,
                CVS, Walgreens, Costco, and Chewy Pharmacy — then open the same mobile card the
                extension generates.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Search className="mt-0.5 h-4 w-4 text-orange-600" />
                  Quick chips for Gabapentin, Apoquel, Trazodone, and Simparica Trio
                </li>
                <li className="flex items-start gap-2">
                  <QrCode className="mt-0.5 h-4 w-4 text-orange-600" />
                  Launches a live <code className="rounded bg-slate-100 px-1">/card</code> preview
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="mt-0.5 h-4 w-4 text-orange-600" />
                  Runs in your browser — nothing saved to our servers
                </li>
              </ul>
            </div>
            <DemoWidget />
          </div>
        </section>

        <section id="tip" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-orange-50 px-6 py-10 sm:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
                    <Store className="h-4 w-4" />
                    Vet tip
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900">
                    Human generics for pets can be 80% cheaper at retail pharmacies.
                  </h2>
                  <p className="mt-4 text-slate-600">
                    Many vets prescribe the same medications people use — Gabapentin, Trazodone,
                    Amoxicillin, Omeprazole, and more. Ask your vet to call the Rx into Walmart, CVS,
                    or Walgreens, then use Nectarine&apos;s cash discount card at the counter.
                  </p>
                </div>
                <ul className="grid w-full max-w-sm gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {['Gabapentin', 'Trazodone', 'Amoxicillin', 'Omeprazole'].map((med) => (
                    <li
                      key={med}
                      className="rounded-xl border border-white bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                      {med}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-20 border-y border-orange-100/80 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                How it works
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Three steps. Zero friction.
              </h2>
              <p className="mt-3 text-slate-600">
                Honey-style savings — built for pet prescriptions and household meds.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '1',
                  icon: Puzzle,
                  title: 'Add to Chrome in 2 clicks',
                  body: 'No account, email, or password. Install and you’re ready — privacy stays on your device.',
                },
                {
                  step: '2',
                  icon: Search,
                  title: 'Search or browse pet pharmacies',
                  body: 'Look up meds on Google or visit Chewy, Walmart, CVS, and more. Nectarine appears automatically.',
                },
                {
                  step: '3',
                  icon: QrCode,
                  title: 'Scan the QR at the counter',
                  body: 'Open your free coupon card on your phone and show BIN / PCN / Member ID to save up to 75%.',
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="relative rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-900/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-orange-100">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="privacy-trust" className="bg-slate-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                  Trust &amp; privacy
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                  100% free. 100% stateless. Built for pet parents.
                </h2>
                <p className="mt-4 text-slate-300">
                  Nectarine is a price-comparison tool — not a pharmacy, vet clinic, or insurer. We
                  never require login and we never store personal or pet health records.
                </p>
                <Link
                  href="/privacy"
                  className="mt-6 inline-flex text-sm font-semibold text-orange-300 hover:text-orange-200"
                >
                  Read the full privacy policy →
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Lock,
                    title: 'No PHI in the cloud',
                    body: 'Browsing stays on your device. We don’t keep medical histories for you or your pets.',
                  },
                  {
                    icon: Zap,
                    title: 'No signup wall',
                    body: 'Install and use in two clicks — no email, password, or profile.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'ZIP only, locally',
                    body: 'The only preference saved is your 5-digit ZIP in chrome.storage.local as nectarine_zip.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Not a pharmacy',
                    body: 'We help you compare cash discount prices and show a coupon card to your pharmacist.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <item.icon className="h-5 w-5 text-orange-300" />
                    <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="install" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-12 shadow-xl shadow-orange-900/5 sm:px-12">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-300/30 blur-2xl"
              />
              <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to stop overpaying for pet meds?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-slate-600">
                Add Nectarine to Chrome free. When the Chrome Web Store listing goes live, this
                button will take you straight there.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://chromewebstore.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-600 hover:to-orange-500"
                >
                  <Download className="h-4 w-4" />
                  Add Nectarine to Chrome — It&apos;s Free
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Preview Savings Calculator
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
