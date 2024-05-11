import { NavLinksProps } from '@/components/ui/floating-nav/floating-nave.types'
import React from 'react'
import { IoMdHome } from 'react-icons/io'

export const routes: NavLinksProps[] = [
  {
    name: 'Home',
    link: '#home',
    icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
  },
  {
    name: 'Projetos',
    link: '#portfolio',
    icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
  },
  {
    name: 'Experiências',
    link: '#experience',
    icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
  },
  {
    name: 'Contato',
    link: '#contact',
    icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
  }
]
