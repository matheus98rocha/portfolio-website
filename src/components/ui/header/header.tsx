import Select from '@/components/select/select'
import React from 'react'

function Header() {
  return (
    <div className='relative flex w-full items-center justify-end space-x-4 md:p-2 pr-4 rounded duration-500 ease-in-out z-30'>
      <Select />
    </div>
  )
}

export default Header
