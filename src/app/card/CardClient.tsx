'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PharmacyCard } from '@/components/PharmacyCard'
import { NectarineMark } from '@/components/NectarineMark'
import type { CardParams } from '@/lib/types'

const KEYS: (keyof CardParams)[] = [
  'drug',
  'dosage',
  'qty',
  'pharmacy',
  'price',
  'retail',
  'bin',
  'pcn',
  'grp',
  'id',
  'zip',
]

export function CardClient() {
  const searchParams = useSearchParams()
  const params: Partial<CardParams> = {}
  for (const key of KEYS) {
    const value = searchParams.get(key)
    if (value) params[key] = value
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#ffedd5_0%,_#fffaf5_45%,_#f8fafc_100%)]">
      <div className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-6 sm:py-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-sm font-medium text-slate-500 transition hover:bg-white hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Nectarine
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700">
            <NectarineMark size={14} />
            Mobile card
          </span>
        </div>

        <PharmacyCard params={params} />

        <p className="px-2 text-center text-xs leading-relaxed text-slate-500">
          This card is generated locally from the link you opened. Nectarine never stores your
          prescription details on a server.
        </p>
      </div>
    </div>
  )
}
