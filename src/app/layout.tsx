import type { Metadata } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import './globals.css'

const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const display = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Nectarine — Pet Prescription Savings',
    template: '%s | Nectarine',
  },
  description:
    'Nectarine finds the lowest local cash-discount prices on dog, cat, and household medications while you browse—no sign-up, no pet insurance needed, and 100% free.',
  metadataBase: new URL('https://getnectarine.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nectarine — Pet Prescription Savings',
    description:
      'Honey-style cash discounts for pet prescriptions. No signup. No PHI stored.',
    type: 'website',
    url: 'https://getnectarine.com',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-slate-900">{children}</body>
    </html>
  )
}
