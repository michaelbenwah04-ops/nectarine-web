import Link from 'next/link'
import { DemoWidget } from '@/components/DemoWidget'
import { NectarineMark } from '@/components/NectarineMark'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const PHARMACIES = [
  'Walmart',
  'CVS',
  'Walgreens',
  'Costco',
  'Target',
  'Chewy',
  'Kroger',
  'Rite Aid',
  'Publix',
  'Cost Plus Drugs',
] as const

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <SiteHeader />

      <main className="flex-1">
        {/* Section 1 — Split-screen editorial hero */}
        <section className="grid min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
          <div className="relative flex items-center justify-center bg-[#FAF5EE] px-6 py-16 sm:px-10 lg:py-20">
            <div className="animate-nectarine-float relative w-full max-w-md">
              <div className="absolute -right-3 -top-3 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#111827] shadow-lg shadow-black/5">
                Nectarine found a better cash price
              </div>
              <div className="overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-2xl shadow-black/10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Pet &amp; family Rx
                    </p>
                    <h2 className="mt-1 text-xl font-bold tracking-tight">Gabapentin 300mg</h2>
                    <p className="mt-1 text-sm text-slate-500">Qty 30 · ZIP 10001</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7ED] ring-1 ring-orange-100">
                    <NectarineMark size={26} />
                  </span>
                </div>
                <div className="mt-5 rounded-2xl bg-[#FAF5EE] px-4 py-3">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Walmart Pharmacy</p>
                      <p className="mt-1 text-sm text-slate-400 line-through">$58.99</p>
                      <p className="text-2xl font-bold text-[#10B981]">$12.49</p>
                    </div>
                    <span className="rounded-full bg-[#10B981] px-3 py-1 text-xs font-bold text-white">
                      You saved $46.50
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-[#EA580C] px-4 py-3 text-sm font-semibold text-white"
                >
                  Get Free Coupon
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center bg-white px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="animate-nectarine-fade-up font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Put Nectarine on it.
              </h1>
              <p className="animate-nectarine-fade-up-delay mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Buying prescriptions for your pet or family? Nectarine jumps in while you browse,
                automatically finding the lowest local cash-discount prices at 60,000+ pharmacies—no
                sign-up, no insurance card, and 100% free.
              </p>
              <div className="animate-nectarine-fade-up-delay-2 mt-8">
                <a
                  href="#install"
                  className="inline-flex rounded-full bg-[#EA580C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c2410c]"
                >
                  Add to Chrome — It&apos;s Free
                </a>
                <p className="mt-3 text-xs text-slate-500">
                  2-click install · Zero sign-up required · 100% free
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — How it works */}
        <section id="how" className="scroll-mt-20 border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-black/5">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[11px] text-slate-500">
                    google.com/search?q=gabapentin+for+dogs
                  </div>
                  <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-md bg-[#EA580C]/10">
                    <NectarineMark size={16} />
                  </span>
                </div>
                <div className="relative space-y-3 bg-white p-5">
                  <p className="text-xs font-semibold text-slate-400">Search results</p>
                  <div className="h-3 w-[75%] rounded bg-slate-100" />
                  <div className="h-3 w-1/2 rounded bg-slate-100" />
                  <div className="mt-4 space-y-2">
                    {['Chewy Pharmacy', 'CVS.com', 'Walmart.com'].map((site) => (
                      <div
                        key={site}
                        className="rounded-xl border border-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700"
                      >
                        {site}
                      </div>
                    ))}
                  </div>
                  <div className="absolute right-4 top-10 w-[220px] overflow-hidden rounded-2xl border border-orange-100 bg-white p-3 shadow-2xl shadow-orange-900/15">
                    <div className="flex items-center gap-2">
                      <NectarineMark size={18} />
                      <p className="text-xs font-bold">Gabapentin</p>
                    </div>
                    <p className="mt-2 text-lg font-bold text-[#10B981]">You saved $54.20</p>
                    <p className="text-[11px] text-slate-500">Walmart Pharmacy · cash price</p>
                    <button
                      type="button"
                      className="mt-3 w-full rounded-full bg-[#EA580C] py-2 text-[11px] font-semibold text-white"
                    >
                      Get Free Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                How it works
              </h2>
              <ol className="relative mt-8 space-y-8 border-l border-slate-200 pl-6">
                {[
                  {
                    title: 'Add in Seconds',
                    body: 'It just takes two clicks to add Nectarine to Chrome—no account, email, or password required.',
                    active: true,
                  },
                  {
                    title: 'Browse Like Normal',
                    body: 'We automatically check local cash-discount prices when you search medications or shop Chewy, CVS, and Walmart.',
                    active: false,
                  },
                  {
                    title: 'Show Your QR Card',
                    body: 'With a single click, pull up your free pharmacy discount code on your phone and save up to 80% at pickup.',
                    active: false,
                  },
                ].map((step, index) => (
                  <li key={step.title} className="relative">
                    <span
                      className={`absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-white ${
                        step.active ? 'bg-[#EA580C]' : 'bg-slate-300'
                      }`}
                    />
                    {index === 0 ? (
                      <span className="absolute -left-[25px] top-4 h-14 w-0.5 bg-[#EA580C]" />
                    ) : null}
                    <p className="text-lg font-bold">
                      {index + 1}. {step.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 — Pharmacy trust bar */}
        <section className="bg-[#F2F8F7] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              60,000+ pharmacies
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Whether you&apos;re filling your dog&apos;s anxiety meds at Walmart or picking up a
              prescription at CVS, Nectarine finds the lowest cash price nearby.
            </p>
            <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-5 gap-4 sm:gap-5">
              {PHARMACIES.map((name) => (
                <li
                  key={name}
                  className="flex aspect-square flex-col items-center justify-center rounded-full bg-white px-2 text-center shadow-md shadow-black/5"
                >
                  <span className="text-[10px] font-bold leading-tight text-[#111827] sm:text-xs">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4 — Extension + live demo */}
        <section id="demo" className="scroll-mt-20 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div className="lg:pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0d9488]">
                The Extension
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                Automated rx savings
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                Still searching GoodRx and SingleCare tabs one by one? With a single click, Nectarine
                checks discount networks for your exact ZIP code and generates a counter-ready QR
                card.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• Works on Google, Chewy, CVS, Walmart, Walgreens, Costco &amp; more</li>
                <li>• Human generics for pets + dedicated pet brands</li>
                <li>• Preview any card instantly on joinnectarine.com/card</li>
              </ul>
            </div>
            <DemoWidget />
          </div>
        </section>

        {/* Section 5 — Closing CTA */}
        <section id="install" className="scroll-mt-20 border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Too good to pass up, right? Start saving now.
            </h2>
            <a
              href="https://chromewebstore.google.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#EA580C] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c2410c]"
            >
              Add to Chrome — It&apos;s Free
            </a>
            <p className="mt-4 text-sm text-slate-500">
              Or{' '}
              <Link href="/#demo" className="font-semibold text-[#EA580C] hover:underline">
                try the savings calculator
              </Link>{' '}
              first.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
