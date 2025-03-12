import { useEffect, useState } from "react";
import styles from "@/styles/components/employees/AddEmployee.module.css";
import { useAddEmployeeManageMutation, useEditEmployeeManageMutation, useEmployeeManageDetailsMutation, useSeeAllEmployeeManageQuery, useSeeAllPositionsQuery } from '@/store/services/EmployeesApi';
import {
  useGetAllDepartmentsQuery,
  useGetAllTeamsQuery,
} from "@/store/services/organizationsApi";

import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';

interface Employee {
  userId: string;
  fullName: string;
  approval_policy: string;
  date: string;
  employee: string;
  team: string;
  status: string;
  _id: string;
}
const AddEmployee = ({ setOpenAdd, openAdd, getEmployeeId }: any) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  console.log('getEmployeeId', getEmployeeId)
  const [email, setEmail] = useState('')
  const [joiningDate, setJoiningDate] = useState('')
  const [team, setTeam] = useState('')
  const [position, setPosition] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [fullName, setFullName] = useState('')
  const { data: GetDepartment }: any = useGetAllDepartmentsQuery('')
  const { data: GetTeam }: any = useGetAllTeamsQuery('')
  const { data: GetPosition }: any = useSeeAllPositionsQuery('')
  const getDepartmentData = GetDepartment?.data
  const getTeamData = GetTeam?.data
  const getPositionData = GetPosition?.data

  const [employeeAdd]: any = useAddEmployeeManageMutation();
  const [employeeUpdate]: any = useEditEmployeeManageMutation();
  const [allEmplyee]: any = useEditEmployeeManageMutation();


  const [employeeDetails] = useEmployeeManageDetailsMutation();

  const selectedEmployeeForEdit = async (getEmployeeId: string) => {
    try {
      const response: any = await employeeDetails(getEmployeeId).unwrap();
      console.log("Edited Employee", response);
      if (response?.data) {
        Object.keys(response?.data).forEach(key => {
          setValue(key, response?.data[key]);
        });
      }

    } catch (error) {
      console.error("Failed to edit employee:", error);
    }
  };

  const onSubmit = async (data: any) => {
    console.log('getEmployeeId', getEmployeeId)
    let res: any = getEmployeeId ? await employeeUpdate({ id: getEmployeeId, data: data }) : await employeeAdd(data)

    if (res?.data?.status === '201') {
      toast.success(`Employee ${getEmployeeId ? 'Update' : 'Added'} SucessFully`)
      setOpenAdd(false)
      allEmplyee()
    }
  };

  useEffect(() => {
    selectedEmployeeForEdit(getEmployeeId)
  }, [getEmployeeId]);

  return (
    <form className="popup" onSubmit={handleSubmit(onSubmit)}>

      <div className={`${styles.popup}`}>
        <h2 className={styles.heading}>Add Employee</h2>
        <div className={styles.imageContainer}>
          {/* Image Box */}
          <div className={styles.imageBox}></div>
          {/* Image URL Input */}
          <div className={styles.imageInput}>
            <label>Image URL(optional)</label>
            {/* <input type="text" placeholder="Image" /> */}
            <input type="text" placeholder="Image" {...register('imageUrl')} />

          </div>
        </div>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" {...register('fullName')} className={styles.input} required
          />
        </div>
        {/* Email and Phone */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" {...register('email')} className={styles.inputHalf} required />
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" placeholder="Phone" {...register('phone')} className={styles.inputHalf} required />
          </div>
        </div>
        {/* Username and Password */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Username</label>
            <input type="text" placeholder="Username" {...register('userName')} className={styles.inputHalf} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" {...register('password')} required />
          </div>
        </div>
        {/* Joining Date */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Joining Date</label>
            <input type="date" {...register('joiningDate')} className={styles.input} required />
          </div>
          <div>
            <label>Department</label>
            <select {...register('department')}>
              {getDepartmentData?.map((ele: any, index: any) => (
                <option key={index} value={ele.departmentName}>{ele.departmentName}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Position and Team */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Position</label>
            <select {...register('position')}>
              {getPositionData?.map((item: any, index: any) => (
                <option key={index} value={item.positionName}>{item.positionName}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Team</label>
            <select {...register('team')}>
              {getTeamData?.map((item: any, index: any) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          className={styles.saveButton}
          type="submit"
        >
          Save
        </button>
        <button className={styles.cancelButton} onClick={() => setOpenAdd(!openAdd)} >Cancel</button>
      </div>
    </form>

  );
};

export default AddEmployee