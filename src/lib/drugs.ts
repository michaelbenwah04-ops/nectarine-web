import drugsData from '@/data/drugs.json'
import type { Drug } from './types'

export const drugs = drugsData as Drug[]

export function searchDrugs(query: string, limit = 8): Drug[] {
  const lower = query.trim().toLowerCase()
  if (!lower) return drugs.slice(0, limit)

  return drugs
    .map((drug) => {
      const hay = `${drug.name} ${drug.brandNames.join(' ')} ${drug.commonUse}`.toLowerCase()
      let score = 0
      if (drug.name.toLowerCase() === lower) score = 100
      else if (drug.brandNames.some((b) => b.toLowerCase() === lower)) score = 95
      else if (drug.name.toLowerCase().startsWith(lower)) score = 80
      else if (drug.commonUse.toLowerCase().includes(lower)) score = 70
      else if (hay.includes(lower)) score = 50
      return { drug, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.drug)
}

export function findDrug(name: string): Drug | undefined {
  const lower = name.trim().toLowerCase()
  return drugs.find(
    (d) =>
      d.name.toLowerCase() === lower ||
      d.brandNames.some((b) => b.toLowerCase() === lower),
  )
}
