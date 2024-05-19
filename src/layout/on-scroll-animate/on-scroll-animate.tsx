'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef } from 'react'

type OnScrollAnimateProps = {
  children: React.ReactNode
}

function OnScrollAnimate({ children }: OnScrollAnimateProps) {
  const scrollRef = useRef(null)
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5 },
          y: 0
        }}
        viewport={{ root: scrollRef,once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default OnScrollAnimate
