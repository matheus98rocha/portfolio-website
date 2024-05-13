import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

function Select() {
  const [selectedLocale, setSelectedLocale] = useState(useLocale())
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
  const router = useRouter()

  const onSelectChange = (value: string) => {
    const nextLocale = value
    setSelectedLocale(nextLocale)
    router.replace(`/${nextLocale}`)
  }

  const langs = [
    {
      value: 'pt',
      label: 'PT'
    },
    {
      value: 'en',
      label: 'EN'
    }
  ]

  return (
    <div className='relative'>
      <div className='bg-transparent py-2 text-stone-100'>
        <p
          className='cursor-pointer'
          onClick={() => setIsOpenSelect(!isOpenSelect)}
        >
          {selectedLocale.toUpperCase()}
        </p>
        <div className='absolute top-10 cursor-pointer'>
          {isOpenSelect &&
            langs
              .filter(lang => lang.value !== selectedLocale)
              .map(lang => (
                <p
                  key={lang.value}
                  className='cursor-pointer'
                  onClick={() => {
                    onSelectChange(lang.value)
                    setIsOpenSelect(false)
                  }}
                >
                  {lang.label}
                </p>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Select
