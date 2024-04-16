import React from 'react';
import bgVideo from './vids/bgvideo.mp4'

export default function HomePage() {
  return (
    <div className='home-page z-10 inset-0 h-screen flex justify-center items-center'>
        <video autoPlay muted loop className='fixed bg-dark -z-10 h-full w-full inset-0 object-cover'>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='z-10 text-white relative px-8 sm:text-center md:mt-10'>
          <h1 className='text-3xl font-bold mb-3 md:text-4xl xl:text-5xl'>Reaching Goals Made Easy</h1>
          <p className='text-sm leading-7 md:text-base md:mt-5'>signup today and receive $250 in credit for your next successful project.</p>
          <button className='bg-primary p-4 px-8 rounded-full mt-8 text-sm md:text-base md:mt-10'>Getting Started &nbsp; &gt;</button>
        </div>
      
    </div>
  )
}
