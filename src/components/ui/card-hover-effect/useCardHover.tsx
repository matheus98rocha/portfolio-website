import { useCallback, useState } from 'react'

export default function useCardHoverEffect() {
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
  return {
    hoveredIndex,
    setHoveredIndex,
    handleSelectLanguage,
    selectedLanguage
  }
}
