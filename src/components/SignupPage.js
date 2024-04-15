import React from 'react'

export default function LoginPage() {
  return (
    <div className='h-screen bg-dark flex justify-center items-center'>
        
      <div className='login-signup-con relative mt-14 w-11/12'>
        <form className='card rounded-xl bg-white h-full w-full flex flex-col justify-between items-center pb-5 pt-14'>

            <div className='text-center'>
              <h2 className='text-xl font-bold'>Join to our community!</h2>
              <p className='text-sm text-primary font-semibold mt-2'>Let's reach thoes goals</p>
            </div>

          <div className='input-fields w-full flex flex-col items-center gap-8'>

            <div>
                <input value="" id='email' />
                <label>Email</label>
                <i></i>
            </div>

            <div>
                <input type='password' value="" id='new-pass' />
                <label>Password</label>
                <i></i>
            </div>

            <div>
                
                <input type='password' id="confirm-pass" value="" />
                <label>Confirm Password</label>
                <i></i>
            </div>

            <div>
                <img src='' alt='' />
                <p className='text-sm'>show password</p>
            </div>
            
          </div>


          <p className='text-sm'>Have an account? try to login here.</p>
        </form>
      </div>

      <div>
        <img src="" alt='' />
      </div>
    </div>
  )
}
