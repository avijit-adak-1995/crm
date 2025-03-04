import styles from "@/styles/components/employees/AddEmployee.module.css";
import { useState } from "react";
import {useAddPositionMutation} from '@/store/services/EmployeesApi'
import { toast } from "react-toastify";


const AddPositions = ({ setOpenAdd, openAdd }: any) => {
  const [AddPosition]:any=useAddPositionMutation()
  const [positionName, setPositionName] = useState("");
  const [tag, setTag]=useState('')
 const handlePosition=async()=>{
  const data={
    positionName:positionName,
    tag:tag
  }
  const res:any=await AddPosition(data)
  console.log({res:res?.data});
  if (res?.data?.status===201) {
    toast.success('Positions Added')
  }else{
    toast.warn('Failed to add Position')
  }
  
 }
  return (
    <div className={`${styles.popup}`}>
      <h2 className={styles.heading}>Add Positions</h2>

      {/* Full Name */}
      <div className={styles.formGroup}>
        <label>Position Name</label>
        <input
          type="text"
          placeholder="position name"
          className={styles.input}
          value={positionName}
          onChange={(e) => setPositionName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Tag Name</label>
        <input
          type="text"
          placeholder="tag name"
          className={styles.input}
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <div className={styles.inviteButtonDiv}>
        <button className={styles.saveButton} onClick={handlePosition} >Add</button>
        <button
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPositions;
