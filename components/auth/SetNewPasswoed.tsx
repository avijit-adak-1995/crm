import React from 'react'
import Styles from '@/styles/auth/signIn.module.css'

const SetNewPasswoed = (props:any) => {
  return (
    <div className={Styles.formContainer}>
      <h3 className='text-center mb-5'>Create a new password</h3>

      <div className='mb-3' >
        <label className='form-label'>New Password</label>
        <input type="password" className='form-control' placeholder='New Your password' />
      </div>

      <div className='mb-3' >
        <label className='form-label'>Confirm New Password</label>
        <input type="password" className='form-control' placeholder='Confirm Your password' />
      </div>
      <button className={Styles.btn} onClick={()=>props.handleItemClick('login')} >SET NEW PASSWORD</button>

    </div>
  )
}

export default SetNewPasswoed