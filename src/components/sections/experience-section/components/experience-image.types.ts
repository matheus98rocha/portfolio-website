export type ExperienceProgressBarProps = {
  typeIcon: 'Work' | 'Course'
}

export type ExperienceContentProps = {
  name: string
  date: string
  experiences: string[]
  typeIcon: ExperienceProgressBarProps['typeIcon']
}