import React from 'react'
import Styles from '@/styles/auth/signIn.module.css'

const ForgotPasswoed = (props:any) => {
  return (
    <div className={Styles.formContainer}>
      <h3 className='text-center mb-5'>Enter your email to get OTP</h3>

      <div className='my-5' >
        <label className='form-label'>Email</label>
        <input placeholder='Enter your email' type="email" className='form-control' />
      </div>


      <button className={Styles.btn} onClick={()=>props.handleItemClick('verifyOtp')} >SEND OTP</button>
       <p style={{cursor:'pointer'}} className='text-center' onClick={()=>props.handleItemClick('login')}>Sign In</p>
    </div>

  )
}

export default ForgotPasswoed