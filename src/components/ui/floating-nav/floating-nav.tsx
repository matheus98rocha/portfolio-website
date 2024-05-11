'use client'
import React, { useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [isFullWidth, setIsFullWidth] = useState(false)

  // Definir o estado inicial como visível ao carregar a tela
  useEffect(() => {
    setIsFullWidth(true)
  }, [])

  // Adicionar lógica de rolagem
  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.0) {
        setIsFullWidth(false)
      } else {
        if (direction < 0) {
          setIsFullWidth(true)
        } else {
          setIsFullWidth(false)
        }
      }
    }
  })

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -100
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          opacity: 0,
          y: -100
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          `fixed inset-x-0 ${isFullWidth ? 'top-0' : 'top-5'} z-[5000] mx-auto flex ${isFullWidth ? 'w-screen' : 'max-w-fit'} items-center justify-center space-x-4 rounded-full border border-transparent ${isFullWidth ? 'bg-transparent' : 'bg-black'} p-2 pr-2 ${!isFullWidth && 'shadow-sm shadow-red-500'} duration-500 ease-in-out`,
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              'space-x-1duration-500 relative flex items-center rounded ease-in-out'
            )}
          >
            <span className='block sm:hidden'>{navItem.icon}</span>
            <span className='hidden p-2 text-lg text-red-500 hover:text-white hover:shadow-md sm:block'>
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
