'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export default function useScrollBackTop() {
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

  return {
    visible
  }
}
