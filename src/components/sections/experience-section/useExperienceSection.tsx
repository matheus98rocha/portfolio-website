import { ExperienceContentProps } from "./components/experience-image.types"

export default function useExperienceSection(t: any) {
  const experiencies: ExperienceContentProps[] = [
    {
      name: t('experiencesJourneyBRQ.name'),
      date: t('experiencesJourneyBRQ.date'),
      experiences: [
        t('experiencesJourneyBRQ.firstExperiences'),
        t('experiencesJourneyBRQ.secondExperiences'),
        t('experiencesJourneyBRQ.thirdExperiences')
      ],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyQDOISJR.name'),
      date: t('experiencesJourneyQDOISJR.date'),
      experiences: [
        t('experiencesJourneyQDOISJR.firstExperiences'),
        t('experiencesJourneyQDOISJR.secondExperiences'),
        t('experiencesJourneyQDOISJR.thirdExperiences')
      ],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyQDOIS.name'),
      date: t('experiencesJourneyQDOIS.date'),
      experiences: [t('experiencesJourneyQDOIS.firstExperiences')],
      typeIcon: 'Work'
    },
    {
      name: t('experiencesJourneyCollege.name'),
      date: t('experiencesJourneyCollege.date'),
      experiences: [t('experiencesJourneyCollege.firstExperiences')],
      typeIcon: 'Course'
    }
  ]
  return {
    experiencies
  }
}
