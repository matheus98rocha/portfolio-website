import Image from 'next/image'
import { motion } from 'framer-motion'

import logo from '../../../../../../assets/emote.png'
import profile from '../../../../../../assets/profile.png'

import { useHomeContainer } from '../../use-home-section'

export function ProfileImage() {
  const { isHoveredImage, setIsHoveredImage } = useHomeContainer()

  return (
    <div
      className={`z-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border bg-white shadow-md shadow-red-500`}
      onMouseEnter={() => setIsHoveredImage(true)}
      onMouseLeave={() => setIsHoveredImage(false)}
    >
      {isHoveredImage ? (
        <motion.div
          key='hovered-image'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className='flex h-[100px] w-[100px] rounded-full'
        >
          <Image
            src={profile}
            width={100}
            height={100}
            alt='logo-portfolio'
            className='flex h-full w-full items-center justify-center rounded-full border object-cover'
            loading='lazy'
          />
        </motion.div>
      ) : (
        <motion.div
          key='non-hovered-image'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className='flex h-full w-full items-center justify-center rounded-full border object-cover'
        >
          <Image
            src={logo}
            width={80}
            height={80}
            alt='logo-portfolio'
            loading='lazy'
          />
        </motion.div>
      )}
    </div>
  )
}
