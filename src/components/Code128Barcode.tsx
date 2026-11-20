'use client'

import { barcodeSvg } from '@/lib/barcode'

interface Code128BarcodeProps {
  value: string
  height?: number
  className?: string
}

export function Code128Barcode({ value, height = 64, className = '' }: Code128BarcodeProps) {
  const svg = barcodeSvg(value, height)
  return (
    <div
      className={`overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
