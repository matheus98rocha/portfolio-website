'use client'
import React from 'react'
import { CardsGrid } from '../../ui/card-hover-effect/card-hover-effect'
import AnimatedWrapper from '@/layout/animated-wrapper/animated-wrapper'
import { useTranslations } from 'next-intl'

function ProjectsSection() {
  const t = useTranslations('Index')
  const projects = [
    {
      title: 'League of Quiz',
      description: t('projects.firstProject'),
      link: 'https://league-of-quiz.vercel.app/'
    },
    {
      title: 'Threads',
      description: t('projects.secondProject'),
      link: 'https://github.com/matheus98rocha/threads'
    },
    {
      title: '100erross',
      description: t('projects.thirdProject'),
      link: 'https://100erross.netlify.app/'
    }
  ]
  return (
    <AnimatedWrapper>
      <div
        id='portfolio'
        className='flex w-screen max-w-5xl flex-col items-center justify-center px-8'
      >
        <h3 className='text-2xl text-slate-200 md:text-3xl'>Meus Projetos</h3>
        <CardsGrid items={projects} />
      </div>
    </AnimatedWrapper>
  )
}

export default ProjectsSection
