import React, { useState, useEffect } from "react";
import styles from "../../styles/accounting/Expenses.module.css";
import Table from "@/components/employees/Table";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "Vendor",
  "DATE",
  "CATEGORY",
  "EMPLOYEE",
  "PROJECT",
  "VALUE",
  "NOTE",
  "PURPOSE",
  "STATUS"
];
const getEmplyeeData = [
  ...Array(12).fill({
    estimate_number: "Upwork",
    invoice_date: "31/12/2022",
    due_date: "Service Fee",
    total_value: "Website",
    tax: "-",
    discount: "-",
    purpose: "-",
    status: true,
  }),
];
const placeHolder = ["Vendor", "Estimate Date"]
const Expenses = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Expenses</h5>

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

      <Table tableName={`Expenses`} tableTitle={tableTitle}>
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
              <td>{item.estimate_number}</td>
              <td>{item.invoice_date}</td>
              <td>{item.due_date}</td>
              <td>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt={item?.name}
                />
                <div>Random Guy</div>
              </td>
              <td>{item.total_value}</td>
              <td>{item.tax}</td>
              <td>{item.discount}</td>
              <td>{item.purpose}</td>
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

export default Expenses;
