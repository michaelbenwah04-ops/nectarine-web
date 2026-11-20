export type PetSpecies = 'dog' | 'cat' | 'both'

export interface Drug {
  name: string
  brandNames: string[]
  species: PetSpecies
  commonUse: string
  defaultDosage: string
  dosageOptions: string[]
  defaultQuantity: number
  quantityOptions: number[]
  avgRetailPrice: number
}

export interface PharmacyOffer {
  id: string
  pharmacy: string
  cashPrice: number
  retailPrice: number
  savings: number
  network: string
}

export interface CardParams {
  drug: string
  dosage: string
  qty: string
  pharmacy: string
  price: string
  retail: string
  bin: string
  pcn: string
  grp: string
  id: string
  zip: string
}

export function formatSpecies(species: PetSpecies): string {
  if (species === 'dog') return 'Dog'
  if (species === 'cat') return 'Cat'
  return 'Dog & Cat'
}
