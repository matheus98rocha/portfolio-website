'use client'
import React, { useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'

function ScrollBackTop() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  // Adicionar lógica de rolagem
  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (direction > 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
          onClick={backToTop}
          className='fixed bottom-14  right-4 z-20 rounded-lg bg-red-500 px-4 py-2 text-white shadow-md md:bottom-4'
        >
          <FaArrowUpLong color='white' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollBackTop
