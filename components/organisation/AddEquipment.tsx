import { useEffect, useState } from "react";
import styles from "@/styles/components/employees/AddEmployee.module.css";
import { useEditEmployeeManageMutation, useSeeAllPositionsQuery } from '@/store/services/EmployeesApi';
import {
    useAddEquipmentMutation,
  useGetAllDepartmentsQuery,
  useGetAllTeamsQuery,
  useGetEquipmentByIdMutation,
  useUpdateEquipmentMutation,
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
const AddEquipment = ({ setOpenAdd, openAdd, getEquipmentId }: any) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  console.log('getEquipmentId', getEquipmentId)
  const { data: GetDepartment }: any = useGetAllDepartmentsQuery('')
  const { data: GetTeam }: any = useGetAllTeamsQuery('')
  const { data: GetPosition }: any = useSeeAllPositionsQuery('')

  const [equipmentAdd]: any = useAddEquipmentMutation();
  const [equipmentUpdate]: any = useUpdateEquipmentMutation();
  const [allEmplyee]: any = useEditEmployeeManageMutation();


  const [equipmentDetails] = useGetEquipmentByIdMutation();

  const selectedEquipmentForEdit = async (getEquipmentId: string) => {
    try {
      const response: any = await equipmentDetails(getEquipmentId).unwrap();
      if (response?.data) {
        Object.keys(response?.data).forEach(key => {
          setValue(key, response?.data[key]);
        });
      }

    } catch (error) {
      console.error("Failed to edit equipment:", error);
    }
  };

  const onSubmit = async (data: any) => {
    console.log('getEquipmentId', getEquipmentId)
    let res: any = getEquipmentId ? await equipmentUpdate({ id: getEquipmentId, data: data }) : await equipmentAdd(data)

    if (res?.data?.status === '201') {
      toast.success(`Equipment ${getEquipmentId ? 'Update' : 'Added'} SucessFully`)
      setOpenAdd(false)
      allEmplyee()
    }
  };

  useEffect(() => {
    selectedEquipmentForEdit(getEquipmentId)
  }, [getEquipmentId]);

  return (
    <form className="popup" onSubmit={handleSubmit(onSubmit)}>

      <div className={`${styles.popup}`}>
        <h2 className={styles.heading}>Add Equipment</h2>
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
          <input type="text" placeholder="Full Name" {...register('name')} className={styles.input} required
          />
        </div>
        {/* Email and Phone */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Type</label>
            <input type="text" placeholder="Type" {...register('type')} className={styles.inputHalf} required />
          </div>
          <div>
            <label>Manufactured Year</label>
            <input type="text" placeholder="Manufactured Year" {...register('manufacturedYear')} className={styles.inputHalf} required />
          </div>
        </div>
        {/* Username and Password */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>SN</label>
            <input type="text" placeholder="SN" {...register('sn')} className={styles.inputHalf} required />
          </div>
          <div>
            <label>Max Share Period</label>
            <input type="text" placeholder="Max Share Period" {...register('maxSharePeriod')} required />
          </div>
        </div>
        {/* Joining Date */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Initial Cost</label>
            <input type="text" {...register('cost')} placeholder="Initial Cost" className={styles.input} required />
          </div>
          <div>
            <label>Department</label>
            <select {...register('currency')}>
              {/* {getDepartmentData?.map((ele: any, index: any) => (
                <option key={index} value={ele.departmentName}>{ele.departmentName}</option>
              ))} */}
            <option value={'dollar'}>Dollar</option>

            </select>
          </div>
        </div>
        {/* Position and Team */}
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

export default AddEquipment