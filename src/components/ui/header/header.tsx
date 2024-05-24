import Select from '@/components/ui/header/components/select/select'
import React from 'react'
import CurrentStatus from './components/current-status/current-status'

function Header() {
  return (
    <div className='container relative z-20 flex w-full items-center justify-end space-x-4 rounded pr-4 duration-500 ease-in-out md:p-2 md:pr-0'>
      <CurrentStatus status='isEmployed' company='BRQ' />
      <Select />
    </div>
  )
}

export default Header
