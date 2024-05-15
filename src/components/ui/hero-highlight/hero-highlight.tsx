'use client'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import React from 'react'

export const Highlight = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%'
      }}
      animate={{
        backgroundSize: '100% 100%'
      }}
      transition={{
        duration: 1.5,
        ease: 'linear',
        delay: 0.5
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline'
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-red-500 to-red-600 ml-1`,
        className
      )}
    >
      {children}
    </motion.span>
  )
}
