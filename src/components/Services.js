import React from 'react'
import spaceImg from './imgs/space.svg';
import onlineImg from './imgs/online.svg';
import realtimeImg from './imgs/real-time.svg';
import { Element } from 'react-scroll';


export default function Services({name}) {
  return (
    <section>
      <Element className='flex flex-col relative z-10 gap-16 items-center py-14 xl:py-24' name={name}>
        <div className='text-center'>
          <h2 className='text-2xl font-bold lg:text-3xl xl:text-5xl'>Our Services</h2>
          <p className='text-primary text-sm mt-2 lg:text-base xl:mt-4'>take a look at our services</p>
        </div>
        <article className='flex flex-col items-center catalog-con gap-10 text-dark lg:flex-row lg:gap-5 lg:items-stretch lg:px-8 xl:gap-8'>
            <CatalogBox 
              title={"Custom Websites"}
              desc={"We design and develop bespoke websites from scratch, ensuring they are tailored to your business requirements and objectives."}
              sourceImg={spaceImg}
              />

            <CatalogBox 
              title={"E-commerce Solutions"}
              desc={"We create robust and secure e-commerce platforms that enable seamless online transactions, driving sales and enhancing customer experience."}
              sourceImg={realtimeImg}
              />

            <CatalogBox 
              title={"Hosting and Domain"}
              desc={"We provide reliable hosting and domain registration services to ensure your website is accessible and secure at all times."}
              sourceImg={onlineImg}
              />
        </article>
        </Element>
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