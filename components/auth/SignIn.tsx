import React, { useState } from 'react'
import Styles from '@/styles/auth/signIn.module.css'
import { useUserLoginMutation } from '@/store/services/authApi'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const SignIn = (props: any) => {
  const router = useRouter()
  const [isLoading, setIsLoading]=useState(false)
  const [email, setEmail] = useState();
  const [password, SetNewPassword] = useState()
  const [Userlogin]: any = useUserLoginMutation();
  const data = {
    email: email,
    password: password
  }
  const handleLogin = async () => {
    if (email !== undefined && password !== undefined) {
      setIsLoading(true)
      const login: any = await Userlogin(data)
      console.log({login});
      
      if (login?.data?.status === 200) {
        setIsLoading(false)
        localStorage.setItem('userToken', JSON.stringify(login.data.Token))

        toast.success('Sucessfully logged in')
        router.push('/dashboard')
      } else {
        toast.warn('Login Failed ! Try Again')
      }
    } else {
      toast.warn('Email & Password Required')
    }
  }
  return (
    <>
      <div className={Styles.formContainer}>
        <h3 className='text-center mb-3'>Login with</h3>
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
        <div className={`text-center my-4 ${Styles.orDiv}`}>
          or
        </div>
        <div >
          <div className='mb-3' >
            <label className='form-label mt-2'>Email</label>
            <input type="email" className='form-control' placeholder='Your email address'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>Password</label>
            <input type="password" className='form-control' placeholder='Your password'
              value={password}
              onChange={(e: any) => SetNewPassword(e.target.value)}

            />
          </div>
          <div className={`my-4 ${Styles.formRem}`}>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" >Remember me</label>
            </div>
            <div>
              <span onClick={() => props.handleItemClick('forgotpassword')} >Forget Password?</span>
            </div>
          </div>
          <button className={Styles.btn} onClick={handleLogin} >{isLoading ? 'Loading...':'Sign In'}</button>
          <p className='text-center'>Don't have an account?
            <strong onClick={() => props.handleItemClick('register')} > Sign Up</strong></p>
        </div>
      </div>
    </>
  )
}

export default SignIn