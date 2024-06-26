import React from 'react'
import { MdWork } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

import { motion } from 'framer-motion'
import {
  ExperienceContentProps,
  ExperienceProgressBarProps
} from './experience-image.types'

function ExperienceProgressBar({ typeIcon }: ExperienceProgressBarProps) {
  return (
    <div className='flex-col items-center justify-center md:flex'>
      <div className='rounded-full bg-red-500 p-2'>
        {typeIcon === 'Work' && <MdWork color='white' />}
        {typeIcon === 'Course' && <FaUniversity color='white' />}
      </div>
    </div>
  )
}

function ExperienceContent({
  name,
  date,
  experiences,
  typeIcon
}: ExperienceContentProps) {
  return (
    <motion.div className='relative flex min-h-40 w-full items-center justify-start gap-4 border-b border-red-900 p-4 last:border-b-0'>
      <ExperienceProgressBar typeIcon={typeIcon} />
      <div className='flex flex-col items-start justify-center gap-3'>
        <div className='flex flex-col items-start justify-center'>
          <p className='bold text-sm font-bold text-white'>{name}</p>
          <p className='text-xs  text-white'>{date}</p>
        </div>
        <div>
          {experiences.map(experience => (
            <p className='text-wrap text-sm text-white' key={experience}>
              {experience}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceContent
