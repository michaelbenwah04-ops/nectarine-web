'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NectarineMark } from './NectarineMark'

export function SiteHeader() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > Math.min(window.innerHeight * 0.72, 560))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <NectarineMark size={22} />
          <span className="text-[17px] font-bold tracking-tight text-[#111827]">Nectarine</span>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-4">
          <a
            href="#demo"
            className="text-sm font-medium text-[#111827]/80 transition hover:text-[#111827]"
          >
            Try Calculator
          </a>
          {pastHero ? (
            <a
              href="#install"
              className="rounded-full bg-[#EA580C] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c2410c]"
            >
              Add to Chrome
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
