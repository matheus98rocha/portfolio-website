'use client'
import React from 'react'
import ExperienceContent, {
  ExperienceContentProps
} from './components/experience-progress'
import { AnimatePresence } from 'framer-motion'
import ExperienceImage from './components/experience-image'
import OnScrollAnimate from '@/layout/on-scroll-animate/on-scroll-animate'
import SectionWrapper from '@/layout/section-wrapper/section-wrapper'
import { useTranslations } from 'next-intl'

function ExperienceSection() {
  const t = useTranslations('Index')

  const experiencies: ExperienceContentProps[] = [
    {
      name: t('experiencesJourneyBRQ.name'),
      date: t('experiencesJourneyBRQ.date'),
      experiences: [
        t('experiencesJourneyBRQ.firstExperiences'),
        t('experiencesJourneyBRQ.secondExperiences'),
        t('experiencesJourneyBRQ.thirdExperiences')
      ],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyQDOISJR.name'),
      date: t('experiencesJourneyQDOISJR.date'),
      experiences: [
        t('experiencesJourneyQDOISJR.firstExperiences'),
        t('experiencesJourneyQDOISJR.secondExperiences'),
        t('experiencesJourneyQDOISJR.thirdExperiences')
      ],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyQDOIS.name'),
      date: t('experiencesJourneyQDOIS.date'),
      experiences: [t('experiencesJourneyQDOIS.firstExperiences')],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyCollege.name'),
      date: t('experiencesJourneyCollege.date'),
      experiences: [t('experiencesJourneyCollege.firstExperiences')],
      typeIcon: 'Course'
    }
  ]

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
