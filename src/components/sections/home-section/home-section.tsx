'use client'
import React from 'react'

import { ProfileImage } from './components/profile-image/profile-image'
import ProfileDescription from './components/profile-description/profile-description'

function HomeSection() {
  return (
    <div className='bg-red flex flex-col items-center justify-center gap-6'>
      <ProfileImage />
      <ProfileDescription />
    </div>
  )
}

export default HomeSection
