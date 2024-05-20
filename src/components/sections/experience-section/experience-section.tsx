'use client'
import React from 'react'
import ExperienceContent from './components/experience-progress'
import { AnimatePresence } from 'framer-motion'
import ExperienceImage from './components/experience-image'
import OnScrollAnimate from '@/layout/on-scroll-animate/on-scroll-animate'
import SectionWrapper from '@/layout/section-wrapper/section-wrapper'
import { useTranslations } from 'next-intl'
import useExperienceSection from './useExperienceSection'

function ExperienceSection() {
  const t = useTranslations('Index')
  const { experiencies } = useExperienceSection(t)

  return (
    <AnimatePresence>
      <SectionWrapper
        id='experiences'
        titleSection={t('experiences')}
        subTitleSection={t('experiencesSubtitle')}
      >
        <div className='flex items-center justify-center gap-10'>
          <ExperienceImage />
          <OnScrollAnimate>
            <div className='flex flex-col items-start justify-center gap-3'>
              {experiencies.map(experiencie => (
                <ExperienceContent {...experiencie} key={experiencie.name} />
              ))}
            </div>
          </OnScrollAnimate>
        </div>
      </SectionWrapper>
    </AnimatePresence>
  )
}

export default ExperienceSection
