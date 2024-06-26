import { FaPython } from 'react-icons/fa'
import * as Ri from 'react-icons/ri'
import { TbBrandReactNative } from 'react-icons/tb'
import * as Si from 'react-icons/si'
import { SkilsProps } from './skils-section.types'

export default function useSkilsSection(t: any) {
  const skils: SkilsProps[] = [
    {
      stackName: 'ReactJs',
      stack: <Ri.RiReactjsFill />
    },
    {
      stackName: 'NodeJs',
      stack: <Ri.RiNodejsFill />
    },
    {
      stackName: 'HTML5',
      stack: <Ri.RiHtml5Fill />
    },
    {
      stackName: 'CSS3',
      stack: <Ri.RiCss3Fill />
    },
    {
      stackName: 'NestJs',
      stack: <Si.SiNestjs />
    },
    {
      stackName: 'NextJs',
      stack: <Ri.RiNextjsFill />
    },
    {
      stackName: 'Python',
      stack: <FaPython />
    },
    {
      stackName: 'Express',
      stack: <Si.SiExpress />
    },
    {
      stackName: 'Cypress',
      stack: <Si.SiCypress />
    },
    {
      stackName: 'Tailwind CSS',
      stack: <Ri.RiTailwindCssFill />
    },
    {
      stackName: 'Jest',
      stack: <Si.SiJest />
    },
    {
      stackName: 'React Native',
      stack: <TbBrandReactNative />
    },
    {
      stackName: 'MySql',
      stack: <Si.SiMysql />
    },
    {
      stackName: 'MongoDB',
      stack: <Si.SiMongodb />
    },
    {
      stackName: 'Typescript',
      stack: <Si.SiTypescript />
    }
  ]

  return {
    skils
  }
}
