import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Timeoff.module.css";
import Table from "@/components/employees/Table";
import AddHoliday from "@/components/employees/AddHoliday";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "NAME",
  "DESCRIPTION",
  "START",
  "END",
  "REQUEST DATE",
  "STATUS",
];

const placeHolder = ["Name", "Description", "Date"];

const Timeoff = () => {
  const [openAddHoliday, setOpenAddHoliday] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);


  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Timeoff</h5>

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
                  background: "#237DD8",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpenAddHoliday(!openAddHoliday);
                  setOpenAdd(false);
                }}
              >
                Add Holiday
              </span>
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
                  setOpenAddHoliday(false);
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

      <Table tableName={`Timeoff`} tableTitle={tableTitle}>
        <tbody>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {Array.from({ length: 11 }).map((item: any, i: number) => (
            <tr key={i}>
              <td>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt={item?.name}
                />
                <div>Random Guy</div>
              </td>
              <td>Time Off</td>
              <td>
                Wednessday, <br />
                January 18, 2023
              </td>
              <td>
                Wednessday, <br />
                January 18, 2023
              </td>
              <td>
                Wednessday, <br />
                January 18, 2023
              </td>
              <td>
                <button>Active</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {openAddHoliday && (
        <AddHoliday setOpenAdd={setOpenAddHoliday} openAdd={openAddHoliday} />
      )}
    </div>
  );
};

export default Timeoff;
