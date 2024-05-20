import { PojectType } from './projects-section.types'

export default function useProjectsSection(t: any) {
  const projects: PojectType[] = [
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

  return {
    projects
  }
}
