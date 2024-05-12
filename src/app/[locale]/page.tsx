'use client'

import HomeSection from '@/components/sections/home-section/home-section'
import ProjectsSection from '@/components/sections/projects-section/projects-section'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'

export default function Home() {
  return (
    <>
      <div className='container z-10 mt-32 flex h-screen flex-col items-center justify-center gap-32'>
        <HomeSection />
        <ProjectsSection />
        <ScrollBackTop />
      </div>
    </>
  )
}
