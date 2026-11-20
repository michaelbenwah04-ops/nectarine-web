'use client'

import { useMemo, useState } from 'react'
import { Check, Copy, Camera, ShieldCheck } from 'lucide-react'
import { Code128Barcode } from './Code128Barcode'
import { formatMoney } from '@/lib/pricing'
import type { CardParams } from '@/lib/types'

const DEFAULTS: CardParams = {
  drug: 'Gabapentin',
  dosage: '100 mg',
  qty: '30',
  pharmacy: 'Walmart Pharmacy',
  price: '12.48',
  retail: '36.00',
  bin: '610020',
  pcn: 'PDMI',
  grp: 'NT01234',
  id: '482910375',
  zip: '10001',
}

function parseNumber(value: string, fallback: number): number {
  const n = Number.parseFloat(value)
  return Number.isFinite(n) ? n : fallback
}

interface PharmacyCardProps {
  params: Partial<CardParams>
}

export function PharmacyCard({ params }: PharmacyCardProps) {
  const card = useMemo(
    () => ({
      ...DEFAULTS,
      ...Object.fromEntries(
        Object.entries(params).filter(([, v]) => typeof v === 'string' && v.length > 0),
      ),
    }),
    [params],
  ) as CardParams

  const price = parseNumber(card.price, 12.48)
  const retail = parseNumber(card.retail, price * 3.5)
  const savings = Math.max(0, retail - price)
  const [copied, setCopied] = useState<string | null>(null)

  async function copyField(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      window.setTimeout(() => setCopied(null), 1400)
    } catch {
      // ignore
    }
  }

  const fields = [
    { key: 'bin', label: 'BIN', value: card.bin },
    { key: 'pcn', label: 'PCN', value: card.pcn },
    { key: 'grp', label: 'GROUP', value: card.grp },
    { key: 'id', label: 'MEMBER ID', value: card.id },
  ]

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl shadow-orange-900/15">
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-orange-50">
          Nectarine Cash Discount Card · Show to Pharmacist
        </p>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Pet &amp; family Rx
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{card.drug}</h1>
            <p className="mt-1 text-sm text-slate-500">
              {card.dosage} · Qty {card.qty}
              {card.zip ? ` · ZIP ${card.zip}` : ''}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-700">{card.pharmacy}</p>
          </div>
          <div className="rounded-2xl bg-orange-50 px-3 py-2 text-right">
            <p className="text-[10px] font-semibold uppercase text-orange-700">Cash price</p>
            <p className="text-2xl font-bold text-slate-900">{formatMoney(price)}</p>
            {savings > 0 ? (
              <span className="mt-1 inline-flex rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                Save {formatMoney(savings)}
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {fields.map((field) => (
            <button
              key={field.key}
              type="button"
              onClick={() => void copyField(field.key, field.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-left transition active:scale-[0.98] hover:border-orange-300 hover:bg-orange-50"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {field.label}
                </span>
                {copied === field.key ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>
              <p className="mt-1.5 font-mono text-lg font-bold tracking-wide text-slate-900">
                {field.value}
              </p>
              <p className="text-[10px] font-medium text-orange-600">
                {copied === field.key ? 'Copied!' : 'Tap to copy'}
              </p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Member barcode
          </p>
          <div className="flex justify-center rounded-xl bg-white px-2 py-2">
            <Code128Barcode value={card.id} height={68} className="max-w-full" />
          </div>
          <p className="mt-2 text-center font-mono text-xs tracking-widest text-slate-500">
            {card.id}
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
            Pharmacist instructions
          </p>
          <p className="mt-1 text-sm leading-snug text-amber-900/90">
            Valid for pet &amp; human prescriptions filled at retail pharmacies. Process as primary
            cash discount plan — do not combine with insurance.
          </p>
        </div>

        <div className="flex items-start gap-2.5 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <Camera className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          <p>
            <span className="font-semibold text-slate-800">Save to Phone / Screenshot:</span> capture
            this screen before you reach the counter so it stays bright and readable.
          </p>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          100% free &amp; stateless · Show BIN/PCN to your pharmacist
        </div>
      </div>
    </div>
  )
}
