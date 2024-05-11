import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
import HomeContainer from '@/components/ui/home-container/home-container'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'
import { routes } from '@/constants/routes'

export default function Home() {
  return (
    <div className='flex h-[1000px] flex-col items-center justify-start bg-black'>
      <BackgroundBeams />
      <FloatingNav navItems={routes} className='dark:' />
      <div className='container z-10 mt-32'>
        <HomeContainer id='home' />
      </div>
      <ScrollBackTop />
    </div>
  )
}
