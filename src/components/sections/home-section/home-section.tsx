'use client'
import React from 'react'

import Image from 'next/image'

import logo from '../../../../assets/emote.png'
import profile from '../../../../assets/profile.png'

import { motion, AnimatePresence } from 'framer-motion'
import { useHomeContainer } from './use-home-section'
import { useTranslations } from 'next-intl'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards/infinite-moving-cards'
import AnimatedWrapper from '@/layout/animated-wrapper/animated-wrapper'

function HomeSection() {
  const t = useTranslations('Index')
  const { isHoveredImage, setIsHoveredImage, items } = useHomeContainer()
  return (
    <div
      className='bg-red flex flex-col items-center justify-center gap-20 mt-7'
      id='home'
    >
      <AnimatedWrapper>
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
      </AnimatedWrapper>
      <div className='flex flex-col flex-wrap items-center justify-center gap-2 md:items-start'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center text-3xl font-bold text-stone-50 md:text-5xl'
        >
          {t('title')} <strong className='text-red-500'>Matheus</strong>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center text-lg text-stone-100 md:text-3xl'
        >
          {t('subtitle')}
        </motion.h2>
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-2xl text-slate-200 md:text-3xl'
        >
          {t('knowledge')}
        </motion.h3>
        <div className='flex flex-col items-center justify-center'>
          <InfiniteMovingCards items={items} direction='left' speed='slow' />
        </div>
      </div>
    </div>
  )
}

export default HomeSection
