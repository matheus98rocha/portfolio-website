import React from 'react'

type SectionWrapperProps = {
  children: React.ReactNode
  titleSection: string
  subTitleSection: string
  id: string
}

function SectionWrapper({
  children,
  id,
  titleSection,
  subTitleSection
}: SectionWrapperProps) {
  return (
    <div
      id={id}
      className='flex max-w-5xl flex-col items-center justify-center gap-6'
    >
      <div className='flex w-full flex-col items-start justify-start gap-4 px-8'>
        <h3 className='text-2xl font-bold text-slate-200 md:text-3xl'>
          {titleSection}
        </h3>
        <h4 className='text-slate-500'>{subTitleSection}</h4>
      </div>
      {children}
    </div>
  )
}

export default SectionWrapper
