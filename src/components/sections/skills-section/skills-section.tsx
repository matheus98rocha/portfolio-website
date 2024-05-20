import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards/infinite-moving-cards'
import React from 'react'
import { useTranslations } from 'next-intl'
import SectionWrapper from '@/layout/section-wrapper/section-wrapper'
import useSkilsSection from './useSkilsSection'

function SkillsSection() {
  const t = useTranslations('Index')
  const { skils } = useSkilsSection(t)
  return (
    <>
      <SectionWrapper
        id='skils'
        titleSection={t('knowledge')}
        subTitleSection={t('knowledgeSubtitle')}
      >
        <InfiniteMovingCards items={skils} direction='left' speed='slow' />
      </SectionWrapper>
    </>
  )
}

export default SkillsSection
