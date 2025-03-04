import React, { useState, useEffect } from "react";
import styles from "../../styles/sales/Proposals.module.css";
import Table from "@/components/employees/Table";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "DATE",
  "JOB TITLE",
  "JOB POST URL",
  "CONTACT",
  "AUTHOR",
  "STATUS",
];

const getEmplyeeData = [
  ...Array(12).fill({
    date: "01/01/2023",
    job_tittle: "Web Developer",
    job_post_url: "https://sample.com",
    contact: "jdhfjdh",
    author: "Mr. Author",
    status: true,
  }),
];
const Proposals = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openInvite, setOpenInvite] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Sales</h5>
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
                  setOpenInvite(false);
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

      <Table tableName={`Proposals`} tableTitle={tableTitle}>
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
              <td>{item.date}</td>
              <td>{item.job_tittle}</td>
              <td style={{ color: "#2684FF" }}>{item.job_post_url}</td>
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
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt={item?.name}
                />
                <div>Random Guy</div>
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

export default Proposals;
