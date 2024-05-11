import { useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export const useFloatingNav = () => {
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

      if (scrollYProgress.get() > 0.0) {
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

  return {
    isFullWidth,
  }
}