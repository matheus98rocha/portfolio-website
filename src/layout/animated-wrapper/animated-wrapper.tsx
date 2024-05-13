import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type AnimatedWrapperProps = {
  children: React.ReactNode
}

function AnimatedWrapper({ children }: AnimatedWrapperProps) {
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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedWrapper
