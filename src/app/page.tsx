import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
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
    <div className='h-[1000px] bg-black'>
      <BackgroundBeams />
      <FloatingNav navItems={navItems} className='dark:' />
      <ScrollBackTop />
    </div>
  )
}
