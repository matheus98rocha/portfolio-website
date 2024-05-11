import HomeContainer from '@/components/ui/home-container/home-container'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'

export default function Home() {
  return (
    <>
      <div className='container z-10 mt-32 h-screen'>
        <div id='home'>
          <HomeContainer />
        </div>
        <div className='h-[10000px]'></div>
        <ScrollBackTop />
      </div>
    </>
  )
}
