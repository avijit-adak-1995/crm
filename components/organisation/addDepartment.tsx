import React, { useState } from 'react'
import Styles from '@/styles/organization/Departments.module.css'
import Input from '../formElement/Input'
import {useAddDepartmentMutation} from '@/store/services/organizationsApi'
import { toast } from 'react-toastify'
const AddDepartment = ({isPopup,setIsPopup}:any) => {
    const [departmentName, setDepartmentName]=useState('')
    const [size, setSize]=useState('')
    const [addDepartment]:any=useAddDepartmentMutation()
    const handleAddDepartment=async ()=>{
        const data={
            departmentName:departmentName,
            size:size
        }
        const res:any=await addDepartment(data)
        console.log({res:res.data});
        if (res?.data?.status===201) {
            toast.success('Department Created Sucessfully')
            setIsPopup(false)
        }else{
            console.log('Failed to create:', res.data);
            toast.warn('Failed to create')
        }
        
    }
    return (
        isPopup && 
        <div className={`popup-container`} >
            <div className='popupBody'>
                <span onClick={()=>setIsPopup(!isPopup)} >Cancel</span>
                <h2 className='text-white' >Department</h2>
                <Input 
                label='Add Department'
                 type='text'
                  placeholder='Add Department' 
                  value={departmentName}
                  setValue={setDepartmentName}
                  />
                <Input 
                label='Add Size'
                placeholder='Add Size'
                value={size}
                setValue={setSize}
                />
               <button onClick={handleAddDepartment} >Add Department</button>
            </div>
        </div>
    )
}

export default AddDepartment