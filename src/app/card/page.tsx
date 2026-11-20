import { Suspense } from 'react'
import type { Metadata } from 'next'
import { CardClient } from './CardClient'

export const metadata: Metadata = {
  title: 'Pet & Family Rx Savings Card',
  description:
    'Show this Nectarine cash discount card to your pharmacist — BIN, PCN, Group, and Member ID.',
  robots: {
    index: false,
    follow: false,
  },
}

function CardFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] text-sm text-slate-500">
      Loading your discount card…
    </div>
  )
}

export default function CardPage() {
  return (
    <Suspense fallback={<CardFallback />}>
      <CardClient />
    </Suspense>
  )
}
