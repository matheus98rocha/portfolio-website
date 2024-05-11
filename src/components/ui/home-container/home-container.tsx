'use client'
import React, { useState } from 'react'

import Image from 'next/image'

import logo from '../../../../assets/emote.png'
import profile from '../../../../assets/profile.png'

import { motion, AnimatePresence } from 'framer-motion'

type HomeContainerProps = {
  id: string
}

function HomeContainer({ id }: HomeContainerProps) {
  const [isHoveredImage, setIsHoveredImage] = useState<boolean>(false)
  console.log(isHoveredImage)
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
              className='mb-2 transition delay-150 duration-300 ease-in-out'
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className='flex flex-col flex-wrap items-start justify-center'></div>
    </div>
  )
}

export default HomeContainer
