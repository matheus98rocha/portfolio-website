import { PojectType } from '@/components/sections/projects-section/projects-section.types'

export type CardHoverProps = {
  items: PojectType[]
  className?: string
}

export type CardProps = {
  className?: string
  children: React.ReactNode
}

export type CardLanguagesProps = {
  className?: string
  languages: string[]
}
