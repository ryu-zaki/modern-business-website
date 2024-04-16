import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import crossIcon from './imgs/cross-icon.png'


export default function NavBar({scrollForm, navBarRef}) {

  const [navVisible, setNavVisible] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setNavVisible(false)
  }



  return (
    <div ref={navBarRef} className='absolute whole-nav-bar top-0 z-30 left-0 flex w-full text-white justify-between items-center p-8 xl:px-14'>
      <h2 className='logo-text text-xl font-bold xl:text-2xl'>j&global</h2>

      
      <div className={`${!navVisible && "-translate-x-full md:translate-x-0"} z-30 fixed text-white top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center gap-20 items-center transition-all duration-500 sm:w-80 sm:items-start sm:pl-10 md:relative md:bg-transparent md:h-auto md:flex-row md:w-auto md:items-center`}>

      <img onClick={() => setNavVisible(false)} draggable={false} className='absolute top-5 right-5 cursor-pointer md:hidden' src={crossIcon} alt='' />

      <nav className='flex text-xl flex-col nav-section gap-8 items-center sm:text-left sm:items-start md:flex-row md:text-sm xl:gap-10'>
       <Link 
         onClick={handleClick}
         to={'home'}
         className='cursor-pointer' 
         duration={500}
         spy={true}
         smooth={true}
         >Home</Link>

       <Link 
         onClick={handleClick}
         className='cursor-pointer' 
         to={"about"} 
         duration={500}
         spy={true}
         smooth={true}>About</Link>

       <Link 
         onClick={handleClick}
         className='cursor-pointer' 
         to={"discover"} 
         duration={500}
         smooth={true}>Discover</Link>

       <Link 
         onClick={handleClick}
         className='cursor-pointer' 
         to={"services"} 
         duration={500}
         smooth={true}>Services</Link>
      </nav>

      <button onClick={() => {scrollForm(); handleClick()}} className='bg-primary p-3 rounded-full px-6 md:text-sm xl:hidden'>
        signup
      </button>

      </div>


      <div className='relative menu-btn flex flex-col gap-2 md:hidden'>
        <div onClick={() => setNavVisible(true)} className='absolute inset-0 cursor-pointer'></div>

        <div></div>
        <div></div>
        <div className='origin-right scale-x-75'></div>
      </div>

      <button onClick={scrollForm} className='bg-primary p-3 rounded-full px-6 md:text-sm hidden xl:inline-block xl:text-base'>
        signup
      </button>
      
    </div>
  )
}
