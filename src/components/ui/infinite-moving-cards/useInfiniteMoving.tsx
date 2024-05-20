import { useCallback, useEffect, useRef, useState } from 'react'
import { useInfiniteMovingCardsType } from './infinite-moving-cards.types'

export default function useInfiniteMovingCards({
  direction,
  speed
}: useInfiniteMovingCardsType) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

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

  return {
    start,
    containerRef,
    scrollerRef
  }
}
