import React, { useState } from 'react'
import Input from '../formElement/Input'
import {useAddTeamMutation} from '@/store/services/organizationsApi'
import { toast } from 'react-toastify'
const AddTeam = ({ setIsPopup, isPopup }: any) => {
    const [name, setName] = useState('')
    const [projectName, setProjectName] = useState('')
    const [memberName, setMemberName] = useState('')
    const [tag, setTag] = useState('')
    const [AddTeam]:any=useAddTeamMutation()
    const handleAddTeam=async()=>{
        const data={
            name:name,
            projectName:projectName,
            memberName:memberName,
            tag:tag
        }
        const res:any=await AddTeam(data)
        console.log({res:res.data});
        if (res?.data?.status==='201') {
            setIsPopup(false)
            toast.success('Team created Sucessfully')

        }else{
            toast.warn('Failed to create')
        }
        
    }
    console.log({name:name,
        projectName:projectName,
        memberName:memberName,
        tag:tag});
    
    return (
        isPopup && 
            <div className={`popup-container`} >
                <div className='popupBody'>
                    <span onClick={() => setIsPopup(!isPopup)} >Cancel</span>
                    <h2 className='text-white' >Add Team</h2>
                    <Input 
                    label='Add Team Name'
                    placeholder='Add Team Name'
                    value={name}
                    setValue={setName} />
                    <Input 
                    label='Add Project'
                    placeholder='Add Project'
                    value={projectName}
                    setValue={setProjectName}
                    />
                    <Input 
                    label='Add Member'
                    placeholder='Add Member'
                    value={memberName}
                    setValue={setMemberName}
                    />
                    <Input 
                    label='Add Tag'
                    placeholder='Add Tag'
                    value={tag}
                    setValue={setTag}
                    />
                    <button onClick={handleAddTeam} >Add Team</button>
                </div>
            </div>
    
    )
}

export default AddTeam