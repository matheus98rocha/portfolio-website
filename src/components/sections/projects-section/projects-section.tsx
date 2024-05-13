'use client'
import React from 'react'
import { CardsGrid } from '../../ui/card-hover-effect/card-hover-effect'
import { useTranslations } from 'next-intl'

function ProjectsSection() {
  const t = useTranslations('Index')
  const projects = [
    {
      title: 'League of Quiz',
      description: t('projects.firstProject'),
      link: 'https://league-of-quiz.vercel.app/',
      languages: ['NextJS']
    },
    {
      title: 'Threads',
      description: t('projects.secondProject'),
      link: 'https://github.com/matheus98rocha/threads',
      languages: ['NextJS']
    },
    {
      title: '100erross',
      description: t('projects.thirdProject'),
      link: 'https://100erross.netlify.app/',
      languages: ['ReactJS']
    },
    {
      title: 'NLW - React Native',
      description: t('projects.fourProject'),
      link: 'https://github.com/matheus98rocha/nlw-expert-rn',
      languages: ['React Native']
    }
  ]
  return (
    <div
      id='portfolio'
      className='flex max-w-5xl flex-col items-center justify-center gap-6 px-8'
    >
      <h3 className='text-2xl text-slate-200 md:text-3xl'>Meus Projetos</h3>
      <CardsGrid items={projects} />
    </div>
  )
}

export default ProjectsSection
