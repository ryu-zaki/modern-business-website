import React from 'react'
import home from './imgs/home-icon.png';
import info from './imgs/info-icon.png';
import search from './imgs/search-icon.png';
import tool from './imgs/tools-icon.png';
import user from './imgs/user-icon.png';
import crossIcon from './imgs/cross-icon.png'
import { Link, scroller } from 'react-scroll';


export default function CapsuleNav({capsuleVisible, setCapsuleVisible}) {

  const handleClose = () => {
    setCapsuleVisible(false)
  }

  return (
    <nav className={`${!capsuleVisible ? "right-0 translate-x-full" : "right-3 translate-x-0 lg:right-5"} transition-all duration-500 bg-primary capsule-nav top-1/2 -translate-y-1/2 z-20 fixed p-4 rounded-full flex flex-col gap-4 items-center`}>
      <div onClick={() => setCapsuleVisible(true)} className={`${capsuleVisible && "scale-0 opacity-0"} cursor-pointer origin-right transition-all duration-500 triangle-left absolute top-1/2 -translate-y-1/2 -translate-x-full`}></div>
        <Link 
            activeClass="active" 
            to="home" 
            spy={true}
            smooth={true} 
            duration={500}
            >
            <img src={home} alt='' />
          </Link>

      
          <Link 
            activeClass="active" 
            to="about" 
            spy={true}
            smooth={true} 
            duration={500}
            >
            <img src={info} alt='' />
          </Link>
          
          


          <Link 
            activeClass="active" 
            to="discover" 
            spy={true}
            smooth={true} 
            duration={500}
            >
            <img src={search} alt='' />
          </Link>

          <Link 
            activeClass="active" 
            to="services" 
            spy={true}
            smooth={true} 
            duration={500}
            >
            <img src={tool} alt='' />
          </Link>

          <Link 
            activeClass="active" 
            to="form" 
            spy={true}
            smooth={true} 
            duration={500}
            >
            <img src={user} alt='' />
          </Link>

    <div onClick={handleClose} className={`p-3 bg-dark delay-500 -z-10 transition-all duration-500 absolute translate-y-full rounded-full cursor-pointer ${!capsuleVisible ? "bottom-5 opacity-0" : "-bottom-3"}`}>
      <img width={20} src={crossIcon} alt='' />
    </div>
    </nav>
  )
}
