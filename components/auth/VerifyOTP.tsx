import React, { useState } from 'react'
import Styles from '@/styles/auth/signIn.module.css'
import { useUserOTPVerifyMutation } from '@/store/services/authAPIs'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


const VerifyOTP = (props: any) => {
    const router=useRouter();
    const [error , setError] = useState(false)
    const [verifyOtp]: any = useUserOTPVerifyMutation()
    const [inputValues, setInputValues] = useState<string[]>(['', '', '', '']);

    const handleInputChange = (index: number, value: string) => {
        setInputValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = value;
            return updatedValues;
        });
    };
    const combinedValue: string = inputValues.join('');
    console.log({ combinedValue });

    const handleVerifyOTP = async () => {
        const res: any = await verifyOtp({ otp: combinedValue })

        if (res?.data?.status === true) {
            // router.push('/dashboard')
            props.handleItemClick('orgInfo')
            toast.success('OTP verified sucessfully')

        }

        // props.handleItemClick('resetPass')
    }
    return (
        <div className={Styles.formContainer}>
            <h3 className='text-center mb-5'>Enter OTP</h3>

            <div className={error?Styles.errorOtpcontainer:Styles.optcontainer} > 
                {inputValues.map((value, index) => (
                    <span key={index}>
                        <input type="text" value={value} onChange={(e) => handleInputChange(index, e.target.value)} />
                    </span>
                ))}
                {/* <span><input type="text" onChange={(e: any) => handleInputChange(0, e.target.value)} /></span>
                <span><input type="text" onChange={(e: any) => handleInputChange(1, e.target.value)} /></span>
                <span><input type="text" onChange={(e: any) => handleInputChange(2, e.target.value)} /></span>
                <span><input type="text" onChange={(e: any) => handleInputChange(3, e.target.value)} /></span> */}

            </div>
            {error&&<p className='text-danger ms-5 ps-1 fs-6 mt-4'>oops! wrong OTP</p>}
            <p className='text-center mt-4'><strong className="fw-normal">Resend OTP</strong></p>

            <button className={Styles.btn} onClick={() => handleVerifyOTP()} >Verify OTP</button>
            <p className='text-center' style={{cursor:'pointer'}}  onClick={() => props.handleItemClick('register')} >Sign Up</p>
        </div>
    )
}

export default VerifyOTP