import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Nectarine stores only your 5-digit ZIP locally as nectarine_zip, collects no PHI or PII, and never requires an account.',
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Legal</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-3 text-slate-500">Last updated: November 20, 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-7 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Overview</h2>
            <p>
              Nectarine (“we”, “us”, or “our”), operated at{' '}
              <strong>getnectarine.com</strong>, is a browser extension and companion website that
              helps you compare cash-pay prices for pet and household prescriptions and display free
              pharmacy discount card details. We designed Nectarine to be privacy-first and largely{' '}
              <strong>stateless</strong>: we do not create user accounts, and we do not operate a
              remote database of personal or pet health information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Information we store</h2>
            <p>
              The Chrome extension may store <strong>only your 5-digit ZIP code</strong> on your
              device using{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">chrome.storage.local</code>{' '}
              under the key{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">nectarine_zip</code>. That
              ZIP is used solely to estimate nearby cash prices.
            </p>
            <p>
              The companion website at getnectarine.com does <strong>not</strong> require login and
              does not store prescription card details after you leave the page. The mobile discount
              card at <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/card</code> reads
              parameters from the URL in your browser only for that session.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Information we do not collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>No names, emails, phone numbers, or passwords</li>
              <li>No insurance or pet-insurance member IDs stored in an account</li>
              <li>No medical history, diagnoses, or pet medical records (PHI)</li>
              <li>No remote profiles linking you to medications you browse</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">How Nectarine works with pages you visit</h2>
            <p>
              When installed, the extension may inspect publicly visible page text (for example
              search queries or product titles) on supported pharmacy and search sites to detect
              medication names from a local drug list. Detection happens on your device. Nectarine is
              a price-comparison helper — not a pharmacy, veterinarian, insurer, or medical provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Chrome Web Store Limited Use</h2>
            <p>
              Nectarine complies with the Chrome Web Store User Data Policy, including Limited Use
              requirements. We only use data accessed through the extension to provide the
              user-facing price comparison and coupon display features. We do not sell user data, do
              not use it for advertising creditworthiness or lending decisions, and do not transfer
              it to third parties for unrelated purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Analytics &amp; hosting</h2>
            <p>
              The marketing website may receive standard web server logs from our hosting provider
              (for example IP address, user agent, and requested URL) as part of delivering pages
              securely. We do not use those logs to build health profiles. If we add optional
              privacy-friendly analytics in the future, we will update this policy before doing so.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Children</h2>
            <p>
              Nectarine is not directed at children under 13, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Your choices</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Clear or change your saved ZIP anytime in the extension popup</li>
              <li>Remove the extension from Chrome to delete locally stored extension data</li>
              <li>Avoid sharing discount-card URLs if you do not want others to see those details</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p>
              Questions about privacy? Email{' '}
              <a
                className="font-medium text-orange-700 underline"
                href="mailto:privacy@getnectarine.com"
              >
                privacy@getnectarine.com
              </a>
              .
            </p>
          </section>

          <p className="rounded-2xl border border-orange-100 bg-orange-50/70 px-4 py-3 text-sm text-orange-950">
            Bottom line: Nectarine stores only your ZIP on your device as{' '}
            <code className="rounded bg-white px-1">nectarine_zip</code>, collects zero PII/PHI by
            default, never requires login, and exists to help you compare cash prices for pet and
            household medications — nothing more.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex text-sm font-semibold text-orange-700 hover:text-orange-800"
        >
          ← Back to home
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
