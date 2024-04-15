import React from 'react'


export default function SectionTemp({desc, title, subTitle, btnText, sourceImg}) {
  return (
    <section className='info-sec'>
      <div className='flex flex-col gap-8 p-10 sm:p-16 lg:flex-row lg:w-11/12 lg:mx-auto xl:py-0 xl:p-0 xl:h-96 xl:items-center xl:gap-32'>
      <div className='mb-7'>
          <div>
            <p className='text-primary text-sm'>{subTitle}</p>
            <h2 className='text-xl sm:text-2xl lg:text-3xl mt-2'>{title}</h2>
          </div>

          <div className='text-sm leading-7 text-justify lg:text-left mt-5'>
            <p>
            {desc}
            </p>

            <button className='text-sm text-white bg-primary rounded-full p-3 mt-8 px-7 lg:text-base'>{btnText}</button>
          </div>
        </div>

        <img className='hidden lg:inline-block' src={sourceImg} alt='' />
      </div>
      
    </section>
  )
}
