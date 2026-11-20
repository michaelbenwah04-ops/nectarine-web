import type { Drug, PharmacyOffer } from './types'

/** Matches the Nectarine Chrome extension pharmacy set. */
const PHARMACIES = [
  { id: 'walmart', pharmacy: 'Walmart Pharmacy', discount: 0.68, network: 'Nectarine Cash' },
  { id: 'cvs', pharmacy: 'CVS', discount: 0.52, network: 'Nectarine Cash' },
  { id: 'walgreens', pharmacy: 'Walgreens', discount: 0.48, network: 'Nectarine Cash' },
  { id: 'costco', pharmacy: 'Costco', discount: 0.64, network: 'Nectarine Cash' },
  { id: 'chewy', pharmacy: 'Chewy Pharmacy', discount: 0.38, network: 'Chewy' },
] as const

function hashSeed(value: string): number {
  let h = 2166136261
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function seededUnit(seed: number, salt: number): number {
  const x = Math.sin(seed * 0.0001 + salt * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function roundMoney(n: number): number {
  return Math.round(n * 100) / 100
}

export function lookupPrices(
  drug: Drug,
  dosage: string,
  quantity: number,
  zipCode: string,
): PharmacyOffer[] {
  const seed = hashSeed(`${drug.name}|${dosage}|${quantity}|${zipCode}`)
  const qtyFactor = Math.max(0.35, Math.min(1.4, quantity / 30))
  const zipJitter = 0.92 + seededUnit(seed, 1) * 0.16
  const retail = roundMoney(drug.avgRetailPrice * qtyFactor * zipJitter)

  const offers: PharmacyOffer[] = PHARMACIES.map((p, index) => {
    const noise = 0.88 + seededUnit(seed, index + 2) * 0.22
    const cash = roundMoney(Math.max(3.99, retail * (1 - p.discount) * noise))
    return {
      id: p.id,
      pharmacy: p.pharmacy,
      cashPrice: cash,
      retailPrice: retail,
      savings: roundMoney(retail - cash),
      network: p.network,
    }
  })

  return offers.sort((a, b) => a.cashPrice - b.cashPrice)
}

export function buildCouponFields(params: {
  drugName: string
  pharmacy: string
  dosage: string
  quantity: number
  zipCode: string
}) {
  const seed = hashSeed(
    `${params.drugName}|${params.pharmacy}|${params.dosage}|${params.quantity}|${params.zipCode}`,
  )
  return {
    bin: '610020',
    pcn: 'PDMI',
    group: `NT${String(seed % 100000).padStart(5, '0')}`,
    memberId: String(100000000 + (seed % 899999999)),
  }
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function buildCardUrl(params: {
  drug: string
  dosage: string
  qty: number
  pharmacy: string
  price: number
  retail: number
  bin: string
  pcn: string
  grp: string
  id: string
  zip: string
}): string {
  const q = new URLSearchParams({
    drug: params.drug,
    dosage: params.dosage,
    qty: String(params.qty),
    pharmacy: params.pharmacy,
    price: params.price.toFixed(2),
    retail: params.retail.toFixed(2),
    bin: params.bin,
    pcn: params.pcn,
    grp: params.grp,
    id: params.id,
    zip: params.zip,
  })
  return `/card?${q.toString()}`
}
