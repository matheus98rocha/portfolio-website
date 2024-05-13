import { useTranslations } from 'next-intl'
import React from 'react'

function ProfileDescription() {
  const t = useTranslations('Index')
  return (
    <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:items-start'>
      <h1 className='text-center text-3xl font-bold text-stone-50 md:text-5xl'>
        {t('title')} <strong className='text-red-500'>Matheus</strong>
      </h1>
      <h2 className='text-center text-lg text-stone-100 md:text-3xl'>
        {t('subtitle')}
      </h2>
    </div>
  )
}

export default ProfileDescription
