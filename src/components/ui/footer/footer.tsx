import SocialMedia from '@/components/sections/social-media/social-media'
import { backToTop } from '@/utils/scroll-back-to-top'
import React from 'react'

function Footer() {
  return (
    <div className='container relative z-20 flex w-full items-center justify-around space-x-4 border-t border-red-500 py-5 duration-500 ease-in-out md:pr-0'>
      <div onClick={() => backToTop()} className='cursor-pointer'>
        <h3 className='text-lg text-red-500'>Matheus Rocha</h3>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Footer
