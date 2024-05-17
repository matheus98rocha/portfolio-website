import { backToTop } from '@/utils/scroll-back-to-top'
import Link from 'next/link'
import React from 'react'
import * as fa from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlinePhone } from 'react-icons/md'

function Footer() {
  return (
    <div className='container relative z-20 flex w-full items-center justify-around space-x-4 border-t border-[#ef444441] py-5 duration-500 ease-in-out md:pr-0'>
      <div onClick={() => backToTop()} className='cursor-pointer'>
        <h3 className='text-lg text-[#ef444441]'>Matheus Rocha</h3>
      </div>
      <div className='flex items-center justify-between gap-4 text-xl text-[#ef444441]'>
        <Link
          href={'https://www.linkedin.com/in/matheus-rocha-79185b169/'}
          target='_blank'
        >
          <fa.FaLinkedinIn />
        </Link>
        <Link
          href={'https://www.instagram.com/matheus98rocha/'}
          target='_blank'
        >
          <fa.FaInstagram />
        </Link>
        <a href={`mailto:matheus98rocha@gmail.com`}>
          <IoMailOutline />
        </a>
        <a href={`tel:+31998639445`}>
          <MdOutlinePhone />
        </a>
      </div>
    </div>
  )
}

export default Footer
