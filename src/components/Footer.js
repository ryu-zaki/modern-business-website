import React from 'react'

export default function Footer() {

  const topics = [
    {
        category: "About us",
        subCats: [
            "How it works",
            "Testimonials",
            "Careers",
            "Investors"
        ]
    },
    {
        category: "Contact us",
        subCats: [
            "Contact",
            "Support",
            "Destinations",
            "Our locations",
        ]
    },
    {
        category: "Customers",
        subCats: [
            "Our Customers",
            "How to reach us",
            "Video Samples",
            "Agency",
        ]
    },
    {
        category: "Follow Us",
        subCats: [
            "Instagram",
            "Youtube",
            "Facebook",
            "LinkedIn",
        ]
    }
  ]

  const categories = topics.map(({category, subCats}, index) => {

    return (
         <div key={index} className='text-center w-32 mx-8 sm2:mx-0 sm2:text-left'>
            <h2 className='text-xl mb-5'>{category}</h2>

            <ul className='space-y-2'>
                {
                  subCats.map((data, index) => <li className='text-sm sm2:text-xs' key={index}>{data}</li>)
                
                }
            </ul>
         </div>
    )

  });

  return (
    <footer className='bg-dark relative text-white py-16 lg:pb-10'>
        <div className='flex flex-col items-center gap-8 sm2:flex-row sm2:justify-center lg:gap-14 xl:gap-20'>
            {categories}
        </div>

        <h2 className='text-gray logo-text text-center text-2xl mt-10 lg:mt-16'>- j&global -</h2>
    </footer>
  )
}
