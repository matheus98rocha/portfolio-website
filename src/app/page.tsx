import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
import HomeContainer from '@/components/ui/home-container/home-container'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'

import { IoMdHome } from 'react-icons/io'

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    }
  ]

  return (
    <div className='flex h-[1000px] flex-col items-center justify-start bg-black'>
      <BackgroundBeams />
      <FloatingNav navItems={navItems} className='dark:' />
      <div className='container mt-32 z-10'>
        <HomeContainer />
      </div>
      <ScrollBackTop />
    </div>
  )
}
