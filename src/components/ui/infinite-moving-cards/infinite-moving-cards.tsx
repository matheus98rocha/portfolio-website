'use client'

import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    stackName: string
    stack: JSX.Element
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }, [direction])
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }, [speed])
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }, [getDirection, getSpeed])

  useEffect(() => {
    addAnimation()
  }, [addAnimation])
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -100
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          opacity: 0,
          y: -100
        }}
        transition={{
          duration: 0.2
        }}
        ref={containerRef}
        className={cn(
          'scroller container relative z-20  w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
            start && 'animate-scroll ',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {items.map((item, key) => (
            <div
              key={key}
              className='bg- flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-md shadow shadow-red-500'
            >
              <div className='text-5xl text-slate-200'>{item.stack}</div>
              <p className='text-sm text-slate-200'>{item.stackName}</p>
            </div>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}
