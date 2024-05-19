'use client'

import ExperienceSection from '@/components/sections/experience-section/experience-section'
import HomeSection from '@/components/sections/home-section/home-section'
import ProjectsSection from '@/components/sections/projects-section/projects-section'
import SkillsSection from '@/components/sections/skills-section/skills-section'
import Footer from '@/components/ui/footer/footer'
import Header from '@/components/ui/header/header'
import ScrollBackTop from '@/components/ui/scroll-back-top/scroll-back-top'
import AnimatedWrapper from '@/layout/animated-wrapper/animated-wrapper'

export default function Home() {
  return (
    <AnimatedWrapper>
      <div className='flex flex-col items-center justify-around gap-20 scroll-smooth bg-black'>
        <Header />
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
      <ScrollBackTop />
    </AnimatedWrapper>
  )
}
