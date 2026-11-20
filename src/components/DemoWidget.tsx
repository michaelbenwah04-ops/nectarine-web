'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Loader2, MapPin, Search } from 'lucide-react'
import { findDrug, searchDrugs } from '@/lib/drugs'
import {
  buildCardUrl,
  buildCouponFields,
  formatMoney,
  lookupPrices,
} from '@/lib/pricing'
import type { Drug, PharmacyOffer } from '@/lib/types'
import { formatSpecies } from '@/lib/types'
import { NectarineMark } from './NectarineMark'

const QUICK_CHIPS = ['Gabapentin', 'Apoquel', 'Trazodone', 'Atorvastatin'] as const

export function DemoWidget() {
  const [query, setQuery] = useState('Gabapentin')
  const [zip, setZip] = useState('10001')
  const [selected, setSelected] = useState<Drug | null>(() => findDrug('Gabapentin') ?? null)
  const [dosage, setDosage] = useState(() => findDrug('Gabapentin')?.defaultDosage ?? '')
  const [quantity, setQuantity] = useState(() => findDrug('Gabapentin')?.defaultQuantity ?? 30)
  const [loading, setLoading] = useState(false)
  const [offers, setOffers] = useState<PharmacyOffer[] | null>(null)

  const results = useMemo(() => searchDrugs(query, 6), [query])

  function pickDrug(drug: Drug) {
    setSelected(drug)
    setQuery(drug.brandNames[0] || drug.name)
    setDosage(drug.defaultDosage)
    setQuantity(drug.defaultQuantity)
    setOffers(null)
  }

  function pickChip(label: string) {
    const drug = findDrug(label)
    if (drug) pickDrug(drug)
    else {
      setQuery(label)
      setSelected(null)
      setOffers(null)
    }
  }

  function runCompare() {
    const drug = selected || results[0]
    if (!drug || zip.length !== 5) return
    setSelected(drug)
    setLoading(true)
    window.setTimeout(() => {
      const next = lookupPrices(drug, dosage || drug.defaultDosage, quantity, zip)
      setOffers(next)
      setLoading(false)
    }, 500)
  }

  const best = offers?.[0]
  const cardHref =
    selected && best
      ? (() => {
          const coupon = buildCouponFields({
            drugName: selected.name,
            pharmacy: best.pharmacy,
            dosage: dosage || selected.defaultDosage,
            quantity,
            zipCode: zip,
          })
          return buildCardUrl({
            drug: selected.name,
            dosage: dosage || selected.defaultDosage,
            qty: quantity,
            pharmacy: best.pharmacy,
            price: best.cashPrice,
            retail: best.retailPrice,
            bin: coupon.bin,
            pcn: coupon.pcn,
            grp: coupon.group,
            id: coupon.memberId,
            zip,
          })
        })()
      : null

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
        <NectarineMark size={18} />
        <p className="text-sm font-semibold text-[#111827]">Live savings preview</p>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-1.5">
          {QUICK_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => pickChip(chip)}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-[#111827] transition hover:border-[#EA580C]/40 hover:bg-[#FFF7ED]"
            >
              {chip}
            </button>
          ))}
        </div>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <Search className="h-3.5 w-3.5" />
            Medication
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelected(null)
              setOffers(null)
            }}
            placeholder="Apoquel, Gabapentin, Trazodone…"
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#111827] outline-none transition focus:border-[#EA580C] focus:ring-4 focus:ring-orange-100"
          />
        </label>

        {!selected && query.trim() && results.length > 0 ? (
          <ul className="overflow-hidden rounded-xl border border-slate-100">
            {results.map((drug) => (
              <li key={drug.name}>
                <button
                  type="button"
                  onClick={() => pickDrug(drug)}
                  className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm transition hover:bg-[#FAF5EE]"
                >
                  <span>
                    <span className="font-semibold text-[#111827]">{drug.name}</span>
                    <span className="ml-2 text-xs text-slate-400">
                      {drug.brandNames[0]} · {formatSpecies(drug.species)}
                    </span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#EA580C]">Select</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {!selected && query.trim() && results.length === 0 ? (
          <p className="rounded-xl bg-slate-50 px-3 py-3 text-center text-xs text-slate-500">
            No match in our pet &amp; family list — try Gabapentin, Apoquel, or Amoxicillin.
          </p>
        ) : null}

        {selected ? (
          <div className="grid grid-cols-3 gap-2">
            <label className="col-span-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Dosage
              <select
                value={dosage}
                onChange={(e) => {
                  setDosage(e.target.value)
                  setOffers(null)
                }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium outline-none focus:border-[#EA580C]"
              >
                {selected.dosageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label className="col-span-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Qty
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(Number(e.target.value))
                  setOffers(null)
                }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium outline-none focus:border-[#EA580C]"
              >
                {selected.quantityOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label className="col-span-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              ZIP
              <span className="relative mt-1 flex items-center">
                <MapPin className="pointer-events-none absolute left-2 h-3 w-3 text-slate-400" />
                <input
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value.replace(/\D/g, '').slice(0, 5))
                    setOffers(null)
                  }}
                  inputMode="numeric"
                  maxLength={5}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-6 pr-2 text-xs font-medium outline-none focus:border-[#EA580C]"
                />
              </span>
            </label>
          </div>
        ) : null}

        {selected ? (
          <p className="text-[11px] font-medium text-slate-500">
            {formatSpecies(selected.species)} · {selected.commonUse}
          </p>
        ) : null}

        <button
          type="button"
          onClick={runCompare}
          disabled={loading || zip.length !== 5 || (!selected && results.length === 0)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#EA580C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c2410c] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Comparing pharmacies…
            </>
          ) : (
            'Check cash prices'
          )}
        </button>

        {offers && best ? (
          <div className="space-y-3 rounded-2xl border border-slate-100 bg-[#FAF5EE]/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-500">{best.pharmacy}</p>
                <p className="mt-1 text-sm text-[#111827]">
                  {selected?.name} · {dosage}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 line-through">{formatMoney(best.retailPrice)}</p>
                <p className="text-xl font-bold text-[#10B981]">
                  You saved {formatMoney(best.savings)}
                </p>
                <p className="text-sm font-semibold text-[#111827]">
                  Cash {formatMoney(best.cashPrice)}
                </p>
              </div>
            </div>
            {cardHref ? (
              <Link
                href={cardHref}
                className="flex w-full items-center justify-center rounded-full bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                Preview Mobile Card
              </Link>
            ) : null}
            <ul className="divide-y divide-slate-100 rounded-xl bg-white">
              {offers.map((offer) => (
                <li key={offer.id} className="flex items-center justify-between px-3 py-2 text-sm">
                  <span className="font-medium text-slate-700">{offer.pharmacy}</span>
                  <span className="font-semibold text-[#111827]">{formatMoney(offer.cashPrice)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
