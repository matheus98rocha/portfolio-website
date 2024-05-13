import { useState } from 'react'

export const useHomeContainer = () => {
  const [isHoveredImage, setIsHoveredImage] = useState<boolean>(false)

  return {
    isHoveredImage,
    setIsHoveredImage,
  }
}
