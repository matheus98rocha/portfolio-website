import React from 'react'
import { motion } from 'framer-motion'
import { CurrentStatusProps } from './current-status.types'
import { useTranslations } from 'next-intl'

function CurrentStatus({ status, company }: CurrentStatusProps) {
  const t = useTranslations('Index')
  return (
    <div className='hidden cursor-default items-center justify-center rounded border border-red-500 p-2 md:flex'>
      <div className='h-3 w-3 rounded-full bg-red-500'></div>
      <div className=' overflow-hidden'>
        <motion.p
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 7,
            ease: 'linear',
            repeat: Infinity
          }}
          className='relative whitespace-nowrap text-white'
        >
          {status === 'isEmployed'
            ? `${t('currentStatusWithJob')} ${company}`
            : t('currentStatusWithoutJob')}
        </motion.p>
      </div>
    </div>
  )
}

export default CurrentStatus
