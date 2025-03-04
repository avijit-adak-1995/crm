import React, { useState } from 'react'
import Styles from '@/styles/auth/signIn.module.css'
import { useUserRegisterMutation } from '@/store/services/authApi'
import { toast } from 'react-toastify'


const SignUp = (props: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Userregister]: any = useUserRegisterMutation();
  const data = {
    name: name,
    email: email,
    password: password,
    userDatatype:'user_info'
  }
  const handleRegister = async () => {

    if (name !== '' && email !=='' && password !=='') {
      const res: any = await Userregister(data)
      console.log({res:res?.data?.data?.token}); 

      if (res?.data?.status === 'PENDING') {
        localStorage.setItem('userToken', JSON.stringify(res?.data?.data?.token))
        localStorage.setItem('userEmail', JSON.stringify(email))


        toast.success(`Registered User Sucessfully and Verification OTP sent on ${email}`)
        props.handleItemClick('verifyOtp')
      }
    }else{
      toast.warn('All fields Required')
    }

  }

  return (
    <>
      <div className={Styles.formContainer}>
        <h3 className='text-center mb-3'>Register with</h3>
        <div className={Styles.img_container} >
          <div>
            <img src="/assets/facebook.svg" alt="" />
          </div>
          <div>
            <img src="/assets/apple.svg" alt="" />

          </div>
          <div>
            <img src="/assets/google.svg" alt="" />

          </div>
        </div>
        <div className={`text-center my-2 ${Styles.orDiv}`}>
          or
        </div>
        <div >
          <div className='mb-3' >
            <label className='form-label'>Name</label>
            <input type="text" className='form-control' placeholder='Your full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>Email</label>
            <input type="email" className='form-control' placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>Password</label>
            <input type="password" className='form-control' placeholder='Your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={Styles.formRem}>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" >Remember me</label>
            </div>

          </div>
          <button className={Styles.btn}
            // onClick={() => props.handleItemClick('verifyOtp')} 

            onClick={() => handleRegister()}

          >SIGN UP</button>
          <p className='text-center'>Already have an account?
            <strong onClick={() => props.handleItemClick('login')} > Sign In</strong></p>
        </div>
      </div>
    </>
  )
}

export default SignUp