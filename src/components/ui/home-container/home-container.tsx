'use client'
import React, { useState } from 'react'

import Image from 'next/image'

import logo from '../../../../assets/emote.png'
import profile from '../../../../assets/profile.png'

import { motion, AnimatePresence } from 'framer-motion'
import { useHomeContainer } from './use-home-container'

function HomeContainer() {
  const { isHoveredImage, setIsHoveredImage } = useHomeContainer()
  return (
    <div
      className='bg-red flex flex-col items-center justify-center gap-6'
      id='home'
    >
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            y: -100
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          exit={{
            opacity: 0,
            y: -100
          }}
          transition={{
            duration: 0.2
          }}
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
        </motion.div>
      </AnimatePresence>
      <div className='flex flex-col flex-wrap items-start justify-center gap-2'>
        <h1 className='text-5xl font-bold text-red-500'>Bem vindo.</h1>
        <h2 className='text-3xl text-red-400'>Desenvolvedor de Software</h2>
        <h3 className='text-lg text-red-300'>
          Criando experiências digitais com precisão, engajamento e
          acessibilidade.
        </h3>
      </div>
    </div>
  )
}

export default HomeContainer
