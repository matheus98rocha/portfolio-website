'use client'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useState } from 'react'

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
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  const handleSelectLanguage = useCallback(
    (language: string) => {
      if (selectedLanguage.length > 0) {
        setSelectedLanguage('')
      }
      setSelectedLanguage(language)
    },
    [selectedLanguage]
  )
  const allLanguages = items.flatMap(item => item.languages)
  const uniqueLanguagesSet = new Set(allLanguages)
  const uniqueLanguagesArray = Array.from(uniqueLanguagesSet)

  return (
    <>
      <div className='flex w-full justify-between p-2'>
        {uniqueLanguagesArray.map(item => (
          <p
            key={item}
            className='text-white'
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
              className='group relative block h-full w-full p-2'
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className='absolute inset-0 block h-full w-full rounded-3xl bg-red-400'
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
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-red-500 bg-black p-4 group-hover:border-slate-700',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
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
