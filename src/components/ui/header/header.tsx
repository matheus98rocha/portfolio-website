import SocialMedia from '@/components/sections/social-media/social-media'
import Select from '@/components/ui/select/select'
import React from 'react'

function Header() {
  return (
    <div className='container relative z-20 flex w-full items-end justify-end space-x-4 rounded pr-4 duration-500 ease-in-out md:p-2 md:pr-0'>
      <Select />
    </div>
  )
}

export default Header
