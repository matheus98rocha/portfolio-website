'use client'
import React from 'react'

import Image from 'next/image'

import logo from '../../../../assets/emote.png'
import profile from '../../../../assets/profile.png'

import { useHomeContainer } from './use-home-section'
import { useTranslations } from 'next-intl'

function HomeSection() {
  const t = useTranslations('Index')
  const { isHoveredImage, setIsHoveredImage } = useHomeContainer()
  return (
      <div
        className='bg-red flex flex-col items-center justify-center gap-6'
        id='home'
      >
        <div
          className={`flex h-[100px] w-[100px] items-center justify-center rounded-full border ${!isHoveredImage && 'bg-white'} shadow-md shadow-red-500`}
          onMouseEnter={() => setIsHoveredImage(true)}
          onMouseLeave={() => setIsHoveredImage(false)}
        >
          {isHoveredImage ? (
            <Image
              src={profile}
              width={100}
              height={100}
              alt='logo-portfolio'
              className='rounded-full border '
            />
          ) : (
            <Image
              src={logo}
              width={80}
              height={80}
              alt='logo-portfolio'
              className='mb-2'
            />
          )}
        </div>

        <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:items-start'>
          <h1 className='text-center text-3xl font-bold text-stone-50 md:text-5xl'>
            {t('title')} <strong className='text-red-500'>Matheus</strong>
          </h1>
          <h2 className='text-center text-lg text-stone-100 md:text-3xl'>
            {t('subtitle')}
          </h2>
        </div>
      </div>
  )
}

export default HomeSection
