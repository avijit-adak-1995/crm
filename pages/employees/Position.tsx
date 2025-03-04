
import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Position.module.css";
import Styles from "@/styles/dashboard/dashboard.module.css";

import AddPositions from "@/components/employees/AddPositions";
import {useSeeAllPositionsQuery} from '@/store/services/EmployeesApi'

const Position= () => {
  const {data:GetPosition}:any=useSeeAllPositionsQuery('')
  const [openAdd, setOpenAdd] = useState(false)
  const [showActions, setShowActions] = useState(-1);
  const getPositionData=GetPosition?.data
  console.log({getPositionData});
  
  
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Positions</h6>

      <div className="row">
        <div className="col-12">
          <div className={Styles.date}>
            <div style={{ gap: "20px" }}>
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  background: "#F56D58",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpenAdd(!openAdd);
                }}
              >
                Add
              </span>
              <span>
                All Employees <img src="/assets/down.svg" alt="" />
              </span>
              <span>
                01.01.2023 - 31.01.2023{" "}
                <img src="/assets/sidebar/date.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.level}>
        <h4>Positions</h4>
        <div>
          <p>TITLE</p>
        </div>
        <div>
          <input type="text" placeholder="Positions" />
        </div>
        {[
          "CEO",
          "Team Lead",
          "Senior Software Developer",
          "Junior Software Developer",
          "CTO",
        ].map((e) => (
          <div>
            <h5>{e}</h5>
          </div>
        ))}
      </div> */}

      <h5 className={styles.tableHeader}>Positions</h5>
      <div className={styles.tableContainer}>
        {getPositionData?.map((item:any,index:any)=>{
          return(
            <div key={index} className={styles.tableItem} >
              <span>{item?.positionName}</span>
              <span><img src="/assets/icons8.png" alt="" /></span>
            </div>
          )
        })}
      </div>
      {openAdd && <AddPositions setOpenAdd={setOpenAdd} openAdd={openAdd} />}
    </div>
  );
};

export default Position;
