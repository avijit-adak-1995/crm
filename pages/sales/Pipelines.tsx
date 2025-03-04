import React, { useState, useEffect } from "react";
import styles from "../../styles/sales/Pipelines.module.css";
import Styles from "@/styles/dashboard/dashboard.module.css";
import Table from "@/components/employees/Table";

const tableTitle = [
  "NAME",
  "DESCRIPTION",
  "STAGE",
  "STATUS",
];
const placeHolder = ["Name", "Description"];
const getEmplyeeData = [
  ...Array(6).fill({
    name: "Waters - Harris",
    description: "Chief",
    stage: "-",
    status: true,
  }),
];
const Pipelines = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Pipelines</h5>

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
                All Project <img src="/assets/down.svg" alt="" />
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

      <div className="d-flex px-4 gap-4">
        <div className={styles.browse}>
          <img src="/assets/tasks/browse.svg" alt="" />
          <span>Browse</span>
        </div>
        <div className={styles.browse}>
          <img src="/assets/tasks/search.svg" alt="" />
          <span style={{ color: "#5D5FEF" }}>Search</span>
        </div>
      </div>

      <Table tableName={`Pipelines`} tableTitle={tableTitle}>
        <tbody>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {getEmplyeeData?.map((item: any, i: number) => (
            <tr key={i} style={{ borderBottom: "1px solid #E2E8F0" }}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.stage}</td>

              <td>
                <button>{item.status ? "Active" : "InActive"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Pipelines;
