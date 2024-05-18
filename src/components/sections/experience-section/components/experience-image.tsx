import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroImage from '../../../../../assets/hero-section-experience.svg'

function ExperienceImage() {
  const scrollRef = useRef(null)
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
      }}
      viewport={{ root: scrollRef }}
    >
      <Image
        src={HeroImage}
        alt='hero-image-section'
        width={600}
        height={600}
        className='hidden md:block'
      />
    </motion.div>
  )
}

export default ExperienceImage
