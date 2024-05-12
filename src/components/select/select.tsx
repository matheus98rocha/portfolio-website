'use client'
import React, { ChangeEvent, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

// function LanguageItem({ lang, isSelected, onClick }: LanguageItemProps) {
//   return (
//     <p
//       className={`absolute top-7 cursor-pointer rounded bg-gray-800 p-1 text-white ${
//         isSelected ? 'hidden' : ''
//       }`}
//       onClick={onClick}
//     >
//       {lang.toLocaleUpperCase()}
//     </p>
//   )
// }

function Select() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
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
      <select
        defaultValue={localActive}
        className='bg-transparent py-2 text-red-500'
        onChange={onSelectChange}
        disabled={isPending}
      >
        {langs.map(lang => (
          <option
            value={lang.value}
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
