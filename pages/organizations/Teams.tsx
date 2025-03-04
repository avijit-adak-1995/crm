import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/organization/Teams.module.css";
import AddTeam from "@/components/organisation/addTeam";
import {
  useGetAllTeamsQuery
} from '@/store/services/organizationsApi'



const Teams = () => {
  const [employees, setEmployees] = useState([]);
  const [project, setProject] = useState<string>("All Project");
  const [allEmployees, setAllEmployees] = useState<string>("All Employees");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isPopup, setIsPopup] = useState(false)
  const { data: GetTeam }:any = useGetAllTeamsQuery('')
  
  const getTeamData=GetTeam?.data
  console.log({getTeamData});
  
 


  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Teams</h6>

      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton} onClick={() => setIsPopup(!isPopup)} >Add</button>
            <select
              className={styles.dropdown}
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="All Projects">All Projects</option>
              {/* Add more options if needed */}
            </select>
            <select
              className={styles.dropdown}
              value={allEmployees}
              onChange={(e) => setAllEmployees(e.target.value)}
            >
              <option value="All Employees">All Employees</option>
              {/* Add more options if needed */}
            </select>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeadText}><h5>Teams</h5></div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>TEAM NAME</th>
                <th>MANAGER NAME</th>
                <th>Project</th>
                <th>TEAM</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {
               getTeamData?.map((item:any, index:any)=>{
                return(
                  <tr key={index} >
                     <td>{item?.name}</td>
                     <td>{item?.memberName}</td>
                     <td>{item?.projectName}</td>
                     <td>{item?.tag}</td>
                     <td>{item?.isAproved ? 'Aproved':'Unaproved'}</td>
                  </tr>
                )
               })
              }
            </tbody>
          </table>
        </div>
      </div>
      <AddTeam setIsPopup={setIsPopup} isPopup={isPopup} />
    </div>

  );
};

export default Teams;
