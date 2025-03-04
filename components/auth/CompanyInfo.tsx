import React, { useState } from 'react'
import Styles from '@/styles/auth/signIn.module.css'
import { useUserRegisterMutation } from '@/store/services/authApi'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CompanyInfo = ({handleItemClick}:any) => {
    const router=useRouter()
    const [organisationName, setOrganisationName]=useState('')
    const [address, setAddress]=useState('')
    const [region, setRegion]=useState('')
    const [UserOrganisation]: any = useUserRegisterMutation();
    const [No_Of_Empl, setNo_Of_Empl]=useState('')
    const email:any=localStorage.getItem('userEmail')
    const userEmail=JSON.parse(email);
    const handleRegister=async()=>{
       
        const data = {
            organisationName: organisationName,
            email: userEmail,
            address: address,
            No_Of_Empl:No_Of_Empl,
            region:region,
            userDatatype:'orgName'
          }
        const res:any=await UserOrganisation(data);
        if (res?.data?.data?.token !==undefined) {
          localStorage.setItem('userToken', JSON.stringify(res?.data?.data?.token))
          localStorage.removeItem('userEmail')
          toast.success('Organisation Updated Sucessfully')
          router.push('/dashboard')
        }
        
        
    }
  return (
    <>
     <div className={Styles.formContainer}>
        <h3 className='text-center mb-3'>Update Organisation Info</h3>
        {/* <div className={Styles.img_container} >
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
        </div> */}
        <div >
          <div className='mb-3' >
            <label className='form-label'>Organisation Name</label>
            <input type="text" className='form-control' placeholder='Your Organisation Name'
              value={organisationName}
              onChange={(e) => setOrganisationName(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>Address</label>
            <input type="text" className='form-control' placeholder='Your Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>Regions</label>
            <input type="text" className='form-control' placeholder='Your Regions'
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
          <div className='mb-3' >
            <label className='form-label'>No. of Employee</label>
            <input type="text" className='form-control' placeholder='No. of Employee'
              value={No_Of_Empl}
              onChange={(e) => setNo_Of_Empl(e.target.value)}
            />
          </div>
         
          <button className={Styles.btn}
            // onClick={() => props.handleItemClick('verifyOtp')} 

            onClick={() => handleRegister()}

          >Update Organisation Info</button>
          {/* <p className='text-center'>Already have an account?
            <strong onClick={() => props.handleItemClick('login')} > Sign In</strong></p> */}
        </div>
      </div>
    </>
  )
}

export default CompanyInfo