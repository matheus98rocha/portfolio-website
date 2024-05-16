'use client'
import React from 'react'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FloatingNavProps, NavLinksProps } from './floating-nave.types'
import { useFloatingNav } from './use-floating-nav'
import { useTranslations } from 'next-intl'
import AnimatedWrapper from '@/layout/animated-wrapper/animated-wrapper'

export const FloatingNav = ({ className }: FloatingNavProps) => {
  const t = useTranslations('Index')
  const { isFullWidth, routes } = useFloatingNav({ t })

  return (
    <AnimatedWrapper>
      <div
        className={cn(
          `fixed inset-x-0 ${isFullWidth ? 'top-0' : 'top-5'} z-30 mx-auto flex ${isFullWidth ? 'w-full' : 'max-w-fit'} items-center justify-center space-x-4 rounded-full border border-transparent ${isFullWidth ? 'bg-transparent' : 'bg-black'} p-2 pr-2 ${!isFullWidth && 'shadow-sm shadow-red-500'} duration-500 ease-in-out`,
          className
        )}
      >
        {routes.map((navItem: NavLinksProps, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 rounded duration-500 ease-in-out'
            )}
          >
            <span className='block sm:hidden'>{navItem.icon}</span>
            <p className='link-underline link-underline-black hidden p-2 text-lg text-stone-100 hover:text-red-500 sm:block'>
              {navItem.name}
            </p>
          </Link>
        ))}
      </div>
    </AnimatedWrapper>
  )
}
