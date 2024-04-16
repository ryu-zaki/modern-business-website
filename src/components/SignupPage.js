import React from 'react'
import {useLocation } from 'react-router-dom';
import loginImg from './imgs/space.svg';
import signupImg from './imgs/design-notes.svg';
import { Element } from 'react-scroll';

export default function LoginPage({name}) {
  
  const [isSignup, setIsSignup] = React.useState(false)
  const [eyeVisible, setEyeVisible] = React.useState(false);
  const [signUpInfo, setSignupInfo] = React.useState({
    email_signup: "",
    pass_signup: "",
    con_pass_signup: ""
  });

  const [loginInfo, setLoginInfo] = React.useState({
    email_login: "",
    pass_login: ""
  });

  const getSignupInfo = ({target}) => {

    setSignupInfo(prev => ({
      ...prev,
      [target.id]: target.value
    }))

  }

  const getLoginInfo = ({target}) => {

    setLoginInfo(prev => ({
      ...prev,
      [target.id]: target.value
    }))
  }


  return (
    <Element name={name} className='login-signup-wrapper  flex justify-center items-center bg-darker flex-col gap-10 pt-14 md:pt-28 md:gap-20'>
    
<div className='text-center'>
<h2 className='logo-text text-white text-3xl font-bold md:text-5xl'>-J&Global-</h2>
<p className="text-primary md:mt-3">fill up the form to signin or signup</p>
</div>
      <div className='login-signup-con relative mb-14 w-11/12 xl:flex xl:items-stretch xl:mb-24'>
        <div className='card  xl:translate-x-5 z-10 rounded-3xl relative bg-white w-full flex flex-col justify-between items-center pb-5 pt-14 gap-8 xl:w-1/2'>

            {/* Tabs colors */}

            <div className='flex gap-1 absolute top-3 left-3'>
              <div className='bg-tab-red rounded-full w-2 h-2'></div>
              <div className='bg-tab-yellow rounded-full w-2 h-2'></div>
              <div className='bg-tab-green rounded-full w-2 h-2'></div>
            </div>

            <div className='text-center relative'>
              <h2 className={`${!isSignup && "-translate-y-10 opacity-0"} text-lg transition-all absolute duration-500  font-bold xl:text-xl`}>Join to our community</h2>
              <h2 className={`${isSignup && "-translate-y-10 opacity-0"} transition-all duration-500 text-lg font-bold xl:text-xl`}>Good to see you again</h2>

              <p className='text-xs font-bold text-darkGray mt-2'>let's reach those goals</p>
            </div>

          <div className={`w-4/5 flex flex-col items-center gap-9 px-4 px:mx-8`}>
           
            <div className={`${!isSignup && "-translate-x-full"} input-fields transition-all duration-500 w-full flex items-center relative`}>
              <div className={`${!isSignup && "opacity-0"} transition-opacity duration-500`}>
                 <div className='input-box'>
                  <input 
                    onChange={getSignupInfo} 
                    value={signUpInfo.email_signup} 
                    required 
                    type='email' 
                    id='email_signup' />
                  <label htmlFor='email_signup'>email</label>
                 </div>

                 <div className='input-box'>
                  <input 
                    onChange={getSignupInfo} 
                    value={signUpInfo.pass_signup}  
                    required 
                    type='password' 
                    id='pass_signup' />
                  <label htmlFor='pass_signup'>password</label>
                 </div>

                 <div className='input-box'>
                  <input 
                    onChange={getSignupInfo} 
                    value={signUpInfo.con_pass_signup}   
                    required 
                    type='password' 
                    id='con_pass_signup' />
                  <label htmlFor='con_pass_signup'>confirm password</label>
                 </div>
              </div>

              <div className={`${isSignup && "opacity-0"} transition-opacity duration-500`} >

                 <div className='input-box'>
                  <input onChange={getLoginInfo} value={loginInfo.email_login} required type='email' id='email_login' />
                  <label htmlFor='email_login'>Email</label>
                 </div>

                 <div className='input-box'>
                  <input onChange={getLoginInfo} value={loginInfo.pass_login} required type='password' id='pass_login' />
                  <label htmlFor='email_login'>Password</label>
                 </div>

              </div>
            </div>
            
           <div className='flex items-center gap-2 self-start'>
                <input checked={eyeVisible} onChange={({target}) => setEyeVisible(target.checked)} className='cursor-pointer' type='checkbox' id="pass-visible" />
                <p className='text-xs'>show password</p>

                {
                  eyeVisible && 
                  (
                    <lord-icon
                   src="https://cdn.lordicon.com/vfczflna.json"
                   trigger="in"
                   delay=" 0"
                   state="in-reveal"
                   stroke="bold"
                   colors="primary:#121331,secondary:#121331"
                   style={{width:"25px",height:"25px"}}>
                 </lord-icon>
                  )
                }
            </div>

           <div className='relative w-full flex justify-center'>
           <button className={`${isSignup && "opacity scale-0"} bg-primary absolute py-3 transition-all duration-500 rounded-lg text-white w-4/5 text-sm`}>signin</button>
            <button className={`${!isSignup && "opacity scale-0"} relative transition-all duration-500 bg-primary py-3 rounded-lg text-white w-4/5 text-sm`}>signup</button>
           </div>
            
            
          </div>


          {
            isSignup ? (
              <p className='text-xs'>Have an account? try to login <button onClick={() => setIsSignup(false)} className='underline text-primary font-semibold'>here</button>.</p>
            ) :

            (
              <p className='text-xs'>Don't have an account? try to signup <button onClick={() => setIsSignup(true)} className='underline text-primary font-semibold'>here</button>.</p>
            )
          } 

        </div>


        <div className='hidden rounded-tr-3xl rounded-br-3xl bg-dark xl:flex xl:w-1/2 justify-center items-center flex-col gap-10'>
        
        <div className='relative'>
        <img className={`${!isSignup && "scale-0"} transition-all duration-500 w-72 absolute`} src={loginImg} alt='' />
        <img className={`${isSignup && "scale-0"} transition-all duration-500 w-72 relative `} src={signupImg} alt='' />
        </div>
        


        <div className='text-center w-full'>
          <div className='relative w-full flex justify-center'>
            <h2 className={`${!isSignup && "-translate-y-10 opacity-0"} absolute transition-all duration-500 text-white text-xl font-bold`}>Create your account</h2>
            <h2 className={`${isSignup && "-translate-y-10 opacity-0"} relative transition-all duration-500 text-white text-xl font-bold`}>Login your account</h2>
          </div>
          <p className="text-primary font-semibold text-xs mt-3">Enjoy our platform!</p>
        </div>

        <div className='flex gap-2'>
          <div className='bg-white rounded-full w-8 h-2'></div>
          <div className='bg-darkGray rounded-full w-2 h-2'></div>
          <div className='bg-darkGray rounded-full w-2 h-2'></div>
        </div>         
      </div>
      </div>
    </Element>
  )
}
