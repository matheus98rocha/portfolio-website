import React, { useRef } from 'react'
import { MdWork } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

import { motion } from 'framer-motion'

type ExperienceProgressBarProps = {
  typeIcon: 'Work' | 'Course'
}

function ExperienceProgressBar({ typeIcon }: ExperienceProgressBarProps) {
  return (
    <div className='hidden flex-col items-center justify-center md:flex'>
      <div className='rounded-full bg-red-500 p-2'>
        {typeIcon === 'Work' && <MdWork color='white' />}
        {typeIcon === 'Course' && <FaUniversity color='white' />}
      </div>
    </div>
  )
}

export type ExperienceContentProps = {
  name: string
  date: string
  experiences: string[]
  typeIcon: ExperienceProgressBarProps['typeIcon']
}

function ExperienceContent({
  name,
  date,
  experiences,
  typeIcon
}: ExperienceContentProps) {
  const scrollRef = useRef(null)
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.2 }
      }}
      viewport={{ root: scrollRef }}
      className='relative flex w-full items-center justify-start gap-4 p-3 border-b border-red-950'
    >
      <>
        <ExperienceProgressBar typeIcon={typeIcon} />
        <div className='flex flex-col items-start justify-center gap-3'>
          <div className='flex flex-col items-start justify-center'>
            <p className='text-sm text-white'>{name}</p>
            <p className='text-xs  text-white'>{date}</p>
          </div>
          <div>
            {experiences.map(experience => (
              <p className='text-sm text-white' key={experience}>
                {experience}
              </p>
            ))}
          </div>
        </div>
      </>
    </motion.div>
  )
}

export default ExperienceContent
