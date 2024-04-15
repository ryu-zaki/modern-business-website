import React from 'react';
import { NavLink } from 'react-router-dom';
import crossIcon from './imgs/cross-icon.png'

export default function NavBar() {

  const [navVisible, setNavVisible] = React.useState(false);



  return (
    <div className='absolute z-20 top-0 left-0 flex w-full text-white justify-between items-center p-8 xl:px-14'>
      <h2 className='logo-text text-xl font-bold xl:text-2xl'>j&global</h2>

      
      <div className={`${!navVisible && "-translate-x-full md:translate-x-0"} z-20 fixed text-white top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center gap-20 items-center transition-all duration-500 sm:w-80 sm:items-start sm:pl-10 md:relative md:bg-transparent md:h-auto md:flex-row md:w-auto md:items-center`}>

      <img onClick={() => setNavVisible(false)} draggable={false} className='absolute top-5 right-5 cursor-pointer md:hidden' src={crossIcon} alt='' />

      <nav className='flex text-xl flex-col nav-section gap-8 items-center sm:text-left sm:items-start md:flex-row md:text-sm xl:gap-10'>
       <NavLink>About</NavLink>
       <NavLink>Discover</NavLink>
       <NavLink>Services</NavLink>
       <NavLink>Signup</NavLink>
      </nav>

      <button className='bg-primary p-3 rounded-full px-6 md:text-sm xl:hidden'>
        signup
      </button>

      </div>


      <div className='relative menu-btn flex flex-col gap-2 md:hidden'>
        <div onClick={() => setNavVisible(true)} className='absolute inset-0 cursor-pointer'></div>

        <div></div>
        <div></div>
        <div className='origin-right scale-x-75'></div>
      </div>

      <button className='bg-primary p-3 rounded-full px-6 md:text-sm hidden xl:inline-block xl:text-base'>
        signup
      </button>
      
    </div>
  )
}
