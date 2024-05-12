import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoMdHome } from 'react-icons/io'
import { NavLinksProps } from './floating-nave.types'
import { SiI18Next } from 'react-icons/si'

type useFloatingNavProps = {
  t: any
}

export const useFloatingNav = ({ t }: useFloatingNavProps) => {
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

      if (scrollYProgress.get() >= 1) {
        setIsFullWidth(false)
      } else {
        if (direction <= 1) {
          setIsFullWidth(true)
        } else {
          setIsFullWidth(false)
        }
      }
    }
  })

  const routes: NavLinksProps[] = [
    {
      name: t('routes.home'),
      link: '#home',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.projects'),
      link: '#portfolio',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.experience'),
      link: '#experience',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.contact'),
      link: '#contact',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    }
  ]

  return {
    isFullWidth,
    routes
  }
}
