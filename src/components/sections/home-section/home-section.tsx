'use client'
import React from 'react'

import { ProfileImage } from './components/profile-image/profile-image'
import ProfileDescription from './components/profile-description/profile-description'
import SocialMedia from '../social-media/social-media'

function HomeSection() {
  return (
    <div className='bg-red flex flex-col items-center justify-center gap-6'>
      <ProfileImage />
      <ProfileDescription />
      <div className='flex w-full items-center justify-center z-20'>
        <SocialMedia />
      </div>
    </div>
  )
}

export default HomeSection
