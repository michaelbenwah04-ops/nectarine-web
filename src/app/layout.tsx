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
    default: 'Nectarine — Put Nectarine on it.',
    template: '%s | Nectarine',
  },
  description:
    'Buying prescriptions for your pet or family? Nectarine finds the lowest local cash-discount prices at 60,000+ pharmacies—no sign-up, no insurance card, and 100% free.',
  metadataBase: new URL('https://joinnectarine.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nectarine — Put Nectarine on it.',
    description:
      'Honey-style cash discounts for pet & family prescriptions. No signup. No PHI stored.',
    type: 'website',
    url: 'https://joinnectarine.com',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-[#111827]">{children}</body>
    </html>
  )
}
