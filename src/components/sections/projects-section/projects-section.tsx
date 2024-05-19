'use client'
import React from 'react'
import { CardsGrid } from '../../ui/card-hover-effect/card-hover-effect'
import { useTranslations } from 'next-intl'
import OnScrollAnimate from '@/layout/on-scroll-animate/on-scroll-animate'
import SectionWrapper from '@/layout/section-wrapper/section-wrapper'

function ProjectsSection() {
  const t = useTranslations('Index')
  const projects = [
    {
      title: 'League of Quiz',
      description: t('projects.aluraProject'),
      link: 'https://league-of-quiz.vercel.app/',
      languages: ['NextJS']
    },
    {
      title: 'Threads',
      description: t('projects.threadsProject'),
      link: 'https://github.com/matheus98rocha/threads',
      languages: ['NextJS']
    },
    {
      title: '100erross',
      description: t('projects.photoProject'),
      link: 'https://100erross.netlify.app/',
      languages: ['ReactJS']
    },
    {
      title: 'NLW - React Native',
      description: t('projects.rnRocketProject'),
      link: 'https://github.com/matheus98rocha/nlw-expert-rn',
      languages: ['React Native']
    }
  ]
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
