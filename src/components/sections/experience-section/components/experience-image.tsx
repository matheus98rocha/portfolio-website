import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../../../assets/hero-section-experience.svg'
import OnScrollAnimate from '@/layout/on-scroll-animate/on-scroll-animate'

function ExperienceImage() {
  return (
    <OnScrollAnimate
    >
      <Image
        src={HeroImage}
        alt='hero-image-section'
        width={600}
        height={600}
        className='hidden md:block'
      />
    </OnScrollAnimate>
  )
}

export default ExperienceImage
