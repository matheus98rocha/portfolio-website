import React, { useCallback, useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

import * as Io from 'react-icons/io'
import { sendGAEvent } from '@next/third-parties/google'

function Select() {
  const [selectedLocale, setSelectedLocale] = useState(useLocale())
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
  const router = useRouter()

  const handleOpenSelect = useCallback(() => {
    setIsOpenSelect(!isOpenSelect)
  }, [])

  const onSelectChange = useCallback((value: string) => {
    const nextLocale = value
    setSelectedLocale(nextLocale)
    sendGAEvent({
      event: 'changeLanguage',
      value: nextLocale
    })
    router.replace(`/${nextLocale}`)
  },[])

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
    <div
      className='relative z-50 flex cursor-pointer items-center justify-center bg-transparent py-2 text-stone-100'
      onClick={() => handleOpenSelect()}
    >
      <p>{selectedLocale.toUpperCase()}</p>
      <Io.IoMdArrowDropup
        color='white'
        className={`text-white ${!isOpenSelect ? 'rotate-180' : ''} transition delay-75 duration-75 ease-in-out`}
      />
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
  )
}

export default Select
