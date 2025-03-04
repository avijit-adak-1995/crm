import React, { useState, useEffect } from "react";
import styles from "../../styles/sales/Invoices.module.css";
import Table from "@/components/employees/Table";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "ESTIMATE NUMBER",
  "INVOICE DATE",
  "DUE DATE",
  "TOTAL VALUE",
  "TAX",
  "DISCOUNT",
  "CONTACT",
  "STATUS",
];
const getEmplyeeData = [
  ...Array(12).fill({
    estimate_number: "90908888",
    invoice_date: "31/12/2022",
    due_date: "31/12/2022",
    total_value: "INR 1,00,000",
    tax: "9%",
    discount: "3%",
    status: true,
  }),
];
const Invoices = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Invoices</h5>

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
        <div className={styles.browse}>
          <img src="/assets/tasks/browse.svg" alt="" />
          <span>History</span>
        </div>
      </div>

      <Table tableName={`Invoice`} tableTitle={tableTitle}>
        <tbody>
          {/* <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr> */}
          {getEmplyeeData?.map((item: any, i: number) => (
            <tr key={i} style={{ borderBottom: "1px solid #E2E8F0" }}>
              <td>{item.estimate_number}</td>
              <td>{item.invoice_date}</td>
              <td>{item.due_date}</td>
              <td>{item.total_value}</td>
              <td>{item.tax}</td>
              <td>{item.discount}</td>
              <td>
                <div
                  style={{
                    padding: "5px",
                    alignItems: "center",
                    gap: "3px",
                    borderRadius: "50px",
                    background: "rgba(59, 203,190, 0.50)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      margin: "0 2px",
                      padding: "2px 4px",
                      height: "20px",
                      width: "20px",
                      background: "#F56D58",
                      alignContent: "center",
                    }}
                  >
                    <span className={styles.textStyle}>M</span>
                  </div>
                  <span
                    style={{
                      color: "#A0AEC0",
                      fontFamily: "Helvetica",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "700px",
                      lineHeight: "140%",
                    }}
                  >
                    Client M
                  </span>
                </div>
              </td>

              <td>
                <button>{item.status ? "Accepted" : "Not-Accepted"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <div className={styles.AddWrapper}>
        <div>
          <div>
            <label>Job Title</label>
            <input type="text" placeholder="Job Title" />
          </div>
          <div>
            <label>Contact</label>
            <input type="select" placeholder="Job Title" />
          </div>
        </div>

        <div>
          <label>Job Title</label>
          <input type="date" placeholder="Dec 28,2022" />
        </div>

        <div>
          <label>Author</label>
          <input type="text" placeholder="Author" />
        </div>

        <div>
          <label>Job Post URL</label>
          <input type="text" placeholder="Job Post URL" />
        </div>

        <div>
          <label>Teams</label>
          <input type="text" placeholder="Teams" />
        </div>
        <div>
          <label>Tags</label>
          <input type="select" placeholder="Teams" />
        </div>
        <div>
          <label>Status</label>
          <input type="select" placeholder="Teams" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div> */}
    </div>
  );
};

export default Invoices;
