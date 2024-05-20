import { SkilsProps } from '@/components/sections/skills-section/skils-section.types'

export type InfiniteMovingCardsProps = {
  items: SkilsProps[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}

export type useInfiniteMovingCardsType = {
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
}
