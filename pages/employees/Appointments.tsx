import React, { useState, useEffect } from "react";
import styles from "@/styles/employees/Appointments.module.css";
import Styles from "@/styles/dashboard/dashboard.module.css";

const Appointments = () => {
  const [employees, setEmployees] = useState<string[]>([
    "all day",
    "12am",
    "",
    "1am",
    "",
    "2am",
    "",
    "3am",
    "4am",
    "",
    "5am"
  ]);
  const [weekly, setWeekly] = useState<string>("All Project");
  const [flag, setFlag] = useState(true);


  
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Appointments</h6>
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
                onClick={() => {}}
              >
                Add
              </span>
              <span onClick={()=>setFlag(!flag)} style={{cursor:"pointer"}}>
                {flag ? "Week" :"Month"}
                <img src="/assets/down.svg" alt="" />
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
      {flag ? 
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h6>Jan 1 - 7, 2023</h6>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Sun 1/1</th>
              <th>Tru 1/5</th>
              <th>Fri 1/5</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: string, index: number) => (
              <tr key={employee}>
                <td>{employee}</td>
                <td></td>
                <td
                  style={{
                    backgroundColor: index >= 2 && index <= 7 ? "#86DED6" : "",
                  }}
                ></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        :
      <div className={styles.tableContainerMonth}>
        <div className={styles.tableHeader}>
          <h6>January 2023</h6>
        </div>
        <table className={styles.tableMonth} style={{ borderSpacing: "8px" }}>
          <tbody>
            {[...Array(4)].map((e, i: number) => (
              <tr key={i}>
                <td>{7 * i + 1}</td>
                <td>{7 * i + 2}</td>
                <td>{7 * i + 3}</td>
                <td>{7 * i + 4}</td>
                <td>{7 * i + 5}</td>
                <td>{7 * i + 6}</td>
                <td>{7 * i + 7}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default Appointments;
