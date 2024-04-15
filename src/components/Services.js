import React from 'react'
import spaceImg from './imgs/space.svg';
import onlineImg from './imgs/online.svg';
import realtimeImg from './imgs/real-time.svg';


export default function Services() {
  return (
    <section className='flex flex-col relative z-10 gap-16 items-center py-14 xl:py-24'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold lg:text-3xl xl:text-5xl'>Our Services</h2>
          <p className='text-primary text-sm mt-2 lg:text-base xl:mt-4'>take a look at our services</p>
        </div>
        <article className='flex flex-col items-center catalog-con gap-10 text-dark lg:flex-row lg:gap-5 lg:items-stretch lg:px-8 xl:gap-8'>
            <CatalogBox 
              title={"Donec qius"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum dapibus ligula sit amet lobortis. Praesent sit amet pretium enim. Donec sed diam ut est sodales malesuada id in odio."}
              sourceImg={spaceImg}
              />

            <CatalogBox 
              title={"Donec qius"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum dapibus ligula sit amet lobortis. Praesent sit amet pretium enim. Donec sed diam ut est sodales malesuada id in odio."}
              sourceImg={realtimeImg}
              />

            <CatalogBox 
              title={"Donec qius"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum dapibus ligula sit amet lobortis. Praesent sit amet pretium enim. Due. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec."}
              sourceImg={onlineImg}
              />
        </article>
    </section>
  )
}

const CatalogBox = ({title, desc, sourceImg}) => {


    return (
        <section className='bg-white justify-stretch catalog p-7 flex flex-col items-center text-center rounded-xl gap-6 w-11/12 sm:p-10'>
            <img src={sourceImg} alt='' />

            <div>
                <h2 className='text-xl font-bold mb-3'>{title}</h2>
                <p className='text-sm leading-6'>{desc}</p>
            </div>

        </section>
    )

}