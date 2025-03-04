
import React, { useState, useEffect } from "react";
import styles from "../../styles/organization/Departments.module.css";
import AddOrganisation from "@/components/organisation/addOrganisation";
import AddDepartment from "@/components/organisation/addDepartment";
import {
  useGetAllDepartmentsQuery,
  useGetAllTeamsQuery
} from '@/store/services/organizationsApi'

const Departments = () => {
  const [isPopup, setIsPopup] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { data: GetDepartmentData, refetch: refetchDepartmentData }: any = useGetAllDepartmentsQuery('')
  const { data: GetTeamData }: any = useGetAllTeamsQuery('')
  const getDat = GetDepartmentData?.data
  console.log({ GetDepartmentData, GetTeamData });
  console.log({ data: getDat });
  useEffect(() => {
    refetchDepartmentData()
  }, [])
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Departments</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton} onClick={() => setIsPopup(!isPopup)} >Add</button>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <h4 className={styles.tableHeading}>Departments</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SIZE</th>
            </tr>
          </thead>
          <tbody>
            {getDat?.map(( ele:any, index:any ) => {
            
              return (
                <tr key={index}>
                  <td>{ele?.departmentName}</td>
                  <td>{ele?.size}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <AddDepartment setIsPopup={setIsPopup} isPopup={isPopup} />
    </div>
  );
};

export default Departments;
