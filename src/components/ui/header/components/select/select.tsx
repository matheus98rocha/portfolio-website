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
  }, [isOpenSelect])

  const onSelectChange = useCallback(
    (value: string) => {
      const nextLocale = value
      setSelectedLocale(nextLocale)
      sendGAEvent({
        event: 'change_language',
        value: nextLocale
      })
      router.replace(`/${nextLocale}`)
    },
    [router]
  )

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
      className='relative z-50 flex cursor-pointer items-center justify-center bg-transparent py-2 text-neutral-500 md:text-white'
      onClick={() => handleOpenSelect()}
    >
      <p>{selectedLocale.toUpperCase()}</p>
      <Io.IoMdArrowDropup
        className={`text-neutral-500 md:text-white  ${!isOpenSelect ? 'rotate-180' : ''} transition delay-75 duration-75 ease-in-out`}
      />
      <div className='absolute right-3 top-10 cursor-pointer'>
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
