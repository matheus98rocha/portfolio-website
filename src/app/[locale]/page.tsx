import HomeContainer from '@/components/ui/home-container/home-container'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards/infinite-moving-cards'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'
import * as Ri from 'react-icons/ri'
import { SiNestjs } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  const items = [
    {
      stackName: 'ReactJs',
      stack: <Ri.RiReactjsFill />
    },
    {
      stackName: 'NodeJs',
      stack: <Ri.RiNodejsFill />
    },
    {
      stackName: 'HTML5',
      stack: <Ri.RiHtml5Fill />
    },
    {
      stackName: 'CSS3',
      stack: <Ri.RiCss3Fill />
    },
    {
      stackName: 'NestJs',
      stack: <SiNestjs />
    },
    {
      stackName: 'NextJs',
      stack: <Ri.RiNextjsFill />
    },
    {
      stackName: 'NextJs',
      stack: <FaPython />
    }
  ]
  return (
    <>
      <div className='container z-10 flex h-screen flex-col items-center justify-evenly'>
        <div id='home'>
          <HomeContainer />
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <h3 className='text-2xl text-slate-200 md:text-3xl'>
            {t('knowledge')}
          </h3>
          <div className='flex flex-col items-center justify-center'>
            <InfiniteMovingCards items={items} direction='left' speed='slow' />
          </div>
        </div>
        <ScrollBackTop />
      </div>
    </>
  )
}
