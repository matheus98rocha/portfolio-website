import Link from 'next/link'
import React from 'react'
import * as fa from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

function AnimatedSocialMediaButton({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

function SocialMedia() {
  return (
    <div className='flex items-center justify-between gap-4 text-xl text-red-500'>
      <AnimatedSocialMediaButton>
        <>
          <Link
            href={'https://www.linkedin.com/in/matheus-rocha-79185b169/'}
            target='_blank'
          >
            <fa.FaLinkedinIn />
          </Link>
        </>
      </AnimatedSocialMediaButton>
      <AnimatedSocialMediaButton>
        <Link
          href={'https://www.instagram.com/matheus98rocha/'}
          target='_blank'
        >
          <fa.FaInstagram />
        </Link>
      </AnimatedSocialMediaButton>
      <AnimatedSocialMediaButton>
        <a href={`mailto:matheus98rocha@gmail.com`}>
          <IoMailOutline />
        </a>
      </AnimatedSocialMediaButton>
      <AnimatedSocialMediaButton>
        <a
          href={`http://api.whatsapp.com/send?phone=${31998639445}&text=Oi Matheus`}
          target='_blank'
        >
          <fa.FaWhatsapp />
        </a>
      </AnimatedSocialMediaButton>
    </div>
  )
}

export default SocialMedia
