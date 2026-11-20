'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Loader2, MapPin, Search, Sparkles } from 'lucide-react'
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

const QUICK_CHIPS = ['Gabapentin', 'Apoquel', 'Trazodone', 'Simparica Trio'] as const

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
    <div className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-2xl shadow-orange-900/10">
      <div className="flex items-center gap-2 border-b border-orange-50 bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-3">
        <Sparkles className="h-4 w-4 text-orange-600" />
        <p className="text-sm font-semibold text-orange-800">Pet med savings calculator</p>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-1.5">
          {QUICK_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => pickChip(chip)}
              className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold text-orange-700 transition hover:bg-orange-100"
            >
              {chip}
            </button>
          ))}
        </div>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <Search className="h-3.5 w-3.5" />
            Pet or household medication
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelected(null)
              setOffers(null)
            }}
            placeholder="Gabapentin, Apoquel, Rimadyl…"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
          />
        </label>

        {!selected && query.trim() && results.length > 0 ? (
          <ul className="overflow-hidden rounded-xl border border-slate-100">
            {results.map((drug) => (
              <li key={drug.name}>
                <button
                  type="button"
                  onClick={() => pickDrug(drug)}
                  className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm transition hover:bg-orange-50"
                >
                  <span>
                    <span className="font-semibold text-slate-900">{drug.name}</span>
                    <span className="ml-2 text-xs text-slate-400">
                      {drug.brandNames[0]} · {formatSpecies(drug.species)}
                    </span>
                  </span>
                  <span className="text-[11px] font-semibold text-orange-600">Select</span>
                </button>
              </li>
            ))}
          </ul>
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
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium text-slate-800 outline-none focus:border-orange-400"
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
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium text-slate-800 outline-none focus:border-orange-400"
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
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-6 pr-2 text-xs font-medium text-slate-800 outline-none focus:border-orange-400"
                />
              </span>
            </label>
          </div>
        ) : null}

        {selected ? (
          <p className="rounded-lg bg-orange-50 px-3 py-1.5 text-[11px] font-medium text-orange-800">
            {formatSpecies(selected.species)} · {selected.commonUse}
          </p>
        ) : null}

        <button
          type="button"
          onClick={runCompare}
          disabled={loading || zip.length !== 5 || (!selected && results.length === 0)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-600 hover:to-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Comparing pharmacies…
            </>
          ) : (
            <>
              <NectarineMark size={18} />
              Check cash prices
            </>
          )}
        </button>

        {offers && best ? (
          <div className="space-y-2 rounded-2xl border border-orange-100 bg-orange-50/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Lowest cash price
                </p>
                <p className="text-sm font-bold text-slate-900">{best.pharmacy}</p>
                <p className="text-xs text-slate-500">
                  {selected?.name} · {dosage} · Qty {quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-900">{formatMoney(best.cashPrice)}</p>
                <p className="text-xs text-slate-400 line-through">{formatMoney(best.retailPrice)}</p>
                <p className="mt-0.5 inline-flex rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  Save {formatMoney(best.savings)}
                </p>
              </div>
            </div>
            {cardHref ? (
              <Link
                href={cardHref}
                className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Open mobile discount card
              </Link>
            ) : null}
            <ul className="divide-y divide-orange-100/80 rounded-xl bg-white">
              {offers.map((offer) => (
                <li key={offer.id} className="flex items-center justify-between px-3 py-2 text-sm">
                  <span className="font-medium text-slate-700">{offer.pharmacy}</span>
                  <span className="font-semibold text-slate-900">{formatMoney(offer.cashPrice)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
