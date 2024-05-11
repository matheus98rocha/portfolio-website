import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
import HomeContainer from '@/components/ui/home-container/home-container'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'

import { IoMdHome } from 'react-icons/io'

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '#home',
      icon: <IoMdHome className='text-neutral-500 dark:text-white h-4 w-4' />
    },
    {
      name: 'Projetos',
      link: '#portfolio',
      icon: <IoMdHome className='text-neutral-500 dark:text-white h-4 w-4' />
    },
    {
      name: 'Experiências',
      link: '#experience',
      icon: <IoMdHome className='text-neutral-500 dark:text-white h-4 w-4' />
    },
    {
      name: 'Contato',
      link: '#contact',
      icon: <IoMdHome className='text-neutral-500 dark:text-white h-4 w-4' />
    }
  ]

  return (
    <div className='bg-black flex h-[1000px] flex-col items-center justify-start'>
      <BackgroundBeams />
      <FloatingNav navItems={navItems} className='dark:' />
      <div className='container z-10 mt-32'>
        <HomeContainer id='home' />
      </div>
      <ScrollBackTop />
    </div>
  )
}
