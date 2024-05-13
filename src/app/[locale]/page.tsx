'use client'

import HomeSection from '@/components/sections/home-section/home-section'
import ProjectsSection from '@/components/sections/projects-section/projects-section'
import SkillsSection from '@/components/sections/skills-section/skills-section'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'
import AnimatedWrapper from '@/layout/animated-wrapper/animated-wrapper'

export default function Home() {
  return (
    <AnimatedWrapper>
      <div className='flex h-screen flex-col items-center justify-around gap-20 scroll-smooth bg-black py-20'>
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ScrollBackTop />
      </div>
    </AnimatedWrapper>
  )
}
