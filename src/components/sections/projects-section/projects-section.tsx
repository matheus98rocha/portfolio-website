'use client'
import React from 'react'
import { CardsGrid } from '../../ui/card-hover-effect/card-hover-effect'
import { useTranslations } from 'next-intl'
import OnScrollAnimate from '@/layout/on-scroll-animate/on-scroll-animate'
import SectionWrapper from '@/layout/section-wrapper/section-wrapper'
import useProjectsSection from './useProjectsSection'

function ProjectsSection() {
  const t = useTranslations('Index')
  const { projects } = useProjectsSection(t)
  return (
    <OnScrollAnimate>
      <SectionWrapper
        id='portfolio'
        titleSection={t('myProjects')}
        subTitleSection={t('myProjectsSubtitle')}
      >
        <CardsGrid items={projects} />
      </SectionWrapper>
    </OnScrollAnimate>
  )
}

export default ProjectsSection
