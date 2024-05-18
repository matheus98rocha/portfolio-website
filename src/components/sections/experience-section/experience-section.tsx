'use client'
import React from 'react'
import ExperienceContent, {
  ExperienceContentProps
} from './components/experience-progress'
import { AnimatePresence } from 'framer-motion'
import ExperienceImage from './components/experience-image'

const experiencies: ExperienceContentProps[] = [
  {
    name: 'Bacharel em Sistemas de Informação',
    date: '2019 - 2022',
    experiences: ['Faculdade Pitágoras', 'Belo Horizonte, MG'],
    typeIcon: 'Course'
  },
  {
    name: 'Estagiário de Desenvolvimento | QDOIS - Data Inteligence',
    date: '2020 - 2021',
    experiences: ['Desenvolvimento de aplicações Power Apps com SharePoint.'],
    typeIcon: 'Work'
  },
  {
    name: 'Desenvolvedor Junior | QDOIS - Data Inteligence',
    date: '2020',
    experiences: [
      'Desenvolvimento de aplicações back-end com NodeJS e NestJS.',
      'Integração com bancos de dados MongoDB e Azure DevOps.',
      'Desenvolvimento de aplicações front-end com ReactJS.'
    ],
    typeIcon: 'Work'
  },
  {
    name: 'Desenvolvedor Pleno | BRQ',
    date: '2022 - Atualmente',
    experiences: [
      'Desenvolvimento e manutenção de aplicações web com ReactJS.',
      'Desenvolvimento e manutenção de api com NestJS.',
      'Desenvolvimento e manutenção de aplicativos moveis com React Native'
    ],
    typeIcon: 'Work'
  }
]

function ExperienceSection() {
  return (
    <AnimatePresence>
      <div
        id='portfolio'
        className='flex max-w-5xl flex-col items-center justify-center gap-6 px-8'
      >
        <h3 className='text-2xl text-slate-200 md:text-3xl'>Experiencias</h3>
        <div className='flex items-center justify-center gap-10'>
          <ExperienceImage />
          <div className='flex flex-col items-start justify-center gap-3'>
            {experiencies.map(experiencie => (
              <ExperienceContent {...experiencie} key={experiencie.name} />
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default ExperienceSection
