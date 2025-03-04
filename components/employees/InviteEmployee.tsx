import styles from "../../styles/components/employees/InviteEmployee.module.css";
import { useGetAllDepartmentsQuery, useGetAllTeamsQuery } from '@/store/services/organizationsApi';
import {useInviteEmployeeManageMutation} from '@/store/services/EmployeesApi'
import { useState } from "react";
import { toast } from "react-toastify";
const InviteEmployee = ({ setOpenInvite, openInvite }: any) => {
    const [inviteEmployee]:any=useInviteEmployeeManageMutation()
    const { data: GetDepartment }: any = useGetAllDepartmentsQuery('');
    const { data: GetTeam }: any = useGetAllTeamsQuery('')
    const getDepartmentData = GetDepartment?.data;
    const getTeamData = GetTeam?.data

    const [email, setEmail]=useState('')
    const [departmentId, setDepartmentId]=useState('')
    const [teamId,setTeamId]=useState('')
    const [joiningDate, setJoiningDate]=useState('')
    const [invitationExpiration, setInvitationExpiration]=useState('')
    const handleInvite=async()=>{
        const data={
            email:email,
            departmentId:departmentId,
            teamId:teamId,
            joiningDate:joiningDate,
            invitationExpiration:invitationExpiration
        }
     const res:any=await inviteEmployee(data)
     console.log({res:res?.data?.status});
     if (res?.data?.status===200) {
        toast.success('Invited sucessfully')
        setOpenInvite(false)
     } else {
        toast.warn('Failed to invite')
     }
    }
    
    
   
    return (
        <div className={`${styles.popup}`}>
            <h2 className={styles.heading}>Invite Employee</h2>
            {/* Full Name */}
            <div className={styles.formGroup}>
                <label>Email addresses</label>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.inputHalf}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            {/* Username and Password */}
            <div className={`${styles.formGroup} ${styles.dualInput}`}>
                <div>
                    <label htmlFor="departmentSelect">Department</label>
                    <select id="departmentSelect"  onChange={(e)=>setDepartmentId(e.target.value)} >
                        {getDepartmentData?.length>0 ?
                        getDepartmentData?.map(( ele:any, index:any) => (
                            <option key={index} value={ele?.departmentName} >{ele?.departmentName}</option>
                        )):
                        <option>select Department</option>
                        }
                    </select>
                   <div>
                   
                  
                   </div>
                </div>
                <div>
                    <label>Team</label>
                    <select onChange={(e)=>setTeamId(e.target.value)}>
                        {getTeamData?.map((item:any, index:any)=>{
                         return(
                            <option key={index} value={item?.name} >{item?.name}</option>
                         )
                        })}
                    </select>
                </div>
            </div>
            {/* Joining Date */}
            <div className={styles.formGroup}>
                <label>Joining Date</label>
                <input
                    type="date"
                    placeholder="Joining Date"
                    className={styles.input}
                    value={joiningDate}
                    onChange={(e)=>setJoiningDate(e.target.value)}
                />
            </div>
            {/* Position and Team */}
            <div className={`${styles.formGroup}`}>
                <label>Invition expiration</label>
                <input
                    type="text"
                    placeholder="Invition Expiration"
                    className={styles.inputHalf}
                    value={invitationExpiration}
                    onChange={(e)=>setInvitationExpiration(e.target.value)}
                />
            </div>
            {/* Save Button */}
            <div className={styles.inviteButtonDiv}>
                <button className={styles.saveButton} onClick={handleInvite} >Invite</button>
                <button className={styles.cancelButton} onClick={() => setOpenInvite(!openInvite)} >Cancel</button>
            </div>
        </div>
    );
};

export default InviteEmployee;