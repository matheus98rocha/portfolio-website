'use client'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { defaultLanguages } from './constants/default-languages'
import { sendGAEvent } from '@next/third-parties/google'

export const CardsGrid = ({
  items,
  className
}: {
  items: {
    title: string
    description: string
    link: string
    languages: string[]
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('NextJS')

  const handleSelectLanguage = useCallback(
    (language: string) => {
      if (selectedLanguage.length > 0) {
        setSelectedLanguage('')
      }
      setSelectedLanguage(language)
    },
    [selectedLanguage]
  )

  return (
    <>
      <div className='z-10 flex w-full items-center justify-around rounded-2xl  p-2'>
        {defaultLanguages.sort().map(item => (
          <p
            key={item}
            className={`${selectedLanguage === item ? 'link-underline-unhoverd link-underline link-underline-black' : ''} cursor-pointer p-2 text-white`}
            onClick={() => handleSelectLanguage(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          className
        )}
      >
        {items
          .filter(item => {
            if (selectedLanguage.length > 0) {
              return item.languages.includes(selectedLanguage)
            } else {
              return item
            }
          })
          .map((item, idx) => (
            <Link
              href={item?.link}
              key={item?.link}
              target='_blank'
              className='group relative block w-full p-2'
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                sendGAEvent({
                  value: item.title,
                  event: 'open_project'
                })
              }
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className='absolute inset-0 block rounded-3xl bg-red-400'
                    layoutId='hoverBackground'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 }
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 }
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardLanguages languages={item.languages} />
              </Card>
            </Link>
          ))}
      </div>
    </>
  )
}

export const Card = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className={cn(
        'relative z-20 overflow-hidden h-56 rounded-2xl border border-red-500 bg-black p-4 group-hover:border-slate-700',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </motion.div>
  )
}
export const CardTitle = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  )
}

export const CardLanguages = ({
  className,
  languages
}: {
  className?: string
  languages: string[]
}) => {
  return (
    <div
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      <div className='flex flex-wrap items-center justify-start gap-4'>
        {languages.map(language => (
          <p key={language} className='underline'>
            {language}
          </p>
        ))}
      </div>
    </div>
  )
}
